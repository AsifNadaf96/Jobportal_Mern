import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Award
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Find Your Dream Job",
      description: "Browse thousands of job opportunities from top companies worldwide."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Employers", 
      description: "Build meaningful connections with hiring managers and recruiters."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Track your application progress and accelerate your career journey."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Jobs" },
    { number: "5K+", label: "Companies" },
    { number: "50K+", label: "Job Seekers" },
    { number: "98%", label: "Success Rate" }
  ];

  const benefits = [
    "Advanced job matching algorithms",
    "Real-time application tracking",
    "Professional profile builder",
    "Direct employer communication",
    "Career guidance and tips",
    "Mobile-responsive platform"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Find Your <span className="gradient-text">Dream Career</span> Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Connect with top employers, discover amazing opportunities, and take the next step in your professional journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/jobs">
                <Button variant="hero" size="xl" className="group">
                  Browse Jobs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="glass" size="xl">
                  Get Started Free
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TalentLeap?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the tools and opportunities you need to advance your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-3d group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">PLATFORM BENEFITS</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Everything You Need to <span className="gradient-text">Succeed</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive platform provides all the tools and resources you need to find your perfect job match and accelerate your career growth.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/register">
                <Button variant="success" size="lg">
                  Start Your Journey
                  <Zap className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="card-3d p-8 bg-gradient-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium Experience</h3>
                    <p className="text-sm text-muted-foreground">Industry-leading platform</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                    <span className="text-sm">Profile Completion</span>
                    <span className="text-sm font-semibold text-accent">95%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm">Job Match Score</span>
                    <span className="text-sm font-semibold text-primary">88%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                    <span className="text-sm">Response Rate</span>
                    <span className="text-sm font-semibold text-warning">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Take the <span className="gradient-text">Next Step?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have already found their dream jobs through TalentLeap
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button variant="default" size="lg">
                  Explore Opportunities
                  <Briefcase className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;