import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { userData } from "@prisma/client";
import { Trash2 } from "lucide-react";
import DeleteUserDataComponent from "./DeleteUserDataComponent";

interface ShowDataProps {
  userData: userData[];
}
const ShowData = ({ userData }: ShowDataProps) => {
  if (userData.length === 0) {
    return (
      <Container>
        <div className="flex justify-center items-center h-96">
          <h1 className="text-2xl">No data found</h1>
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
                <h1> Address: {data.adress}</h1>
                <p>Name: {data.fullName}</p>
                <p>Phone: {data.phone}</p>
                <p>Email: {data.email}</p>

                {data.adressPlace == "company" && (
                  <>
                    <p>Company Name: {data.firmaAdi}</p>
                    <p>VKN: {data.vkn}</p>
                    <p>Vergi Dairesi: {data.vergiDairesi}</p>
                    <p>E-fatura: {data.Efatura}</p>
                  </>
                )}
              </div>

              <div>
                <DeleteUserDataComponent userDataId={data.id} />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ShowData;
