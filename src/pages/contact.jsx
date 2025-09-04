import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section id="contact" className="py-20">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Me Contacter</h2>
            <p className="text-slate-600">Prêt à transformer vos idées en réalité ? Contactez-moi.</p>
          </div>
          <div className="bg-slate-50 border rounded-xl p-6 shadow">
            <form action="https://formspree.io/f/meozqkqa" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Nom complet</label>
                <input className="mt-1 w-full border rounded-lg px-3 py-2" name="name" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2" name="email" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full border rounded-lg px-3 py-2 min-h-[120px]" name="message" required />
              </div>
              <button className="btn-primary w-full" type="submit">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
