import { extendTheme, theme as base } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  shadows: {
    outline: `0 0 0 2px #B0A6F0`,
  },
  fonts: {
    heading: `Lexend ${base.fonts.heading}`,
    body: `Inter ${base.fonts.body}`,
  },
  fontSizes: {
    xs: "0.875rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
  },
  colors: {
    brand: {
      brand1: "#4529E6",
      brand2: "#5126EA",
      brand3: "#B0A6F0",
      brand4: "#EDEAFD",
    },
    greyScale: {
      grey0: "#0B0D0D",
      grey1: "#212529",
      grey2: "#495057",
      grey3: "#868E96",
      grey4: "#ADB5BD",
      grey5: "#CED4D4",
      grey6: "#DEE2E6",
      grey7: "#E9ECEF",
      grey8: "#F1F3F5",
      grey9: "#F8F9FA",
      grey10: "#FDFDFD",
      whiteFixed: "#FFFFFF",
    },
    feedback: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      success1: "#18794E",
      success2: "#CCEBD7",
      success3: "#DDF3E4",
    },
    profile: {
      random1: "#E34D8C",
      random2: "#C04277",
      random3: "#7D2A4D",
      random4: "#7000FF",
      random5: "#6200E3",
      random6: "#36007D",
      random7: "#349974",
      random8: "#2A7D5F",
      random9: "#153D2E",
      random10: "#6100FF",
      random11: "#5700E3",
      random12: "#30007D",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "4px",
        fontFamily: `Inter`,
        fontWeight: "600",
        _disabled: {
          bg: "greyScale.grey5",
          color: "white",
          opacity: 1,
        },
        _hover: {
          _disabled: {
            bg: "greyScale.grey5",
            color: "white",
          },
        },
      },
      sizes: {
        sm: {
          fontSize: "xs",
          py: "12px",
          px: "20px",
        },
        lg: {
          fontSize: "sm",
          py: "12px",
          px: "28px",
        },
      },
      variants: {
        outline: {
          border: "2px solid",
          _disabled: {
            borderColor: "greyScale.grey5",
          },
        },
      },
    },
  },
});
