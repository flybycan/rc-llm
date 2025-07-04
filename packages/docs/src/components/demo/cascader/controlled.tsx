import React, { useState } from 'react';
import { Cascader, Button } from '@rc-llm/components';
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
  const [value, setValue] = useState<string[]>(['zhejiang', 'hangzhou', 'xihu']);

  const onChange = (val: string[]) => {
    setValue(val);
    console.log(val);
  };

  const clearValue = () => {
    setValue([]);
  };

  return (
    <>
      <Cascader options={options} value={value} onChange={onChange} />
      <Button onClick={clearValue} style={{ marginLeft: 10 }}>Clear</Button>
    </>
  );
};
