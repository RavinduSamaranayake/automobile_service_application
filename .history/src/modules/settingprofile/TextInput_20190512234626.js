import React from "react";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { View } from 'react-native';

const TextInput = res => {
  const {
    id,
    value,
    onFocus,
    onChange,
    onBlur,
    isValid,
    validatorMessage,
    required,
    showWarnings,
    placeholder,
    label,
    requiredPrefix,
    focusNext,
    onRef
  } = res;
  const _isSuccess = showWarnings ? isValid : null;
  const _isError = showWarnings ? !isValid : null;
  const _required = required && requiredPrefix ? requiredPrefix : "";
  return (
    <View>
      <FormLabel>{`${_required}${label}`}</FormLabel>
      <FormInput
        onChangeText={onChange}
        value={value}
        ref={ref => {onRef(ref)}}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmitEditing={focusNext}
      />
      {showWarnings && <FormValidationMessage>{validatorMessage}</FormValidationMessage>}
    </View>  
  )
  /*
  return (
    <div key={id} className="inputWrapper">
      <label>{`${_required}${label}`}</label>
      <input
        ref={ref => {
          onRef(ref);
        }}
        value={value}
        onChange={event => {
          let newValue = event.target.value;
          onChange(newValue, event);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            focusNext();
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
      />
      {showWarnings && <p className="helpText">{validatorMessage}</p>}
    </div>
  );
  */
};

export default TextInput;
