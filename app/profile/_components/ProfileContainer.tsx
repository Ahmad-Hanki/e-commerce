import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfileContainer = ({ userId }: { userId: string }) => {
  return (
    <div>
      <Container>
        <div className="py-6 flex flex-col  md:flex-row md:justify-between md:items-center gap-4 ">
          <h1 className="text-3xl font-bold">Profil Sayfası</h1>

          <Link href={`/profile/${userId}/add`}>
            <Button className="text-lg">Yeni Adres Ekle</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProfileContainer;
