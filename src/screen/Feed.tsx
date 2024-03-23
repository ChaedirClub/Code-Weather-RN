import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {EmptyState, TopNavigation} from '../components';
import ListDataCard from '../components/molecule/ListData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations';

type stateProps = {
  id: number;
  imageUrl: string;
  name: string;
};

const FeedScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [data, setData] = useState<stateProps[]>();

  useFocusEffect(
    useCallback(() => {
      // setData(getList());
    }, []),
  );

  const handleOnPress = (mal_id: number) => {
    navigation.navigate('DetailData', {id: mal_id});
  };

  return (
    <View style={styles.container}>
      <TopNavigation.Type2
        title="Favorites"
        itemStrokeColor={color.Neutral[10]}
      />
      <View style={styles.bodyContainer}></View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    padding: widthResponsive(20),
  },
  listContainer: {
    marginTop: widthResponsive(20),
  },
});
