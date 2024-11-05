"use client";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDataScheme, ZodTypeProp } from "./Scheme";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdressPlace } from "@prisma/client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";
import createUserData from "../../_actions/createUserData";
import { redirect } from "next/navigation";

const UserDataForm = ({ email, userId }: { email: string; userId: string }) => {
  const [addressPlace, setAddressPlace] = useState<AdressPlace>(
    AdressPlace.individual
  );
  const [eFatura, seteFatura] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ZodTypeProp>({
    resolver: zodResolver(UserDataScheme()),
  });

  const handleCheckboxChange = (checked: boolean) => {
    seteFatura(checked);
    console.log(checked);
  };

  const isSubmitting = async (data: ZodTypeProp) => {
    if (!data.fullName || !data.phone || !data.address) {
      toast.error("Please fill all fields");
      return;
    }

    if (
      addressPlace === AdressPlace.company &&
      (!data.firmaAdi || !data.vkn || !data.vergiDairesi)
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const userData = {
      fullName: data.fullName,
      phone: data.phone,
      adress: data.address,
      email,
      firmaAdi: data.firmaAdi,
      vkn: data.vkn,
      vergiDairesi: data.vergiDairesi,
      adressPlace: addressPlace,
      Efatura: eFatura,
    };

    const res = await createUserData(userId, userData);

    if (res) {
      toast.success("User data added successfully");
      redirect("/profile/" + userId);
    } else {
      toast.error("An error occurred");
    }
  };
  return (
    <div className="py-10">
      <Container>
        <form onSubmit={handleSubmit(isSubmitting)}>
          <div className="grid grid-cols-1 gap-7 max-w-xl">
            <div className="space-y-5">
              <h1 className="text-3xl">Add a new data</h1>
            </div>
            <div className="w-full space-y-2">
              <div className="space-y-6">
                <label className="text-xl font-bold">{"Full Name"}</label>
                <Input
                  type="text"
                  className="border-zinc-950 focus:border-none border-b-secondary py-4"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-400 font-light ">
                    {"Name should be between 3 and 30 characters"}
                  </p>
                )}
              </div>
              <div className="space-y-6">
                <label className="text-xl font-bold">{"E-mail"}</label>
                <Input
                  value={email}
                  disabled
                  className="border-zinc-950 focus:border-none border-b-secondary py-4"
                />
              </div>
              <div className="space-y-6">
                <label className="text-xl font-bold">{"Phone"}</label>
                <Input
                  type="phone"
                  className="border-zinc-950 focus:border-none border-b-secondary py-4"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-400 font-light ">
                    Please enter a valid Phone
                  </p>
                )}
              </div>

              <div className="space-y-6 ">
                <label className="text-xl font-bold">{"Address"}</label>
                <Textarea
                  rows={5}
                  className="border-zinc-950 focus:border-none border-b-secondary py-4 "
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-400 font-light ">
                    Message should be between 20 and 200 characters
                  </p>
                )}
              </div>

              <div className="py-6">
                <Tabs defaultValue="individual" className="w-full">
                  <TabsList className="flex items-center">
                    <TabsTrigger
                      className="flex-1 w-full"
                      onClick={() => setAddressPlace("individual")}
                      value="individual"
                    >
                      Individual
                    </TabsTrigger>
                    <TabsTrigger
                      className="flex-1 w-full"
                      onClick={() => setAddressPlace("company")}
                      value="company"
                    >
                      Company
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="company">
                    <div className="space-y-2">
                      <div className="space-y-6">
                        <label className="text-xl font-bold">
                          {"Company Name"}
                        </label>
                        <Input
                          type="text"
                          className="border-zinc-950 focus:border-none border-b-secondary py-4"
                          {...register("firmaAdi")}
                        />
                      </div>
                      <div className="space-y-6">
                        <label className="text-xl font-bold">{"VKN"}</label>
                        <Input
                          type="text"
                          className="border-zinc-950 focus:border-none border-b-secondary py-4"
                          {...register("vkn")}
                        />
                      </div>
                      <div className="space-y-6">
                        <label className="text-xl font-bold">
                          {"Vergi Dairesi"}
                        </label>
                        <Input
                          type="text"
                          className="border-zinc-950 focus:border-none border-b-secondary py-4"
                          {...register("vergiDairesi")}
                        />
                      </div>
                      <div className="pt-6">
                        <Card className="w-full h-[35px] rounded-md flex  items-center gap-2 px-2 py-1">
                          {/* in stock checkbox */}
                          <Checkbox
                            id="eFatura"
                            checked={eFatura}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <label
                            htmlFor="inStock"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            E-Fatura
                          </label>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="pt-4 ">
                <SubmitButton
                  className="text-xl font-semibold px-5 py-3"
                  submitting={"gonderiliyor"}
                  submit={"gonder"}
                  type="submit"
                />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default UserDataForm;
