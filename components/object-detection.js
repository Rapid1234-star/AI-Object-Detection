"use client";
import React, { use, useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";


let detectInterval;
function ObjectDetection() {
  const webcamref = useRef(null);
  const [loading, setLoading] = useState(true);

  const runCoco = async () => {
    setLoading(true);
      const model = await cocoSSDLoad();
      console.log("object detection");
      setLoading(false);

      detectInterval = setInterval(() => {
        runObjectDetection(model);
      }, 20);
  };
  function showVideo() {
    if (
      webcamref.current !== null &&
      webcamref.current.video.readyState === 4
    ) {
      const myVideowidth = webcamref.current.video.videoWidth;
      const myVideoheight = webcamref.current.video.videoHeight;

      webcamref.current.video.width = myVideowidth;
      webcamref.current.video.height = myVideoheight;
    }
  }

  useEffect(() => {
    runCoco();
    showVideo();
  }, []);

  return (
    <div className="mt-8 bg-gray-800 p-2 rounded-md">
      {loading ? (
        <div className="text-2xl text-white text-center p-20">
          Loading Model...
        </div>
      ) : (
        <div className="relative flex  justify-center items-center rounded-sm p-2">
          {/* webcam*/}
          <Webcam
            ref={webcamref}
            className="rounded-md  w-full lg:h-[720px]"
            muted
          />
          {/*Canvas */}
        </div>
      )}
    </div>
  );
}
export default ObjectDetection;
