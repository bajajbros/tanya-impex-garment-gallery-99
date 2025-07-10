import { Shirt, Scissors, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import womensShorts from "@/assets/womens-shorts.jpg";
import mensPjSet from "@/assets/mens-pj-set.jpg";
import kidsWear from "@/assets/kids-wear.jpg";

const Products = () => {
  const womenProducts = [
    "Blouses", "Tops", "Nighties", "Jumpsuits", "Nightsuits", 
    "Long dresses", "Skirts", "Shorts", "Scarves", "Caps"
  ];

  const menProducts = [
    "T-shirts", "PJ suits", "Boxers"
  ];

  const kidProducts = [
    "T-shirts", "Tops", "Rompers", "Baby suit sets", "Hooded T-Shirts"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-corporate-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Diverse Garment Collection
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a medley of attractive garments at the most competitive prices 
            with timely deliveries, all in perfect symphony with international trends
          </p>
        </div>
      </section>

      {/* Fabric Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Fabric Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shirt className="h-6 w-6 text-primary mr-2" />
                  Fabric Varieties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  We are capable of handling mostly all types of fabrics in cottons & polyesters and blends:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Moss crepe</span>
                  <span>• Georgette</span>
                  <span>• Jacquards</span>
                  <span>• Linen</span>
                  <span>• Canvas</span>
                  <span>• Twill</span>
                  <span>• Voile</span>
                  <span>• Poplin</span>
                  <span>• Denim</span>
                  <span>• Cotton crapes</span>
                  <span>• Gauze</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-6 w-6 text-primary mr-2" />
                  Eco & Specialty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Eco & Organic Quality</h4>
                    <p className="text-foreground text-sm">
                      Available in both woven & knitted fabrics
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Hand Crochet Garments</h4>
                    <p className="text-foreground text-sm">
                      Specialized in handcrafted crochet work
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Women's Wear */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Women's & Girl's Wear</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img 
                    src={womensShorts} 
                    alt="Women's denim shorts" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  {womenProducts.map((product, index) => (
                    <span key={index} className="text-foreground">• {product}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Men's Wear */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Men's Wear</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img 
                    src={mensPjSet} 
                    alt="Men's pajama set" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {menProducts.map((product, index) => (
                    <div key={index} className="text-foreground">• {product}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Kid's Wear */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">Kid's Wear</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img 
                    src={kidsWear} 
                    alt="Children's clothing" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  {kidProducts.map((product, index) => (
                    <div key={index} className="text-foreground">• {product}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;