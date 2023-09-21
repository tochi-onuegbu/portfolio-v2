import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./public/**/*.{png,jpg,jpeg,gif,svg,ico}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          'Matter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #718096, #4A90E2)',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Inter, sans', // Set the desired font family for prose
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;





