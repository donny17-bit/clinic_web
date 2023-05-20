import {
  Box,
  Heading,
  Text,
  WrapItem,
  Wrap,
  Center,
  Flex,
  Select,
  Checkbox,
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { MdRefresh } from "react-icons/md";

import HOC from "../../hoc";

function About() {
  const operasi = [
    "Area Mata",
    "Area Hidung",
    "Area Bibir",
    "Area Dagu",
    "Pengencangan Wajah & Leher",
    "Wajah Lainnya",
    "Area Tubuh & Payudara",
    "Transfer Lemak",
    "Estetika Lainnya",
    "Organ Intim",
  ];
  const src = "";

  return (
    <>
      <section className="my-10 px-[10%]">
        <Heading size="sm" color="gray.600" mb="20px">
          Doctor
        </Heading>
        <hr className=" border-2" />
        <Flex direction={{ base: "column" }} mt="20px">
          <Flex flex={{ base: "1", md: "2", lg: "1" }} display="flex">
            <Button
              w="fit-content"
              bgColor="#b866cf"
              _hover={{ bgColor: "#b866cf90" }}
            >
              <Icon as={MdRefresh} color="white" w="20px" h="20px" />
            </Button>
            <Button
              bgColor="#b866cf"
              w="fit-content"
              color="white"
              _hover={{ bgColor: "#b866cf90" }}
            >
              FILTER
            </Button>
          </Flex>
          <Wrap
            flex="4"
            ms="20px"
            spacing={{ base: "25px", lg: "30px" }}
            justify={{ base: "start", md: "start" }}
            mt={{ base: "30px", md: "50px" }}
          >
            {operasi.map((item, index) => (
              <WrapItem flexDirection="column" key={index}>
                {/* <Box w="100vw" key={index} wrap="wrap" gap="20px"> */}
                <Link
                  as={NextLink}
                  href="/plastic-surgery/detail"
                  _hover={{ textDecoration: "none" }}
                >
                  <Box
                    position="relative"
                    w={{ base: "70vw", md: "24vw", lg: "29vw", xl: "18vw" }}
                    h={{ base: "22vh", lg: "17rem", xl: "20rem" }}
                  >
                    <Image
                      src="/assets/contoh-dokter.png"
                      alt={`dokter-${index}`}
                      fill
                      className="object-cover "
                    />
                  </Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                    color="gray.600"
                    mb="30px"
                  >
                    dr. Danu Mahandaru, Sp.BP-RE
                  </Text>
                </Link>
                {/* </Box> */}
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </section>
    </>
  );
}

// for fast refresh disabled sek
// export default About;
export default HOC(About);
