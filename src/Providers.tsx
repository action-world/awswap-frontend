import React from 'react'
import { ModalProvider, light, dark } from '@pancakeswap/uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'
import { getLibrary } from 'utils/web3React'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'

// console.log(light.colors)
// light.colors.textSubtle = '#BC232C'
// light.colors.input = '#fff'
// light.colors.inputSecondary = '#fff'

const resetTheme = () => {
  // 修改主色
  light.colors.primary = '#F56020'
  dark.colors.primary = '#F56020'

  // light.colors.input = '#BC232C'

  // 修改默认边框
  light.radii.small = '2px'
  light.radii.default = '4px'
  light.radii.card = '8px'
  dark.radii.small = '2px'
  dark.radii.default = '4px'
  dark.radii.card = '8px'
}

resetTheme()

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager()
  return <ThemeProvider theme={isDark ? dark : light} {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <HelmetProvider>
            <ThemeProviderWrapper>
              <LanguageProvider>
                <RefreshContextProvider>
                  <ModalProvider>{children}</ModalProvider>
                </RefreshContextProvider>
              </LanguageProvider>
            </ThemeProviderWrapper>
          </HelmetProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
