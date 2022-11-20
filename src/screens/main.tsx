import React from 'react';
import { Box, Container, Text } from '@/atoms';
import NoteList from '@/components/note-list';
import HeaderBar from '@/components/header-bar';
import FeatherIcon from '@/components/icon';

export default function MainScreen() {
    return (
        <Container justifyContent="center" alignItems="center">
            <NoteList/>
            <HeaderBar>
                <FeatherIcon 
                    name="more-vertical"
                    size={22}
                />
            </HeaderBar>
        </Container>
    )
}