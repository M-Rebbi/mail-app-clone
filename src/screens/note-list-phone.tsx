import React, {useCallback} from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSetAtom} from 'jotai';
import {editingNoteIdAtom} from '@/states/editor';
import NoteListScreen from './note-list';

type Props = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >;
};

export default function NoteListScreenForPhone({navigation}: Props) {
  const setEditingNoteId = useSetAtom(editingNoteIdAtom);

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  const handleNotelIstItemPress = useCallback((noteId: string) => {
    setEditingNoteId(noteId);
    navigation.navigate('Detail');
  }, []);

  return (
    <NoteListScreen
      onSidebarToggle={handleSidebarToggle}
      onNoteSelect={handleNotelIstItemPress}
    />
  );
}
