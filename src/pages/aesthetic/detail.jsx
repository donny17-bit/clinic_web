import HOC from "@/hoc";
import {
  Center,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Flex,
  HStack,
  VStack,
  Box,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

function Detail() {
  return (
    <>
      <section className="pb-16 px-[10%]">
        <Flex justify="center">
          <Box
            mt="40px"
            position="relative"
            w={{ base: "full", md: "40vw" }}
            h={{ base: "30vh", md: "40vh" }}
          >
            <Image
              src="/assets/plastic-surgery/Hidung-Pasang-Implant-1.png"
              fill
              className=" object-cover "
              alt="banner-promo"
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
        >
          <Heading
            fontWeight="bold"
            color="gray.700"
            size={{ base: "xl", xl: "3xl" }}
          >
            Operasi Dagu
          </Heading>
        </Flex>
        <Flex mt="30px" direction={{ base: "column" }} align="center">
          <section className=" md:w-3/4  md:px-10">
            <Heading size="lg" color="gray.700" mb="10px">
              Apa itu Operasi Dagu?
            </Heading>
            <Text textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nulla ea maiores reprehenderit doloribus, suscipit et ipsum iusto
              ullam accusamus quis, quibusdam non optio porro nostrum repellat
              omnis quae odio.
            </Text>
            <Text mt="15px" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nulla ea maiores reprehenderit doloribus, suscipit et ipsum iusto
              ullam accusamus quis, quibusdam non optio porro nostrum repellat
              omnis quae odio.
            </Text>
            <Text mt="15px" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nulla ea maiores reprehenderit doloribus, suscipit et ipsum iusto
              ullam accusamus quis, quibusdam non optio porro nostrum repellat
              omnis quae odio.
            </Text>
          </section>
          <section className=" md:w-3/4 md:px-10 text-justify mt-[30px]">
            <Heading
              size="lg"
              color="gray.700"
              mb="10px"
              mt={{ base: "20px", md: "0" }}
            >
              Informasi Terkait Prosedur
            </Heading>
            <UnorderedList>
              <ListItem>
                <Text color="gray.600">
                  Waktu pengerjaan <span className=" md:ms-[18px]"></span>: 45 -
                  60 menit
                </Text>
              </ListItem>
              <ListItem>
                <Text color="gray.600">
                  Jenis Anestesi <span className=" md:ms-[50px]"></span>:
                  Anestesi lokal atau sedasi
                </Text>
              </ListItem>
              <ListItem>
                <Text color="gray.600">
                  Waktu Pemulihan <span className=" md:ms-[24px]"></span>: 3 - 7
                  hari
                </Text>
              </ListItem>
            </UnorderedList>
          </section>
          <section className="md:w-3/4 md:px-10 mt-[30px]">
            <Heading
              size="lg"
              color="gray.700"
              mb="10px"
              mt={{ base: "20px", md: "0" }}
            >
              Kandidat yang Ideal untuk Menjalani Operasi Dagu
            </Heading>
            <UnorderedList>
              <ListItem>
                <Text color="gray.600">
                  Calon pasien harus memiliki kondisi tubuh yang sehat dan
                  stabil.
                </Text>
              </ListItem>
              <ListItem>
                <Text color="gray.600">
                  Disarankan agar calon pasien tidak memiliki riwayat masalah
                  mulut dan gigi.
                </Text>
              </ListItem>
            </UnorderedList>
          </section>
          <section className="md:w-3/4 md:px-10 mt-[30px]">
            <Heading
              size="lg"
              color="gray.700"
              mb="10px"
              mt={{ base: "20px", md: "0" }}
            >
              Bagaimana Hasil dari Operasi Dagu?
            </Heading>
            <Text textAlign="justify">
              Hasil dari operasi dagu belah akan terlihat setelah beberapa
              minggu pasca operasi. Jika Anda tertarik untuk melakukan operasi
              ini, pastikan tindakan prosedur ditangani langsung oleh dokter
              yang ahli dan berpengalaman. Untuk konsultasi lebih lanjut,
              silahkan hubungi The Clinic Beautylosophy.
            </Text>
            <Flex mt="40px">
              <Box flex="1" h="15rem" position="relative">
                <Image
                  src="/assets/plastic-surgery/Implant-Bokong.png"
                  fill
                  alt="img"
                  className="object-cover"
                />
              </Box>
              <Flex direction="column" justify="center" flex="1" ps="20px">
                <Text fontWeight="bold" fontSize="md">
                  BEFORE
                </Text>
                <Text>
                  Bentuk dagu normal sebelum tindakan operasi dilakukan.
                </Text>
              </Flex>
            </Flex>
            <Flex mt="20px">
              <Flex direction="column" justify="center" flex="1" ps="20px">
                <Text fontWeight="bold" fontSize="md">
                  AFTER
                </Text>
                <Text>
                  Bentuk belah dagu setelah operasi dilakukan menambah nilai
                  estetika pada wajah.
                </Text>
              </Flex>
              <Box flex="1" h="15rem" position="relative">
                <Image
                  src="/assets/plastic-surgery/Implant-Bokong.png"
                  fill
                  alt="img"
                  className="object-cover"
                />
              </Box>
            </Flex>
          </section>
        </Flex>
      </section>
    </>
  );
}

// export default Detail;
export default HOC(Detail);
