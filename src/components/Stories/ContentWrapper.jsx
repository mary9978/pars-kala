import React from "react";

export default function ContentWrapper({ children }) {
  return <div className="flex justify-center items-center h-full z-[500]">{children}</div>;
}
