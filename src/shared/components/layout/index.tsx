//Components
import { Outlet } from 'react-router';
import { Header } from '../../../widgets/header';
import { Navbar } from '../../../widgets/navbar';


export const Layout: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className='flex'>
        <Navbar/>
        <div className='flex items-center w-full justify-center'>
        <Outlet/>
        </div>
      </div>
    </div>
  );
};
