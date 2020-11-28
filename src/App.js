import { Nav } from 'react-bootstrap';
import useImage from 'use-image';
import React from 'react';
import './App.css';
import Editor from './Components/Editor/Editor';
import NavBar from './Components/Nav';

function App() {

  return (
    <div>
      <NavBar/>
      <Editor/>
    </div>
  );
}

export default App;
