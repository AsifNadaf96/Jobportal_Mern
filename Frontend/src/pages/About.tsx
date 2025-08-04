import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  Briefcase,
  TrendingUp,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "We're committed to connecting talented individuals with their dream careers."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community-Focused", 
      description: "Building a supportive community where everyone can thrive professionally."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from technology to user experience."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Making career opportunities accessible to people around the world."
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Jobs Posted" },
    { number: "50,000+", label: "Registered Users" },
    { number: "5,000+", label: "Companies" },
    { number: "98%", label: "Success Rate" }
  ];

  const features = [
    "AI-powered job matching",
    "Real-time application tracking",
    "Professional networking tools",
    "Career development resources",
    "Industry insights and trends",
    "Mobile-first experience"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">TalentLeap</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We're revolutionizing how people find careers and how companies discover talent. 
              Our platform bridges the gap between ambition and opportunity.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">OUR STORY</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Built by job seekers, <span className="gradient-text">for job seekers</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                TalentLeap was founded in 2024 with a simple vision: make job searching and hiring 
                more human, efficient, and successful for everyone involved.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                We understand the challenges of finding the right opportunity because we've been there. 
                Our team combines years of experience in recruitment, technology, and career development 
                to create a platform that truly works.
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/jobs">
                <Button variant="default" size="lg">
                  Start Your Journey
                  <Briefcase className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="card-3d p-8 bg-gradient-card">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Growing Every Day</h3>
                  <p className="text-muted-foreground">
                    Our platform continues to evolve with new features and opportunities
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                    <span className="text-sm">Monthly Job Posts</span>
                    <span className="text-sm font-semibold text-accent">+2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm">New Users Weekly</span>
                    <span className="text-sm font-semibold text-primary">+1,200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                    <span className="text-sm">Success Stories</span>
                    <span className="text-sm font-semibold text-warning">+800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and help us create meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-3d group cursor-pointer text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to be part of our <span className="gradient-text">success story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of professionals who have found their perfect career match through TalentLeap
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="default" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;