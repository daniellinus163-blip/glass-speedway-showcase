import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Zap, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Trophy className="h-8 w-8 text-highlight" />,
      value: '150+',
      label: 'Championships Won',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      value: '500+',
      label: 'Professional Drivers',
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      value: '25+',
      label: 'Years Experience',
    },
    {
      icon: <Globe className="h-8 w-8 text-highlight" />,
      value: '50+',
      label: 'Countries Worldwide',
    },
  ];

  const team = [
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Racing Engineer',
      experience: '15 years',
      specialization: 'Aerodynamics & Performance',
      achievements: ['Formula 1 Engineer', '5x Championship Winner', 'Innovation Award 2023'],
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Vehicle Dynamics',
      experience: '12 years',
      specialization: 'Suspension & Handling',
      achievements: ['PhD in Mechanical Engineering', 'Le Mans Technical Director', 'Safety Innovation Pioneer'],
    },
    {
      name: 'Alessandro Ferrari',
      role: 'Performance Director',
      experience: '18 years',
      specialization: 'Engine Development',
      achievements: ['Ex-Ferrari F1 Engineer', '3x Constructor Champion', 'Hybrid Technology Expert'],
    },
    {
      name: 'Emma Thompson',
      role: 'Data Analytics Lead',
      experience: '8 years',
      specialization: 'Telemetry & AI',
      achievements: ['Machine Learning Expert', 'Real-time Analytics Pioneer', 'Predictive Maintenance Leader'],
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: 'Precision Engineering',
      description: 'Every component designed with millimeter accuracy for optimal performance.',
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: 'Innovation First',
      description: 'Pushing the boundaries of technology to create tomorrow\'s racing solutions.',
    },
    {
      icon: <Award className="h-6 w-6 text-highlight" />,
      title: 'Excellence Standard',
      description: 'Committed to delivering championship-winning performance in every product.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-racing font-bold mb-6 bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
            About Racing Cars
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            For over two decades, we've been at the forefront of racing innovation, creating high-performance vehicles 
            that push the limits of speed, precision, and engineering excellence.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-glass-border text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-racing font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="glass-card border-glass-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-racing font-bold mb-8 bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                To revolutionize the racing industry through cutting-edge technology, innovative design, and 
                relentless pursuit of performance. We believe that every millisecond matters, every curve 
                counts, and every victory is earned through precision engineering and unwavering dedication 
                to excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-racing font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-racing font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card border-glass-border group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-racing font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-1">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{member.experience} experience</span>
                      <Badge variant="outline" className="bg-glass/30 border-glass-border">
                        {member.specialization}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <Award className="h-4 w-4 text-highlight mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;