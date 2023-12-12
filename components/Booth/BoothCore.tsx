// Orangewood Labs 2023
// RoboLens Booth - BoothCore Component

"use client";

import styles from "./BoothCore.module.css";
import {
  Box,
  Heading,
  Grid,
  GridItem,
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spacer,
  Container,
  Flex,
  HStack,
  Badge,
  Text,
} from "@chakra-ui/react";
import { AiFillCamera, AiFillAudio } from "react-icons/ai";
import { BsFillMicMuteFill } from "react-icons/bs";
import { FaExchangeAlt, FaFileDownload } from "react-icons/fa";
import { MdHighQuality, MdSignalWifiStatusbar4Bar } from "react-icons/md";
import { SiLogitech } from "react-icons/si";

import { DownloadIcon } from "@chakra-ui/icons";
import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";

import { VideoFileNameGen, ImageFileNameGen } from "@/lib/NameGen";
import { generateUniqueId } from "@/lib/uniqueId";
import { uploadImage } from "@/lib/uploadImage";

// Confetti animation
import Confetti from "react-confetti";
import RobotMoveView from "./RobotMoveView/RobotMoveView";
import { Active, Inactive } from "../StatusIndicator/StatusIndicator";

const ID = generateUniqueId();

const BoothCoreComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [imageCount, setImageCount] = useState(0);

  const [firstDownload, setFirstDownload] = useState(false);
  const [mirrored, setMirrored] = useState(false);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    setFirstDownload(false);
  }, [firstDownload]);

  // React-Webcam Functionality
  const webcamRef = useRef(null) as any;
  const [imgSrc, setImgSrc] = useState(null);
  const [imageList, setImageList] = useState(["imgSrc"]);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorderRef = useRef(null) as any;

  const handleDataAvailable = useCallback(
    ({ data }: any) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  // Video Recording Functionality
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);


  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      // a.style = "display: none";
      a.href = url;
      const fileName = VideoFileNameGen();
      a.download = `${fileName}.mp4`;
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handleMirror = () => {
    setMirrored((prev) => !prev);
  };

  const handleAudio = () => {
    setAudio((prev) => !prev);
  };

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageList([...imageList, imageSrc]);
    setImgSrc(imageSrc);
    console.log(imageSrc);

    setImageCount((prev) => prev + 1)
    await uploadImage(ID, imageSrc, `photoBooth-${imageCount}.png`);
  };

  const downloadImage = () => {
    setFirstDownload(true);
    const link: any = document.createElement("a");
    link.href = imgSrc;
    const fileName = ImageFileNameGen();
    link.download = `${fileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Confetti animation
  const width = 1920;
  const height = 1080;

  const handleReset = () => {
    setImageList([]);
    setImgSrc(null);
    setFirstDownload(false);
  }

  // Additional functionalities can be added here

  return (
    <>
      {firstDownload && <Confetti width={width} height={height} />}

      {/* Status Indicators */}
      <Container maxW="container.lg" mb="10">
        <HStack>
          <Badge>
            <Flex justify="center" align="center" gap="3px" fontSize={"lg"}>
              <MdHighQuality /> <Text fontSize={"sm"}>HD</Text>
            </Flex>
          </Badge>

          <Badge>
            <Flex justify="center" align="center" gap="3px" fontSize={"lg"}>
              <MdSignalWifiStatusbar4Bar />
              <Text fontSize={"sm"}>Connected</Text>
            </Flex>
          </Badge>

          <Badge>
            <Flex justify="center" align="center" gap="5px" fontSize={"xl"}>
              <SiLogitech /> <Text fontSize={"sm"}>C922 Pro</Text>
            </Flex>
          </Badge>
        </HStack>
      </Container>

      <Flex maxH={{ base: "2xl", sm: "3xl", md: "4xl" }} justify="center">
        <Webcam
          audio={audio}
          ref={webcamRef}
          screenshotFormat="image/png"
          screenshotQuality={1}
          minScreenshotHeight={1080}
          minScreenshotWidth={1920}
          allowFullScreen={true}
          mirrored={mirrored}
          videoConstraints={{
            aspectRatio: 16 / 9,
            width: 1920,
            height: 1080,
            facingMode: "user",
          }}
          className={capturing ? styles.blur_box_recording : styles.blur_box}
        // style={{
        //   filter: capturing ? "blur(5px)" : "blur(0px)",
        // }}
        />
      </Flex>

      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        finalFocusRef={btnRef}
        size="md"

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gallery</DrawerHeader>
          <DrawerBody>
            <p>
              See the photos you have taken here. You can download them by right
              clicking on the image and selecting &quot;Save Image As&quot;.
            </p>

            {imageList.map((image, index) => (
              <Box py="4" key={index} >
                <img src={image} alt="Captured" />
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Container maxW="container.lg" py="4">
        {/* Main Grid */}
        <Grid gridTemplateColumns="1fr 1fr" gap="2">
          {/* 1 Grid Item - Controls */}
          <GridItem colEnd={2}>
            {/* Controls */}
            <HStack>
              <Button my="2" onClick={capture} colorScheme="orange">
                <AiFillCamera />
                <Spacer px="1" />
                Take a Photo
              </Button>

              <Button my="2" onClick={handleMirror}>
                <FaExchangeAlt />
                <Spacer px="1" />
                Mirror
              </Button>

              <Button my="2" onClick={handleAudio}>
                {audio ? <BsFillMicMuteFill /> : <AiFillAudio />}
              </Button>

              {capturing ? (
                <Button onClick={handleStopCaptureClick} colorScheme="red">
                  <Active color="red.600" />
                  Stop Capture
                </Button>
              ) : (
                <Button onClick={handleStartCaptureClick} colorScheme="green">
                  <Inactive color="green.600" />
                  Start Capture
                </Button>
              )}

              {recordedChunks.length > 0 && (
                <Button onClick={handleDownload}>
                  <FaFileDownload />
                </Button>
              )}
            </HStack>
          </GridItem>

          {/* 2 Grid Item - Robot Moves */}
          <GridItem colSpan={2}>
            <Card variant="outline" p="4">
              <Heading size="sm" py="2">
                Robot Moves
              </Heading>
              <Flex
                justifyContent="start"
                gap="4"
                py="4"
              >
                <RobotMoveView title="Precision Glide" />
                <RobotMoveView title="RoboRhythm Roll" />
                <RobotMoveView title="Binary Ballet" />
                <RobotMoveView title="Automotion Symphony" />

              </Flex>
            </Card>
          </GridItem>

          {/* 3 Grid Item - Previous Mode */}
          <GridItem colSpan={2}>
            <Button ref={btnRef} onClick={onOpen} variant="outline">
              Gallery
            </Button>

            <Box py="4"></Box>
          </GridItem>

          {/* Camera Roll */}
          <GridItem colSpan={2}>
            <Flex justifyContent={"space-between"}>
              <Heading size="md" py="2">
                Camera Roll
              </Heading>
              <Button onClick={handleReset} variant="outline">
                Clear
              </Button>
            </Flex>
            {imgSrc && (
              <>
                <Card variant="outline" p="4" my="2">
                  <Heading size="sm" py="2">
                    Last Photo
                  </Heading>
                  <img src={imgSrc} alt="Captured" />
                  <Button size="sm" p={4} onClick={downloadImage} variant="unstyled">
                    <DownloadIcon />
                  </Button>
                </Card>

                <Card variant={"outline"} p="4" my="2">
                  <Heading size="sm" py="1">
                    Last 3 Photos
                  </Heading>
                  <Flex justifyContent="start" gap={4} wrap={"wrap"} py={4}>
                    {imageList.slice(-3).map((image, index) => (
                      <Box key={index} maxW={"xs"}>
                        <img src={image} alt="Captured" />
                        <Spacer p="2" />
                      </Box>
                    ))}
                  </Flex>
                </Card>
              </>
            )}
          </GridItem>
          {/* Additional functionalities can be incorporated here */}
          <GridItem></GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default BoothCoreComponent;
// import React, { useState, useRef } from "react";
// import {
//   Box,
//   Button,
//   Grid,
//   GridItem,
//   IconButton,
//   useToast,
// } from "@chakra-ui/react";
// import { FaCamera, FaDownload } from "react-icons/fa";

// const BoothCoreComponent = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//   const chunksRef = useRef<Blob[]>([]);
//   const toast = useToast();

//   const imageList = [];

//   const handleStartRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//         audio: true,
//       });
//       mediaRecorderRef.current = new MediaRecorder(stream);
//       mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
//         chunksRef.current.push(event.data);
//       });
//       mediaRecorderRef.current.addEventListener("stop", () => {
//         const blob = new Blob(chunksRef.current, { type: "video/mp4" });
//         setVideoUrl(URL.createObjectURL(blob));
//         chunksRef.current = [];
//       });
//       mediaRecorderRef.current.start();
//       setIsRecording(true);
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error",
//         description: "Failed to start recording",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleStopRecording = () => {
//     mediaRecorderRef.current?.stop();
//     setIsRecording(false);
//   };

//   const handleDownload = () => {
//     const a = document.createElement("a");
//     a.href = videoUrl;
//     a.download = "captured-video.mp4";
//     a.click();
//   };

//   return (
//     <>
//       <Grid templateColumns="repeat(12, 1fr)" gap={4}>
//         <GridItem colSpan={6}>
//           <Box
//             w="full"
//             h="full"
//             bg="gray.100"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             position="relative"
//           >
//             {videoUrl ? (
//               <video ref={videoRef} src={videoUrl} controls />
//             ) : (
//               <Box fontSize="6xl" color="gray.400">
//                 <FaCamera />
//               </Box>
//             )}
//             {isRecording && (
//               <Box
//                 position="absolute"
//                 top={0}
//                 left={0}
//                 right={0}
//                 bottom={0}
//                 bg="red.500"
//                 opacity={0.5}
//               />
//             )}
//           </Box>
//         </GridItem>
//         <GridItem colSpan={6}>
//           {!isRecording ? (
//             <Button colorScheme="blue" onClick={handleStartRecording}>
//               Record
//             </Button>
//           ) : (
//             <Button colorScheme="red" onClick={handleStopRecording}>
//               Stop
//             </Button>
//           )}
//           {videoUrl && (
//             <IconButton
//               icon={<FaDownload />}
//               aria-label="Download"
//               onClick={handleDownload}
//               ml={4}
//             />
//           )}
//         </GridItem>
//         <GridItem colSpan={12}>
//           <Box maxH="xl">
//             {imageList.slice(-3).map((image, index) => (
//               <img key={index} src={image} alt="Captured" />
//             ))}
//           </Box>
//         </GridItem>
//         {/* Additional functionalities can be incorporated here */}
//         <GridItem></GridItem>
//       </Grid>
//     </>
//   );
// };

// export default BoothCoreComponent;
