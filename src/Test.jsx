// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Highcharts3D from "highcharts/highcharts-3d";

// // Initialize the 3D module
// Highcharts3D(Highcharts);

// const PieChart3D = () => {
//   const options = {
//     chart: {
//       type: "pie",
//       backgroundColor: "#fff",
//       options3d: {
//         enabled: true,
//         alpha: 45,
//         beta: 0,
//       },
//     },
//     title: {
//       text: "3D Pie Chart Example",
//     },
//     plotOptions: {
//       pie: {
//         depth: 45, // Increase the height of pie vertically
//         allowPointSelect: true, // Allow pie slices to be selected
//         cursor: "pointer",
//         dataLabels: {
//           enabled: true,
//           format: "{point.name}: {point.percentage:.1f}%", // Display percentage in data label
//         },
//         states: {
//           hover: {
//             brightness: 0.1, // Disable hover brightness globally for all slices
//           },
//           select: {
//             brightness: 1, // Increase brightness only on the selected slice
//           },
//         },
//         showInLegend: true,
//       },
//     },
//     series: [
//       {
//         name: "Share",
//         data: [
//           {
//             name: "Category A",
//             y: 4563,
//             // sliced: true, // Uncomment if you want this slice pre-selected
//             // selected: true,
//           },
//           {
//             name: "Category B",
//             y: 2600,
//           },
//           {
//             name: "Category C",
//             y: 1296,
//           },
//           {
//             name: "Category D",
//             y: 1702,
//           },
//         ],
//       },
//     ],
//     tooltip: {
//       formatter: function () {
//         const valueWithoutSeparator = Highcharts.numberFormat(
//           this.y,
//           0,
//           ".",
//           ""
//         );
//         return `${this.point.name}: ${valueWithoutSeparator}`;
//       },
//     },
//   };

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default PieChart3D;

// ---------------------------------------Pre code -> pie chart--------------------
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highcharts3D from "highcharts/highcharts-3d";

// Initialize the 3D module
Highcharts3D(Highcharts);

const PieChart3D = () => {
  // const options = {
  // chart: {
  // type: "pie",
  // // backgroundColor: "#fff",
  // options3d: {
  // enabled: true,
  // alpha: 45,
  // beta: 0,
  // },
  // },
  // title: {
  // text: "3D Pie Chart Example",
  // },
  // plotOptions: {
  // pie: {
  // // innerSize: 100,
  // depth: 45,
  // dataLabels: {
  // enabled: true,
  // format: "{point.name}: {point.percentage:.1f} %",
  // },
  // states: {
  // hover: {
  // brightness: 0.5, // Increase brightness on hover
  // },
  // },

  // },
  // },
  // series: [
  // {
  // name: "Share",
  // data: [
  // ["Category A", 45],
  // ["Category B", 26],
  // ["Category C", 12],
  // ["Category D", 17],
  // ],
  // },
  // ],
  // };

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "#fff",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: "3D Pie Chart Example",
    },
    plotOptions: {
      pie: {
        // innerSize: 100,
        depth: 45, // to increase the hight of pie vertically
        dataLabels: {
          enabled: true,
          formatter: function () {
            const total = this.series.data.reduce(
              (sum, point) => sum + point.y,
              0
            ); // Calculate total
            console.log("totaltotal data", this.series.data);
            console.log("totaltotal", total);

            const percentage = ((this.y / total) * 100).toFixed(2) + "%"; // Calculate percentage
            return `${this.point.name}: ${percentage}`; // Return formatted label
          },
          formatter: function () {
            const total = this.series.data.reduce(
              (sum, point) => sum + point.y,
              0
            ); // Calculate total
            console.log("totaltotal data", this.series.data);
            console.log("totaltotal", total);

            const percentage = ((this.y / total) * 100).toFixed(2) + "%"; // Calculate percentage
            return `${this.point.name}: ${percentage}`; // Return formatted label
          },

          // formatter: function () {
          //   const total = this.series.data.reduce(
          //     (sum, point) => sum + point.y,
          //     0
          //   ); // Calculate total
          //   const percentage = ((this.y / total) * 100).toFixed(2) + "%"; // Calculate percentage

          //   // Use Highcharts.numberFormat to disable the thousands separator
          //   const valueWithoutSeparator = Highcharts.numberFormat(
          //     this.y,
          //     0,
          //     ".",
          //     ""
          //   ); // No thousands separator
          //   return `${this.point.name}: ${percentage} (${valueWithoutSeparator})`; // Return formatted label
          // },
        },
        states: {
          hover: {
            brightness: 0.1, // Increase brightness on hover
          },
        },
        allowPointSelect: true, // Allow the pie to be selected
        cursor: "pointer",
        showInLegend: true,
      },
      states: {
        hover: {
          brightness: 0.3, // Disable hover brightness globally for all slices
        },
        select: {
          brightness: 1, // Increase brightness only on the selected slice
        },
      },
    },
    series: [
      {
        name: "Share",
        data: [
          {
            name: "Category A",
            y: 4563,
            // sliced: true, // This slice is highlighted
            // selected: true,
            // color: "#c91515", // Highlighted color for Category A
          },
          {
            name: "Category B",
            y: 2600,
          },
          {
            name: "Category C",
            y: 1296,
          },
          {
            name: "Category D",
            y: 1702,
          },
        ],
      },
    ],
    tooltip: {
      formatter: function () {
        // Use Highcharts.numberFormat to remove the thousands separator in the tooltip
        const valueWithoutSeparator = Highcharts.numberFormat(
          this.y,
          0,
          ".",
          ""
        );
        return `${this.point.name}: ${valueWithoutSeparator}`;
      },
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart3D;

// ---------------------------------------------------

// import React from "react";

// const ClientFinancialInfo = ({ rawHtml }) => {
// // Function to extract the financial overview part
// const extractFinancialOverview = (html) => {
// const match = html.match(/\| Category \| Value \|[\s\S]*?\|/);
// return match ? match[0] : "";
// };

// // Function to convert the extracted financial overview to a table
// const convertToTable = (tableString) => {
// const rows = tableString
// .split("\n")
// .filter((row) => row.includes("|"))
// .slice(2); // Skip header

// return (
// <table
// border="1"
// cellPadding="10"
// style={{ borderCollapse: "collapse", width: "100%" }}
// >
// <thead>
// <tr>
// <th>Category</th>
// <th>Value</th>
// </tr>
// </thead>
// <tbody>
// {rows.map((row, index) => {
// const [category, value] = row.split("|").map((item) => item.trim());
// return (
// <tr key={index}>
// <td>{category}</td>
// <td>{value}</td>
// </tr>
// );
// })}
// </tbody>
// </table>
// );
// };

// // Extract the financial overview table string
// const financialOverviewString = extractFinancialOverview(rawHtml);
// // Remove the financial overview from the original HTML string
// const cleanedHtml = rawHtml.replace(financialOverviewString, "");

// return (
// <div>
// {/* Render the rest of the HTML content */}
// <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />

// {/* Render the financial overview as a table */}
// <h2>Financial Overview:</h2>
// {convertToTable(financialOverviewString)}
// </div>
// );
// };

// export default ClientFinancialInfo;