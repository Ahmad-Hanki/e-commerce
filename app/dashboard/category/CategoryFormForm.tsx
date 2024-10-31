"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Category } from "@prisma/client";
import updateCategory from "./_actions/updateCategory";
import addCategory from "./_actions/addCategory";

interface CategoryFormProps {
  initialData?: Category;
}

const CategoryForm = ({ initialData }: CategoryFormProps) => {
  const router = useRouter();

  const CategorySumption = async (formData: FormData) => {
    const name = formData.get("name") as string;
    if (!name) {
      toast.error("Name is required");
      return;
    }

    if (initialData) {
      // Update
      const response = await updateCategory(initialData.id, name);
      if (response) {
        toast.success("Updated Successfully");
        router.push("/dashboard/category");
        return;
      }
      toast.error("Something went wrong");
      return;
    }

    // Add
    const response = await addCategory(name);
    if (response) {
      toast.success("Added Successfully");
      router.push("/dashboard/category");
      return;
    }
    toast.error("Something went wrong");
    return;
  };

  return (
    <form action={CategorySumption} className="space-y-6 max-w-sm mx-auto w-full">
      <h1 className="text-primary text-2xl text-center">Add Category</h1>

      <div className="space-y-4">
        <Input
          name={`name`}
          placeholder={"Category Name"}
          defaultValue={initialData?.name}
          required
          type="text"
          className="w-[300px]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Adding" submit="Add" className="p-3" />
      </div>
    </form>
  );
};

export default CategoryForm;
