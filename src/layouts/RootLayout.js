import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () =>{
    return (
        <div className="root">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout;