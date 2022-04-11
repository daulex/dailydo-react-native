import {View, Text, StyleSheet} from "react-native";
import TextLinkEl from "../Shared/TextLinkEl";

const AuthMenu = ({actions, action}) => {

    const menuItems = actions;
    delete menuItems.reset;
    delete menuItems.verify;
    const getNavActiveStyle = (isActive) => {
        console.log("is active: ", isActive);
    }

    return(

        <View style={styles.nav}>
            {Object.keys(menuItems).map((key) => (
                <TextLinkEl 
                    key={key} 
                    to={"/user/" + actions[key].name} 
                    text={actions[key].title}
                    styles={styles}
                    /> 
            ))}
        </View>

    );

}
export default AuthMenu;

const styles = StyleSheet.create({
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
    },
    linkContainer: {
        padding: 10,
        marginHorizontal: 2
    },
    linkText: {
        color: "#888",
        fontSize: 16
    },
    linkContainerActive: {
        padding: 10,
        backgroundColor: "#333",
        borderRadius: 5,
        marginHorizontal: 2
    },
    linkTextActive: {
        color: "#fff",
        fontSize: 16
    }
});