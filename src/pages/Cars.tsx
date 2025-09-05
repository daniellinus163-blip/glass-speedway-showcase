import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Gauge, Settings } from 'lucide-react';

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: 'Thunder Bolt X1',
      category: 'Formula Racing',
      maxSpeed: '380 km/h',
      acceleration: '0-100 in 2.1s',
      power: '850 HP',
      price: '$2.5M',
      description: 'Cutting-edge aerodynamics meets raw power in this championship-winning formula car.',
      features: ['Carbon Fiber Body', 'Hybrid Engine', 'Active Suspension', 'DRS System'],
      gradient: 'from-primary to-primary-glow'
    },
    {
      id: 2,
      name: 'Velocity Storm',
      category: 'GT Racing',
      maxSpeed: '340 km/h',
      acceleration: '0-100 in 2.8s',
      power: '720 HP',
      price: '$1.8M',
      description: 'Luxury meets performance in this grand touring masterpiece.',
      features: ['Twin Turbo V8', 'All-Wheel Drive', 'Carbon Brakes', 'Sport Mode'],
      gradient: 'from-accent to-accent-glow'
    },
    {
      id: 3,
      name: 'Phoenix Drift',
      category: 'Drift Racing',
      maxSpeed: '280 km/h',
      acceleration: '0-100 in 3.2s',
      power: '650 HP',
      price: '$1.2M',
      description: 'Precision handling and sideways excitement in perfect harmony.',
      features: ['Rear-Wheel Drive', 'Drift Mode', 'Custom Suspension', 'Wide Body Kit'],
      gradient: 'from-highlight to-highlight-glow'
    },
    {
      id: 4,
      name: 'Lightning Sprint',
      category: 'Electric Racing',
      maxSpeed: '320 km/h',
      acceleration: '0-100 in 2.5s',
      power: '900 HP',
      price: '$2.2M',
      description: 'The future of racing with instant torque and zero emissions.',
      features: ['Electric Motors', 'Regenerative Braking', 'Battery Management', 'Silent Mode'],
      gradient: 'from-accent to-primary'
    },
    {
      id: 5,
      name: 'Inferno Rally',
      category: 'Rally Racing',
      maxSpeed: '260 km/h',
      acceleration: '0-100 in 3.8s',
      power: '580 HP',
      price: '$950K',
      description: 'Built to conquer any terrain with unmatched durability.',
      features: ['All-Terrain Tires', 'Roll Cage', 'Skid Plates', 'Rally Suspension'],
      gradient: 'from-highlight to-primary'
    },
    {
      id: 6,
      name: 'Apex Hunter',
      category: 'Track Racing',
      maxSpeed: '350 km/h',
      acceleration: '0-100 in 2.6s',
      power: '780 HP',
      price: '$1.6M',
      description: 'Track-focused precision engineering for the ultimate lap times.',
      features: ['Aero Package', 'Racing Slicks', 'Stripped Interior', 'Data Logger'],
      gradient: 'from-primary to-highlight'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-racing font-bold mb-6 bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
            Racing Car Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our premium collection of high-performance racing machines, each engineered for speed, precision, and victory.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="glass-card border-glass-border group hover:scale-105 transition-all duration-500">
              <CardContent className="p-0">
                {/* Car Image Placeholder */}
                <div className={`h-48 bg-gradient-to-r ${car.gradient} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-white text-center">
                      <Zap className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-racing font-bold">{car.name}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2 bg-glass/50 text-accent">
                      {car.category}
                    </Badge>
                    <h3 className="text-2xl font-racing font-bold text-foreground mb-2">
                      {car.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {car.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <Gauge className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm text-muted-foreground">Max Speed</p>
                      <p className="font-semibold text-foreground">{car.maxSpeed}</p>
                    </div>
                    <div className="text-center">
                      <Zap className="h-5 w-5 text-accent mx-auto mb-1" />
                      <p className="text-sm text-muted-foreground">Power</p>
                      <p className="font-semibold text-foreground">{car.power}</p>
                    </div>
                    <div className="text-center">
                      <ArrowRight className="h-5 w-5 text-highlight mx-auto mb-1" />
                      <p className="text-sm text-muted-foreground">0-100</p>
                      <p className="font-semibold text-foreground">{car.acceleration}</p>
                    </div>
                    <div className="text-center">
                      <Settings className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-highlight">{car.price}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {car.features.map((feature, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs bg-glass/30 border-glass-border text-muted-foreground"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="racing" className="w-full">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;