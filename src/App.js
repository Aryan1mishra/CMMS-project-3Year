import {Route,Routes} from 'react-router-dom';
import DashBoard from "./components/dashbord/DashBoard";
import Navbar from "./components/dashbord/Navbar";
import UserProfile from "./components/dashbord/UserProfile";
import Permission from './components/dashbord/Permission';
import AllPermisiion from './components/dashbord/AllPermisiion';
import LeavePermission from './components/dashbord/LeavePermission';
import HostelStay from './components/dashbord/HostelStay';
import LateEntry from './components/dashbord/LateEntry';
// import Login from './components/Login';
// import Register from './components/Register';
function App() {
  return (
    <div>
      <div className=" w-full flex">
      <Navbar/>
      <main className="grow">
        <Routes>
        <Route path="/" element={<DashBoard/>}></Route>
        <Route path="/permission" element={<Permission/>}></Route>
        <Route path="/user" element={<UserProfile/>}></Route>
        <Route path="/permission" element={<AllPermisiion/>}></Route>
        <Route path="/leave" element={<LeavePermission/>}></Route>
        <Route path="/stay" element={<HostelStay/>}></Route>
        <Route path="/late" element={<LateEntry/>} ></Route>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/> */}
        </Routes>
        
      </main >
    </div>

    </div>
    
    // <div className='text-white h-[100vh] flex justify-center items-center bg-cover bg-bgImage'  >
      
    // <Routes>
    //   
    // </Routes>
    // </div>
  );
}

export default App;
