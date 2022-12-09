import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {watchlistArray, portfolioArray} from './constant';
import usePusherChannel from './usePusher';

const PusherApp = () => {
  return (
    <SafeAreaView>
      <Text>Watchlist:- </Text>
      {watchlistArray.map((ticker, index) => (
        <WatchList key={index} ticker={ticker} />
      ))}
      <Text>Portfolio:- </Text>
      {portfolioArray.map((ticker, index) => (
        <Portfolio key={index} ticker={ticker} />
      ))}
    </SafeAreaView>
  );
};
const WatchList = ({ticker}) => {
  const pusherData = usePusherChannel(ticker.name, ticker);
  return (
    <View>
      <Text>
        {ticker.name} - ${pusherData.price}
      </Text>
    </View>
  );
};

const Portfolio = ({ticker}) => {
  const pusherData = usePusherChannel(ticker.name, ticker);
  return (
    <View>
      <Text>
        {ticker.name} - ${pusherData.price}
      </Text>
    </View>
  );
};

export default PusherApp;
