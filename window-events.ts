import { getMonitors, WindowResizeEvent } from "jsr:@gfx/dwm";

addEventListener("resize", (_event) => {
  const ev = _event as WindowResizeEvent;
  console.log("dbg:", ev.width);
  console.log("dbg:", getMonitors());
});
