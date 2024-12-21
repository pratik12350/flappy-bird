import Matter from "matter-js";
import {View, StatusBar} from "react-native"

const BirdRenderer = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.min.y - props.body.bounds.y;

  const BodyPosX = props.body.position.x - width / 2;
  const BodyPosY = props.body.position.y - height / 2;

  const color = props.color;

  return (
  <View style={{
      position: "absolute",
      left: BodyPosX,
      top: BodyPosY,
      width: width,
      height: height,
      borderWidth: 1,
      borderColor: color,
      borderStyle: "solid"
    }}/>
  )
}


export default (world, size, color, pos) => {
  const bird = Matter.Bodies.rectangle(pos.x, pos.y, size.height, size.width, {label: "Bird"})

  Matter.World.add(world, bird);

  return {
    body: bird,
    color,
    pos,
    renderer: <BirdRenderer/>
  }
}
