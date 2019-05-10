import { Dimensions, PixelRatio } from 'react-native';

const window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const onePt = 1 / PixelRatio.get();

export default {
  window,
  onePt,
};
