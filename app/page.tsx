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
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { FcWebcam, FcTabletAndroid, FcLike } from "react-icons/fc";
import Link from "next/link";
import Stats from "@/components/Stats/Stats";
import Newsletter from "@/components/Newsletter/Newsletter";
import FeatureGrid from "@/components/FeaturesGrid/Features";

const Feature = ({ title, text, icon }: any) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={4}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}  >{title}</Text>
      <Text color={"gray.400"}>{text}</Text>
    </Stack>
  );
};

export default function Home() {
  return (
    <>
      <Container maxW={"3xl"} mb="40" >
        <Flex
          align={"center"}
          gap={8}
          flexDirection={"row-reverse"}
          py={{ base: 2, md: 4 }}
          flexWrap={"wrap"}

        >
          <Box >
            <video
              style={{
                maxWidth: "20vw",
                maxHeight: "40vh",
                mixBlendMode: "screen",
              }}

              src="/robot_animation.mov"
              autoPlay
              loop
              muted
              className={styles.video}
            />
          </Box>
          <Flex direction={'column'} gap={2}>

            <Box >
              <Heading
                fontWeight={600}
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                lineHeight={"130%"}
              >
                Welcome to <br />
                <Text fontSize={"xxx-large"} as={"span"} className={styles.text_animation}>
                  RoboLens Booth!
                </Text>
              </Heading>
            </Box>
            <Text color={"gray.200"}>
              Discover the future of interactive experiences with our innovative
              robotic arm photo system. RoboLens Booth brings a fusion of
              technology and creativity, providing a unique way to capture moments
              and create unforgettable memories.
            </Text>
            <Stack
              direction={'row'}
              spacing={3}
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
              <Link href="/learn">
                <Button variant={"link"} colorScheme={"blue"} size={"sm"} padding="3">
                  Learn more
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container >

      <Container maxW={"5xl"} mb="20">



        <Box p={4} mb="20">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<FcWebcam size={50} />}
              title={"Live Preview and Adjustment"}
              text={
                "Users can view a live preview of the camera's perspective and make real-time adjustments to the robotic arm's movement, ensuring the desired composition and perfect shots before they're captured."
              }
            />
            <Feature
              icon={<FcTabletAndroid size={50} />}
              title={"User-Friendly Interface"}
              text={
                "The system boasts an intuitive and user-friendly interface, making it accessible to a wide range of users. Whether tech-savvy or not, individuals can easily navigate and operate the RoboLens Booth with minimal guidance."
              }
            />
            <Feature
              icon={<FcLike size={50} />}
              title={"Unleash Creativity"}
              text={
                "With RoboLens Booth, you're the director. Design your photo journey by selecting unique trajectories, angles, and actions for the robotic arm to capture stunning shots, giving you complete control over your visual story."
              }
            />
          </SimpleGrid>
        </Box>

        <Stats />

        <Newsletter />
      </Container>
    </>
  );
}
