import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { extractKeysAndValues, getMidDarkColor, total } from "./Constant";
import { BostonPieChart } from "../resusedComponents/BostonPieChart";

export const AssetsChart = ({
  chartData,
  smallValueChartData,
  largeValueChartData,
  options,
}) => {
  return (
    <>
      <h3 className="mt-5">{"All Assets"}</h3>
      {chartData?.datasets?.[0]?.data &&
      chartData?.datasets?.[0]?.data?.length > 0 ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* <div> */}
            <TableContainer
              style={{ marginTop: "5rem", width: "auto", marginRight: "1rem" }}
            >
              <Table
                sx={{
                  th: { border: 1, borderCollapse: "collapse", color: "gray" },
                  width: "auto",
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "auto" }} align="center">
                      Sr. No.
                    </TableCell>
                    <TableCell sx={{ width: "auto" }} align="center">
                      Assets
                    </TableCell>
                    <TableCell sx={{ width: "auto" }} align="center">
                      Amount ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chartData?.datasets?.[0]?.data?.map((item, index) => {
                    return (
                      <TableRow key={index} sx={{ " td,  th": { border: 1 } }}>
                        <TableCell sx={{ width: "auto" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell sx={{ width: "auto" }}>
                          {chartData?.labels?.[index]}
                        </TableCell>
                        <TableCell sx={{ width: "auto" }}>{item}</TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow sx={{ " td": { border: 1 } }}>
                    <TableCell
                      colSpan={2}
                      sx={{ width: "auto" }}
                      align="center"
                    >
                      Total
                    </TableCell>

                    <TableCell>{total(chartData)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* </div> */}
            <div className="mt-3">
              {smallValueChartData?.datasets?.[0]?.data?.length > 0 && (
                <BostonPieChart
                  data={smallValueChartData}
                  width="450px"
                  height="450px"
                  options={options}
                />
              )}

              <div className="mt-3">
                {largeValueChartData?.datasets?.[0]?.data?.length > 0 && (
                  <BostonPieChart
                    data={largeValueChartData}
                    width="450px"
                    height="450px"
                    options={options}
                  />
                )}
                {/* <BostonPieChart
            data={chartData}
            width="450px"
            height="450px"
            options={options}
          /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="m-5">NO ASSETS DATA ADDED</p>
      )}
    </>
  );
};
