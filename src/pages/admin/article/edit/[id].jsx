import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";

import HOC from "@/hoc";
import axios from "@/config/axios";
import Image from "next/image";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;
    const response = await axios.get(`article/${id}`);
    const data = response.data.data;

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

function Edit({ query, data }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(data.content);
  const [title, setTitle] = useState(data.title);
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [imgDisplay, setImgDisplay] = useState(data.image);
  const [tmbDisplay, setTmbDisplay] = useState(data.thumbnail);

  const options = {
    buttonList: [
      ["undo", "redo"],
      ["font", "fontSize", "formatBlock"],
      ["paragraphStyle", "blockquote"],
      ["bold", "underline", "italic"],
      ["fontColor", "hiliteColor", "textStyle"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["align", "horizontalRule", "list", "lineHeight"],
      ["link", "image"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"],
      ["save"],
    ],
  };

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

  const handleThumbnail = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setThumbnail(file);
      setTmbDisplay(URL.createObjectURL(file));
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert("Yakin ingin batal edit ?");
    router.push({
      pathname: "/admin",
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", value);

    if (image !== null) {
      formData.append("image", image);
    }
    if (thumbnail !== null) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setIsLoading(true);
      await axios.post(`/article/${data.id}?_method=PATCH`, formData, config);
      alert("Data telah disimpan!");
      router.push("/admin");
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
        Add Article
      </Heading>
      <hr className=" border-2 mb-5" />
      <form onSubmit={handleSave}>
        <FormControl>
          <FormLabel>Article Title</FormLabel>
          <Textarea
            mb="20px"
            name="title"
            value={title}
            placeholder="Enter article title"
            onChange={(e) => handleTitle(e)}
          />
          <FormLabel>Article Image Title</FormLabel>
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
          <FormLabel>Article Thumbnail Image</FormLabel>
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
              src={tmbDisplay ? tmbDisplay : "/assets/default-no-img.png"}
              fill
              alt={`${title} thumbnail`}
              className="object-contain"
            />
          </Box>
          <Input
            p="5px"
            mb="20px"
            name="thumbnail"
            placeholder="Select thumbnail image"
            type="file"
            onChange={(e) => handleThumbnail(e)}
          />
          <FormLabel>Article Content</FormLabel>
          <SunEditor
            height="40rem"
            setOptions={options}
            defaultValue={value}
            onChange={setValue}
          />
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
              type="submit"
            >
              Update
            </Button>
          </HStack>
        </FormControl>
      </form>
    </Box>
  );
}

export default HOC(Edit);
