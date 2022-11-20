import React from 'react';
import { Box, Container, Text } from '@/atoms';
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';
import { TouchableOpacity } from '@/atoms/touchable';

export default function MainScreen() {
    return (
        <Container justifyContent="center" alignItems="center">
            <NoteList/>
            <HeaderBar>
                <TouchableOpacity m="xs" p="xs" rippleBorderless>
                    <FeatherIcon name="menu" size={22} />
                </TouchableOpacity>
                <Box flex={1} alignItems="center">
                    <Text fontWeight="bold">All Notes</Text>
                </Box>
                <TouchableOpacity m="xs" p="xs" rippleBorderless>
                    <FeatherIcon name="more-vertical" size={22} />
                </TouchableOpacity>
            </HeaderBar>
        </Container>
    )
}