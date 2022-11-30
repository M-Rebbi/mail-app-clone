import {ReactNode, useCallback, useRef} from 'react';
import {Animated} from 'react-native';

export type ThreeColumnLayoutProps = {
  type: 'three-column';
  leftViewVisible: boolean;
  middleViewVisible: boolean;
};

type RenderView = (callbacks: ThreeColumnLayoutProps) => ReactNode;
type Props = {
  renderLeftView: RenderView;
  renderMiddleView: RenderView;
  renderRightView: RenderView;
  leftViewVisible?: boolean;
  middleViewVisible?: boolean;
  leftViewWidth?: number;
  middleViewWidth?: number;
};

const ThreeColumnLayout: React.FC<Props> = props => {
  const {
    renderLeftView,
    renderMiddleView,
    renderRightView,
    leftViewVisible,
    leftViewWidth,
    middleViewVisible,
    middleViewWidth,
  } = props;

  const viewProps: ThreeColumnLayoutProps = {
    type: 'three-column',
    leftViewVisible,
    middleViewVisible,
  };
  const leftValue = useRef(
    new Animated.Value(leftViewVisible ? leftViewWidth : 0),
  ).current;
  const middleValue = useRef(
    new Animated.Value(middleViewVisible ? middleViewWidth : 0),
  ).current;
  const animatedLeftViewStyle = {
    flexBasis: leftValue,
  };
  const animatedMiddleViewStyle = {
    flexBasis: middleValue,
  };

  const toggleLeftView = useCallback(
    (visible: boolean) => {
      if (visible) {
        Animated.spring(leftValue, {
          useNativeDriver: false,
          toValue: leftViewWidth || 0,
          bounciness: 0,
        }).start();
      } else {
        Animated.spring(leftValue, {
          useNativeDriver: false,
          toValue: 0,
          bounciness: 0,
        }).start();
      }
    },
    [leftValue, leftViewVisible],
  );
};

export default ThreeColumnLayout;
