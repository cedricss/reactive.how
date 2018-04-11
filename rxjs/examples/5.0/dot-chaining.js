import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

import { TICK, LENGTH, gaussian } from "./base";

/**
 * The legacy dot-chaining operators.
 * You should now use pipeable operators instead.
 */
const stream = Observable.interval(TICK)
  .map(gaussian)
  .map(num => "•".repeat(Math.floor(num * 65)))
  .take(LENGTH);

stream.subscribe(console.log);
