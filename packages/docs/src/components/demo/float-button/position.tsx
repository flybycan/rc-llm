import React from "react";
import { FloatButton } from "@rc-llm/components";
import IframeDemo from "./IframeDemo";

export default () => {
  const handleClick = (position: string) => {
    alert(`Clicked ${position} button!`);
  };

  return (
    <IframeDemo height={300} title="不同位置">
      <>
        <FloatButton
          position="top-left"
          icon={<span>↖</span>}
          type="default"
          onClick={() => handleClick("top-left")}
        />
        <FloatButton
          position="top-right"
          icon={<span>↗</span>}
          type="primary"
          onClick={() => handleClick("top-right")}
        />
        <FloatButton
          position="bottom-left"
          icon={<span>↙</span>}
          type="danger"
          onClick={() => handleClick("bottom-left")}
        />
        <FloatButton
          position="bottom-right"
          icon={<span>↘</span>}
          type="primary"
          onClick={() => handleClick("bottom-right")}
        />
      </>
    </IframeDemo>
  );
};
