import Script from "next/script";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const CheckOutFormPage = async () => {
  const cookie = await cookies();
  const token = cookie.get("paytrToken")?.value;

  if (!token) {
    redirect("/");
  }

  return (
    <div className="h-full ">
      <Script src="https://www.paytr.com/js/iframeResizer.min.js"></Script>
      <iframe
        src={`https://www.paytr.com/odeme/guvenli/${token}`}
        id="paytriframe"
        className="w-full !min-h-[800px] !max-h-[3000px] !overflow-auto !h-full"
      ></iframe>
      <script style={{ height: "1000px" }}>
        iFrameResize({},&apos;#paytriframe&apos;);
      </script>
    </div>
  );
};

export default CheckOutFormPage;
