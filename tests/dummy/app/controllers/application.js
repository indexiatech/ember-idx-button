import Em from "ember";

export default Em.Controller.extend({
  message: void 0,
  actions: {
    onClick: function() {
      return this.set('message', 'Clicked!');
    },
    makeAsync: function(setPromise) {
      return setPromise(new Promise(function(res, rej) {
        return Em.run.later(function() {
          return res("YES");
        }, 1500);
      }));
    },
    makeAsyncFailed: function(setPromise) {
      return setPromise(new Promise(function(res, rej) {
        return Em.run.later(function() {
          return rej("Server error...");
        }, 1500);
      }));
    }
  }
});