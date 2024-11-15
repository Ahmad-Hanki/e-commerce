import getChartOrderData from "./_action/chartOrders";
import Chart from "./_components/Chart";

// Assuming the data is fetched from your server-side code
export default async function ChartPage() {
  const chartData = await getChartOrderData();

  return (
    <>
      <Chart data={chartData} />
    </>
  );
}
