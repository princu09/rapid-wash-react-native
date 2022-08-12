import React from 'react';
import {TailwindProvider} from 'tailwindcss-react-native';
import {ContextProvider} from './src/context/ContextProvider';
import HomeStack from './src/routes/HomeStack';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <ContextProvider>
      <PaperProvider>
        <TailwindProvider>
          <HomeStack />
        </TailwindProvider>
      </PaperProvider>
    </ContextProvider>
  );
};

export default App;
