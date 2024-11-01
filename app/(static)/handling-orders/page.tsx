import Container from "@/components/Container";

const HandlingOrder = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-primary">
            Sipariş & Teslimat
          </h1>

          <p>
            {` Sanal Mağazamızda yapmış olduğunuz alışverişler, vereceğiniz
            teslimat adresine anlaşmalı olunan kargo şirketi tarafından
            ulaştırılacaktır.`}
          </p>

          <p>
            {` Yoğunluğa bağlı olarak 1 ila 3 iş günü içerisinde siparişleriniz
            kargoya verilmektedir. Hafta içi her gün (resmi tatiller hariç)
            kargo şirketine firmamızdan paket teslimi yapılmaktadır. Cuma günü
            öğleden sonra ve hafta sonu verilen siparişler takip eden hafta
            Pazartesi günü işleme alınır.`}
          </p>

          <p>
            {`koc.com, sitesinden alışveriş yapan siz kredi kartı sahiplerinin
            güvenliğini ön planda tutmakta ve siparişinizi verdiğiniz andan
            itibaren ödeme/fatura bilgilerinin kontrolünü gerçekleştirmektedir.
            Bu yüzden, siparişinizin tedarik ve teslimat aşamasına gelebilmesi
            için öncelikle siparişinizin ödeme/fatura bilgilerinin doğruluğunun
            onaylanması ve onaylandığına dair e-postanın size yollanması
            gereklidir.`}
          </p>

          <p>
            {` Sipariş onayının sağlıklı olarak alınması halinde, siparişler
            kargoya teslim edildikten sonra İstanbul içine 1-5 iş günü içinde,
            İstanbul dışına 1-7 iş günü içinde ulaştırılacaktır.`}
          </p>

          <p>
            {`Siparişinizin size en çabuk şekilde ulaşması için lütfen adres bilgilerinizi mümkün olduğu kadar açık yazınız. Hatta varsa adresinizin tarif bilgilerini de bu bölüme yazabilirsiniz. (Örnek: Bankanın yanından girince ikinci sokak vs.)`}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HandlingOrder;
