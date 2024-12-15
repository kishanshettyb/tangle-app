import React, { useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './Profile/Tab1';
import Tab2 from './Profile/Tab2';

const TabComponents = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: 'Tab 1' },
    { key: 'tab2', title: 'Tab 2' },
  ]);

  const renderScene = SceneMap({
    tab1: Tab1,
    tab2: Tab2,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default TabComponents;

const styles = StyleSheet.create({});