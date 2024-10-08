import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { financialInfoStyleMapping } from "../constants/AdvisorContant";

// Function to clean up and apply styles to strong elements
const applyStrongStyles = (htmlString) => {
  // Remove <td> and <p> tags and their closing counterparts
  const cleanedHtml = htmlString?.replace(/<\/?(td|p)>/gi, "").trim();

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanedHtml, "text/html");

  // Apply styles to <strong> elements
  const strongTags = doc.querySelectorAll("strong");
  strongTags.forEach((strong) => {
    strong.style.fontWeight = financialInfoStyleMapping.strong.fontWeight;
    strong.style.color = financialInfoStyleMapping.strong.color;
    strong.style.fontSize = financialInfoStyleMapping.strong.fontSize;
  });

  return doc.body.innerHTML;
};

const AdvisorAnalysisHtml = ({ htmlString }) => {
  // Split content based on "Financial Analysis" section.
  const splitContent = htmlString.split("Financial Analysis:");

  // Part 1: Content from "Client's Financial Information" to "Financial Analysis"
  const financialInfoHTML = splitContent[0];

  // Part 2: Content below "Financial Analysis"
  const financialAnalysisHTML = splitContent[1];

  const renderTableFromHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const rows = Array.from(doc.querySelectorAll("tbody tr"));
    const header = rows[0]; // First row for the header (Category, Value)

    // Extracting column headings dynamically and filtering out empty headers
    const columnHeaders = Array.from(header.querySelectorAll("td"))
      .map((col) => col.innerText.trim())
      .filter((headerText) => headerText !== "");

    console.log("headerText initail", columnHeaders);
    // Replace "---" at the 1st and 2nd indices with "Category" and "Value"
    columnHeaders.forEach((headerText, index) => {
      if (headerText === "---") {
        if (index === 0) {
          columnHeaders[index] = "Category"; // Replace first "---" with "Category"
        } else if (index === 1) {
          columnHeaders[index] = "Value"; // Replace second "---" with "Value"
        }
      }
    });

    console.log("headerText", columnHeaders);

    // The remaining rows for data
    const dataRows = rows.slice(1);

    return (
      <>
        <TableHead>
          <TableRow style={financialInfoStyleMapping.tr}>
            {columnHeaders.map((headerText, index) => (
              <TableCell key={index} style={financialInfoStyleMapping.th}>
                {headerText}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll("td"));
            return (
              <TableRow key={rowIndex} style={financialInfoStyleMapping.tr}>
                {columns.map((col, colIndex) => (
                  <TableCell
                    key={colIndex}
                    style={financialInfoStyleMapping.td}
                  >
                    {col.innerText === "---"
                      ? ""
                      : col.innerText || col.textContent}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </>
    );
  };

  return (
    <div>
      <h2 className="mb-4" style={financialInfoStyleMapping.h2}>
        Client's Financial Information:
      </h2>

      <Table sx={financialInfoStyleMapping.table}>
        {renderTableFromHTML(financialInfoHTML)}
      </Table>

      <div>
        <h2 className="mb-3" style={financialInfoStyleMapping.h2}>
          Financial Analysis:
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: applyStrongStyles(
              financialAnalysisHTML?.replace(
                /<tr>|<\/tr>|<td>|<\/td>|<table>|<\/table>/gi,
                ""
              )
            ),
          }}
          style={financialInfoStyleMapping.p}
        />
      </div>
    </div>
  );
};

export default AdvisorAnalysisHtml;

// import React, { useState } from "react";
// import parse, { domToReact } from "html-react-parser";

// // Style mapping for the `tableWrappedFinancialInfo` section
// const financialInfoStyleMapping = {
//   p: {
//     color: "#333",
//     fontSize: "16px",
//     lineHeight: "1.7",
//     marginBottom: "16px",
//   },
//   strong: {
//     fontWeight: "bold",
//     color: "#2979BF",
//     fontSize: "18px",
//   },
//   ul: {
//     paddingLeft: "20px",
//     marginBottom: "16px",
//   },
//   li: {
//     fontSize: "16px",
//     lineHeight: "1.6",
//     color: "#555",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginBottom: "24px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//   },
//   th: {
//     color: "#000",
//     padding: "5px",
//     fontSize: "16px",
//     textAlign: "left",
//     fontWeight: "bold",
//     letterSpacing: "0.05em",
//     borderBottom: "2px solid #ddd",
//   },
//   td: {
//     padding: "5px",
//     fontSize: "16px",
//     color: "#333",
//     borderBottom: "1px solid #ddd",
//   },
//   tr: {
//     transition: "background-color 0.3s",
//   },
//   "tr:hover": {
//     backgroundColor: "#f5f5f5",
//   },
// };

// // Style mapping for the `remainingHtml` section
// const remainingHtmlStyleMapping = {
//   p: {
//     color: "#333",
//     fontSize: "16px",
//     lineHeight: "1.7",
//     marginBottom: "16px",
//   },
//   strong: {
//     fontWeight: "bold",
//     color: "#2979BF",
//     fontSize: "18px",
//   },
//   ul: {
//     paddingLeft: "20px",
//     marginBottom: "16px",
//   },
//   li: {
//     fontSize: "16px",
//     lineHeight: "1.6",
//     color: "#555",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginBottom: "24px",
//     boxShadow: "none", // No shadow for remainingHtml section
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//   },
//   th: {
//     color: "#000",
//     padding: "0", // Adjust padding for th in remainingHtml section
//     fontSize: "16px",
//     textAlign: "left",
//     fontWeight: "bold",
//     letterSpacing: "0.05em",
//     borderBottom: "none", // No border
//   },
//   td: {
//     padding: "0", // Adjust padding for td in remainingHtml section
//     fontSize: "16px",
//     color: "#333",
//     borderBottom: "none", // No bottom border
//   },
//   tr: {
//     transition: "background-color 0.3s",
//   },
//   "tr:hover": {
//     backgroundColor: "#f5f5f5",
//   },
// };

// const AdvisorAnalysisHtml = ({ htmlString }) => {
//   const preprocessHtmlString = (htmlString) => {
//     const parts = htmlString.split("Client's Financial Information:");
//     if (parts.length < 2) return htmlString;

//     const [before, rest] = parts;
//     const [financialInfo, afterFinancialInfo] = rest.split(
//       "Financial Analysis:"
//     );

//     const tableWrappedFinancialInfo = `
//       <div class="financial-info">
//         <table style="width: 100%; border-collapse: collapse;">
//           <tbody>
//             <tr><td>${financialInfo.trim()}</td></tr>
//           </tbody>
//         </table>
//       </div>
//     `;

//     const remainingHtml = `
//       <div class="remaining-info">
//         <table style="width: 100%; border-collapse: collapse;">
//           <tbody>
//             <tr><td>${afterFinancialInfo.trim()}</td></tr>
//           </tbody>
//         </table>
//       </div>
//     `;

//     return (
//       before +
//       "Client's Financial Information:" +
//       tableWrappedFinancialInfo +
//       "Financial Analysis:" +
//       remainingHtml
//     );
//   };

//   const processedHtmlString = preprocessHtmlString(htmlString);

//   const options = {
//     replace: (domNode) => {
//       console.log("domNode.attribs.class", domNode?.attribs?.class);

//       // Apply styles to the "financial-info" section
//       if (domNode.attribs && domNode.attribs.class === "financial-info") {
//         return (
//           <div style={financialInfoStyleMapping}>
//             {domToReact(domNode.children, options)}
//           </div>
//         );
//       }

//       // Apply styles to the "remaining-info" section
//       if (domNode.attribs && domNode.attribs.class === "remaining-info") {
//         return (
//           <div style={remainingHtmlStyleMapping}>
//             {domToReact(domNode.children, options)}
//           </div>
//         );
//       }

//       // Fallback for any other nodes (apply general styles if needed)
//       if (domNode?.name && financialInfoStyleMapping[domNode.name]) {
//         const newProps = { style: financialInfoStyleMapping[domNode.name] };
//         return React.createElement(
//           domNode.name,
//           newProps,
//           domToReact(domNode.children, options)
//         );
//       }
//     },
//   };

//   return <div>{parse(processedHtmlString, options)}</div>;
// };

// export default AdvisorAnalysisHtml;
// -------------------------------------------------------------------

// import React from "react";
// import parse, { domToReact } from "html-react-parser";

// // Define style mappings for each HTML tag
// const styleMapping = {
//   p: {
//     color: "#333", // dark grey text
//     fontSize: "16px",
//     lineHeight: "1.5",
//     marginBottom: "16px",
//   },
//   strong: {
//     fontWeight: "bold",
//     color: "#2979BF", // primary color for emphasis
//   },
//   ul: {
//     paddingLeft: "20px",
//     marginBottom: "16px",
//   },
//   li: {
//     fontSize: "16px",
//     lineHeight: "1.5",
//     color: "#555", // medium grey text
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginBottom: "24px",
//   },
//   th: {
//     backgroundColor: "#f0f0f0",
//     padding: "8px",
//     fontSize: "18px",
//     textAlign: "left",
//   },
//   td: {
//     padding: "8px",
//     borderBottom: "1px solid #ddd",
//     fontSize: "16px",
//     color: "#333",
//   },
// };

// const AdvisorAnalysisHtml = ({ htmlString }) => {
//   // Function to apply custom styles based on tag names
//   const options = {
//     replace: (domNode) => {
//       // Check if the domNode has children and is a valid HTML element
//       if (domNode?.name && styleMapping[domNode.name]) {
//         const newProps = {
//           style: styleMapping[domNode.name],
//         };

//         // Render children safely using domToReact
//         return React.createElement(
//           domNode.name,
//           newProps,
//           domToReact(domNode.children, options) // Ensure children are parsed correctly
//         );
//       }
//     },
//   };

//   // Parse and render the HTML string with applied styles
//   return <div>{parse(htmlString, options)}</div>;
// };

// export default AdvisorAnalysisHtml;
