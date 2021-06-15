import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  addType,
  deleteType,
  initFeeds
} from '../../features/filteredPostSlice';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import enumToString from '../../constants/mapEnumToString';
import { hamsterTypeList } from '../../constants/hamsterTypes';
import styles from './styles';

const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const selectedHamsterTypes = useSelector(state => state.filteredPost.selectedHamsterTypes);
  const mapped = enumToString.hamsterType;

  function handleSelectType(type) {
    dispatch(initFeeds(handleSelectType));

    if (selectedHamsterTypes[type]) {
      dispatch(deleteType(type));
    } else {
      dispatch(addType(type));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.tagContainer}>
        {hamsterTypeList.map(type => {
          return (
            <TouchableOpacity
              key={type}
              style={[
                styles.tag,
                selectedHamsterTypes[type]
                  ? styles.mainBackground
                  : styles.whiteBackground
              ]}
              onPress={() => handleSelectType(type)}
            >
              <Text style={[
                styles.text,
                selectedHamsterTypes[type]
                  ? styles.whiteText
                  : styles.mainText
              ]}>{mapped[type]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Filter;
