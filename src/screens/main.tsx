import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ResponsiveLayout from '@/components/responsive-layout';
import {Container} from '@/atoms';
import MainScreenForPhone from './main-phone';
import MainScreenForTablet from './main-tablet';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function MainScreen(props: Props) {
  return (
    <Container>
      <ResponsiveLayout
        renderOnPhone={<MainScreenForPhone {...props} />}
        renderOnTablet={<MainScreenForTablet {...props} />}
      />
    </Container>
  );
}
