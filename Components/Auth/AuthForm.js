import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import { useForm, Controller } from "react-hook-form";

const AuthForm = ({action, actions, processAuth}) => {
    const formOptions = {};

    const { control, handleSubmit, formState: { errors }  } = useForm(formOptions);
    const onSubmit = data => {
        processAuth(data);
    };
    const inputData = {
        email: {
            name: "username",
            type: "email",
            label: "Email",
            placeholder: "name@example.com",
            validation: {required: true, pattern: /^\S+@\S+$/i}
        },
        reset_email: {
            name: "username",
            type: "text",
            label: "Reset email",
            disabled: "disabled",
            validation: {required: true, pattern: /^\S+@\S+$/i}
        },
        reset_token: {
            name: "key",
            type: "text",
            label: "Key",
            disabled: "disabled",
            validation: {}
        },
        password: {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
            validation: {required: true, min: 6}
        },
        password_confirm: {
            name: "password_confirm",
            type: "password",
            label: "Confirm password",
            placeholder: "Confirm password",
            validation: {required: true, min: 6}
        }
    }
    const inputsToRender = actions[action].inputs;

    return (
        <View style={styles.formContainer}>
        {inputsToRender.map((fieldRef, i) => (
            <View style={styles.inputContainer} key={i}>
                <Text>{inputData[fieldRef].label}</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            disabled={inputData[fieldRef].disabled}
                            placeholder={inputData[fieldRef].placeholder}
                        />
                    )}
                    name={inputData[fieldRef].name}
                />
            </View>
            ))}

            <Button title={actions[action].buttonLabel} onPress={handleSubmit(onSubmit)} />
        </View>
    );
}
export default AuthForm;

const styles = StyleSheet.create({
    formContainer: {
        zIndex: 1,
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
});
