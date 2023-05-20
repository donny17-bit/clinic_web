import { Heading, Text, Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";

import HOC from "@/hoc";
import axios from "@/config/axios";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;
    const response = await axios.get(`surgery/${id}`);
    const data = response.data.data;

    return {
      props: {
        query: context.query,
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        query: context.query,
        data: null,
      },
    };
  }
}

function Detail({ query, data }) {
  console.log(data);

  return (
    <div>
      <Head>
        <title>Inovglow | Plastic Surgery</title>
        <meta title={data.title} />
        <meta name="description" content={data.description} />
      </Head>
      <div className="pb-16 px-[10%]">
        <Flex justify="center">
          <Box
            mt="40px"
            position="relative"
            w={{ base: "full", md: "40vw" }}
            h={{ base: "30vh", md: "40vh" }}
          >
            <Image
              src={data.image}
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              quality={75}
              className=" object-contain "
              alt={data.title}
            />
          </Box>
        </Flex>
        <Flex
          direction="column"
          // w="full"
          // h="400px"
          justify="center"
          align="center"
          padding="20px"
          mb="40px"
        >
          <Heading
            fontWeight="bold"
            color="gray.700"
            size={{ base: "xl", xl: "3xl" }}
            textAlign="center"
          >
            {data.title}
          </Heading>
        </Flex>
        <Box fontSize={"xl"}>
          <SunEditor
            defaultValue={data.content}
            setOptions={{
              resizingBar: false,
              // showPathLabel: false,
              // resizingBarContainer: false,
            }}
            hideToolbar={true}
            disableToolbar={true}
            disable={true}
            setDefaultStyle="border: 0px solid; border-color: white; box-shadow: none; "
            width="100%"
            height="100%"
          />
        </Box>
      </div>
    </div>
  );
}

export default HOC(Detail);
