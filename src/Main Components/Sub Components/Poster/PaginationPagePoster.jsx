import { Pagination } from "flowbite-react";

const PaginationPagePoster = ({ totalPage, currentPage, handlePage }) => {
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

export default PaginationPagePoster;
