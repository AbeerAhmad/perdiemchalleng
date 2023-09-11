import { GeneratedTheme } from './theme.generated'

declare module 'styled-components' {
    export interface DefaultTheme extends GeneratedTheme { } // extends the global DefaultTheme with our GeneratedTheme.
}
