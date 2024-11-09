import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductsDownerCategory from "@/actions/getProductDownerCategory";
import CategoryName from "../_components/UpperCategoryName";

const CategoryNamePage = async ({
  params,
}: {
  params: Promise<{ upperCategory: string; downerCategory: string }>;
}) => {
  const { upperCategory, downerCategory } = await params;
  const products = await getProductsDownerCategory(
    downerCategory,
    upperCategory
  );

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName
          upperCategoryId={upperCategory}
          downerCategories={products.downerCategory}
          products={products.products}
        />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
