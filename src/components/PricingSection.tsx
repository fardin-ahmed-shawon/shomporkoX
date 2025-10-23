import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "499 BDT",
    period: "/month",
    description: "Perfect for small teams or startups just getting started.",
    features: [
      " Up to 4 users",
      " 100 leads/month",
      " Basic reports & dashboards",
      " Email support",
      " 5 GB secure cloud storage",
      " Mobile app access"

    ],
    button:"Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "899 BDT",
    period: "/month",
    description: "Ideal for growing teams managing multiple clients and projects.",
    features: [
      " Up to 8 users",
      " Unlimited leads",
      " Advanced analytics dashboard",
      " Priority support",
      " 25 GB secure cloud storage",
      " API & integrations",
      " Team collaboration tools"
    ],
    button:"Upgrade to Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "1,299 BDT ",
    period: "/month",
    description: "For agencies & large organizations needing flexibility and control.",
    features: [
      " Up to 12 users (expandable)",
      " Custom modules & integrations",
      " White-label branding",
      " Dedicated account manager",
      " Unlimited storage",
      " Advanced security setup",
      " On-premise deployment option"
    ],
    button:"Request Custom Demo",
    upcoming: true
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Simple, Transparent
            <span className="block text-gradient">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl border transition-all duration-500 animate-scale-up hover:scale-105 ${plan.popular
                  ? 'border-primary shadow-primary bg-card md:scale-105 md:hover:scale-110'
                  : 'border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 animate-pulse-glow">
                  <span className="px-6 py-2 bg-gradient-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.upcoming && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 animate-pulse-glow">
                  <span className="px-6 py-2 bg-gradient-primary text-primary-foreground text-sm font-bold rounded-full shadow-lg">
                  Upcoming
                  </span>
                </div>
              )}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 font-light">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-3 text-lg">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 group/item">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className={`w-full transition-all duration-300 ${!plan.popular && 'border-2 hover:border-primary'}`}
                size="lg"
                onClick={() => window.open('https://easytechsolutions.xyz/easy_data/easy_lead_management/', '_blank')}
              >
                {plan.button}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="text-muted-foreground mb-6 text-lg font-light">
            Want the real functional one? Contact Now.
          </p>
          <Button variant="ghost" size="lg" className="border border-border hover:border-primary transition-all duration-300">
            <a href="https://wa.me/8801580741616">   Contact </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;