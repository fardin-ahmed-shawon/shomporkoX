import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50 transition-all duration-300 ${
      scrolled ? "shadow-lg" : ""
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
    
          <span className="text-xl font-bold text-gradient transition-all duration-300">
          ShomporkoX
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Pricing
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
