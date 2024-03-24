import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';
import {baseImageUrl} from '../../../data/ImageUrl';
import {dataList} from '../../../interface/dataList.interface';
import {kelvinToCelcius} from '../../../utils';
import {color, font} from '../../../theme';
import {mvs} from 'react-native-size-matters';
import {Gap} from '../..';

interface Props {
  data: dataList;
}

const TemperatureCard: FC<Props> = (props: Props) => {
  const {data} = props;
  return (
    <View style={styles.weatherMain}>
      <View style={styles.mainContainer}>
        <FastImage
          style={{width: 40, height: 40}}
          source={{
            uri: `${baseImageUrl}${data.weather[0].icon}@2x.png`,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.textMainContainer}>
          <Text style={styles.titleStyle}>{data.weather[0].main}</Text>
          <Text style={styles.textStyle}>{data.weather[0].description}</Text>
        </View>
      </View>
      <View style={styles.tempContainer}>
        <Text style={styles.mainTemp}>{kelvinToCelcius(data.main.temp)}</Text>
        <Text style={styles.textStyle}>
          Feels like {kelvinToCelcius(data.main.feels_like)}
        </Text>
        <Gap height={20} />
        <Text style={styles.countryName}>{data.name}</Text>
      </View>
    </View>
  );
};

export default TemperatureCard;

const styles = StyleSheet.create({
  titleStyle: {
    color: color.Dark[800],
    fontSize: mvs(16),
    fontFamily: font.InterThin,
    fontWeight: '300',
  },
  textMainContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textStyle: {
    color: color.Dark[400],
    fontFamily: font.InterThin,
    fontWeight: '200',
    fontSize: mvs(12),
  },
  weatherMain: {alignItems: 'center'},
  mainContainer: {
    flexDirection: 'row',
  },
  mainTemp: {
    color: color.Dark[900],
    fontSize: mvs(65),
    fontFamily: font.InterThin,
    fontWeight: '100',
  },
  tempContainer: {
    alignItems: 'center',
  },
  countryName: {
    color: color.Dark[900],
    fontSize: mvs(20),
    fontFamily: font.InterThin,
    fontWeight: '100',
  },
});
