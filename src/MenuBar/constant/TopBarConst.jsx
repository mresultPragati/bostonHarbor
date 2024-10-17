export const navigatorPath = {
  dashboard: "/",
  financialForm: "/financialForm",
  InvestmentPersonality: "/investmentPersonality",
  advisorAnalysis: "/advisorAnalysis",
  stockAnalysis: "/stockAnalysis",
  taxAnalysis: "/taxAnalysis",
  transaction: "/transaction",
  assetsLiabilityDetails: "/assetsLiabilityDetails",
  orders: "/client/orders",
  summary: "/client/summary",
  portfolio: "/client/portfolio",
};

export const topbarMenu = [
  { name: "Dashboard", path: navigatorPath?.dashboard },
  { name: "Financial Form", path: navigatorPath?.financialForm },
  { name: "Investor Assessment", path: navigatorPath?.InvestmentPersonality },
  // { name: "Transaction Form", path: navigatorPath?.transaction },
  // { name: "Investment Allocation", path: navigatorPath?.investment },
  { name: "Investor Suggestion", path: navigatorPath?.advisorAnalysis },
  {
    name: "Analysis",
    subMenu: [
      // {
      //   menuItem: "Investor Suggestion",
      //   menuPath: navigatorPath?.advisorAnalysis,
      // },
      {
        menuItem: "Stock Analysis",
        menuPath: navigatorPath?.stockAnalysis,
      },
      // {
      //   menuItem: "Tax Analysis",
      //   menuPath: navigatorPath?.taxAnalysis,
      // },
    ],
  },
  // { name: "Investor Suggestion", path: navigatorPath?.advisorAnalysis },
];

export const returnSubTopbarCss = (item, location) => {
  const isActive = location.pathname.startsWith(item.path);
  let boxShadow = "";
  let height = "4rem";
  let color = "#0d3553";
  // let color = "#1976d2";
  let borderRadius = "0px";
  let background = "";

  if (isActive) {
    boxShadow = "0 2px 0 1px #fff";
    height = "4rem";
    color = "#1976d2";
    borderRadius = "0px";
    // background = "#002a4a";
  }
  return {
    boxShadow: boxShadow,
    height: height,
    color: color,
    borderRadius: borderRadius,
    background: background,
    padding: "0 0.8rem 0 0.8rem",
    // width: "min-content",
    textAlign: "left",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)", // Optional hover effect
    },
  };
};

export const returnCssTopbar = (item, locationPath) => {
  let boxShadow = "";
  let color = "#002a4a"; // Default color
  let fontSize = "12.5px"; // Default font size
  let textTransform = "uppercase"; // Optional: Make the text uppercase
  let margin = "0 10px"; // Add spacing between buttons
  let padding = "6px 16px"; // Control padding inside the button

  // Check if the item has a submenu
  if (item?.subMenu && item?.subMenu.length > 0) {
    // Iterate through the submenu items
    item.subMenu?.forEach((item) => {
      // If any submenu item path matches the location path
      if (item.menuPath === locationPath) {
        boxShadow = "0 5px 0 -1px #1d7ad7db";
        color = "#1f5b95"; // Selected color
        fontSize = "14px"; // Selected font size
      }
    });
  } else {
    // No submenu; check if the main page path matches the location path
    if (locationPath === item.path) {
      boxShadow = "0 5px 0 -1px #1d7ad7db";
      color = "#1f5b95"; // Selected color
      fontSize = "14px"; // Selected font size
    }
  }

  // Return the style object
  return {
    height: "4rem",
    display: "block",
    boxShadow: boxShadow,
    color: color,
    fontSize: fontSize,
    textTransform: "uppercase", // Optional: Make the text uppercase
    // margin: "0 10px", // Add spacing between buttons
    // padding: "6px 16px", // Control padding inside the button
    // textTransform: textTransform,
    // margin: margin,
    // padding: padding,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)", // Optional hover effect
    },
  };
};

export const subTopItem = [
  { label: "Summary", path: navigatorPath.summary },
  { label: "Portfolio", path: navigatorPath.portfolio },
  { label: "Orders", path: `${navigatorPath.orders}` },
];
