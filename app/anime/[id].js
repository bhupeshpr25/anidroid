import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";

import { COLORS, icons, SIZES } from "../../constants";

import useFetch from "../../hooks/useFetch";

const AnimeDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("anime", {
    id: params.id,
  });
  return <Text>{data.title}</Text>;
};

export default AnimeDetails;
