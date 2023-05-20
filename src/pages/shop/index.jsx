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

import HOC from "@/hoc";
import axios from "@/config/axios";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  try {
    const response = await axios.get("api/product");
    const data = response.data.data;

    return {
      props: {
        query: context.query,
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        query: context.query,
        data: null,
      },
    };
  }
}

function Shop({ query, data }) {
  const [filter, setFilter] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  const category = [
    "Paket Skincare",
    "Serum",
    "Facial Wash",
    "Toner",
    "Cleanser",
    "Cream",
  ];

  const onCategoryChange = (e, item) => {
    const newItem = item.toLowerCase();

    if (e.target.checked) {
      setFilter((prevState) => [...prevState, newItem]);
    } else {
      setFilter((prevState) =>
        prevState.filter((itemName) => itemName !== newItem)
      );
    }
  };

  const filterItem = () => {
    if (filter.length !== 0) {
      const temp = data.filter((i) => {
        const categories = i.category.split(", ");
        return categories.some((c) => filter.includes(c));
      });

      setFilteredItems(temp);
    } else {
      setFilteredItems(data);
    }
  };

  useEffect(() => {
    filterItem();
  }, [filter]);

  return (
    <>
      <section className="my-5 md:my-10 px-[10%]">
        <Heading size="sm" color="gray.600" mb="20px">
          Shop
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
            {category.map((item, index) => (
              <Checkbox
                key={index}
                color="gray.600"
                value={item}
                isChecked={filter.includes(item.toLowerCase())}
                onChange={(e) => onCategoryChange(e, item)}
              >
                Inovglow {item}
              </Checkbox>
            ))}
            {/* <Text fontWeight="bold" fontSize="md" mt="10px">
              PRICE RANGE
            </Text>
            <hr className=" border-b-0 border-2  mb-3 w-[50%] border-[#fe87ab]" />
            <Checkbox color="gray.600">Rp. 50.000 - Rp. 250.000</Checkbox>
            <Checkbox color="gray.600">Rp. 250.000 - Rp. 500.000</Checkbox>
            <Checkbox color="gray.600">Rp. 500.000 - Rp. 1.500.000</Checkbox> */}
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
            spacing={{ base: "25px", "2xl": "30px" }}
            justify={{ base: "start", md: "start" }}
            mt={{ base: "30px", md: "0" }}
          >
            {filteredItems.map((item) => (
              <WrapItem flexDirection="column" key={item.id}>
                <Link
                  as={NextLink}
                  href={`/shop/${item.id}`}
                  _hover={{ textDecoration: "none" }}
                >
                  <Box
                    position="relative"
                    w={{ base: "70vw", md: "24vw", lg: "29vw", xl: "14vw" }}
                    h={{ base: "22vh", lg: "17rem" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover "
                    />
                  </Box>
                  <Text
                    maxWidth={{
                      base: "70vw",
                      md: "24vw",
                      lg: "29vw",
                      xl: "14vw",
                    }}
                    fontSize="sm"
                    fontWeight="bold"
                    textAlign="center"
                    color="gray.600"
                  >
                    {item.name}
                  </Text>
                  <Text fontSize="sm" textAlign="center" color="gray.600">
                    Rp. {item.price.toLocaleString("id-ID")}
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

export default HOC(Shop);
