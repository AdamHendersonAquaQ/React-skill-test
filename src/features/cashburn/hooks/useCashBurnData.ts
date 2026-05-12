import {
  useGetCashBurnKpisQuery,
  useGetCashBurnChartQuery,
  useGetCashMovementsQuery,
} from '../api/cashburnApi';

const ENTITY_ID = 'ORG001';
const PERIOD = { periodStart: '2024-07', periodEnd: '2025-02' } as const;

export function useCashBurnData() {
  const kpis = useGetCashBurnKpisQuery({ entityId: ENTITY_ID });
  const chart = useGetCashBurnChartQuery({ entityId: ENTITY_ID, ...PERIOD });
  const movements = useGetCashMovementsQuery({ entityId: ENTITY_ID, ...PERIOD });

  return {
    kpis: kpis.data ?? [],
    chartData: chart.data ?? [],
    tableRows: movements.data ?? [],
    isLoading: kpis.isLoading || chart.isLoading || movements.isLoading,
    isError: kpis.isError || chart.isError || movements.isError,
  };
}
