import { z } from 'zod';

export const sentimentSchema = z.enum(['pos', 'neg', 'neutral']);

export const kpiItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  sub: z.string(),
  sentiment: sentimentSchema,
});

export const burnChartPointSchema = z.object({
  month: z.string(),
  actuals: z.number().nullable(),
  projected: z.number().nullable(),
});

export const cashMovementRowSchema = z.object({
  month: z.string(),
  openingBalance: z.number(),
  salesRevenue: z.number(),
  otherIncome: z.number(),
  totalCashIn: z.number(),
  payroll: z.number(),
  overheads: z.number(),
  totalCashOut: z.number(),
  netMovement: z.number(),
  closingBalance: z.number(),
  isProjected: z.boolean(),
});

export const cashBurnSummarySchema = z.object({
  kpis: z.array(kpiItemSchema),
  chartData: z.array(burnChartPointSchema),
  tableRows: z.array(cashMovementRowSchema),
});

export type Sentiment = z.infer<typeof sentimentSchema>;
export type KpiItem = z.infer<typeof kpiItemSchema>;
export type BurnChartPoint = z.infer<typeof burnChartPointSchema>;
export type CashMovementRow = z.infer<typeof cashMovementRowSchema>;
export type CashBurnSummary = z.infer<typeof cashBurnSummarySchema>;
