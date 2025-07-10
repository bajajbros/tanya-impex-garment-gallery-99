import { Link } from "react-router-dom";
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TANYA IMPEX</h3>
            <p className="text-gray-300 mb-4">
              Leading manufacturers & exporters of readymade garments since 2008.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/tanyaimpexprivate-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/tanyaimpex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-gray-300 hover:text-white transition-colors">
                  Infrastructure & Quality
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-300 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  W-18 & W-19, Sec-11, Noida-201301, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91-120-4516375</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm">sunilgrover@tanyaimpex.com</span>
              </div>
            </div>
          </div>

          {/* Production Capacity */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Capacity</h4>
            <div className="space-y-2 text-gray-300">
              <div className="text-sm">
                <span className="font-semibold text-white">270,000</span> garments/month
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">90,000</span> sq. ft. facility
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">US$ 14M</span> annual turnover
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 TANYA IMPEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;