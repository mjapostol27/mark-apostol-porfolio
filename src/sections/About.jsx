import { ArrowBigLeft, ArrowRight, BookOpenCheck, GraduationCap, LaptopMinimalCheck, School, ShieldCheck } from "lucide-react";

const abouthighlights = [
    {
        icon: BookOpenCheck,
        title: "Education",
        description: "Bachelor of Science in Information Technology with Specialization in Mobile and Internet of Things"
    },
        {
        icon: School,
        title: "School",
        description: "National University – Fairview 2025 \nSumma Cum Laude"
    },
        {
        icon: LaptopMinimalCheck,
        title: "Internship",
        description: "6-month internship at GHD PTY LTD Philippines as Manual Software Quality Assurance"
    },
        {
        icon: ShieldCheck,
        title: "Certification",
        description: "- Microsoft Certified: Azure AI Fundamentals \n - IBM Skills Build: Agile and Operations Fundamentals"
    }
]

const skills = [
  "CSS",
  "Tailwind CSS",
  "React",
  "JavaScript",
  "PHP",
  "SQL",
  "Python",
  "Manual Testing",
  "Web Testing",
  "Agile / Scrum",
  "Problem Solving",
  "Figma",
  "Git",
  "GitHub"
];


export const About = () => {
    return (
    
    <section id="about" className=" py-25 relative overflow-hidden animation-delay-800">
        <div className="container mx-auto px-6 relative z-10">

            <h1 className="pb-25 text-2xl md:text-4xl  font-bold text-foreground animation-fade-in animationion-delay-100 flex gap-4">
               < ArrowRight className="mt-1"/> About<span className="font-serif italic font-normal text-primary"> Mark Apostol</span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 {/* left side */}
                 <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-primary">
                        Aspiring Software QA Engineer and
                        <span className="font-serif italic font-normal text-foreground"> Web Developer</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animation-fade-in animation-delay-200 text-justify">
                        <p>
                            My name is Mark Joddy Apostol, a detail-oriented Information Technology graduate with hands-on experience in Software Quality Assurance through internships. I have a strong foundation in system testing, documentation, and collaborative development using Agile/Sprint methodologies.
                        </p>
                        <p>
                            Building on consistent academic performance, I am committed to contributing effectively in professional environments while pursuing continuous growth and development in the IT field.
                        </p>
                    </div>
                 </div>

                 {/* right side */}
                 <div className="grid sm:grid-cols-2 gap-6">
                    {abouthighlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animation-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/40">
                                <item.icon className="w-6 h-6 text-foreground"/>
                             </div>
                             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                             <p className="text-sm text-muted-foreground" style={{ whiteSpace: "pre-line" }}>{item.description}</p>
                        </div>  
                    ))}
                 </div>
            </div>

            {/* skills */}
                <div className="mt-20 animation-fade-in animation-delay-500">
                    <p className="text-sm text-primary mb-10 text-center font-bold">
                                Skills and Competencies
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animation-marquee"> 
                                    {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};  