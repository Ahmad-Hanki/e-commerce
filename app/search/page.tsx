import getProductsSearch from "@/actions/getProductsSearch";
import CategoryName from "../category/[upperCategory]/_components/UpperCategoryName";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { notFound } from "next/navigation";

const CategoryNamePage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    q: string;
  }>;
}) => {
  const { q } = await searchParams;
  if (q == "" || !q) {
    notFound();
  }
  const products = await getProductsSearch(q);
  if (!products || products.length === 0) {
    return (
      <p className="text-3xl text-center my-10">Bu Arama İçin Ürün Yok {q}</p>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName products={products} searchParams={q} />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
