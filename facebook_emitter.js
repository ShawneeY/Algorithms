//Write an emitter class:
/*
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); 
// `sub` is the reference returned by `subscribe` above
*/

class Emitter{
  // event_name => [callback]
  constructor(events = {}){
    this.events = events;
  }

  emit(event_name, ...params) {
    (this.events[event_name] || []).forEach(func => func(...params));
    console.log("############")
  }

  subscribe(event_name, callback) {
    (this.events[event_name] || (this.events[event_name] = [])).push(callback);
  
    return {
      release: () => {
        this.events[event_name].splice(this.events[event_name].indexOf(callback), 1);
      }
    };

  }
}

const emitter = new Emitter();

const sub1 = emitter.subscribe("a", (...params) => {
  console.log("a1", params);
});

const sub2 = emitter.subscribe("a", (...params) => {
  console.log("a2", params);
});

emitter.emit("a", 1,2,3);

sub1.release();

emitter.emit("a", 1,2,3);


/*
Notes:
1. Can have another Subscription
2. Can have subscripe return an obj has a release func


*/