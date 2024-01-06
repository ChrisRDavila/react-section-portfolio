import './index.scss'
import GuitarImage from '../../../assets/images/guitar.png'

const Guitar = () => {
  return (
    <div className='guitar-container'>
      <img className="guitar-logo" src={GuitarImage} alt="guitar"/>
    </div>
  )
}

export default Guitar;