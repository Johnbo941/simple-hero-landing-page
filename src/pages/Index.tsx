import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop" 
            alt="Person using laptop for web development"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover h-96"
          />
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl font-bold mb-4 text-foreground font-serif">
          Osang Miracle
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-serif">
          Beginner web developer passionate about creating amazing digital experiences. 
          Currently learning and building projects to grow my skills in modern web technologies.
        </p>
        
        {/* Call to Action Button */}
        <Button size="lg" className="text-lg px-8 py-3">
          View My Projects
        </Button>
      </div>
    </div>
  );
};

export default Index;
