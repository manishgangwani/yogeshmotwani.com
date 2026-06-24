import { ArrowRight, Sparkles, Code, Palette, Lightbulb, Mail, Linkedin, Twitter, Github, Download, Award, Briefcase, GraduationCap, Lock, X } from "lucide-react";
import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";

export default function Index() {

  const [lockedProject, setLockedProject] = useState<{ href: string; title: string } | null>(null);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleProjectClick = (project: { href: string; title: string; passcode?: string }) => {
    if (project.passcode) {
      setLockedProject({ href: project.href, title: project.title });
      setPasscode("");
      setPasscodeError(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      window.open(project.href, "_blank", "noopener,noreferrer");
    }
  };

  const handlePasscodeSubmit = () => {
    if (passcode === "1994") {
      window.open(lockedProject!.href, "_blank", "noopener,noreferrer");
      setLockedProject(null);
    } else {
      setPasscodeError(true);
      setPasscode("");
    }
  };

  const projects = [
    { title: "Roku on Web", category: "Roku", tags: ["Mobile", "Web UX"], href: "https://www.figma.com/deck/3isRZVBdJ5FOfNG6gvwLEW/Roku-on-Web-UX?node-id=3-116&viewport=-95%2C-40%2C0.46&t=VBzkeED6AYS6gocb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", image: "/images/Roku Web.png", passcode: "1994" },
    { title: "Roku Search Feeds", category: "Roku", tags: ["Web portal", "B2B UX"], href: "/projects/Search feed.pdf", image: "/images/Search feed.png" },
    { title: "Roku Developers", category: "Roku", tags: ["Web portal", "Branding"], href: "/projects/Roku Launchpad.pdf", image: "/images/Launchpad.png" },
    { title: "Cyber Risk Analysis", category: "Guidewire", tags: ["Dashboards", "Data visualization"], href: "/projects/GW_Cyence.pdf", image: "/images/Cyence.png" },
    { title: "Smart Claims Filing", category: "Guidewire", tags: ["Conversational UI", "Mobile"], href: "/projects/GW_CUI.pdf", image: "/images/GW CUI.png" },
    { title: "Contact Center", category: "SAP", tags: ["Support UX", "Web app"], href: "/projects/Contact-Center.pdf", image: "/images/Contact Center.png" },
  ];

  const experience = [
    { title: "Senior UX Designer", company: "Roku", period: "2022 - Present" },
    { title: "Senior UX Designer", company: "Guidewire", period: "2019 - 2022" },
    { title: "UX Designer", company: "SAP", period: "2017 - 2019" },
  ];

  const education = [
    { degree: "Masters in Digital Media", school: "Northeastern University", year: "2017" },
    { degree: "Bachelors in Computer Engineering", school: "University of Mumbai", year: "2015" },
  ];

  return (
    <div className="min-h-screen bg-white smooth-scroll">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-start sm:items-center justify-center overflow-hidden px-6 pt-10 pb-20 sm:py-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">UX Designer & Creative</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Designing Digital
              <span className="block gradient-text">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Creating beautiful, intuitive products that users love to use.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
              View My Work
              <ArrowRight size={20} />
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
              Get In Touch
            </button>
          </div>

          <div className="pt-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center mx-auto">
              <div className="w-1 h-2 bg-primary/40 rounded-full animate-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-foreground/70 leading-relaxed">
                I'm a UX designer passionate about solving real user problems with elegant, accessible solutions. I combine research, strategy, and design to create experiences that matter.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Lightbulb, title: "UX Strategy & Design" },
                  { icon: Code, title: "Agentic coding" },
                  { icon: Palette, title: "Visual Design" },
                ].map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div key={i} className="text-center p-3 bg-white rounded-lg border border-primary/10">
                      <Icon size={20} className="text-primary mx-auto mb-2" />
                      <p className="text-xs font-medium text-foreground/70">{skill.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img src="/images/Yogesh.jpg" alt="Yogesh Motwani" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Recent Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} onClick={() => handleProjectClick(project)} className="group cursor-pointer">
                {/* Project Image Card */}
                <div className="relative mb-6 rounded-2xl overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 flex items-center justify-center">
                        <span className="text-foreground/30 text-sm font-medium">Project Image</span>
                      </div>
                    )}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                    <div className="text-white">
                      {project.passcode ? <Lock size={20} /> : <ArrowRight size={20} />}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      {project.passcode && <Lock size={14} className="text-foreground/40 flex-shrink-0" />}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20 rounded-full hover:border-primary/40 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-4xl font-bold">Experience</h2>
            <a href="/Resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} className="text-primary" />
                <h4 className="font-bold">Companies</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {experience.map((job, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-primary/10">
                    <h3 className="font-bold text-foreground">{job.title}</h3>
                    <p className="text-sm text-primary font-semibold">{job.company}</p>
                    <p className="text-xs text-foreground/60 mt-1">{job.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-primary" />
                <h4 className="font-bold">Education</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {education.map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-primary/10">
                    <p className="text-sm font-bold">{item.degree}</p>
                    <p className="text-sm text-primary font-semibold mt-0.5">{item.school}</p>
                    <p className="text-xs text-foreground/60 mt-1">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="p-6 bg-white rounded-xl border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all group flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground/60 font-medium mb-1">Email</p>
                <a href="mailto:yogesh.fyi@gmail.com" className="text-lg font-bold text-primary hover:text-accent transition-colors break-all block">
                  yogesh.fyi@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 bg-white rounded-xl border border-primary/20 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all group flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-foreground/60 font-medium mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/yogeshmotwani/" className="text-lg font-bold text-primary hover:text-accent transition-colors block">
                  Connect With Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passcode Modal */}
      {lockedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setLockedProject(null)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="font-bold text-foreground">{lockedProject.title}</p>
                  <p className="text-xs text-foreground/50">Password protected</p>
                </div>
              </div>
              <button onClick={() => setLockedProject(null)} className="text-foreground/40 hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                ref={inputRef}
                type="password"
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setPasscodeError(false); }}
                onKeyDown={(e) => e.key === "Enter" && handlePasscodeSubmit()}
                placeholder="Enter passcode"
                className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${passcodeError ? "border-red-400 bg-red-50" : "border-primary/20 focus:border-primary"}`}
              />
              {passcodeError && <p className="text-red-500 text-xs">Incorrect passcode. Try again.</p>}
              <button
                onClick={handlePasscodeSubmit}
                className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Unlock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
