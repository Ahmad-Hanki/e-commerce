import getProductsSearch from "@/actions/getProductsSearch";
import CategoryName from "../category/[categoryName]/_components/CategoryName"; 
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
  if (q == "") {
    notFound();
  }
  const products = await getProductsSearch(q);
  if (!products || products.length === 0) {
    return (
      <p className="text-3xl text-center my-10">
        No Product for this Search: {q}
      </p>
    );
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CategoryName products={products} categoryName={q} />
      </Suspense>
    </div>
  );
};

export default CategoryNamePage;
