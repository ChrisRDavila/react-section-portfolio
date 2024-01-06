import './index.scss';
import LogoTitle from '../../assets/images/logo-r.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
          <h1>Hi, <br/> I'm</h1>
          <img 
          src={LogoTitle} 
          alt='developer' 
          />
          <p>oss Davila</p>
          <br/>
          <h2>Full-stack developer / Chef / Student / Musician</h2>
            <Link to='/contact' className='flat-button'>
            CONTACT ME
            </Link>
        </div>
    </div>
  );
}

export default Home;