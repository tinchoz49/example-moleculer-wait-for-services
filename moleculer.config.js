'use strict';

const Moleculer = require('moleculer');

module.exports = {
  namespace: 'dev',
  nodeID: process.pid,

  logger: true,
  logLevel: 'info',
  logFormatter: 'default',

  transporter: 'NATS',

  serializer: null,

  requestTimeout: 0 * 1000,
  requestRetry: 0,
  maxCallLevel: 0,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,

  disableBalancer: false,

  registry: {
    strategy: Moleculer.Strategies.RoundRobin,
    preferLocal: true
  },

  circuitBreaker: {
    enabled: false,
    maxFailures: 3,
    halfOpenTime: 10 * 1000,
    failureOnTimeout: true,
    failureOnReject: true
  },

  validation: true,
  validator: null,
  metrics: false,
  metricsRate: 1,
  statistics: false,
  internalActions: true,

  hotReload: false
};
