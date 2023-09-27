"use client"
import Link from "next/link";
import styles from "../styles/header.module.css";
import React, { useState, useEffect, useRef } from "react";
import { Yellowtail } from '@next/font/google'

const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: '400',
})
export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // showmenu is a variable (initially set to false) |setshowmenu is a function that will update the variable
  const menuRef = useRef<HTMLDivElement | null>(null); //Hook to create a 'reference' to a DOM element, menuRef is assigned to the outermost div of the burger menu (ref={menuRef})
  const openMenuRef = useRef<HTMLDivElement | null>(null);

  // function that toggles show menu between true and false
    const toggleMenu = (): void  => {
    setShowMenu(prev => !prev); //toggle previous state to new state
  };

  // The useEffect Hook performs side effects in function components, data fetching, subscriptions, or manually changing the DOM
  // The function passed to useEffect will run after the render is committed to the screen.
  useEffect(() => {
    //to handle the logic for clicks that happen outside of the menu
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        openMenuRef.current &&
        !openMenuRef.current.contains(event.target as Node)
      ) {
        // if menu is open and click was outside menu, close it (the event.target is not contained within menuRef.current)
        setShowMenu(false);
      }
    };

    //The event listener will listen for a mousedown event, it will call the handleOutsideClick function.
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup - remove the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);
  //   ^^   This tells React to only run the useEffect function when the showMenu variable changes.

  //scroll listener
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window.scrollY;
      if (offset) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.banner} ${isScrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={"logo text-xl  font-extrabold leading-tight transform scale-y-125"}>
          {" "}
          <h1 className= {yellowtail.className}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SHARP  TRUCK <br></br>TRAILER REPAIR &nbsp;INC.</h1>
        </Link>
        <div
          className={`${styles.hamburgerMenu} ${showMenu ? styles.open : ""}`}
          onClick={toggleMenu}
          ref={menuRef}
        >
          {/* If showMenu is true,  styles.hamburgerMenu styles.open , otherwise styles.hamburgerMenu */}

          {/* `${}` template literal: allow you to embed expressions inside your strings, 
                    anything inside `${}` will be evaluated as a JavaScript expression. */}

          {/* showMenu ? styles.open : '' is a ternary operator. This is a shortcut for an 
                    if-else statement. It reads like this: "If showMenu is true, use styles.open, otherwise use an empty string. */}

          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link className={styles.link} href="/">Home</Link>
            </li>            
            <li>
              <Link className={styles.link} href="/ServiceArea">Service Area</Link>
            </li>
            <li>
              <Link className={styles.link} href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link className={styles.link} href="/ContactUs">Contact</Link>
            </li>
        <Link href="https://buy.stripe.com/test_00g14J2b97v1gzm9AA">
          <button className="bg-[#fba133] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
           Payment Options
          </button>
        </Link>
           
          </ul>
        </nav>

      </div>

      <nav
        className={`${styles.smallnavbar} ${!showMenu ? styles.close : ""}`}
        ref={openMenuRef}
      >
        <ul>
          <li>
            <Link className={styles.link} href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <div className={styles.lines}></div>
          <li>
          <Link className={styles.link} href="/ServiceArea" onClick={toggleMenu}>
            Service Area
            </Link>
          </li>
          <div className={styles.lines}></div>
          <li>
            <Link className={styles.link} href="/AboutUs" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <div className={styles.lines}></div>
          <li>
            <Link className={styles.link} href="/ContactUs" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          
          <div className={styles.lines}></div>
          <Link href="https://buy.stripe.com/test_00g14J2b97v1gzm9AA">
          <button className="bg-[#fba133] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
           Payment Options
          </button>
        </Link>
        </ul>
      </nav>
    </header>
  );
} //hide menu on bigger screens
