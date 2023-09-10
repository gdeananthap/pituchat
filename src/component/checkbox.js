import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
    color: "text.main",
    fontSize: "12px !important",
  },
  control: {
    padding: 0.5,
    borderRadius: '4px', 
    border: '2.5px solid',
    borderColor: 'text.subdued',
  },
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })