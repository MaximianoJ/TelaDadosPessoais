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
  onNotificationPress?: () => void;
  onBackPress?: () => void;
};

const Header = ({ title, onNotificationPress, onBackPress }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={'#333333'} />
          </TouchableOpacity>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="ellipse" size={10} color={'#E94359'} style={styles.dot} />
        </View>
      </View>
      
      <TouchableOpacity onPress={onNotificationPress} disabled={!onNotificationPress}>
        <Ionicons name="notifications-outline" size={24} color={'#333333'} />
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
        paddingBottom: 15,
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // garante que o container da esquerda tenha espaço para crescer mas não empurre o resto
        flex: 1, 
    },
    backButton: {
        marginRight: 10,
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
