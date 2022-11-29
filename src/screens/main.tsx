import React from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NoteListScreenForPhone from './note-list-phone';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function MainScreen({navigation}: Props) {
  return <NoteListScreenForPhone navigation={navigation} />;
}
