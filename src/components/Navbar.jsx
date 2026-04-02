import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-4 transition-colors duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='flex text-[16px] font-bold text-white sm:text-[18px]'>
            Avinash &nbsp;
            <span className='sm:block hidden'> | Full Stack Developer | Software Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            type='button'
            className='flex h-10 w-10 items-center justify-center rounded-full bg-black/20'
            aria-expanded={toggle}
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt=''
              className='h-[24px] w-[24px] object-contain'
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-16 z-10 mx-4 my-2 min-w-[180px] rounded-xl border border-white/10 black-gradient p-6 shadow-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
