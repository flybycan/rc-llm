import React from 'react';
import { LazyImage } from '@rc-llm/components';

export default () => (
  <LazyImage
    src="https://thissourcedoesnotexist.com/image.jpg"
    alt="invalid image"
    width="300px"
    height="300px"
    errorFallback={<div style={{width: 300, height: 300, backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Custom Error!</div>}
  />
);
