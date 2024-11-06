import { notFound } from "next/navigation";
import getOnePackage from "../_actions/getOnePackage";
import PackageForm from "../PackageForm";
import getAllProductForThePackages from "../_actions/getAllProductForThePackages";

const EditPackagePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  const pkg = await getOnePackage(id);
  const products = await getAllProductForThePackages();

  if (!pkg) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1>Paket Verilerini Düzenle</h1>
      <PackageForm Products={products} initialData={pkg} />
    </div>
  );
};

export default EditPackagePage;
