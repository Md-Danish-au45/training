import ImageInput from "./app/components/ImageInput";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/screens/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import Screen from "./app/screens/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <Screen>
      <MessagesScreen />
    </Screen>
  );
}
