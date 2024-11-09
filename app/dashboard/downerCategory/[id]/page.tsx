import { notFound } from "next/navigation";
import getDownerCategory from "../_actions/getDownerCategory";
import DownerCategoryForm from "../DownerrCategoryForm";
import getUpperCategories from "../upperCategory/_actions/getUpperCategories";

const EditCategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  if (!id) {
    notFound();
  }

  const category = await getDownerCategory(id);
  const upperCategories = await getUpperCategories();

  if (!category) {
    notFound();
  }

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center space-y-5">
      <h1>Kategori Verilerini Düzenle</h1>
      <DownerCategoryForm
        initialData={category}
        upperCategories={upperCategories}
      />
    </div>
  );
};

export default EditCategoryPage;
