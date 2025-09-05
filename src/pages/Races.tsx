import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Trophy, Clock, Flag, Users } from 'lucide-react';

const Races = () => {
  const upcomingRaces = [
    {
      id: 1,
      name: 'Monaco Grand Prix',
      date: '2024-05-26',
      time: '15:00 CET',
      location: 'Monaco, Monte Carlo',
      type: 'Formula 1',
      distance: '78 laps',
      status: 'upcoming',
      participants: 20,
      prize: '$2.5M'
    },
    {
      id: 2,
      name: 'Le Mans 24 Hours',
      date: '2024-06-15',
      time: '16:00 CET',
      location: 'Le Mans, France',
      type: 'Endurance',
      distance: '24 hours',
      status: 'upcoming',
      participants: 60,
      prize: '$5M'
    },
    {
      id: 3,
      name: 'Nürburgring Challenge',
      date: '2024-07-08',
      time: '14:00 CET',
      location: 'Nürburgring, Germany',
      type: 'GT Racing',
      distance: '6 hours',
      status: 'upcoming',
      participants: 40,
      prize: '$1.8M'
    }
  ];

  const pastRaces = [
    {
      id: 4,
      name: 'Silverstone GP',
      date: '2024-04-15',
      location: 'Silverstone, UK',
      type: 'Formula 1',
      winner: 'Lightning Team',
      status: 'completed',
      participants: 20
    },
    {
      id: 5,
      name: 'Spa Championship',
      date: '2024-03-22',
      location: 'Spa-Francorchamps, Belgium',
      type: 'GT Racing',
      winner: 'Thunder Racing',
      status: 'completed',
      participants: 35
    },
    {
      id: 6,
      name: 'Tokyo Drift Masters',
      date: '2024-02-18',
      location: 'Tokyo, Japan',
      type: 'Drift',
      winner: 'Phoenix Drift Team',
      status: 'completed',
      participants: 25
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'completed':
        return 'bg-muted/20 text-muted-foreground border-muted/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Formula 1':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Endurance':
        return 'bg-highlight/20 text-highlight border-highlight/30';
      case 'GT Racing':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Drift':
        return 'bg-highlight/20 text-highlight border-highlight/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-racing font-bold mb-6 bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
            Racing Calendar
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest racing events, championships, and competitions worldwide.
          </p>
        </div>

        {/* Upcoming Races */}
        <section className="mb-16">
          <h2 className="text-3xl font-racing font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-accent to-highlight bg-clip-text text-transparent">
              Upcoming Races
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingRaces.map((race) => (
              <Card key={race.id} className="glass-card border-glass-border group hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(race.status)}>
                      {race.status.toUpperCase()}
                    </Badge>
                    <Badge className={getTypeColor(race.type)}>
                      {race.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-racing text-foreground group-hover:text-primary transition-colors">
                    {race.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>{new Date(race.date).toLocaleDateString()} at {race.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{race.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-highlight" />
                    <span>{race.distance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1 text-accent" />
                      <span>{race.participants} drivers</span>
                    </div>
                    <div className="flex items-center text-highlight font-semibold">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span>{race.prize}</span>
                    </div>
                  </div>
                  <Button variant="racing" className="w-full mt-4">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Races */}
        <section>
          <h2 className="text-3xl font-racing font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Race Results
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pastRaces.map((race) => (
              <Card key={race.id} className="glass-card border-glass-border">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(race.status)}>
                      COMPLETED
                    </Badge>
                    <Badge className={getTypeColor(race.type)}>
                      {race.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-racing text-foreground">
                    {race.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span>{new Date(race.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{race.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-accent" />
                    <span>{race.participants} participants</span>
                  </div>
                  <div className="bg-glass/30 rounded-lg p-3 border border-glass-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Winner:</span>
                      <div className="flex items-center text-highlight font-semibold">
                        <Flag className="h-4 w-4 mr-1" />
                        <span>{race.winner}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="glass" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Races;