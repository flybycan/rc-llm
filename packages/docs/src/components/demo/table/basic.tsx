import React from 'react';
import { Table } from '@rc-llm/components';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京市朝阳区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海市浦东新区',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
  },
];

const columns:any = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    sortable: true,
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 100,
    sortable: true,
    align: 'center',
    render: (value) => `${value}岁`,
  },
  {
    title: '住址',
    dataIndex: 'address',
    align: 'left',
  },
];

export default () => {
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
};