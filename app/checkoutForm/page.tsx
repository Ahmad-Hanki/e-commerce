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
      <Script
        className="h-full "
        src="https://www.paytr.com/js/iframeResizer.min.js"
      ></Script>
      <iframe
        src={`https://www.paytr.com/odeme/guvenli/${token}`}
        id="paytriframe"
        
        style={{height: "150vh", width: "100%"}}
      ></iframe>
      <script>iFrameResize({},&apos;#paytriframe&apos;);</script>
    </div>
  );
};

export default CheckOutFormPage;
