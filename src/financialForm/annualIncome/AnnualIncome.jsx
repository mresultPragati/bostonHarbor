import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteInputField } from "../constant.jsx/FinancialConst";

export const AnnualIncome = (props) => {
  const {
    handleIncomeChange,
    handleIncomeField,
    incomeFields,
    setIncomeFields,
  } = props;
  return (
    <>
      {" "}
      {/* --------------------------------YOUR CURRENT ANNUAL INCOME------------------- */}
      <div>
        <h5 className="mt-5" style={{ lineHeight: "2px" }}>
          YOUR CURRENT ANNUAL INCOME
        </h5>

        <div className="mt-4">
          <tr className="row">
            <td className="col-7">Client Name</td>
            <td
              className="col-3 d-flex justify-content-end"
              style={{ textWrap: "balance" }}
            >
              {" "}
              <label> Source (employment, bonus, rental)</label>
            </td>
            <td className="col-2 f-flex " style={{ textWrap: "nowrap" }}>
              {" "}
              <label>Amount (before taxes)</label>
            </td>
          </tr>
          <tr className="row mt-2">
            {incomeFields?.map((field, index) => (
              <div className="d-flex">
                <div key={index} style={{ display: "flex" }} className="mt-2">
                  <td className="col-8 mr-5" style={{ marginRight: "5.5rem" }}>
                    <TextField
                      variant="standard"
                      name="incomeClient"
                      value={field.incomeClient}
                      onChange={(event) => handleIncomeChange(index, event)}
                      // placeholder={`Field ${index + 1}`}
                      fullWidth
                    />
                  </td>
                  <td className="col-4" style={{ marginRight: "1.5rem" }}>
                    <TextField
                      variant="standard"
                      name="sourceIncome"
                      value={field.sourceIncome}
                      onChange={(event) => handleIncomeChange(index, event)}
                      fullWidth
                    />
                  </td>
                  <td className="col-3">
                    <TextField
                      variant="standard"
                      name="amountIncome"
                      value={field.amountIncome}
                      onChange={(event) => handleIncomeChange(index, event)}
                      fullWidth
                    />
                  </td>
                  {incomeFields?.length > 1 ? (
                    <IconButton
                      color="error"
                      className="mt-2"
                      style={{ color: "red" }}
                      onClick={() => {
                        deleteInputField(index, incomeFields, setIncomeFields);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    ""
                  )}
                </div>
                {/* <div
                  className="bg-warning"
                  style={{
                    width: "auto",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  {incomeFields?.length > 1 ? (
                    <IconButton
                      color="error"
                      className="mt-2"
                      style={{ color: "red" }}
                      onClick={() => {
                        deleteInputField(index, incomeFields, setIncomeFields);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    ""
                  )}
                </div> */}
              </div>
            ))}
            <Tooltip title="Add New Field">
              <IconButton
                color="primary"
                // variant="outlined"
                className="mt-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "auto",
                }}
              >
                <AddCircleOutlinedIcon onClick={() => handleIncomeField()} />
              </IconButton>
            </Tooltip>
          </tr>
        </div>
      </div>
    </>
  );
};
