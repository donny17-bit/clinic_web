import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  Icon,
  Center,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineEmail, MdCalendarToday } from "react-icons/md";
import Image from "next/image";

function Footer() {
  return (
    <Flex direction="column" paddingX="10%" pt="2%" pb="1%" bgColor="#fff0f5">
      <VStack>
        <Heading>SUBCRIBE US</Heading>
        <Text color="gray.600" pt="10px" pb="10px" textAlign="center">
          Join us on our comunity, and be the first to get update and specials
        </Text>
        <Flex w="full">
          <Input placeholder="Your email... " me="10px" borderColor="black" />
          <Button bgColor="#624f7e" color="white">
            Send
          </Button>
        </Flex>
      </VStack>
      <VStack align="start" mt="30px">
        <HStack gap="20px">
          <Icon as={RiFacebookFill} />
          <Icon as={RiInstagramFill} />
          <Icon as={RiWhatsappFill} />
          <Icon as={RiYoutubeFill} />
        </HStack>
        <Text fontSize="sm">Copyright © 2020-2023 PT INOVGLOW INDONESIA</Text>
        <Link as={NextLink} href="/" fontSize="sm">
          Powered by Inovglow
        </Link>
      </VStack>
    </Flex>
  );
}

export default Footer;
