import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  UnorderedList,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import axios from "@/config/axios";
import HOC from "@/hoc";

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;
    const response = await axios.get(`product/${id}`);
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

function Detail(props) {
  const data = props.data;
  const [product, setProduct] = useState([]);
  const [benefit, setBenefit] = useState([]);
  const [usage, setUsage] = useState([]);
  const [btnProduct, setBtnProduct] = useState(true);
  const [btnBenefit, setBtnBenefit] = useState(true);
  const [btnUsage, setBtnUsage] = useState(true);

  const getDescription = () => {
    if (data.description) {
      setProduct(data.description.split(","));
    }
  };

  const getBenefit = () => {
    if (data.function) {
      setBenefit(data.function.split("."));
    }
  };

  const getUsage = () => {
    if (data.instruction) {
      setUsage(data.instruction.split("."));
    }
  };

  const variants = {
    closed: {
      display: "none",
      y: "-5%",
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0,
      },
    },
    open: {
      display: "flex",
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0,
      },
    },
  };

  useEffect(() => {
    getDescription();
    getBenefit();
    getUsage();
  }, []);

  return (
    <Wrap px="10%" py="5%" justify="space-between">
      <WrapItem
        mt="40px"
        position="relative"
        w={{ base: "full", md: "40%" }}
        h={{ base: "30vh", md: "50vh" }}
      >
        <Image
          src={data.image}
          fill
          className="object-contain "
          alt={data.name}
        />
      </WrapItem>
      <WrapItem w={{ base: "full", md: "50%" }}>
        <Flex direction="column" w="full">
          <Flex align="start" direction="column" gap="15px">
            <Heading size="md">{data.name}</Heading>
            <Text fontWeight="semibold">
              Rp. {data.price.toLocaleString("id-ID")}
            </Text>
            <Button
              mt="5px"
              bgColor="#b866cf"
              _hover={{ bgColor: "#b866cf90" }}
              color="white"
            >
              Pesan Sekarang
            </Button>
          </Flex>
          <Flex direction="column" mt="50px">
            {product.length !== 0 ? (
              <>
                <Button
                  rightIcon={
                    btnProduct ? (
                      <Icon as={AiOutlineMinus} />
                    ) : (
                      <Icon as={AiOutlinePlus} />
                    )
                  }
                  // display="flex"
                  justifyContent="space-between"
                  w="full"
                  borderBottom={btnProduct ? "0px" : "1px"}
                  borderColor="gray.500"
                  borderRadius="0"
                  px="0"
                  bgColor="transparent"
                  _hover={{ bgColor: "transparent" }}
                  onClick={() => setBtnProduct(!btnProduct)}
                >
                  Isi Paket
                </Button>
                <motion.div
                  className=" pb-3 w-full mt-2 border-b border-gray-500"
                  animate={btnProduct ? "open" : "closed"}
                  variants={variants}
                >
                  <UnorderedList>
                    {product.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </UnorderedList>
                </motion.div>
              </>
            ) : (
              <></>
            )}

            <Button
              rightIcon={
                btnBenefit ? (
                  <Icon as={AiOutlineMinus} />
                ) : (
                  <Icon as={AiOutlinePlus} />
                )
              }
              display="flex"
              justifyContent="space-between"
              w="full"
              borderBottom={btnBenefit ? "0px" : "1px"}
              borderColor="gray.500"
              borderRadius="0"
              px="0"
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
              onClick={() => setBtnBenefit(!btnBenefit)}
            >
              Manfaat
            </Button>
            <motion.div
              className=" pb-3 w-full mt-2 border-b border-gray-500"
              animate={btnBenefit ? "open" : "closed"}
              variants={variants}
            >
              <UnorderedList>
                {benefit.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </UnorderedList>
            </motion.div>
            {usage.length !== 0 ? (
              <>
                <Button
                  rightIcon={
                    btnUsage ? (
                      <Icon as={AiOutlineMinus} />
                    ) : (
                      <Icon as={AiOutlinePlus} />
                    )
                  }
                  display="flex"
                  justifyContent="space-between"
                  w="full"
                  borderBottom={btnUsage ? "0px" : "1px"}
                  borderColor="gray.500"
                  borderRadius="0"
                  px="0"
                  bgColor="transparent"
                  _hover={{ bgColor: "transparent" }}
                  onClick={() => setBtnUsage(!btnUsage)}
                >
                  Cara Penggunaan
                </Button>
                <motion.div
                  className=" pb-3 w-full mt-2 border-b border-gray-500"
                  animate={btnUsage ? "open" : "closed"}
                  variants={variants}
                >
                  <UnorderedList>
                    {usage.map((item, index) => (
                      <ListItem key={index}>{item}</ListItem>
                    ))}
                  </UnorderedList>
                </motion.div>
              </>
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
      </WrapItem>
    </Wrap>
  );
}

// export default Detail;
export default HOC(Detail);
