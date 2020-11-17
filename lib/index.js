'use strict';

const cacheTracer = Symbol('before_ready_tracer');
const isReady = Symbol.for('egg_tracer_is_ready');

module.exports = {
  get tracer() {
    if (this[isReady]) {
      console.log('index tracer 1')
      return new this.config.tracer.Class({
        app: this,
      });
    }

    if (!this[cacheTracer]) {
      console.log('index tracer 2')
      this[cacheTracer] = new this.config.tracer.Class({
        app: this,
      });
    }
    console.log('index tracer 3')
    return this[cacheTracer];
  },
};
