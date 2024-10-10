import TransactionForm from "../../investment/TransactionForm";

export const navigatorPath = {
  dashboard: "/",
  financialForm: "/financialForm",
  InvestmentPersonality: "/investmentPersonality",
  advisorAnalysis: "/advisorAnalysis",
  stockAnalysis: "/stockAnalysis",
  taxAnalysis: "/taxAnalysis",
  transaction: "/transaction",
  investment: "/investment",
};

export const topbarMenu = [
  { name: "Dashboard", path: navigatorPath?.dashboard },
  { name: "Financial Form", path: navigatorPath?.financialForm },
  { name: "Investor Assessment", path: navigatorPath?.InvestmentPersonality },
  // { name: "Transaction Form", path: navigatorPath?.transaction },
  { name: "Investment Allocation", path: navigatorPath?.investment },
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

export const returnCssTopbar = (page, locationPath) => {
  let boxShadow = "";
  let color = "#002a4a"; // Default color
  let fontSize = "12.5px"; // Default font size
  let textTransform = "uppercase"; // Optional: Make the text uppercase
  let margin = "0 10px"; // Add spacing between buttons
  let padding = "6px 16px"; // Control padding inside the button

  // Check if the page has a submenu
  if (page?.subMenu && page?.subMenu.length > 0) {
    // Iterate through the submenu items
    page.subMenu.forEach((item) => {
      // If any submenu item path matches the location path
      if (item.menuPath === locationPath) {
        boxShadow = "0 5px 0 -1px #1d7ad7db";
        color = "#1f5b95"; // Selected color
        fontSize = "14px"; // Selected font size
      }
    });
  } else {
    // No submenu; check if the main page path matches the location path
    if (locationPath === page.path) {
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
