import getCategories from "@/actions/getCategories";
import ProductForm from "../ProductForm";

const AddPage = async () => {
  const categories = await getCategories();
  return (
    <div className="py-10 min-h-[60vh] grid place-content-center">
      <ProductForm categoryData={categories} />
    </div>
  );
};

export default AddPage;
