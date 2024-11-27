import getChartOrderData from "./_action/chartOrders";
import Chart from "./_components/Chart";
import LineChartComponent from "./_components/LineChart";

// Assuming the data is fetched from your server-side code
export default async function ChartPage() {
  const chartData = await getChartOrderData();

  return (
    <div className="py-20 px-10">
        <div className="flex items-center justify-center gap-3">
          <Chart data={chartData} />
          <LineChartComponent data={chartData} />
        </div>
    </div>
  );
}
