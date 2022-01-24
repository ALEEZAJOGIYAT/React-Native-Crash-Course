import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  RefreshControl,
  ScrollView,
} from "react-native";

export const Practise = () => {
  const [Name, setName] = useState("");
  const [Submit, setSubmit] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [Refreshing, setRefreshing] = useState(false);

  const onPressHandler = () => {
    if (Name.length > 3) {
      setSubmit(!Submit);
    } else {
      setShowWarning(true);
    }
  };

  //for pressing the back button use OnRequestClose
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={Refreshing} />}>
      <View style={styles.container}>
        {/* <Modal visible={showWarning}>
          <Text>The text must be longer than 3 characters</Text>
        </Modal> */}
        <Text style={styles.text}>Who loves cat more?????</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g: John"
          onChangeText={(value) => setName(value)}
        />
        <Button title={Submit ? "Clear" : "Submit"} onPress={onPressHandler} />
        {Submit ? (
          <Text style={styles.text}>
            The girl who love the cat most is : {Name}
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );
};

//alternative component of button is TouchableOpacity
//TouchabaleHighlight similar to TouchableOpacity have custom background color

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    fontSize: 50,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  input: {
    borderColor: "#555",
    textAlign: "center",
    fontSize: 20,
    width: 200,
    marginBottom: 10,
  },
});
// <View style={styles.container}>
//   {/* <Modal visible={ShowWarning}
//   >
//     <Text>The text must be longer than 3 characters</Text>
//   </Modal> */}

//   <Text style={styles.text}>Please write your name</Text>
//   <TextInput
//     style={styles.input}
//     placeholder="e.g: John"
//     onChangeText={(value) => setName(value)}
//   />
//   <Button title={Submit ? "Clear" : "Submit"} onPress={onPressHandler} />
//   {Submit ? (
//     <Text style={styles.text}>You are registered as : {Name}</Text>
//   ) : null}
// </View>
