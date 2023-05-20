import { useState, useEffect } from "react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { stack as Menu } from "react-burger-menu";

import HamburgerIcon from "../hambugerIcon";
import HamburgerItem from "../hamburgerItem";

function Navbar() {
  const variants = {
    open: { opacity: 1, x: "-150%", y: 50 },
    closed: { opacity: 0, x: 0 },
  };
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const src = "/assets/logo-old.png";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <Flex
    //   paddingX="10%"
    //   paddingY={{ base: "20px", lg: "20px" }}
    //   shadow="lg"
    //   position="sticky"
    //   top="0px"
    //   bgColor={"#ffffff"}
    //   zIndex="popover"
    // >
    //   <Link
    //     as={NextLink}
    //     href="/"
    //     // w="40%"
    //     flex="0.5"
    //     h="50px"
    //     position="relative"
    //     alignItems="center"
    //   >
    //     <Image src={src} fill alt="logo" className="object-contain" />
    //   </Link>
    //   <Spacer />
    //   <HStack flex="1" justify="end" spacing="5rem">
    //     <Link
    //       as={NextLink}
    //       href="/plastic-surgery"
    //       _hover={{ textDecoration: "none" }}
    //     >
    //       Plastic Surgery
    //     </Link>
    //     <Link
    //       as={NextLink}
    //       href="/aesthetic"
    //       _hover={{ textDecoration: "none" }}
    //     >
    //       Aesthetic
    //     </Link>
    //     <Link as={NextLink} href="/news" _hover={{ textDecoration: "none" }}>
    //       News
    //     </Link>
    //     <Link as={NextLink} href="/about" _hover={{ textDecoration: "none" }}>
    //       About
    //     </Link>
    //   </HStack>
    // </Flex>
    <Flex
      // justifyContent="center"
      paddingX={{ base: "5%", md: "10%" }}
      paddingY={{ base: "15px", lg: "20px" }}
      shadow="lg"
      position="sticky"
      top="0px"
      w="full"
      // h="7rem"
      bgColor="#fff0f5"
      zIndex="popover"
    >
      <HStack
        flex="1"
        justify="end"
        spacing={{ base: "30px", lg: "5rem" }}
        display={{ base: "none", md: "flex" }}
        pe={{ base: "2rem", lg: "5rem" }}
      >
        <Link
          as={NextLink}
          href="/plastic-surgery"
          _hover={{ textDecoration: "none", color: "#6761ab" }}
          color="gray.600"
          fontSize={{ base: "sm", xl: "sm" }}
          fontWeight="semibold"
        >
          Plastic Surgery
        </Link>
        <Link
          as={NextLink}
          href="/aesthetic"
          _hover={{ textDecoration: "none", color: "#6761ab" }}
          color="gray.600"
          fontSize={{ base: "sm", xl: "sm" }}
          fontWeight="semibold"
        >
          Aesthetic
        </Link>
        <Link
          as={NextLink}
          href="/solution"
          _hover={{ textDecoration: "none", color: "#6761ab" }}
          color="gray.600"
          fontSize={{ base: "sm", xl: "sm" }}
          fontWeight="semibold"
        >
          Solution
        </Link>
      </HStack>
      <Link
        as={NextLink}
        href="/"
        flex="0.5"
        // w={{ base: "80px", md: "200px", lg: "300px" }}
        h={{ base: "40px", md: "60px" }}
        position="relative"
        alignItems="center"
        // border="1px"
      >
        <Image src={src} fill alt="logo" className="object-contain" />
      </Link>
      <Spacer display={{ base: "block", md: "none" }} />
      <Box display={{ base: "block", md: "none" }}>
        <HamburgerIcon toggle={toggleMenu} />
        {isOpen && <HamburgerItem isOpen={isOpen} />}
      </Box>
      <HStack
        flex="1"
        justify="start"
        spacing={{ base: "30px", lg: "5rem" }}
        display={{ base: "none", md: "flex" }}
        ps={{ base: "2rem", lg: "5rem" }}
      >
        <Link
          as={NextLink}
          href="/shop"
          _hover={{ textDecoration: "none", color: "#6761ab" }}
          color="gray.600"
          fontSize={{ base: "sm", xl: "sm" }}
          fontWeight="semibold"
        >
          Shop
        </Link>
        <Link
          as={NextLink}
          href="/news"
          _hover={{ textDecoration: "none", color: "#6761ab" }}
          color="gray.600"
          fontSize={{ base: "sm", xl: "sm" }}
          fontWeight="semibold"
        >
          News
        </Link>
        <Box>
          <Text
            // as={NextLink}
            // href="/about"
            _hover={{
              textDecoration: "none",
              color: "#6761ab",
              cursor: "pointer",
            }}
            color="gray.600"
            fontSize={{ base: "sm", xl: "sm" }}
            fontWeight="semibold"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            p="10px"
            ps="0px"
          >
            About
          </Text>
          <Box
            position="absolute"
            // right=""
            top="60px"
            borderRadius="lg"
            w="140px"
            transform="auto"
            p="10px"
            flexDirection="column"
            display={isHover ? "flex" : "none"}
            bgColor="#b068c5"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            // translateX="-50%"
          >
            <Link
              as={NextLink}
              href="/about"
              _hover={{ textDecoration: "none", color: "#fff0f5" }}
              color="white"
              fontSize={{ base: "sm", xl: "sm" }}
              fontWeight="semibold"
            >
              About Us
            </Link>
            <Link
              as={NextLink}
              href="/about/before-after"
              _hover={{ textDecoration: "none", color: "#fff0f5" }}
              color="white"
              fontSize={{ base: "sm", xl: "sm" }}
              fontWeight="semibold"
            >
              Before After
            </Link>
          </Box>
        </Box>
      </HStack>
    </Flex>
  );
}

export default Navbar;
