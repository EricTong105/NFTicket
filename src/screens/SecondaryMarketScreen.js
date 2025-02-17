import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HStack,
  IconButton,
  Modal,
  FormControl,
  ScrollView,
  Text,
  Spinner,
  Box,
  FlatList,
  VStack,
} from "native-base";
import { StyleSheet, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BigTicket from "../components/tickets/BigTicket";
import moment from "moment";

//Icon
import CloseIcon from "../components/icons/CloseIcon";
import CheckmarkIcon from "../components/icons/CheckmarkIcon";

//React Redux
import { connect } from "react-redux";
import {
  getOnSaleTicket,
  buyTicketFromSecondaryMarket,
} from "../redux/actions/ticket";
import ActionButton from "../components/buttons/ActionButton";

const { height, width } = Dimensions.get("window");

const SecondaryMarketScreen = ({ navigation, getOnSaleTicket, ticket }) => {
  useEffect(() => {
    getOnSaleTicket(navigation.getParam("event", ""));
  }, []);
  const formatDate = (date, time) => {
    const dateMoment = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm:ss");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${dateMoment.date()} ${
      monthNames[dateMoment.month()]
    } ${dateMoment.year()} - ${time}`;
  };
  return (
    <SafeAreaView>
      {/* {ticket.isBuying ? (
        <Modal isOpen={ticket.isBuying}>
          <Modal.Content>
            <Modal.Body justifyContent={"center"} alignItems="center">
              <Text fontSize="lg">Please Wait</Text>
              <Spinner size="lg" mt={4}></Spinner>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      ) : null} */}

      {/* ----- Navigator ----- */}
      <Box style={styles.container} mt={4}>
        <HStack alignItems="center" justifyContent="space-between">
          <IconButton
            icon={<CloseIcon color="black" />}
            onPress={() => {
              navigation.goBack();
            }}
            variant="unstyled"
          ></IconButton>
        </HStack>
        {/* ------------------ */}

        {/* ----- Data ----- */}
        <Text fontSize="xl" fontWeight={"bold"}>
          Secondary Market
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Event: {navigation.getParam("title", "")}
        </Text>
        <Text fontSize="lg" fontWeight={"bold"}>
          Tickets Available:
        </Text>
        <Box alignItems={"center"} h="100%" flex={1} mt={4}>
          <FlatList
            data={ticket.onSaleTicket}
            keyExtractor={(item, id) => item.ticket.id}
            renderItem={({ item }) => (
              <VStack>
                <BigTicket
                  title={item.title}
                  date={formatDate(item.date, item.time)}
                />
                <ActionButton
                  text="Buy"
                  onPress={() => {
                    buyTicketFromSecondaryMarket(profile.email, item.ticket.id);
                  }}
                  width="100%"
                />
              </VStack>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          />
        </Box>
      </Box>
      {/* ------------------ */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    height: height * 0.95,
  },
});

const mapStateToProps = ({ profile, ticket }) => ({ profile, ticket });

const mapDispatchToProps = { getOnSaleTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondaryMarketScreen);
