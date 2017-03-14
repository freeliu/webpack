module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise",
    "html"
  ],
  "globals": {
    "$": true,
    "PhotoSwipe": true,
    "PhotoSwipeUI_Default": true
  },
  "rules": {
    "no-native-reassign": ["error", {"exceptions": ["Object", "Window","window"]}]
  },
  "env": {
    "browser": true
    // "node": true
  }
};
