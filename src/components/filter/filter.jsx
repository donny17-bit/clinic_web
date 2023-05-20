import { Box, Text, Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";

function Filter({ category }) {
  return (
    <Box w="full">
      <Text fontSize="sm" fontWeight="bold">
        FILTER
      </Text>
      <Text fontSize="md" fontWeight="bold">
        CATEGORY
      </Text>
      <Box w="10rem" borderTop="2px" borderColor="pink.700"></Box>
      <VStack align="start">
        {category.map((item, index) => (
          <Checkbox key={index}>Operasi {item} </Checkbox>
        ))}
      </VStack>
    </Box>
  );
}

export default Filter;
