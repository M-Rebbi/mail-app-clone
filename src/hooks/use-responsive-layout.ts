import { RESPONSIVE_SCREEN_BREAKPOINT } from "const"
import { useWindowDimensions } from "react-native"

const useResponsiveLayout = () => {
    const screenSize = useWindowDimensions()
    const isTablet = 
    screenSize.width >= RESPONSIVE_SCREEN_BREAKPOINT || 
    screenSize.height >= RESPONSIVE_SCREEN_BREAKPOINT
    const isPortariat = screenSize.width < screenSize.height
    return { isTablet, isPortariat}
}

export default useResponsiveLayout

