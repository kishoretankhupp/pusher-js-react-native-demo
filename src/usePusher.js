import {useState, useEffect} from 'react';
import {PusherService} from './pusherService';

const usePusherChannel = (symbol, initialData = {}) => {
  // const pusher = Pusher.getInstance();
  const [ticker, setTicker] = useState(initialData);

  useEffect(() => {
    subscribePusher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function subscribePusher() {
    const pusher = await PusherService.connectPusher();
    if (pusher.channels.has(`PUSHER_CHANNELS.${symbol}`)) {
      return;
    }
    pusher.subscribe({
      channelName: `PUSHER_CHANNELS.${symbol}`,
      onEvent: ({data}) => {
        const object = JSON.parse(data);
        setTicker(object);
      },
    });
  }
  return ticker;
};

export default usePusherChannel;
