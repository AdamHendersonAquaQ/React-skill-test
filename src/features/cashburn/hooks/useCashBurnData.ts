import { useGetCashBurnSummaryQuery } from '../api/cashburnApi';

export function useCashBurnData() {
  const { data, isLoading, isError } = useGetCashBurnSummaryQuery();

  return {
    kpis: data?.kpis ?? [],
    chartData: data?.chartData ?? [],
    tableRows: data?.tableRows ?? [],
    isLoading,
    isError,
  };
}
