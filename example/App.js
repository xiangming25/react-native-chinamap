/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ChinaMap from 'react-native-chinamap';
import common from './config/common';

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
      }],
      legend: [
        { gradation: 1, color: '#FFFFFF', min: '', max: '1万' },
        { gradation: 2, color: '#FF0011', min: '1万', max: '3万' },
        { gradation: 3, color: '#FFFF00', min: '3万', max: '5万' },
        { gradation: 4, color: '#00FF33', min: '5万', max: '10万' },
        { gradation: 5, color: '#F00004', min: '10万', max: '' },
      ],
    },
  }

  render() {
    const { data, legend } = this.state.map;
    return (
      <View style={styles.container}>
        <ChinaMap
          fillRule={'evenodd'}
          width={common.window.width - 40}
          showLegend
          mapData={data}
          legend={legend}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: common.window.width - 40,
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: common.onePt,
    borderColor: '#00000019',
    overflow: 'hidden',
  },
});
