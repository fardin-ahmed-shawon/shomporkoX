const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/50 backdrop-blur-sm py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <span className="text-2xl font-bold text-gradient">
                EASY CRM
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              The all-in-one CRM solution that grows with your business.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Demo</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="https://easytechsolutions.xyz/" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © 2025 ShomporkoX by Easy Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-all duration-300 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
