import React from "react";
import { useForm, Controller } from "react-hook-form";

import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';

const GoalForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
      const onSubmit = data => console.log(data);

    return(
        <View>
            <Text>Goal form test</Text>
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
                  />
                )}
                name="firstName"
              />
              {errors.firstName && <Text>This is required.</Text>}

              <Controller
                control={control}
                rules={{
                 maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    onSubmitEditing={ () => alert('hai!') }
                  />
                )}
                name="lastName"
              />
              <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}
export default GoalForm;

const styles = StyleSheet.create({
    input: {
        borderRadius: 3
    }
});