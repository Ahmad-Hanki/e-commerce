import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { userData } from "@prisma/client";
import DeleteUserDataComponent from "./DeleteUserDataComponent";
import { EditIcon } from "lucide-react";
import Link from "next/link";

interface ShowDataProps {
  userData: userData[];
}
const ShowData = ({ userData }: ShowDataProps) => {
  if (userData.length === 0) {
    return (
      <Container>
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl">Veri bulunamadı</p>
        </div>
      </Container>
    );
  }
  return (
    <div className="pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-3">
          {userData.map((data) => (
            <Card
              key={data.id}
              className="bg-gray-100 p-4 flex justify-between "
            >
              <div className="flex flex-col gap-1 items-start">
                <h1> Adres: {data.adress}</h1>
                <p>İsim: {data.fullName}</p>
                <p>Telefon: {data.phone}</p>
                <p>E-posta: {data.email}</p>

                {data.adressPlace == "company" && (
                  <>
                    <p>Firma Adı: {data.firmaAdi}</p>
                    <p>VKN: {data.vkn}</p>
                    <p>Vergi Dairesi: {data.vergiDairesi}</p>
                    <p>E-fatura: {data.Efatura}</p>
                  </>
                )}
              </div>

              <div className="flex flex-col justify-between">
                <DeleteUserDataComponent userDataId={data.id} />
                <Link href={`/profile/${userData[0].userId}/${data.id}`}>
                  <EditIcon className="text-blue-500 cursor-pointer hover:brightness-110" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShowData;
