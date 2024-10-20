import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {selectText} from "@/features/textSlice";

export default function ShowText () {
    const text = useSelector(selectText)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Tekst koji je upisan: {text}</Text>
        </View>
    )
}