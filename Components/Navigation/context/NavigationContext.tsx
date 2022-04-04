import React, { createContext, useState, useEffect } from "react";
import useWindowsDimensions from "hooks/useWindowDimensions";
import { Breakpoints } from "utils/consts";

export interface NavigationContextProps {
  isMobile: boolean;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export const NavigationContext = createContext<NavigationContextProps>({
  isMobile: false,
});

export const NavigationContextProvider = ({ children }: ProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { width } = useWindowsDimensions();

  useEffect(() => {
    if (width !== undefined) {
      if (width < Breakpoints.Medium) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, [width]);

  return (
    <NavigationContext.Provider value={{ isMobile }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
