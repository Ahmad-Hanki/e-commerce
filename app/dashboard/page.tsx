import getChartOrderData from "./_action/chartOrders";
import Chart from "./_components/Chart";
import LineChartComponent from "./_components/LineChart";

// Assuming the data is fetched from your server-side code
export default async function ChartPage() {
  const chartData = await getChartOrderData();

  return (
    <div>
      <Chart data={chartData} />
      <LineChartComponent data={chartData} />
    </div>
  );
}
