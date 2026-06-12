import { useState, useEffect } from 'react';
import {
  Menu as MenuIcon,
  X,
  MapPin,
  Phone,
  Clock,
  Mail,
  Star,
  ChevronRight,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Heart,
  Users,
  Award,
  Utensils,
} from 'lucide-react';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-amber-950/98 backdrop-blur-md shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Utensils className="h-6 w-6 text-amber-950" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-amber-100 tracking-wide">
                Golden Bistro
              </span>
              <p className="text-[10px] text-amber-400/80 tracking-[0.2em] uppercase">Family Restaurant</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-amber-100/80 hover:text-amber-300 transition-colors text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              className="ml-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 px-6 py-3 rounded-full text-sm uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-amber-500/25"
            >
              Reserve Table
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-amber-100 p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-amber-800/50">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-amber-100/80 hover:text-amber-300 transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 px-6 py-3 rounded-full text-sm uppercase tracking-widest font-semibold text-center mt-2"
              >
                Reserve Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Elegant dining table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-amber-950/80 to-amber-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-amber-500 to-transparent" />
            <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
              Welcome to Golden Bistro
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-amber-50 leading-tight mb-6">
            Where Every Meal
            <span className="block font-semibold text-amber-400">Becomes a Memory</span>
          </h1>

          <p className="text-lg sm:text-xl text-amber-100/70 mb-10 leading-relaxed max-w-xl">
            Experience the rich flavors of India with our family recipes passed down through generations.
            A warm, welcoming space for families to create lasting memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-xl hover:shadow-amber-500/30"
            >
              View Menu
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-500/50 hover:border-amber-500 text-amber-100 px-8 py-4 rounded-full text-sm uppercase tracking-widest font-semibold transition-all hover:bg-amber-500/10"
            >
              Find Us
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-amber-800/30">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-amber-500" />
              <div>
                <p className="text-amber-100 font-bold text-lg">15+ Years</p>
                <p className="text-amber-400/70 text-xs uppercase tracking-wider">of Excellence</p>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-amber-800/50" />
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-amber-500" />
              <div>
                <p className="text-amber-100 font-bold text-lg">50,000+</p>
                <p className="text-amber-400/70 text-xs uppercase tracking-wider">Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-amber-400/60 text-xs uppercase tracking-widest">Scroll</p>
          <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Dishes Section
function FeaturedDishes() {
  const dishes = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in rich, creamy tomato sauce with aromatic spices",
      image: "/Screenshot_2026-06-12_at_4.15.16_PM.png",
      price: "₹445",
      tag: "Bestseller",
    },
    {
      name: "Hyderabadi Biryani",
      description: "Fragrant basmati rice layered with succulent meat and saffron",
      image: "/Screenshot_2026-06-12_at_4.16.13_PM.png",
      price: "₹525",
      tag: "Chef's Special",
    },
    {
      name: "Paneer Tikka",
      description: "Marinated cottage cheese grilled to perfection in tandoor",
      image: "/Screenshot_2026-06-12_at_4.16.48_PM.png",
      price: "₹345",
      tag: "Vegetarian",
    },
    {
      name: "Masala Dosa",
      description: "Crispy crepe filled with spiced potatoes, served with chutneys",
      image: "/Screenshot_2026-06-12_at_4.17.43_PM.png",
      price: "₹195",
      tag: "South Indian",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-950 to-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
            Our Specialties
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50">
            Featured Dishes
          </h2>
          <p className="mt-4 text-amber-200/60 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative bg-stone-900/80 rounded-2xl overflow-hidden border border-amber-900/30 hover:border-amber-600/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 bg-amber-500 text-amber-950 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {dish.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif text-amber-50 group-hover:text-amber-300 transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-amber-500 font-bold text-lg">{dish.price}</span>
                </div>
                <p className="text-amber-200/50 text-sm leading-relaxed">{dish.description}</p>
                <button className="mt-4 w-full bg-amber-900/50 hover:bg-amber-600 text-amber-100 hover:text-amber-950 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium transition-all">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const stats = [
    { icon: Award, value: "15+", label: "Years of Service" },
    { icon: Users, value: "50K+", label: "Happy Families" },
    { icon: Utensils, value: "150+", label: "Dishes" },
    { icon: Star, value: "4.9", label: "Rating" },
  ];

  return (
    <section id="about" className="py-24 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Restaurant interior"
                  className="w-full h-48 md:h-56 object-cover rounded-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/3184181/pexels-photo-3184181.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Family dining"
                  className="w-full h-64 md:h-72 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chef cooking"
                  className="w-full h-64 md:h-72 object-cover rounded-2xl"
                />
                <img
                  src="https://images.pexels.com/photos/6836632/pexels-photo-6836632.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Food presentation"
                  className="w-full h-48 md:h-56 object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 shadow-2xl">
              <p className="text-amber-950 font-bold text-3xl">Since</p>
              <p className="text-amber-950 font-serif text-5xl">2009</p>
            </div>
          </div>

          <div>
            <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
              Our Story
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50 leading-tight">
              A Family Tradition of
              <span className="text-amber-400"> Excellence</span>
            </h2>

            <p className="mt-6 text-amber-200/70 leading-relaxed text-lg">
              Golden Bistro was born from a simple dream - to bring the authentic flavors of Indian
              home cooking to families across the city. What started as a small family kitchen has
              grown into a beloved destination for food lovers.
            </p>

            <p className="mt-4 text-amber-200/60 leading-relaxed">
              Our recipes have been passed down through three generations, each dish telling a story
              of our heritage. We use only the freshest ingredients, traditional cooking methods,
              and a lot of love to create dishes that bring families together.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-amber-900/30 rounded-xl p-4 text-center border border-amber-800/30">
                  <stat.icon className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <p className="text-amber-100 font-bold text-xl">{stat.value}</p>
                  <p className="text-amber-400/60 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 mt-8 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
            >
              Explore Our Menu
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🍽️' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'breads', name: 'Breads & Rice', icon: '🫓' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
  ];

  const menuItems: Record<string, Array<{ name: string; description: string; price: string; isVeg: boolean; spicy?: boolean }>> = {
    starters: [
      { name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney", price: "₹85", isVeg: true },
      { name: "Paneer Tikka", description: "Marinated cottage cheese cubes grilled in tandoor with bell peppers", price: "₹285", isVeg: true },
      { name: "Chicken 65", description: "Deep-fried chicken with spicy yogurt marinade and curry leaves", price: "₹295", isVeg: false, spicy: true },
      { name: "Onion Bhaji", description: "Crispy onion fritters with gram flour and spices", price: "₹145", isVeg: true },
      { name: "Fish Amritsari", description: "Batter-fried fish with aromatic spices and lemon", price: "₹325", isVeg: false },
      { name: "Hara Bhara Kebab", description: "Spinach and peas patties with mint, a healthy vegetarian delight", price: "₹195", isVeg: true },
    ],
    mains: [
      { name: "Butter Chicken", description: "Tender chicken in rich tomato-cream sauce with butter and kasuri methi", price: "₹445", isVeg: false },
      { name: "Palak Paneer", description: "Cottage cheese cubes in creamy spinach gravy", price: "₹345", isVeg: true },
      { name: "Mutton Rogan Josh", description: "Tender lamb in aromatic Kashmiri spice gravy", price: "₹525", isVeg: false },
      { name: "Dal Makhani", description: "Black lentils slow-cooked overnight with butter and cream", price: "₹285", isVeg: true },
      { name: "Chicken Chettinad", description: "South Indian style chicken with coconut and black pepper", price: "₹395", isVeg: false, spicy: true },
      { name: "Malai Kofta", description: "Cheese and potato dumplings in rich cashew-cream gravy", price: "₹325", isVeg: true },
    ],
    breads: [
      { name: "Butter Naan", description: "Soft leavened bread brushed with butter, baked in tandoor", price: "₹55", isVeg: true },
      { name: "Garlic Naan", description: "Naan topped with fresh garlic and coriander", price: "₹75", isVeg: true },
      { name: "Hyderabadi Biryani", description: "Fragrant basmati rice with meat/vegetables and saffron", price: "₹425", isVeg: false },
      { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds", price: "₹145", isVeg: true },
      { name: "Laccha Paratha", description: "Layered whole wheat bread, crispy and flaky", price: "₹65", isVeg: true },
      { name: "Veg Pulao", description: "Fragrant rice with mixed vegetables and whole spices", price: "₹195", isVeg: true },
    ],
    desserts: [
      { name: "Gulab Jamun", description: "Soft milk dumplings soaked in rose-cardamom sugar syrup", price: "₹95", isVeg: true },
      { name: "Rasmalai", description: "Soft cottage cheese patties in sweetened, cardamom-flavored milk", price: "₹125", isVeg: true },
      { name: "Kulfi", description: "Traditional Indian ice cream with pistachios and saffron", price: "₹115", isVeg: true },
      { name: "Gajar Ka Halwa", description: "Warm carrot pudding with ghee, nuts, and condensed milk", price: "₹145", isVeg: true },
      { name: "Kheer", description: "Creamy rice pudding slow-cooked with cardamom and nuts", price: "₹105", isVeg: true },
      { name: "Jalebi", description: "Crispy spiral sweets soaked in saffron syrup", price: "₹85", isVeg: true },
    ],
    beverages: [
      { name: "Masala Chai", description: "Traditional spiced tea with ginger and cardamom", price: "₹55", isVeg: true },
      { name: "Lassi", description: "Yogurt-based drink - Sweet or Salted", price: "₹85", isVeg: true },
      { name: "Mango Lassi", description: "Creamy mango and yogurt smoothie", price: "₹115", isVeg: true },
      { name: "Fresh Lime Soda", description: "Refreshing lime with soda - Sweet or Salted", price: "₹65", isVeg: true },
      { name: "Buttermilk (Chaas)", description: "Spiced buttermilk with cumin and coriander", price: "₹55", isVeg: true },
      { name: "Filter Coffee", description: "Traditional South Indian filter coffee", price: "₹75", isVeg: true },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
            Culinary Delights
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50">
            Our Menu
          </h2>
          <p className="mt-4 text-amber-200/60 max-w-2xl mx-auto">
            Authentic Indian flavors crafted with love, from our family to yours
          </p>
        </div>

        {/* Category Tabs - Scrollable on Mobile */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-lg shadow-amber-500/25'
                  : 'bg-amber-900/40 text-amber-200/70 hover:bg-amber-900/60 hover:text-amber-200 border border-amber-800/30'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="group bg-stone-900/60 rounded-xl p-5 border border-amber-900/30 hover:border-amber-600/40 transition-all cursor-pointer"
              onClick={() => setExpandedItem(expandedItem === `${activeCategory}-${index}` ? null : `${activeCategory}-${index}`)}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-3 h-3 rounded-full border ${item.isVeg ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600'}`} />
                    <h3 className="text-lg font-serif text-amber-50 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    {item.spicy && <span className="text-orange-500 text-xs">🌶️</span>}
                  </div>
                  <p className={`text-amber-200/50 text-sm leading-relaxed transition-all ${expandedItem === `${activeCategory}-${index}` ? 'line-clamp-none' : 'line-clamp-2'}`}>
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-400 font-bold text-lg whitespace-nowrap">{item.price}</span>
                  <ChevronDown className={`h-5 w-5 text-amber-500 transition-transform ${expandedItem === `${activeCategory}-${index}` ? 'rotate-180' : ''}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-amber-400/60 text-sm">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 border border-green-600 mr-1" /> Vegetarian
            <span className="mx-2">|</span>
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 border border-red-600 mr-1 ml-2" /> Non-Vegetarian
          </p>
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const images = [
    { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Restaurant Ambiance" },
    { src: "https://images.pexels.com/photos/3184181/pexels-photo-3184181.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Family Dining" },
    { src: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Delicious Food" },
    { src: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Table Setting" },
    { src: "https://images.pexels.com/photos/6836632/pexels-photo-6836632.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Chef Preparing Food" },
    { src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Kitchen Action" },
    { src: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Interior Design" },
    { src: "https://images.pexels.com/photos/3016533/pexels-photo-3016533.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Dessert Display" },
  ];

  return (
    <section id="gallery" className="py-24 bg-amber-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
            Visual Journey
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50">
            Our Gallery
          </h2>
          <p className="mt-4 text-amber-200/60 max-w-2xl mx-auto">
            Step inside Golden Bistro and experience our warm, family-friendly atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? 'h-64 md:h-full min-h-[300px]' : 'h-32 md:h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-amber-100 font-medium text-sm">{image.alt}</p>
              </div>
              <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-xl transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Best family dining experience! The butter chicken is absolutely divine. Kids loved the ambience and staff was so accommodating. Will definitely come back!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      dish: "Butter Chicken",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "The Hyderabadi Biryani reminded me of my grandmother's cooking. Authentic flavors and generous portions. Perfect for family gatherings!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      dish: "Hyderabadi Biryani",
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      rating: 5,
      text: "A hidden gem! The Paneer Tikka was perfectly charred, and the service was impeccable. Great for both casual dinners and celebrations.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      dish: "Paneer Tikka",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-amber-950 to-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
            What Our Guests Say
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50">
            Customer Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-stone-900/60 rounded-2xl p-6 border border-amber-900/30 hover:border-amber-600/40 transition-all group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <p className="text-amber-200/70 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-amber-900/30">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-amber-100 font-medium">{review.name}</h4>
                    <p className="text-amber-400/60 text-sm flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <p className="text-amber-400/70 text-sm">Loved the {review.dish}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-900/30 px-6 py-3 rounded-full border border-amber-800/30">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-amber-100 font-semibold">4.9</span>
            <span className="text-amber-400/60 text-sm">based on 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Restaurant location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-transparent to-transparent" />

            <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-4 shadow-xl">
              <p className="text-amber-950 font-bold text-sm uppercase tracking-wider">Visit Us</p>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-amber-100 mb-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="font-medium">42, MG Road, Connaught Place, New Delhi - 110001</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors text-sm"
              >
                Get Directions
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-amber-50 mb-8">
              Location & Hours
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Address</h4>
                  <p className="text-amber-200/60">42, MG Road, Connaught Place</p>
                  <p className="text-amber-200/60">New Delhi - 110001, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Phone</h4>
                  <p className="text-amber-200/60">+91 8320150054</p>
                  <p className="text-amber-200/60">+91 8320150054 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Email</h4>
                  <p className="text-amber-200/60">reservations@goldenbistro.in</p>
                  <p className="text-amber-200/60">info@goldenbistro.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-amber-100 font-semibold mb-1">Opening Hours</h4>
                  <div className="text-amber-200/60 space-y-1">
                    <p><span className="text-amber-400">Mon - Thu:</span> 11:00 AM - 10:30 PM</p>
                    <p><span className="text-amber-400">Fri - Sun:</span> 11:00 AM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/918320150054"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
              <a
                href="tel:+918320150054"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 px-6 py-3 rounded-full font-medium transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reservation Section
function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
  };

  return (
    <section id="reservations" className="py-24 bg-gradient-to-b from-stone-900 to-amber-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-amber-400 text-sm uppercase tracking-[0.3em] font-medium">
            Reserve Your Table
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-amber-50">
            Book a Table
          </h2>
          <p className="mt-4 text-amber-200/60">
            Let us make your dining experience special. Reserve your table today!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-stone-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-900/40">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-200/30 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-200/30 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Phone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-200/30 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
                placeholder="+91 8320150054"
              />
            </div>
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Number of Guests *</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-amber-200/80 text-sm mb-2 font-medium">Time *</label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
                className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
              >
                <option value="">Select time</option>
                {['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'].map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-amber-200/80 text-sm mb-2 font-medium">Occasion</label>
            <select
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all"
            >
              <option value="">Select occasion (optional)</option>
              {['Birthday', 'Anniversary', 'Business Dinner', 'Family Gathering', 'Date Night', 'Other'].map((occ) => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className="block text-amber-200/80 text-sm mb-2 font-medium">Special Requests</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full bg-stone-800/70 border border-amber-900/50 rounded-xl px-4 py-3 text-amber-50 placeholder-amber-200/30 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-all resize-none"
              placeholder="Any dietary requirements, allergies, or special arrangements needed?"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 py-4 rounded-xl text-sm uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-amber-500/30"
          >
            Confirm Reservation
          </button>

          <p className="text-amber-400/50 text-sm text-center mt-4">
            We&apos;ll confirm your reservation via phone or email within 2 hours
          </p>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-amber-950 border-t border-amber-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Utensils className="h-6 w-6 text-amber-950" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-100">Golden Bistro</span>
              </div>
            </div>
            <p className="text-amber-200/50 leading-relaxed text-sm mb-6">
              A family-friendly restaurant serving authentic Indian cuisine with love since 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Facebook className="h-5 w-5 text-amber-300 group-hover:text-amber-950" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Instagram className="h-5 w-5 text-amber-300 group-hover:text-amber-950" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors group">
                <Twitter className="h-5 w-5 text-amber-300 group-hover:text-amber-950" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-amber-100 font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Menu', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-amber-200/50 hover:text-amber-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-100 font-semibold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              {['Dine-In', 'Takeaway', 'Home Delivery', 'Catering', 'Private Events'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-amber-200/50 hover:text-amber-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-amber-100 font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-3 text-amber-200/50 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                Connaught Place, New Delhi
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500" />
                +91 8320150054
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                info@goldenbistro.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-amber-200/40 text-sm">
            © 2024 Golden Bistro. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-amber-200/40 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918320150054"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute right-full mr-3 bg-white text-gray-900 px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us!
      </span>
    </a>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-stone-900 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturedDishes />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <ReservationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
