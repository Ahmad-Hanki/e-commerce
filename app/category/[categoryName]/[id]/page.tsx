import CategoryName from "../_components/CategoryName";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductsCategory from "@/actions/getProductCategory";

const CategoryNamePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const products = await getProductsCategory(id);

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
          categoryName={products.categoryName ?? ""}
        />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
