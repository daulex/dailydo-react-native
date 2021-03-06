import React, {useState, useContext, useEffect} from 'react';
import AuthMenu from './AuthMenu';
import AuthForm from './AuthForm';
// import {Context} from "./UserContext";
import axios from "axios";
import {View, Text, StyleSheet} from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV();

const AuthContainer = ({action}) => {

    const [activeUser, setActiveUser] = useState(null);
    
    if(activeUser){
        // console.log(activeUser);
        const token = storage.getString('user.token');
        // const token = AsyncStorage.getItem('token');
        console.log(token);
        // TODO: add last "refreshed" timestamp
    }
    const [successMessage, setSuccessMessage] = useState(null );
    const [errorMessage, setErrorMessage] = useState("noew" );
    const [processing, setProcessing] = useState(false );

    useEffect(() => {
        setSuccessMessage(false);
    }, [action]);
    useEffect(() => {
        setErrorMessage(false);
    }, [action]);

    const actions = {
        login: {
            name: "login",
            title: "Log in",
            buttonLabel: "Log in",
            inputs: ["username", "password"]
        },
        register: {
            name: "register",
            title: "Register",
            buttonLabel: "Register",
            inputs: ["username", "password", "password_confirm"]
        },
        recover: {
            name: "recover",
            title: "Recover",
            buttonLabel: "Request reset link",
            inputs: ["username"]
        },
        reset: {
            name: "reset",
            title: "Reset",
            buttonLabel: "Reset password",
            inputs: ["reset_email", "reset_token", "password", "password_confirm"]
        }
    }

    const setCurrentAction = () => {
        setSuccessMessage(false);
        setProcessing(false);
    }

    const processAuth = (data, forceAction = "none") => {
        setProcessing(true);
        setErrorMessage(false);

        if(action === "login" || forceAction === "login"){

            axios.post('https://dailydo.lv/a/wp-json/jwt-auth/v1/token', data)
                .then(function (response) {
                    // console.log(response);
                    if(typeof response.data !== undefined && typeof response.data.token !== undefined){
                        
                        // AsyncStorage.setItem('token', response.data.token);
                        storage.set('user.token', response.data.token);
                        setActiveUser(response.data.token);
                        // setTimeout(function(){
                        //     // window.location.assign("/");
                        // }, 100);
                    }
                })
                .catch(function () {
                    setErrorMessage("Something went wrong, please try again.");
                });


        }else if(action === "recover"){

            axios.get( process.env.REACT_APP_DDAPI + 'reset-password/' + data.username);
            setSuccessMessage("Password reset link will be sent shortly.");

        }else if(action === "reset") {

            const authUrl = process.env.REACT_APP_DDAPI + 'reset-password/';
            axios.post(authUrl, data)
                .then((response) => {
                    if (parseInt(response.data)) {
                        processAuth(data, "login");
                    } else {
                        setProcessing(false);
                    }
                });

        }else if(action === "register"){
            const regUrl = process.env.REACT_APP_DDAPI + 'register/';
            axios.post(regUrl, data)
                .then((response) => {
                    if (parseInt(response.data)) {
                        processAuth(data, "login");
                    } else {
                        setProcessing(false);
                    }
                });

        }
    }

    const submitLabel = actions[action].buttonLabel;


    return (
        <View style={styles.container}>
            {!['reset','verify'].includes(action)  &&
                <AuthMenu style={styles.nav} setCurrentAction={setCurrentAction} action={action} actions={actions} />
            }
            {errorMessage && <Text>{errorMessage}</Text>}
            {successMessage ? <Text>{successMessage}</Text> :
                <AuthForm processAuth={processAuth} action={action} actions={actions} submitLabel={submitLabel} processing={processing} />
            }
        </View>
    );
}
export default AuthContainer;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    }
});
