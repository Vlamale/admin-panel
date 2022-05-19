import { useSearchParams } from "react-router-dom";
import useTableContext from "../useTableContext";

const usePagination = () => {
  const { pagination } = useTableContext();
  const totalCount = pagination?.totalCount || 0;
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageIndex = parseInt(searchParams.get("page") ?? "0");
  const currentSize = parseInt(searchParams.get("size") ?? "10");
  const maxPage = Math.ceil(totalCount / currentSize);
  const maxPageIndex = maxPage - 1;
  const canPreviousPage = currentPageIndex > 0;
  const canNextPage = currentPageIndex < maxPage - 1;

  const next = () => {
    setSearchParams({
      page: `${Math.min(currentPageIndex + 1, maxPageIndex)}`,
      size: `${currentSize}`,
    });
  };

  const prev = () => {
    setSearchParams({
      page: `${Math.max(currentPageIndex - 1, 0)}`,
      size: `${currentSize}`,
    });
  };

  const setPage = (newPage: number) => {
    const pageNumber = Math.max(0, newPage);
    setSearchParams({
      page: `${Math.min(pageNumber, maxPageIndex)}`,
      size: `${currentSize}`,
    });
  };

  const setSize = (newSize: number) => {
    const newMaxPageIndex = Math.ceil(totalCount / newSize) - 1;

    setSearchParams({
      page: `${Math.min(newMaxPageIndex, currentPageIndex)}`,
      size: `${newSize}`,
    });
  };

  return {
    next,
    prev,
    setPage,
    setSize,
    currentPageIndex,
    currentSize,
    canPreviousPage,
    canNextPage,
    maxPage,
  };
};

export default usePagination;
