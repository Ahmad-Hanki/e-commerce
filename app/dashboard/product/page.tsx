import { ApiAlert } from "../_components/ApiAlert";
import Heading from "../_components/Heading";

import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "../_components/DataTable";
import { Plus } from "lucide-react";
import getAllProducts from "./_actions/getAllProducts";
import { productColumns } from "./_components/table/columns";

const ProductPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="mt-[88px] sm:mt-[10px] w-full flex-1">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-5 gap-12 sm:gap-2">
          <Heading
            total={products?.length}
            description={"Toplam Ürünler"}
            title={"Ürün Veri Tablosu"}
          />

          <Link href={"/dashboard/product/add"}>
            <Button className="py-4 px-3 bg-secondary-foreground hover:bg-secondary-foreground/70">
              <Plus className="h-5 w-5 text-secondary " />
            </Button>
          </Link>
        </div>

        <Separator className="mt-5 mb-10" />

        <DataTable columns={productColumns} data={products} filtered="barkod" />
        <Heading title="API" description="API calls for entered Product" />
        <Separator />
        <ApiAlert />
      </Container>
    </div>
  );
};

export default ProductPage;
