import { WindowCanvas } from "jsr:@gfx/dwm/ext/canvas";

export const canvas = new WindowCanvas({
  title: "Skia Canvas",
  width: 800,
  height: 600,
  resizable: true,
  transparent: true,
});
