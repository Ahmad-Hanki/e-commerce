import getProductsCategory from "@/actions/getProductsCategory";
import CategoryName from "./_components/CategoryName";
import { notFound } from "next/navigation";

const CategoryNamePage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const products = await getProductsCategory(categoryId);

  if (!products || products.products.length === 0) {
    return <p className="text-3xl text-center my-10">No Product for this category</p>;
  }

  return (
    <div>
      <CategoryName
        products={products.products}
        categoryName={products.categoryName!}
      />
    </div>
  );
};

export default CategoryNamePage;
