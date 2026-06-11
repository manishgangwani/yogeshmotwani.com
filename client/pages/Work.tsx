import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "Project Title",
      category: "Web Design",
      description: "A brief description of the project and the impact it made",
      tags: ["UX Design", "Interaction Design"],
    },
    {
      title: "Project Title",
      category: "Mobile App",
      description: "A brief description of the project and the impact it made",
      tags: ["Mobile Design", "User Research"],
    },
    {
      title: "Project Title",
      category: "Brand Design",
      description: "A brief description of the project and the impact it made",
      tags: ["Visual Design", "Branding"],
    },
    {
      title: "Project Title",
      category: "SaaS Product",
      description: "A brief description of the project and the impact it made",
      tags: ["Product Design", "UX Strategy"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">My Work</h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Here are some of my recent projects. Each one represents a unique challenge and solution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                {/* Project Image Placeholder */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl aspect-video flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/40 transition-all group-hover:shadow-xl group-hover:shadow-primary/20">
                  <span className="text-foreground/40 text-center">
                    <p className="font-semibold">Project Image</p>
                    <p className="text-sm">Add your project mockup</p>
                  </span>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-secondary text-foreground/70 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all pt-4">
                    View Case Study
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Project</h2>

          <div className="bg-white rounded-2xl overflow-hidden border border-primary/10">
            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-full aspect-video flex items-center justify-center border-b border-primary/10">
              <span className="text-foreground/40 text-center">
                <p className="font-semibold">Featured Project Image</p>
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-6">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Case Study</p>
                <h3 className="text-3xl font-bold">Project Name</h3>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Add a detailed description of your featured project. Explain the challenge, your approach, and the results you achieved.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-20 font-semibold text-foreground/60">Challenge</div>
                  <p className="text-foreground/70">Description of the main challenge</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-20 font-semibold text-foreground/60">Solution</div>
                  <p className="text-foreground/70">How you solved it</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-20 font-semibold text-foreground/60">Results</div>
                  <p className="text-foreground/70">The impact and outcomes</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all mt-6">
                View Full Case Study
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
