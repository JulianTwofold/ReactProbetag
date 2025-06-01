import FetchApi from './components/FetchApi';
import './index.css';
 
function App(){

  return <div>
    <p>Lokales JSON lesen:</p><br/>
    <FetchApi local={true}/><br/><br/>
    <p>API Anfrage mit Id:</p><br/><br/>
    <FetchApi userId={1}/><br/><br/>
    <p>API Anfrage Ohne Angabe:</p><br/>
    <FetchApi /><br/><br/>
    </div>
}

export default App;