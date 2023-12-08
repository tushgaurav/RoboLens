import BoothCoreComponent from "@/components/Booth/BoothCore";
import { Container, Heading, Tag, Flex, HStack } from "@chakra-ui/react";

export default function Booth() {
  return (
    <>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" pt={8}>
          <Heading py="4">Photo Booth</Heading>
          <HStack>
            <Tag colorScheme="purple">Beta</Tag>
          </HStack>
        </Flex>
      </Container>
      <BoothCoreComponent />
    </>
  );
}
