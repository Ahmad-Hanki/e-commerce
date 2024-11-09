import { notFound } from "next/navigation";
import getUpperCategory from "../_actions/getUpperCategory";
import UpperCategoryForm from "../UpperCategoryForm";

const EditCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }

  const category = await getUpperCategory(id);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1>Kategori Verilerini Düzenle</h1>
      <UpperCategoryForm initialData={category} />
    </div>
  );
};

export default EditCategoryPage;
