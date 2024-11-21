"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Container from "@/components/Container";

// Define the type for the chart data
interface ChartData {
  month: string;
  totalOrders: number;
}

// Define the type for the component props
interface ChartProps {
  data: ChartData[]; // Dynamic chart data passed as a prop
}

const chartConfig = {
  totalOrders: {
    label: "Total Orders",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function LineChartComponent({ data }: ChartProps) {
  return (
    <div className="pb-20">
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Line Chart - Total Orders</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="totalOrders"
                  type="natural"
                  stroke="var(--color-totalOrders)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total orders for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}
