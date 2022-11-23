import React, {useCallback, useRef, useState} from 'react';
import {Container} from '@/atoms';
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {HomeDrawerParamList, RootStackParamList} from '@/navs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import useStickyHeader from '@/hooks/use-sticky-header';
import MoveNoteSheet from '@/components/move-notes-sheet';
import NoteListHeaderTitleBar from '@/components/note-list-header-title-bar';

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'Main'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function MainScreen({navigation}: Props) {
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null);
  const {handleNoteListLayout, handleScroll, headerBarHeight, headerBarStyle} =
    useStickyHeader();

  const [concealNoteListItem, setConcealNoteListItem] =
    useState<() => void | null>(null);

  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);

  const handleNotelIstItemPress = useCallback((noteId: string) => {
    navigation.navigate('Detail', {
      noteId,
    });
  }, []);
  const handleNoteListItemSwipeLeft = useCallback(
    (_noteId: string, conceal: () => void) => {
      const {current: menu} = refMoveNoteSheet;
      if (menu) {
        menu.show();
        setConcealNoteListItem(() => conceal);
      }
    },
    [],
  );

  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem();
    setConcealNoteListItem(null);
  }, [concealNoteListItem]);

  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNotelIstItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
        ListHeaderComponent={NoteListHeaderTitleBar}
      />
      <HeaderBar
        style={headerBarStyle}
        onLayout={handleNoteListLayout}
        onSidebarToggle={handleSidebarToggle}></HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  );
}
