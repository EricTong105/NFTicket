import { Text, Box, Image, ZStack, VStack } from "native-base";
import React from "react";

const FeaturedCard = ({ imageURL, title }) => {
  return (
    <ZStack w={150} h={200} mr={4}>
      <Box w={150} h={200} bgColor="white" borderRadius={20}>
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          resizeMode="cover"
          alt="alternate text"
          size="100%"
          borderRadius={20}
        />
      </Box>
      <Box
        w={150}
        h={200}
        bg={{
          linearGradient: {
            colors: ["transparent", "secondary.700"],
            start: [0, 0],
            end: [0, 1],
          },
        }}
        borderRadius={20}
      ></Box>
      <Box w={150} h={200} p={4} justifyContent="flex-end">
        <VStack>
          <Text color="white" fontSize={"lg"} fontWeight={600}>
            Rock
          </Text>
          <Text color="white" fontSize={"lg"} fontWeight={600}>
            Climbing
          </Text>
          <Text color="white" fontSize={"xs"} fontWeight={200}>
            California
          </Text>
        </VStack>
      </Box>
    </ZStack>
  );
};

export default FeaturedCard;
