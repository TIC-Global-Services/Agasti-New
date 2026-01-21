import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
      <Footer />
    </main>
  );
}