import { clsx } from 'clsx';
import type { Sentiment } from '../../../features/cashburn/api/schemas';
import styles from './KpiCard.module.css';

type Props = {
  label: string;
  value: string;
  sub: string;
  sentiment?: Sentiment;
};

export function KpiCard({ label, value, sub, sentiment = 'neutral' }: Props) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={clsx(styles.value, sentiment === 'pos' && styles.positive, sentiment === 'neg' && styles.negative)}>
        {value}
      </span>
      <span className={styles.subtext}>{sub}</span>
    </div>
  );
}
