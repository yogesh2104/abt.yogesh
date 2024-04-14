"use client";

import Lottie from "lottie-react";
interface AnimationProps{
    animationPath:any
    width?:string,
    className?:string
}
const AnimationImg = ({ animationPath, width,className }:AnimationProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width:  width|| '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} className={className} />
  );
};

export default AnimationImg;