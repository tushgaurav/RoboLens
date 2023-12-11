import styles from "./Features.module.css"

import { Heading, Card, Text, Grid, GridItem } from "@chakra-ui/react";

export default function FeatureGrid({ maxW }: { maxW: string }) {
    return (
        <div className={styles.bg}>
            <Grid margin={"0 auto"} maxW={maxW} my={"6"} templateColumns={"1fr 1fr 1fr"} autoRows={"250px"} justifyContent={"center"} alignContent={"center"}>

                <GridItem px={"4"} m={"2"} className={styles.glass} colSpan={3}>
                    <Heading fontSize={"large"} pt={"4"}>Collaborative Intelligence
                    </Heading>
                    <Text fontSize={""} pt={"4"}>
                        Our robots are designed to work hand-in-hand with human operators. They learn from each interaction, creating a collaborative dance of efficiency and precision.
                    </Text>
                    <Text fontSize={""} pt={"4"}>
                        Imagine a seamless dance between human expertise and robotic precision, where each movement is a step towards a shared goal. Our 6-axis Industrial robots are designed to work in harmony with human operators, creating a symphony of efficiency and innovation.
                    </Text>
                </GridItem>


                <GridItem px={"4"} m={"2"} className={styles.glass} rowSpan={2}>
                    <Heading fontSize={"large"} pt={"4"}>Adaptive Precision
                    </Heading>
                    <Text fontSize={""} pt={"4"}>
                        Precision is not static; it's an evolving standard. Our robots adapt to variations in tasks and environments, ensuring consistent and accurate performance.
                    </Text>
                </GridItem>

                <GridItem px={"4"} m={"2"} className={styles.glass} colSpan={2}>
                    <Heading fontSize={"large"} pt={"4"}> Intuitive Operation

                    </Heading>
                    <Text fontSize={""} pt={"4"}>
                        Say goodbye to complex interfaces. Our user-friendly controls make operating the robotic arms as simple as the touch of a button, bringing automation within everyone's reach.
                    </Text>
                </GridItem>

                <GridItem px={"4"} m={"2"} className={styles.glass}>
                    <Heading fontSize={"large"} pt={"4"}> Safety at the Core
                    </Heading>
                    <Text fontSize={""} pt={"4"}>
                        Safety is non-negotiable. Our robots are equipped with state-of-the-art sensors and safety protocols, ensuring a secure work environment at all times.
                    </Text>
                </GridItem>

                <GridItem px={"4"} m={"2"} className={styles.glass}>
                    <Heading fontSize={"large"} pt={"4"}> Safety at the Core
                    </Heading>
                    <Text fontSize={""} pt={"4"}>
                        Safety is non-negotiable. Our robots are equipped with state-of-the-art sensors and safety protocols, ensuring a secure work environment at all times.
                    </Text>
                </GridItem>
            </Grid>
        </div>
    )
}