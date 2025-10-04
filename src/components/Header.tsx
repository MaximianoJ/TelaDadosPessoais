// src/components/Header.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const colors = {
  primary: '#C70039',
  text: '#333333',
  background: '#FFFFFF',
  border: '#EAEAEA',
};

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="ellipse" size={10} color={colors.primary} style={styles.dot} />
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15, // aumentei um pouco para dar mais espaço
    backgroundColor: colors.background,
    //borda na parte inferior do header
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  dot: {
    marginLeft: 2,
    marginTop: 14,

  },
});

export default Header;