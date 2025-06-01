import FetchApi from './components/FetchApi';

function App(){

  return <div>
    <strong>API Anfrage Ohne Angabe:</strong><br/><br/>
    <FetchApi /><br/><br/>
    <strong>API Anfrage mit Id:</strong><br/><br/>
    <FetchApi userId={1}/><br/><br/>
    <strong>API Anfrage um alle User zu holen:</strong><br/><br/>
    <FetchApi userId={0}/><br/><br/>
    </div>
}

export default App;