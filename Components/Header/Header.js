import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from "../Shared/Icon/Icon";
import {useState} from "react";
import FloatingMenu from "./FloatingMenu";
import {Link} from "react-router-native";

const Header = () => {
    const [floatingMenuShowing, setFloatingMenuShowing] = useState(false);
    // const handleMenuClick = () => {
    //     setFloatingMenuShowing(true);
    // }
    const links = [
        {
            to: "/my-account",
            label: "My account"
        }
    ];


    return(
        <View style={styles.container}>
            <Link style={styles.buttonLogo} to="/" underlayColor="rgba(255,255,255,0)">
                <Image style={styles.logo} source={require("../../assets/dailydo-logo.png")}/>
            </Link>

            <Link style={styles.buttonNav} underlayColor="rgba(255,255,255,0)" to="/new-goal">
                <Icon name="plus-square" size="23" />
            </Link>
            <TouchableOpacity style={styles.buttonNav} onPress={()=>setFloatingMenuShowing(true)}>
                <Icon name="menu" size="23" />
            </TouchableOpacity>
            {floatingMenuShowing && <FloatingMenu links={links} setFloatingMenuShowing={setFloatingMenuShowing} />}
        </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        maxHeight: 60,
        paddingHorizontal: 20,
        paddingVertical: 20,
        position: "relative",
        zIndex: 999
    },
    buttonLogo: {
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
        marginRight: 'auto'
    },
    buttonNav: {
        backgroundColor: 'transparent',
        width: 23,
        height: 23,
        marginLeft: 20
    },
    logo: {
        width:88,
        height:26
    }
});