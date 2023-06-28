// import { HiMenuAlt4 } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../assets/ethereum-icon.svg';

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const navLinks = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

const NavBar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer " />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navLinks.map(item => (
          <NavbarItem key={item} title={item} />
        ))}
        <li className="bg-[#454A75] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#62688F]">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
