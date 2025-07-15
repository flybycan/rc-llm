import React from "react";
import { Ellipsis } from "@rc-llm/components";

export default () => {
  const text = "这是一个从中间省略的长文本示例，通常用于显示文件路径或者ID。";
  return (
    <div style={{ width: 300 }}>
      <Ellipsis mode="middle">{text}</Ellipsis>
    </div>
  );
};
