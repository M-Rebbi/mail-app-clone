import { Box, Text } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import BookList from './book-list';

const Sidebar: React.FC<DrawerContentComponentProps> = ({navigation}) => {
    const handleBookListItemPress = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])

    return (
       <Box flex={1} bg="$sidebarBackground">
            <SafeAreaView>
                <Text 
                    variant="sidebar"
                    m="lg"
                >
                    RMail
                </Text>
            </SafeAreaView>
            <BookList 
                onPressItem={handleBookListItemPress}
            />
       </Box>
    )
}

export default Sidebar;