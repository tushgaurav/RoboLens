import BoothCoreComponent from "@/components/Booth/BoothCore";
import { Container, Heading } from "@chakra-ui/react";

export default function Booth() {
  return (
    <>
      <Container maxW={"4xl"} py="4">
        <Heading>Photo Booth</Heading>
        <BoothCoreComponent />
      </Container>
    </>
  );
}
