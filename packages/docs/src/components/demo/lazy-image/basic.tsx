import React from "react";
import { LazyImage, Skeleton } from "@rc-llm/components";

const imageList = Array.from({ length: 20 }).map((_, index) => (
  <LazyImage
    key={index}
    width={300}
    height={200}
    src={`https://picsum.photos/200/300?random=${index + 1}`}
    srcSet="https://example.com/photo@1x.jpg 1x, https://example.com/photo@2x.jpg 2x"
    alt="Demo"
    placeholder={<Skeleton width="100%" height="100%" />}
    rootMargin="10px"
  />
));

export default function LazyImageBasicDemo() {
  return (
    <div>
      {imageList}

      <div style={{ height: "1000px" }}>
        Scroll down to see the other image load.
      </div>
      {imageList}
    </div>
  );
}
