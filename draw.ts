import { canvas } from "./init.ts";

canvas.onDraw = (ctx) => {
  ctx.reset();

  ctx.fillStyle = "pink";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "blue";
  ctx.font = "30px Arial";
  ctx.textBaseline = "top";
  ctx.fillText("Hello World", 10, 10);
};
