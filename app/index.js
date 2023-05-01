import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { IconButton, MD3Colors } from "react-native-paper";

import { ScreenHeaderBtn, BottomNavigation } from "../components";
import { Checkbox } from "react-native-paper";
import BottomNavbar from "../components/common/navigation/BottomNavbar";

const Home = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <SafeAreaView>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#ddd" },
            headerLeft: () => (
              <IconButton
                icon="align-vertical-distribute"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log("Pressed")}
              />
            ),
            headerRight: () => (
              <IconButton
                icon="account"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log("Pressed")}
              />
            ),
            headerTitle: "",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Home />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavbar />
    </>
  );
};

export default Home;
