import { BiSolidDashboard } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className="flex justify-between p-8">
      <h1 className="text-xl text-gray-300 font-bold">Energy Management App</h1>
      <div className="max-w-6xl bg-gray-100">
        <div className="uppercase flex flex-col text-gray-700">
          <BiSolidDashboard />
          Dashboard
        </div>
      </div>
    </div>
  );
};

export default Navbar;
