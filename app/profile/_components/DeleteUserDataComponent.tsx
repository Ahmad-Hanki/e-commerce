"use client";
import { Trash2 } from "lucide-react";
import deleteUserData from "../_actions/deleteUserData";
import toast from "react-hot-toast";

const DeleteUserDataComponent = ({ userDataId }: { userDataId: string }) => {
  const deleteHandler = async () => {
    const res = await deleteUserData(userDataId);

    if (res) {
      toast.success("Veriler başarıyla silindi");
      return;
    } else {
      toast.error("Veriler silinirken hata oluştu");
    }
  };
  return (
    <div>
      <Trash2
        onClick={deleteHandler}
        className="text-red-500 cursor-pointer hover:brightness-110"
      />
    </div>
  );
};

export default DeleteUserDataComponent;
