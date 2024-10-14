import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { extractKeysAndValues, getMidDarkColor, total } from "./Constant";
import { BostonPieChart } from "../resusedComponents/BostonPieChart";
import BostonPieChart3D from "../resusedComponents/Boston3DChart";

export const AssetsChart = ({
  chartData,
  firstPartAssetsData,
  secondPartAssetsData,
  options,
}) => {
  return (
    <>
      <h3 style={{ textAlign: "start" }} className="mt-5">
        {"All Assets"}:
      </h3>
      {chartData?.datasets?.[0]?.data &&
      chartData?.datasets?.[0]?.data?.length > 0 ? (
        <>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* <div> */}
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, md: 4, lg: 4, xl: 4 }}>
                <TableContainer
                  style={{
                    marginTop: "5rem",
                    width: "auto",
                    marginRight: "1rem",
                  }}
                >
                  <Table
                    sx={{
                      th: {
                        border: 1,
                        borderCollapse: "collapse",
                        color: "gray",
                      },
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
                          <TableRow
                            key={index}
                            sx={{ " td,  th": { border: 1 } }}
                          >
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
              </Grid2>
              {/* </div> */}
              <Grid2 size={{ md: 1 }}></Grid2>
              <Grid2 size={{ xs: 12, md: 7, lg: 7, xl: 7 }}>
                <div className="mt-3">
                  {firstPartAssetsData?.datasets?.[0]?.data?.length > 0 && (
                    // <BostonPieChart
                    //   data={firstPartAssetsData}
                    //   width="450px"
                    //   height="450px"
                    //   options={options}
                    // />
                    <BostonPieChart3D chartData={firstPartAssetsData} />
                  )}

                  <div className="mt-3">
                    {secondPartAssetsData?.datasets?.[0]?.data?.length > 0 && (
                      // <BostonPieChart
                      //   data={secondPartAssetsData}
                      //   width="450px"
                      //   height="450px"
                      //   options={options}
                      // />
                      <BostonPieChart3D chartData={secondPartAssetsData} />
                    )}
                    {/* <BostonPieChart
            data={chartData}
            width="450px"
            height="450px"
            options={options}
          /> */}
                  </div>
                </div>
              </Grid2>
            </Grid2>
          </div>
        </>
      ) : (
        <p className="m-5">NO ASSETS DATA ADDED</p>
      )}
    </>
  );
};
