import { KpiCard } from '../../../components/ui/KpiCard/KpiCard';
import { BurnChart } from '../components/BurnChart/BurnChart';
import { CashMovementTable } from '../components/CashMovementTable/CashMovementTable';
import { useCashBurnData } from '../hooks/useCashBurnData';
import styles from './CashBurnPage.module.css';

export function CashBurnPage() {
  const { kpis, chartData, tableRows, isLoading, isError } = useCashBurnData();

  if (isLoading) {
    return <div className={styles.state}>Loading…</div>;
  }

  if (isError) {
    return <div className={styles.state}>Failed to load cash burn data.</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            sub={kpi.sub}
            sentiment={kpi.sentiment}
          />
        ))}
      </div>
      <BurnChart data={chartData} />
      <CashMovementTable rows={tableRows} />
    </div>
  );
}
