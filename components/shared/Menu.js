import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../theme/color';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="home-outline" size={25} color="black" />
        <Text style={styles.text}>피드</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="document-outline" size={25} color="black" />
        <Text style={styles.text}>신청서</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={25} color="black" />
        <Text style={styles.text}>플러스</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="envelope-o" size={25} color="black" />
        <Text style={styles.text}>메시지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="smileo" size={25} color="black" />
        <Text style={styles.text}>내정보</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 0.1,
    borderTopWidth: 1,
    borderTopColor: colors.outline
  },
  button: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  }
});

export default Menu;
