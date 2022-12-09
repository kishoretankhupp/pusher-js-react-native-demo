import {Pusher} from '@pusher/pusher-websocket-react-native';

const pusher = Pusher.getInstance();

export class PusherService {
  static connectPusher = async () => {
    await pusher.init({
      apiKey: 'PUSHER_KEY',
      cluster: 'PUSHER_CLUSTER',
      authEndpoint: 'BASE_URL',
    });
    await pusher.connect();
    return pusher;
  };

  static getPusher = async () => {
    return await pusher;
  };
}
