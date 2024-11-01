import getProductsCategory from "@/actions/getProductsUpperCategory";
import CategoryName from "./_components/CategoryName";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductsUpperCategory from "@/actions/getProductsUpperCategory";
import { UpperCategory } from "@prisma/client";

const CategoryNamePage = async ({
  params,
}: {
  params: Promise<{ categoryName: UpperCategory }>;
}) => {
  const { categoryName } = await params;
  const products = await getProductsUpperCategory(categoryName);

  if (!products || products.products.length === 0) {
    return (
      <p className="text-3xl text-center my-10">No Product for this category</p>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName
          categories={products.categories}
          products={products.products}
          categoryName={categoryName}
        />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
