import { Box, Text } from '@/atoms';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import BookList from './book-list';
import RMailLogo from './rmail-logo';

const Sidebar: React.FC<DrawerContentComponentProps> = ({navigation}) => {
    const handleBookListItemPress = useCallback(() => {
        navigation.closeDrawer()
    }, [navigation])

    return (
       <Box flex={1} bg="$sidebarBackground">
            <SafeAreaView>
                <Box 
                    pl="md" 
                    pb="sm" 
                    mt="xs" 
                    flexDirection="row" 
                    alignItems="center" 
                    justifyContent="flex-start"
                    borderBottomColor="$sidebarSeperator"
                    borderBottomWidth={1}
                >
                    <RMailLogo width={64} height={36} color="$primary"/>
                    <Text fontSize={18} color="$sidebarForeground">RMail</Text>
                </Box>
            </SafeAreaView>
            <BookList 
                onPressItem={handleBookListItemPress}
            />
       </Box>
    )
}

export default Sidebar;