import React, {useEffect} from 'react';
import PusherApp from './src';
import {PusherService} from './src/pusherService';

const App = () => {
  useEffect(() => {
    PusherService.connectPusher();
  }, []);
  return <PusherApp />;
};

export default App;
