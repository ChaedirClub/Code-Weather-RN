import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {color} from '../theme';
import {LoadingIndicator} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../store/reducers';
import {getCurrentLocation} from '../utils/getLocation';
import {useFocusEffect} from '@react-navigation/native';
import {widthResponsive} from '../utils';
import TemperatureCard from '../components/molecule/Temp';

const HomeScreen = () => {
  const {data, loading, error} = useSelector(
    (state: ApplicationState) => state.home,
  );

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getCurrentLocation(dispatch);
    }, [dispatch]),
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingIndicator size="large" />}
      <View style={styles.bodyContainer}>
        {!loading && data.weather && <TemperatureCard data={data} />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Neutral[25],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
});
