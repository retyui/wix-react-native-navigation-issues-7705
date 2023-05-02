import {Navigation} from 'react-native-navigation';

import MyScreen from './MyScreen';
import MyOtherScreen from './MyOtherScreen';

Navigation.registerComponent('Home_name', () => MyScreen);
Navigation.registerComponent('Profile_name', () => MyScreen);
Navigation.registerComponent('Book_name', () => MyScreen);
Navigation.registerComponent('Other_name', () => MyOtherScreen);

Navigation.events().registerComponentDidAppearListener(event => {
  console.log(' --- Appear:', event);
});

Navigation.events().registerComponentDidDisappearListener(event => {
  console.log(' --- Disappear:', event);
});

Navigation.setDefaultOptions({
  bottomTabs: {
    visible: false, // set true will fix issue
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'Bottom_tabs_layout',
        children: [
          {
            stack: {
              id: 'Home_tab_id',
              children: [
                {
                  component: {
                    id: 'Home_screen_id',
                    name: 'Home_name',
                    options: {topBar: {title: {text: 'Home'}}},
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'Book_tab_id',
              children: [
                {
                  component: {
                    id: 'Book_screen_id',
                    name: 'Book_name',
                    options: {topBar: {title: {text: 'Book'}}},
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'Profile_tab_id',
              children: [
                {
                  component: {
                    id: 'Profile_screen_id',
                    name: 'Profile_name',
                    options: {topBar: {title: {text: 'Profile'}}},
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
