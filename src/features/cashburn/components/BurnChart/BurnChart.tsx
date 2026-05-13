import {
  LineChartPanel,
  type LineSeries,
  type PointAnnotation,
} from '../../../../components/charts/LineChartPanel';
import type { BurnChartPoint } from '../../api/schemas';

const SERIES: LineSeries[] = [
  { key: 'actuals',   label: 'Actuals',   color: '#1fae94', fill: 'rgba(31,174,148,0.12)' },
  { key: 'projected', label: 'Projected', color: '#1fae94', fill: 'rgba(31,174,148,0.05)', strokeDasharray: '5 4' },
];

const ANNOTATIONS: PointAnnotation[] = [
  { x: "Sep '24", y: 104, label: 'Planned Investment', color: '#22C55E' },
];

type Props = {
  data: BurnChartPoint[];
};

export function BurnChart({ data }: Props) {
  return (
    <LineChartPanel
      title="Cash Balance"
      subtitle="Monthly cash position · actuals (Jul–Dec '24) and projected (Jan–Feb '25)"
      data={data as Record<string, unknown>[]}
      xKey="month"
      series={SERIES}
      yTickFormat={(v) => `£${v}k`}
      annotations={ANNOTATIONS}
    />
  );
}
