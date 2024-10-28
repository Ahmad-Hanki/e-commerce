"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Package } from "@prisma/client";
import { Check } from "lucide-react";
import { useState } from "react";

const PackageCard = ({ packages }: { packages: Package[] }) => {
  const [pkg, setPkg] = useState<Package>(packages[0]);
  const [quantity, setQuantity] = useState(1);

  const getPricePerPiece = (price: number, piece: number | null): number => {
    if (!piece || piece === 0) return 0;
    return parseFloat((price / piece).toFixed(2));
  };

  return (
    <div>
      <Card className="p-4 space-y-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pack) => (
            <Card
              onClick={() => setPkg(pack)}
              key={pack.id}
              className={cn(
                "relative flex flex-col gap-3 items-center p-1 cursor-pointer aspect-square",
                pkg.id == pack.id
                  ? "bg-primary text-secondary"
                  : "text-secondary-foreground",
                !pack.inStock && "hidden"
              )}
            >
              {pkg.id == pack.id && (
                <div className="absolute -top-3 mx-auto w-8 h-8 rounded-full bg-white grid place-content-center border border-primary">
                  <Check className="text-black" />
                </div>
              )}
              <div className="mt-5">
                <p className="text-lg">Adet: {pack.Piece}</p>
                <p className="text-base text-gray-500 line-through ">
                  {pack.oldPrice && `Eski Fiyat: ${pack.oldPrice} ₺`}
                </p>
                <p className="text-lg text-yellow-400 font-medium">
                  Fiyat: {pack.price} ₺
                </p>

                <p className="text-lg">
                  {getPricePerPiece(pack.price, pack.Piece)} ₺ / Adet
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={cn(
            "w-fit px-5 bg-yellow-400 rounded-tr-full py-3 hidden",
            pkg.discount && pkg.oldPrice && "block"
          )}
        >
          <p className="text-lg text-secondary font-semibold ">
            {`%${pkg.discount} İndirim`}
          </p>
        </div>
      </Card>

      <div className="mt-6 flex items-center gap-3">
        <p className="text-green-500 font-medium text-3xl">{pkg.price} ₺</p>

        <p
          className={cn(
            " text-muted-foreground text-xl hidden line-through",
            pkg.oldPrice && "block"
          )}
        >
          {pkg.oldPrice} ₺
        </p>
      </div>
      <div>
        <p className="text-muted-foreground">Fiyatlara KDV dahildir</p>
      </div>

      {/* adding the quantity */}
      <div className="mt-2">
        <div className="flex items-center gap-3 w-fit">
          <Button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="border border-gray-300 p-5 rounded-2xl text-xl w-full"
          >
            -
          </Button>
          <p className="text-xl font-semibold">{quantity}</p>
          <Button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="border border-gray-300 p-5 rounded-2xl text-xl w-full"
          >
            +
          </Button>
          <Button className=" rounded-2xl text-2xl p-5 ">Sepete Ekle</Button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
