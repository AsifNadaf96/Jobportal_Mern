import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { 
  User, 
  Briefcase, 
  FileText, 
  Settings, 
  Plus,
  TrendingUp,
  Users,
  Building,
  Clock,
  Star,
  BarChart3,
  Target,
  Award
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">Please log in to access your dashboard</p>
          <Link to="/login">
            <Button variant="default">Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const quickActions = [
    {
      title: "Browse Jobs",
      description: "Find your next opportunity",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/jobs",
      variant: "default" as const
    },
    {
      title: "Update Profile", 
      description: "Keep your profile current",
      icon: <User className="w-6 h-6" />,
      href: "/profile",
      variant: "outline" as const
    },
    {
      title: "My Applications",
      description: "Track your job applications", 
      icon: <FileText className="w-6 h-6" />,
      href: "/applications",
      variant: "outline" as const
    },
    {
      title: "Account Settings",
      description: "Manage your account",
      icon: <Settings className="w-6 h-6" />,
      href: "/settings",
      variant: "outline" as const
    }
  ];

  const adminActions = [
    {
      title: "Post New Job",
      description: "Create a new job posting",
      icon: <Plus className="w-6 h-6" />,
      href: "/admin/post-job",
      variant: "success" as const
    },
    {
      title: "Manage Jobs",
      description: "View and edit your job postings",
      icon: <Building className="w-6 h-6" />,
      href: "/admin/jobs",
      variant: "outline" as const
    },
    {
      title: "User Management",
      description: "Manage registered users",
      icon: <Users className="w-6 h-6" />,
      href: "/admin/users",
      variant: "outline" as const
    },
    {
      title: "Analytics",
      description: "View platform statistics",
      icon: <BarChart3 className="w-6 h-6" />,
      href: "/admin/analytics",
      variant: "outline" as const
    }
  ];

  const stats = [
    {
      title: "Profile Completion",
      value: "85%",
      icon: <Target className="w-5 h-5" />,
      color: "text-accent"
    },
    {
      title: "Applications Sent",
      value: "12",
      icon: <FileText className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      title: "Profile Views",
      value: "48",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-warning"
    },
    {
      title: "Saved Jobs",
      value: "6",
      icon: <Star className="w-5 h-5" />,
      color: "text-accent"
    }
  ];

  const recentActivity = [
    {
      action: "Applied to Software Engineer at TechCorp",
      time: "2 hours ago",
      status: "pending"
    },
    {
      action: "Viewed Frontend Developer at StartupXYZ",
      time: "1 day ago", 
      status: "viewed"
    },
    {
      action: "Updated profile skills",
      time: "3 days ago",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {user.username}!
              </h1>
              <p className="text-muted-foreground">
                {user.isadmin ? 'Admin Dashboard' : 'Your job search dashboard'}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              {user.isadmin && (
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-warning" />
                  <span className="px-3 py-1 bg-warning/20 text-warning rounded-full text-sm font-medium">
                    Admin
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards - Only for regular users */}
        {!user.isadmin && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-3d">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {user.isadmin ? 'Admin Actions' : 'Quick Actions'}
                </CardTitle>
                <CardDescription>
                  {user.isadmin ? 'Manage your platform' : 'Get started with these common tasks'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(user.isadmin ? adminActions : quickActions).map((action, index) => (
                    <Link key={index} to={action.href}>
                      <Card className="card-3d hover:shadow-glow transition-all duration-300 cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white">
                              {action.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-1">{action.title}</h3>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="card-3d">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Your latest actions on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!user.isadmin ? (
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                    
                    <Link to="/applications">
                      <Button variant="outline" className="w-full mt-4">
                        View All Activity
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Building className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Admin activity dashboard coming soon
                    </p>
                    <Link to="/admin/analytics">
                      <Button variant="outline">
                        View Analytics
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        {!user.isadmin && (
          <Card className="card-3d mt-8 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Ready to find your next opportunity?</h2>
                <p className="text-muted-foreground mb-6">
                  Complete your profile and start applying to jobs that match your skills and interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/jobs">
                    <Button variant="default" size="lg">
                      Browse Jobs
                      <Briefcase className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="outline" size="lg">
                      Complete Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;