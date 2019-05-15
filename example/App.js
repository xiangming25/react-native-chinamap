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
          width={common.window.width}
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
