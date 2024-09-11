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
