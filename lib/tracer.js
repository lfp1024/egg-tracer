'use strict';

const uuid = require('uuid');

const TRACE_ID = Symbol('traceId');

class Tracer {
  constructor(ctx) {
    this.ctx = ctx;
    console.log('constructor')
  }

  get traceId() {
    if (!this[TRACE_ID]) {
      this[TRACE_ID] = uuid.v1();
      console.log('trace id', this[TRACE_ID])
    }
    return this[TRACE_ID];
  }
}

module.exports = Tracer;
