import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { BostonPaginationElement } from "../../resusedComponents/BostonPaginationElement";

export const ClientSummaryTable = (props) => {
  const { summaryData } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const summaryList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  console.log(location, summaryList, "financialForm");

  return (
    <div className="mt-5">
      <Typography className="mb-5" variant="h4" gutterBottom>
        Client Summary
      </Typography>
      {/* <h3 className="mb-5"> Client Summary</h3> */}

      <Box sx={{ width: "100%" }}>
        <TableContainer className="p5">
          <Table aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Sr.No. </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Client Name{" "}
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Client Id</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Investor Type
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Registration Date
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            {/* {summaryList ? ( */}
            <TableBody>
              {summaryList &&
                summaryList?.reverse()?.map((item, index) => {
                  console.log(item);

                  // {summaryData.map((item, index) => {
                  return (
                    <TableRow hover>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item?.clientDetail?.clientName}</TableCell>
                      <TableCell>{item?.uniqueId}</TableCell>
                      <TableCell>
                        {item?.clientDetail?.investorType || "-"}
                      </TableCell>
                      <TableCell>{item?.date}</TableCell>
                      <TableCell>
                        <p
                          className="primary-color"
                          style={{
                            cursor: "pointer",
                            color: "#0d6efd",
                            textDecoration: "underline",
                          }}
                          onClick={() =>
                            navigate(`/financialForm/${item?.uniqueId}`)
                          }
                          // className="underlined-link"
                        >
                          click here
                        </p>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            {/* ) : (
              <div className="mt-5 row">
                <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
              </div>
            )} */}
          </Table>
        </TableContainer>
        {summaryList && <BostonPaginationElement />}

        {!summaryList && (
          <div className="mt-5 row">
            <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
          </div>
        )}
      </Box>
    </div>
  );
};
