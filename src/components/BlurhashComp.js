import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
export default function BlurhashComp({ src }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: isLoading ? "none" : "inline",
          width: "100%",
          height: "400px",
          backgroundColor: "white",
        }}
      >
        <Blurhash
          hash="LKC6=Q9E%KM{~qNFk6Rl%3s+NrjJ"
          width="100%"
          height={400}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt=""
        variant="top"
        className="imageFigure"
        style={{
          display: !isLoading ? "none" : "inline",
        }}
      />
    </>
  );
}
