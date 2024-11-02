import Container from "@/components/Container";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-primary">
            Şartlar Koşullar
          </h1>

          <p>
            {`[sitenn adi] sitesi tedarikçi ile alıcıyı buluşturan, güvenli ve sağlıklı bir ticaret gerçekleştirmesini sağlayan aracı bir platformdur.`}
          </p>

          <p>
            Üyelik ücretsizdir ve herkese açıktır. Kullanıcı kayıt formu
            doldurularak Site sistemine üye olunabilir.
          </p>

          <p>
          Aşağıdaki hak ve yükümlülükler tüm site kullanıcıları için geçerlidir.

          </p>

          <p>
            ...
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
