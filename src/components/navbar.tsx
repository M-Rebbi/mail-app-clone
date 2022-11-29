import {Box, SafeAreaView} from '@/atoms';
import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';

interface Props {
  children?: ReactNode;
}

const Navbar: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView
      backgroundColor="$navbarBackground"
      borderBottomColor="$navbarBorderBottom"
      borderBottomWidth={StyleSheet.hairlineWidth}>
      <Box minHeight={52} flexDirection="row" alignItems="center" px="md">
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Navbar;
