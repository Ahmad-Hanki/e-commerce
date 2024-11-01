import { redirect } from "next/navigation";
import getAllProductForThePackages from "../_actions/getAllProductForThePackages";
import PackageForm from "../PackageForm";

const AddPage = async () => {
  const productsData = await getAllProductForThePackages();

  if (!productsData) {
    redirect("/dashboard");
  }
  return (
    <div className="py-10 min-h-[60vh] grid place-content-center">
      <PackageForm Products={productsData} />
    </div>
  );
};

export default AddPage;
