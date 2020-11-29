import React from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';
import useImage from 'use-image';
import './Editor.css';

function Editor() {
  const url = 'https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png';
  const [image] = useImage(url);

  return (
    <div class="content">
      <Stage width={window.innerWidth/2} height={window.innerHeight/2}>
        <Layer>
          <Text draggable text="Some text on canvas" fontSize={15} />
          <Image draggable image={image} />
        </Layer>
      </Stage>
    </div>
  );
}

export default Editor;
