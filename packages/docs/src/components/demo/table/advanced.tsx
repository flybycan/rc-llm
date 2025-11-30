import React from 'react';
import { Table, TableColumn } from '@rc-llm/components';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  description: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
    tags: ['开发', '设计'],
    description: '一个全栈工程师',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
    tags: ['产品', '运营'],
    description: '产品经理',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
    tags: ['测试', '运维'],
    description: '测试工程师',
  },
];

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    sortable: true,
    align: 'center',
    render: (value: unknown, record: DataType) => (
      <div style={{ color: record.age > 40 ? '#f5222d' : '#52c41a' }}>
        {value as string}
      </div>
    ),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 100,
    sortable: true,
    align: 'center',
    render: (value: unknown) => `${value as number}岁`,
  },
  {
    title: '标签',
    dataIndex: 'tags',
    width: 200,
    align: 'center',
    render: (tags: unknown) => (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        {(tags as string[]).map((tag) => (
          <span
            key={tag}
            style={{
              padding: '2px 8px',
              borderRadius: 4,
              backgroundColor: '#f0f0f0',
              fontSize: 12,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: '住址',
    dataIndex: 'address',
    align: 'left',
  },
  {
    title: '描述',
    dataIndex: 'description',
    align: 'left',
  },
];

export default function TableAdvancedDemo() {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 2;

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[]) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      bordered
      striped
      rowSelection={rowSelection}
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: dataSource.length,
        onChange: (page) => setCurrentPage(page),
      }}
    />
  );
}