// Empty constructor
function ThalisPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
ThalisPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'ThalisPlugin', 'show', [options]);
}

// Installation constructor that binds ThalisPlugin to window
ThalisPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.thalisPlugin = new ThalisPlugin();
  return window.plugins.thalisPlugin;
};
cordova.addConstructor(ThalisPlugin.install);