var five = require("johnny-five");
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

five.Board().on("ready", function() {
  var servo = new five.Servo(10);

  rl.setPrompt("SERVO TEST (0-180)> ");
  rl.prompt();

  rl.on("line", function(line) {
    servo.to(+line.trim());
    rl.prompt();
  }).on("close", function() {
    process.exit(0);
  });
});
