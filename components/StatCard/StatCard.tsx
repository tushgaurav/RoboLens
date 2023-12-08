import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import exp from "constants";
import Image from "next/image";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

export default function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      p="4"
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      maxW={"200px"}
    >
      <Box>
        <StatLabel fontSize={"md"} fontWeight={"bold"} isTruncated pb="1">
          {title}
        </StatLabel>
        <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
          <Image src="/move.png" width="80" height="80" alt="robot move" />
        </StatNumber>
      </Box>
    </Stat >
  );
}
