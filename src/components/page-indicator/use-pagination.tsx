import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export type OrderType =
  | "ASC"
  | "DESC"
  | "ASC_NULLS_FIRST"
  | "DESC_NULLS_FIRST"
  | "ASC_NULLS_LAST"
  | "DESC_NULLS_LAST";

export type PaginationParams = {
  page?: number;
  size?: number;
  sort?: string;
  order?: OrderType;
};

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = (param: string) => {
    const value = searchParams.get(param);
    return value ? (isNaN(Number(value)) ? value : Number(value)) : undefined;
  };

  const pagination = {
    page: getParam("page") as number | undefined,
    size: getParam("size") as number | undefined,
    sort: getParam("sort") as string | undefined,
    order: getParam("order") as PaginationParams["order"],
  };

  const setPageination = useCallback(
    ({ page, size, sort, order }: PaginationParams) => {
      if (page == 1) page = undefined;
      if (page !== undefined) searchParams.set("page", page.toString());
      else searchParams.delete("page");

      if (size == 40) size = undefined;
      if (size !== undefined) searchParams.set("size", size.toString());
      else searchParams.delete("size");

      if (sort == "id") sort = undefined;
      if (sort !== undefined) searchParams.set("sort", sort);
      else searchParams.delete("sort");

      if (order == "ASC") order = undefined;
      if (order !== undefined) searchParams.set("order", order);
      else searchParams.delete("order");

      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return { pagination, setPageination };
};
