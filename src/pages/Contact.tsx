import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-corporate-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch With Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to partner with a trusted garment manufacturer? Contact us today 
            to discuss your requirements and discover how we can serve your needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Registered Office</h4>
                    <p className="text-foreground text-sm">
                      R 4/190, Subash Nagar, New Delhi-110027
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Factory Locations</h4>
                    <div className="space-y-2 text-sm text-foreground">
                      <p>W-18 & W-19, Sec-11, Noida-201301, Uttar Pradesh, India</p>
                      <p>C-74, Sec-58, Noida-201301, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-2" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Phone Numbers</h4>
                    <div className="space-y-1 text-sm text-foreground">
                      <p>+91-120-4516375 / 4504704</p>
                      <p>+91-9810856613</p>
                      <p>+91-9810156613</p>
                      <p>+91-9811079407</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Email Addresses</h4>
                    <div className="space-y-1 text-sm text-foreground">
                      <p>sunilgrover@tanyaimpex.com</p>
                      <p>bhavukgrover@tanyaimpex.com</p>
                      <p>pankajkhanna@tanyaimpex.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/tanyaimpexprivate-limited"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="https://facebook.com/tanyaimpex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-secondary p-4 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Note:</strong> Bank information available upon request for security purposes.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-2" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, order quantities, delivery timelines, etc."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Our Factories</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-foreground">
                Our manufacturing facilities are located in Noida, Uttar Pradesh, India. 
                For detailed directions and facility visits, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;