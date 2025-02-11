# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展示时；
- 当需要对数据进行排序、筛选、分页等操作时。

## 代码演示

### 基础用法

<code src="./demo/table/basic.tsx"></code>

## API

### Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据数组 | `T[]` | - |
| columns | 表格列的配置描述 | `TableColumn<T>[]` | - |
| bordered | 是否显示边框 | `boolean` | `false` |
| size | 表格大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| showHeader | 是否显示表头 | `boolean` | `true` |
| striped | 是否显示斑马纹 | `boolean` | `false` |
| pagination | 分页器配置 | `{ current: number; pageSize: number; total: number; onChange: (page: number, pageSize: number) => void; }` | - |
| rowSelection | 行选择配置 | `{ selectedRowKeys: React.Key[]; onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => void; }` | - |

### Column

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列头显示文字 | `React.ReactNode` | - |
| dataIndex | 列数据在数据项中对应的路径 | `keyof T` | - |
| width | 列宽度 | `number \| string` | - |
| render | 生成复杂数据的渲染函数 | `(value: T[keyof T], record: T, index: number) => React.ReactNode` | - |
| sortable | 是否可排序 | `boolean` | `false` |
| align | 设置列的对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |