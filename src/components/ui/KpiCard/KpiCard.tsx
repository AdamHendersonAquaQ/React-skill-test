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
    <div className={styles['card']}>
      <span className={styles['label']}>{label}</span>
      <span className={`${styles['value'] ?? ''} ${styles[sentiment] ?? ''}`}>{value}</span>
      <span className={styles['sub']}>{sub}</span>
    </div>
  );
}
