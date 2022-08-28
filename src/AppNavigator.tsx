import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ENavigatorRoot} from './utills/routes/root.route';

const App = createNativeStackNavigator<{}>();

const AppNavigator: React.FC = () => {
  return (
    <App.Navigator>
      <App.Screen name={ENavigatorRoot.TODO} component={/* TODO */} />
    </App.Navigator>
  );
};

export default AppNavigator;
