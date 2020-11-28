import useImage from 'use-image';
import './App.css';
import { Stage, Layer, Rect, Text, Circle, Line, Image } from 'react-konva';

function App() {

  const handleExport = () => {
    const uri = stageRef.current.toImage();
    console.log(uri);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // downloadURI(uri, 'stage.png');
  };


  const Mockup = () => {
    const [image] = useImage('https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png');
    return <Image width={400} height={600} draggable image={image} />;
  };

  const Screenshot = () => {
    const [image] = useImage('https://raw.githubusercontent.com/ZachSoles/My-Portfolio/master/src/Resources/nyx1.png');
    return <Image width={250} height={525} draggable image={image} />;
  };
  return (
    <div class="temp">
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text draggable text="Welcome to Koda!" fontSize={25} />
      </Layer>
      <Layer>
          <Screenshot/>
          <Mockup />
        </Layer>
    </Stage>
    </div>
  );
}

export default App;
