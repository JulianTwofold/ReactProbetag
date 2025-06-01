import FetchApi from './components/FetchApi';

function App(){

  return <div>
    <strong>API Anfrage Ohne Angabe:</strong><br/><br/>
    <FetchApi /><br/><br/>
    <strong>API Anfrage mit Id:</strong><br/><br/>
    <FetchApi userId={4}/><br/><br/>
    </div>
}

export default App;