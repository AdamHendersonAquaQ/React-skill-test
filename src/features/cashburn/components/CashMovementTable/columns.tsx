import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import { clsx } from 'clsx';
import { NumericCell } from '../../../../components/tables/tableCells';
import type { CashMovementRow } from '../../api/schemas';
import styles from './CashMovementTable.module.css';

const h = createColumnHelper<CashMovementRow>();

// Cast needed: exactOptionalPropertyTypes prevents ColumnDef<T,string> widening to ColumnDef<T,unknown>
// at the array level. flexRender doesn't use TValue at runtime so this is safe.
export const cashMovementColumns = ([
  h.accessor('month', {
    header: 'Month',
    cell: ({ getValue, row }) => (
      <span className={clsx(styles.monthCell)}>
        {getValue()}
        {row.original.isProjected && <sup> ⁽ᵖ⁾</sup>}
      </span>
    ),
  }),
  h.accessor('openingBalance', {
    header: 'Opening Balance',
    cell: ({ getValue }) => {
      const v = getValue();
      return v === 0 ? '—' : `£${v}k`;
    },
  }),
  h.accessor('salesRevenue', {
    header: 'Sales Revenue',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('otherIncome', {
    header: 'Other Income',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('totalCashIn', {
    header: 'Total Cash In',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('payroll', {
    header: 'Payroll',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('overheads', {
    header: 'Overheads',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('totalCashOut', {
    header: 'Total Cash Out',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('netMovement', {
    header: 'Net Movement',
    cell: ({ getValue }) => <NumericCell value={getValue()} />,
  }),
  h.accessor('closingBalance', {
    header: 'Closing Balance',
    cell: ({ getValue }) => `£${getValue()}k`,
  }),
]) as unknown as ColumnDef<CashMovementRow, unknown>[];
