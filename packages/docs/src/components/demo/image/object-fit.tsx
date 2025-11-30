import React from 'react';
import { Image } from '@rc-llm/components';

export default function ImageObjectFitDemo() {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjRtkFY.svg"
          alt="fill"
          width={100}
          height={100}
          objectFit="fill"
        />
        <p>fill</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjRtkFY.svg"
          alt="contain"
          width={100}
          height={100}
          objectFit="contain"
        />
        <p>contain</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjRtkFY.svg"
          alt="cover"
          width={100}
          height={100}
          objectFit="cover"
        />
        <p>cover</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjRtkFY.svg"
          alt="none"
          width={100}
          height={100}
          objectFit="none"
        />
        <p>none</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjRtkFY.svg"
          alt="scale-down"
          width={100}
          height={100}
          objectFit="scale-down"
        />
        <p>scale-down</p>
      </div>
    </div>
  );
}
