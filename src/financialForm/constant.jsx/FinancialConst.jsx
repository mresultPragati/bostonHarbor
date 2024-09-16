export const mode = {
  edit: "editMode",
  addNew: "addNewMode",
};

export const resetForm = (setFormData) => {
  setFormData((prevData) =>
    Object.keys(prevData).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );
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
    },
    assetLibSimpIRAS: {
      currentLibIRAs: formData?.currentLibIRAs || "",
      annualLibIRAs: formData?.annualLibIRAs || "",
    },
    assetLibIRA: {
      currentIRA: formData?.currentIRA || "",
      annualIRA: formData?.annualIRA || "",
    },
    assetLibAcc: {
      currentLibAcc: formData?.currentLibAcc || "",
      annualLibAcc: formData?.annualLibAcc || "",
    },
    assetLibCashAcc: {
      currentCashAcc: formData?.currentCashAcc || "",
      annualCashAcc: formData?.annualCashAcc || "",
    },
    assetLibAnnuities: {
      currentAnnuities: formData?.currentAnnuities || "",
      annualAnnuities: formData?.annualAnnuities || "",
    },
    assetLib529Plan: {
      current529Plan: formData?.current529Plan || "",
      annual529Plan: formData?.annual529Plan || "",
    },
    assetLibHome: {
      currentLibHome: formData?.currentLibHome || "",
      annualLibHome: formData?.annualLibHome || "",
    },
    assetLibEstate: {
      currentEstate: formData?.currentEstate || "",
      annualEstate: formData?.annualEstate || "",
    },
    assetLibBusiness: {
      currentBusiness: formData?.currentBusiness || "",
      annualBusiness: formData?.annualBusiness || "",
    },
    assetLibOther: {
      currentOtherLib: formData?.currentOtherLib || "",
      annualOtherLib: formData?.annualOtherLib || "",
    },
  };

  var myLiabilities = {
    liabilityKb: {
      libBalanceBk: formData?.libBalanceBk || "",
      libInterestRateKb: formData?.libInterestRateKb || "",
      libMonthlyPayKb: formData?.libMonthlyPayKb || "",
    },
    liabilitySimpIRAs: {
      libBalanceIRAs: formData?.libBalanceIRAs || "",
      libInterestRateIRAs: formData?.libInterestRateIRAs || "",
      libMonthlyPayIRAs: formData?.libMonthlyPayIRAs || "",
    },
    liabilityIRA: {
      balanceIRA: formData?.balanceIRA || "",
      interestRateIRA: formData?.interestRateIRA || "",
      monthlyPayIRA: formData?.monthlyPayIRA || "",
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

  // var assetLibKB = {
  //   currentLibKb: formData?.currentLibKb || "",
  //   annualLibKb: formData?.annualLibKb || "",
  // };

  // var assetLibSimpIRAS = {
  //   currentLibIRAs: formData?.currentLibIRAs || "",
  //   annualLibIRAs: formData?.annualLibIRAs || "",
  // };

  // var assetLibIRA = {
  //   currentIRA: formData?.currentIRA || "",
  //   annualIRA: formData?.annualIRA || "",
  // };

  // var assetLibAcc = {
  //   currentLibAcc: formData?.currentLibAcc || "",
  //   annualLibAcc: formData?.annualLibAcc || "",
  // };

  // var assetLibCashAcc = {
  //   currentCashAcc: formData?.currentCashAcc || "",
  //   annualCashAcc: formData?.annualCashAcc || "",
  // };

  // var assetLibAnnuities = {
  //   currentAnnuities: formData?.currentAnnuities || "",
  //   annualAnnuities: formData?.annualAnnuities || "",
  // };

  // var assetLib529Plan = {
  //   current529Plan: formData?.current529Plan || "",
  //   annual529Plan: formData?.annual529Plan || "",
  // };

  // var assetLibHome = {
  //   currentLibHome: formData?.currentLibHome || "",
  //   annualLibHome: formData?.annualLibHome || "",
  // };

  // var assetLibEstate = {
  //   currentEstate: formData?.currentEstate || "",
  //   annualEstate: formData?.annualEstate || "",
  // };

  // var assetLibBusiness = {
  //   currentBusiness: formData?.currentBusiness || "",
  //   annualBusiness: formData?.annualBusiness || "",
  // };

  // var assetLibOther = {
  //   currentOtherLib: formData?.currentOtherLib || "",
  //   annualOtherLib: formData?.annualOtherLib || "",
  // };

  // var liabilityKb = {
  //   libBalanceBk: formData?.libBalanceBk || "",
  //   libInterestRateKb: formData?.libInterestRateKb || "",
  //   libMonthlyPayKb: formData?.libMonthlyPayKb || "",
  // };

  // var liabilitySimpIRAs = {
  //   libBalanceIRAs: formData?.libBalanceIRAs || "",
  //   libInterestRateIRAs: formData?.libInterestRateIRAs || "",
  //   libMonthlyPayIRAs: formData?.libMonthlyPayIRAs || "",
  // };

  // var liabilityIRA = {
  //   balanceIRA: formData?.balanceIRA || "",
  //   interestRateIRA: formData?.interestRateIRA || "",
  //   monthlyPayIRA: formData?.monthlyPayIRA || "",
  // };

  // }

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

  setFinalData({
    ...finalData,
    clientDetail: clientDetail || {},
    retirementGoal: retirementGoal || {},
    assetsLiabilities: assetsLiabilities || {},
    myLiabilities: myLiabilities || {},

    // assetLibKB: assetLibKB || {},
    // assetLibIRA: assetLibIRA || {},
    // assetLibSimpIRAS: assetLibSimpIRAS || {},
    // assetLibAcc: assetLibAcc || {},
    // assetLibCashAcc: assetLibCashAcc || {},
    // assetLibAnnuities: assetLibAnnuities || {},
    // assetLib529Plan: assetLib529Plan || {},
    // assetLibHome: assetLibHome || {},
    // assetLibEstate: assetLibEstate || {},
    // assetLibBusiness: assetLibBusiness || {},
    // assetLibOther: assetLibOther || {},
    // liabilityKb: liabilityKb || {},
    // liabilitySimpIRAs: liabilitySimpIRAs || {},
    // liabilityIRA: liabilityIRA || {},
    protectionPlan: protectionPlan,
    insuranceCoverage: insuranceCoverage || {},
    goalFields: goalFields || [],
    incomeFields: incomeFields || [],
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
        ...result?.insuranceCoverage[key], // Spread each nested object
      };
    }, {});

    const spreadRetirement = Object.keys(result?.retirementGoal).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.retirementGoal[key], // Spread each nested object
        };
      },
      {}
    );

    const spreadAssetLib = Object.keys(result?.assetsLiabilities).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.assetsLiabilities[key], // Spread each nested object
        };
      },
      {}
    );

    const spreadMyLib = Object.keys(result?.myLiabilities).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.myLiabilities[key], // Spread each nested object
        };
      },
      {}
    );

    const spreadProtectionPlan = Object.keys(result?.protectionPlan).reduce(
      (acc, key) => {
        return {
          ...acc,
          ...result?.protectionPlan[key], // Spread each nested object
        };
      },
      {}
    );

    const mergedObject = {
      // ...result?.["clientDetail"],
      // -------
      // ...result?.["assetLib529Plan"],
      // ...result?.["assetLibAcc"],
      // ...result?.["assetLibAnnuities"],
      // ...result?.["assetLibBusiness"],
      // ...result?.["assetLibCashAcc"],
      // ...result?.["assetLibEstate"],
      // ...result?.["assetLibHome"],
      // ...result?.["assetLibIRA"],
      // ...result?.["assetLibKB"],
      // ...result?.["assetLibOther"],
      // ...result?.["assetLibSimpIRAS"],
      // ...result?.["liabilityIRA"],
      // ...result?.["liabilityKb"],
      // ...result?.["liabilitySimpIRAs"],
      // ...result?.["protectionPlan"],
      // -----
      // ...result?.["insuranceCoverage"],
      // ...result?.["retirementGoal"],
      // ...result?.["assetsLiabilities"],
      // ...result?.["myLiabilities"],

      ...result?.clientDetail,
      ...spreadInsuranceCoverage,
      ...spreadRetirement,
      ...spreadAssetLib,
      ...spreadMyLib,
      // ...spreadProtectionPlan,
      ...result?.protectionPlan,
      // protectionPlan: result?.protectionPlan,
      goalFields: result?.goalFields,
      incomeFields: result?.incomeFields,
      uniqueId: result?.uniqueId,
      date: result?.date,
      // clientDetail: result?.clientDetail,
      // insuranceCoverage: result?.insuranceCoverage,
      // retirementGoal: result?.retirementGoal,
      // assetsLiabilities: result?.assetsLiabilities,
      // myLiabilities: result?.myLiabilities,
      // protectionPlan: result?.protectionPlan,
      // goalFields: result?.goalFields,
      // incomeFields: result?.incomeFields,
      // uniqueId: result?.uniqueId,
      // date: result?.date,
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

export const handleFinancialForm = (obj) => {
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

    setTimeout(() => {
      if (localStorage.getItem("financialForm")) {
        var localData = JSON.parse(localStorage.getItem("financialForm"));
        // console.log("GET loacl avail", localData);
        localData?.push({
          ...finalData,
          investment_personality:localData?.investment_personality?localData?.investment_personality:"",
          date: fullDate,
          uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
        });
        localStorage.setItem("financialForm", JSON.stringify(localData));
      } else {
        summaryArr.push({
          ...finalData,
          investment_personality:"",
          date: fullDate,
          uniqueId: generateUniqueId(finalData?.clientDetail?.clientName),
        });
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
