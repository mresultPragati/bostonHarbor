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
import PieChart3D from "../../Test";
import BostonPieChart3D from "../../resusedComponents/Boston3DChart";

const chartData = {
  labels: ["Bons", "Stock", "Real Estate", "Commodities"],
  //   datasets: valueArray,
  datasets: [
    {
      label: "Assets",
      data: [1000, 1500, 3000, 2500],
      backgroundColor: [
        "rgba(55, 200, 241, 1.7)",
        "rgba(55, 150, 150, 1.7)",
        "rgba(85, 200, 30, 1.7)",
        "rgba(95, 50, 60, 1.7)",
      ],
      // backgroundColor: "rgba(55, 170, 241, 0.2)",
      // borderColor: "#0979f1",
      borderWidth: 1,
    },
  ],
};

const data = [
  { id: 1, name: "Bons", balance: "$1000", availableBalance: "$800" },
  { id: 2, name: "Stock", balance: "$1500", availableBalance: "$1200" },
  { id: 3, name: "Commodities", balance: "$2500", availableBalance: "$2300" },
  { id: 4, name: "Real Estate", balance: "$3000", availableBalance: "$2800" },
];

const AssetsDetails = () => {
  return (
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
                    <TableCell style={{ fontWeight: "bold" }}>Sr. No</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>Assets</TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      Balance
                    </TableCell>
                    {/* <TableCell style={{ fontWeight: "bold" }}>
                  Available Balance
                </TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={row.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.balance}</TableCell>
                      {/* <TableCell>{row.availableBalance}</TableCell> */}
                    </TableRow>
                  ))}
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
  );
};

export default AssetsDetails;
