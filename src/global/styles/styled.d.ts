// import original module declarations
import 'styled-components';
import theme from './theme';

// and extend them!
declare module 'styled-components' {
  type ThemeType = typeof theme
  export interface DefaultTheme extends ThemeType {}
}
//typeof theme  //typeof copia todos os tipo de um objeto informado!