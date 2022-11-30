import React, {useCallback} from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Container, Text} from '@/atoms';
import NoteListScreenForTablet from './note-list-tablet';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function MainScreenForTablet({navigation}: Props) {
  const toggleSidbar = useCallback(() => {
    // TODO
  }, []);

  return (
    <NoteListScreenForTablet
      navigation={navigation}
      onSidebarToggle={toggleSidbar}
    />
  );
}
