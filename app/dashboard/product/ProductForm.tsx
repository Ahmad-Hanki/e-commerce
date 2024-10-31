"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FormattedProduct } from "./_actions/getAllProducts";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { ChooseCategory } from "./_components/chooseCategory";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import UploadThingButton from "@/components/UploadThingButton";
import { Textarea } from "@/components/ui/textarea";
import addProduct from "./_actions/addProduct";
import updateProduct from "./_actions/updateProduct";
import { TrashIcon } from "lucide-react";

interface ProductFormProps {
  initialData?: FormattedProduct;
  categoryData: Category[];
}

const ProductForm = ({ initialData, categoryData }: ProductFormProps) => {
  const router = useRouter();
  const [inStock, setInStock] = useState<boolean>(initialData?.inStock || true);
  const [New, setNew] = useState<boolean>(initialData?.new || true);
  const [freeShipping, setFreeShipping] = useState<boolean>(
    initialData?.freeShipping || false
  );
  const [mostSale, setMostSale] = useState<boolean>(
    initialData?.mostSale || false
  );

  // State for chosen category
  const [chosenCategory, setChosenCategory] = useState<Category | null>(
    initialData?.category || null
  );

  //images

  const [image, setImage] = useState<string>(initialData?.image || "");
  const [image2, setImage2] = useState<string>(initialData?.image2 || "");
  const [image3, setImage3] = useState<string>(initialData?.image3 || "");

  const ProductSumption = async (formData: FormData) => {
    const description = formData.get("description") as string;
    const price = formData.get("price");
    const oldPrice = formData.get("oldPrice");
    const rating = formData.get("rating");
    const extraInfo = formData.get("extraInfo") as string;

    if (!description || !price || !chosenCategory || !image) {
      toast.error("Please fill all fields");
      return;
    }

    if (initialData) {
      // Update
      const response = await updateProduct({
        id: initialData.id,
        extraInfo,
        image2,
        image3,
        description,
        price: Number(price),
        oldPrice: Number(oldPrice),
        rating: Number(rating),
        inStock,
        New,
        freeShipping,
        mostSale,
        categoryId: chosenCategory?.id,
        image,
      });
      if (response) {
        toast.success("Updated Successfully");
        router.push("/dashboard/product");
        return;
      }
      toast.error("Something went wrong");
      return;
    }
    // Add
    const response = await addProduct({
      description,
      price: Number(price),
      oldPrice: Number(oldPrice),
      rating: Number(rating),
      inStock,
      New,
      freeShipping,
      mostSale,
      categoryId: chosenCategory?.id,
      image,
      image2,
      image3,
      extraInfo,
    });
    if (response) {
      toast.success("Added Successfully");
      router.push("/dashboard/product");
      return;
    }
    toast.error("Something went wrong rr");
    return;
  };

  return (
    <form
      action={ProductSumption}
      className="space-y-6 max-w-sm mx-auto w-full"
    >
      <h1 className="text-primary text-2xl text-center">Add Product</h1>

      <div className="space-y-4">
        <Textarea
          name={`description`}
          placeholder={"Product Description (Required)"}
          defaultValue={initialData?.description ?? ""}
          required
          className="w-[300px]"
          rows={2}
        />
      </div>
      <div className="space-y-4 flex gap-3">
        <Input
          name={`price`}
          step="0.01"
          placeholder={"Product Price  (Required)"}
          defaultValue={initialData?.price}
          required
          type="number"
          max={100000}
          min={1}
          className="w-[300px]"
        />
      </div>
      <div>
        {initialData?.oldPrice ? (
          <Input
            step="0.01"
            name={`oldPrice`}
            placeholder={"Old Price"}
            defaultValue={initialData.oldPrice}
            type="number"
            max={100000}
            min={1}
            className="w-[300px]"
          />
        ) : (
          <Input
            step="0.01"
            name={`oldPrice`}
            placeholder={"Old Price"}
            type="number"
            max={100000}
            min={1}
            className="w-[300px]"
          />
        )}
      </div>
      <div className="space-y-4 flex gap-3">
        <Input
          name={`rating`}
          placeholder={"Product Rating"}
          defaultValue={initialData?.rating ?? 5}
          type="number"
          max={5}
          min={1}
          className="w-[300px]"
        />
      </div>
      <div className="space-y-4 flex gap-3">
        <Textarea
          name={`extraInfo`}
          placeholder={"Extra Infos"}
          defaultValue={initialData?.extraInfo ?? ""}
          rows={5}
          className="w-[300px]"
        />
      </div>
      <div className="space-y-4 flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-[300px]" variant="outline">
              Chose
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Properties</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={inStock}
              onCheckedChange={setInStock}
            >
              In Stock
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={New} onCheckedChange={setNew}>
              New
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={freeShipping}
              onCheckedChange={setFreeShipping}
            >
              Free Shipping
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={mostSale}
              onCheckedChange={setMostSale}
            >
              Most Sales
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <ChooseCategory
          categoryData={categoryData}
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
        />
      </div>

      <div className="flex flex-col gap-5">
        <Label>{`Main Product Image (Required)`}</Label>
        {image && (
          <div className="relative aspect-square w-[250px] overflow-hidden">
            <Image
              src={image}
              alt="Product Image"
              fill
              className="rounded-md object-cover object-center"
            />

            <TrashIcon
              onClick={() => setImage("")}
              className="absolute top-0 right-0 cursor-pointer h-8 w-8 text-red-500"
            />
          </div>
        )}
        <UploadThingButton setImage={setImage} />
      </div>
      <div className="flex flex-col gap-5">
        <Label>{`Second Product Image (Optional)`}</Label>
        {image2 && (
          <div className="relative aspect-square w-[250px] overflow-hidden">
            <Image
              src={image2}
              alt="Product Image"
              fill
              className="rounded-md object-cover object-center"
            />
            <TrashIcon
              onClick={() => setImage2("")}
              className="absolute top-0 right-0 cursor-pointer h-8 w-8 text-red-500"
            />
          </div>
        )}
        <UploadThingButton setImage={setImage2} />
      </div>
      <div className="flex flex-col gap-5">
        <Label>{`Third Product Images (Optional)`}</Label>
        {image3 && (
          <div className="relative aspect-square w-[250px] overflow-hidden">
            <Image
              src={image3}
              alt="Product Image"
              fill
              className="rounded-md object-cover object-center"
            />
            <TrashIcon
              onClick={() => setImage3("")}
              className="absolute top-0 right-0 cursor-pointer h-8 w-8 text-red-500"
            />
          </div>
        )}
        <UploadThingButton setImage={setImage3} />
      </div>
      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Adding" submit="Add" className="p-3" />
      </div>
    </form>
  );
};

export default ProductForm;
