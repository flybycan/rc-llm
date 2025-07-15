import React from "react";
import { Ellipsis } from "@rc-llm/components";

export default () => {
  const text =
    "这是一个可以展开和收起的长文本示例。这是一个可以展开和收起的长文本示例。这是一个可以展开和收起的长文本示例。这是一个可以展开和收起的长文本示例。这是一个可以展开和收起的长文本示例。";
  return (
    <Ellipsis rows={2} expandable>
      {text}
    </Ellipsis>
  );
};
