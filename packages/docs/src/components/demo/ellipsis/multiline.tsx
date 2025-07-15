import React from "react";
import { Ellipsis } from "@rc-llm/components";

export default () => {
  const text =
    "这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的文本示例，它将会被截断并显示为多行。这是一个非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的文本示例，它将会被截断并显示为多行。";
  return <Ellipsis rows={3}>{text}</Ellipsis>;
};
