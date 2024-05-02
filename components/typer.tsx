"use client"
import React from "react";
import Typewriter from "typewriter-effect";

interface TypeProps {
    data: string[];
}

const Type =({ data }:TypeProps) => {
  return (
    <div className="text-primary">
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
