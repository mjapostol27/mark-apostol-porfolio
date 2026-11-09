import {Button} from "@/components/Button";
import { ArrowDown, ChevronDown, Download, Github, Linkedin, View, Sun, Moon} from "lucide-react";
import { useState, useEffect } from "react";



export const Home = () => {


    // initialize theme state from localStorage
        const [isLight, setIsLight] = useState(() => {
            if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "light";
            }
            return false;
        });

        // sync to html connected to css
        useEffect(() => {
            const root = document.documentElement;

            if (isLight) {
            root.classList.add("light");
            localStorage.setItem("theme", "light");
            } else {
            root.classList.remove("light");
            localStorage.setItem("theme", "dark");
            }
        }, [isLight]);
        //change when the button is clicked
        const toggleTheme = () => {
            setIsLight((prev) => !prev);
        };

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* background image */}
        {/* <div className="absolute inset-0">
            <img src="" alt="background image" className="w-full h-full object-cover opacity-40 "/>
        </div> */}
        
        {/* gradient effect on background */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background-gradient/15 via-background/20 to-background"/> */}

        {/* Content */}
        <div className="container mx-auto px-6 pt-25 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left side */}
                
                <div className="space-y-8 order-2 lg:order-1">
                    {/* Header */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animation-fade-in">
                            Hi, I am <span className="text-primary">Mark</span> 
                            <br />
                            <span className="font-serif italic font-normal text-foreground">a BSIT graduate</span>

                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animation-fade-in text-justify">
                            BSIT graduate with practical experience in Software Quality Assurance, committed to delivering reliable software while continuously learning and developing websites and web applications.
                        </p>
                    </div>

                    {/* resume and know me more buttons */}
                    <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-600">

                        <button 
                            onClick={() => window.open("/resume/Mark_Joddy_Apostol_Resume.pdf", "_blank")}
                            className="relative bg-transparent border border-border
                                        text-foreground hover:border-primary transition-all
                                        duration-1000 focus:outline-none focus-visible:ring-
                                        focus-visible:ring-primary focus-visible:ring-offset-2
                                        disabled:opacity-50 disabled:cursor-not-allowed group
                                        px-8 py-4 text-lg font-medium rounded-full overflow-visible
                                        animate-border ">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <View className="w-5 h-5"/>View Resume
                            </span>
                        </button>



                    <Button 
                        size="lg" onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}>
                        Know me more <ArrowDown className="w-5 h-5"/>
                    </Button>
                    
                    {/* lightmode and darkmode switch */}
                    <button
                        onClick={toggleTheme}
                        className="p-4 rounded-full border border-border hover:bg-primary transition"
                    >
                        {isLight ? <Moon size={18} /> : <Sun size={18} />}
                    </button>


                    </div>

                    {/* Social buttons */}
                    <div className="flex items-center gap-3 animation-fade-in animation-delay-800">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} className="p-2 rounded-full glass hover: bg-primary/10 hover:text-primary transition-all duration-300">
                                <social.icon  className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>

                {/* right side */}

                {/* homescreen photo */}
                <div className="relative animation-fade-in order-1 lg:order-2">
                    <div className="relative max-w-md mx-auto">

                        {/* the picture will go in the top */}
                        <div className="relative block">
                            <img src="/home-image3.png" alt="home-page-photo" className="w-72 sm:w-80 md:w-96 lg:w-full max-w-md mx-auto"/>

                            {/* Floating badge*/}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animation-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse "/>
                                    <span className="text-sm font-normal">Available for work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};