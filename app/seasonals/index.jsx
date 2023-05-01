import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";

import styles from "./seasonals.style";
import { COLORS, SIZES } from "../../constants";
import SeasonalCard from "../../components/common/cards/seasonal/SeasonalCard";
import { isLoading } from "expo-font";
import { ActivityIndicator } from "react-native-paper";
import useFetch from "../../hooks/useFetch";

const Seasonals = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("seasons/now", {
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trending this season</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>something went wrong</Text>
        ) : (
          <FlatList
            data={data.data}
            renderItem={({ item }) => (
              <SeasonalCard
                item={item}
                key={`anime-${item.mal_id}`}
                handleNavigate={() => router.push(`/anime/${item.mal_id}`)}
              />
            )}
            keyExtractor={(item) => item.mal_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            // horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Seasonals;
