import { socialLinks } from "@/data/social";
import { Metadata } from "next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const baseUrl = "https://smmeyer.dev";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steven Meyer via email, LinkedIn, or GitHub.",
  openGraph: {
    title: "Contact | Steven Meyer",
    description: "Get in touch with Steven Meyer via email, LinkedIn, or GitHub.",
    url: `${baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-accent-500 font-medium text-sm uppercase tracking-wider mb-4">
            Let&apos;s Connect
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-background-300 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through any of these channels or send me a message directly.
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <StaggerContainer className="grid gap-4 mb-12" staggerDelay={0.1}>
          {socialLinks.map((method) => (
            <StaggerItem key={method.name}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl flex items-center gap-4 hover:bg-background-800 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent-500/20"
              >
                <div className="p-3 bg-background-700/50 rounded-lg text-accent-500 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-background-400 uppercase tracking-wider">
                    {method.name}
                  </div>
                  <div className="text-foreground font-medium text-lg">
                    {method.value}
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Separator */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-background-700 to-transparent flex-1"></div>
            <span className="text-background-400 text-sm font-medium px-2">
              Or
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-background-700 to-transparent flex-1"></div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection delay={0.4}>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            {/* TODO: Move API key to environment variable (NEXT_PUBLIC_WEB3FORMS_KEY) */}
            <input
              type="hidden"
              name="access_key"
              value="19ee3aeb-959c-4173-a8ad-bcb6c5bde81e"
            />

            <div className="group">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-4 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-4 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
              />
            </div>

            <div className="group">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-4 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Bot Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="w-full bg-accent-500 text-foreground py-4 rounded-lg hover:bg-accent-600 hover:cursor-pointer transition-colors duration-300 font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
