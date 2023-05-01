import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./home.styles";
import { icons, SIZES } from "../../../constants";
import { Chip } from "react-native-paper";

const menuItems = ["This Season", "Upcoming Anime", "Highest Rated"];

const Home = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <Chip
              style={styles.tab(item)}
              onPress={() => {
                router.push(`/${item}`);
              }}
            >
              <Text>{item}</Text>
            </Chip>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Home;
