import { Award, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-corporate-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Legacy of Quality and Innovation
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Incorporated in 2008, TANYA IMPEX is a professionally managed manufacturer 
            and exporter of a rich variety of ready-to-wear garments
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              TANYA IMPEX has established itself as a trusted name in the global garment manufacturing industry. 
              Our focus on quality garments for export, combined with our in-house capacity for both woven and 
              knit products, has made us a preferred partner for premier international brands.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With state-of-the-art facilities spanning 90,000 sq. ft. and a production capacity of 270,000 
              garments per month, we deliver superior value, unmatched quality, and timely deliveries to our 
              global clientele.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-foreground leading-relaxed">
                  To set a precedent in the global garment manufacturing industry through continuous 
                  innovation, exceptional products, focused services and enhanced customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-foreground leading-relaxed">
                  The company's strength lies in its design abilities that are supported by on-time 
                  delivery and unmatched quality. Our dedicated team of designers, merchandisers, 
                  and managers drive this mission forward every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Meet the People Who Made it Happen</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">
                The people who guide TANYA IMPEX understand the most infinitesimal details of the 
                garment industry. Professional to the core and backed by decades of experience, 
                the core management team is highly innovative and visionary in approach.
              </p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">16+</div>
              <div className="text-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">270K</div>
              <div className="text-foreground">Monthly Production</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$14M</div>
              <div className="text-foreground">Annual Turnover</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;