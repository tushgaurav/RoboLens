import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FcCompactCamera, FcVideoCall, FcCableRelease } from "react-icons/fc";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px grey solid"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Stats() {
  return (
    <Box maxW="6xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading size="md" mb="4">
        RoboLens Statistics
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Photos Taken"}
          stat={"5,000"}
          icon={<FcCompactCamera size={"3em"} />}
        />
        <StatsCard
          title={"Videos Taken"}
          stat={"1,000"}
          icon={<FcVideoCall size={"3em"} />}
        />
        <StatsCard
          title={"Robot Moves"}
          stat={"7023"}
          icon={<FcCableRelease size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
}
