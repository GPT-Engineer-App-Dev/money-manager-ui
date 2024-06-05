import * as React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

function MyComponent() {
  return (
    <Box py={5} pr={5} pl={20} bg="gray.900" borderRadius="30px" maxW="md:pl-5">
      <Flex gap={5} direction={{ base: "column", md: "row" }}>
        <Box flex="1" w={{ base: "full", md: "15%" }}>
          <Flex direction="column" mt={11} fontSize="2xl" fontWeight="semibold" lineHeight="9" color="white" whiteSpace="nowrap">
            <Image
              loading="lazy"
              srcSet="..."
              boxSize="86px"
              objectFit="cover"
            />
            <Text mt={7} fontSize="3xl" lineHeight="9">Samantha</Text>
            <Text mt={5} fontSize="lg" lineHeight="7">samantha@email.com</Text>
            <Text mt={32}>Dashboard</Text>
            <Text mt={12}>Expenses</Text>
            <Text mt={10}>Wallets</Text>
            <Text mt={12}>Summary</Text>
            <Text mt={10}>Accounts</Text>
            <Text mt={11}>Settings</Text>
          </Flex>
        </Box>
        <Box flex="1" ml={5} w={{ base: "full", md: "85%" }}>
          <Box flex="1" pl={20} w="full" bg="white" borderRadius="30px" mt={{ base: 10, md: 0 }}>
            <Flex gap={5} direction={{ base: "column", md: "row" }}>
              <Box flex="1" w={{ base: "full", md: "59%" }}>
                <Flex direction="column" my="auto" mt={{ base: 10, md: 0 }}>
                  <Flex gap={5} justify="space-between" wrap={{ base: "wrap", md: "nowrap" }}>
                    <Box>
                      <Text fontSize="4xl" fontWeight="semibold" letterSpacing="wider" color="gray.800">Expenses</Text>
                      <Text mt={4} fontSize="base" letterSpacing="wide" color="gray.900">01 - 25 March, 2020</Text>
                    </Box>
                    <Image
                      loading="lazy"
                      srcSet="..."
                      boxSize="123px"
                      objectFit="cover"
                    />
                  </Flex>
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7828f9828a0665dcbbc753ef69b3be2ba7105914e9b9c58c0f22359bf7246524?"
                    mt={12}
                    boxSize="510px"
                    objectFit="cover"
                  />
                  <Box mt={14}>
                    <Flex gap={5} direction={{ base: "column", md: "row" }}>
                      <Box flex="1" w={{ base: "full", md: "84%" }}>
                        <Flex direction="column" mt={{ base: 10, md: 0 }}>
                          <Text fontSize="lg" letterSpacing="wide" lineHeight="8" color="gray.800">Today</Text>
                          <Flex gap={4} mt={10}>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4?"
                              boxSize="12"
                              objectFit="cover"
                            />
                            <Box mt={2}>
                              <Text fontSize="base" fontWeight="medium" letterSpacing="wide" color="gray.800">Grocery</Text>
                              <Text mt={2.5} fontSize="sm" letterSpacing="wide" color="gray.700">5:12 pm • Belanja di pasar</Text>
                            </Box>
                          </Flex>
                          <Flex gap={4} mt={6}>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d?"
                              boxSize="12"
                              objectFit="cover"
                            />
                            <Box mt={1.5}>
                              <Text fontSize="base" fontWeight="medium" letterSpacing="wide" color="gray.800">Transportation</Text>
                              <Text mt={2.5} fontSize="sm" letterSpacing="wide" color="gray.700">5:12 pm • Naik bus umum</Text>
                            </Box>
                          </Flex>
                          <Flex gap={4} mt={6}>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7?"
                              boxSize="12"
                              objectFit="cover"
                            />
                            <Box mt={1.5}>
                              <Text fontSize="base" fontWeight="medium" letterSpacing="wide" color="gray.800">Housing</Text>
                              <Text mt={2.5} fontSize="sm" letterSpacing="wide" color="gray.700">5:12 pm • Bayar Listrik</Text>
                            </Box>
                          </Flex>
                          <Text mt={16} fontSize="lg" letterSpacing="wide" lineHeight="8" color="gray.800">Monday, 23 March 2020</Text>
                          <Flex gap={4} mt={10}>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0?"
                              boxSize="12"
                              objectFit="cover"
                            />
                            <Box mt={1.5}>
                              <Text fontSize="base" fontWeight="medium" letterSpacing="wide" color="gray.800">Food and Drink</Text>
                              <Text mt={4} fontSize="sm" letterSpacing="wide" color="gray.700">5:12 pm • Makan Steak</Text>
                            </Box>
                          </Flex>
                          <Flex gap={4} mt={6}>
                            <Image
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d?"
                              boxSize="12"
                              objectFit="cover"
                            />
                            <Box mt={1.5}>
                              <Text fontSize="base" fontWeight="medium" letterSpacing="wide" color="gray.800">Entertainment</Text>
                              <Text mt={3.5} fontSize="sm" letterSpacing="wide" color="gray.700">5:12 pm • Nonton Bioskop</Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box flex="1" ml={5} w={{ base: "full", md: "16%" }}>
                        <Flex direction="column" mt={1.5} fontSize="base" fontWeight="semibold" letterSpacing="wide" textAlign="right" color="gray.800">
                          <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            boxSize="25px"
                            objectFit="cover"
                          />
                          <Text mt={14}>-326.800</Text>
                          <Text mt={16} ml={3.5}>-15.000</Text>
                          <Text mt={16}>-185.750</Text>
                          <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e83220d25f4410076799d71ab85467321f8b5374ad458401f01cda04caadd03?"
                            boxSize="25px"
                            objectFit="cover"
                            mt={24}
                          />
                          <Text mt={14}>-156.000</Text>
                          <Text mt={16} ml={3}>-35.200</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex="1" ml={5} w={{ base: "full", md: "41%" }}>
                <Flex direction="column" px={12} py={20} mx="auto" w="full" bg="gray.50" borderRadius="none" mt={{ base: 10, md: 0 }}>
                  <Text fontSize="xl" letterSpacing="wide" lineHeight="8" color="gray.800">Where your money go?</Text>
                  <Flex gap={5} mt={10} fontSize="sm" letterSpacing="wide" lineHeight="6" color="gray.800">
                    <Text flex="1" fontWeight="medium">Food and Drinks</Text>
                    <Text textAlign="right">872.400</Text>
                  </Flex>
                  <Box mt={4} bg="gray.100" borderRadius="md">
                    <Box bg="emerald.400" borderRadius="md" h="5px" />
                  </Box>
                  <Flex gap={5} mt={9} fontSize="sm" letterSpacing="wide" lineHeight="6" color="gray.800">
                    <Text flex="1" fontWeight="medium">Shopping</Text>
                    <Text textAlign="right">1.378.200</Text>
                  </Flex>
                  <Box mt={3} bg="gray.100" borderRadius="md">
                    <Box bg="emerald.400" borderRadius="md" h="5px" />
                  </Box>
                  <Flex gap={5} mt={9} fontSize="sm" letterSpacing="wide" lineHeight="6" color="gray.800">
                    <Text flex="1" fontWeight="medium">Housing</Text>
                    <Text textAlign="right">928.500</Text>
                  </Flex>
                  <Box mt={3} bg="gray.100" borderRadius="md">
                    <Box bg="emerald.400" borderRadius="md" h="5px" />
                  </Box>
                  <Flex gap={5} mt={9} fontSize="sm" letterSpacing="wide" lineHeight="6" color="gray.800">
                    <Text flex="1" fontWeight="medium">Transportation</Text>
                    <Text textAlign="right">420.700</Text>
                  </Flex>
                  <Box mt={3} bg="gray.100" borderRadius="md">
                    <Box bg="emerald.400" borderRadius="md" h="5px" />
                  </Box>
                  <Flex gap={5} mt={9} fontSize="sm" letterSpacing="wide" lineHeight="6" color="gray.800">
                    <Text flex="1" fontWeight="medium">Vehicle</Text>
                    <Text textAlign="right">520.000</Text>
                  </Flex>
                  <Box mt={4} bg="gray.100" borderRadius="md">
                    <Box bg="emerald.400" borderRadius="md" h="5px" />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default MyComponent;