import "./chartComp.scss"
import { Bar } from "react-chartjs-2";

function ChartComp({ chartData }) {
    return (
        <Bar
            data={chartData}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "Activity"
                    },
                    legend: {
                        display: false
                    }
                }
            }}
        />
    )
}

export default ChartComp;