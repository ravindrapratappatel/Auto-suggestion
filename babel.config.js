module.exports = {
 
  presets: ['module:metro-react-native-babel-preset'],
  //presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
 
};
