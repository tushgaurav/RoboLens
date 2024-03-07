import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import exp from "constants";
import Image from "next/image";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  selected?: boolean;

}

export default function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, selected } = props;
  return (
    <Stat
      p="4"
      shadow={"xl"}
      border={"1px solid"}
      borderColor={"gray.200"}
      rounded={"lg"}
      maxW={"200px"}
      {...(selected && {
        bg: "green.600",
        color: "black",
        transform: "scale(1.06)",
        borderColor: "black.600",
      })
      }
    >
      <Box >
        <StatLabel fontSize={"md"} fontWeight={"bold"} isTruncated pb="1">
          {title} <br />
          {(selected &&
            <Text fontSize={"x-small"} fontWeight={"bold"} isTruncated pb="1" align="center">
              Selected
            </Text>
          )}
        </StatLabel>
        <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
          <Image src="/move.png" width="80" height="80" alt="robot move" />
        </StatNumber>
      </Box>
    </Stat >
  );
}
