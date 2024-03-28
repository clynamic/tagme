import "./page-indicator.scss";

export const PageIndicator = ({
  page,
  setPage,
  maxPage,
  hideMinAndMax,
}: {
  page: number;
  setPage: (page: number) => void;
  maxPage?: number;
  hideMinAndMax?: boolean;
}) => {
  const minPage = 1;
  const pages: number[] = [];

  if (page === minPage) {
    pages.push(minPage, minPage + 1);
    if (maxPage && minPage + 1 < maxPage) {
      pages.push(minPage + 2);
    } else if (!maxPage) {
      pages.push(minPage + 2);
    }
  } else if (maxPage && page === maxPage) {
    pages.push(maxPage - 2, maxPage - 1, maxPage);
  } else {
    pages.push(page - 1, page, page + 1);
  }

  return (
    <div className="page-indicator">
      {!hideMinAndMax && (
        <PageNumber
          page={minPage}
          setPage={minPage !== page ? setPage : undefined}
          active={page === minPage}
          text={"<"}
        />
      )}
      {pages.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          page={pageNumber}
          setPage={setPage}
          active={pageNumber === page}
        />
      ))}
      {!hideMinAndMax && (
        <PageNumber
          page={maxPage || 1}
          setPage={!!maxPage && maxPage !== page ? setPage : undefined}
          active={page === (maxPage || 1)}
          text={">"}
        />
      )}
    </div>
  );
};

const PageNumber = ({
  page,
  setPage,
  active,
  text,
}: {
  page: number;
  setPage?: (page: number) => void;
  active: boolean;
  text?: string;
}) => {
  return (
    <button
      className={`page-number${active ? " active" : ""}`}
      onClick={() => setPage?.(page)}
      disabled={!setPage}
    >
      {text || page}
    </button>
  );
};
