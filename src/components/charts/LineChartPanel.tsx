import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
  ResponsiveContainer,
} from 'recharts';
import styles from './LineChartPanel.module.css';

export type LineSeries = {
  key: string;
  label: string;
  color?: string;
  fill?: string;
  strokeDasharray?: string;
};

export type PointAnnotation = {
  x: string | number;
  y: number;
  label: string;
  color?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  data: Record<string, unknown>[];
  xKey: string;
  series: LineSeries[];
  yTickFormat?: (v: number) => string;
  annotations?: PointAnnotation[];
};

const FALLBACK_COLOR = '#1fae94';

export function LineChartPanel({
  title,
  subtitle,
  data,
  xKey,
  series,
  yTickFormat,
  annotations = [],
}: Props) {
  const topMargin = annotations.length > 0 ? 32 : 8;

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data} margin={{ top: topMargin, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" />
          <XAxis dataKey={xKey} tick={{ fontSize: 9 }} />
          <YAxis
            {...(yTickFormat !== undefined ? { tickFormatter: yTickFormat } : {})}
            tick={{ fontSize: 9 }}
            domain={[0, 'auto']}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              yTickFormat ? yTickFormat(value) : String(value),
              name,
            ]}
            labelStyle={{ fontWeight: 600 }}
          />
          <Legend wrapperStyle={{ fontSize: 10 }} iconSize={12} />
          {annotations.map((ann) => (
            <ReferenceDot
              key={`ann-${ann.x}-${ann.y}`}
              x={ann.x}
              y={ann.y}
              r={7}
              fill={ann.color ?? FALLBACK_COLOR}
              stroke={ann.color ?? '#22C55E'}
              strokeWidth={2}
              label={{
                value: ann.label,
                position: 'top',
                fontSize: 9,
                fill: ann.color ?? '#22C55E',
                fontWeight: 700,
              }}
            />
          ))}
          {series.map((s) =>
            s.fill !== undefined ? (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color ?? FALLBACK_COLOR}
                fill={s.fill}
                strokeWidth={2.5}
                strokeDasharray={s.strokeDasharray}
                dot={{ r: 4, fill: s.color ?? FALLBACK_COLOR }}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
            ) : (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color ?? FALLBACK_COLOR}
                strokeWidth={2.5}
                strokeDasharray={s.strokeDasharray}
                dot={{ r: 4, fill: s.color ?? FALLBACK_COLOR }}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
            )
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
