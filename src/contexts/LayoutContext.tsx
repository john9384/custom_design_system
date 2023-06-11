import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface State {
  sidebarOpen: boolean;
  accountDropdownOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setAccountDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

const initialState: State = {
  sidebarOpen: false,
  accountDropdownOpen: false,
  setSidebarOpen: () => {},
  setAccountDropdownOpen: () => {},
};

export const LayoutContext = React.createContext<State>(initialState);

const LayoutProvider = ({ children }: any) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = React.useState(false);

  return (
    <LayoutContext.Provider
      value={{
        sidebarOpen,
        accountDropdownOpen,
        setSidebarOpen,
        setAccountDropdownOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const layoutContext = React.useContext(LayoutContext);

  if (!layoutContext) {
    throw new Error(
      'layoutContext can only be use in the LayoutContext Provider',
    );
  }

  return layoutContext;
};
export default LayoutProvider;
