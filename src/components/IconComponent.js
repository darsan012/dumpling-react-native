import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';

const IconComponent = ({iconName,color,size}) => {
  return (
    <View>
      <FontAwesomeIcon icon={iconName} size={size} color={color} />
    </View>
  );
};

export default IconComponent;
