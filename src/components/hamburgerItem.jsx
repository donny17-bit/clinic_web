import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

const HamburgerItem = ({ isOpen }) => {
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Flex overflow="hidden">
      <motion.div
        className=" absolute flex top-[60px] right-0 w-full h-screen bg-[#fff0f5] pt-10 flex-col items-center text-sm opacity-0 z-10 rounded-e-md"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <Link
          as={NextLink}
          href="/plastic-surgery"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          Plastic Surgery
        </Link>
        <Link
          as={NextLink}
          href="/aesthetic"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          Aesthetic
        </Link>
        <Link
          as={NextLink}
          href="/solution"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          Solution
        </Link>
        <Link
          as={NextLink}
          href="/shop"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          Shop
        </Link>
        <Link
          as={NextLink}
          href="/news"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          News
        </Link>
        <Link
          as={NextLink}
          href="/about"
          _hover={{ textDecoration: "none", color: "#fa85d5" }}
          color="#624f7e"
          fontSize="lg"
          fontWeight="semibold"
          padding="10px"
        >
          About
        </Link>
      </motion.div>
    </Flex>
  );
};

export default HamburgerItem;
