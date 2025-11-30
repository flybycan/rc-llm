import React from "react";
import { FloatButton } from "@rc-llm/components";
import IframeDemo from "./IframeDemo";

const FloatButtonBasicDemo = () => {
  return (
    <IframeDemo height={200} title="基础用法">
      <FloatButton
        onClick={() => alert("FloatButton clicked!")}
        position="bottom-right"
        offset={24}
        icon={<span>+</span>}
      />
    </IframeDemo>
  );
};

export default FloatButtonBasicDemo;
