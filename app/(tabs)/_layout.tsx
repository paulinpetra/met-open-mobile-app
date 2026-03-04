import { tokens } from "@/theme/tokens";
import { Tabs } from "expo-router";
import { Heart, Home, Layers, MapPin } from "lucide-react-native";
import { useColorScheme } from "react-native";

export default function TabsLayout() {
  const scheme = useColorScheme();
  const theme =
    scheme === "dark"
      ? tokens.colors.dark
      : tokens.colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.tabInactive,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="departments"
        options={{
          title: "Departments",
          tabBarIcon: ({ color, size }) => (
            <Layers color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="tours"
        options={{
          title: "Tours",
          tabBarIcon: ({ color, size }) => (
            <MapPin color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Heart color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}