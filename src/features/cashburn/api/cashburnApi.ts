import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';
import {
  kpiItemSchema,
  burnChartPointSchema,
  cashMovementRowSchema,
  type KpiItem,
  type BurnChartPoint,
  type CashMovementRow,
} from './schemas';

type EntityParams = {
  entityId: string;
};

type PeriodParams = EntityParams & {
  periodStart: string; // YYYY-MM
  periodEnd: string;   // YYYY-MM
};

export const cashburnApi = createApi({
  reducerPath: 'cashburnApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  }),
  endpoints: (build) => ({
    // GET /api/v1/cashburn/{entityId}/kpis
    getCashBurnKpis: build.query<KpiItem[], EntityParams>({
      query: ({ entityId }) => `/cashburn/${entityId}/kpis`,
      transformResponse: (raw) => z.array(kpiItemSchema).parse(raw),
    }),

    // GET /api/v1/cashburn/{entityId}/chart?periodStart=YYYY-MM&periodEnd=YYYY-MM
    getCashBurnChart: build.query<BurnChartPoint[], PeriodParams>({
      query: ({ entityId, periodStart, periodEnd }) =>
        `/cashburn/${entityId}/chart?periodStart=${periodStart}&periodEnd=${periodEnd}`,
      transformResponse: (raw) => z.array(burnChartPointSchema).parse(raw),
    }),

    // GET /api/v1/cashburn/{entityId}/movements?periodStart=YYYY-MM&periodEnd=YYYY-MM
    getCashMovements: build.query<CashMovementRow[], PeriodParams>({
      query: ({ entityId, periodStart, periodEnd }) =>
        `/cashburn/${entityId}/movements?periodStart=${periodStart}&periodEnd=${periodEnd}`,
      transformResponse: (raw) => z.array(cashMovementRowSchema).parse(raw),
    }),
  }),
});

export const {
  useGetCashBurnKpisQuery,
  useGetCashBurnChartQuery,
  useGetCashMovementsQuery,
} = cashburnApi;
