import { Card, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { UserSignUpMail } from "@/lib/SendMail";
import FeatureGrid from "@/components/FeaturesGrid/Features";

export default async function page() {
    // await UserSignUpMail("iamtushgaurav@gmail.com");

    return (
        <>
            <Container maxW={"4xl"} mb={10}>
                <Heading pt={"8"}>
                    Welcome to the Future of Automation
                </Heading>
                <Text fontSize={"smaller"}
                    py={"2"} mb={"2"}>
                    "In the realm where innovation meets precision, our technology dances on the cutting edge of possibilities."
                </Text>

                <Text>
                    At Orangewood Labs, we believe in redefining the boundaries of automation. Our advanced AI-enabled 6-axis Industrial robots are not just tools; they are the architects of a new era in manufacturing. Let us take you on a journey into the heart of our technology and unveil the magic that powers the future of industrial automation.
                </Text>

                <Heading pt={"4"} fontSize={"x-large"}>
                    How It Works
                </Heading>
                <Text py="2" mb={2}>
                    Our technology is built on a foundation of intelligence and adaptability. Through a seamless integration of artificial intelligence and robotic engineering, our 6-axis Industrial robots move with unparalleled precision, learning and adapting to their environment in real-time. The synergy between human intuition and machine efficiency is what sets our technology apart.
                </Text>

            </Container>

            <FeatureGrid maxW={"4xl"} />

            <Container maxW={"4xl"} mb={10}>
                <Heading pt={"4"} fontSize={"x-large"}>
                    Explore the Future
                </Heading>
                <Text py={2} mb={2}>
                    This is not just technology; it's a revolution. Explore the full spectrum of possibilities with Orangewood Labs. From streamlining manufacturing processes to enhancing efficiency, our robotic arms are the catalysts for change. Join us in shaping the future of industrial automation.
                </Text>
            </Container>

        </>
    )
}