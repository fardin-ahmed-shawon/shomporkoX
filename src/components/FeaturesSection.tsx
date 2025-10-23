import { 
  Users, 
  FolderKanban, 
  UserCog, 
  Receipt, 
  Clock, 
  LayoutDashboard,
  Wallet,
  DollarSign,
  CreditCard,
  Wrench,
  Shield,
  Settings,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Leads Management",
    description: "Capture, track, and convert leads efficiently with intelligent automation and follow-up reminders."
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Plan, execute, and monitor projects with Kanban boards, timelines, and team collaboration tools."
  },
  {
    icon: UserCog,
    title: "Employee Management",
    description: "Manage your team with attendance tracking, performance reviews, and role assignments."
  },
  {
    icon: Receipt,
    title: "Payment & Invoice Management",
    description: "Generate professional invoices, track payments, and automate billing processes seamlessly."
  },
  {
    icon: Clock,
    title: "Project Due Preview",
    description: "Stay ahead with real-time due date tracking and automated reminders for upcoming deadlines."
  },
  {
    icon: LayoutDashboard,
    title: "Powerful Dashboard",
    description: "Get instant insights with comprehensive analytics on leads, projects, collections, and salaries."
  },
  {
    icon: Wallet,
    title: "Accounts Management",
    description: "Complete financial oversight with collections, expenses, statements, and detailed reports."
  },
  {
    icon: DollarSign,
    title: "Multi-Currency Support",
    description: "Manage dollar transactions with dedicated dashboards for collections, expenses, and brand-wise tracking."
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    description: "Flexible payment gateway integration supporting multiple payment methods and currencies."
  },
  {
    icon: Wrench,
    title: "Service Management",
    description: "Define and manage your service offerings with pricing tiers and custom configurations."
  },
  {
    icon: Shield,
    title: "Advanced Access Control",
    description: "Secure your data with role-based and attribute-based access control systems (RBAC & ABAC)."
  },
  {
    icon: Settings,
    title: "User Settings",
    description: "Personalized profiles with password management, preferences, and security settings."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-30 pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Everything You Need to
            <span className="block text-gradient">
              Run Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light">
            A comprehensive suite of tools designed to streamline operations, boost productivity, and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-gradient-primary text-center shadow-primary animate-scale-up relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Plus Many More Features Coming Soon!
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg font-light">
              We're constantly innovating and adding new features based on your feedback. Join us on this journey to create the ultimate CRM solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
