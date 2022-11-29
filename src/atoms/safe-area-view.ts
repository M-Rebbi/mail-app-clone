import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView as NativeSafeAreaView, ViewProps } from 'react-native';

const SafeAreaView = createBox<Theme, ViewProps>(NativeSafeAreaView)
export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>

export default SafeAreaView