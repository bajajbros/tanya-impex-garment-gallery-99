import { Shield, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Compliance = () => {
  const certifications = [
    {
      name: "SEDEX / SMETA",
      description: "Supplier Ethical Data Exchange and SMETA social audits"
    },
    {
      name: "BSCI / GOTS",
      description: "Business Social Compliance Initiative and Global Organic Textile Standard"
    },
    {
      name: "BILLABONG / ROXY",
      description: "Brand-specific compliance and quality certifications"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-corporate-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Factory Compliance and Ethical Standards
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We understand the importance of compliance in the current global market and 
            have worked hard to meet different client requirements
          </p>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-foreground leading-relaxed">
              TANYA IMPEX has earned approvals from several key organizations, demonstrating 
              our commitment to ethical manufacturing practices, social responsibility, and 
              environmental sustainability. Our compliance certifications ensure that we meet 
              the highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Standards</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-primary mr-2" />
                    Social Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fair labor practices and worker rights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Safe working conditions and environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No child or forced labor policies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Regular social audits and assessments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-primary mr-2" />
                    Environmental Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Organic and eco-friendly fabric options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Sustainable manufacturing processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Waste reduction and recycling programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Energy-efficient production methods</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Partner with a Compliant Manufacturer
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our commitment to compliance ensures your brand's reputation remains protected 
            while meeting global sustainability and ethical standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Compliance;