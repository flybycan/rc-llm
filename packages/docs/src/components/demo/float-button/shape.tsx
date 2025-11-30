import React from "react";
import { FloatButton } from "@rc-llm/components";
import IframeDemo from "./IframeDemo";

const FloatButtonShapeDemo = () => {
  const handleClick = (shape: string) => {
    alert(`Clicked ${shape} button!`);
  };

  return (
    <IframeDemo height={200} title="不同形状">
      <>
        <FloatButton
          position="top-left"
          icon={<span>○</span>}
          shape="circle"
          offset={50}
          onClick={() => handleClick("circle")}
        />

        <FloatButton
          position="top-right"
          icon={<span>□</span>}
          shape="square"
          offset={50}
          onClick={() => handleClick("square")}
        />
      </>
    </IframeDemo>
  );
};

export default FloatButtonShapeDemo;
