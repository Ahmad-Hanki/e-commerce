import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCurrentYMD } from "@/utils/getCurrentYMD";
import { OrderStatus } from "@prisma/client";
import { Eye } from "lucide-react";
import Link from "next/link";

type Order = {
  id: string;
  name: string | null;
  total: number;
  status: OrderStatus;
  createdAt: Date;
};

interface OrdersTableProps {
  orders: Order[];
  userId: string;
}

const OrdersTable = ({ orders, userId }: OrdersTableProps) => {
  return (
    <div>
      <Container>
        <h1 className="text-3xl font-semibold text-primary ">My Orders</h1>

        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium ">{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.name || "N/A"}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{getCurrentYMD(order.createdAt)}</TableCell>
                <TableCell className="cursor-pointer ">
                  <Link href={`/my-orders/${userId}/${order.id}`}>
                    <Eye />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default OrdersTable;
