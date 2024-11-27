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
      <h2 className=" mb-3">Lütfen adres verilerinizi seçin</h2>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full bg-gray-200" asChild>
          <Button variant="outline" className="w-full">
            {selectedUser ? <div>{selectedUser.adress}</div> : "Select Data"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full bg-gray-200">
          <DropdownMenuLabel>Verilerinizi Seçin</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={userDataId}
            onValueChange={(value) => setUserDataId(value)}
          >
            {userData.map((user) => (
              <DropdownMenuRadioItem
                key={user.id}
                value={user.id}
                className="p-2 flex flex-col gap-2 items-start py-3"
              >
                {user.id === userDataId && <CheckCircle />}
                <div>
                  <strong>İsim:</strong> {user.fullName}
                </div>
                <div>
                  <strong>Adres:</strong> {user.adress}
                </div>
                <div>
                  <strong>Telefon:</strong> {user.phone}
                </div>
                <div>
                  <strong>E-posta:</strong> {user.email}
                </div>
                <div>
                  <strong>Adres Türü:</strong>{" "}
                  {user.adressPlace === "individual" ? "Individual" : "Company"}
                </div>
                {user.adressPlace === "company" && (
                  <>
                    <div>
                      <strong>Firma Adı:</strong> {user.firmaAdi}
                    </div>
                    <div>
                      <strong>VKN:</strong> {user.vkn}
                    </div>
                    <div>
                      <strong>Vergi Dairesi:</strong> {user.vergiDairesi}
                    </div>
                    <div>
                      <strong>E-Fatura:</strong> {user.Efatura ? "Yes" : "No"}
                    </div>
                  </>
                )}
              </DropdownMenuRadioItem>
            ))}
            <Link className="py-4" href={`/profile/${userId}`}>
              <Button>Başka bir adres verisi kullanmak istiyorum </Button>
            </Link>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDataRadio;
