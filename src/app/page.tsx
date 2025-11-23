"use client";
import { Navbar } from "@/components/navbar";
import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  HeadphonesIcon,
  Currency,
  BarChart3,
  Gem,
  Bitcoin,
  Download,
  Smartphone,
  Monitor,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Masonry from "@/components/mansory";
import TiltedCard from "@/components/titltedcard";

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for navbar hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar logic - hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN - hide navbar after delay
        setTimeout(() => {
          if (window.scrollY > lastScrollY) {
            setIsNavVisible(false);
          }
        }, 100);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP - show navbar instantly
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  // Market cards data with consistent heights
  const marketCards = [
    {
      id: 1,
      icon: <Currency className="w-8 h-8" />,
      title: "Forex",
      description:
        "Trade 60+ currency pairs with tight spreads and instant execution. Access major, minor and exotic pairs.",
      pairs: "60+ Pairs",
      imageSrc:
        "https://images.unsplash.com/photo-1613243555978-636c48dc653c?w=400&h=500&fit=crop&auto=format",
      altText: "Forex Trading",
      delay: 0,
      height: "h-80",
    },
    {
      id: 2,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Stocks",
      description:
        "500+ global company shares from major stock exchanges worldwide. Invest in top companies.",
      pairs: "500+ Stocks",
      imageSrc:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=600&fit=crop&auto=format",
      altText: "Stock Trading",
      delay: 0.1,
      height: "h-96",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Indices",
      description:
        "Major global indices including S&P 500, NASDAQ, FTSE 100. Track world markets.",
      pairs: "20+ Indices",
      imageSrc:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=450&fit=crop&auto=format",
      altText: "Indices Trading",
      delay: 0.2,
      height: "h-72",
    },
    {
      id: 4,
      icon: <Gem className="w-8 h-8" />,
      title: "Commodities",
      description:
        "Gold, silver, oil and energy markets with competitive pricing. Diversify your portfolio.",
      pairs: "15+ Commodities",
      imageSrc:
        "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=550&fit=crop&auto=format",
      altText: "Commodities Trading",
      delay: 0.3,
      height: "h-84",
    },
    {
      id: 5,
      icon: <Bitcoin className="w-8 h-8" />,
      title: "Crypto",
      description:
        "Bitcoin, Ethereum and major cryptocurrencies with 24/7 trading. Digital currency markets.",
      pairs: "30+ Crypto Pairs",
      imageSrc:
        "https://images.unsplash.com/photo-1516245834210-8e0b6e0f8e1c?w=400&h=500&fit=crop&auto=format",
      altText: "Cryptocurrency Trading",
      delay: 0.4,
      height: "h-80",
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: "ETFs",
      description:
        "Diversify with Exchange Traded Funds across various sectors and markets.",
      pairs: "100+ ETFs",
      imageSrc:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=480&fit=crop&auto=format",
      altText: "ETF Trading",
      delay: 0.5,
      height: "h-76",
    },
  ];

  // Platform features
  const platformFeatures = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Advanced Charting",
      description:
        "Professional charts with 80+ technical indicators and analytical tools",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "One-Click Trading",
      description: "Execute trades instantly with single click execution",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Expert Advisors",
      description: "Automate your trading with custom algorithms and robots",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Trading",
      description: "Trade anywhere with full-featured mobile applications",
    },
  ];

  // Download links
  const downloadLinks = [
    {
      icon: <Monitor className="w-6 h-6" />,
      platform: "Windows",
      description: "Desktop Platform",
      link: "#",
      type: "desktop",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      platform: "macOS",
      description: "Desktop Platform",
      link: "#",
      type: "desktop",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      platform: "Android",
      description: "Mobile App",
      link: "#",
      type: "mobile",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      platform: "iOS",
      description: "Mobile App",
      link: "#",
      type: "mobile",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      platform: "Web Platform",
      description: "Browser Based",
      link: "#",
      type: "web",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <motion.div
          className="relative z-10 container mx-auto px-4 py-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/20"
            >
              <Shield className="w-4 h-4 text-black dark:text-white" />
              <span className="text-sm font-medium">
                Regulated by Labuan FSA
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Trade Forex & CFDs With Confidence
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Experience next-generation trading with advanced tools,
              competitive spreads, and a platform designed for both beginners
              and professionals.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button size="lg">Open Live Account</Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-sm bg-background/50"
              >
                Open Demo Account
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-3 pt-8"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <HeadphonesIcon className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">
                  24/7 Customer Support
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <Zap className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">
                  Lightning Fast Execution
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-3.5 h-3.5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">
                  2000+ Trading Instruments
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trade Global Markets Section */}
      <section className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Trade Global Markets
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Access 1000+ instruments across multiple asset classes with
              competitive pricing
            </motion.p>

            {/* Masonry Layout - Fixed */}
            <Masonry columns={3} gap={24} className="mx-auto">
              {marketCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.delay }}
                  className="mb-6"
                >
                  <TiltedCard
                    imageSrc={card.imageSrc}
                    altText={card.altText}
                    captionText={card.title}
                    className={card.height}
                  >
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-white/90 mb-4 text-sm leading-relaxed line-clamp-3">
                        {card.description}
                      </p>
                      <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 inline-block">
                        <span className="text-sm font-semibold text-white">
                          {card.pairs}
                        </span>
                      </div>
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </Masonry>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                View All Instruments
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trading Platforms Section */}
      {/* Trading Platforms Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Trading Platforms
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Trade with the world's most popular platform MT5, featuring
                  advanced charting tools, fast execution, and customizable
                  interfaces.
                </motion.p>

                {/* Platform Features - Smaller Cards */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {[
                    {
                      icon: <BarChart3 className="w-6 h-6" />,
                      title: "Advanced Charting",
                      description:
                        "80+ technical indicators & analytical tools",
                    },
                    {
                      icon: <Zap className="w-6 h-6" />,
                      title: "One-Click Trading",
                      description: "Instant single click execution",
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Expert Advisors",
                      description: "Custom algorithms & trading robots",
                    },
                    {
                      icon: <Smartphone className="w-6 h-6" />,
                      title: "Mobile Trading",
                      description: "Full-featured mobile applications",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-blue-400 mt-0.5 shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Links - Platform Specific Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Download MT5 Platform
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        icon: (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 3.449L9.75 2.1V9.551H0V3.449ZM0 10.5H9.75V21.9L0 20.549V10.5ZM10.5 2.1L24 0V11.4H10.5V2.1ZM10.5 12.6H24V24L10.5 22.649V12.6Z" />
                          </svg>
                        ),
                        platform: "Windows",
                        link: "#",
                        bgColor: "bg-blue-500/20 hover:bg-blue-500/30",
                        borderColor: "border-blue-500/50 hover:border-blue-500",
                      },
                      {
                        icon: (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
                          </svg>
                        ),
                        platform: "macOS",
                        link: "#",
                        bgColor: "bg-gray-500/20 hover:bg-gray-500/30",
                        borderColor: "border-gray-500/50 hover:border-gray-500",
                      },
                      {
                        icon: (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-1.9973 3.4592c-1.4431-1.0312-3.3226-1.6507-5.3598-1.6507-2.0371 0-3.9165.6195-5.3598 1.6507L2.838 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C1.6676 10.6347 0 13.2295 0 16.0856c0 4.4246 3.6134 8.0374 8.0374 8.0374h7.9252c4.4246 0 8.0374-3.6128 8.0374-8.0374 0-2.8561-1.6676-5.4509-4.1321-6.7642" />
                          </svg>
                        ),
                        platform: "Android",
                        link: "#",
                        bgColor: "bg-green-500/20 hover:bg-green-500/30",
                        borderColor:
                          "border-green-500/50 hover:border-green-500",
                      },
                      {
                        icon: (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
                          </svg>
                        ),
                        platform: "iOS",
                        link: "#",
                        bgColor: "bg-gray-400/20 hover:bg-gray-400/30",
                        borderColor: "border-gray-400/50 hover:border-gray-400",
                      },
                      {
                        icon: (
                          <svg
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                        ),
                        platform: "Web",
                        link: "#",
                        bgColor: "bg-purple-500/20 hover:bg-purple-500/30",
                        borderColor:
                          "border-purple-500/50 hover:border-purple-500",
                      },
                    ].map((platform, index) => (
                      <motion.a
                        key={platform.platform}
                        href={platform.link}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl border-2 transition-all duration-300 ${platform.bgColor} ${platform.borderColor} group cursor-pointer`}
                        title={`Download for ${platform.platform}`}
                      >
                        <div className="text-white mb-1">{platform.icon}</div>
                        <span className="text-xs font-medium text-white group-hover:text-blue-200 transition-colors">
                          {platform.platform}
                        </span>
                        <div className="absolute -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Download className="w-3 h-3 text-white" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Content - MT5 Web Platform Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src="/mt5-platform-devices.svg"
                    alt="MetaTrader 5 Multi-Platform Trading"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold text-xs">
                    MT5 Multi-Platform
                  </div>

                  {/* Platform Info */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">MetaTrader 5</h3>
                    <p className="text-gray-300 text-sm">
                      Desktop, Web & Mobile Trading
                    </p>
                  </div>
                </div>

                {/* Platform Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">80+</div>
                    <div className="text-xs text-gray-400 mt-1">Indicators</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-green-400">21</div>
                    <div className="text-xs text-gray-400 mt-1">Timeframes</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-bold text-purple-400">6</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Order Types
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Types Section */}
      {/* Account Types Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_var(--tw-gradient-stops))] from-purple-50/40 via-transparent to-transparent dark:from-purple-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,_var(--tw-gradient-stops))] from-emerald-50/40 via-transparent to-transparent dark:from-emerald-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Section Header */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Choose Your Account
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Select the perfect account that matches your trading style
            </motion.p>

            {/* Account Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: "Standard",
                  title: "Standard Account",
                  description: "Perfect for beginners",
                  minDeposit: "$100",
                  spread: "From 1.2 pips",
                  commission: "$0",
                  leverage: "1:500",
                  features: [
                    "No Commission",
                    "All Trading Instruments",
                    "Educational Resources",
                    "24/5 Support",
                    "Mobile Trading",
                    "Free VPS Available",
                  ],
                  bgColor: "bg-gradient-to-br from-blue-50 to-sky-50",
                  borderColor: "border-blue-200",
                  accentColor: "from-blue-500 to-sky-600",
                  icon: "📊",
                  delay: 0,
                },
                {
                  type: "Pro",
                  title: "Professional Account",
                  description: "Advanced features for experienced traders",
                  minDeposit: "$500",
                  spread: "From 0.0 pips",
                  commission: "$3.5 per lot",
                  leverage: "1:200",
                  features: [
                    "Raw Spreads",
                    "Priority Execution",
                    "Advanced Tools",
                    "Dedicated Manager",
                    "Premium Analytics",
                    "Free VPS Included",
                  ],
                  bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
                  borderColor: "border-purple-200",
                  accentColor: "from-purple-500 to-violet-600",
                  icon: "⚡",
                  popular: true,
                  delay: 0.1,
                },
                {
                  type: "Islamic",
                  title: "Islamic Account",
                  description: "Swap-free Sharia compliant",
                  minDeposit: "$100",
                  spread: "From 1.5 pips",
                  commission: "$0",
                  leverage: "1:500",
                  features: [
                    "No Swap Fees",
                    "Sharia Compliant",
                    "All Instruments",
                    "No Overnight Interest",
                    "24/5 Support",
                    "Mobile Trading",
                  ],
                  bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
                  borderColor: "border-emerald-200",
                  accentColor: "from-emerald-500 to-teal-600",
                  icon: "🕌",
                  delay: 0.2,
                },
              ].map((account, index) => (
                <motion.div
                  key={account.type}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -6,
                    rotateY: 8,
                    rotateX: 2,
                  }}
                  transition={{
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative group cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Card Container */}
                  <div
                    className={`relative rounded-2xl ${account.bgColor} border ${account.borderColor} p-6 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}
                  >
                    {/* Popular Badge */}
                    {account.popular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: account.delay + 0.2,
                        }}
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
                      >
                        <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                          Most Popular
                        </div>
                      </motion.div>
                    )}

                    {/* Content */}
                    <div className="relative">
                      {/* Account Header */}
                      <div className="text-center mb-6">
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            rotate: 5,
                          }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${account.accentColor} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        >
                          <span className="text-xl text-white">
                            {account.icon}
                          </span>
                        </motion.div>

                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                          {account.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-sm">
                          {account.description}
                        </p>
                      </div>

                      {/* Pricing & Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: account.delay + 0.1,
                        }}
                        className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-white/60 dark:border-slate-700/60 shadow-sm"
                      >
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">
                            Min. Deposit
                          </div>
                          <div className="text-base font-semibold text-slate-800 dark:text-white">
                            {account.minDeposit}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">
                            Spreads
                          </div>
                          <div className="text-base font-semibold text-slate-800 dark:text-white">
                            {account.spread}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">
                            Commission
                          </div>
                          <div className="text-base font-semibold text-slate-800 dark:text-white">
                            {account.commission}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-gray-400 mb-1">
                            Leverage
                          </div>
                          <div className="text-base font-semibold text-slate-800 dark:text-white">
                            {account.leverage}
                          </div>
                        </div>
                      </motion.div>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {account.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: account.delay + 0.3 + featureIndex * 0.05,
                            }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className={`w-5 h-5 rounded-full bg-gradient-to-r ${account.accentColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
                            >
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </motion.div>
                            <span className="text-sm text-slate-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: account.delay + 0.4,
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          className={`w-full py-3 rounded-xl bg-gradient-to-r ${account.accentColor} text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        >
                          Open Account
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${account.accentColor} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Comparison CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 p-6 rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                Need help choosing?
              </h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 max-w-md mx-auto">
                Our experts will help you select the perfect account based on
                your experience and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="sm"
                  className="bg-slate-700 hover:bg-slate-600 text-white text-sm shadow-md"
                >
                  Compare Accounts
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-gray-300 text-sm"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Trading Platform Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center text-white"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Advanced Trading Tools
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional tools and features designed for successful trading
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Charting",
                  description:
                    "Professional trading charts with 100+ technical indicators and drawing tools",
                  icon: "📊",
                },
                {
                  title: "Risk Management",
                  description:
                    "Advanced risk management tools including stop loss, take profit, and trailing stops",
                  icon: "🛡️",
                },
                {
                  title: "Mobile Trading",
                  description:
                    "Trade on the go with our feature-rich mobile app for iOS and Android",
                  icon: "📱",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Trading?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of successful traders and experience the difference
              with our premium trading platform
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Open Live Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl"
              >
                Try Demo Account
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Regulated & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Fast Execution</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}