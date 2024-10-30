import getProductsCategory from "@/actions/getProductsCategory";
import CategoryName from "./_components/CategoryName";
import { Suspense } from "react";
import Loading from "@/components/loading";

const CategoryNamePage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const products = await getProductsCategory(categoryId);

  if (!products || products.products.length === 0) {
    return (
      <p className="text-3xl text-center my-10">No Product for this category</p>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName
          products={products.products}
          categoryName={products.categoryName!}
        />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
