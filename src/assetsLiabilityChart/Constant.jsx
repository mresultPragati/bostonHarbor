export const total = (chartData) => {
  return chartData?.datasets?.[0]?.data?.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),

    0
  );
};

export const getMidDarkColor = () => {
  // Generate random RGB values within the mid-dark range (0-150)
  const r = Math.floor(Math.random() * 185); // 0 to 150
  const g = Math.floor(Math.random() * 185); // 0 to 150
  const b = Math.floor(Math.random() * 185); // 0 to 150

  return `rgb(${r}, ${g}, ${b})`;
};

export const extractKeysAndValues = (arr) => {
  const labelsArray = [];
  const valueArray = [];

  //   ----------------------------OLD-------------------------
  arr?.datasets?.[0]?.data?.map((item, index) => {
    if (item) {
      labelsArray?.push(arr?.labels[index]);
      valueArray?.push(Number(item));
    }
  });

  var backgroundColor = [];

  for (let i = 0; i <= arr?.datasets?.[0]?.data?.length; i++) {
    backgroundColor?.push(getMidDarkColor());
  }

  const data = {
    labels: labelsArray,
    //   datasets: valueArray,
    datasets: [
      {
        label: "Assets",
        data: valueArray,
        backgroundColor: backgroundColor,
        // backgroundColor: "rgba(55, 170, 241, 0.2)",
        // borderColor: "#0979f1",
        borderWidth: 1,
      },
    ],
  };

  return data;
};
