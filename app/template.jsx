"use client"

import { useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';
import { getColorForExpression } from "@/lib/get-color-for-expression";
import { themes } from "@/lib/themes";
import { useConfig } from "@/hook/use-config";
import { expressionAtom } from './../hook/use-expression';
import { useAtom } from "jotai";
import MultiStepLoader from './../components/multi-step-loader'

export default function Template({ children }) {
  const videoRef = useRef(null);
  const [expression, setExpression] = useAtom(expressionAtom);
  const [config, setConfig] = useConfig();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (expression === null) {
      let isMounted = true;
      const detectionTimeout = setTimeout(() => {
        if (isMounted) setDefaultExpression();
      }, 6000);

      startVideo()
        .then(() => loadModels())
        .then(() => {
          if (isMounted) detectFaceExpression();
        })
        .catch((err) => {
            // if someone not allow camera then setting sepression and color manually

            setExpression(['angry', 1]);
            const theme = themes.find((theme) => theme.name === "red");
            setConfig({
                theme: theme.name,
                cssVars: theme.cssVars
            });
            stopVideoStream();
            if (isMounted) setError("Failed to start camera or load models");
        });

      return () => {
        isMounted = false;
        clearTimeout(detectionTimeout);
        stopVideoStream();
      };
    }
  }, [expression]);

  const startVideo = () => {
    return navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
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
    return Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")
    ]);
  };

  const detectFaceExpression = () => {
    const detectFace = async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceLandmarks().withFaceExpressions();

        if (detections.length > 0) {
          const detectedExpression = getDominantExpression(detections[0].expressions);
          setDetectedExpression(detectedExpression);
          stopVideoStream();
          return true;
        }
      }
      return false;
    };

    const attemptDetection = () => {
      detectFace().then((faceDetected) => {
        if (!faceDetected) {
          requestAnimationFrame(attemptDetection);
        }
      });
    };

    attemptDetection();
  };

  const getDominantExpression = (expressions) => {
    return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b);
  };

  const setDetectedExpression = (detectedExpression) => {
    const [expressionName, expressionValue] = detectedExpression;
    const color = getColorForExpression(expressionName);
    const theme = themes.find((theme) => theme.name === color);
    setConfig({
      theme: theme.name,
      cssVars: theme.cssVars
    });

    setExpression([expressionName, expressionValue]);
    stopVideoStream();
  };

  const setDefaultExpression = () => {
    setExpression(['happy', 1]);
    stopVideoStream();
  };

  const loadingStates = [
    { text: "Detecting your expression..." },
    { text: "Analyzing your face..." },
    { text: "Almost there..." },
    { text: `You look like ${expression!=null && expression[0]}`},
    { text: "Finalizing..." },
  ];

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <video crossOrigin="anonymous" ref={videoRef} autoPlay style={{display:"none"}} />
      {expression === null ? (
        <div className="flex justify-center items-center h-[400px]">
          <MultiStepLoader loadingStates={loadingStates} loading={expression==null? true: false} duration={5000} />
        </div>
      ) : (
        children
      )}
    </div>
  );
}