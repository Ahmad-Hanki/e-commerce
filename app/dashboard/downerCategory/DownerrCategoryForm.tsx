"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import updateUpperCategory from "./_actions/updateUpperCategory";
import addDownerCategory from "./_actions/addDownerCategory";
import editDownerCategory from "./_actions/editDownerCategory";
import { FormattedDownerCategoriesType } from "./_actions/getDownerCategories";
import { UpperCategory } from "@prisma/client";
import { useState } from "react";
import ChooseUpperCategory from "./_components/choseUpperCategory";

interface CategoryFormProps {
  initialData?: FormattedDownerCategoriesType;
  upperCategories: UpperCategory[];
}

const DownerCategoryForm = ({
  initialData,
  upperCategories,
}: CategoryFormProps) => {
  const router = useRouter();
  const [chosenUpperCategory, setChosenUpperCategory] =
    useState<UpperCategory | null>(
      initialData &&
        initialData.upperCategoryId &&
        initialData.upperCategoryName
        ? {
            id: initialData.upperCategoryId,
            name: initialData.upperCategoryName,
          }
        : null
    );

  const CategorySumption = async (formData: FormData) => {
    const name = formData.get("name") as string;
    if (!name || !chosenUpperCategory) {
      toast.error("İsim ve üst kategori gerekli");
      return;
    }

    if (initialData) {
      // Update
      const response = await editDownerCategory(
        initialData.id,
        name,
        chosenUpperCategory.id
      );
      if (response) {
        toast.success("Başarıyla Güncellendi");
        router.push("/dashboard/downerCategory");
        return;
      }
      toast.error("Bir şeyler ters gitti");
      return;
    }

    // Add
    const response = await addDownerCategory(name, chosenUpperCategory.id);
    if (response) {
      toast.success("Başarıyla Eklendi");
      router.push("/dashboard/downerCategory");
      return;
    }
    toast.error("Bir şeyler ters gitti");
    return;
  };

  return (
    <form
      action={CategorySumption}
      className="space-y-6 max-w-sm mx-auto w-full"
    >
      <h1 className="text-primary text-3xl text-center font-semibold">
        Alt Kategori Ekle
      </h1>

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

      <div>
        <ChooseUpperCategory
          setChosenUpperCategory={setChosenUpperCategory}
          chosenUpperCategory={chosenUpperCategory}
          UpperCategoryData={upperCategories}
        />
      </div>

      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Ekleniyor" submit="Ekle" className="p-3" />
      </div>
    </form>
  );
};

export default DownerCategoryForm;
