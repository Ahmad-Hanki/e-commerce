import { Package } from "@prisma/client";
import PackageCard from "./PackageCard";

interface ProductData {
  id: string;
  description: string;
  rating: number | null; // Allow null
  extraInfo?: string;
  stokKodu: string;
  barkod: string;
}

interface ProductPackageCardProps {
  packages: Package[];
  product: ProductData;
  isLoggedIn: boolean;
}

const ProductPackageCard = ({
  packages,
  product,
  isLoggedIn,
}: ProductPackageCardProps) => {
  return (
    <div className="w-full space-y-5 my-6">
      <h1 className="text-3xl  font-semibold">{product.description}</h1>
      <h2 className="scale-0 max-h-[0px] max-w-[0px]">Barkod: {product.stokKodu}</h2>
      <h3 className="scale-0 max-h-[0px] max-w-[0px]">Stok Kodu: {product.barkod}</h3>

      <div className="flex items-center gap-5">
        <div className="bg-yellow-500 px-2 py-[1px] rounded-md">
          <p className="text-sm font-bold text-secondary-foreground">
            {product.rating}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: product.rating ?? 5 }).map((_, index) => (
            <p key={index} className="text-yellow-400 text-3xl">
              ★
            </p>
          ))}
        </div>
      </div>
      {/* packages */}
      <PackageCard isLoggedIn={isLoggedIn} packages={packages} />

      <div className="mt-3">
        <p>{product.extraInfo}</p>
      </div>
    </div>
  );
};

export default ProductPackageCard;
