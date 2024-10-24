import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BoldCell, CurrencyCell, Note } from "./PortfolioStyled";
import { calculateTotals } from "../../resusedComponents/constant/ResusableConst";
import { calculateDaysFromNow } from "./PortfolioConstant";
import { BostonPaginationElement } from "../../resusedComponents/BostonPaginationElement";
import { useState } from "react";

const PortfolioTable = ({ portfolioList, generatePortfolioSuggestion }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <>
      {/* {portfolioList?.length > 0 && ( */}
      <>
        <Typography variant="h4" sx={{ textAlign: "center", margin: "2rem 0" }}>
          Portfolio Details
        </Typography>
        <>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              onClick={() => generatePortfolioSuggestion()}
            >
              {" "}
              Portfolio Analysis
            </Button>
          </div>
          <Note>
            Note: Please enable allow pop-ups in browser to view Portfolio
            Analysis.
          </Note>
          <TableContainer>
            <Table aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <BoldCell>Sr. No.</BoldCell>
                  <BoldCell>Asset Class</BoldCell>
                  <BoldCell>Name</BoldCell>
                  <BoldCell>Symbol</BoldCell>
                  <BoldCell>Quantity</BoldCell>
                  <BoldCell>Delayed Price</BoldCell>
                  <BoldCell>Current Value</BoldCell>
                  <BoldCell>Daily Price Change</BoldCell>
                  <BoldCell>Daily Value Change</BoldCell>
                  <BoldCell>Amount Invested / Unit</BoldCell>
                  <BoldCell>Amount Invested</BoldCell>
                  <BoldCell>Cap Rate</BoldCell>
                  <BoldCell>Investment Gain or (Loss) %</BoldCell>
                  <BoldCell>Investment Gain or (Loss) $</BoldCell>
                  <BoldCell>Estimated Annual Income</BoldCell>
                  <BoldCell>Estimated Yield</BoldCell>
                  <BoldCell>Time Held</BoldCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {portfolioList.map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.assetClass}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.symbol}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.Quantity}
                    </TableCell>
                    <TableCell>${row.Delayed_Price?.toFixed(2)}</TableCell>
                    <TableCell>${row.current_value?.toFixed(2)}</TableCell>
                    <CurrencyCell
                      // isNegative={row.Daily_Price_Change?.toString()?.startsWith(
                      //   "-"
                      // )}
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Daily_Price_Change?.toString()?.startsWith("-")
                      }
                    >
                      {row.Daily_Price_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Price_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Price_Change?.toFixed(2)}`}
                    </CurrencyCell>

                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Daily_Value_Change?.toString()?.startsWith("-")
                      }
                    >
                      {row.Daily_Value_Change?.toString()?.startsWith("-")
                        ? `-$${row.Daily_Value_Change?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Daily_Value_Change.toFixed(2)}`}
                    </CurrencyCell>

                    <TableCell>
                      ${row.Amount_Invested_per_Unit?.toFixed(2)}
                    </TableCell>
                    <TableCell>${row.Amount_Invested?.toFixed(2)}</TableCell>
                    <TableCell>{0}%</TableCell>
                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Investment_Gain_or_Loss_percentage?.toString()?.startsWith(
                              "-"
                            )
                      }
                    >
                      {row.Investment_Gain_or_Loss_percentage?.toFixed(2)}%
                    </CurrencyCell>
                    <CurrencyCell
                      isNegative={
                        row.Daily_Price_Change === 0 ||
                        row.Daily_Price_Change.toFixed(2) === 0.0
                          ? "zero"
                          : row.Investment_Gain_or_Loss?.toString()?.startsWith(
                              "-"
                            )
                      }
                    >
                      {row.Investment_Gain_or_Loss?.toString()?.startsWith("-")
                        ? `-$${row.Investment_Gain_or_Loss?.toFixed(2)
                            ?.toString()
                            ?.replace("-", "")}`
                        : `$${row.Investment_Gain_or_Loss?.toFixed(2)}`}
                      {/* ${row.Investment_Gain_or_Loss.toFixed(2)} */}
                    </CurrencyCell>
                    <TableCell>${row.Estimated_Annual_Income}</TableCell>
                    <TableCell>{row.Estimated_Yield}%</TableCell>
                    <TableCell sx={{ textWrap: "nowrap" }}>
                      {calculateDaysFromNow(row.Time_Held)}{" "}
                      {calculateDaysFromNow(row.Time_Held) > 1 ? "days" : "day"}
                    </TableCell>
                  </TableRow>
                ))}

                {/* Totals Row */}
                <TableRow sx={{ backgroundColor: "#dddddd" }}>
                  <BoldCell colSpan={4}>Total</BoldCell>
                  <BoldCell sx={{ textAlign: "center" }}>
                    {calculateTotals("Quantity", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Delayed_Price", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("current_value", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Daily_Price_Change", portfolioList)}
                  </BoldCell>
                  {/* <BoldCell>
                    ${calculateTotals("Daily_Price_Change"),portfolioList}
                  </BoldCell> */}
                  <BoldCell>
                    ${calculateTotals("Daily_Value_Change", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    $
                    {calculateTotals("Amount_Invested_per_Unit", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Amount_Invested", portfolioList)}
                  </BoldCell>
                  <BoldCell>{0}%</BoldCell>
                  <BoldCell>
                    {calculateTotals(
                      "Investment_Gain_or_Loss_percentage",
                      portfolioList
                    )}
                    %
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Investment_Gain_or_Loss", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    ${calculateTotals("Estimated_Annual_Income", portfolioList)}
                  </BoldCell>
                  <BoldCell>
                    {calculateTotals("Estimated_Yield", portfolioList)}%
                  </BoldCell>
                  <BoldCell></BoldCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </>
      {/* )} */}

      {portfolioList?.length > 0 && (
        <BostonPaginationElement
          count={portfolioList?.length}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default PortfolioTable;
