const TokenPage = async ({
  params,
}: {
  params: Promise<{ token: string }>;
}) => {
  const { token } = await params;

  return (
    <>
      <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
      <iframe
        src={`https://www.paytr.com/odeme/guvenli/${token}`}
        id="paytriframe"
        style={{ width: "100%", height: "100%", minHeight: "120vh" }}
      ></iframe>
      <script>iFrameResize({},'#paytriframe');</script>
    </>
  );
};

export default TokenPage;
