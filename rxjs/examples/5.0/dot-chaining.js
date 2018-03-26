import { Observable } from "rxjs/Observable"
import "rxjs/add/observable/interval"
import "rxjs/add/operator/map"
import "rxjs/add/operator/take"

import { TICK, LENGTH, gaussian } from "../util/base"

const stream = Observable.interval(TICK)
  .take(LENGTH)
  .map(gaussian)

stream.subscribe(console.log)
