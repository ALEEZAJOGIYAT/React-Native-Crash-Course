import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export const Array = () => {
  const [list, setList] = useState([
    { key: "1", name: "Item 4" },
    { key: "3", name: "Item 4" },
    { key: 47, name: "name 4" },
    { key: 57, name: "name 4" },
    { key: 67, name: "name 4" },
    { key: 68, name: "name 4" },
    { key: 69, name: "name 4" },
    { key: 70, name: "name 4" },
    { key: 71, name: "name 4" },
    // { key: 72, name: "name 4" },
    // { key: 73, name: "name 4" },
    // { key: 74, name: "name 4" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, { key: 37, name: "name 33" }]);
    setRefreshing(false);
  };

  //instead of using map we can use flat list buT flat list takes key and all in string
  //further how can it be done is
  //can use key extractor instead of writing keys of every item in the array
  //keyExtractor={(item,index)=>index.toString()}

  return (
    <FlatList
      numColumns={2}
      data={list}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.container}>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    fontSize: 50,
  },
});

//for keyboard
// can use different keyboard types as well as for input use
// TextInput and to secure input write (secureTextEntry) prop
// also (editable) prop set true and false for edit
