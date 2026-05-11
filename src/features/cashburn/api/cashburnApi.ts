import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { cashBurnSummarySchema, type CashBurnSummary } from './schemas';

const MOCK_DATA = {
  kpis: [
    { id: 'cash-balance',   label: 'Cash Balance',   value: '£95k',    sub: 'As of Dec 2024',       sentiment: 'neutral' },
    { id: 'monthly-burn',   label: 'Monthly Burn',   value: '−£13.5k', sub: 'Net outflow / month',  sentiment: 'neg'     },
    { id: 'runway',         label: 'Runway',         value: '≈ 7 wks', sub: 'At current burn rate', sentiment: 'neg'     },
    { id: 'total-cash-in',  label: 'Total Cash In',  value: '£444k',   sub: '8-month period',       sentiment: 'neutral' },
    { id: 'total-cash-out', label: 'Total Cash Out', value: '−£502k',  sub: '8-month period',       sentiment: 'neg'     },
  ],
  chartData: [
    { month: "Jul '24", actuals: 88,   projected: null },
    { month: "Aug '24", actuals: 77,   projected: null },
    { month: "Sep '24", actuals: 104,  projected: null },
    { month: "Oct '24", actuals: 93,   projected: null },
    { month: "Nov '24", actuals: 80,   projected: null },
    { month: "Dec '24", actuals: 67,   projected: 67   },
    { month: "Jan '25", actuals: null, projected: 55   },
    { month: "Feb '25", actuals: null, projected: 43   },
  ],
  tableRows: [
    { month: "Jul '24", openingBalance: 101, salesRevenue: 42, otherIncome: 7,  totalCashIn: 49, payroll: -48, overheads: -14, totalCashOut: -62, netMovement: -13, closingBalance: 88,  isProjected: false },
    { month: "Aug '24", openingBalance: 88,  salesRevenue: 42, otherIncome: 7,  totalCashIn: 49, payroll: -46, overheads: -14, totalCashOut: -60, netMovement: -11, closingBalance: 77,  isProjected: false },
    { month: "Sep '24", openingBalance: 77,  salesRevenue: 42, otherIncome: 34, totalCashIn: 76, payroll: -44, overheads: -5,  totalCashOut: -49, netMovement: 27,  closingBalance: 104, isProjected: false },
    { month: "Oct '24", openingBalance: 104, salesRevenue: 45, otherIncome: 7,  totalCashIn: 52, payroll: -49, overheads: -14, totalCashOut: -63, netMovement: -11, closingBalance: 93,  isProjected: false },
    { month: "Nov '24", openingBalance: 93,  salesRevenue: 46, otherIncome: 7,  totalCashIn: 53, payroll: -52, overheads: -14, totalCashOut: -66, netMovement: -13, closingBalance: 80,  isProjected: false },
    { month: "Dec '24", openingBalance: 80,  salesRevenue: 47, otherIncome: 7,  totalCashIn: 54, payroll: -53, overheads: -14, totalCashOut: -67, netMovement: -13, closingBalance: 67,  isProjected: false },
    { month: "Jan '25", openingBalance: 67,  salesRevenue: 48, otherIncome: 7,  totalCashIn: 55, payroll: -53, overheads: -14, totalCashOut: -67, netMovement: -12, closingBalance: 55,  isProjected: true  },
    { month: "Feb '25", openingBalance: 55,  salesRevenue: 49, otherIncome: 7,  totalCashIn: 56, payroll: -54, overheads: -14, totalCashOut: -68, netMovement: -12, closingBalance: 43,  isProjected: true  },
  ],
} satisfies CashBurnSummary;

export const cashburnApi = createApi({
  reducerPath: 'cashburnApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getCashBurnSummary: build.query<CashBurnSummary, void>({
      queryFn() {
        return { data: cashBurnSummarySchema.parse(MOCK_DATA) };
      },
    }),
  }),
});

export const { useGetCashBurnSummaryQuery } = cashburnApi;
