export const calculateDaysFromNow = (dateString) => {
  //   const targetDate = new Date(dateString);

  //   const currentDate = new Date();

  //   const differenceInTime = currentDate.getTime() - targetDate.getTime();

  //   const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  //   return differenceInDays;

  const datePart = dateString.split(",")[0];
  const targetDate = new Date(datePart);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffInTime = today - targetDate;
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24)); // 1000 ms * 60 sec * 60 min * 24 hours

  return diffInDays;
};

export const openInNewTab = (htmlContent) => {
  // Create a new window (tab)
  const newTab = window.open();

  // Write the HTML content to the new tab
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
  newTab.document.close(); // Close the document to finish loading
};
