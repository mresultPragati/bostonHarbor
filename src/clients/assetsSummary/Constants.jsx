// Constants.js or wherever the function is defined

export const groupByAssetClass = (portfolioList) => {
  const grouped = {};

  portfolioList.forEach((item) => {
    const { assetClass, clientAmount } = item; // Adjust this based on your actual data structure
    console.log("portfolioList", item);

    if (!grouped[assetClass]) {
      grouped[assetClass] = 0; // Initialize total transactionAmount for each assetClass
    }

    grouped[assetClass] += clientAmount || 0; // Sum the transactionAmount
  });

  // Convert the grouped object into an array of objects
  return Object.entries(grouped).map(([assetClass, totalBalance]) => ({
    assetClass,
    totalBalance,
  }));
};

export const updateKeyOfArray = (list) => {
  const updatedData = list.map((item) => {
    // Destructure to get properties and rename as needed
    const {
      AssetClass,
      assetClass,
      InvestmentAmount,
      TransactionAmount,
      Date,
      date,
      ...rest
    } = item; // Destructure to get the keys to rename

    // Return the new object with renamed keys
    return {
      ...rest, // Spread the rest of the properties
      assetClass: AssetClass || assetClass, // Change 'AssetClass' to 'assetClass'
      clientAmount: InvestmentAmount || TransactionAmount, // Set 'clientAmount' to either 'InvestmentAmount' or 'TransactionAmount'
      date: Date || date, // Set 'clientAmount' to either 'InvestmentAmount' or 'TransactionAmount'
    };
  });

  // Display the updated array
  console.log(updatedData, "commonAssetClass");
  return updatedData;
};
