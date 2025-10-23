import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 lg:p-20 text-center animate-scale-up shadow-primary group">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-10 font-light leading-relaxed">
              Join thousands of businesses already using EASY CRM to streamline their operations and boost productivity. Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="group bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-6 text-lg font-semibold"
              >
                <a href="#pricing">Get Started Free</a>

                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/40 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <a href="https://wa.me/8801580741616" target="_blank"> Schedule Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
