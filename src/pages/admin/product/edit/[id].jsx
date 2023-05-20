import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import HOC from "@/hoc";
import axios from "@/config/axios";
import Image from "next/image";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

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
    return {
      props: {
        query: context.query,
        data: null,
      },
    };
  }
}

function EditProduct({ query, data }) {
  const instructionData = data.instruction.split(".");
  const benefitData = data.function.split(".");
  const contentData = data.description.split(",");
  const categoryData = data.category.split(",");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(data.price);
  const [name, setName] = useState(data.name);
  const [benefit, setBenefit] = useState(benefitData);
  const [inputBenefit, setInputBenefit] = useState("");
  const [instruction, setInstruction] = useState(instructionData);
  const [inputInstruction, setInputInstruction] = useState("");
  const [content, setContent] = useState(contentData);
  const [inputContent, setInputContent] = useState("");
  const [chosenCategory, setChosenCategory] = useState(categoryData);
  const [image, setImage] = useState(null);
  const [imgDisplay, setImgDisplay] = useState(data.image);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImage = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setImage(file);
      setImgDisplay(URL.createObjectURL(file));
    }
  };

  const enterPressBenefit = (e) => {
    if (e.key === "Enter") {
      setBenefit([...benefit, inputBenefit]);
      setInputBenefit("");
    }
  };

  const changeInputBenefit = (e) => {
    setInputBenefit(e.target.value);
  };

  const handleBenefit = (e) => {
    e.preventDefault();
    setBenefit([...benefit, inputBenefit]);
    setInputBenefit("");
  };

  const handleRemoveBenefit = (e, index) => {
    e.preventDefault();
    const filteredItems = benefit.filter((item, i) => i !== index);
    setBenefit(filteredItems);
  };

  const changeInputInstruction = (e) => {
    setInputInstruction(e.target.value);
  };

  const enterPressInstruction = (e) => {
    if (e.key === "Enter") {
      setInstruction([...instruction, inputInstruction]);
      setInputInstruction("");
    }
  };

  const handleInstruction = (e) => {
    e.preventDefault();
    setInstruction([...instruction, inputInstruction]);
    setInputInstruction("");
  };

  const handleRemoveInstruction = (e, index) => {
    e.preventDefault();
    const filteredItems = instruction.filter((item, i) => i !== index);
    setInstruction(filteredItems);
  };

  const enterPressContent = (e) => {
    if (e.key === "Enter") {
      setContent([...content, inputContent]);
      setInputContent("");
    }
  };

  const changeInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleContent = (e) => {
    e.preventDefault();
    setContent([...content, inputContent]);
    setInputContent("");
  };

  const handleRemoveContent = (e, index) => {
    e.preventDefault();
    const filteredItems = content.filter((item, i) => i !== index);
    setContent(filteredItems);
  };

  const resetForm = () => {
    setPrice("");
    setName("");
    setBenefit([]);
    setInputBenefit("");
    setInstruction([]);
    setInputInstruction("");
    setContent([]);
    setInputContent("");
    setChosenCategory([]);
    setImage(null);
    setImgDisplay(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    alert("Yakin ingin batal edit product ?");
    router.push({
      pathname: "/admin/product",
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("name", name);
    const ctgry = chosenCategory.join(",");
    formData.append("category", ctgry);
    formData.append("price", price);

    if (content.length) {
      const joinContent = content.join(",");
      formData.append("description", joinContent);
    }
    const joinBenefit = benefit.join(".");
    formData.append("function", joinBenefit);

    if (instruction.length) {
      const joinInstruction = instruction.join(".");
      formData.append("instruction", joinInstruction);
    }

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
      await axios.post(`/product/${data.id}?_method=PATCH`, formData, config);
      alert("Data telah disimpan!");
      router.push("/admin/product");
      resetForm();
      setIsLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setIsLoading(false);
    }
  };

  const category = [
    "Paket Skincare",
    "Serum",
    "Facial Wash",
    "Toner",
    "Cleanser",
    "Cream",
  ];

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

  return (
    <Box px="10%" py="20px">
      <Heading size="sm" color="gray.600" mb="20px">
        Edit Product
      </Heading>
      <hr className=" border-2 mb-5" />

      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input
          mb="20px"
          name="name"
          value={name}
          placeholder="Enter product name"
          onChange={(e) => handleName(e)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Product Image</FormLabel>
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
            alt={name}
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
        <FormLabel>Product Price</FormLabel>
        <InputGroup>
          <InputLeftAddon>Rp.</InputLeftAddon>
          <Input
            mb="20px"
            name="price"
            value={price}
            placeholder="Enter product price"
            onChange={(e) => handlePrice(e)}
            type="number"
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Product Category</FormLabel>
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
        <FormLabel>Product Benefit</FormLabel>
        <Flex w="full" mb="10px" gap="5px">
          <Input
            w="90%"
            type="text"
            name="benefit"
            value={inputBenefit}
            placeholder="add benefit"
            onKeyDown={(e) => enterPressBenefit(e)}
            onChange={(e) => changeInputBenefit(e)}
          />
          <Button
            colorScheme="purple"
            w="10%"
            onClick={(e) => handleBenefit(e)}
          >
            <Icon as={AiOutlinePlus} />
          </Button>
        </Flex>
        {benefit ? (
          <>
            <UnorderedList mb="20px" ps="5px">
              {benefit.map((item, index) => (
                <ListItem key={index} mb="5px">
                  <Flex gap="10px">
                    <Text>{item}</Text>
                    <Button
                      leftIcon={<Icon as={BsTrash} />}
                      size={"xs"}
                      colorScheme="red"
                      variant="outline"
                      onClick={(e) => handleRemoveBenefit(e, index)}
                    >
                      Hapus
                    </Button>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </>
        ) : (
          <></>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Product Instruction</FormLabel>
        <Flex w="full" mb="10px" gap="5px">
          <Input
            w="90%"
            type="text"
            name="instruction"
            placeholder="add instruction"
            value={inputInstruction}
            onChange={(e) => changeInputInstruction(e)}
            onKeyDown={(e) => enterPressInstruction(e)}
          />
          <Button
            colorScheme="purple"
            w="10%"
            onClick={(e) => handleInstruction(e)}
          >
            <Icon as={AiOutlinePlus} />
          </Button>
        </Flex>
        {instruction ? (
          <>
            <UnorderedList mb="20px" ps="5px">
              {instruction.map((item, index) => (
                <ListItem key={index} mb="5px">
                  <Flex gap="10px">
                    <Text>{item}</Text>
                    <Button
                      leftIcon={<Icon as={BsTrash} />}
                      size={"xs"}
                      colorScheme="red"
                      variant="outline"
                      onClick={(e) => handleRemoveInstruction(e, index)}
                    >
                      Hapus
                    </Button>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </>
        ) : (
          <></>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Product Package Contents (optional)</FormLabel>
        <Flex w="full" mb="10px" gap="5px">
          <Input
            w="90%"
            type="text"
            name="content"
            value={inputContent}
            placeholder="add package content"
            onKeyDown={(e) => enterPressContent(e)}
            onChange={(e) => changeInputContent(e)}
          />
          <Button
            colorScheme="purple"
            w="10%"
            onClick={(e) => handleContent(e)}
          >
            <Icon as={AiOutlinePlus} />
          </Button>
        </Flex>
        {content ? (
          <>
            <UnorderedList mb="20px" ps="5px">
              {content.map((item, index) => (
                <ListItem key={index} mb="5px">
                  <Flex gap="10px">
                    <Text>{item}</Text>
                    <Button
                      leftIcon={<Icon as={BsTrash} />}
                      size={"xs"}
                      colorScheme="red"
                      variant="outline"
                      onClick={(e) => handleRemoveContent(e, index)}
                    >
                      Hapus
                    </Button>
                  </Flex>
                </ListItem>
              ))}
            </UnorderedList>
          </>
        ) : (
          <></>
        )}
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
          type="button"
          onClick={(e) => handleSave(e)}
        >
          Save
        </Button>
      </HStack>
    </Box>
  );
}

export default HOC(EditProduct);
