import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

import { TICK, LENGTH, gaussian } from "./base";

/**
 * The JavaScript pipeline operator proposal is
 * at an early stage and may never get added!
 */
const draw = brush => stream =>
  stream  // it replaces the pipe utility function
  |> take(LENGTH)
  |> map(num => num * 65 |> Math.floor |> brush.repeat);

const stream =
  interval(TICK)  // it replaces the pipe method
  |> map(gaussian)
  |> draw("•");

stream.subscribe(console.log);
