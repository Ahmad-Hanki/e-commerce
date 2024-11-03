import Container from "@/components/Container";
import React from "react";
export const dynamic = "force-static";

const CancelAndReturn = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-primary">
            İptal & İade Koşulları
          </h1>

          <p>
            İade etmek istediğiniz ürünleri fatura örneğini kutu içerisine
            ekleyerek paketleyiniz.
          </p>

          <p>
            İade talep ettiğiniz ürünlerin orijinal paketinde; ürün açılmamış ve
            kullanılmamış olması durumunda iadeniz kabul edilir. Aksi takdirde
            ürünlerinizin iadesi kabul edilmez ve size geri gönderilir.
          </p>

          <p className="font-semibold">
            İade veya iptal ettiğim ürünün ücret iadesini ne zaman alırım ?
          </p>

          <p>
            İade edilen ürün depomuza ulaştıktan sonra iade şartlarına uygunluğu
            kontrol edilir.
          </p>

          <p>
            İade edilen ürün iade şartlarına uygunsa en geç 7 gün içerisinde
            iade süreci tamamlanır.
          </p>

          <p>
            İade edilen tutarın kartınıza yansıma süresi çalıştığınız bankanıza
            bağlıdır.
          </p>

          <p>
            Taksitle yapılan alışverişlerin ücretini bankaya tek seferde ödenir.
            İlgili banka tutarı kredi kartınıza kendi prosedürlerine uygun
            şekilde iade eder. Detayları bankanızla görüşmelisiniz.
          </p>

          <p>
            14 (ondört) Günlük iade süresi doldu, aldığım ürünü iade edebilir
            miyim?
          </p>

          <p>
            Mesafeli Satış Sözleşmesine göre ve iade edilmesi düşünülen ürün
            veya ürünler iade koşullarını sağlıyorlar ise internetten veya
            mobilden satın alınan bir ürünü iade etme süresi 14 (ondört) gündür.
          </p>
          <p className="text-lg font-bold">
            NOT : Sevkiyat sırasında zarar gördüğünü düşündüğünüz paketleri
            teslim aldığınız firma yetkilisi önünde açıp kontrol ediniz. Eğer
            üründe herhangi bir zarar varsa kargo firmasına tutanak tutturarak
            ürünü teslim almayınız. Ürün teslim alındıktan sonra kargo
            firmasının görevini tam olarak yerine getirdiğini kabul etmiş
            olduğunuzun varsayıldığını unutmayınız.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CancelAndReturn;
