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
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";

import HOC from "../../hoc";

function Hair() {
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
          Hair
        </Heading>
        <hr className=" border-2" />

        <Flex direction={{ base: "column", md: "row" }} mt="20px">
          <Box
            flex={{ base: "1", md: "2", lg: "1" }}
            display="flex"
            flexDirection={{ base: "column", lg: "column" }}
          >
            <Text fontWeight="bold" fontSize="sm">
              FILTER
            </Text>
            <Text fontWeight="bold" fontSize="md">
              CATEGORY
            </Text>
            <hr className=" border-b-0 border-2  mb-3 w-[50%] border-[#fe87ab]" />
            {operasi.map((item, index) => (
              <Checkbox key={index} color="gray.600">
                Operasi {item}
              </Checkbox>
            ))}
            {/* <Box position="relative" w="full" h="30rem" mb="20px" mt="30px">
              <Image
                src="https://inovglow.com/wp-content/uploads/2023/01/24-Januari-05-scaled.jpg"
                fill
                className=" object-cover"
                alt="promo"
              />
            </Box>
            <Box position="relative" w="full" h="30rem" mb="20px">
              <Image
                src="https://inovglow.com/wp-content/uploads/2023/01/24-Januari-05-scaled.jpg"
                fill
                className=" object-cover"
                alt="promo"
              />
            </Box> */}
          </Box>
          <Wrap
            flex="4"
            ms="20px"
            spacing={{ base: "25px", lg: "30px" }}
            justify={{ base: "start", md: "start" }}
            mt={{ base: "30px", md: "0" }}
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
                    w={{ base: "70vw", md: "24vw", lg: "29vw", xl: "14vw" }}
                    h={{ base: "22vh", lg: "17rem" }}
                  >
                    <Image
                      src="https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="try"
                      fill
                      className="object-cover "
                    />
                  </Box>
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                    color="gray.600"
                  >
                    Image Label
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
// export default Hair;
export default HOC(Hair);
