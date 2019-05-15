import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Svg, {
    G,
    Path,
    Text as SvgText,
} from 'react-native-svg';
import common from './config/common';
import pathConfig from './config/pathConfig';

const ChinaMap = (props) => {
  const {
    width, fillRule, mapData,
    legend, showLegend, showShadow,
    backgroundColor, stroke, strokeWidth,
  } = props;
  const windowWidth = common.window.width;
  const baseWidth = 375;
  const baseHeight = 230;
  const legendWidth = 200;
  const legendDescViewWidth = legendWidth * ((legend.length - 1) / legend.length);
  const realHeight = (windowWidth * baseHeight) / baseWidth;
  const marginLeft = -((windowWidth - width) / 2);
  return (
    <View style={[styles.container, { marginLeft }]}>
      {
        showShadow &&
        <Image
          source={require('./assets/map_china_shadows.png')}
          style={[styles.shadowImg, { width: windowWidth, height: realHeight }]}
        />
      }
      <Svg
        width={windowWidth}
        height={realHeight}
      >
        <G scale={windowWidth / baseWidth}>
          {
          pathConfig.map((item, index) => {
            const { id, d } = item;
            const findMap = mapData.find(mapItem => mapItem.code === parseInt(id, 10)) || {};
            const provinceGradation = findMap.provinceGradation || null;
            const name = findMap.name || '城市';
            const fillLegend = legend.find(legendItem => (
              legendItem.gradation === provinceGradation
            ));
            const fillColor = fillLegend ? fillLegend.color : backgroundColor;
            return (
              <Path
                id={id}
                fillRule={fillRule}
                fill={fillColor}
                d={d}
                key={index}
                stroke={stroke}
                strokeWidth={strokeWidth}
              />
            );
          })
        }
        </G>
      </Svg>
      {
        showLegend &&
        <View style={styles.legend}>
          <View style={[styles.legendView, { width: legendWidth }]}>
            {
              legend.map((item, index) => (
                <View key={index} style={[styles.legendBlock, { backgroundColor: item.color }]} />
                )
              )
            }
          </View>
          <View style={[styles.legendDescView, { width: legendDescViewWidth }]}>
            {
              legend.map((item, index) => {
                if (index !== legend.length - 1) {
                  return (
                    <Text style={styles.legendDesc} key={index}>{item.max}</Text>
                  );
                }
                return null;
              })
            }
          </View>
        </View>
      }
    </View>
  );
};

ChinaMap.propTypes = {
  fillRule: PropTypes.oneOf(['evenodd', 'nonzero']),
  width: PropTypes.number,
  mapData: PropTypes.arrayOf(PropTypes.object).isRequired,
  legend: PropTypes.arrayOf(PropTypes.object),
  showLegend: PropTypes.bool,
  showShadow: PropTypes.bool,
  backgroundColor: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
};

ChinaMap.defaultProps = {
  fillRule: 'evenodd',
  width: common.window.width,
  legend: [
    { gradation: 1, color: '#FFFFFF', min: '', max: '1万' },
    { gradation: 2, color: 'rgba(0, 122, 255, 0.2)', min: '1万', max: '3万' },
    { gradation: 3, color: 'rgba(0, 122, 255, 0.4)', min: '3万', max: '5万' },
    { gradation: 4, color: 'rgba(0, 122, 255, 0.6)', min: '5万', max: '10万' },
    { gradation: 5, color: 'rgba(0, 122, 255, 1)', min: '10万', max: '' },
  ],
  showLegend: true,
  showShadow: true,
  backgroundColor: '#ffffff',
  stroke: '#dbdbdf',
  strokeWidth: '0.5',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadowImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    resizeMode: 'cover',
  },
  legend: {
    marginTop: -18,
    alignItems: 'center',
    alignSelf: 'center',
  },
  legendView: {
    flexDirection: 'row',
    borderWidth: common.onePt,
    borderColor: '#00000019',
    borderRadius: 2,
    overflow: 'hidden',
  },
  legendBlock: {
    flex: 1,
    height: 10,
  },
  lastLegendBlock: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  legendDescView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  legendDesc: {
    flex: 1,
    fontFamily: 'PingFangSC-Regular',
    fontSize: 11,
    color: '#909095',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default ChinaMap;
