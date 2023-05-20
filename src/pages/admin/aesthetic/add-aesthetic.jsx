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

function AddAesthetic() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [chosenCategory, setChosenCategory] = useState([]);
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [imgDisplay, setImgDisplay] = useState(null);
  const [tmbDisplay, setTmbDisplay] = useState(null);

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

  const category = ["Filler", "Suntik", "Laser", "Sulam", "Exilis", "Lainnya"];

  const changeCategory = (e, item) => {
    const newItem = item.toLowerCase();

    if (e.target.checked) {
      setChosenCategory((prevState) => [...prevState, newItem]);
    } else {
      setChosenCategory((prevState) =>
        prevState.filter((itemName) => itemName !== newItem)
      );
    }
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

  const resetForm = () => {
    setTitle("");
    setValue("");
    setChosenCategory([]);
    setImage(null);
    setImgDisplay(null);
    setThumbnail(null);
    setTmbDisplay(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert("Yakin ingin batal edit ?");
    router.push("/admin/aesthetic");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("title", title);
    const ctgry = chosenCategory.join(",");
    formData.append("category", ctgry);
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
      await axios.post(`/aesthetic`, formData, config);
      alert("Data telah disimpan!");
      resetForm();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <Box px="10%" py="20px">
      <Heading size="sm" color="gray.600" mb="20px">
        Add Service Aesthetic
      </Heading>
      <hr className=" border-2 mb-5" />

      <FormControl>
        <FormLabel>Service Title</FormLabel>
        <Textarea
          mb="20px"
          name="title"
          value={title}
          placeholder="Enter article title"
          onChange={(e) => handleTitle(e)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Service Image Title</FormLabel>
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
      <FormControl>
        <FormLabel>Service Thumbnail Image</FormLabel>
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
      </FormControl>
      <FormControl>
        <FormLabel>Service Category</FormLabel>
        <Flex mb="10px">
          {category.map((item, index) => (
            <Checkbox
              key={index}
              color="gray.600"
              value={item}
              me="15px"
              isChecked={chosenCategory.includes(item.toLowerCase())}
              onChange={(e) => changeCategory(e, item)}
            >
              {item}
            </Checkbox>
          ))}
        </Flex>
      </FormControl>
      <FormControl>
        <FormLabel>Service Content</FormLabel>
        <SunEditor height="40rem" setOptions={options} onChange={setValue} />
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

export default AddAesthetic;
// export default HOC(AddAesthetic);
