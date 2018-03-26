import { interval } from "rxjs/observable/interval"
import { map, take } from "rxjs/operators"

import { TICK, LENGTH, gaussian } from "./base"

const draw = brush =>
  map(num => brush.repeat(Math.floor(num * 65)))

const stream = interval(TICK).pipe(
  take(LENGTH),
  map(gaussian),
  draw("•")
)

stream.subscribe(console.log)
