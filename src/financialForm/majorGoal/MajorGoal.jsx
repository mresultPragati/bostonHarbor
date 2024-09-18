import { useState } from "react";
import { Button, IconButton, TextField, Tooltip } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteInputField } from "../constant.jsx/FinancialConst";

export const OtherMajorGoal = (props) => {
  const { goalFields, setGoalFields, handleGoalField, handleGoalChange } =
    props;
  console.log("GOLAD F", goalFields);

  return (
    <>
      {/* --------------------------------YOUR OTHER MAJOR GOALS------------------- */}
      <div>
        <h5 className="mt-5" style={{ lineHeight: "2px" }}>
          YOUR OTHER MAJOR GOALS
        </h5>
        <small> Example-fund,education,buy</small>

        <div className="mt-3">
          <tr className="row">
            <td className="col-8">GOAL</td>
            <td className="col-2">
              {" "}
              <label> Cost</label>
            </td>
            <td className="col-2">
              {" "}
              <label>When</label>
            </td>
          </tr>

          <tr className="row mt-2">
            {/* <BostonClientLabel className="col-8 mr-2"> */}
            {goalFields?.map((field, index) => (
              <>
                <div key={index} style={{ display: "flex" }} className="mt-2">
                  <td className="col-7 mr-5" style={{ marginRight: "5.5rem" }}>
                    <TextField
                      variant="standard"
                      name={`majorGoal${index}`}
                      value={field.goal}
                      onChange={(event) => handleGoalChange(index, event)}
                      // placeholder={`Field ${index + 1}`}
                      fullWidth
                    />
                  </td>
                  <td className="col-2" style={{ marginRight: "1.5rem" }}>
                    <TextField
                      variant="standard"
                      name={`costMajorGoal${index}`}
                      value={field?.cost}
                      onChange={(e) => {
                        handleGoalChange(index, e);
                      }}
                      fullWidth
                    />
                  </td>
                  <td className="col-2">
                    <TextField
                      variant="standard"
                      name={`whenMajorGoal${index}`}
                      value={field?.when}
                      // value={majorGoalWhen.value}
                      onChange={(e) => {
                        handleGoalChange(index, e);
                      }}
                      fullWidth
                    />
                  </td>
                  {goalFields?.length > 1 ? (
                    <IconButton
                      color="error"
                      className="mt-2"
                      // style={{ color: "red" }}
                      onClick={() => {
                        deleteInputField(index, goalFields, setGoalFields);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    ""
                  )}
                </div>
              </>
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
                <AddCircleOutlinedIcon onClick={() => handleGoalField()} />
              </IconButton>
            </Tooltip>
          </tr>
        </div>
      </div>
    </>
  );
};
