import logo from './logo.svg';
import temp from './temp.png';
import useImage from 'use-image';
import './App.css';
import { Stage, Layer, Rect, Text, Circle, Line, Image } from 'react-konva';

function App() {
  // const url = 'https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png';
  const url = 'temp.png'
  const [image] = useImage(url);

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Some text on canvas" fontSize={15} />
        <Rect
          draggable
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
        <Circle x={200} y={100} radius={50} fill="green" />
        <Line
          x={20}
          y={200}
          draggable
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />
        <Image draggable image={image} />
      </Layer>
    </Stage>
    </div>
  );
}

export default App;
