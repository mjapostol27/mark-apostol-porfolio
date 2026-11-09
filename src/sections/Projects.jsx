
// import { ArrowUpRight, Section } from "lucide-react";

const projects = [
    {
        title: "AquaSense",
        description: "Aqua Sense is a water monitoring system that detects and monitors water quality using different sensors integrated into a single device, which can be accessed and monitored through a smartphone.",
        description2: "Aqua Sense is a water monitoring system designed to detect, analyze, and continuously monitor water quality using multiple sensors integrated into a single device. It measures key parameters such as pH levels, turbidity, temperature, and other indicators to ensure the safety and cleanliness of water. The system is connected to a mobile application, allowing users to conveniently access real-time data, receive alerts, and monitor water conditions remotely through their smartphones. This project was recognized for its innovation and impact, earning 3rd place in the DOST NCR Reinventing Cities 2025.",
        image:"/projects/AquaSense.png",
        tags: ["Kotlin", "C++", "Firebase"]
    },
        {
        title: "NUFVAMRSIM",
        description: "NUFV Asset Request Management System and Inventory Management is a desktop application designed for requesting asset supplies and tracking inventory of all assets at the National University Fairview campus.",
        image:"/projects/NUFAROSIM.png",
        tags: ["VB.Net", "MySQL"]
    },
        {
        title: "Jamela's Cooking",
        description: "Jamela's Cooking is a simple cookbook website that showcases famous dishes from the Philippines, including their ingredients, tutorial videos, and a brief description and history of each dishone.",
        image:"/projects/Jamela.png",
        tags: ["HTML", "JavaScript","CSS"]
    },
]



export const Projects = () => {
    
    return (
        <section id="projects" className="py-25 relative overflow-hidden animation-delay-800">
            <div className="container mx-auto px-6 relative z-10" >
                {/* header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mt-4 mb-6 animation-fade-in">
                           <span className="font-serif italic font-normal text-primary">All Projects</span>
                    </h2>
                    <p className="text-muted-foreground animation-fade-in animation-delay-200">
                        Here are some of the projects I completed during my academic years in college.
                    </p>
                </div>

                {/* projects section */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((projects,idx) =>(
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animation-fade-in md:row-span-1" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            {/* image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-linear-to-t form-card via-card-50 to tranparent opacity-60"/>
                                {/* button overlay */}
                                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 color transition-opacity duration-1">
                                    <a className="p-3 rounded-full glass hover:bg-primary hover:text-black transition-all">
                                        <ArrowUpRight className="w-5 h-5 text-black"/>
                                    </a>
                                </div> */}
                            </div>
                            {/* title and content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover: text-foreground">{projects.title}</h3>
                                    {/* <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/> */}
                                </div>
                                <p className="text-muted-foreground text-sm">{projects.description}</p>
                                <div className="flex flex-wrap gap-2">{projects.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};