import React, {useCallback, useRef, useState} from 'react';
import {Container} from '@/atoms';
import NoteList, {NoteListProps} from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import useStickyHeader from '@/hooks/use-sticky-header';
import MoveNoteSheet from '@/components/move-notes-sheet';
import NoteListHeaderTitleBar from '@/components/note-list-header-title-bar';

type Props = {
  onSidebarToggle: () => any;
  onNoteSelect: NoteListProps['onItemPress'];
};

export default function NoteListScreen(props: Props) {
  const {onSidebarToggle, onNoteSelect} = props;
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null);
  const {handleNoteListLayout, handleScroll, headerBarHeight, headerBarStyle} =
    useStickyHeader();

  const [concealNoteListItem, setConcealNoteListItem] =
    useState<() => void | null>(null);

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
        onItemPress={onNoteSelect}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
        ListHeaderComponent={NoteListHeaderTitleBar}
      />
      <HeaderBar
        style={headerBarStyle}
        onLayout={handleNoteListLayout}
        onSidebarToggle={onSidebarToggle}></HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  );
}
