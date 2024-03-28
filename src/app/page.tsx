import AppClient from "@/components/AppClient";
import Container from "@/components/Container";

export default async function Home() {
  return (
    <div className="bg-[#090916] min-h-screen text-white">
      <Container>
        <AppClient />
      </Container>
    </div>
  );
}
