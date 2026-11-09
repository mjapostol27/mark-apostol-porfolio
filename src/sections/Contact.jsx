import { Mail, MapPinHouseIcon, Phone, ArrowRight } from "lucide-react";
import {Button} from "@/components/Button";

const contactInfo = [
{
    icon:  Mail,
    label: "Personal Email",
    value: "markjoddy27@gmail.com",
    href: "mailto:markjoddy27@gmail.com"
},
{
    icon: Phone,
    label:"Mobile Number",
    value: "+63 927 191 6119",
    href: "#"
},
{
    icon: MapPinHouseIcon,
    label:"Location",
    value: "Caloocan, Metro Manila",
    href: "#"
}
]


export const Contact = () => {

    return (
        <section id="contacts" className="py-35 relative overflow-hidden">
            <div className="container mx-auto relative animation-fade-in animation-delay-200">

                    {/* Grid container for form + contact info */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto items-center">

                    {/* Contact information */}
                    <div className="animation-fade-in animation-delay-400 flex">
                        <div className="pt-10 p-5 space-y-4">
                            <div>
                                <h2 className="text-foreground text-4xl md:text-5`````xl font-bold tracking-tight flex items-center gap-2">
                                   <ArrowRight className="w-10 h-10 text-foreground" /> <span className="font-serif italic font-normal text-primary">Get In Touch</span>
                                </h2>
                                <p className="text-xs md:text-sm pt-3 pb-10 text-muted-foreground">
                                    You can reach me out with this contact information
                                </p>
                            </div>
                        
                        {contactInfo.map((info, index) => (
                            <a
                            key={index}
                            href={info.href}
                            className="flex items-center gap-6 p-2 rounded-lg transition-all"
                            >
                            <info.icon className="w-5 h-5 text-primary" />
                            <div>
                                <p className="text-lg font-bold">{info.label}</p>
                                <p className="text-xs pt-2 text-muted-foreground">{info.value}</p>
                            </div>
                            </a>
                        ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="glass p-7 m-3 animation-fade-in animation-delay-400 rounded-2xl">

                        <div>
                            <p className="flex text-md pb-15 text-primary font-normal justify-center">
                                If you have any concerns you can message here directly
                            </p>
                        </div>

                        <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                            id="name"
                            type="text"
                            required
                            placeholder="Fullname"
                            className="text-sm w-full px-4 py-2 bg-surface rounded-lg border border-border focus:ring-1 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                            id="email"
                            type="email"
                            required
                            placeholder="example@email.com"
                            className="text-sm w-full px-4 py-2 bg-surface rounded-lg border border-border focus:ring-1 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                            rows={5}
                            id="message"
                            required
                            placeholder="Write your message"
                            className="text-sm w-full px-4 py-2 bg-surface rounded-lg border border-border focus:ring-1 focus:border-primary outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" size="sm">
                            Send your Message
                            </Button>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};