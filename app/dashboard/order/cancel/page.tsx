import Container from "@/components/Container";
import Heading from "../../_components/Heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "../../_components/DataTable";
import { ApiAlert } from "../../_components/ApiAlert";
import getAllOrders from "../_actions/getAllOrders";
import { OrdersColumns } from "./_components/table/columns";

const NewOrdersPage = async () => {
  const allOrders = await getAllOrders("CANCELED");
  return (
    <div>
      <div className="mt-[88px] sm:mt-[10px] w-full flex-1">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-5 gap-12 sm:gap-2">
            <Heading
              total={allOrders.length}
              description={"Total Canceled Orders"}
              title={"Nre CANCELED"}
            />
          </div>

          <Separator className="mt-5 mb-10" />

          <DataTable
            columns={OrdersColumns}
            data={allOrders}
            filtered="shippingAddress"
          />
          <Heading title="API" description="API calls for CANCELED" />
          <Separator />
          <ApiAlert />
        </Container>
      </div>
    </div>
  );
};

export default NewOrdersPage;
