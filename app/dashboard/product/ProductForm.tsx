"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FormattedProduct } from "./_actions/getAllProducts";
import { useState, useMemo, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DownerCategory, UpperCategory } from "@prisma/client";
import { ChooseCategory } from "./_components/chooseCategory";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import UploadThingButton from "@/components/UploadThingButton";
import { Textarea } from "@/components/ui/textarea";
import addProduct from "./_actions/addProduct";
import updateProduct from "./_actions/updateProduct";
import { Star, TrashIcon } from "lucide-react";
import ChooseUpperCategory from "../downerCategory/_components/choseUpperCategory";
import { UpperCategoryWithDowner } from "./_actions/getUpperCategoriesWithRelatedDowner";

interface ProductFormProps {
  initialData?: FormattedProduct;
  UpperCategoryWithDowner: UpperCategoryWithDowner[];
}

const ProductForm = ({
  initialData,
  UpperCategoryWithDowner,
}: ProductFormProps) => {
  const router = useRouter();
  const [image, setImage] = useState<
    {
      url: string;
      primary: boolean;
    }[] // Initial images state (array)
  >(
    initialData?.photos.map((photo) => ({
      url: photo.url,
      primary: photo.primary,
    })) || []
  );

  const handleImageDelete = (imageUrl: string) => {
    setImage((prevImages) => prevImages.filter((img) => img.url !== imageUrl));
  };

  const handleImageSetPrimary = (index: number) => {
    setImage((prevImages) => {
      // Set the clicked image as primary and make all others not primary
      const updatedImages = prevImages.map((img, i) => ({
        ...img,
        primary: i === index, // Set primary for the clicked image only
      }));
      return updatedImages;
    });
  };

  // State variables
  const [inStock, setInStock] = useState<boolean>(initialData?.inStock || true);
  const [New, setNew] = useState<boolean>(initialData?.new || true);
  const [freeShipping, setFreeShipping] = useState<boolean>(
    initialData?.freeShipping || false
  );
  const [mostSale, setMostSale] = useState<boolean>(
    initialData?.mostSale || false
  );

  const [chosenUpperCategory, setChosenUpperCategory] =
    useState<UpperCategory | null>(initialData?.upperCategory || null);

  const [chosenCategory, setChosenCategory] = useState<DownerCategory | null>({
    id: initialData?.category.id ?? "",
    name: initialData?.category.name ?? "",
    upperCategoryId: initialData?.upperCategory.id ?? "",
  });

  useEffect(() => {
    setChosenCategory(null);
  }, [chosenUpperCategory]);

  const filteredDownerCategories = useMemo(() => {
    if (!chosenUpperCategory) return [];
    const selectedUpper = UpperCategoryWithDowner.find(
      (upper) => upper.id === chosenUpperCategory.id
    );
    return selectedUpper ? selectedUpper.DownerCategory : [];
  }, [chosenUpperCategory, UpperCategoryWithDowner]);

  const ProductSumption = async (formData: FormData) => {
    const description = formData.get("description") as string;
    const price = formData.get("price");
    const oldPrice = formData.get("oldPrice");
    const rating = formData.get("rating");
    const extraInfo = formData.get("extraInfo") as string;

    if (
      !description ||
      !price ||
      !chosenCategory ||
      !image ||
      !chosenUpperCategory
    ) {
      toast.error("Lütfen tüm alanları doldurun");
      return;
    }

    if (initialData) {
      // Update product
      const response = await updateProduct({
        id: initialData.id,
        extraInfo,
        images: image,
        description,
        price: Number(price),
        oldPrice: Number(oldPrice),
        downerCategoryId: chosenCategory.id,
        upperCategoryId: chosenUpperCategory.id,
        rating: Number(rating),
        inStock,
        New,
        freeShipping,
        mostSale,
      });
      if (response) {
        toast.success("Başarıyla Güncellendi");
        router.push("/dashboard/product");
        return;
      }
      toast.error("Bir şeyler ters gitti");
      return;
    }
    // Add product
    const response = await addProduct({
      description,
      price: Number(price),
      oldPrice: Number(oldPrice),
      rating: Number(rating),
      inStock,
      New,
      freeShipping,
      mostSale,
      extraInfo,
      downerCategoryId: chosenCategory.id,
      upperCategoryId: chosenUpperCategory.id,
      images: image,
    });
    if (response) {
      toast.success("Başarıyla Eklendi");
      router.push("/dashboard/product");
      return;
    }
    toast.error("Bir şeyler ters gitti");
  };

  return (
    <form
      action={ProductSumption}
      className="space-y-6 max-w-sm mx-auto w-full"
    >
      <h1 className="text-primary text-3xl text-center font-semibold">
        Ürün Ekle
      </h1>

      {/* Product description */}
      <div className="space-y-4">
        <Textarea
          name="description"
          placeholder="Ürün Açıklaması (Gerekli)"
          defaultValue={initialData?.description ?? ""}
          required
          className="w-[300px]"
          rows={2}
        />
      </div>

      {/* Pricing fields */}
      <div className="space-y-4 flex gap-3">
        <Input
          name="price"
          step="0.01"
          placeholder="Ürün Fiyatı (Tek) (Gerekli)"
          defaultValue={initialData?.price}
          required
          type="number"
          max={100000}
          min={1}
          className="w-[300px]"
        />
      </div>
      {/* Old Price */}
      <div>
        <Input
          step="0.01"
          name="oldPrice"
          placeholder="Eski Fiyat (tek)"
          defaultValue={initialData?.oldPrice ?? ""}
          type="number"
          max={100000}
          min={1}
          className="w-[300px]"
        />
      </div>

      <div className="space-y-4 flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-[300px]" variant="outline">
              Seç
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Properties</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={inStock}
              onCheckedChange={setInStock}
            >
              Stokta
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={New} onCheckedChange={setNew}>
              Yeni
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={freeShipping}
              onCheckedChange={setFreeShipping}
            >
              Ücretsiz Kargo
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={mostSale}
              onCheckedChange={setMostSale}
            >
              En Çok Satış
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Upper Category Selection */}
      <div>
        <ChooseUpperCategory
          chosenUpperCategory={chosenUpperCategory}
          setChosenUpperCategory={setChosenUpperCategory}
          UpperCategoryData={UpperCategoryWithDowner.map(({ id, name }) => ({
            id,
            name,
          }))}
        />
      </div>

      {/* Downer Category Selection */}
      <div>
        <ChooseCategory
          categoryData={filteredDownerCategories}
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
        />
      </div>

      {/* Upload Images */}
      <div className="flex flex-col gap-5">
        <Label>Main Product Image (Required)</Label>
        {image.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {image.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square w-[250px] overflow-hidden"
                onClick={() => handleImageSetPrimary(index)}
              >
                <Image
                  src={img.url}
                  alt={`Product Image ${index + 1}`}
                  fill
                  className="rounded-md object-cover object-center"
                />
                <TrashIcon
                  onClick={() => handleImageDelete(img.url)}
                  className="absolute top-0 right-0 cursor-pointer h-8 w-8 text-red-500"
                />

                {img.primary && (
                  <span>
                    {
                      <Star className="absolute bottom-0 left-0 bg-primary text-secondary-foreground p-1 text-xs" />
                    }
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        <UploadThingButton setImage={setImage} />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Adding" submit="Add" className="p-3" />
      </div>
    </form>
  );
};

export default ProductForm;
