import { notFound } from "next/navigation";
import ProductForm from "../ProductForm";
import getOneProduct from "../_actions/getOneProduct";
import getCategories from "@/actions/getCategories";

const EditCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  const categories = await getCategories();
  const product = await getOneProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1>Edit Category Data</h1>
      <ProductForm categoryData={categories} initialData={product} />
    </div>
  );
};

export default EditCategoryPage;
