import React, { useCallback } from "react";
import { Note } from "@/model";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import { FlatList, FlatListProps } from "react-native";
import NoteListItem from "./note-list-item";
import NOTES from '@/fixtures/notes'
const StyledFlatList = createBox<Theme, FlatListProps<Note>>(FlatList)


interface Props {}

const NoteList: React.FC<Props> = () => {
    const renderItem = useCallback(({item}) => {
        return <NoteListItem {...item}/>
    }, [])

    return (
        <StyledFlatList
            contentInsetAdjustmentBehavior="automatic"
            data={NOTES}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            width="100%"
        />
    )
}

export default NoteList;