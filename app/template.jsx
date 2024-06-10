"use client"

import { useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';
import { getColorForExpression } from "@/lib/get-color-for-expression";
import { themes } from "@/lib/themes";
import { useConfig } from "@/hook/use-config";
import { LoaderIcon } from "lucide-react";
import { expressionAtom } from './../hook/use-expression';
import { useAtom } from "jotai";


export default function Template({ children }) {
  const videoRef = useRef(null);
  const [expression, setExpression] = useAtom(expressionAtom);
  const [config,setConfig] = useConfig();
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
      if (expression === null) {
          startVideo();
          loadModels();
      }
  }, [expression]);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stopVideoStream = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")
    ]).then(() => {
      DetectMyFaceExpression();
    });
  };

  const DetectMyFaceExpression = () => {
    const interval = setInterval(async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceLandmarks().withFaceExpressions();
        if (detections.length > 0) {
          clearTimeout(timeoutId)
          const detectedExpression = getDominantExpression(detections[0].expressions);
          
          const getColor = getColorForExpression(detectedExpression[0])

          const theme = themes.find((theme) => theme.name === getColor);

          setConfig({
            theme: theme.name,
            cssVars: theme.cssVars
          })

          setTimeout(() => {
            stopVideoStream();
            clearInterval(interval);
            setExpression(detectedExpression);
          }, 500);
        }else{
        const newTimeoutId = setTimeout(() => {
          stopVideoStream();
          clearInterval(interval);
          // const theme = themes.find((theme) => theme.name === "yellow");
          // setConfig({
          //   theme: theme.name,
          //   cssVars: theme.cssVars
          // })

          setExpression((prev) => {
            if (prev == null) {
              return ['happy', 1];
            }
            return prev;
          });


        }, 5000);
        setTimeoutId(newTimeoutId);
        }
      }
    }, 1000);

  };

  const getDominantExpression = (expressions)=> {
    const sortedExpressions = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
    return sortedExpressions[0];
  };

  return(
      <div>
          <video crossOrigin="anonymous" ref={videoRef} autoPlay style={{display:"none"}} ></video>
          {expression==null ?  
          <div className="flex justify-center items-center h-[400px]">
              <LoaderIcon className="h-6 w-6 text-primary animate-spin"/>
          </div> :<>{children}</> 
          } 
      </div>
  )
}