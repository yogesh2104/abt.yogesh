"use client"
import CardHeader from "@/components/card-header";
import Typer from "@/components/typer";
import { PersonalData } from "@/lib/data/personalData";
import { ArrowDownToLine, Contact, Github, Linkedin, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as faceapi from 'face-api.js';
import { getColorForExpression } from "@/lib/get-color-for-expression";
import { themes } from "@/lib/themes";
import { useConfig } from "@/hook/use-config";
import ThreeDButton from "@/components/ui/three-d-button";

export default function Home() {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState(null);
  const [config,setConfig] = useConfig();
  const [timeoutId, setTimeoutId] = useState(null);


  useEffect(() => {
    startVideo();
    loadModels();
  }, []);

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
      faceMyDetect();
    });
  };

  const faceMyDetect = () => {
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
            cssVars: theme.cssVars,
            style: "default",
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
          const theme = themes.find((theme) => theme.name === "orange");
          setConfig({
            theme: theme.name,
            cssVars: theme.cssVars,
            style: "default",
          })

          setExpression((prev) => {
            if (prev == null) {
              return ['happy', 1];
            }
            return prev;
          });


        }, 10000);
        setTimeoutId(newTimeoutId);
        }
      }
    }, 1000);

  };

  const getDominantExpression = (expressions)=> {
    const sortedExpressions = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
    return sortedExpressions[0];
  };

  return (
    <>
      <video crossOrigin="anonymous" ref={videoRef} autoPlay style={{ display: 'none' }}></video>
      {expression==null ?  
      <div className="flex justify-center items-center h-[400px]">
        <LoaderIcon className="h-6 w-6 text-primary animate-spin"/>
      </div> :
      <section className="relative flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
            <h1 className="text-2xl font-bold leading-10 text-black dark:text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] text-left">
              Hello, <br />
              This is {' '}
              <span className=" text-primary">{PersonalData.name}</span>
              {` , I'm a Professional `}
              <Typer data={PersonalData.typerData}/>
            </h1>

            <div className="my-12 flex items-center gap-5">
              <Link
                href={PersonalData?.github}
                target='_blank'
                className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
              >
                <Github  className="h-4 w-4 text-primary"/>
              </Link>
              <Link
                href={PersonalData?.linkedIn}
                target='_blank'
                className="transition-all text-[#2c73e4] hover:scale-125 duration-300"
              >
                <Linkedin className="h-4 w-4 text-primary"/>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/contact-us">
                <ThreeDButton className="w-36 text-xs">
                  Contact me
                  <Contact className="ml-1 h-4 w-4"/>
                </ThreeDButton>
              </Link>

              <ThreeDButton className="w-36 ">
                Get Resume
                <ArrowDownToLine className="ml-1 h-4 w-4"/>
              </ThreeDButton>
            </div>

          </div>
          
          <div className="order-1 lg:order-2  p-2">
            <div className="border-black dark:border-white relative rounded-lg border mb-4">
              <CardHeader/>
              <div className="overflow-hidden border-t-[1px] border-black dark:border-white px-4 lg:px-8 py-4 lg:py-8 text-left">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 dark:text-white text-black">coder</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{'{'}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-primary">{PersonalData.name}</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" dark:text-white text-black">skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-primary">{PersonalData?.skill[0]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[1]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[2]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[3]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[4]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[5]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[6]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[7]}</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-primary">{PersonalData?.skill[8]}</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">hardWorker:</span>
                    <span className="text-primary">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">quickLearner:</span>
                    <span className="text-primary">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 dark:text-white text-black">problemSolver:</span>
                    <span className="text-primary">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <span className="text-gray-400">{'}'}</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
    </>
  );
}
