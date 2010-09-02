require.paths.unshift(__dirname + "/../lib/");

var	sys = require("sys")
  ,	cornify = require('cornify');

sys.puts(cornify.addCorn());