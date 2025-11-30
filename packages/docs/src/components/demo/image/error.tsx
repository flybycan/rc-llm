import React from 'react';
import { Image } from '@rc-llm/components';

export default function ImageErrorDemo() {
  return (
    <Image
      src="https://gw.alipayobjects.com/zos/rmsportal/invalid-image.svg"
      alt="Invalid Image"
      width={200}
      height={200}
    />
  );
}
