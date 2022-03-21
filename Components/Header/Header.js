import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Icon from "../Shared/Icon/Icon";

const Header = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonLogo} onPress={()=>{alert("you clicked me")}}>
                <Image style={styles.logo} source={require("../../assets/dailydo-logo.png")}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNav} onPress={()=>{alert("you clicked me")}}>
                <Icon name="plus-square" size="23" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNav} onPress={()=>{alert("you clicked me")}}>
                <Icon name="menu" size="23" />
            </TouchableOpacity>
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
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    buttonLogo: {
        backgroundColor: 'transparent',
        borderRadius: 0,
        padding: 0,
        marginRight: 'auto'
    },
    buttonNav: {
        backgroundColor: 'transparent',
        width: 30,
        height: 30,
        marginLeft: 20
    },
    logo: {
        width:88,
        height:26
    }
});