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
        <h1 className="text-3xl font-semibold text-primary">Siparişlerim</h1>

        <Table>
          <TableCaption>Son siparişlerinizin listesi.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Fatura</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Toplam</TableHead>
              <TableHead>Tarih</TableHead>
              <TableHead>Detaylar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium ">{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
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
