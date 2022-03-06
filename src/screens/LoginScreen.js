import { Box, FormControl, HStack, Input, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, TouchableOpacity } from "react-native";
import { fontSize } from "styled-system";
import ActionButton from "../components/buttons/ActionButton";
import GoogleIcon from "../components/icons/GoogleIcon";
import CoinbaseIcon from "../components/icons/CoinbaseIcon";

const { width, height } = Dimensions.get("window");
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Box w="90%" h={height} alignSelf={"center"} justifyContent={"center"}>
        <Text fontWeight={700} fontSize="3xl">
          Login
        </Text>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input borderColor={"black"}></Input>
        </FormControl>
        <FormControl mb={4}>
          <FormControl.Label>Password</FormControl.Label>
          <Input borderColor="black"></Input>
        </FormControl>
        <ActionButton
          text="Sign In"
          width=" 100%"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <HStack justifyContent={"center"} mt={4}>
          <TouchableOpacity>
            <Text>Forgot Your Password? Reset</Text>
          </TouchableOpacity>
        </HStack>
        <HStack mt={4} justifyContent={"space-evenly"}>
          <Box
            borderRadius={10}
            borderWidth={1}
            width={100}
            p={2}
            alignItems={"center"}
          >
            <GoogleIcon />
          </Box>
          <Box
            borderRadius={10}
            borderWidth={1}
            width={100}
            p={2}
            alignItems={"center"}
          >
            <CoinbaseIcon />
          </Box>
        </HStack>
        <HStack justifyContent={"center"} mt={4}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text>Don't have an account? Register</Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default LoginScreen;
