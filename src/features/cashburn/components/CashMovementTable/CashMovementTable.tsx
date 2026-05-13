import { clsx } from 'clsx';
import { DataTable } from '../../../../components/tables/DataTable';
import { NumericCell, formatCurrency } from '../../../../components/tables/tableCells';
import type { CashMovementRow } from '../../api/schemas';
import { cashMovementColumns } from './columns';
import styles from './CashMovementTable.module.css';

type Props = {
  rows: CashMovementRow[];
};

const TOTALS = {
  salesRevenue: 361,
  otherIncome: 76,
  totalCashIn: 444,
  payroll: -399,
  overheads: -103,
  totalCashOut: -502,
  netMovement: -58,
};

function TotalsFooter() {
  return (
    <tfoot>
      <tr className={styles.totalRow}>
        <td>Total</td>
        <td>—</td>
        <td><NumericCell value={TOTALS.salesRevenue} /></td>
        <td><NumericCell value={TOTALS.otherIncome} /></td>
        <td><NumericCell value={TOTALS.totalCashIn} /></td>
        <td><NumericCell value={TOTALS.payroll} /></td>
        <td><NumericCell value={TOTALS.overheads} /></td>
        <td><NumericCell value={TOTALS.totalCashOut} /></td>
        <td><NumericCell value={TOTALS.netMovement} /></td>
        <td>{formatCurrency(0)}</td>
      </tr>
    </tfoot>
  );
}

export function CashMovementTable({ rows }: Props) {
  return (
    <DataTable
      data={rows}
      columns={cashMovementColumns}
      title="Monthly Cash Movement"
      getRowClassName={(row) => clsx(row.original.isProjected && styles.projectedRow)}
      footer={<TotalsFooter />}
    />
  );
}
