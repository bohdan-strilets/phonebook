import { IPagination } from 'types/IPagination';
import { Button, Wrapper, Points } from './Pagination.styled';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const Pagination: React.FC<IPagination> = ({
  contentPerPage,
  filteredContactList,
  prevPage,
  page,
  setPage,
  gaps,
  totalPages,
  nextPage,
}) => {
  return (
    <Wrapper>
      <Button onClick={prevPage}>
        <HiArrowNarrowLeft />
      </Button>

      {page === 1 ? (
        <Button background="#000000" onClick={() => setPage(1)}>
          1
        </Button>
      ) : (
        <Button onClick={() => setPage(1)}>1</Button>
      )}

      {gaps.before ? <Points>...</Points> : null}
      {gaps.paginationGroup.map((el: number) =>
        page === el ? (
          <Button background="#000000" onClick={() => setPage(el)} key={el}>
            {el}
          </Button>
        ) : (
          <Button onClick={() => setPage(el)} key={el}>
            {el}
          </Button>
        ),
      )}
      {gaps.after ? <Points>...</Points> : null}

      {page === totalPages ? (
        <Button background="#000000" onClick={() => setPage(totalPages)}>
          {totalPages}
        </Button>
      ) : (
        <Button onClick={() => setPage(totalPages)}>{totalPages}</Button>
      )}

      <Button onClick={nextPage}>
        <HiArrowNarrowRight />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
