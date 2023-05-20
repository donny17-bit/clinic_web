import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiAddToQueue } from "react-icons/bi";

import HOC from "@/hoc";
import axios from "@/config/axios";

export async function getServerSideProps(context) {
  try {
    const response = await axios.get("aesthetic");
    const data = response.data;

    return {
      props: {
        query: context.query,
        data: data,
      },
    };
  } catch (error) {
    return {
      props: {
        query: context.query,
        data: null,
      },
    };
  }
}

const Aesthetic = ({ query, data }) => {
  const router = useRouter();
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      setIsLoading(true);
      await axios.post(`/logout`, null, config);
      router.push("/admin/login");
      setIsLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  const isLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
  };

  const handleOpenModal = (id) => {
    setIdDelete(id);
    onOpen();
  };

  const handleCloseModal = () => {
    setIdDelete(null);
    onClose();
  };

  const handleDelete = async (e) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      setIsLoadingDelete(true);
      await axios.delete(`aesthetic/${idDelete}`, config);
      setIsLoadingDelete(false);
      setIdDelete(null);
      setRefresh(true);
      onClose();
    } catch (error) {
      if (error.response.status === 401) {
        alert(
          "Maaf sesi login anda telah habis, anda akan diarahkan ke login page untuk login kembali"
        );
        router.push("/admin/login");
      } else {
        alert(error.response.data.message);
      }
      setIsLoadingDelete(false);
    }
  };

  const refreshData = async () => {
    try {
      const result = await axios.get("aesthetic");
      setContent(result.data.data);
      setRefresh(false);
    } catch (error) {
      alert(error.response.data.message);
      setRefresh(false);
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/aesthetic/edit/${id}`);
  };

  const menu = [
    { name: "Article", href: "/admin" },
    { name: "Plastic Surgery", href: "/admin/plastic-surgery" },
    { name: "Aesthetic", href: "/admin/aesthetic" },
    { name: "Product", href: "/admin/product" },
    { name: "Promo", href: "/admin/promo" },
  ];

  useEffect(() => {
    isLogin();
    if (data) {
      setContent(data.data);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, [refresh]);

  return (
    <>
      <section className=" my-5 md:my-10 px-[10%]">
        <Heading size="sm" color="gray.600" mb="20px">
          Admin | Aesthetic
        </Heading>
        <hr className=" border-2" />
        <Flex direction={{ base: "column", md: "row" }} mt="20px">
          <Box
            flex={{ base: "1", md: "2", lg: "1" }}
            display="flex"
            flexDirection={{ base: "column", lg: "column" }}
          >
            <Text fontWeight="bold" fontSize="md">
              MAIN MENU
            </Text>
            <hr className=" border-b-0 border-2  mb-3 w-[50%] border-[#fe87ab]" />
            {menu.map((item, index) => (
              <Link as={NextLink} href={item.href} key={index}>
                <Button
                  w="75%"
                  mb="10px"
                  bgColor="#b866cf"
                  _hover={{ bgColor: "#b866cf90" }}
                  // leftIcon={<Icon as={BiAddToQueue} color="white" />}
                  color="white"
                  fontWeight="normal"
                  fontSize="sm"
                >
                  Menu {item.name}
                </Button>
              </Link>
            ))}

            <Button
              w="75%"
              mb="10px"
              colorScheme="red"
              _hover={{ bgColor: "red.300" }}
              // leftIcon={<Icon as={BiAddToQueue} color="white" />}
              color="white"
              fontWeight="normal"
              fontSize="sm"
              onClick={() => handleLogout()}
              isLoading={isLoading}
            >
              Logout
            </Button>
          </Box>
          <Flex flex="4" direction="column">
            <Flex>
              <Link as={NextLink} href="/admin/aesthetic/add-aesthetic">
                <Button
                  bgColor="#b866cf"
                  _hover={{ bgColor: "#b866cf90" }}
                  leftIcon={<Icon as={BiAddToQueue} color="white" />}
                  color="white"
                  fontWeight="normal"
                  fontSize="sm"
                  type="button"
                >
                  Add Service
                </Button>
              </Link>
            </Flex>
            <Wrap
              spacing={{ base: "25px", "2xl": "30px" }}
              justify={{ base: "start", md: "start" }}
              mt={{ base: "30px", md: "10px" }}
            >
              {content ? (
                content.map((item, index) => (
                  <WrapItem
                    flexDirection="column"
                    key={item.id}
                    alignItems="center"
                  >
                    <Box
                      position="relative"
                      w={{ base: "70vw", md: "24vw", lg: "29vw", xl: "14vw" }}
                      h={{ base: "22vh", lg: "17rem" }}
                    >
                      <Image
                        src={
                          item.thumbnail
                            ? item.thumbnail
                            : "/assets/default-no-img.png"
                        }
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        quality={75}
                        className={
                          item.thumbnail ? "object-cover" : "object-contain"
                        }
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
                      {item.title}
                    </Text>
                    <Flex gap="10px">
                      <Button
                        flex="1"
                        bgColor="orange.300"
                        color="white"
                        _hover={{ bgColor: "orange.400" }}
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        flex="1"
                        bgColor="red.400"
                        color="white"
                        _hover={{ bgColor: "red.500" }}
                        onClick={() => handleOpenModal(item.id)}
                      >
                        Hapus
                      </Button>
                    </Flex>
                  </WrapItem>
                ))
              ) : (
                <></>
              )}
            </Wrap>
          </Flex>
          <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Hapus Artikel</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Service yang telah dihapus tidak dapat dikembalikan. Yakin
                  ingin menghapus service?
                </Text>
              </ModalBody>

              <ModalFooter justifyContent="center" gap="10px">
                <Button colorScheme="blue" onClick={() => handleCloseModal()}>
                  Close
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete()}
                  isLoading={isLoadingDelete}
                >
                  Hapus
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </section>
    </>
  );
};

export default HOC(Aesthetic);
