import AppTextInput from "../AppTextInput";
import { useState } from "react";
import AppPicker from "../AppPicker";
import Screen from "../../screens/Screen";

const categories = [
  {
    label: "danish",
    value: 1,
  },
  {
    label: "shoaib",
    value: 2,
  },
  {
    label: "zakir",
    value: 3,
  },
];
export default function TextInputDropDown() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="category"
        icon="apps"
      />
      <AppTextInput placeholder="email" icon="email" />
    </Screen>
  );
}
