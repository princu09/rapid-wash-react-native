module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['tailwindcss-react-native/babel'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
