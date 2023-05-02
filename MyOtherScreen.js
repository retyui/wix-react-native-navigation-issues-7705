import React from 'react';
import {View, Button, Text} from 'react-native';

import {Navigation} from 'react-native-navigation';

function push(componentId, name) {
  Navigation.push(componentId, {
    component: {
      name,
      options: {
        topBar: {
          title: {
            text: name,
          },
        },
      },
    },
  });
}

function MyOtherScreen({componentId}) {
  return (
    <View style={{flex: 1, marginTop: 200}}>
      <Button
        title="Push other screen"
        onPress={() => push(componentId, 'Other_name')}
      />

      <Text
        style={{
          marginTop: 'auto',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexDirection: 'row',
          fontSize: 30,
        }}>
        My other screen
      </Text>
    </View>
  );
}

export default MyOtherScreen;
