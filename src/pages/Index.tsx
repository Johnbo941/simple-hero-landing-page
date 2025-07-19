import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Floating Code Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-float">
        <div className="font-mono text-sm text-foreground">&lt;/&gt;</div>
      </div>
      <div className="absolute top-20 right-16 opacity-15 animate-float" style={{animationDelay: '2s'}}>
        <div className="font-mono text-xs text-foreground">function()</div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 animate-float" style={{animationDelay: '4s'}}>
        <div className="font-mono text-sm text-foreground">{ }</div>
      </div>
      <div className="absolute bottom-32 right-10 opacity-15 animate-float" style={{animationDelay: '1s'}}>
        <div className="font-mono text-xs text-foreground">CSS3</div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-2 border-primary/20 rotate-45 animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/3 right-12 w-12 h-12 bg-accent/10 rounded-full animate-float" style={{animationDelay: '5s'}}></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Hero Image */}
        <div className="mb-8 animate-slide-in-up" style={{animationDelay: '0.2s', opacity: '0', animationFillMode: 'forwards'}}>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop" 
            alt="Person using laptop for web development"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover h-96 hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl font-bold mb-4 text-foreground font-serif animate-slide-in-left" style={{animationDelay: '0.4s', opacity: '0', animationFillMode: 'forwards'}}>
          Osang Miracle
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-serif animate-slide-in-right" style={{animationDelay: '0.6s', opacity: '0', animationFillMode: 'forwards'}}>
          Beginner web developer passionate about creating amazing digital experiences. 
          Currently learning and building projects to grow my skills in modern web technologies.
        </p>
        
        {/* Tech Stack Icons */}
        <div className="flex justify-center space-x-6 mb-8 animate-slide-in-up" style={{animationDelay: '0.8s', opacity: '0', animationFillMode: 'forwards'}}>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center font-mono text-sm font-bold">JS</div>
            <span className="text-xs text-muted-foreground mt-1">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center font-mono text-sm font-bold">⚛</div>
            <span className="text-xs text-muted-foreground mt-1">React</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center font-mono text-sm font-bold">CSS</div>
            <span className="text-xs text-muted-foreground mt-1">Styling</span>
          </div>
        </div>
        
        {/* Call to Action Button */}
        <Button size="lg" className="text-lg px-8 py-3 animate-slide-in-up hover:scale-105 transition-all duration-300" style={{animationDelay: '1s', opacity: '0', animationFillMode: 'forwards'}}>
          View My Projects
        </Button>
      </div>
    </div>
  );
};

export default Index;
