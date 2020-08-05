import { Dimensions, StatusBar } from 'react-native';

function getDimensions(){
  const statusBarHeight = StatusBar.currentHeight;
  const windowHeight = Dimensions.get('window').height - (statusBarHeight > 25 ? 0 : statusBarHeight);
  const windowWidth = Dimensions.get('window').width;
  return {
    height: windowHeight,
    width: windowWidth
  }
}

module.exports = {
  getDimensions
}
