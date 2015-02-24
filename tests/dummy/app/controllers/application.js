import Em from "ember";

export default Em.Controller.extend({
  message: void 0,
  someState: 'default',
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
    },
    someButton: function() {
      var promise = new Promise(function(res, rej) {
        return Em.run.later(function() {
          return res("YES");
        }, 1500);
      });
      this.set('someState', 'executing');
      this.set('somePromise', promise);
    }
  }
});