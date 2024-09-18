import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export const BostonPaginationElement = ({
  count,
  setPage,
  page,
  setRowsPerPage,
  rowsPerPage,
}) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(rowsPerPage, "PAGINATION");

  return (
    <TablePagination
      className="mt-5 mb-5"
      component="div"
      count={count}
      page={page}
      rowsPerPageOptions={[5, 10, 25]}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

// import { BostonTablePagination } from "../dashboard/Summary/ClientSummaryStyled";

// export const BostonPaginationElement = () => {
//   return (
//     <div className="mt-5">
//       <BostonTablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={1}
//         rowsPerPage={5}
//         page={0}
//         // onPageChange={handleChangePage}
//         // onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };
