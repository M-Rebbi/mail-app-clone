import { Box, Text } from '@/atoms';
import { Note } from '@/model';
import React from 'react';

export interface ListItemPorps extends Note {}

const NoteListItem: React.FC<ListItemPorps> = props => {
    return (
        <Box bg="$background">
            <Box bg="$background" px="lg" py="sm">
                <Text 
                    fontWeight="bold"
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    mb="xs"
                >{props.title}</Text>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    fontSize={14}
                    opacity={0.7}
                >{props.body}</Text>
            </Box>
        </Box>
    )
}

export default NoteListItem;