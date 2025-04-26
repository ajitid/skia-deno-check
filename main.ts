import { WindowResizeEvent } from "jsr:@gfx/dwm";
import { mainloop, WindowCanvas } from "jsr:@gfx/dwm/ext/canvas";

const canvas = new WindowCanvas({
  title: "Skia Canvas",
  width: 800,
  height: 600,
  resizable: true,
});

canvas.onDraw = (ctx) => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.textBaseline = "top";
  ctx.fillText("Hello World", 10, 10);
};

addEventListener("resize", (_event) => {
  const ev = _event as WindowResizeEvent;
  console.log("dbg:", ev.width);
});

await mainloop(() => {
  canvas.draw();
});
