import Image from "next/image";
import {
  Box,
  Flex,
  Input,
  Button,
  Circle,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import { useState } from "react";

import HOC from "../../hoc";

function Solution() {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);
  const [btnFace, setBtnFace] = useState(false);
  const [btnBody, setBtnBody] = useState(false);

  const variantsBtn = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const variantsLeft = {
    closed: {
      display: "none",
      x: "10%",
      transition: {
        type: "spring",
        duration: 0.2,
        bounce: 0,
      },
    },
    open: {
      display: "flex",
      x: 0,
      transition: {
        type: "spring",
        duration: 0.2,
        bounce: 0,
      },
    },
  };

  const variantsRight = {
    closed: {
      display: "none",
      x: "-10%",
      transition: {
        type: "spring",
        duration: 0.2,
        bounce: 0,
      },
    },
    open: {
      display: "flex",
      x: 0,
      transition: {
        type: "spring",
        duration: 0.2,
        bounce: 0,
      },
    },
  };

  const menuFace = () => {
    switch (btnFace) {
      case 1:
        return "RAMBUT";
        break;
      case 2:
        return "DAHI";
        break;
      case 3:
        return "PELIPIS";
        break;
      case 4:
        return "MATA";
        break;
      case 5:
        return "HIDUNG";
        break;
      case 6:
        return "TELINGA";
        break;
      case 7:
        return "PIPI";
        break;
      case 8:
        return "MULUT";
        break;
      case 9:
        return "BIBIR";
        break;
      case 10:
        return "DAGU";
        break;
      case 11:
        return "LEHER";
        break;
      default:
        break;
    }
  };

  const menuBody = () => {
    switch (btnBody) {
      case 1:
        return "PAYUDARA";
        break;
      case 2:
        return "LENGAN";
        break;
      case 3:
        return "PERUT";
        break;
      case 4:
        return "TANGAN";
        break;
      case 5:
        return "PINGGANG";
        break;
      case 6:
        return "ORGAN INTIM";
        break;
      case 7:
        return "KAKI";
        break;
      default:
        break;
    }
  };

  return (
    <Flex direction="column" px="10%" py="30px">
      <Flex
        w="full"
        maxW="20rem"
        border="1px"
        borderColor="gray.600"
        bgColor="white"
        borderRadius="full"
        align="center"
        mb="30px"
      >
        <Input
          placeholder="Search solution... "
          me="10px"
          fontSize="sm"
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
          Solution
        </Button>
      </Flex>
      <Flex direction={{ base: "column", lg: "row" }}>
        <Box
          position="relative"
          w={{ base: "full", lg: "50%" }}
          h={{ base: "38vh", md: "80vh" }}
        >
          <Image
            src="/assets/solution/Cewek-face.png"
            fill
            className="object-fill"
            alt="img-face"
          />
        </Box>
        <Box
          position="relative"
          w={{ base: "full", lg: "50%" }}
          h={{ base: "38vh", md: "80vh" }}
        >
          <Image
            src="/assets/solution/Cewek-body.png"
            fill
            className="object-fill"
            alt="img-body"
          />
        </Box>
      </Flex>
      {/* face part btn */}
      <Box
        w={{ base: "80vw", lg: "40%" }}
        h={{ base: "38vh", md: "80vh" }}
        position="absolute"
        top={{ base: "17.2%", md: "12.4%", lg: "12.6rem" }}
        // bgColor="#cccccc80"
      >
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[15%] left-[50%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 1 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 1);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[35%] left-[50%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 2 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 2);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[40%] left-[24%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 3 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 3);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[53%] left-[65%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 4 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 4);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[60%] left-[50%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 5 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 5);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[57%] left-[22%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 6 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 6);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[65%] left-[35%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 7 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 7);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[72%] left-[55%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 8 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 8);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[74%] left-[48%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 9 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 9);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[82%] left-[50%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 10 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 10);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[90%] left-[60%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnFace == 11 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setBtnFace(btnFace ? false : 11);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
      </Box>
      {/* body part btn */}
      <Box
        w={{ base: "80vw", lg: "40%" }}
        h={{ base: "38vh", md: "80vh" }}
        position="absolute"
        top={{ base: "42.5%", md: "46.6%", lg: "12.6rem" }}
        right="10%"
        // bgColor="#cccccc80"
      >
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[20%] right-[38%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 1 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 1);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[25%] right-[20%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 2 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 2);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[50%] left-[50%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 3 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 3);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[61%] right-[25%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 4 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 4);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[62%] left-[33%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 5 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 5);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[74%] left-[48%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 6 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 6);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
        <motion.div
          className=" bg-red-600 w-[20px] h-[20px] absolute top-[90%] left-[60%] hover:cursor-pointer
             text-white flex justify-center items-center rounded-full"
          animate={btnBody == 7 ? "open" : "closed"}
          variants={variantsBtn}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setBtnBody(btnBody ? false : 7);
          }}
        >
          <Icon as={AiOutlinePlus} />
        </motion.div>
      </Box>
      {/* solution face */}
      <motion.div
        className="flex flex-col w-[80%] lg:w-[40%] h-[76.2vh] md:h-[80vh] absolute top-[17.2%] md:top-[12.1rem] lg:top-[12.6rem] md:right-[10%] bg-[#5c5c5ccc] p-3"
        animate={isOpenRight ? "open" : "closed"}
        variants={variantsRight}
      >
        <Flex justifyContent="space-between" w="full">
          <Text fontSize="md" fontWeight="bold" color="white">
            {menuFace()}
          </Text>
          <Icon
            as={RxCross2}
            color="white"
            w="20px"
            h="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenRight(!isOpenRight);
              setBtnFace(false);
            }}
          />
        </Flex>
        <VStack align="start" mt="10px" spacing="5px">
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
        </VStack>
      </motion.div>
      {/* solution body */}
      <motion.div
        className="flex flex-col w-[80%] lg:w-[40%] h-[76.2vh] md:h-[80vh] absolute top-[17.2%] md:top-[45.1rem] lg:top-[12.6rem] bg-[#5c5c5ccc] p-3"
        animate={isOpenLeft ? "open" : "closed"}
        variants={variantsLeft}
      >
        <Flex justifyContent="space-between" w="full">
          <Text fontSize="md" fontWeight="bold" color="white">
            {menuBody()}
          </Text>
          <Icon
            as={RxCross2}
            color="white"
            w="20px"
            h="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setIsOpenLeft(!isOpenLeft);
              setBtnBody(false);
            }}
          />
        </Flex>
        <VStack align="start" mt="10px" spacing="5px">
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
          <Link
            as={NextLink}
            href="/"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            w="full"
            _hover={{ textDecoration: "none", color: "#ff48a0" }}
          >
            Rambut Kering
          </Link>
        </VStack>
      </motion.div>
    </Flex>
  );
}

// export default Solution;
export default HOC(Solution);
