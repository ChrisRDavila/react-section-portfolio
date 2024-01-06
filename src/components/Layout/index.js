import './index.scss';
import SideBar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import Guitar from './Guitar';

const Layout = () => {
  return (
    <div className='App'>
    <div className='side-guitar'>
      <Guitar/>
    </div>
  <SideBar />
  <div className='page'>
    <span className='tags top-tags'>&lt;body&gt;</span>

    <Outlet />

    <span className='tags bottom-tags'>
      &lt;/body&gt;
      <br />
      <span className='bottom-tag-html'>&lt;/html&gt;</span>
      </span>
    </div>
  </div>
  );
}

export default Layout;