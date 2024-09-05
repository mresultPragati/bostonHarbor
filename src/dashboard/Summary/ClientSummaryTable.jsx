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
} from "@mui/material";

export const ClientSummaryTable = (props) => {
  const { summaryData } = props;

  return (
    <div className="mt-5">
      <Box sx={{ width: "100%" }}>
        <TableContainer className="p5">
          <Table aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Sr.No. </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Client Name{" "}
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Mobile Number
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Investor Type
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Registration Date
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summaryData.map((item, index) => {
                return (
                  <TableRow hover>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.cName}</TableCell>
                    <TableCell>{item.MobileNo}</TableCell>
                    <TableCell>{item.investorType}</TableCell>
                    <TableCell>{item.RegDate}</TableCell>
                    <TableCell>
                      <a href="#" className="underlined-link">
                        click here
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};
