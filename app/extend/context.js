'use strict';

const TRACER = Symbol('tracer');

module.exports = {
  get tracer() {
    if (!this[TRACER]) {
      console.log('extend tracer1')
      this[TRACER] = new this.app.config.tracer.Class(this);
    }
    console.log('extend tracer2')
    return this[TRACER];
  },

  get traceId() {
    console.log('extend tracer3')

    return this.tracer.traceId;
  },
};
