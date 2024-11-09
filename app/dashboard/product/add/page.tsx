import getCategories from "@/actions/getCategories";
import ProductForm from "../ProductForm";
import getUpperCategoriesWithRelatedDowner from "../_actions/getUpperCategoriesWithRelatedDowner";

const AddPage = async () => {
  const upperCategoriesWithDowner = await getUpperCategoriesWithRelatedDowner();

  return (
    <div className="py-10 min-h-[60vh] grid place-content-center">
      <ProductForm UpperCategoryWithDowner={upperCategoriesWithDowner} />
    </div>
  );
};

export default AddPage;
