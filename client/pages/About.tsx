import Navigation from "@/components/Navigation";
import { Users, Target, Trophy } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              I'm a passionate UX designer with a focus on creating intuitive and delightful digital experiences. With a background in both design and technology, I bridge the gap between aesthetics and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Design Philosophy</h2>
              <p className="text-foreground/70 leading-relaxed">
                I believe great design is invisible. It works so well that users don't think about it—they just accomplish their goals effortlessly. My approach combines user research, data-driven insights, and creative problem-solving.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Every project I work on starts with understanding the user's pain points and needs. From there, I create solutions that are not only beautiful but also intuitive and accessible to everyone.
              </p>
            </div>
            {/* Placeholder for Image */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square flex items-center justify-center border-2 border-dashed border-primary/30">
              <span className="text-foreground/50 text-center">
                <p className="font-semibold">Profile Image</p>
                <p className="text-sm">Upload your image here</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: "User Research",
                skills: ["User Interviews", "Usability Testing", "Data Analysis"],
              },
              {
                icon: Users,
                title: "Design & Prototyping",
                skills: ["Wireframing", "High-fidelity Design", "Prototyping"],
              },
              {
                icon: Trophy,
                title: "Tools & Technology",
                skills: ["Figma", "Adobe XD", "Prototyping Tools"],
              },
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Fun Facts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "When I'm not designing, you'll find me sketching or exploring new design trends",
              "I'm passionate about accessibility and creating inclusive digital experiences",
              "I love collaborating with developers and product managers to bring ideas to life",
              "Coffee is my design companion—the more complex the project, the more coffee needed!",
            ].map((fact, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <p className="text-foreground/70 leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
