import { Outlet } from 'react-router-dom';
import Navber from '../components/shared/navber/Navber';
import Banner from '../components/banner/Banner';

const Main = () => {
    return (
        <div className='xl:w-9/12 lg:w-10/12 mx-auto lg:px-0 px-5'>
        <Navber/>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;