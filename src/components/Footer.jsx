export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 mt-16">
      <div className="container mx-auto px-5 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-white font-semibold mb-2">AutoMarket Pro</h4>
          <p>Agence spécialisée dans le marketing digital automation et le développement de solutions technologiques innovantes.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="#services" className="hover:text-primary">Développement Web</a></li>
            <li><a href="#services" className="hover:text-primary">Solutions IA</a></li>
            <li><a href="#services" className="hover:text-primary">Marketing Digital</a></li>
            <li><a href="#services" className="hover:text-primary">Formation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>+27 69 793 5559</li>
            <li>contact@giressekimona.com</li>
            <li><a href="https://www.facebook.com/share/1T2zuFtpN8/" className="hover:text-primary" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/giresse_kimona?igsh=MTN4N242cm03ZGo4aw==" className="hover:text-primary" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-8 pt-4 text-center text-slate-400">© 2025 Giresse Kimona - AutoMarket Pro.</div>
    </footer>
  );
}
