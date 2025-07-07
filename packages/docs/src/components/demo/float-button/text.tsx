import React from "react";
import { FloatButton } from "@rc-llm/components";
import IframeDemo from "./IframeDemo";

export default () => {
  const handleClick = (action: string) => {
    alert(`${action} action triggered!`);
  };

  return (
    <IframeDemo height={200} title="带文本的按钮">
      <>
        <FloatButton
          position="bottom-left"
          shape="square"
          icon={<span>↑</span>}
          offset={50}
          onClick={() => handleClick("Back to top")}
        >
          返回顶部
        </FloatButton>

        <FloatButton
          position="bottom-right"
          shape="square"
          icon={<span>+</span>}
          type="primary"
          offset={50}
          onClick={() => handleClick("Create new")}
        >
          新建
        </FloatButton>
      </>
    </IframeDemo>
  );
};
