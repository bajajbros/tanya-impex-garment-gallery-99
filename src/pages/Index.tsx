import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Factory, Shirt, Users, Award, Globe, Shield, Clock, Target, Zap, TrendingUp, Star, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroFactory from "@/assets/hero-factory.jpg";
import womensShorts from "@/assets/womens-shorts.jpg";
import mensPjSet from "@/assets/mens-pj-set.jpg";
import kidsWear from "@/assets/kids-wear.jpg";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import sustainability from "@/assets/sustainability.jpg";
import textileWorkers from "@/assets/textile-workers.jpg";
import productionLine from "@/assets/production-line.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import garmentWarehouse from "@/assets/garment-warehouse.jpg";
import designStudio from "@/assets/design-studio.jpg";
import ecoManufacturing from "@/assets/eco-manufacturing.jpg";

const Index = () => {
  const clientBrands = [
    "ROXY", "O'NEILL", "GUESS?", "GAP", "CALVIN KLEIN", 
    "LIVERPOOL", "ELCORTE", "H&M", "ZARA", "TOMMY HILFIGER"
  ];

  const certifications = [
    "SEDEX / SMETA", "BSCI / GOTS", "BILLABONG / ROXY"
  ];

  const keyMetrics = [
    { icon: Factory, value: "270,000", label: "Garments per month", color: "text-blue-600" },
    { icon: Award, value: "US$ 14M", label: "Annual Turnover", color: "text-green-600" },
    { icon: Users, value: "90,000", label: "Sq. ft. manufacturing space", color: "text-purple-600" },
    { icon: Globe, value: "25+", label: "Countries served", color: "text-orange-600" }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive quality control from fabric to finished product with in-house testing laboratory",
      features: ["In-house lab testing", "Quality technicians", "Fabric to shipment supervision"]
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Proven track record of on-time deliveries with efficient production planning and logistics",
      features: ["CAD system planning", "Efficient logistics", "Real-time tracking"]
    },
    {
      icon: Target,
      title: "Competitive Pricing",
      description: "Cost-effective solutions without compromising on quality through optimized manufacturing processes",
      features: ["Optimized processes", "Bulk production benefits", "Direct manufacturer pricing"]
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuous innovation in design, technology, and sustainable manufacturing practices",
      features: ["Design studio", "Latest technology", "Sustainable practices"]
    }
  ];

  const whyChooseUs = [
    { title: "15+ Years Experience", description: "Established in 2008 with extensive industry expertise" },
    { title: "Global Compliance", description: "SEDEX, BSCI, GOTS certified with ethical manufacturing" },
    { title: "Versatile Production", description: "Both woven & knitted garments with diverse fabric capabilities" },
    { title: "Eco-Friendly", description: "Organic and sustainable fabric options available" },
    { title: "Design Excellence", description: "In-house design team creating trend-aligned collections" },
    { title: "Reliable Partnership", description: "Trusted by world's leading fashion brands" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-corporate-blue-dark text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url(${heroFactory})`,
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in-up">
              Leading Manufacturer Since 2008
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Tanya Impex
            </h1>
            
            <p className="text-2xl md:text-3xl mb-6 font-light animate-fade-in-up animation-delay-400">
              Leading Manufacturers & Exporters of Readymade Garments
            </p>
            
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in-up animation-delay-600">
              Your trusted partner since 2008, delivering superior value, unmatched quality, 
              and timely deliveries to premier global brands across 25+ countries
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 animate-pulse-glow">
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline-white" className="text-lg px-8 py-4">
                <Link to="/contact">
                  Get Quote
                  <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animation-delay-800">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm md:text-base opacity-80">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Snapshot - Enhanced */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Company Overview</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Company Snapshot</h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              A professionally managed manufacturer of both Woven & Knitted garments, 
              setting industry standards for quality and reliability across global markets.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <metric.icon className={`h-16 w-16 mx-auto mb-6 ${metric.color}`} />
                  <div className="text-4xl font-bold text-primary mb-3">{metric.value}</div>
                  <div className="text-foreground font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional stats grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-left">
              <div className="text-3xl font-bold text-primary mb-2">2008</div>
              <div className="text-foreground">Established Year</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground">Skilled Workers</div>
            </div>
            <div className="text-center animate-fade-in-right animation-delay-400">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Strengths</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Tanya Impex</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred manufacturing partner for global fashion brands
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <capability.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-secondary/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4 bg-primary/10 text-primary">Manufacturing Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">State-of-the-Art Facilities</h2>
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                Our modern manufacturing facilities in Noida span 90,000 sq. ft., equipped with 
                cutting-edge technology and staffed by skilled professionals committed to excellence.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Advanced Machinery</h4>
                    <p className="text-foreground/80">Latest CAD systems and automated production lines</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Quality Control</h4>
                    <p className="text-foreground/80">In-house laboratory and experienced technicians</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Skilled Workforce</h4>
                    <p className="text-foreground/80">500+ trained professionals across all departments</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="animate-pulse-glow">
                <Link to="/infrastructure">
                  Explore Our Infrastructure
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <img 
                  src={manufacturingFacility} 
                  alt="Manufacturing Facility" 
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Modern Production Floor</h3>
                  <p className="text-white/90">Advanced manufacturing technology in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Product Range</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Product Collections</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our diverse collection of high-quality garments designed for global markets, 
              crafted with precision and attention to detail.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { image: womensShorts, title: "Women's & Girl's Wear", description: "Blouses, Tops, Nighties, Jumpsuits, Dresses, Skirts & More", items: "50+ Styles" },
              { image: mensPjSet, title: "Men's Wear", description: "T-shirts, PJ suits, Boxers & Casual Wear", items: "30+ Styles" },
              { image: kidsWear, title: "Kid's Wear", description: "T-shirts, Tops, Rompers, Baby suits & Hooded Items", items: "25+ Styles" }
            ].map((category, index) => (
              <Card key={index} className="group shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Badge className="mb-3 bg-white/20 text-white">{category.items}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="animate-pulse-glow">
              <Link to="/products">
                View All Collections
                <Shirt className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Product Gallery */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold mb-6">Our Warehouse & Inventory</h3>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Our organized warehouse facility ensures efficient inventory management and timely dispatch 
                  of orders to clients worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Climate-controlled storage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Advanced inventory management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Quick dispatch capabilities</span>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <img 
                  src={garmentWarehouse} 
                  alt="Garment Warehouse" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={globalNetwork} alt="Global Network" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <Badge className="mb-4 bg-primary/10 text-primary">Global Presence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Serving Markets Worldwide</h2>
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                From our manufacturing base in India, we export to over 25 countries, 
                building lasting partnerships with leading fashion brands across continents.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm">Countries</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">15%</div>
                  <div className="text-sm">Annual Growth</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {["North America", "Europe", "Australia", "Asia Pacific"].map((region, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <img 
                src={globalNetwork} 
                alt="Global Network" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left order-2 lg:order-1">
              <img 
                src={qualityControl} 
                alt="Quality Control" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-fade-in-right order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary">Quality Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Uncompromising Quality Standards</h2>
              <p className="text-xl text-foreground mb-8 leading-relaxed">
                Our commitment to quality is unwavering. From fabric selection to final packaging, 
                every step is monitored by experienced quality technicians in our in-house laboratory.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  { icon: Shield, title: "In-house Testing Lab", desc: "Comprehensive fabric and garment testing" },
                  { icon: CheckCircle, title: "Quality Checkpoints", desc: "Multiple quality checks throughout production" },
                  { icon: Star, title: "Expert Technicians", desc: "Experienced quality control professionals" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-foreground/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" variant="outline">
                <Link to="/compliance">
                  Learn About Our Quality Process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Manufacturing Process</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Production Journey</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              From design conception to final delivery, witness our comprehensive manufacturing process
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-left">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={designStudio} 
                    alt="Design Studio" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Design & Development</h3>
                    <p className="text-white/90">Creative design studio with fabric samples and color coordination</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-right">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={productionLine} 
                    alt="Production Line" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Advanced Production</h3>
                    <p className="text-white/90">Modern automated production lines with precision cutting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-left animation-delay-200">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={textileWorkers} 
                    alt="Skilled Workers" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Skilled Workforce</h3>
                    <p className="text-white/90">Expert textile workers operating advanced machinery</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-right animation-delay-200">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={qualityInspection} 
                    alt="Quality Inspection" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Quality Inspection</h3>
                    <p className="text-white/90">Rigorous quality control and testing procedures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="animate-pulse-glow">
              <Link to="/infrastructure">
                Explore Our Manufacturing Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">Sustainability</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Committed to Sustainable Manufacturing</h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              We believe in responsible manufacturing that protects our planet while delivering exceptional products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <img 
                src={ecoManufacturing} 
                alt="Eco Manufacturing" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            <div className="animate-fade-in-right">
              <div className="space-y-8">
                {[
                  { title: "Eco-Friendly Materials", desc: "Organic cotton and sustainable fabric options" },
                  { title: "Energy Efficiency", desc: "Modern machinery with reduced energy consumption" },
                  { title: "Waste Reduction", desc: "Optimized cutting and minimal fabric waste" },
                  { title: "Ethical Practices", desc: "Fair labor practices and worker welfare programs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-foreground/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust - Enhanced */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Trusted Partnership</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Reliable Supplier to the World's Premier Brands
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Trusted by leading international fashion brands across the globe for consistent quality, 
              timely delivery, and innovative solutions.
            </p>
          </div>
          
          <div className="overflow-hidden bg-white rounded-2xl shadow-lg py-8 animate-scale-in">
            <div className="flex animate-scroll space-x-16 items-center justify-center">
              {[...clientBrands, ...clientBrands].map((brand, index) => (
                <div 
                  key={index}
                  className="text-3xl font-bold text-primary whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-6">Join the ranks of satisfied clients worldwide</p>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Become Our Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance & Certification - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary">Certifications</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Certified for Global Standards
            </h2>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Our certifications ensure compliance with international quality and ethical standards, 
              giving you confidence in our manufacturing processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{cert}</h3>
                  <p className="text-foreground/80 text-sm">
                    Internationally recognized certification ensuring quality and compliance
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="animate-pulse-glow">
              <Link to="/compliance">
                Learn More About Our Compliance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-corporate-blue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Let's discuss how Tanya Impex can bring your garment manufacturing vision to life 
              with our expertise, quality, and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 animate-pulse-glow">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/products">
                  View Our Work
                  <Shirt className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 text-sm opacity-80">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91-120-4516375
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                sunilgrover@tanyaimpex.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;