import React, { useEffect } from "react";

const PortfolioHtml = ({ htmlContent }) => {
  useEffect(() => {
    openNewTab();
  }, []);

  const openNewTab = () => {
    // Create a new tab
    const newTab = window.open();

    // Write the content to the new tab
    newTab.document.open();
    newTab.document.write(`
      <html>
        <head>
          <title>Portfolio Details</title>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `);
    newTab.document.close(); // Finalize the document
  };

  //   return (
  //     <Button variant="contained" onClick={openTab}>
  //       Open Portfolio in New Tab
  //     </Button>
  //   );
};

export default PortfolioHtml;
