import { Nav } from 'react-bootstrap';
import useImage from 'use-image';
import React from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import NavBar from './Components/Nav';

function App() {

  // const handleExport = () => {
  //   const uri = stageRef.current.toImage();
  //   console.log(uri);
  //   // we also can save uri as file
  //   // but in the demo on Konva website it will not work
  //   // because of iframe restrictions
  //   // but feel free to use it in your apps:
  //   // downloadURI(uri, 'stage.png');
  // };

  return (
    <div>
      <NavBar/>
      <Editor/>
    </div>
  );
}

export default App;
