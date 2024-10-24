export const ownershipType = {
  direct: "direct",
  reit: "reit",
  // commercial: "commercial",
  // crowdfund: "crowdfund",
};

export const country = [
  { label: "India" },
  { label: "US" },
  { label: "UK" },
  { label: "Japan" },
];

// -----------stock companies------------------

export const companies = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];

// -------------------------market-----------------------

export const markets = [
  { label: "Dow Jones" },
  { label: "NASDAQ" },
  { label: "S&P 500" },
];

// -------------------------ownership-----------------------

export const ownership = [
  { label: "Direct", type: ownershipType?.direct },
  { label: "REIT/Fund", type: ownershipType?.reit },
  {
    label: "Commercial Real Estate (Triple Net Lease)",
    type: ownershipType?.commercial,
  },
  // {
  //   label: "Crowdfunded Real Estate Investments",
  //   type: ownershipType?.crowdfund,
  // },
];

// -------------------------ownership names-----------------------

export const reitList = [
  { label: "Regency Centers Corporation", ticker: "REG" },
  { label: "Kimco Realty Corporation", ticker: "KIM" },
  { label: "Federal Realty Investment Trust", ticker: "FRT" },
  { label: "Federal Realty Investment Trust", ticker: "FRT-PC" },
];

export const commercialList = [
  { label: "Prologis", ticker: "PLD" },
  { label: "Simon Property Group", ticker: "SPG" },
  { label: "Equinix", ticker: "EQIX" },
  // { label: "Vornado Realty Trust", ticker: "VNO" },
];

export const crowdfundedList = [
  { label: "Equity Residential", ticker: "EQR" },
  // { label: "Simon Property Group", ticker: "SPG" },
  // { label: "Equinix", ticker: "EQIX" },
  // { label: "Vornado Realty Trust", ticker: "VNO" },
];

export const directList = [
  { label: "Direct", ticker: "DR" },
  // { label: "Simon Property Group", ticker: "SPG" },
  // { label: "Equinix", ticker: "EQIX" },
  // { label: "Vornado Realty Trust", ticker: "VNO" },
];

// -------------------------company names-----------------------

export const commodities = [
  { label: "Commodities Index", ticker: "COM" },
  { label: "Commodities Basket", ticker: "BSKT" },
  // { label: "Resource Fund", ticker: "RSRC" },
  { label: "Natural Assets", ticker: "NAT" },
  { label: "Metals Index", ticker: "AMI" },
];

export const mutualFunds = [
  { label: "Fidelity 500 Index Fund", ticker: "FXAIX" },
  { label: "Dodge & Cox Stock Fund", ticker: "DODGX" },
  { label: "Schwab S&P 500 Index Fund", ticker: "SWPPX" },
  { label: "Fidelity Contrafund", ticker: "FCNTX" },
];

export const stocks = [
  { label: "Tesla", ticker: "TSLA" },
  { label: "NVIDIA Corporation", ticker: "NVDA" },
  { label: "Apple", ticker: "AAPL" },
];

export const crypto = [
  { label: "Bitcoin", ticker: "BTC-USD" },
  { label: "Litecoin", ticker: "LTC-USD" },
  { label: "Ethereum", ticker: "ETH-USD" },
];

export const bonds = [
  { label: "iShares Core U.S. Aggregate Bond ETF", ticker: "AGG" },
  { label: "Vanguard Total Bond Market ETF", ticker: "BND" },
  { label: "iShares U.S. Treasury Bond ETF", ticker: "GOVT" },
  { label: "Corporate Bond Fund", ticker: "CBND" },
];

// -------------------------asset class-----------------------

export const assets = [
  { label: "Stocks", isChangeUI: false },
  { label: "Bonds", isChangeUI: false },
  { label: "Real Estate", isChangeUI: true },
  { label: "Commodities", isChangeUI: false },
  { label: "Mutual Funds", isChangeUI: false },
  // { label: "ETFS", isChangeUI: false },
  { label: "Cryptocurrency", isChangeUI: false },
];
