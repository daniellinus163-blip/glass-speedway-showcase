import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-racing-car.jpg';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: 'Lightning Fast',
      description: 'Experience the thrill of high-speed racing with cutting-edge technology and aerodynamics.',
    },
    {
      icon: <Trophy className="h-8 w-8 text-highlight" />,
      title: 'Championship Ready',
      description: 'Professional-grade racing cars built for winners and championship competitions.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Expert Team',
      description: 'Backed by world-class engineers and championship-winning racing professionals.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-racing font-bold mb-6 bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
            RACING CARS
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the ultimate adrenaline rush with our collection of championship-winning racing machines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="racing" size="lg" asChild>
              <Link to="/cars">
                Explore Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/races">View Races</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-racing font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Racing Cars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-glass-border group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-racing font-semibold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="glass-card border-glass-border max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-4xl font-racing font-bold mb-6 bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
                Ready to Race?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the elite community of racing enthusiasts and experience the thrill of high-performance motorsports.
              </p>
              <Button variant="racing" size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;