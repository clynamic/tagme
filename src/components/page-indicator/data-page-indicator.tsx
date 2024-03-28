import { useCallback } from "react";
import { PageIndicator } from "./page-indicator";
import { usePagination } from "./use-pagination";

interface PageData {
  page: number;
  pages: number;
}

export const DataPageIndicator = ({
  data,
  hideMinAndMax,
}: {
  data?: PageData;
  hideMinAndMax?: boolean;
}) => {
  const { pagination, setPageination } = usePagination();

  const setPage = useCallback(
    (page: number) => {
      setPageination({
        ...pagination,
        page,
      });
    },
    [pagination, setPageination]
  );

  return (
    <PageIndicator
      page={data?.page ?? pagination.page ?? 1}
      setPage={setPage}
      maxPage={data?.pages}
      hideMinAndMax={hideMinAndMax}
    />
  );
};
