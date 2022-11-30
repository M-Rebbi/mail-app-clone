import useResponsiveLayout from '@/hooks/use-responsive-layout';
import React, {useEffect} from 'react';

type Props = {
  renderOnTablet?: React.ReactElement<any, any>;
  renderOnPhone?: React.ReactElement<any, any>;
  onLayoutChange?: (layout: 'tablet' | 'phone') => any;
};

const ResponsiveLayout: React.FC<Props> = props => {
  const {isTablet} = useResponsiveLayout();
  const {renderOnTablet, renderOnPhone, onLayoutChange} = props;

  let children: React.ReactElement<any, any> | null = null;

  if (isTablet && renderOnTablet) {
    children = renderOnTablet || null;
  } else {
    children = renderOnPhone || null;
  }

  useEffect(() => {
    onLayoutChange && onLayoutChange(isTablet ? 'tablet' : 'phone');
  }, []);

  return children;
};

export default ResponsiveLayout;
