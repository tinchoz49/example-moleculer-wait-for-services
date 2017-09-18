let { ServiceBroker } = require('moleculer');

// Create broker
let broker = new ServiceBroker({
  namespace: 'dev',
  nodeID: 'node-' + process.pid,
  transporter: 'NATS',

  requestTimeout: 1000,

  disableBalancer: true,

  metrics: true,

  circuitBreaker: {
    enabled: true,
    maxFailures: 3
  },
  logger: console,
  //logLevel: "debug",
  logFormatter: 'simple'
});

broker.createService({
  name: 'greeter-two',

  started() {
    // this didn't work
    return this.broker.waitForServices('greeter').then(() => {
      this.broker.call('greeter.hello');
    });
  }
});

// this is working
broker.start();
