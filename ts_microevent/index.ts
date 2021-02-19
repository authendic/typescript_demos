import {Event, EventInterface} from 'microevent.ts';

const event = new Event<number>();
event.addHandler((e, o)=>{
  console.log("dispatch:", e, "context:",  o.k);
}, {"k":2});
event.addHandler((e, o)=>{
  console.log("dispatch:", e, "context:", o.g);
}, {"g":3});
event.dispatch(1);
