import {StyleSheet, Text, TextInput, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {selectText, updateText} from "@/features/textSlice";
import {AppDispatch} from "@/store";

export default function Index() {
  const dispatch: AppDispatch = useDispatch();
  const text = useSelector(selectText);
  return (
    <View style={styles.wrapper}>
        <Text>Tekst koji je upisan: {text}</Text>
        <TextInput
            value={text}
            onChangeText={(inputText) => dispatch(updateText(inputText))}
            placeholder="Upisite tekst"
            style={styles.input}>
        </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      padding: 20,
      flex: 1
    },
    input: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        padding: 10,
        borderRadius: 4,
        marginTop: 15,
    }
})
