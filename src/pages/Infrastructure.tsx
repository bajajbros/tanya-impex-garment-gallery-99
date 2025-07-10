import { Building, Cog, CheckCircle, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Infrastructure = () => {
  const facilities = [
    "CAD System for efficient production planning",
    "Design Studio",
    "Fabrication Studio", 
    "Staff Canteen",
    "Excellent Show-Room Library"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-corporate-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            State-of-the-Art Infrastructure & Unwavering Quality
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our world-class facilities and stringent quality processes ensure 
            excellence in every garment we manufacture
          </p>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Building className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-6 w-6 text-primary mr-2" />
                  Manufacturing Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-foreground">
                    Our factories are strategically located in Noida, covering a total area of 
                    <span className="font-semibold text-primary"> 90,000 sq. ft.</span> This space 
                    includes all activities from Designing and Sampling to Stitching, Finishing, 
                    and Packaging.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">80,000</div>
                      <div className="text-sm text-foreground">Factory-1 Monthly Output</div>
                    </div>
                    <div className="text-center p-4 bg-secondary rounded-lg">
                      <div className="text-2xl font-bold text-primary">190,000</div>
                      <div className="text-sm text-foreground">Factory-2 Monthly Output</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cog className="h-6 w-6 text-primary mr-2" />
                  Key Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">270,000</div>
                    <div className="text-sm text-foreground">Total Monthly Capacity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Factory Locations */}
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Factory Locations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-primary mb-2">Factory 1</h4>
                <p className="text-foreground text-sm">W-18 & W-19, Sec-11, Noida-201301, Uttar Pradesh, India</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-primary mb-2">Factory 2</h4>
                <p className="text-foreground text-sm">C-74, Sec-58, Noida-201301, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Quality</h2>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  The management of TANYA IMPEX is committed to the satisfaction of its customers 
                  by providing quality garments at the right time and at the right price.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Quality Control Team</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      Our team of experienced quality technicians supervises the entire process 
                      from fabric to shipment, ensuring every garment meets international standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">In-House Laboratory</h4>
                    <p className="text-foreground text-sm leading-relaxed">
                      All incoming fabrics are tested in our state-of-the-art in-house laboratory 
                      to ensure they meet our stringent quality requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;