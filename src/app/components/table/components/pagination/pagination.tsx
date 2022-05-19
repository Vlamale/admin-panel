import * as React from "react";
import { Button, HStack, Select } from "@chakra-ui/react";
import { usePagination } from "app/hooks";
import { Consts } from "./duck";

const Pagination: React.FC = () => {
  const {
    next,
    prev,
    setPage,
    setSize,
    currentPageIndex,
    currentSize,
    canPreviousPage,
    canNextPage,
    maxPage,
  } = usePagination();

  const paginationHandlers = React.useMemo(
    () => ({
      firstPage: () => setPage(0),
      prevPage: () => prev(),
      nextPage: () => next(),
      lastPage: () => setPage(maxPage - 1),
      changeSize: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSize(parseInt(e.target.value)),
    }),
    [maxPage, setPage, prev, next, setSize]
  );

  return (
    <HStack diraction="row" spacing="2" justifyContent="center" my="4">
      <Button
        disabled={!canPreviousPage}
        onClick={paginationHandlers.firstPage}
      >
        {"<<"}
      </Button>

      <Button disabled={!canPreviousPage} onClick={paginationHandlers.prevPage}>
        {"<"}
      </Button>

      <Button disabled={!canNextPage} onClick={paginationHandlers.nextPage}>
        {">"}
      </Button>
      <Button disabled={!canNextPage} onClick={paginationHandlers.lastPage}>
        {">>"}
      </Button>
      <span>
        Page{" "}
        <strong>
          {currentPageIndex + 1} of {maxPage || currentPageIndex + 1}
        </strong>
      </span>
      <Select
        w="fit-content"
        value={currentSize}
        onChange={paginationHandlers.changeSize}
      >
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
