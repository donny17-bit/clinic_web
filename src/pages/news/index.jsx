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
  Input,
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { BsSearch } from "react-icons/bs";

import HOC from "../../hoc";

function News() {
  const operasi = ["Area Mata", "Area Hidung", "Area Bibir", "Area Dagu"];

  return (
    <>
      <section className="my-10 px-[10%]">
        <Heading size="sm" color="gray.600" mb="20px">
          What&apos;s News
        </Heading>
        <hr className=" border-2" />
        <Flex mt="10px">
          <Input placeholder="Cari Artikel" />
          <Button bgColor="#b866cf" _hover={{ bgColor: "#b866cf90" }}>
            <Icon as={BsSearch} color="white" />
          </Button>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} mt="20px">
          <Box
            position="relative"
            h={{ base: "25vh", md: "40vh", lg: "30rem" }}
            w={{ base: "80vw", md: "50%" }}
          >
            <Image
              src="/assets/WEB-IKLAN-4-1-scaled-1920x1080.jpg"
              alt="artikel"
              // width={200}
              // height={200}
              fill
              className="object-cover "
            />
          </Box>
          <Wrap
            w={{ base: "full", md: "50%" }}
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
                    w={{ base: "70vw", md: "17vw", lg: "29vw", xl: "18vw" }}
                    h={{ base: "22vh", md: "12vh", lg: "10rem" }}
                  >
                    <Image
                      src="/assets/contoh-produk.png"
                      alt={`produk-${index}`}
                      fill
                      className="object-cover "
                    />
                  </Box>
                  <Text
                    fontSize={{ base: "sm", md: "xs", lg: "sm" }}
                    fontWeight={{ base: "bold", md: "normal", lg: "bold" }}
                    textAlign="center"
                    color="gray.600"
                    w={{ base: "70vw", md: "17vw", lg: "29vw", xl: "18vw" }}
                  >
                    Mengenal Treatment Skin Rejuvenation dan Manfaatnya
                  </Text>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </section>
    </>
  );
}

// for fast refresh disabled sek
// export default News;
export default HOC(News);
