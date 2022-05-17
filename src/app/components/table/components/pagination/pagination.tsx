import * as React from "react";
import { Button, HStack, Select } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Consts, Types } from "./duck";

const Pagination = <Data extends Record<string, unknown>>({
  tableInstance,
  totalCount,
}: Types.IPaginationProps<Data>): JSX.Element => {
  const [, setSearchParams] = useSearchParams();
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const buttonHandlers = React.useMemo(
    () => ({
      firstPage: () => {
        gotoPage(0);
        setSearchParams({
          page: "0",
          size: `${pageSize}`,
        });
      },
      prevPage: () => {
        previousPage();
        setSearchParams({
          page: `${pageIndex - 1}`,
          size: `${pageSize}`,
        });
      },
      nextPage: () => {
        nextPage();
        setSearchParams({
          page: `${pageIndex + 1}`,
          size: `${pageSize}`,
        });
      },
      lastPage: () => {
        setSearchParams({
          page: `${pageCount - 1}`,
          size: `${pageSize}`,
        });
        gotoPage(pageCount - 1);
      },
    }),
    [
      pageSize,
      pageIndex,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setSearchParams,
    ]
  );

  const onChangePageSize = React.useCallback(
    (e) => {
      const newPageCount = Math.ceil(totalCount / Number(e.target.value)) - 1;

      setPageSize(Number(e.target.value));
      gotoPage(Math.min(pageIndex, newPageCount));
      setSearchParams({
        page: `${Math.min(pageIndex, newPageCount)}`,
        size: e.target.value,
      });
    },
    [pageIndex, totalCount, gotoPage, setPageSize, setSearchParams]
  );

  return (
    <HStack diraction="row" spacing="2" justifyContent="center" my="4">
      <Button disabled={!canPreviousPage} onClick={buttonHandlers.firstPage}>
        {"<<"}
      </Button>

      <Button disabled={!canPreviousPage} onClick={buttonHandlers.prevPage}>
        {"<"}
      </Button>

      <Button disabled={!canNextPage} onClick={buttonHandlers.nextPage}>
        {">"}
      </Button>
      <Button disabled={!canNextPage} onClick={buttonHandlers.lastPage}>
        {">>"}
      </Button>
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <Select w="fit-content" value={pageSize} onChange={onChangePageSize}>
        {Consts.PageSizeOptions.map((size) => (
          <option key={size} value={size}>
            Show {size}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default Pagination;
