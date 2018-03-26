import { interval } from "rxjs/observable/interval"
import { map, take } from "rxjs/operators"

import { TICK, LENGTH, gaussian } from "./base"

const draw = brush =>
  map(num => num * 65 |> Math.floor |> brush.repeat)

const stream =
  interval(TICK)
  |> take(LENGTH)
  |> map(gaussian)
  |> draw("•")

stream.subscribe(console.log)
