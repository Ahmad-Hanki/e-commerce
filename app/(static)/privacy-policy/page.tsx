import Container from "@/components/Container";
export const dynamic = "force-static";

const PrivacyPolicy = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="space-y-5">
          <h1 className="text-4xl font-semibold text-primary">
            Gizlilik Politikası
          </h1>

          <p>
            {`İşbu Gizlilik Politikası ile kişisel verilerinizin işlenmesi hakkında aydınlatılmış olduğunuzu ve kişisel verilerinizin burada belirtilen şekilde kullanılmasına onay verdiğinizi kabul etmektesiniz.`}
          </p>

          <p>...</p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
