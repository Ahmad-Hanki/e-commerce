"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import Container from "@/components/Container";

// Define the type for the chart data
interface ChartData {
  month: string;
  totalPayment: number;
}

// Define the type for the component props
interface ChartProps {
  data: ChartData[]; // Dynamic chart data passed as a prop
}

const chartConfig = {
  totalPayment: {
    label: "Total Payment",
    color: "hsl(var(--chart-2))",
  },
};

export default function Chart({ data }: ChartProps) {
  return (
    <div className="py-20">
      <Container>
        <div>
          <CardTitle>Bar Chart - Total Payment</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </div>
        <div>
          <ChartContainer config={chartConfig}>
            <BarChart className="w-full" height={250} data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)} // Format month abbreviation
              />
              <YAxis />
              <Tooltip
                formatter={(value) => [value, chartConfig.totalPayment.label]} // Tooltip only for totalPayment
              />
              <Legend
                formatter={() => chartConfig.totalPayment.label} // Legend only for totalPayment
              />

              <Bar
                dataKey="totalPayment"
                fill={chartConfig.totalPayment.color}
                radius={[4, 4, 0, 0]}
                barSize={45} // Adjust the width of the bar to fit the container better
              />
            </BarChart>
          </ChartContainer>
        </div>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing data for the last 6 months
          </div>
        </CardFooter>
      </Container>
    </div>
  );
}
