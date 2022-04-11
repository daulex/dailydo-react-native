import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { inputData } from './_inputData';

const AuthForm = ({action, actions, processAuth}) => {
    const formOptions = {};

    const { control, handleSubmit, formState: { errors }  } = useForm(formOptions);
    const onSubmit = data => {
        processAuth(data);
    };
    
    const inputsToRender = actions[action].inputs;
    return (
        <View style={styles.formContainer}>
            
        {inputsToRender.map((fieldRef, i) => {
            const name = inputData[fieldRef].name;
            let error = false;
            if(errors[name]) {
                error = errors[name].message;
            }
            return(
                <View style={styles.inputContainer} key={i}>
                    <Text style={styles.label}>{inputData[fieldRef].label}</Text>
                    {error !== false && <Text style={styles.error}>{error}</Text>}
                    <Controller
                        control={control}
                        rules={inputData[fieldRef].validation}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                disabled={inputData[fieldRef].disabled}
                                placeholder={inputData[fieldRef].placeholder}
                                autoCapitalize='none'   
                                secureTextEntry={!!inputData[fieldRef].secureTextEntry}
                                keyboardType={inputData[fieldRef].keyboardType}
                            />
                        )}
                        name={name}
                    />
                    
                        
                    
                </View>
                )
        })}

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
        marginBottom: 20,
        position: "relative"
    },
    input: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        padding: 15
    },
    label:{
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5
    },
    error:{
        color: "red",
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "right",
        position: "absolute",
        right: 0,
        top:0
    }
});
