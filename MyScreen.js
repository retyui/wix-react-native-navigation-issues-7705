import React from 'react';
import {View, Button} from 'react-native';

import {Navigation} from 'react-native-navigation';

function openTab(tabId, componentId) {
  Navigation.mergeOptions('Bottom_tabs_layout', {
    bottomTabs: {currentTabId: tabId},
  });
}

function push(componentId, name) {
  Navigation.push(componentId, {
    component: {
      name,
      options: {
        title: {
          text: name,
        },
      },
    },
  });
}

function MyScreen({componentId}) {
  return (
    <View style={{flex: 1, marginTop: 200}}>
      <Button
        title="Push other screen"
        onPress={() => push(componentId, 'Other_name')}
      />

      <View
        style={{
          marginTop: 'auto',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Button title="Home" onPress={() => openTab('Home_tab_id')} />

        <Button title="Book" onPress={() => openTab('Book_tab_id')} />

        <Button title="Profile" onPress={() => openTab('Profile_tab_id')} />
      </View>
    </View>
  );
}

export default MyScreen;
