import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./seasonalcard.style";
// import { Card, Text, Button } from "react-native-paper";

const SeasonalCard = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer(item)}>
        {item && item.image_url && (
          <Image
            source={item.image_url}
            resizeMode="contain"
            style={styles.logoImage}
          />
        )}
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(item)} numberOfLines={2}>
          {item.title}
        </Text>
        <View>
          <Text style={{ color: "#ddd", marginTop: 20 }}> {item.score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SeasonalCard;
