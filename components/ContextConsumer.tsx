import {useContext} from 'react'
import {NameContext} from './../App'

const ContextConsumer = () => {

    const name = useContext(NameContext);

  return (
    <div>Hello {`${name}`}</div>
  )
}

export default ContextConsumer