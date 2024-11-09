import DownerCategoryForm from "../DownerrCategoryForm";
import UpperCategoryForm from "../DownerrCategoryForm";
import getUpperCategories from "../upperCategory/_actions/getUpperCategories";

const AddPage = async () => {
  const upperCategories = await getUpperCategories();
  return (
    <div className="py-10 min-h-[60vh] grid place-content-center">
      <DownerCategoryForm upperCategories={upperCategories} />
    </div>
  );
};

export default AddPage;
