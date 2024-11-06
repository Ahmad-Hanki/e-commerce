import { notFound } from "next/navigation";
import CategoryForm from "../CategoryFormForm";
import getCategory from "../_actions/getCategory";

const EditCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }

  const category = await getCategory(id);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1>Kategori Verilerini Düzenle</h1>
      <CategoryForm initialData={category} />
    </div>
  );
};

export default EditCategoryPage;
