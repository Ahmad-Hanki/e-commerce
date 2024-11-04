import { userData } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface UserDataRadioProps {
  userData: userData[];
  userDataId: string;
  setUserDataId: Dispatch<SetStateAction<string>>;
  userId: string;
}

const UserDataRadio = ({
  userData,
  userDataId,
  setUserDataId,
  userId,
}: UserDataRadioProps) => {
  const selectedUser = userData.find((user) => user.id === userDataId);

  return (
    <div className="pb-10 w-full">
      <h2 className="text-primary mb-3">Please Choose your address data</h2>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full bg-gray-200" asChild>
          <Button variant="outline" className="w-full">
            {selectedUser ? <div>{selectedUser.adress}</div> : "Select Data"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-gray-200">
          <DropdownMenuLabel>Select Your Data</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={userDataId}
            onValueChange={(value) => setUserDataId(value)}
          >
            {userData.map((user) => (
              <DropdownMenuRadioItem
                key={user.id}
                value={user.id}
                className="p-2 flex flex-col gap-2 items-start"
              >
                {user.id === userDataId && <CheckCircle />}
                <div>
                  <strong>Name:</strong> {user.fullName}
                </div>
                <div>
                  <strong>Address:</strong> {user.adress}
                </div>
                <div>
                  <strong>Phone:</strong> {user.phone}
                </div>
                <div>
                  <strong>Email:</strong> {user.email}
                </div>
                <div>
                  <strong>Address Type:</strong>{" "}
                  {user.adressPlace === "individual" ? "Individual" : "Company"}
                </div>
                {user.adressPlace === "company" && (
                  <>
                    <div>
                      <strong>Company Name:</strong> {user.firmaAdi}
                    </div>
                    <div>
                      <strong>Tax ID (VKN):</strong> {user.vkn}
                    </div>
                    <div>
                      <strong>Tax Office:</strong> {user.vergiDairesi}
                    </div>
                    <div>
                      <strong>E-Invoice:</strong>{" "}
                      {user.Efatura ? "Enabled" : "Disabled"}
                    </div>
                  </>
                )}
              </DropdownMenuRadioItem>
            ))}
            <Link href={`/profile/${userId}`}>
              I want to use another address data
            </Link>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDataRadio;
