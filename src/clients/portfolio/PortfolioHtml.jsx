// import { Button } from "@mui/material";
// import React, { useEffect } from "react";

// const PortfolioHtml = ({ portfolioHtml, generatePortfolioSuggestion }) => {
//   useEffect(() => {
//     openPortfolioInNewTab();
//   }, [portfolioHtml]);

//   const openPortfolioInNewTab = () => {
//     const newWindow = window.open; // Open a new tab
//     if (newWindow) {
//       newWindow.document.write(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Portfolio</title>
//           <style>
//             body { font-family: Arial, sans-serif; padding: 20px; }
//             /* Add more styles as needed */
//           </style>
//         </head>
//         <body>
//           <h1>Portfolio Details</h1>
//           <div>${portfolioHtml}</div>
//         </body>
//         </html>
//       `);
//       newWindow.document.close(); // Close the document to render the content
//     }
//   };
//   console.log("portfolioHtml", portfolioHtml);

//   return (
//     <div>
//       <div className="d-flex justify-content-end mb-4">
//         <Button
//           variant="contained"
//           onClick={() => generatePortfolioSuggestion()}
//         >
//           {" "}
//           Portfolio Analysis
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default PortfolioHtml;

import React, { useEffect, useState } from "react";

const PortfolioHtml = () => {
  const [portfolioHtml, setPortfolioHtml] = useState("");

  useEffect(() => {
    // Retrieve the portfolio HTML from localStorage
    const storedHtml = localStorage.getItem("portfolioHtml");
    setPortfolioHtml(storedHtml);

    // if (window?.open?.closed) localStorage.removeItem("portfolioHtml");
  }, []);

  return (
    <div style={{ textAlign: "start" }}>
      <div dangerouslySetInnerHTML={{ __html: portfolioHtml }} />
    </div>
  );
};

export default PortfolioHtml;
