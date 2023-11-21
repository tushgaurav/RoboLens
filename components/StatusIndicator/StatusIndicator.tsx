import { Box, Flex, keyframes, Tooltip } from "@chakra-ui/react";

export const Active = ({ color = "green.500" }: { color: string }) => {
  const ringScaleMin = 0.33;
  const ringScaleMax = 0.66;
  const pulseRing = keyframes`
      transform: scale(${ringScaleMin});
      transform: scale(${ringScaleMax});
	`;

  const pulseDot = keyframes`
	`;

  return (
    <Tooltip label={`Recording Video`} textTransform="capitalize">
      <Box
        as="div"
        h="14px"
        w="14px"
        mb="1.99em"
        mr="0.5em"
        position="relative"
        bgColor={color}
        borderRadius="50%"
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
        _after={{
          animation: `2.25s ${pulseDot} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      />
    </Tooltip>
  );
};

export const Inactive = ({ color = "grey.400" }: { color: string }) => {
  return (
    <Tooltip label={`Status: Inactive`} textTransform="capitalize">
      <Box
        as="div"
        h="14px"
        w="14px"
        mr="0.5em"
        position="relative"
        bgColor={color}
        borderRadius="50%"
      />
    </Tooltip>
  );
};
