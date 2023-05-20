import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Heading,
  Flex,
  Text,
  Center,
  Icon,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import Head from "next/head";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { Navbar, Footer } from "@/components/layout";
// import Carousel from "react-multi-carousel";
import Carousel from "@/components/carousel";
import "react-multi-carousel/lib/styles.css";
// import "./TiltScale.demozap.scss";

import HOC from "@/hoc";

// const inter = Inter({ subsets: ["latin"] });

function Home() {
  const images = [
    "/assets/WEB-IKLAN-4-1-scaled-1920x1080.jpg",
    "/assets/WEB-landscape-2_web-1-scaled-1920x1080.jpg",
    "/assets/WEB-landscape-2_web-2-scaled-1920x1080.jpg",
  ];

  const galery = [
    "/assets/galery/DSC02801-scaled.jpg",
    "/assets/galery/FORMAT-IGF-BUAT-WEB-2.jpg",
    "/assets/galery/galery.png",
    "/assets/galery/Tanpa-judul-2-1-1024x1024.jpg",
    "/assets/galery/web-ukuran-1920x1080-rhinoplasty-2-2048x1152.jpg",
  ];

  const services = [
    "/assets/plastic-surgery/Facelift-Neck.png",
    "/assets/plastic-surgery/Hidung-Pasang-Implant-1.png",
    "/assets/plastic-surgery/Implant-Bokong.png",
    "/assets/plastic-surgery/Kikir-Rahang.png",
    "/assets/plastic-surgery/Revisi-Lipat-Mata.png",
    "/assets/plastic-surgery/Revisi-Payudara-Ganti-Implant-Nambah-Besar-CC-2.png",
    "/assets/plastic-surgery/Transfer-Lemak-Perut-ke-Bokong.png",
    "/assets/plastic-surgery/Revisi-Hidung-Kuret-Filler-Benang.png",
  ];

  const beforeAfter1 = [
    "/assets/before-after/bibir/IGF-020123-03.jpg",
    "/assets/before-after/kantung-mata/Screenshot-2023-01-20-192456.png",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143055.png",
    "/assets/before-after/payudara/IGF-020123-06.jpg",
    "/assets/before-after/sedot-lemak/IGF-BEFORE-AFTER-240123-06-scaled.jpg",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143141.png",
  ];

  const beforeAfter2 = [
    "/assets/before-after/hidung/Screenshot-2023-01-18-143158.png",
    "/assets/before-after/bibir/IGF-020123-04.jpg",
    "/assets/before-after/kantung-mata/Screenshot-2023-01-20-192518.png",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143217.png",
    "/assets/before-after/payudara/IGF-020123-12.jpg",
  ];

  const beforeAfter3 = [
    "/assets/before-after/kantung-mata/Screenshot-2023-01-20-192531.png",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143304.png",
    "/assets/before-after/payudara/IGF-HASIL-OP-IMPLAN-PAYUDARA-2-1.jpg",
    "/assets/before-after/sedot-lemak/IGF-BEFORE-AFTER-240123-06-scaled.jpg",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143250.png",
  ];

  const beforeAfter4 = [
    "/assets/before-after/hidung/Screenshot-2023-01-18-143320.png",
    "/assets/before-after/payudara/IGF-HASIL-OP-IMPLAN-PAYUDARA-3-1.jpg",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143338.png",
    "/assets/before-after/bibir/IGF-020123-03.jpg",
    "/assets/before-after/hidung/Screenshot-2023-01-18-143320.png",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      display: "flex",
      y: 0,
    },
    closed: {
      display: "none",
      y: "-60%",
    },
  };

  return (
    <div>
      <Head>
        <title>Inovglow</title>
        <meta
          name="description"
          content="Inovglow Clinic the best of plastic surgery & aesthetic treatment
              terbaik di indonesia di dukung oleh peralatan yang canggih dan
              modern. Inov Glow merupakan klinik kecantikan dengan berbagai macam jenis
              perawatan kecantikan yang terdiri dari plastic surgery & aesthetic
              treatment serta pelayanan terbaik dari segi tenaga medis. Inov Glow Clinic berdedikasi untuk menjadi klinik kecantikan
              terbaik di semua kalangan di dukung oleh peralatan modern dan
              dokter spesialis berpengalaman, menyediakan berbagai macam layanan
              perawatan kecantikan dengan harga yang ekonomis yang bisa
              dijangkau oleh semua orang."
        />
      </Head>
      <Carousel
        images={images}
        speed={500}
        slides={1}
        w="full"
        h={{
          base: "100vh",
          md: "27rem",
          lg: "40rem",
          xl: "55rem",
          "2xl": "100vh",
        }}
        accessibility={false}
        arrows={false}
        objectFit={"min-[300px]:object-cover object-fill"}
        fade={true}
      />
      <div className="max-[768px]:flex hidden flex-col px-5 w-full bg-[#fff0f598] absolute max-[768px]:top-[50vh] md:top-[17rem]">
        <Box w="full" py="10px">
          <Text
            fontWeight="bold"
            fontSize="md"
            color="#9d5e91"
            textAlign="center"
            onClick={() => setIsOpen(!isOpen)}
            _hover={{ cursor: "pointer" }}
          >
            OUR SERVICES
          </Text>
        </Box>
        <motion.div
          className="max-[768px]:flex flex-wrap min-[769px]:hidden"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <Link
            as={NextLink}
            w="50%"
            href="/plastic-surgery"
            textAlign="center"
            fontWeight="bold"
            fontSize="md"
            color="gray.600"
            mb="10px"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Plastic Surgery
          </Link>
          <Link
            as={NextLink}
            w="50%"
            href="/aesthetic"
            textAlign="center"
            fontWeight="bold"
            fontSize="md"
            color="gray.600"
            mb="10px"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Aesthetic
          </Link>
          <Link
            as={NextLink}
            w="50%"
            href="/hair"
            textAlign="center"
            fontWeight="bold"
            fontSize="md"
            color="gray.600"
            mb="10px"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Hair
          </Link>
        </motion.div>
      </div>
      <VStack
        position="absolute"
        top="3%"
        left="10%"
        align="start"
        gap="10px"
        display={{ base: "none", lg: "flex" }}
      >
        <Flex
          w="20rem"
          border="1px"
          borderColor="gray.700"
          bgColor="white"
          borderRadius="full"
          align="center"
        >
          <Input
            placeholder="Your email... "
            me="10px"
            borderStartRadius="full"
            border="none"
            focusBorderColor="transparent"
          />
          <Button
            h="30px"
            bgColor="#624f7e"
            _hover={{ bgColor: "#624f7e90" }}
            color="white"
            borderRadius="full"
            fontSize="sm"
            me="5px"
          >
            Cari
          </Button>
        </Flex>
        <Heading fontStyle={"italic"}>BEST SELLER</Heading>
        <Flex direction="column" color="gray.800" fontSize="lg">
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Rhinoplasty
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Breast Augmentation
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Hair Transplant
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Liposuction
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            3D Beautification
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Emsella
          </Link>
          <Link
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none", color: "#6761ab" }}
          >
            Emsculpt
          </Link>
        </Flex>
      </VStack>
      <VStack
        position="absolute"
        top="3%"
        right="10%"
        align="start"
        gap="10px"
        display={{ base: "none", lg: "flex" }}
      >
        <Box
          h="20rem"
          w="20rem"
          borderRadius="md"
          border="2px"
          borderColor="gray.400"
          p="10px"
        >
          <Flex mb="15px">
            <Flex direction="column" w="75%">
              <HStack>
                <Text fontSize="md">4.9</Text>
                <Flex>
                  <Icon as={AiFillStar} />
                  <Icon as={AiFillStar} />
                  <Icon as={AiFillStar} />
                  <Icon as={AiFillStar} />
                  <Icon as={AiFillStar} />
                </Flex>
                <Text fontSize="sm">102 review</Text>
              </HStack>
              <Text fontStyle="italic">Customer Satisfaction Rating</Text>
            </Flex>
            <Button
              w="25%"
              fontSize="xs"
              bgColor="#624f7e"
              color="white"
              _hover={{ bgColor: "#624f7e90" }}
            >
              Tulis <br /> Review
            </Button>
          </Flex>
          <hr className=" border-gray-400" />
          <Flex direction="column" overflow="auto" h="15rem" px="10px">
            <Text fontSize="md" fontWeight="bold">
              Irene Masita
            </Text>
            <Text fontSize="sm" mb="10px">
              Dari sekian banyak aesthetic clinic yang pernah aku coba, The
              Clinic jadi klinik yang paling the best sih. Gak nyangka banget
              sama pelayanannya ternyata sebagus itu. Apa lagi pas aku
              konsultasi dengan dokternya. Serasa ngobrol sama temen sendiri.
              Dokternya ramah banget, penjelasannya juga gampang dimengerti. Pas
              treatment pun jadi asik dan nyaman banget.
            </Text>
            <Text fontSize="md" fontWeight="bold">
              Irene Masita
            </Text>
            <Text fontSize="sm" mb="10px">
              Dari sekian banyak aesthetic clinic yang pernah aku coba, The
              Clinic jadi klinik yang paling the best sih. Gak nyangka banget
              sama pelayanannya ternyata sebagus itu. Apa lagi pas aku
              konsultasi dengan dokternya. Serasa ngobrol sama temen sendiri.
              Dokternya ramah banget, penjelasannya juga gampang dimengerti. Pas
              treatment pun jadi asik dan nyaman banget.
            </Text>
          </Flex>
        </Box>
        <Box w="full" h="10rem" position="relative">
          <Image
            src="/assets/cosmetician-holds-syringe-with-injection-of-botox.jpg"
            alt="Iklan"
            fill
            className="object-cover"
          />
        </Box>
      </VStack>
      <Box px="10%">
        <Heading textAlign="center" mt="3rem" mb="50px" size="lg">
          THE STORY ABOUT BEFORE & AFTER
        </Heading>
        <Flex justify="center" gap="30px" wrap="wrap">
          <Box
            position="relative"
            w={{ base: "100%", lg: "40%" }}
            h={{
              base: "9rem",
              md: "30vh",
              xl: "50vh",
            }}
          >
            <Carousel
              images={beforeAfter1}
              speed={2000}
              slides={1}
              w={"full"}
              h={{
                base: "9rem",
                md: "30vh",
                xl: "50vh",
              }}
              accessibility={true}
              arrows={true}
              objectFit={" object-fill"}
              fade={false}
            />
          </Box>
          <Box
            position="relative"
            w={{ base: "100%", lg: "40%" }}
            h={{
              base: "9rem",
              md: "30vh",
              xl: "50vh",
            }}
            // maxW="30rem"
            // maxH="20rem"
          >
            <Carousel
              images={beforeAfter2}
              speed={2000}
              slides={1}
              w={"full"}
              h={{
                base: "9rem",
                md: "30vh",
                xl: "50vh",
              }}
              accessibility={true}
              arrows={true}
              objectFit={" object-fill"}
              fade={false}
            />
          </Box>
          <Box
            position="relative"
            w={{ base: "100%", lg: "40%" }}
            h={{
              base: "9rem",
              md: "30vh",
              xl: "50vh",
            }}
            // maxW="30rem"
            // maxH="20rem"
          >
            <Carousel
              images={beforeAfter3}
              speed={2000}
              slides={1}
              w={"full"}
              h={{
                base: "9rem",
                md: "30vh",
                xl: "50vh",
              }}
              accessibility={true}
              arrows={true}
              objectFit={" object-fill"}
              fade={false}
            />
          </Box>
          <Box
            position="relative"
            w={{ base: "100%", lg: "40%" }}
            h={{
              base: "9rem",
              md: "30vh",
              xl: "50vh",
            }}
            // maxW="30rem"
            // maxH="20rem"
          >
            <Carousel
              images={beforeAfter4}
              speed={2000}
              slides={1}
              w={"full"}
              h={{
                base: "9rem",
                md: "30vh",
                xl: "50vh",
              }}
              accessibility={true}
              arrows={true}
              objectFit={" object-fill"}
              fade={false}
            />
          </Box>
        </Flex>
      </Box>
      <Box px="10%" mt="1rem" py="50px">
        <Text
          textAlign={{ base: "center" }}
          color="#fa4b9a"
          fontSize={{ base: "2xl", lg: "4xl" }}
          fontWeight="bold"
        >
          Klinik Kecantikan
        </Text>
        <Text
          textAlign={{ base: "center" }}
          color="#fa4b9a"
          fontSize={{ base: "2xl", lg: "4xl" }}
          fontWeight="bold"
          mb="50px"
        >
          InovGlow
        </Text>
        <Flex gap="30px" direction={{ base: "column", lg: "row" }}>
          <Center w="full">
            <Box
              // flex={{ base: 0, md: 1.5 }}
              position="relative"
              w={{ base: "full" }}
              h={{ base: "12rem", md: "20rem", lg: "25rem" }}
            >
              <Image
                src="/assets/WEB-IKLAN-4-1-scaled-1920x1080.jpg"
                fill
                className="object-cover"
                alt="img"
              />
            </Box>
          </Center>
          <Flex w="100%" direction="column">
            <Text
              textAlign="justify"
              fontWeight="semibold"
              color="gray.600"
              fontSize={{ base: "sm" }}
            >
              Inovglow Clinic the best of plastic surgery & aesthetic treatment
              terbaik di indonesia di dukung oleh peralatan yang canggih dan
              modern.
            </Text>
            <Text
              textAlign="justify"
              fontWeight="semibold"
              color="gray.600"
              fontSize={{ base: "sm" }}
            >
              Inov Glow merupakan klinik kecantikan dengan berbagai macam jenis
              perawatan kecantikan yang terdiri dari plastic surgery & aesthetic
              treatment serta pelayanan terbaik dari segi tenaga medis.
            </Text>
            <Text
              textAlign="justify"
              fontWeight="semibold"
              color="gray.600"
              fontSize={{ base: "sm" }}
            >
              Inov Glow Clinic berdedikasi untuk menjadi klinik kecantikan
              terbaik di semua kalangan di dukung oleh peralatan modern dan
              dokter spesialis berpengalaman, menyediakan berbagai macam layanan
              perawatan kecantikan dengan harga yang ekonomis yang bisa
              dijangkau oleh semua orang.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box px={{ base: "5%", lg: "10%" }}>
        <Heading textAlign="center" mt="1rem" mb="40px" size="lg">
          KNOW US MORE
        </Heading>
        <Flex
          wrap="wrap"
          gap="50px"
          justify="center"
          direction={{ base: "column", md: "row" }}
        >
          <VStack w={{ base: "100%", md: "40%" }}>
            <Link as={NextLink} href="/aesthetic">
              <Box
                w={{ base: "80vw", md: "30vw" }}
                h={{ base: "25vh", lg: "20rem" }}
                position="relative"
              >
                <Image
                  fill
                  src="/assets/banner-aesthetic.jpg"
                  alt="img"
                  className="object-cover"
                />
              </Box>
            </Link>
            <Text textAlign="center" color="#fa4b9a" fontWeight="bold">
              Our Article
            </Text>
            <Button
              bgColor="#fa4b9a"
              color="white"
              borderRadius="full"
              _hover={{ bgColor: "#fa4b9a90" }}
            >
              View Detail
            </Button>
          </VStack>
          <VStack w={{ base: "100%", md: "40%" }}>
            <Link as={NextLink} href="/aesthetic">
              <Box
                w={{ base: "80vw", md: "30vw" }}
                h={{ base: "25vh", lg: "20rem" }}
                position="relative"
              >
                <Image
                  fill
                  src="/assets/banner-aesthetic.jpg"
                  alt="img"
                  className="object-cover"
                />
              </Box>
            </Link>
            <Text textAlign="center" color="#fa4b9a" fontWeight="bold">
              Our Online Media
            </Text>
            <Button
              bgColor="#fa4b9a"
              color="white"
              borderRadius="full"
              _hover={{ bgColor: "#fa4b9a90" }}
            >
              View Detail
            </Button>
          </VStack>
          <VStack w={{ base: "100%", md: "40%" }}>
            <Link as={NextLink} href="/aesthetic">
              <Box
                w={{ base: "80vw", md: "30vw" }}
                h={{ base: "25vh", lg: "20rem" }}
                position="relative"
              >
                <Image
                  fill
                  src="/assets/banner-aesthetic.jpg"
                  alt="img"
                  className="object-cover"
                />
              </Box>
            </Link>
            <Text textAlign="center" color="#fa4b9a" fontWeight="bold">
              Our Doctor
            </Text>
            <Button
              bgColor="#fa4b9a"
              color="white"
              borderRadius="full"
              _hover={{ bgColor: "#fa4b9a90" }}
            >
              View Detail
            </Button>
          </VStack>
          <VStack w={{ base: "100%", md: "40%" }}>
            <Link as={NextLink} href="/aesthetic">
              <Box
                w={{ base: "80vw", md: "30vw" }}
                h={{ base: "25vh", lg: "20rem" }}
                position="relative"
              >
                <Image
                  fill
                  src="/assets/banner-aesthetic.jpg"
                  alt="img"
                  className="object-cover"
                />
              </Box>
            </Link>
            <Text textAlign="center" color="#fa4b9a" fontWeight="bold">
              About Us
            </Text>
            <Button
              bgColor="#fa4b9a"
              color="white"
              borderRadius="full"
              _hover={{ bgColor: "#fa4b9a90" }}
            >
              View Detail
            </Button>
          </VStack>
        </Flex>
        <Heading size="lg" textAlign="center" my="50px">
          OUR GALERY
        </Heading>
        <Carousel
          images={galery}
          speed={500}
          slides={3}
          // w={'"30rem"'}
          w={"full"}
          h={{ base: "15rem", md: "20rem", lg: "20rem", xl: "20rem" }}
          accessibility={true}
          arrows={true}
          objectFit={"object-cover"}
          fade={false}
        />
        {/* <Carousel
          images={galery}
          speed={500}
          slides={3}
          w={"30rem"}
          h={"20rem"}
          accessibility={true}
          arrows={true}
          fade={false}
          objectFit={"object-cover"}
        /> */}
        <Box mb="50px"></Box>
      </Box>
    </div>
  );
}

const HomeExport = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
);

export default HomeExport;
// export default HOC(Home);
