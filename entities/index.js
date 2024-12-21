import Matter from "matter-js";
import Bird from "../components/Bird.js";

export default restart => {
  const engine = Matter.Engine.create({enableSleeping: false});
  const world = engine.world;

  world.gravity.y = 0.4;
  return { physics: {engine, world}, birr: Bird(world, { height: 50, width: 50}, "orange", { x: 50, y: 200 }) }
}
