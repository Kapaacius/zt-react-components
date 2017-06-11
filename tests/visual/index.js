const server = require("node-http-server");
const backstop = require("backstopjs");

server.deploy({port: 5555});

backstop("test")
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
