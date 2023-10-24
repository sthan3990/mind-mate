import {  extendTheme } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { colors } from "./colors";
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  colors, 
  fonts,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: 'white',
        backgroundColor: 'primary.800', // Use 'backgroundColor' instead of 'bg'
      },
    }),
  },
  components: {
     
  },
});

