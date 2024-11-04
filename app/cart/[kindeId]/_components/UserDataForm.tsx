"use client";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ZodType, z } from "zod";
import EditUserData from "../../_action/editUserData";

interface UserDataFormProps {
  userData: {
    id: string;
    name?: string;
    phone?: string;
    location?: string;
  };
}

const UserDataForm = ({ userData }: UserDataFormProps) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<ZodTypeProp>({
    resolver: zodResolver(Schame()),
  });

  const isSubmitting = async (data: ZodTypeProp) => {
    if (!data.fullName || !data.phone || !data.location) {
      toast.error("Please fill all the fields");
      return;
    }

    const res = await EditUserData(
      userData.id,
      data.fullName,
      data.phone,
      data.location
    );
    if (res) {
      toast.success("Data Updated Successfully");
    } else {
      toast.error("Something went wrong with saving user data");
    }

    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-primary">Contact Info</h2>

      <form onSubmit={handleSubmit(isSubmitting)}>
        <div className="grid grid-cols-1 gap-7">
          <div className="w-full space-y-2">
            <div className="space-y-6">
              <label className="text-xl font-bold">{"Adı"}</label>
              <Input
                type="text"
                defaultValue={userData.name}
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
              <label className="text-xl font-bold">{"Telefon"}</label>
              <Input
                defaultValue={userData.phone}
                type="phone"
                className="border-zinc-950 focus:border-none border-b-secondary py-4"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-400 font-light ">
                  Please enter a valid Phone Number
                </p>
              )}
            </div>

            <div className="space-y-6 ">
              <label className="text-xl font-bold">{"Location"}</label>
              <Textarea
                defaultValue={userData.location}
                rows={5}
                className="border-zinc-950 focus:border-none border-b-secondary py-4 "
                {...register("location")}
              />
              {errors.location && (
                <p className="text-red-400 font-light ">
                  Location should be between 20 and 200 characters
                </p>
              )}
            </div>
            <div className="pt-4">
              <SubmitButton
                className="text-xl font-semibold px-5 py-3"
                submitting={"Saving..."}
                submit={"Save"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDataForm;

export interface ZodTypeProp {
  fullName: string;
  phone: string;
  location: string;
}

const Schame = (): ZodType<ZodTypeProp> => {
  return z.object({
    fullName: z.string().min(3).max(30),
    phone: z.string().min(10).max(17),
    location: z.string().min(20).max(200),
  });
};
