"use client";

import {
  Box,
  Heading,
  Grid,
  GridItem,
  Button,
  Card,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { DownloadIcon } from "@chakra-ui/icons";
import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

// Confetti animation
import Confetti from "react-confetti";

const BoothCoreComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [firstDownload, setFirstDownload] = useState(false);

  useEffect(() => {
    setFirstDownload(false);
  }, [firstDownload]);

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imageList, setImageList] = useState([]);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageList([...imageList, imageSrc]);
    setImgSrc(imageSrc);
    console.log(imageList);
  };

  const downloadImage = () => {
    setFirstDownload(true);
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = "photobooth_snapshot.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Confetti animation
  const width = 1920;
  const height = 1080;

  // Additional functionalities can be added here

  return (
    <>
      {firstDownload && <Confetti width={width} height={height} />}
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
              clicking on the image and selecting "Save Image As".
            </p>

            {imageList.map((image, index) => (
              <Box py="4">
                <img key={index} src={image} alt="Captured" />
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Grid gridTemplateColumns="1fr 0.25fr" gap="4">
        <GridItem>
          <Button ref={btnRef} onClick={onOpen} variant="outline">
            Gallery
          </Button>

          <Box py="4">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
              screenshotQuality={1}
              minScreenshotHeight={1080}
              minScreenshotWidth={1920}
            />
          </Box>
          <Button my="2" onClick={capture}>
            <AiFillCamera />
            <Spacer px="1" />
            Take a Photo
          </Button>
        </GridItem>

        {/* Camera Roll */}
        <GridItem>
          <Heading size="md" py="2">
            Camera Roll
          </Heading>
          {imgSrc && (
            <>
              <Card variant="outline" p="2" my="2">
                <Heading size="sm" py="1">
                  Last Photo
                </Heading>
                <img src={imgSrc} alt="Captured" />
                <Button size="sm" onClick={downloadImage} variant="unstyled">
                  <DownloadIcon />
                </Button>
              </Card>

              <Card variant="outline" p="2" my="2">
                <Heading size="sm" py="1">
                  Last 3 Photos
                </Heading>
                {imageList.slice(-3).map((image, index) => (
                  <Box key={index}>
                    <img src={image} alt="Captured" />
                    <Spacer p="2" />
                  </Box>
                ))}
              </Card>
            </>
          )}
        </GridItem>
        {/* Additional functionalities can be incorporated here */}
        <GridItem></GridItem>
      </Grid>
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
