"use client";
import { useState, useEffect, ComponentProps } from "react";
import Image from "next/image";
interface ISuspenseImage extends ComponentProps<typeof Image> {
  src: string;
  alt: string;
}
const SuspenseImage: React.FC<ISuspenseImage> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return (
    <>
      {isLoaded ? (
        <Image src={src} alt={alt} {...props} />
      ) : (
        <div className="flex items-center justify-center w-full h-full animate-pulse bg-primary200 rounded"></div>
      )}
    </>
  );
};
export default SuspenseImage;
