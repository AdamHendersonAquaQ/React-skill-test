import { clsx } from 'clsx';
import styles from './DataTable.module.css';

export function formatCurrency(value: number): string {
  if (value === 0) return '—';
  const abs = Math.abs(value);
  return value < 0 ? `−£${abs}k` : `£${abs}k`;
}

type NumericCellProps = {
  value: number;
  format?: (v: number) => string;
};

export function NumericCell({ value, format = formatCurrency }: NumericCellProps) {
  return (
    <span className={clsx(value > 0 && styles.positive, value < 0 && styles.negative)}>
      {format(value)}
    </span>
  );
}
