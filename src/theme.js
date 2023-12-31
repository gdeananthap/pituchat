import { extendTheme } from '@chakra-ui/react'
import { checkboxTheme } from './component/checkbox';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#FFF",
    blue: {
      main: "#0C4AC0",
      surface: "#CEDBF2",
      'main40': "rgba(12, 74, 192, 0.4)",
      600: "#0C4AC0"
    },
    green: {
      40: "#33995E",
      90: "#D9F2E3",
    },
    orange: {
      90: "#FFDFCC",
    },
    capri: {
      light: "#E6F5FC",
    },
    snow: {
      lightest: "#F9F9FA",
      lighter: "#EBEBEB",
    },
    zendesk: {
      lighticon: "#2F3941",
      light: "#FFFFFF",
      main: "#000",
      lightOnBackground: "rgba(0, 0, 0, 0.55)",
      lightOnBackgroundDetail: "rgba(0, 0, 0, 0.65)",
      inboundMessage: '#F4F6F8',
    },
    text: {
      main: "#1A1A1A",
      subdued: "#4D4D4D",
      disabled: "#808080",
      white: "#FAFAFA",
    },
    dark: {
      4: "#F5F5F5",
      10: "#E5E5E5",
      20: "#CCCCCC",
      
    }
  },
  components: { 
    Checkbox: checkboxTheme,
  },
  fonts: {
    body: "Lato, sans-serif",
    heading: "Lato, sans-serif",
  },
  fontSizes: {
    '2xs': "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space: {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  sizes: {
    max: 'max-content',
    min: 'min-content',
    underTopbar: 'calc(100% - 4.5rem)',
    topbar:'4.5rem',
    sidebar:'7.1875rem',
    nextSidebar: 'calc(100% - 7.1875rem)',
    chatList: '22.4375rem',
    chatWindow: 'calc(100% - 22.4375rem)',
    chatDetail: '14.9375rem',
    chatWindowOnly: 'calc(100% - 14.9375rem)',
    chatContainer: 'calc(100% - 8.5rem)',
    filterMenu: '12.3125rem',
    filterMenuMin: '12.3125rem',
    chatOnly: 'calc(100% - 4rem)',
    maxChatLabel: 'calc(100% - 0.75rem)',
    full: '100%',
    half: '50%',
    fullHeight: '100vh',
    fullWidth: '100vw',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1900px',
    },
  },
});

export default theme;