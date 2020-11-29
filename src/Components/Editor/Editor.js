// import React from 'react';
// import { Stage, Layer, Text, Image, Group } from 'react-konva';
import useImage from 'use-image';
import './Editor.css';

import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Group, Text, Rect, Transformer, Image } from "react-konva";


class TransformerComponent extends React.Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
    this.checkNode();
  }

  onTransformStart() {
    console.log("onTransformStart");
  }

  onTransform() {
    console.log("onTransform");
  }

  onTransformEnd() {
    console.log("end transform");
  }
  checkNode() {
    // here we need to manually attach or detach Transformer node
    const stage = this.transformer.getStage();
    const { selectedShapeName } = this.props;

    var selectedNode = stage.findOne("." + selectedShapeName);
    // do nothing if selected node is already attached
    if (selectedNode === this.transformer.node()) {
      return;
    }
    if (selectedNode) {
      const type = selectedNode.getType();
      if (type != "Group") {
        selectedNode = selectedNode.findAncestor("Group");
      }
      // attach to another node
      this.transformer.attachTo(selectedNode);
    } else {
      // remove transformer
      this.transformer.detach();
    }

    this.transformer.getLayer().batchDraw();
  }
  render() {
    return (
      <Transformer
        ref={(node) => {
          this.transformer = node;
        }}
        transformstart={this.onTransformStart}
        transform={this.onTransform}
        transformend={this.onTransformEnd}
      />
    );
  }
}

class Editor extends Component {
  state = {
    selectedShapeName: ""
  };
  handleStageMouseDown = (e) => {
    // clicked on stage - cler selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ""
      });
      return;
    }
    // clicked on transformer - do nothing
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
      return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    // const rect = this.state.rectangles.find(r => r.name === name);
    if (name) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ""
      });
    }
  };

  
  render() {

    const Mockup = () => {
      const [image] = useImage('https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png');
      return <Image name="mock" width={400} height={600} image={image} />;
    };
    
    const Screenshot = () => {
      const [image] = useImage('https://raw.githubusercontent.com/ZachSoles/My-Portfolio/master/src/Resources/nyx1.png');
      return <Image name="shot" width={250} height={525} image={image} />;
    };
      
    return (
      <div class="content">
        <Stage
          width={600}
          height={600}
          onMouseDown={this.handleStageMouseDown}
        >
          <Layer>
            <Group
              name="Screenshot"
              x={225}
              y={295}
              width={120}
              height={60}
              draggable
            >
              <Screenshot/>
            </Group>
            <Group
              name="Mockup"
              x={225}
              y={295}
              width={120}
              height={60}
              draggable
            >
              <Mockup/>
            </Group>
            <TransformerComponent
              selectedShapeName={this.state.selectedShapeName}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

// function Editor() {
//   // const url = 'https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png';
//   // const [image] = useImage(url);

//   const Mockup = () => {
//     const [image] = useImage('https://www.searchpng.com/wp-content/uploads/2018/12/Apple-iPhone-XR-672x1024.png');
//     return <Image name="mock" width={400} height={600} draggable image={image} />;
//   };
  
//   const Screenshot = () => {
//     const [image] = useImage('https://raw.githubusercontent.com/ZachSoles/My-Portfolio/master/src/Resources/nyx1.png');
//     return <Image name="shot" width={250} height={525} draggable image={image} />;
//   };

//   return (
//     <div class="content">
//       <Stage width={window.innerWidth/2} height={window.innerHeight*.9}>
//         <Layer>
//           <Text name="text" draggable text="Some text on canvas" fontSize={15} />
//           {/* <Image draggable image={image} /> */}
//           <Group
//             x={100} 
//             y={100}
//           >
//             <Screenshot/>
//             <Mockup/>
//           </Group>
//         </Layer>
//       </Stage>
//     </div>
//   );
// }

export default Editor;
