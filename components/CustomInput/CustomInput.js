import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';


const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {

    return (
        <View>
            <TextInput
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                style={styles.container}
                secureTextEntry={secureTextEntry}
            ></TextInput>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,

    },
    input: {},
});
export default CustomInput;
