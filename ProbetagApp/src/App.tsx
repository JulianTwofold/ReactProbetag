import FetchApi from './components/FetchApi';

function App(){

  return <div>
    <strong>Lokales JSON lesen:</strong><br/><br/>
    <FetchApi local={true}/><br/><br/>
    <strong>API Anfrage mit Id:</strong><br/><br/>
    <FetchApi userId={1}/><br/><br/>
    <strong>API Anfrage Ohne Angabe:</strong><br/><br/>
    <FetchApi /><br/><br/>
    </div>
}

export default App;