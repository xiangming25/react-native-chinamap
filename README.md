# react-native-chinamap
This is a component for display china distribution map by use svg

## show Cases
<img width="366" alt="WX20190515-142405@2x" src="https://user-images.githubusercontent.com/7913751/57752923-43fe3180-771d-11e9-8560-ab6de87d8a84.png">
<img width="342" alt="WX20190515-142932@2x" src="https://user-images.githubusercontent.com/7913751/57753147-e7e7dd00-771d-11e9-80f1-4fc90d5b4be4.png">

## Prerequisites
This library uses [react-native-svg](https://github.com/react-native-community/react-native-svg) to render its graphs. Therefore this library needs to be installed And linked into your project to work.

`npm install react-native-svg --save`

or

`yarn add react-native-svg`

and then

`react-native link react-native-svg`

## installation
`npm install react-native-chinamap --save`

or

`yarn add react-native-chinamap`

## Usage
```
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import ChinaMap from 'react-native-chinamap';
const window = {
  width: Dimensions.get('window').width,
};

export default class App extends Component {
  state = {
    map: {
      data: [{
        code: 11,
        name: '北京市',
        provinceGradation: 5,
      },
      {
        code: 12,
        name: '天津市',
        provinceGradation: 2,
      },
      {
        code: 13,
        name: '河北省',
        provinceGradation: 3,
      }, {
        code: 61,
        provinceGradation: 4,
      }, {
        code: 62,
        provinceGradation: 3,
      }, {
        code: 65,
        name: '新疆',
        provinceGradation: 5,
      }],
      legend: [
        { gradation: 1, color: '#FFFFFF', min: '', max: '1万' },
        { gradation: 2, color: 'rgba(0, 122, 255, 0.2)', min: '1万', max: '3万' },
        { gradation: 3, color: 'rgba(0, 122, 255, 0.4)', min: '3万', max: '5万' },
        { gradation: 4, color: 'rgba(0, 122, 255, 0.6)', min: '5万', max: '10万' },
        { gradation: 5, color: 'rgba(0, 122, 255, 1)', min: '10万', max: '' },
      ],
    },
  }

  render() {
    const { data, legend } = this.state.map;
    return (
      <View style={styles.container}>
        <ChinaMap
          fillRule={'evenodd'}
          width={window.width}
          showLegend
          mapData={data}
          legend={legend}
          showShadow={true}
          backgroundColor={'#fff'}
          stroke='#dbdbdf'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
    overflow: 'hidden',
    paddingTop: 100,
  },
});

```

## Documentation
#### Params
Key | Type | Default | description
---|---|---|---
fillRule | string | evenodd | evenodd / nonzero
width | number | device width
mapData | array
legend | array | [{ gradation: 1, color: '#FFFFFF', min: '', max: '1万' }...]
showLegend | boolean | true
showShadow | boolean | true
backgroundColor | string | #ffffff
stroke | string | #dbdbdf
strokeWidth | string | 0.5