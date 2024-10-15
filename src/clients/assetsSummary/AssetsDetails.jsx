import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Grid2,
} from "@mui/material";
import BostonPieChart3D from "../../resusedComponents/Boston3DChart";

const AssetsDetails = ({ getTotalBalance, chartData, data }) => {
  return (
    <>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
          Order History
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Paper elevation={3}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Sr. No
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Assets
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Balance
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                      <TableRow key={row.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{`$${row.balance}`}</TableCell>
                      </TableRow>
                    ))}
                    {/* Total row */}
                    <TableRow>
                      <TableCell colSpan={2} style={{ fontWeight: "bold" }}>
                        Total Balance
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        {`$${getTotalBalance()}`}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <BostonPieChart3D chartData={chartData} />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default AssetsDetails;
