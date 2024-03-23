import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../../theme';
import {widthResponsive} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigations';
import {mvs} from 'react-native-size-matters';
import {
  Button,
  EmptyState,
  Gap,
  LoadingIndicator,
  TopNavigation,
} from '../../components';
import {useDetailDataHook} from '../../hooks/use-dataDetail.hook';
import FastImage from 'react-native-fast-image';
import {StarIcon} from '../../assets/icon';

type PostDetailProps = NativeStackScreenProps<RootStackParams, 'DetailData'>;

const DetailData = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {isLoading, isError, detailData, getDetailData, setdetailData} =
    useDetailDataHook();

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    getDetailData({id: route.params.id});
  }, []);

  const leftIconOnPress = () => {
    navigation.goBack();
    setdetailData(undefined);
  };

  return (
    <View style={styles.container}>
      <TopNavigation.Type1
        title="Detail Data"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />
      {detailData && !isError ? (
        <ScrollView style={styles.bodyContainer}></ScrollView>
      ) : (
        <EmptyState text="Error" subtitle="Oops there is something error" />
      )}
      {isLoading && <LoadingIndicator />}
    </View>
  );
};

export default DetailData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  titleStyle: {
    fontSize: mvs(15),
    fontWeight: 'bold',
    color: color.Neutral[10],
  },
  textStyle: {
    fontSize: mvs(13),
    color: color.Neutral[10],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
  score: {
    flexDirection: 'row',
  },
  buttonStyle: {
    width: widthResponsive(120),
    height: undefined,
    aspectRatio: undefined,
    padding: widthResponsive(8),
  },
});
