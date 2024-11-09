import { notFound } from "next/navigation";
import ProductForm from "../ProductForm";
import getOneProduct from "../_actions/getOneProduct";
import getUpperCategoriesWithRelatedDowner from "../_actions/getUpperCategoriesWithRelatedDowner";

const EditCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const upperCategoriesWithDowner = await getUpperCategoriesWithRelatedDowner();


 
  if (!id) {
    notFound();
  }
  
  const product = await getOneProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1 className="text-3xl font-semibold">Kategori Verilerini Düzenle</h1>
      <ProductForm  UpperCategoryWithDowner={upperCategoriesWithDowner}  initialData={product} />
    </div>
  );
};

export default EditCategoryPage;
