import React, { useContext, useEffect, useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { Drawer, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ExampleContext } from "../../context/example";
function Navigasi() {
  const [open, setOpen] = useState(false);
  const AuthenticationUser = useContext(ExampleContext)
  const Navigate = useNavigate()
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let sb = true
    AuthenticationUser.status ? message.success('selamat datang') : Navigate('/Auth/Login')
    return () => sb = false
    
  }, [AuthenticationUser.status])
  
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="ml-64 md:order-2">
        <Link to={'../Auth/Login'}>
        <Button onClick={() => AuthenticationUser.setter(false)} className="rounded-full">Login / Register</Button>
        </Link>
        </div>
        <div className="block md:hidden ">
          <button
            onClick={() => showDrawer()}
            type="button"
            className="bg-gray-200 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Drawer
            title="Navigasi"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Drawer>
        </div>
        {/* <Navbar.Toggle className='transition-all duration-200' /> */}
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigasi;
