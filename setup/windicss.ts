import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'
const colors = require('windicss/colors')

export default defineWindiSetup(() => ({
  darkMode: 'class',
  extract: {
    include: [resolve(__dirname, '**/*.{vue,ts}')],
  },
  shortcuts: {
   'bg-main':
      'bg-gradient-to-r from-light-background-left to-light-background-right dark:(bg-gradient-to-r from-dark-background-left to-dark-background-right)',
  },
  theme: {
    colors: {
      brand: {
        light: '#ffffff',
        logo: '#ffffff',
        dark: '#07062E',
        darker: '#07062E'
        },
      dark: {
        background: {
          left: '#07062E',
          right: '#07062E',
        },
        title: '#92D5FF',
        text: {
          base: '#92D5FF',
          contrast: colors.black
        } ,
        warning: '#f81ce5',
        accent: '#86EFAC',
        highlight: '#faedcd',
        info: '#93c5fd'
      },
      light: {
        background: {
          left: '#E6EEFF',
          right: '#E6EEFF'
        },
        title: '#07062E',
        text: {
          base: colors.black,
          contrast: colors.white,
        },
        warning: '#d11149',
        accent: '#092e1c', 
        highlight: '#6610f2',
        info: '#0015ff'
      },
    },
  },
}))