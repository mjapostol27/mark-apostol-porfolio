import {Button} from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navList = [
    {href: "#", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contacts", label: "Contacts"},
];



export const Navbar = () => {
    const [ifMobileNavOpen, setIsMobileNavOpen] = useState(false)
    return (
        <header className=" glass fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* logo */}
                <a href="#" className="px-5">
                    <img src="/Logo/m-logo.png" alt="M Logo" className="w-12"/>
                </a>

                {/* desktop navbar */}
                
                <div className="hidden md:flex items-center gap-1">
                    <div className="flex items-center gap-3">
                       {navList.map((link, index) => (
                        <a href={link.href} key={index} className="px-2 py-2 text-sm text-foreground hover:text-primary border-b-3  border-transparent hover:border-primary transition-all">
                            {link.label}
                        </a>
                       ))} 
                    </div>
                </div>

                {/* contact button */}

                <div className="hidden md:flex">
                    <a href="#contacts"><Button size="sm">Contact Me</Button></a>
                </div>

                {/* mobile navigation button */}
                
                <button className="md:hidden p-2 text-foreground cursor-pointer" 
                onClick={() =>setIsMobileNavOpen((prev) => !prev)}>
                    {ifMobileNavOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* mobile navbar */}
            {ifMobileNavOpen && (
            <div className="md:hidden glass mx-7 my-2 rounded-xl animation-fade-in-mobile">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-7">
                    {navList.map((link, index) => (
                        <a href={link.href} 
                            key={index} 
                            onClick={() => setIsMobileNavOpen(false)} //automatically closes the mobile navbar
                            className="text-sm text-foreground hover:text-primary border-b-3 w-fit border-transparent hover:border-primary transition-all">
                            {link.label}
                        </a>
                       ))} 
                       

                       <Button onClick={() => setIsMobileNavOpen(false)} size="sm">Contact Me</Button>
                </div>
            </div>
            )}
        </header>
    );
};