import Link from "next/link";
import React from "react";



const NotFound = () => {
  return (
    <div className="h-[50vh] flex items-center justify-start max-w-7xl mx-auto ">
      <div className="space-y-6 w-full">
        <h1 className="text-6xl font-semibold text-primary w-full">Üzgünüz</h1>

        <div className="space-y-3">
          <div>
            <p className="text-2xl">
              Aradığınız sayfayı bulamadık. Taşınmış veya silinmiş olabilir.
            </p>
            <p className="text-2xl">
              Lütfen adres çubuğundaki URL&apos;yi kontrol edin ve tekrar deneyin.{" "}
            </p>
          </div>

          <p className="text-2xl">
            <span className="text-blue-500">
              <Link href="/">Ana sayfay</Link>
            </span>
            a dönebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
