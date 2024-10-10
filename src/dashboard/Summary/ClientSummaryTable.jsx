import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BostonPaginationElement } from "../../resusedComponents/BostonPaginationElement";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export const ClientSummaryTable = (props) => {
  const { summaryData } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const navigate = useNavigate();
  console.log("summaryData", summaryData);

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
                <TableCell align="center" style={{ fontWeight: "bold" }}>
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            {/* {summaryList ? ( */}
            <TableBody>
              {summaryData &&
                summaryData
                  ?.reverse()
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((item, index) => {
                    // {summaryData.map((item, index) => {
                    return (
                      <TableRow hover>
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>{item?.clientDetail?.clientName}</TableCell>
                        <TableCell>{item?.uniqueId}</TableCell>
                        <TableCell>
                          {item?.investment_personality === "Unknown"
                            ? "-"
                            : item?.investment_personality}
                        </TableCell>
                        <TableCell>{item?.date}</TableCell>
                        <TableCell
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {/* <p
                            className="primary-color"
                            style={{
                              cursor: "pointer",
                              color: "#0d6efd",
                              textDecoration: "underline",
                            }}
                            onClick={(e) => {
                              navigate(`/financialForm/${item?.uniqueId}`);
                              if (e.ctrlKey || e.metaKey) {
                                window.open(
                                  `/financialForm/${item?.uniqueId}`,
                                  "_blank"
                                );
                              }
                            }}
                            // className="underlined-link"
                          >
                            click here
                          </p> */}

                          <p
                            className="primary-color"
                            style={{
                              cursor: "pointer",
                              color: "#0d6efd",
                              textDecoration: "underline",
                              transform: "translateY(10px)",
                            }}
                            onClick={(e) => {
                              if (e?.ctrlKey || e?.metaKey)
                                window.open(
                                  `/assetsLiabilityDetails/${item?.uniqueId}`,
                                  "_blank"
                                );
                              else
                                navigate(
                                  `/assetsLiabilityDetails/${item?.uniqueId}`
                                );
                            }}
                            // className="underlined-link"
                          >
                            portfolio
                          </p>

                          <div className="edit-icon-container">
                            <IconButton
                              // className="primary-color"
                              aria-label="edit"
                              style={{
                                cursor: "pointer",
                                color: "#0d6efd",
                                textDecoration: "underline",
                              }}
                              onClick={(e) => {
                                if (e?.ctrlKey || e?.metaKey)
                                  window.open(
                                    `/financialForm/${item?.uniqueId}`,
                                    "_blank"
                                  );
                                else
                                  navigate(`/financialForm/${item?.uniqueId}`);
                              }}
                            >
                              <EditIcon sx={{ fontSize: 23 }} />
                            </IconButton>
                          </div>
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

        {(!summaryData || summaryData?.length <= 0) && (
          <div className="mt-5 row">
            <h4 style={{ fontWeight: 300 }}>No Data Found!!!</h4>
          </div>
        )}
        {(summaryData || summaryData?.length > 0) && (
          <BostonPaginationElement
            count={summaryData?.length}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            page={page}
            setPage={setPage}
          />
        )}
      </Box>
    </div>
  );
};
