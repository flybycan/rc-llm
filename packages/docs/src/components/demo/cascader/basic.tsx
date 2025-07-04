import React, { useState } from 'react';
import { Cascader } from '@rc-llm/components';
import type { CascaderOption } from '@rc-llm/components';

const options: CascaderOption[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const onChange = (value: string[]) => {
    setValue(value);
    console.log(value);
  };

  return <Cascader options={options} value={value} onChange={onChange} />;
};
