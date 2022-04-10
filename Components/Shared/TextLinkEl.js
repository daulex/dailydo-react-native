import {useNavigate, useLocation} from "react-router-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

const TextLinkEl = ({to, text, styles}) => {
    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = () => {
        navigate(to);
    }
    const getCorrectStyle = (el) => {
        
        if(location.pathname === to || location.pathname === "/" && to === "/user/login"){
            return el === "container" ? styles.linkContainerActive : styles.linkTextActive;
        }
        return el === "container" ? styles.linkContainer : styles.linkText;
    }

    return(
        <TouchableOpacity style={getCorrectStyle("container")} onPress={handleClick}>
            <Text style={getCorrectStyle("text")}>{text}</Text>
        </TouchableOpacity>
    );
}
export default TextLinkEl;