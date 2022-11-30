import React, {useCallback} from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSetAtom} from 'jotai';
import {editingNoteIdAtom} from '@/states/editor';
import NoteListScreen from './note-list';
import useResponsiveLayout from '@/hooks/use-responsive-layout';

type Props = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<HomeDrawerParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >;
  onSidebarToggle: () => any;
};

export default function NoteListScreenForTablet({
  navigation,
  onSidebarToggle,
}: Props) {
  const setEditingNoteId = useSetAtom(editingNoteIdAtom);
  const {isPortariat} = useResponsiveLayout();
  const handleSidebarToggle = useCallback(() => {
    if (isPortariat) {
      navigation.toggleDrawer();
    } else {
      onSidebarToggle();
    }
  }, [isPortariat, navigation]);

  const handleNotelIstItemPress = useCallback((noteId: string) => {
    setEditingNoteId(noteId);
  }, []);

  return (
    <NoteListScreen
      onSidebarToggle={handleSidebarToggle}
      onNoteSelect={handleNotelIstItemPress}
    />
  );
}
