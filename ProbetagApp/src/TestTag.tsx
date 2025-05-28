import {createContext} from 'react'
//import { useState } from "react";
import FetchApi from './components/FetchApi';

export const NameContext = createContext("");

function App(){

  return <div>
    <FetchApi />
    </div>
}

export default App;