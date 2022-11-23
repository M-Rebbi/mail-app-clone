import {Box, Text} from '@/atoms';
import activeThemeId from '@/states/theme';
import {Theme, ThemeMeta, ThemeNames, themes} from '@/themes';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {createBox} from '@shopify/restyle';
import {useAtom} from 'jotai';
import React, {useCallback} from 'react';
import {FlatList, FlatListProps, SafeAreaView, View} from 'react-native';
import RMailLogo from './rmail-logo';
import ThemeListItem from './theme-list-item';

const StyledFlatList = createBox<Theme, FlatListProps<ThemeMeta>>(FlatList);

const Sidebar: React.FC<DrawerContentComponentProps> = ({navigation}) => {
  const [, setActiveTheme] = useAtom(activeThemeId);

  const handleThemeItemPress = useCallback((selectedThemeId: ThemeNames) => {
    setActiveTheme(selectedThemeId);
  }, []);

  const renderThemeItem = useCallback(
    ({item}: {item: ThemeMeta}) => {
      return <ThemeListItem theme={item} onPress={handleThemeItemPress} />;
    },
    [handleThemeItemPress],
  );

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
          borderBottomWidth={1}>
          <RMailLogo width={64} height={36} color="$primary" />
          <Text fontSize={18} color="$sidebarForeground">
            RMail
          </Text>
        </Box>
      </SafeAreaView>
      <StyledFlatList
        ListHeaderComponent={() => (
          <Box p="lg" alignItems="flex-start">
            <Text color="$sidebarForeground" fontWeight="bold">
              UI Themes
            </Text>
          </Box>
        )}
        data={themes}
        keyExtractor={(t: ThemeMeta) => t.id}
        renderItem={renderThemeItem}
      />
    </Box>
  );
};

export default Sidebar;
