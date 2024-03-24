import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {color} from '../theme';
import {
  DetailCard,
  EmptyState,
  Gap,
  LoadingIndicator,
  SearchBar,
} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../store/reducers';
import {getCurrentLocation} from '../utils/getLocation';
import {useFocusEffect} from '@react-navigation/native';
import {widthResponsive} from '../utils';
import TemperatureCard from '../components/molecule/Temp';
import {fetchDataRequest} from '../store/actions/home';

const HomeScreen = () => {
  const {data, loading, error} = useSelector(
    (state: ApplicationState) => state.home,
  );

  const [state, setState] = useState<string>('');

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getCurrentLocation(dispatch);
    }, [dispatch]),
  );

  const onSubmitSearch = () => {
    if (state.length > 0) {
      // @ts-ignore
      dispatch(fetchDataRequest(undefined, undefined, state));
    } else {
      getCurrentLocation(dispatch);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingIndicator size="large" />}
      <View style={styles.bodyContainer}>
        <SearchBar
          value={state}
          backgroundColor="transparent"
          inputStyle={styles.searchInputStyle}
          onChangeText={(newText: string) => setState(newText)}
          rightIcon={state !== '' && true}
          reset={() => setState('')}
          onSubmitEditing={onSubmitSearch}
        />
        {!loading && data.weather && (
          <>
            <Gap height={20} />
            <TemperatureCard data={data} />
            <Gap height={30} />
            <DetailCard
              humidity={data.main.humidity}
              pressure={data.main.pressure}
              visibility={data.visibility}
              windSpeed={data.wind.speed}
            />
          </>
        )}
        {error && <EmptyState text={'ERROR'} subtitle={error} />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Neutral[10],
  },
  bodyContainer: {
    flex: 1,
    padding: widthResponsive(20),
  },
  searchInputStyle: {
    color: color.Dark[900],
    fontSize: 13,
  },
});
