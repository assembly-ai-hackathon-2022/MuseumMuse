module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanOCR'],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: './.env',
      },
    ],
  ],
};
