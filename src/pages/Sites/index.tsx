import { Card, Container } from './style'
import wave from '../../assets/wave.png'

const Molde = () => {
  return (
    <Container>
      <img className='left-Top' src={wave}/>
      <img className='right-Top' src={wave}/>
      <img className='left-bottom' src={wave}/>
      <img className='right-bottom' src={wave}/> 

      <Card>
        <div>
          <div>
            <h2>Humanidades</h2>
          </div>

          
        </div>
      </Card>

    </Container>
  )
}

export default Molde