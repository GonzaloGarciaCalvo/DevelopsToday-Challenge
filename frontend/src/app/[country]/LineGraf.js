"use client"
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

function LineGraf ({lineChartData}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)
    const options= {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: 'white' // Cambia el color de la fuente de la leyenda
          }
        }
      },}
  console.log("GRAFICO")
  console.log("lineChartData", lineChartData)
  ChartJS.defaults.color = '#FFFFFF';
  return (
    <div className="p-2 xl:py-18 xl:px-24 flex justify-center">
      <Line options={options} data={lineChartData} />
    </div>
  )
}
export default LineGraf