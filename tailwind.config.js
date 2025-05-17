// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(avatar|button|chip|drawer|input|pagination|popover|radio|skeleton|ripple|spinner|modal|form).js"
],
  theme: {
    extend: {},
  },
  darkMode: "class",
};