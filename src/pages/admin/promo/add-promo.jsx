import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import HOC from "@/hoc";
import axios from "@/config/axios";
import Image from "next/image";

function AddPromo() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imgDisplay, setImgDisplay] = useState(null);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImage = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setImage(file);
      setImgDisplay(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setTitle("");
    setImage(null);
    setImgDisplay(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert("Yakin ingin batal edit ?");
    router.push("/admin/promo");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("title", title);

    if (image !== null) {
      formData.append("image", image);
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setIsLoading(true);
      await axios.post(`/promo`, formData, config);
      alert("Data telah disimpan!");
      resetForm();
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        alert(
          "Maaf sesi login anda telah habis, anda akan diarahkan ke login page untuk login kembali"
        );
        router.push("/admin/login");
      } else {
        alert(error.response.data.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <Box px="10%" py="20px">
      <Heading size="sm" color="gray.600" mb="20px">
        Admin | Add Promo
      </Heading>
      <hr className=" border-2 mb-5" />

      <FormControl>
        <FormLabel>Promo Title</FormLabel>
        <Textarea
          mb="20px"
          name="title"
          value={title}
          placeholder="Enter promo title"
          onChange={(e) => handleTitle(e)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Promo Image</FormLabel>
        <Box
          border="1px"
          borderRadius="md"
          borderColor="gray.200"
          w="full"
          h="300px"
          position="relative"
          mb="10px"
        >
          <Image
            src={imgDisplay ? imgDisplay : "/assets/default-no-img.png"}
            fill
            alt={title}
            className="object-contain"
          />
        </Box>
        <Input
          p="5px"
          mb="20px"
          name="image"
          placeholder="Select image"
          type="file"
          onChange={(e) => handleImage(e)}
        />
      </FormControl>

      <HStack justify="end" mt="20px">
        <Button
          bgColor="red.300"
          color="white"
          onClick={(e) => handleCancel(e)}
          _hover={{ bgColor: "red.400" }}
        >
          Cancel
        </Button>
        <Button
          bgColor="green.400"
          color="white"
          _hover={{ bgColor: "green.500" }}
          isLoading={isLoading}
          onClick={(e) => handleSave(e)}
        >
          Save
        </Button>
      </HStack>
    </Box>
  );
}

export default HOC(AddPromo);
