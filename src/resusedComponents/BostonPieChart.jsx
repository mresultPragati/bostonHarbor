
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import {  Pie } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Now you can use Bar and Pie charts in your component


export const BostonPieChart=(props)=>{
const {data}=props;

console.log("bar chart data",data);

    return(
        <>
       {(data && data?.datasets) && <Pie data={data} />}
        </>
    )
}