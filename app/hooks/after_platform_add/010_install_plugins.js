#!/usr/bin/env node
  
//this hook installs all your plugins
  
// add your plugins to this list--either
// the identifier, the filesystem location
// or the URL
var pluginlist = [
    "org.apache.cordova.file",
    "org.apache.cordova.file-transfer"
];
  
// no need to configure below
  
var sys = require('sys');
var exec = require('child_process').exec;
  
function puts(error, stdout, stderr) {
    sys.puts(stdout)
}
var final_plug = "";
  
pluginlist.forEach(function(plug) {
    final_plug = final_plug + " " + plug;
});
console.log('Adding plugins: ' +  final_plug);
exec("cordova plugin add " + final_plug, puts);
