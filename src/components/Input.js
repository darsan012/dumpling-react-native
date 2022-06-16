import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import IconComponent from './IconComponent';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Input = ({
  secureTextEntry,
  placeholder,
  value,
  searchQueryHandler,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const changeHandler = () => {
    searchQueryHandler(searchQuery.trim());
  };

  return (
    <>
      <TextInput
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        defaultValue={value}
        onChangeText={value => {
          setSearchQuery(value);
          searchQueryHandler(value.trim());
        }}
        placeholderTextColor="black"
        onBlur={changeHandler}
      />
      <View style={styles.icon}>
        <IconComponent iconName={faSearch} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 2,
    color: 'black',
    borderRadius: 15,
    padding: 7,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: '34%',
    right: '5%',
  },
});

export default Input;
