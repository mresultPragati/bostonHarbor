import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { RetirementGoalForm } from "./retirementGoal/RetirementGoalForm";
import { OtherMajorGoal } from "./majorGoal/MajorGoal";
import { AssetAndLiability } from "./assetLiability/AssetAndLiability";
import { MyLiability } from "./assetLiability/MyLiability";
import { AnnualIncome } from "./annualIncome/AnnualIncome";
import { ProtectionPlan } from "./protectionPlan/ProtectionPlan";
import { InsuranceCoverage } from "./protectionPlan/InsuranceCovrage";
import { ClientForm } from "./clientForm/FinancialClientForm";
import { BostonAlertMessage } from "../resusedComponents/BostonAlertMessage";
import { useNavigate, useParams } from "react-router-dom";
import {
  checkModeOfForm,
  finalDataToSet,
  handleFinancialForm,
  mode,
  resetForm,
} from "./constant.jsx/FinancialConst";
import ConfirmationDialog from "../resusedComponents/BostonConfirmation";
import BostonLoader from "../resusedComponents/BostonLoader";
import { scrollToTop } from "../resusedComponents/constant/ResusableConst";

export const FinancialForm = () => {
  const [goalFields, setGoalFields] = useState([
    { goal: "", cost: "", when: "" },
  ]);
  const [incomeFields, setIncomeFields] = useState([
    { incomeClient: "", sourceIncome: "", amountIncome: "" },
  ]);
  const [formData, setFormData] = useState({});
  const [finalData, setFinalData] = useState({});
  const [formType, setFormType] = useState("");
  const [alertMsg, setAlertMsg] = useState({
    msg: "",
    severity: "",
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setFormData({
      ...formData,
      protectionPlan: {
        checkWill: false,
        checkHealthCare: false,
        checkAttorney: false,
        checkTrust: false,
      },
    });
  }, []);

  useEffect(() => {
    if (id)
      checkModeOfForm(
        id,
        setFormType,
        setFormData,
        setGoalFields,
        setIncomeFields
      );
    else resetForm(setFormData);
    // scrollToTop();
  }, [id]);

  useEffect(() => {
    let obj = {
      formData: formData,
      finalData: finalData,
      setFinalData: setFinalData,
      formType: formType,
      id: id,
      goalFields: goalFields,
      incomeFields: incomeFields,
      renderType: "initial",
    };

    finalDataToSet(obj);
  }, [formData, goalFields, incomeFields]);

  const handleOpen = () => setOpenDialog(true);

  const handleConfirm = () => {
    let obj = {
      id: id,
      formType: formType,
      setFormType: setFormType,
      setFinalData: setFinalData,
      formData: formData,
      finalData: finalData,
      setAlertMsg: setAlertMsg,
      navigate: navigate,
      goalFields: goalFields,
      incomeFields: incomeFields,
      setShowLoader: setShowLoader,
    };
    handleFinancialForm(obj);
    setOpenDialog(false);
  };

  const handleGoalField = () => {
    console.log("goalFieldsgoalFields", goalFields);
    setGoalFields([...goalFields, { goal: "", cost: "", when: "" }]);
  };

  const handleGoalChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...goalFields];

    if (name.startsWith("majorGoal")) {
      console.log("updatedFields123 mg1", name, value);

      updatedFields[index].goal = value;
    } else if (name.startsWith("costMajorGoal")) {
      console.log("updatedFields123 mg2", name, value);
      updatedFields[index].cost = value;
    } else if (name.startsWith("whenMajorGoal")) {
      console.log("updatedFields123 mg3", name, value);
      updatedFields[index].when = value;
    }
    console.log("updatedFields123", updatedFields);

    setGoalFields(updatedFields);
  };

  const handleIncomeField = () => {
    setIncomeFields([
      ...incomeFields,
      { incomeClient: "", sourceIncome: "", amountIncome: "" },
    ]); // Add a new field to the array
  };

  const handleIncomeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...incomeFields];

    if (name.startsWith("incomeClient")) {
      console.log("updatedFields123 mg1", name, value);
      updatedFields[index].incomeClient = value;
    } else if (name.startsWith("sourceIncome")) {
      console.log("updatedFields123 mg2", name, value);
      updatedFields[index].sourceIncome = value;
    } else if (name.startsWith("amountIncome")) {
      console.log("updatedFields123 mg3", name, value);
      updatedFields[index].amountIncome = value;
    }
    console.log("updatedFields123 income", updatedFields);

    setIncomeFields(updatedFields);
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    if (e.target?.type === "checkbox") {
      console.log("protectionPlan", checked, name, checked);

      setFormData({
        ...formData,
        [name]: checked ? checked : false,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div style={{ marginBottom: "5rem" }}>
      <BostonAlertMessage alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      {showLoader && <BostonLoader />}

      <h2>{formType === mode.edit ? "Edit" : ""} Financial Form</h2>
      <p className="mb-5">
        To make our meeting as productive as possible, please complete this form
        to the best of your ability. Let us know if you have any questions or
        concerns.
      </p>

      <div>
        <Box
          className="container"
          component="form"
          //   sx={{ "& .MuiTextField-root": { width: 500 } }}
          sx={{
            width: 1000,
            margin: "auto",
            // ml: 5,
            // m: "2px 10px 10px 2px",
          }}
          //   noValidate
          autoComplete="off"
        >
          <ClientForm
            handleInputChange={handleInputChange}
            formData={formData}
          />

          <RetirementGoalForm
            handleInputChange={handleInputChange}
            formData={formData}
          />

          {/* ----------------WIP - handle state------------------- */}
          <OtherMajorGoal
            handleGoalField={handleGoalField}
            handleGoalChange={handleGoalChange}
            goalFields={goalFields}
            setGoalFields={setGoalFields}
          />

          <AssetAndLiability
            handleInputChange={handleInputChange}
            formData={formData}
          />

          <MyLiability
            handleInputChange={handleInputChange}
            formData={formData}
          />
          <AnnualIncome
            incomeFields={incomeFields}
            setIncomeFields={setIncomeFields}
            handleIncomeChange={handleIncomeChange}
            handleIncomeField={handleIncomeField}
          />

          <ProtectionPlan
            handleInputChange={handleInputChange}
            formData={formData}
          />

          <InsuranceCoverage
            handleInputChange={handleInputChange}
            formData={formData}
          />

          <Button
            variant="contained"
            className="mt-5 mb-5 w-50"
            onClick={() => handleOpen()}
            disabled={
              !formData?.clientName ||
              !formData?.clientMoNo ||
              !formData?.clientAge
            }
          >
            {formType === mode.edit ? "UPDATE FORM" : "SUBMIT FORM"}
          </Button>
          <ConfirmationDialog
            open={openDialog}
            setOpenDialog={setOpenDialog}
            onConfirm={handleConfirm}
            message="Are you sure you want to proceed?"
          />
        </Box>
      </div>
    </div>
  );
};
