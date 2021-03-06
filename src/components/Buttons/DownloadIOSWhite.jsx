import React from "react";
import ITunesSVG from "../../assets/app_store_black.svg";
const DownloadIOSWhite = ({ className, location }) => {
  return (
    <button
      aria-label="dowloand app on iOS"
      onClick={() => {
        typeof window !== "undefined" &&
          window.open(
            `https://apps.apple.com/app/apple-store/id1540723857?pt=122259206&ct=website-${location}&mt=8`
          );
      }}
      style={{ minHeight: 65 }}
      className={`bg-white text-black border rounded-full flex items-center justify-center hover:cursor-pointer ${className} w-72`}
    >
      <ITunesSVG />
    </button>
  );
};

export default DownloadIOSWhite;
