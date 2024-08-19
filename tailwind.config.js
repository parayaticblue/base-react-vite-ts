/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': { 'min': '0px', 'max': '479px' },
      // => @media (min-width: 320px) { ... }

      'xs': { 'min': '480px', 'max': '639px' },
      // => @media (min-width: 480px) { ... }

      'sm': { 'min': '640px', 'max': '767px' },
      // => @media (min-width: 640px) { ... }

      'md': { 'min': '768px', 'max': '1023px' },
      // => @media (min-width: 768px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'min': '1280px', 'max': '1535px' },
      // => @media (min-width: 1280px) { ... }

      '2xl': { 'min': '1536px' },
      // => @media (min-width: 1536px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif','Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        title: ['32px', '48px'],
        sm: ['14px', {
          lineHeight: '21px',
        }],
        base: ['16px', {
          lineHeight: '24px',
        }],
        lg: ['18px', {
          lineHeight: '27px',
        }],
        xl: ['20px', {
          lineHeight: '30px',
        }],
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      stroke: {
        gray: '#718096',
        primary: '#05C08A',
        secondary: '#092F6D',
        success: {
          light: '#EBFFF3',
          DEFAULT: '#70CF98',
          dark: '#06B851',
        },
        info: {
          light: '#F1F7FF',
          DEFAULT: '#3FB2FF',
          dark: '#3183F2',
        },
        warning: {
          light: '#FBF4DB',
          DEFAULT: '#FFAD01',
          dark: '#D18E00',
        },
        error: {
          light: '#FFF5F4',
          DEFAULT: '#FF7777',
          dark: '#E83E3E',
        },
      },
      strokeWidth: {
        '2': '2px',
        '4': '4px',
        '8': '8px'
      },
      boxShadow: {
        navbar: '0px 4px 8px rgba(0, 0, 0, 0.05)',
        select: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        footer: '4px 0px 8px rgba(0, 0, 0, 0.15)',
        card: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.15)',
        cardhover: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.25)',
        cardactive: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.35)',
        cardfocus: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.45)',
        carderror: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.55)',
        cardsuccess: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.65)',
        cardinfo: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.75)',
        cardwarning: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(18, 18, 91, 0.85)',
        carddisabled: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px rgba(63, 63, 68, 0.15)',
        cardselected: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #05C08A',
        cardselectedhover: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #05C08A',
        cardselectedactive: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #05C08A',
        cardselectedfocus: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #05C08A',
        cardselectederror: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #E83E3E',
        cardselectedsuccess: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #06B851',
        cardselectedinfo: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #3FB2FF',
        cardselectedwarning: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #FFAD01',
        cardselecteddisabled: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #718096',
        cardselectedhovererror: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #E83E3E',
        cardselectedhoversuccess: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #06B851',
        cardselectedhoverinfo: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #3FB2FF',
        cardselectedhoverwarning: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #FFAD01',
        cardselectedhoverdisabled: '0px 0px 0px rgba(63, 63, 68, 0.05), 0px 1px 9px #718096',
        cardselectedactiveerror: '0px 0px 0px rgba(63, 63, 68, 0.15), 0px 1px 9px #E83E3E',
        cardselectedactivesuccess: '0px 0px 0px rgba(63, 63, 68, 0.15), 0px 1px 9px #06B851',
        cardselectedactiveinfo: '0px 0px 0px rgba(63, 63, 68, 0.15), 0px 1px 9px #3FB2FF',
        cardselectedactivewarning: '0px 0px 0px rgba(63, 63, 68, 0.15), 0px 1px 9px #FFAD01',
        cardselectedactivedisabled: '0px 0px 0px rgba(63, 63, 68, 0.15), 0px 1px 9px #718096',
        cardselectedfocuserror: '0px 0px 0px rgba(63, 63, 68, 0.25), 0px 1px 9px #E83E3E',
        cardselectedfocussuccess: '0px 0px 0px rgba(63, 63, 68, 0.25), 0px 1px 9px #06B851',
        cardselectedfocusinfo: '0px 0px 0px rgba(63, 63, 68, 0.25), 0px 1px 9px #3FB2FF',
      },
      colors: {
        transparent: 'transparent',

        current: 'currentColor',


        // Colores semánticos
        gray: '#718096',
        primary: '#092F6D',
        secondary: '#719096',
        
        success: {
          light: '#EBFFF3',
          DEFAULT: '#70CF98',
          dark: '#06B851',
        },
        info: {
          light: '#F1F7FF',
          DEFAULT: '#3FB2FF',
          dark: '#3183F2',
        },
        warning: {
          light: '#FBF4DB',
          DEFAULT: '#FFAD01',
          dark: '#D18E00',
        },
        error: {
          light: '#FFF5F4',
          DEFAULT: '#FF7777',
          dark: '#E83E3E',
        },

        // Principales
        'primary-smen': {
          10: '#E8FAF4',
          20: '#D8F1EA',
          30: '#9CE0CC',
          40: '#69D9B9',
          50: '#37CDA1',
          60: '#05C08A',
          70: '#049A6E',
          80: '#037353',
          90: '#024D37',
        },
        'secondary-smen': {
          10: '#E9F2FF',
          20: '#E0EAFA',
          30: '#B7CAEA',
          40: '#7496D0',
          50: '#4C72AD',
          60: '#092F6D',
          70: '#0A2959',
          80: '#081E41',
          90: '#081833',
          100: '#002E71',
        },
        neutral: {
          white: '#FFFFFF',
          black: '#000000',
          10: '#F7FAFC',
          20: '#EDF2F7',
          30: '#E2E8F0',
          40: '#CBD5E0',
          50: '#A0AEC0',
          60: '#718096',
          70: '#4A5568',
          80: '#2D3748',
          90: '#1A202C',
        },

        // Tonalidades
        pink: {
          10: '#FFF5F7',
          20: '#FED7E2',
          30: '#FBB6CE',
          40: '#F687B3',
          50: '#ED64A6',
          60: '#D53F8C',
          70: '#B83280',
          80: '#97266D',
          90: '#702459',
        },
        orange: {
          10: '#FFFAF0',
          20: '#FEEBC8',
          30: '#FBD38D',
          40: '#F6AD55',
          50: '#ED8936',
          60: '#DD6B20',
          70: '#C05621',
          80: '#9C4221',
          90: '#7B341E',
        },
        purple: {
          10: '#FAF5FF',
          20: '#E9D8FD',
          30: '#D6BCFA',
          40: '#B794F4',
          50: '#9F7AEA',
          60: '#805AD5',
          70: '#6B46C1',
          80: '#553C9A',
          90: '#44337A',
        },
        indigo: {
          10: '#EBF4FF',
          20: '#C3DAFE',
          30: '#A3BFFA',
          40: '#7F9CF5',
          50: '#667EEA',
          60: '#5A67D8',
          70: '#4C51BF',
          80: '#434190',
          90: '#3C366B',
        },
        blue: {
          10: '#EBF8FF',
          20: '#BEE3F8',
          30: '#90CDF4',
          40: '#63B3ED',
          50: '#4299E1',
          60: '#3182CE',
          70: '#2B6CB0',
          80: '#2C5282',
          90: '#2A4365',
        },

        background: '#EDF8FF',
        card: '#FFFFFF',
      },
      animation: {
        'fade-in-right': 'fade-in-right 0.3s ease-in',
        'fade-out-right': 'fade-out-right 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-in',
        'fade-out': 'fade-out 0.3s ease-out',
      },
      screens: {
        'xxs': {'min': '0px', 'max': '460px'},
        'xs': { 'min': '0px', 'max': '639px' },
        'sm': { 'min': '640px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px', 'max': '1279px' },
        'xl': { 'min': '1280px', 'max': '1535px' },
        '2xl': { 'min': '1536px' },
        'print': { 'raw': 'print' },
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
        'dark': { 'raw': '(prefers-color-scheme: dark)' },
        'light': { 'raw': '(prefers-color-scheme: light)' },
        'smen': { 'raw': '(prefers-color-scheme: smen)' },
        'smen-dark': { 'raw': '(prefers-color-scheme: smen-dark)' },
        'smen-light': { 'raw': '(prefers-color-scheme: smen-light)' },
        'smen-contrast': { 'raw': '(prefers-color-scheme: smen-contrast)' },
        'smen-contrast-dark': { 'raw': '(prefers-color-scheme: smen-contrast-dark)' },
        'smen-contrast-light': { 'raw': '(prefers-color-scheme: smen-contrast-light)' },
        'smen-high-contrast': { 'raw': '(prefers-color-scheme: smen-high-contrast)' },
        'smen-high-contrast-dark': { 'raw': '(prefers-color-scheme: smen-high-contrast-dark)' },
        'smen-high-contrast-light': { 'raw': '(prefers-color-scheme: smen-high-contrast-light)' },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-out-right': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(200px)',
          },
        },
      },
      flex: {
        auto: '1 1 auto',
        initial: '0 1 auto',
        inherit: 'inherit',
        none: 'none',
        '1': '1 1 0%',
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
        '10': '10 10 0%',
        '11': '11 11 0%',
        '12': '12 12 0%',
        },
      flexGrow: {
        '0': '0',
        DEFAULT: '1',
      },
    },
  },
  variants: {
    extend: {
      stroke: ['hover', 'focus'],
      visibility: ['hover', 'focus', 'group-hover'],
    },
  },

  plugins: [],
}