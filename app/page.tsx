import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Welcome to <br />
          <Text as={"span"} className={styles.text_animation}>
            RoboLens Booth!
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Discover the future of interactive experiences with our innovative
          robotic arm photo system. RoboLens Booth brings a fusion of technology
          and creativity, providing a unique way to capture moments and create
          unforgettable memories.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Link href="/booth">
            <Button
              colorScheme={"green"}
              bg={"blue.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "blue.500",
              }}
            >
              Get Started
            </Button>
          </Link>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
