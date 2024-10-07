export const extractHtmlContent = (htmlString, startText, endText) => {
  const startIndex = htmlString.indexOf(startText);
  const endIndex = htmlString.indexOf(endText, startIndex);

  if (startIndex === -1 || endIndex === -1) {
    return { extracted: "", remaining: htmlString };
  }

  const initial = htmlString.slice(0, startIndex);
  const extracted = htmlString.slice(startIndex - 8, endIndex);
  //   const extracted = htmlString.substring(startIndex, endIndex + endText.length);
  //   const remaining = htmlString.substring(endIndex + endText.length);
  const remaining = htmlString.substring(endIndex - 8, htmlString.length);
  //   const remaining = htmlString.substring(endIndex);

  console.log(
    "reMAINING-->>>",
    remaining
    // htmlString.substring(endIndex - 8, htmlString.length)
    // htmlString.chartAt(startIndex)
  );

  return {
    initial: initial,
    extracted: extracted,
    remainingHtml: remaining,
  };

  //   const startIndex = htmlString.indexOf(startText);
  //   const endIndex = htmlString.indexOf(endText, startIndex) + endText.length;

  //   if (startIndex === -1 || endIndex === -1) {
  //     return ""; // Text not found
  //   }

  //   const leftContent = htmlString.slice(startIndex, endIndex);
  //   const remainingContent = htmlString.slice(endIndex);

  // return {
  //   InvestmentAllocation: leftContent,
  //   remainingHtml: remainingContent,
  // };
  //   //   return htmlString.substring(startIndex, endIndex);
};

// htmlUtils.js
export const advisorExtractHtmlContent = (htmlString) => {
  const startTableIdx = htmlString.indexOf("<table>");
  const endTableIdx = htmlString.indexOf("</table>") + 8; // Length of '</table>'

  const tableContent = htmlString.slice(startTableIdx, endTableIdx); // Extract table part
  const restOfContent = htmlString.replace(tableContent, ""); // Extract non-table content

  return { tableContent, restOfContent };
};

export const financialInfoStyleMapping = {
  h2: {
    color: "gray",
  },
  p: {
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "16px",
  },
  strong: {
    fontWeight: "bold",
    color: "gray",
    fontSize: "18px",
  },
  ul: {
    paddingLeft: "20px",
    marginBottom: "16px",
  },
  li: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  th: {
    color: "#000",
    padding: "15px",
    fontSize: "16px",
    textAlign: "left",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "8px 0 8px 15px",
    fontSize: "16px",
    color: "#333",
    borderBottom: "1px solid #ddd",
  },
  tr: {
    transition: "background-color 0.3s",
  },
  "tr:hover": {
    backgroundColor: "#f5f5f5",
  },
};
