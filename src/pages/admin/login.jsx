import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import axios from "@/config/axios";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleUsername = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/login", {
        username: username,
        password: password,
      });

      localStorage.setItem("token", result.data.token);
      router.push("/admin");
      // setLoading(false);
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="40vh"
      transform="auto"
      translateY="-50%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Box p={6}>
        <Text fontWeight="bold" fontSize="xl" mb={4}>
          Login Admin
        </Text>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            name="username"
            placeholder="Enter your username"
            onChange={(e) => handleUsername(e)}
            onKeyDown={(e) => handleEnter(e)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Flex
            border={focus ? "2px" : "1px"}
            borderColor={focus ? "blue.500" : "gray.300"}
            borderRadius="md"
          >
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              border="0"
              focusBorderColor="transparent"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              value={password}
              name="password"
              onChange={(e) => handlePassword(e)}
              onKeyDown={(e) => handleEnter(e)}
            />
            <Button
              bgColor="transparent"
              onClick={handlePasswordVisibility}
              _hover={{ bgColor: "transparent" }}
              _active={{ bgColor: "transparent" }}
            >
              {showPassword ? (
                <Icon as={AiOutlineEye} />
              ) : (
                <Icon as={AiOutlineEyeInvisible} />
              )}
            </Button>
          </Flex>
        </FormControl>

        <Button
          mt={6}
          colorScheme="blue"
          onClick={handleLogin}
          isLoading={loading}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
