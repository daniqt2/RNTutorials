import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Box, NativeBaseProvider, Text} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Box m={'auto'}>
        <Text>TODO</Text>
        </Box>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
