import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {meterToKilo, widthResponsive} from '../../../utils';
import {color, font} from '../../../theme';
import {mvs} from 'react-native-size-matters';
import {Gap} from '../..';

type Props = {
  windSpeed: number;
  pressure: number;
  humidity: number;
  visibility: number;
};

const DetailCard: React.FC<Props> = (props: Props) => {
  const {windSpeed, pressure, humidity, visibility} = props;
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.textStyle}>Wind: {windSpeed}m/s</Text>
        <Gap height={10} />
        <Text style={styles.textStyle}>Pressure: {pressure}hPa</Text>
      </View>
      <View style={styles.rightComp}>
        <Text style={styles.textStyle}>Humidity: {humidity}%</Text>
        <Gap height={10} />
        <Text style={styles.textStyle}>
          Visibility: {meterToKilo(visibility)}
        </Text>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    padding: widthResponsive(20),
    backgroundColor: color.Neutral[30],
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: mvs(12),
    fontFamily: font.InterMedium,
    color: color.Dark[800],
  },
  rightComp: {
    alignItems: 'flex-end',
  },
});
