import {Link} from "react-router-native";
import {View, Text} from "react-native";

const AuthMenu = ({actions, action}) => {

    const menuItems = actions;
    delete menuItems.reset;
    delete menuItems.verify;

    return(

        <View>
            {Object.keys(menuItems).map((key) => (
                <Link key={key} to={"/user/" + actions[key].name} className={({ isActive }) => {
                    return isActive || (action === 'login' && actions[key].name === 'login') ? "active" : "";
                }}><Text>{actions[key].title}</Text></Link>
            ))}
        </View>

    );

}
export default AuthMenu;