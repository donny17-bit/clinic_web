import { useEffect, useState } from "react";
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
import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { BiFilterAlt } from "react-icons/bi";

import HOC from "@/hoc";
import axios from "@/config/axios";
import { plasticSurgery } from "../../data/plastic-surgery";

function PlasticSurgery() {
  console.log(plasticSurgery);
  const items = plasticSurgery;
  const [content, setContent] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleCheckboxChange(e) {
    const itemId = Number(e.target.value);

    if (e.target.checked) {
      setCheckedItems((prevState) => [...prevState, itemId]);
    } else {
      setCheckedItems((prevState) => prevState.filter((id) => id !== itemId));
    }
  }

  const filterItem = () => {
    const tempContent = [];
    if (checkedItems.length === 0) {
      items.map((item) => tempContent.push(...item.values));
      setContent(tempContent);
    } else {
      items
        .filter((item) => checkedItems.includes(item.id))
        .map((item) => {
          tempContent.push(...item.values);
        });
      setContent(tempContent);
    }
  };

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

  const variants = {
    open: { opacity: 1, x: "-150%", y: 50 },
    closed: { opacity: 0, x: 0 },
  };

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    filterItem();
  }, [checkedItems]);

  return (
    <>
      <Head>
        <title>Inovglow | Plastic Surgery</title>
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
      <section className=" my-5 md:my-10 px-[10%]">
        <Heading size="sm" color="gray.600" mb="20px">
          Plastic Surgery
        </Heading>
        <hr className=" border-2" />

        {/* for mobile button */}
        <Button
          w="100px"
          borderRadius="full"
          position="fixed"
          bottom="20px"
          left="50%"
          transform={"auto"}
          translateX="-50%"
          zIndex="20"
          display={{ base: "flex", md: "none" }}
          leftIcon={<Icon as={BiFilterAlt} />}
          onClick={toggleFilter}
        >
          Filter
        </Button>

        <Flex
          direction={{ base: "column", md: "row" }}
          mt={{ base: "0px", md: "20px" }}
        >
          <Box
            flex={{ base: "1", md: "2", lg: "1" }}
            display={{ base: "none", md: "flex" }}
            flexDirection={{ base: "column", lg: "column" }}
          >
            <Text fontWeight="bold" fontSize="sm">
              FILTER
            </Text>
            <Text fontWeight="bold" fontSize="md">
              CATEGORY
            </Text>
            <hr className=" border-b-0 border-2  mb-3 w-[50%] border-[#fe87ab]" />

            {items.map((item, index) => (
              <Checkbox
                key={index}
                color="gray.600"
                value={item.id}
                isChecked={checkedItems.includes(item.id)}
                onChange={handleCheckboxChange}
              >
                {item.name}
              </Checkbox>
            ))}
          </Box>
          <Wrap
            flex="4"
            ms={{ base: "0px", md: "20px" }}
            spacing={{ base: "15px", md: "25px", lg: "30px" }}
            justify={{ base: "start", md: "start" }}
            mt={{ base: "30px", md: "0" }}
          >
            {content.map((item, index) => {
              {
                console.log(item);
              }
              return (
                <WrapItem flexDirection="column" key={index}>
                  <Link
                    as={NextLink}
                    href={`/plastic-surgery/${item.link}`}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Box
                      position="relative"
                      w={{ base: "35vw", md: "24vw", lg: "29vw", xl: "14vw" }}
                      h={{ base: "19vh", md: "22vh", lg: "17rem" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                        quality={75}
                        className="object-cover "
                      />
                    </Box>
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="bold"
                      textAlign="center"
                      color="gray.600"
                      maxW={{
                        base: "35vw",
                        md: "24vw",
                        lg: "29vw",
                        xl: "14vw",
                      }}
                    >
                      {item.name}
                    </Text>
                  </Link>
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>
      </section>
    </>
  );
}

// export default PlasticSurgery;
export default HOC(PlasticSurgery);
