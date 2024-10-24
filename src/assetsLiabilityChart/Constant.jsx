import { isEmpty } from "../resusedComponents/constant/ResusableConst";

export const total = (chartData) => {
  return chartData?.datasets?.[0]?.data?.reduce(
    (accumulator, currentValue) =>
      Number(accumulator ? accumulator : 0) +
      Number(currentValue ? currentValue : 0),

    0
  );
};

export const getMidDarkColor = () => {
  // Generate random RGB values within the mid-dark range (0-150)
  const r = Math.floor(Math.random() * 240);
  const g = Math.floor(Math.random() * 240);
  const b = Math.floor(Math.random() * 240);

  return `rgb(${r}, ${g}, ${b})`;
};

export const extractKeysAndValues = (obj) => {
  const labelsArray = [];
  const valueArray = [];

  //   ----------------------------OLD-------------------------
  // if (isEmpty(obj)) {
  obj?.datasets?.[0]?.data?.map((item, index) => {
    console.log("itemitem", item);

    if (typeof item === "number" && !isNaN(item)) {
      labelsArray?.push(obj?.labels[index]);
      valueArray?.push(Number(item));
    }
  });

  var backgroundColor = [];

  for (let i = 0; i <= labelsArray?.length; i++) {
    // for (let i = 0; i <= obj?.datasets?.[0]?.data?.length; i++) {
    backgroundColor?.push(getMidDarkColor());
  }

  const labels = obj?.labels;
  const data = obj?.datasets[0].data;

  const sortedDataWithLabels = labels?.map((label, index) => ({
    label,
    data: !isNaN(data[index]) && parseFloat(data[index]),
  }));
  console.log("sortedDataWithLabels", sortedDataWithLabels);

  sortedDataWithLabels?.sort((a, b) => b.data - a.data);

  const sortedLabels = sortedDataWithLabels?.map((item) => item.label);
  // const sortedData = sortedDataWithLabels?.map((item) => item.data);
  const sortedData = sortedDataWithLabels
    ?.map((item) => item.data)
    .filter((data) => typeof data === "number" && !isNaN(data));

  obj.labels = sortedLabels;
  obj.datasets[0].data = sortedData;

  console.log("Sorted Assets Data:", obj);
  console.log("Sorted Labels:", sortedLabels);
  console.log("Sorted Data:", sortedData);

  const assetsData = {
    labels: sortedLabels,
    //   datasets: valueArray,
    datasets: [
      {
        label: "Assets",
        data: sortedData,
        backgroundColor: backgroundColor,
        // backgroundColor: "rgba(55, 170, 241, 0.2)",
        // borderColor: "#0979f1",
        borderWidth: 1,
      },
    ],
  };

  return assetsData;
  // }
};
