import React from 'react';
import './style.css';

export interface TableColumn<T> {
  /** 列标题 */
  title: React.ReactNode;
  /** 列数据在数据项中对应的路径 */
  dataIndex: keyof T;
  /** 列宽度 */
  width?: number | string;
  /** 自定义渲染函数 */
  render?: (value: T[keyof T], record: T, index: number) => React.ReactNode;
  /** 是否可排序 */
  sortable?: boolean;
  /** 对齐方式 */
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T> {
  /** 数据数组 */
  dataSource: T[];
  /** 列定义数组 */
  columns: TableColumn<T>[];
  /** 是否显示边框 */
  bordered?: boolean;
  /** 表格大小 */
  size?: 'small' | 'middle' | 'large';
  /** 是否显示表头 */
  showHeader?: boolean;
  /** 是否显示斑马纹 */
  striped?: boolean;
  /** 分页配置 */
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  /** 行选择配置 */
  rowSelection?: {
    selectedRowKeys: React.Key[];
    onChange: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Table<T extends Record<string, any>>({
  dataSource,
  columns,
  bordered = false,
  size = 'middle',
  showHeader = true,
  striped = false,
  pagination,
  rowSelection,
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc' | null>(null);

  // 处理排序
  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return;

    if (sortColumn === column.dataIndex) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? null : 'asc');
    } else {
      setSortColumn(column.dataIndex);
      setSortOrder('asc');
    }
  };

  // 处理行选择
  const handleRowSelect = (record: T) => {
    if (!rowSelection) return;
    const key = record.key as React.Key;
    const selectedKeys = [...rowSelection.selectedRowKeys];
    const index = selectedKeys.indexOf(key);

    if (index >= 0) {
      selectedKeys.splice(index, 1);
    } else {
      selectedKeys.push(key);
    }

    rowSelection.onChange(selectedKeys, dataSource.filter(item => selectedKeys.includes(item.key as React.Key)));
  };

  // 处理全选
  const handleSelectAll = () => {
    if (!rowSelection) return;
    const allKeys = dataSource.map(item => item.key as React.Key);
    const newSelectedKeys = rowSelection.selectedRowKeys.length === dataSource.length ? [] : allKeys;
    rowSelection.onChange(newSelectedKeys, dataSource.filter(item => newSelectedKeys.includes(item.key as React.Key)));
  };

  // 排序数据
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortOrder) return dataSource;
    return [...dataSource].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [dataSource, sortColumn, sortOrder]);

  // 分页数据
  const paginatedData = React.useMemo(() => {
    if (!pagination) return sortedData;
    const { current, pageSize } = pagination;
    const start = (current - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, pagination]);

  return (
    <div className={`rc-llm-table rc-llm-table-${size} ${bordered ? 'rc-llm-table-bordered' : ''}`}>
      {showHeader && (
        <div className="rc-llm-table-header">
          <table>
            <thead>
              <tr>
                {rowSelection && (
                  <th className="rc-llm-table-selection-column">
                    <input
                      type="checkbox"
                      checked={rowSelection.selectedRowKeys.length === dataSource.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                {columns.map((column, index) => (
                  <th
                    key={index}
                    style={{
                      width: column.width,
                      textAlign: column.align || 'left',
                      cursor: column.sortable ? 'pointer' : 'default'
                    }}
                    onClick={() => handleSort(column)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: column.align === 'right' ? 'flex-end' : column.align === 'center' ? 'center' : 'flex-start' }}>
                      {column.title}
                      {column.sortable && (
                        <span style={{ marginLeft: 4 }}>
                          {sortColumn === column.dataIndex ? (sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '') : '⇅'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
      )}
      <div className="rc-llm-table-body">
        <table>
          <tbody>
            {paginatedData.map((record, rowIndex) => (
              <tr
                key={rowIndex}
                className={striped && rowIndex % 2 ? 'rc-llm-table-row-striped' : ''}
              >
                {rowSelection && (
                  <td className="rc-llm-table-selection-column">
                    <input
                      type="checkbox"
                      checked={rowSelection.selectedRowKeys.includes(record.key as React.Key)}
                      onChange={() => handleRowSelect(record)}
                    />
                  </td>
                )}
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      width: column.width,
                      textAlign: column.align || 'left',
                    }}
                  >
                    {column.render
                      ? column.render(record[column.dataIndex], record, rowIndex)
                      : record[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="rc-llm-table-pagination">
          <button
            className="rc-llm-table-pagination-prev"
            disabled={pagination.current === 1}
            onClick={() => pagination.onChange(pagination.current - 1, pagination.pageSize)}
          >
            上一页
          </button>
          <span className="rc-llm-table-pagination-info">
            第 {pagination.current} 页 / 共 {Math.ceil(pagination.total / pagination.pageSize)} 页
          </span>
          <button
            className="rc-llm-table-pagination-next"
            disabled={pagination.current * pagination.pageSize >= pagination.total}
            onClick={() => pagination.onChange(pagination.current + 1, pagination.pageSize)}
          >
            下一页
          </button>
        </div>
      )}
    </div>
  );
}

Table.displayName = 'Table';