import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const colors = {
  primary: '#FFE2DC',
  tabActiveText: '#FF5733',
  tabActive: '#FF5733',
  tabInactive: '#CCCCCC',
  tabInactiveText: '#888888',
  background: '#FFFFFF',
};

type TabSelectorProps = {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
};

const TabSelector = ({ tabs, activeTab, onTabPress }: TabSelectorProps) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => onTabPress(tab)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20, // Começa com o mesmo padding do header
    paddingVertical: 15,
    backgroundColor: colors.background,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.tabInactive,
    marginRight: 10, // Espaçamento entre os botões
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderColor: colors.tabActive,
  },
  tabText: {
    color: colors.tabInactiveText,
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.tabActiveText,
  },
});

export default TabSelector;