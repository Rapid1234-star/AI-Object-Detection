"use client";
import React, { use, useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";
import renderPredictions from "../components/utils/render-prediction";


let detectInterval;
function ObjectDetection() {
  const webcamref = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const runCoco = async () => {
    setLoading(true);
      const model = await cocoSSDLoad();
      console.log("object detection");
      setLoading(false);

      detectInterval = setInterval(() => {
        runObjectDetection(model);
      }, 10);
  };

  async function runObjectDetection(model) {
    if (
      canvasRef.current !== null &&
      webcamref.current !== null &&
      webcamref.current.video.readyState === 4
    ) {
      canvasRef.current.width = webcamref.current.video.videoWidth;
      canvasRef.current.height = webcamref.current.video.videoHeight;
      // find objects in the frame
      const detectedObjects = await model.detect(
        webcamref.current.video,
        undefined,
        0.5
      );
      const context= canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  }
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
          <canvas ref={canvasRef} className="absolute top-0 left-0 z-50 w-full lg:h-[720px]"/>
        </div>
      )}
    </div>
  );
}
export default ObjectDetection;
