import { OrderType, usePagination } from "./use-pagination";

interface PagedData<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
}

type QueryHook<T, ExtraParams extends unknown[]> = (
  page?: number,
  size?: number,
  sort?: string,
  order?: OrderType,
  ...extraParams: ExtraParams
) => {
  data?: PagedData<T>;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export function usePaginatedQuery<T, ExtraParams extends unknown[] = []>(
  queryHook: QueryHook<T, ExtraParams>,
  page?: number,
  size?: number,
  sort?: string,
  order?: OrderType,
  ...extraParams: ExtraParams
) {
  const { pagination: pagination } = usePagination();

  const { data, isLoading, isError, error } = queryHook(
    pagination.page ?? page,
    pagination.size ?? size,
    pagination.sort ?? sort,
    pagination.order ?? order,
    ...extraParams
  );

  return {
    data: data?.items,
    page: data && {
      page: data.page,
      pages: data.pages,
      total: data.total,
    },
    isLoading,
    isError,
    error,
  };
}
