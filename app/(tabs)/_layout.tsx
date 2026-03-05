import { tokens } from "@/theme/tokens";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  const theme = tokens.colors.dark;

  return (
    <NativeTabs
      tintColor={theme.primary}
      backgroundColor={theme.background}
    >
      <NativeTabs.Trigger name="index">
        <Icon
         sf={{ default: "house", selected: "house.fill" }}
         drawable="ic_menu_view"                 
        />
      <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="departments">
         <Icon
          sf={{ default: "square.grid.2x2", selected: "square.grid.2x2.fill" }}
          drawable="ic_menu_agenda"
        />
        <Label>Departments</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="tours">
        <Icon 
        sf={{ default: "map", selected: "map.fill" }}
        drawable="ic_menu_mapmode"
         />
        <Label>Tours</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorites">
        <Icon sf={{ default: "heart", selected: "heart.fill" }}
         drawable="ic_menu_favorite" />
        <Label>Favorites</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}