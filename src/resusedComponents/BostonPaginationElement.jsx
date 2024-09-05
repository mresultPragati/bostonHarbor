import { BostonTablePagination } from "../dashboard/Summary/ClientSummaryStyled";

export const BostonPaginationElement = () => {
  return (
    <div className="mt-5">
      <BostonTablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={1}
        rowsPerPage={5}
        page={0}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};
