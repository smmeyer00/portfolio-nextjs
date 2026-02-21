import { socialLinks } from "@/data/social";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Steven Meyer via email, LinkedIn, or GitHub.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-24 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto relative">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Get in Touch
          </h1>
          <p className="text-background-300 text-center mb-12 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            through any of these channels or send me a message directly.
          </p>

          {/* Contact Methods */}
          <div className="grid gap-4 mb-12">
            {socialLinks.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background-800/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 hover:bg-background-800 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-2 bg-background-700 rounded-lg text-accent-500 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-background-400">
                    {method.name}
                  </div>
                  <div className="text-foreground font-medium">
                    {method.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-background-700 to-transparent flex-1"></div>
            <span className="text-background-400 text-sm font-medium px-2">
              Or
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-background-700 to-transparent flex-1"></div>
          </div>

          {/* Contact Form */}
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
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-3 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-3 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
              />
            </div>

            <div className="group">
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                className="w-full bg-background-800/50 backdrop-blur-sm border border-background-700 rounded-lg px-4 py-3 text-foreground placeholder:text-background-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300 resize-none"
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
              className="w-full bg-accent-500 text-foreground py-3 rounded-lg hover:bg-accent-600 hover:cursor-pointer transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
