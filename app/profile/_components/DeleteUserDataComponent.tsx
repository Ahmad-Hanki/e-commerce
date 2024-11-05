"use client";
import { Trash2 } from "lucide-react";
import deleteUserData from "../_actions/deleteUserData";
import toast from "react-hot-toast";

const DeleteUserDataComponent = ({ userDataId }: { userDataId: string }) => {
  const deleteHandler = async () => {
    const res = await deleteUserData(userDataId);

    if (res) {
      toast.success("Data deleted successfully");
      return;
    } else {
      toast.error("Error deleting data");
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
