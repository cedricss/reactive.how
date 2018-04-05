import { interval, pipe } from "rxjs";
import { map, take } from "rxjs/operators";

import { TICK, LENGTH, gaussian } from "./base";

/**
 * Build custom and reusable operators
 * from other pipeable operators
 * with the pipe utility function
 */
const draw = brush =>
  pipe(
    take(LENGTH),
    map(num => brush.repeat(Math.floor(num * 65)))
  );

/**
 * Compose operators with the
 * pipe method built into Observable
 */
const stream = interval(TICK).pipe(
  map(gaussian),
  draw("•")
);

stream.subscribe(console.log);
