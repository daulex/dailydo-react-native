import { Text, TouchableOpacity, StyleSheet } from "react-native";

const SubmitButtonEl = ({label, callback}) => {
    const handlePress = () => {
        callback();
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}
export default SubmitButtonEl;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#333",
        padding: 15,
        borderRadius: 5
    },
    label: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "600",
        fontSize:20
    }
});