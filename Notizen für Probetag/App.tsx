import ListGroup from './components/ListGroup.tsx';
//import Alert from './components/Alert.tsx'
import EffectButton from './components/EffectButton';
import ContextConsumer from './components/ContextConsumer.tsx';
import {createContext} from 'react'

export const NameContext = createContext("");

function App(){
    let items = ['New York','San','Tok','Lon','Pa'];
    const handleSelectItem = (item: string) => {
      console.log(item);
    }
    //<Alert>ALARM ALARM <strong>!</strong></Alert>
  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <EffectButton/>
    <NameContext.Provider value={'Julian'}>
      <ContextConsumer/>
    </NameContext.Provider>
    </div>
}

export default App;