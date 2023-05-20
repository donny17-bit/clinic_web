import { Box, Container } from "@chakra-ui/react";
import { Navbar, Footer } from "../components/layout";

function HOC(Components) {
  const wrapper = (props) => {
    return (
      <>
        <Navbar />
        {/* <Box paddingX="10%"> */}
        <Components {...props} />
        {/* </Box> */}
        <Footer />
      </>
    );
  };

  return wrapper;
}

export default HOC;
