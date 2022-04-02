import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from "../Shared/Icon/Icon";

const FloatingMenu = ({setFloatingMenuShowing, links}) => {
    const handleMenuClick = () => {
        setFloatingMenuShowing(false);
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleMenuClick} style={styles.menuToggle}>
                <Icon name="menu" size="23" color="#fff" />
            </TouchableOpacity>
            <View>
                {links.map((link, key) => {
                    return (<TouchableOpacity key={key} onPress={handleMenuClick}>
                            <Text style={styles.menuLink}>{link.label}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <TouchableOpacity onClick={handleMenuClick} className="log-out">
                <Text style={styles.logOut}>Log out</Text>
            </TouchableOpacity>

        </View>
    );
}

export default FloatingMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        borderRadius: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxWidth: "80%",
        minWidth: 260,
        height: "auto",
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 60,
        position: "absolute",
        top: 10,
        right: 10
    },
    menuToggle: {
        position:"absolute",
        top: 10,
        right: 10,
        width: 30,
        height: 30,
    },
    menuLink: {
        color: "#fff"
    },
    logOut: {
        color: "#fff",
        fontWeight: "bold"
    }
});