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
        <View>

                {inputsToRender.map((fieldRef, i) => (
                    // <div className={'field-type-' + inputData[fieldRef].type} id={inputData[fieldRef].name} key={"field-"+i}>
                    //     <label htmlFor={inputData[fieldRef].name}>{inputData[fieldRef].label}</label>
                    //     <input
                    //         type={inputData[fieldRef].type}
                    //         placeholder={inputData[fieldRef].placeholder}
                    //         name={inputData[fieldRef].name}
                    //         disabled={inputData[fieldRef].disabled}
                    //         {...register(inputData[fieldRef].name, inputData[fieldRef].validation)}
                    //     />
                    // </div>
                    <View>
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
    input: {
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10
    },
});
