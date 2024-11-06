import { ApiAlert } from "../_components/ApiAlert";
import Heading from "../_components/Heading";

import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "../_components/DataTable";
import { Plus } from "lucide-react";
import getAllPackages from "./_actions/getAllPackages";
import { PackageColumns } from "./_components/table/columns";

const PackagePage = async () => {
  const packages = await getAllPackages();



  

  return (
    <div className="mt-[88px] sm:mt-[10px] w-full flex-1">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-5 gap-12 sm:gap-2">
          <Heading
            total={packages?.length}
            description={"Toplam Paketler"}
            title={"Kategori Veri Veri"}
          />

          <Link href={"/dashboard/package/add"}>
            <Button className="py-4 px-3 bg-secondary-foreground hover:bg-secondary-foreground/70">
              <Plus className="h-5 w-5 text-secondary " />
            </Button>
          </Link>
        </div>

        <Separator className="mt-5 mb-10" />

        <DataTable
          columns={PackageColumns}
          data={packages}
          filtered="productDescription" // this is the column that will be filtered
        />
        <Heading title="API" description="API calls for entered Package" />
        <Separator />
        <ApiAlert />
      </Container>
    </div>
  );
};

export default PackagePage;
