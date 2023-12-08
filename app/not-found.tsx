"use client"

import { Container, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import Lottie from 'react-lottie-player'
import lottieJson from './not-found.json'

export const metadata: Metadata = {
    title: "Not found",
    description: "Sorry, we couldn't find the page you're looking for.",
};

export default function Page() {
    return (
        <Container maxW="container.lg">
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ margin: "0 auto", width: 550, height: 550 }}
            />
            <Text align="center" as="h1" fontSize="1000%" fontWeight="bold" >
                404
            </Text>


        </Container>

    );
}