import Script from "next/script";

const TokenPage = async ({
  params,
}: {
  params: Promise<{ token: string }>;
}) => {
  const { token } = await params;

  return (
    <>
      <Script src="https://www.paytr.com/js/iframeResizer.min.js"></Script>
      <iframe
        src={`https://www.paytr.com/odeme/guvenli/${token}`}
        id="paytriframe"
        style={{ width: "100%", height: "100%", minHeight: "120vh" }}
      ></iframe>
      <script>iFrameResize({},&apos;#paytriframe&apos;);</script>
    </>
  );
};

export default TokenPage;
