import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block animate-scale-up">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-primary hover:scale-105 cursor-default">
                 Transform Your Business Today
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Manage Everything in
              <span className="block text-gradient animate-pulse-glow">
                One Powerful CRM
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              ShomporkoX is a CRM solution that streamlines your entire business operations - from leads and projects to payments and team management. Experience the all-in-one solution that grows with you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button  variant="hero" size="lg" className="group animate-scale-up" style={{ animationDelay: "200ms" }}>
               <a href="#pricing">   See Pricing Plans</a>
             
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="group animate-scale-up border-2 hover:border-primary" style={{ animationDelay: "300ms" }}>
                <Play className="mr-2 group-hover:scale-125 transition-all duration-300 fill-current" />
              <a href="https://easytechsolutions.xyz/easy_data/easy_lead_management/login.php">  Watch Demo</a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">Uptime</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">4.9/5</div>
                <div className="text-sm text-muted-foreground font-medium">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-float lg:block hidden">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-full animate-pulse-glow" />
            <img 
              src={heroBanner} 
              alt="EASY CRM Dashboard Preview" 
              className="relative rounded-2xl shadow-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
