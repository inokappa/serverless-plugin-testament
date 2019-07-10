'use strict';

const opener = require("opener");

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      'after:deploy:deploy': this.afterDeployTestament.bind(this),
    };
  }

  afterDeployTestament() {
    this.serverless.cli.log(this.serverless.service.custom.testament.message);
    // opener(this.serverless.service.custom.testament.url);
  }
}

module.exports = ServerlessPlugin;
