/** @type {import('tailwindcss').Config} */

const { tokens } = require("./src/theme/tokens");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  darkMode: "class",

  theme: {
    extend: {
      borderRadius: {
        lg: `${tokens.radius.lg}px`,
      },

      fontFamily: {
        heading: ["Playfair_400"],
        body: ["Inter_400"],
        mono: ["Mono_400"],
      },

      colors: {
        background: tokens.colors.light.background,
        foreground: tokens.colors.light.foreground,

        card: tokens.colors.light.card,
        "card-foreground": tokens.colors.light.cardForeground,

        primary: {
          DEFAULT: tokens.colors.light.primary,
          foreground: tokens.colors.light.primaryForeground,
        },

        secondary: {
          DEFAULT: tokens.colors.light.secondary,
          foreground: tokens.colors.light.secondaryForeground,
        },

        muted: {
          DEFAULT: tokens.colors.light.muted,
          foreground: tokens.colors.light.mutedForeground,
        },

        accent: {
          DEFAULT: tokens.colors.light.accent,
          foreground: tokens.colors.light.accentForeground,
        },

        destructive: tokens.colors.light.destructive,

        border: tokens.colors.light.border,
        input: tokens.colors.light.input,
        ring: tokens.colors.light.ring,
      },
    },
  },

  plugins: [],
};