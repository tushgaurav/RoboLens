import { Container, Heading } from "@chakra-ui/react";
import { UserSignUpMail } from "@/lib/SendMail";

export default async function page() {
    // await UserSignUpMail("iamtushgaurav@gmail.com");

    return (
        <>
            <Container maxW={"3xl"} mb="40">
                <Heading p={"2"}>
                    Email Testing
                </Heading>
            </Container>
        </>
    )
}