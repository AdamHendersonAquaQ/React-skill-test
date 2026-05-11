import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
  type Row,
} from '@tanstack/react-table';
import type { ReactNode } from 'react';
import styles from './DataTable.module.css';

type Props<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  title?: string;
  getRowClassName?: (row: Row<T>) => string;
  footer?: ReactNode;
};

export function DataTable<T extends object>({
  data,
  columns,
  title,
  getRowClassName,
  footer,
}: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles['panel']}>
      {title && <div className={styles['header']}>{title}</div>}
      <div className={styles['scrollWrap']}>
        <table className={styles['table']}>
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => (
                  <th key={h.id}>
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={getRowClassName?.(row)}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {footer}
        </table>
      </div>
    </div>
  );
}
