import Navigation from "@/components/Navigation";
import { Download, Award, Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
  const experience = [
    {
      title: "Senior UX Designer",
      company: "Company Name",
      period: "2023 - Present",
      description: "Leading design for product team, mentoring junior designers, and establishing design systems.",
    },
    {
      title: "UX Designer",
      company: "Company Name",
      period: "2021 - 2023",
      description: "Designed user experiences for web and mobile applications, conducting user research and usability testing.",
    },
    {
      title: "Junior UX Designer",
      company: "Company Name",
      period: "2019 - 2021",
      description: "Contributed to various design projects, learning industry best practices and design principles.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Design",
      school: "University Name",
      year: "2019",
    },
    {
      degree: "UX Design Certification",
      school: "Design School Name",
      year: "2020",
    },
  ];

  const certifications = [
    "Google UX Design Certificate",
    "Interaction Design Foundation",
    "Nielsen Norman Group",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-6 flex-1">
            <h1 className="text-5xl md:text-6xl font-bold">Resume</h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Here's a summary of my professional experience, education, and certifications.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 whitespace-nowrap">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                  <Briefcase size={20} />
                </div>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30">
                    <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-primary font-semibold">{item.company}</p>
                      <p className="text-sm text-foreground/60">{item.period}</p>
                      <p className="text-foreground/70 mt-3">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl border border-primary/10 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-bold">{item.degree}</h3>
                    <p className="text-primary font-semibold mt-1">{item.school}</p>
                    <p className="text-sm text-foreground/60 mt-1">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            {/* Certifications */}
            <div className="bg-white p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                  <Award size={16} />
                </div>
                <h3 className="text-lg font-bold">Certifications</h3>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-foreground/70 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-white p-6 rounded-xl border border-primary/10">
              <h3 className="text-lg font-bold mb-6">Key Skills</h3>

              <div className="space-y-4">
                {["User Research", "Wireframing", "Prototyping", "Figma", "Adobe XD", "Accessibility"].map(
                  (skill, index) => (
                    <div key={index}>
                      <p className="text-sm font-medium mb-2">{skill}</p>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          style={{
                            width: `${75 + Math.random() * 25}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
