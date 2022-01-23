import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, RefreshControl, ScrollView } from "react-native-web";

//for scrolling use
//scrolling component
//for refreshing use (refreshcontrol) component

export const List = () => {
  const [list, setList] = useState([
    { key: 1, item: "Item 4" },
    { key: 3, item: "Item 4" },
    { key: 5, item: "Item 4" },
    { key: 6, item: "Item 4" },
    { key: 8, item: "Item 4" },
    { key: 9, item: "Item 4" },
    { key: 10, item: "Item 4" },
    { key: 11, item: "Item 4" },
    { key: 12, item: "Item 4" },
    { key: 13, item: "Item 4" },
    { key: 14, item: "Item 4" },
    { key: 16, item: "Item 4" },
    { key: 17, item: "Item 4" },
    { key: 27, item: "Item 4" },
    { key: 37, item: "Item 4" },
    { key: 47, item: "Item 4" },
    { key: 57, item: "Item 4" },
    { key: 67, item: "Item 4" },
    { key: 68, item: "Item 4" },
    { key: 69, item: "Item 4" },
    { key: 70, item: "Item 4" },
    { key: 71, item: "Item 4" },
    { key: 72, item: "Item 4" },
    { key: 73, item: "Item 4" },
    { key: 74, item: "Item 4" },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setList([...list, { key: 37, item: "Item 33" }]);
    setRefreshing(false);
  };

  const onClickHandler = () => {
    setName("Lets do practise");
  };

  return (
    <div>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
        }
      >
        {list.map((items, index) => {
          return (
            <View style={styles.container} key={index}>
              <Text>{items.item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    fontSize: "50px",
  },
});
