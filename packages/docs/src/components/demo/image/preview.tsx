import React from 'react';
import { Image } from '@rc-llm/components';

export default function ImagePreviewDemo() {
  return (
    <Image
      src="https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/209234173005483497fe3403c7a53c5c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgU2FpbGluZw==:q75.awebp?rk3s=f64ab15b&x-expires=1752197823&x-signature=9Tz9IyGpg7JS%2By9dFAnMABcfirM%3D"
      alt="Ant Design"
      width={200}
      height={200}
      preview
    />
  );
}
