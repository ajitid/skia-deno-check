import { mainloop } from "jsr:@gfx/dwm/ext/canvas";

import { canvas } from "./init.ts";
import "./window-events.ts";
import "./input-events.ts";
import "./draw.ts";

await mainloop(() => {
  canvas.draw();
});
