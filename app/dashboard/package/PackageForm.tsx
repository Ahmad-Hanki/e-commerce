"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FormattedPackage } from "./_actions/getAllPackages";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { ChooseProduct } from "./_components/ChooseProduct";
import addPackage from "./_actions/addPackage";
import editPackage from "./_actions/editPackage";

interface Product {
  id: string;
  description: string;
  image: string;
}

interface PackageFormProps {
  initialData?: FormattedPackage;
  Products: Product[];
}

const PackageForm = ({ initialData, Products }: PackageFormProps) => {
  const router = useRouter();
  const [inStock, setInStock] = useState<boolean>(initialData?.inStock || true);

  const [chosenProduct, setChosenProduct] = useState<Product | null>({
    id: initialData?.productId || "",
    description: initialData?.productDescription || "",
    image: initialData?.productImage || "",
  });

  const handleCheckboxChange = (checked: boolean) => {
    setInStock(checked);
  };

  const PackageSumption = async (formData: FormData) => {
    const price = formData.get("price");
    const oldPrice = formData.get("oldPrice");
    const piece = formData.get("piece");

    if (!price || !piece || !chosenProduct?.id) {
      toast.error("Price and piece are and chose product required");
      return;
    }

    if (initialData) {
      // Update
      const response = await editPackage({
        id: initialData.id,
        price: Number(price),
        oldPrice: Number(oldPrice),
        productId: chosenProduct.id,
        Piece: Number(piece),
        inStock,
      });
      if (response) {
        toast.success("Updated Successfully");
        router.push("/dashboard/package");
        return;
      }
      toast.error("Something went wrong");
      return;
    }
    // Add
    const response = await addPackage({
      price: Number(price),
      oldPrice: Number(oldPrice),
      productId: chosenProduct.id,
      Piece: Number(piece),
      inStock,
    });
    if (response) {
      toast.success("Added Successfully");
      router.push("/dashboard/package");
      return;
    }
    toast.error("Something went wrong");
    return;
  };

  return (
    <form
      action={PackageSumption}
      className="space-y-6 max-w-sm mx-auto w-full"
    >
      <h1 className="text-primary text-2xl text-center">Add Package</h1>

      <div className="space-y-4">
        <Input
          name={`price`}
          step="0.01"
          placeholder={"Package Price  (Required)"}
          defaultValue={initialData?.price}
          required
          type="number"
          max={100000}
          min={1}
          className="w-[300px]"
        />
      </div>
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

      <div className="space-y-4">
        <Input
          name={`piece`}
          placeholder={"Package piece  (Required)"}
          defaultValue={initialData?.price}
          required
          type="number"
          max={100000}
          min={1}
          className="w-[300px]"
        />
      </div>

      <Card className="w-full h-[35px] rounded-md flex  items-center gap-2 px-2 py-1">
        {/* in stock checkbox */}
        <Checkbox
          id="inStock"
          checked={inStock}
          onCheckedChange={handleCheckboxChange}
        />
        <label
          htmlFor="inStock"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          In Stock
        </label>
      </Card>

      <div className="space-y-4">
        <ChooseProduct
          productData={Products}
          chosenProduct={chosenProduct}
          setChosenProduct={setChosenProduct}
        />
      </div>

      <div className="flex flex-col gap-3">
        <SubmitButton submitting="Adding" submit="Add" className="p-3" />
      </div>
    </form>
  );
};

export default PackageForm;
