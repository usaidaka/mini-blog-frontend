import { Pagination } from "flowbite-react";

const PaginationPage = ({ totalPage, currentPage, handlePage }) => {
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        layout="pagination"
        onPageChange={handlePage}
        showIcons={true}
        totalPages={totalPage}
        previousLabel="Go Back"
        nextLabel="Go Forward"
      />
    </div>
  );
};

export default PaginationPage;
