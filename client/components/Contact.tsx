import { motion } from "framer-motion";

const contactDetails = [
  {
    label: "Email",
    value: "chisengamukwala8@gmail.com",
    icon: "📧",
    href: "chisengamukwala8@gmail.com",
  },
  {
    label: "Phone",
    value: "+260973138446",
    icon: "📱",
    href: "tel:+260973138446",
  },
  {
    label: "Name",
    value: "Chisenga Mukwala",
    icon: "👤",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Contact Details</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out! Here's how you can get in touch with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all text-center group ${
                contact.label === "Name" ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{contact.icon}</div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  {contact.label}
                </h3>
                <p className="text-xl font-bold group-hover:text-primary transition-colors break-all">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
        >
          <p className="text-center text-foreground/80">
            You can also connect with me on <a href="www.linkedin.com/in/chisenga-mukwala-b1956b335" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">LinkedIn</a> and <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">GitHub</a> for more information about my work and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
