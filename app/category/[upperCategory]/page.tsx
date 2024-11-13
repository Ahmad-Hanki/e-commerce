import CategoryName from "./_components/UpperCategoryName";
import { Suspense } from "react";
import Loading from "@/components/loading";
import getProductsUpperCategoryAndDownerCategories from "@/actions/getProductsUpperCategoryAndDownerCategories";

const UpperCategoryNamePage = async ({
  params,
}: {
  params: Promise<{ upperCategory: string }>;
}) => {
  const { upperCategory } = await params;
  const products = await getProductsUpperCategoryAndDownerCategories(
    upperCategory
  );

  if (!products || products.products.length === 0) {
    return (
      <p className="text-3xl text-center my-10">Bu kategori için ürün yok</p>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName
          upperCategoryId={upperCategory}
          downerCategories={products.downerCategories}
          products={products.products}
          UpperCategoryName={products.products[0].categoryName}
        />
      </Suspense>
    </div>
  );
};

export default UpperCategoryNamePage;
