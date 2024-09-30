import { saveClientData } from "../../api/apiServiece";

export const mode = {
  edit: "editMode",
  addNew: "addNewMode",
};

export const resetForm = (setFormData) => {
  setFormData((prevData) =>
    Object.keys(prevData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );
};

export const myLiabilityChartData = (myLiabilities, formData) => {
  const myLiabilityDatasets = {
    labels: [],
    datasets: [
      {
        label: "Assets",
        data: [],
        // backgroundColor: [],
        // borderColor: "#0979f1",
        borderWidth: 1,
      },
    ],
  };
  const { liabilityKb, liabilitySimpIRAs, liabilityIRA } = myLiabilities;
  if (formData?.mortgageBalance) {
    myLiabilityDatasets?.labels?.push(liabilityKb?.liabilityName);
    myLiabilityDatasets?.datasets?.[0]?.data?.push(formData?.mortgageBalance);
  }
  if (formData?.creditCardBalance) {
    myLiabilityDatasets?.labels?.push(liabilitySimpIRAs?.liabilityName);
    myLiabilityDatasets?.datasets?.[0]?.data?.push(formData?.creditCardBalance);
  }
  if (formData?.otherLoansBalance) {
    myLiabilityDatasets?.labels?.push(liabilityIRA?.liabilityName);
    myLiabilityDatasets?.datasets?.[0]?.data?.push(formData?.otherLoansBalance);
  }
  console.log("myLiabilityDatasets", myLiabilityDatasets);

  return myLiabilityDatasets;
};

export const assetsChartData = (assetsLiabilities, formData) => {
  const assetsDatasets = {
    labels: [],
    datasets: [
      {
        label: "Assets",
        data: [],
        // backgroundColor: [],
        // borderColor: "#25df95",
        borderWidth: 1,
      },
    ],
  };

  const {
    assetLibKB,
    assetLibSimpIRAS,
    assetLibIRA,
    assetLibAcc,
    assetLibCashAcc,
    assetLibAnnuities,
    assetLib529Plan,
    assetLibHome,
    assetLibEstate,
    assetLibBusiness,
    assetLibOther,
  } = assetsLiabilities;

  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibKB?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentLibKb);
  }
  if (formData?.currentLibIRAs) {
    assetsDatasets?.labels?.push(assetLibSimpIRAS?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentLibIRAs);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibIRA?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentIRA);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibAcc?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentLibAcc);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibCashAcc?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentCashAcc);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibAnnuities?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentAnnuities);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLib529Plan?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.current529Plan);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibHome?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentLibHome);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibEstate?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentEstate);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibBusiness?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentBusiness);
  }
  if (formData?.currentLibKb) {
    assetsDatasets?.labels?.push(assetLibOther?.assetsName);
    assetsDatasets?.datasets?.[0]?.data?.push(formData?.currentOtherLib);
  }
  console.log("assetsDatasets", assetsDatasets);
  return assetsDatasets;
};

export const finalDataToSet = (obj) => {
  const {
    formData,
    finalData,
    setFinalData,
    formType,
    goalFields,
    incomeFields,
    id,
    renderType,
  } = obj;
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  var clientDetail = {
    clientName: formData?.clientName || "",
    clientMoNo: formData?.clientMoNo || "",
    clientAge: formData?.clientAge || "",
    coClientName: formData?.coClientName || "",
    coMobileNo: formData?.coMobileNo || "",
    coClientAge: formData?.coClientAge || "",
  };

  var retirementGoal = {
    retirementPlan: {
      retirementAgeClient: formData?.retirementAgeClient || "",
      retirementAgeCoClient: formData?.retirementAgeCoClient || "",
    },
    socialBenefit: {
      socialBenefitClient: formData?.socialBenefitClient || "",
      socialBenefitCoClient: formData?.socialBenefitCoClient || "",
    },
    pensionBenefit: {
      pensionBenefitClient: formData?.pensionBenefitClient || "",
      pensionBenefitCoClient: formData?.pensionBenefitCoClient || "",
    },
    otherIncome: {
      otherIncomeClient: formData?.otherIncomeClient || "",
      otherIncomeCoClient: formData?.otherIncomeCoClient || "",
    },
    annualRetirement: {
      annualRetireClient: formData?.annualRetireClient || "",
      annualRetireCoClient: formData?.annualRetireCoClient || "",
    },
  };

  var assetsLiabilities = {
    assetLibKB: {
      currentLibKb: formData?.currentLibKb || "",
      annualLibKb: formData?.annualLibKb || "",
      assetsName: "401(k), 403(b), 457",
    },
    assetLibSimpIRAS: {
      currentLibIRAs: formData?.currentLibIRAs || "",
      annualLibIRAs: formData?.annualLibIRAs || "",
      assetsName: "Traditional, SEP and SIMPLE IRAs",
    },
    assetLibIRA: {
      currentIRA: formData?.currentIRA || "",
      annualIRA: formData?.annualIRA || "",
      assetsName: "Roth IRA, Roth 401(k)",
    },
    assetLibAcc: {
      currentLibAcc: formData?.currentLibAcc || "",
      annualLibAcc: formData?.annualLibAcc || "",
      assetsName: "Brokerage/non-qualified accounts",
    },
    assetLibCashAcc: {
      currentCashAcc: formData?.currentCashAcc || "",
      annualCashAcc: formData?.annualCashAcc || "",
      assetsName: "Cash/bank accounts",
    },
    assetLibAnnuities: {
      currentAnnuities: formData?.currentAnnuities || "",
      annualAnnuities: formData?.annualAnnuities || "",
      assetsName: "Annuities",
    },
    assetLib529Plan: {
      current529Plan: formData?.current529Plan || "",
      annual529Plan: formData?.annual529Plan || "",
      assetsName: "529 Plans",
    },
    assetLibHome: {
      currentLibHome: formData?.currentLibHome || "",
      annualLibHome: formData?.annualLibHome || "",
      assetsName: "Home",
    },
    assetLibEstate: {
      currentEstate: formData?.currentEstate || "",
      annualEstate: formData?.annualEstate || "",
      assetsName: "Other Real Estate",
    },
    assetLibBusiness: {
      currentBusiness: formData?.currentBusiness || "",
      annualBusiness: formData?.annualBusiness || "",
      assetsName: "Business",
    },
    assetLibOther: {
      currentOtherLib: formData?.currentOtherLib || "",
      annualOtherLib: formData?.annualOtherLib || "",
      assetsName: "Other",
    },
  };

  var myLiabilities = {
    liabilityKb: {
      mortgageBalance: formData?.mortgageBalance || "",
      mortgageInterest: formData?.mortgageInterest || "",
      mortgageMonthly: formData?.mortgageMonthly || "",
      liabilityName: "Mortgage(s)",
    },
    liabilitySimpIRAs: {
      creditCardBalance: formData?.creditCardBalance || "",
      creditCardInterest: formData?.creditCardInterest || "",
      creditCardMonthly: formData?.creditCardMonthly || "",
      liabilityName: "Credit Card(s)",
    },
    liabilityIRA: {
      otherLoansBalance: formData?.otherLoansBalance || "",
      otherLoansInterest: formData?.otherLoansInterest || "",
      otherLoansMonthly: formData?.otherLoansMonthly || "",
      liabilityName: "Other loans",
    },
  };

  var protectionPlan = {
    checkWill: formData?.checkWill ? formData?.checkWill : false,
    checkHealthCare: formData?.checkHealthCare
      ? formData?.checkHealthCare
      : false,
    checkAttorney: formData?.checkAttorney ? formData?.checkAttorney : false,
    checkTrust: formData?.checkTrust ? formData?.checkTrust : false,
  };

  var insuranceCoverage = {
    lifeInsuranceClient: {
      benefitLIClient: formData?.benefitLIClient || "",
      monthlyPayLIClient: formData?.monthlyPayLIClient || "",
    },
    lifeInsuranceCoClient: {
      benefitLICoClient: formData?.benefitLICoClient || "",
      monthlyPayLICoClient: formData?.monthlyPayLICoClient || "",
    },
    disableIncomeClient: {
      benefitDisableClient: formData?.benefitDisableClient || "",
      monthlyPayDisableClient: formData?.monthlyPayDisableClient || "",
    },
    disableIncomeCoClient: {
      benefitDisableCoClient: formData?.benefitDisableCoClient || "",
      monthlyPayDisableCoClient: formData?.monthlyPayDisableCoClient || "",
    },
    longTermCoClient: {
      benefitLongTermClient: formData?.benefitLongTermClient || "",
      monthlyPayLongTermClient: formData?.monthlyPayLongTermClient || "",
    },
  };

  var assetsDatasets = assetsChartData(assetsLiabilities, formData);
  var liabilityDatasets = myLiabilityChartData(myLiabilities, formData);

  setFinalData({
    ...finalData,
    clientDetail: clientDetail || {},
    retirementGoal: retirementGoal || {},
    assetsLiabilities: assetsLiabilities || {},
    myLiabilities: myLiabilities || {},
    protectionPlan: protectionPlan,
    insuranceCoverage: insuranceCoverage || {},
    goalFields: goalFields || [],
    incomeFields: incomeFields || [],
    assetsDatasets: assetsDatasets || [],
    liabilityDatasets: liabilityDatasets || [],
  });

  if (formType === mode.edit) {
    if (clientList) {
      var updatedFields = [...clientList];
      const result = clientList?.find((item) => item.uniqueId === id);
      const index = clientList?.indexOf(result);
      if (renderType === "updateBtn") {
        updatedFields[index] = {
          ...finalData,
          investment_personality:result?.investment_personality?result?.investment_personality:"",
          uniqueId: formData?.uniqueId,
          date: formData?.date,
        };
      }
      // when advisor not clicking on update btn and navigate on other page
      else
        updatedFields[index] = {
          ...result,
          investment_personality:result?.investment_personality?result?.investment_personality:"", 
          uniqueId: formData?.uniqueId,
          date: formData?.date,
        };

      localStorage.setItem("financialForm", JSON.stringify(updatedFields));
      console.log("updatedFields", updatedFields, index,result);
    }
  }
};

export const checkModeOfForm = (
  id,
  setFormType,
  setFormData,
  setGoalFields,
  setIncomeFields
) => {
  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));
  console.log("clintLST", clientList);
  if (id) {
    setFormType(mode.edit);
    const result = clientList?.find((item) => item.uniqueId === id);
    console.log("goalFieldsgoalFields", result?.["assetsLiabilities"]);

    const spreadInsuranceCoverage = Object.keys(
      result?.insuranceCoverage
    ).reduce((acc, key) => {
      return {
        ...acc,
        ...result?.insuranceCoverage[key],
      };
    }, {});

    const spreadRetirement = Object.keys(result?.retirementGoal).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.retirementGoal[key],
        };
      },
      {}
    );

    const spreadAssetLib = Object.keys(result?.assetsLiabilities).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.assetsLiabilities[key],
        };
      },
      {}
    );

    const spreadMyLib = Object.keys(result?.myLiabilities).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.myLiabilities[key],
        };
      },
      {}
    );

    const spreadProtectionPlan = Object.keys(result?.protectionPlan).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.protectionPlan[key],
        };
      },
      {}
    );

    const mergedObject = {
      ...result?.clientDetail,
      ...spreadInsuranceCoverage,
      ...spreadRetirement,
      ...spreadAssetLib,
      ...spreadMyLib,
      ...result?.protectionPlan,
      goalFields: result?.goalFields,
      incomeFields: result?.incomeFields,
      uniqueId: result?.uniqueId,
      date: result?.date,
    };
    console.log(
      "mergedObject clintLST",
      spreadProtectionPlan,
      "merge==>",
      mergedObject,
      result?.protectionPlan
    );

    setFormData(mergedObject);
    setGoalFields(result?.goalFields);
    setIncomeFields(result?.incomeFields);
  } else setFormType(mode.addNew);
};

export const generateUniqueId = (name) => {
  const nameParts = name?.split(" ");

  // Extract the first letter of the first name and last name
  const firstInitial = nameParts[0] ? nameParts?.[0][0] : "";
  const lastInitial = nameParts?.[1] ? nameParts[1][0] : "";

  // Generate a random 4-digit number for uniqueness
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Combine initials with random number
  const uniqueId = `${firstInitial}${lastInitial}${randomNumber}`;

  return uniqueId;
};

export const handleFinancialForm =async (obj) => {
  const {
    id,
    formType,
    setFinalData,
    finalData,
    setAlertMsg,
    navigate,
    setFormType,
    formData,
    goalFields,
    incomeFields,
    setShowLoader,
  } = obj;

  setShowLoader(true);
  if (!id) {
    const summaryArr = [];
    const date = new Date();

    const fullDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`; // +1 since months are 0-indexed

    // setFinalData({
    //   ...finalData,
    //   date: fullDate,
    //   uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
    // });

setAlertMsg({
  msg: "Data Added Successfully",
  severity: "success",
});
    console.log("finalDatafinalData 1", finalData);
    let payload={
      ...finalData, 
      investment_personality:localData?.investment_personality?localData?.investment_personality:"",
      date: fullDate,
      uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
    }
const resp = await saveClientData(
      payload, //  payload
      "application/json"
    );
console.log("RESPONSEE", resp,finalData);
// if (resp?.status === 200) {

// }

    var localData = JSON.parse(localStorage.getItem("financialForm"));
    setTimeout(async() => {
      if (localStorage.getItem("financialForm")) {
        // console.log("GET loacl avail", localData);
        localData?.push(payload);

        // localData?.push({
        //   ...finalData,
        //   investment_personality:localData?.investment_personality?localData?.investment_personality:"",
        //   date: fullDate,
        //   uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
        // });     
        
        localStorage.setItem("financialForm", JSON.stringify(localData));
        console.log("localDatalocalData",localData);
      } else {
        summaryArr?.push(payload);
        
        // summaryArr.push({
        //   ...finalData,
        //   investment_personality:"",
        //   date: fullDate,
        //   uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
        // });
        localStorage.setItem("financialForm", JSON.stringify(summaryArr));
        // console.log("GET loacl avail", localData);
      }
      //   setFormData()

      navigate("/");
      setFormType("");
      setShowLoader(false);
    }, 2500);
  } else {
    let obj = {
      formData: formData,
      finalData: finalData,
      setFinalData: setFinalData,
      formType: formType,
      id: id,
      goalFields: goalFields,
      incomeFields: incomeFields,
      renderType: "updateBtn",
    };

    finalDataToSet(obj);

    setAlertMsg({
      msg: "Data Updated Successfully",
      severity: "success",
    });
    setTimeout(() => {
      navigate("/");
      setFormType("");
    }, 2500);
  }
  console.log("finalDatafinalData 2", finalData);
};

export const deleteInputField = (index, fields, setFields) => {
  var fieldArr = [...fields];
  fieldArr?.splice(index, 1);
  console.log("fieldArr", fieldArr);
  setFields(fieldArr);
};
