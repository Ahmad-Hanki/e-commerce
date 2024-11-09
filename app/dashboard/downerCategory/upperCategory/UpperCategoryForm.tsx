"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import addCategory from "./_actions/addUpperCategory";
import { UpperCategory } from "@prisma/client";
import updateUpperCategory from "./_actions/updateUpperCategory";

interface CategoryFormProps {
  initialData?: UpperCategory;
}

const UpperCategoryForm = ({ initialData }: CategoryFormProps) => {
  const router = useRouter();

  const CategorySumption = async (formData: FormData) => {
    const name = formData.get("name") as string;
    if (!name) {
      toast.error("İsim gerekli");
      return;
    }

    if (initialData) {
      // Update
      const response = await updateUpperCategory(initialData.id, name);
      if (response) {
        toast.success("Başarıyla Güncellendi");
        router.push("/dashboard/upperCategory");
        return;
      }
      toast.error("Bir şeyler ters gitti");
      return;
    }

    // Add
    const response = await addCategory(name);
    if (response) {
      toast.success("Başarıyla Eklendi");
      router.push("/dashboard/upperCategory");
      return;
    }
    toast.error("Bir şeyler ters gitti");
    return;
  };

  return (
    <form action={CategorySumption} className="space-y-6 max-w-sm mx-auto w-full">
      <h1 className="text-primary text-3xl text-center font-semibold">Ust Kategori Ekle</h1>

      <div className="space-y-4">
        <Input
          name={`name`}
          placeholder={"Kategori Adı"}
          defaultValue={initialData?.name}
          required
          type="text"
          className="w-[300px]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Ekleniyor" submit="Ekle" className="p-3" />
      </div>
    </form>
  );
};

export default UpperCategoryForm;
