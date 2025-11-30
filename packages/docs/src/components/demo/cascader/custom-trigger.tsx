import React from 'react';
import { Cascader, Button } from '@rc-llm/components';

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

export default function CascaderCustomTriggerDemo() {
  const [text, setText] = React.useState('未选择');

  const onChange = (value: string[]) => {
    setText(value.join(' / '));
  };

  return (
    <Cascader options={options} onChange={onChange}>
      <Button>{text}</Button>
    </Cascader>
  );
}
