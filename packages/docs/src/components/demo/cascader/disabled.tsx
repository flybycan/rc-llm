import React from 'react';
import { Cascader } from '@rc-llm/components';

const options = [
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

export default function CascaderDisabledDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Cascader options={options} disabled placeholder="禁用选择" />
      <Cascader options={options} value={['zhejiang', 'hangzhou', 'xihu']} disabled />
    </div>
  );
}