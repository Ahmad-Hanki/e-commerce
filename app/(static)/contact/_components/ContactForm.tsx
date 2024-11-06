"use client";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schame, ZodTypeProp } from "./Scheme";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZodTypeProp>({
    resolver: zodResolver(Schame()),
  });

  const isSubmitting = async (data: ZodTypeProp) => {
    console.log(data);
    reset();
  };
  return (
    <div className="w-full flex-1">
      <form onSubmit={handleSubmit(isSubmitting)}>
        <div className="grid grid-cols-1 gap-7">
          <div className="space-y-5">
            <h2 className="text-3xl">Bize bir mesaj gönderin</h2>
            <p className="text-xl">
              Herhangi bir sorunuz varsa veya yardıma ihtiyacınız varsa lütfen
              aşağıdaki formu kullanarak bizimle iletişime geçin veya doğrudan
              bize e-posta veya telefon yoluyla ulaşabilirsiniz.
            </p>
          </div>
          <div className="w-full space-y-2">
            <div className="space-y-6">
              <label className="text-xl font-bold">{"Adı"}</label>
              <Input
                type="text"
                className="border-zinc-950 focus:border-none border-b-secondary py-4"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-400 font-light ">
                  Ad 3 ile 30 karakter arasında olmalıdır{" "}
                </p>
              )}
            </div>
            <div className="space-y-6">
              <label className="text-xl font-bold">E-posta</label>
              <Input
                type="email"
                className="border-zinc-950 focus:border-none border-b-secondary py-4"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 font-light ">
                  Lütfen geçerli bir e-posta adresi girin{" "}
                </p>
              )}
            </div>

            <div className="space-y-6 ">
              <label className="text-xl font-bold">Mesaj</label>
              <Textarea
                rows={5}
                className="border-zinc-950 focus:border-none border-b-secondary py-4 "
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-400 font-light ">
                  Mesaj 20 ile 200 karakter arasında olmalıdır
                </p>
              )}
            </div>
            <div className="pt-4">
              <SubmitButton
                className="text-xl font-semibold px-5 py-3"
                submitting={"gonderiliyor"}
                submit={"gonder"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
