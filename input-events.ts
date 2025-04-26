import { WindowMouseEvent } from "jsr:@gfx/dwm";

addEventListener("click", (_event) => {
  const ev = _event as WindowMouseEvent;
  console.log("dbg:", ev.x);
});
