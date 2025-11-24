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
  Copy,
  GraduationCap,
  Lock,
  Landmark,
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
            {/* Section Header */}
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
              Access over 2000+ trading instruments across multiple asset classes
            </motion.p>

            {/* Masonry Layout with Tilted Cards */}
            <Masonry columns={3} gap={24} className="mx-auto">
              {[
                {
                  id: 1,
                  icon: <Currency className="w-8 h-8" />,
                  title: "Forex",
                  description: "Trade major, minor, and exotic currency pairs with competitive spreads",
                  badge: "60+ Pairs",
                  imageSrc: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=600&fit=crop&auto=format",
                  altText: "Forex Trading",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: 0,
                  height: "h-96",
                },
                {
                  id: 2,
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Stocks",
                  description: "Access global stock markets and trade shares of leading companies",
                  badge: "500+ Stocks",
                  imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=450&fit=crop&auto=format",
                  altText: "Stock Trading",
                  gradient: "from-green-500 to-emerald-500",
                  delay: 0.1,
                  height: "h-72",
                },
                {
                  id: 3,
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Indices",
                  description: "Trade the world's most popular stock indices with tight spreads",
                  badge: "30+ Indices",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-financial-stock-market-indices-tr-c924fcf1-20251123233323.jpg",
                  altText: "Indices Trading",
                  gradient: "from-purple-500 to-pink-500",
                  delay: 0.2,
                  height: "h-84",
                },
                {
                  id: 4,
                  icon: <Gem className="w-8 h-8" />,
                  title: "Commodities",
                  description: "Trade precious metals, energies, and agricultural commodities",
                  badge: "50+ Commodities",
                  imageSrc: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=500&fit=crop&auto=format",
                  altText: "Commodities Trading",
                  gradient: "from-yellow-500 to-orange-500",
                  delay: 0.3,
                  height: "h-80",
                },
                {
                  id: 5,
                  icon: <Bitcoin className="w-8 h-8" />,
                  title: "Crypto",
                  description: "Trade popular cryptocurrencies 24/7 with leverage",
                  badge: "20+ Cryptos",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-cryptocurrency-trading-concept-di-03e55f6e-20251123233127.jpg",
                  altText: "Crypto Trading",
                  gradient: "from-orange-500 to-red-500",
                  delay: 0.4,
                  height: "h-76",
                },
                {
                  id: 6,
                  icon: <Globe className="w-8 h-8" />,
                  title: "ETFs",
                  description: "Diversify your portfolio with Exchange-Traded Funds",
                  badge: "100+ ETFs",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-etf-exchange-traded-funds-investm-9e65a78f-20251123233323.jpg",
                  altText: "ETF Trading",
                  gradient: "from-indigo-500 to-blue-500",
                  delay: 0.5,
                  height: "h-82",
                },
              ].map((market) => (
                <motion.div
                  key={market.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: market.delay }}
                  className="mb-6"
                >
                  <TiltedCard
                    imageSrc={market.imageSrc}
                    altText={market.altText}
                    className={market.height}
                  >
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          {market.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {market.title}
                        </h3>
                      </div>
                      <p className="text-white/90 mb-4 text-sm leading-relaxed line-clamp-3">
                        {market.description}
                      </p>
                      <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 inline-block">
                        <span className="text-sm font-semibold text-white">
                          {market.badge}
                        </span>
                      </div>
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </Masonry>

            {/* CTA Button */}
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
                Explore All Markets
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trading Platforms Section */}
      <section className="min-h-screen bg-[#f0f4f8] dark:bg-[#0f0b07] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-slate-800 dark:text-white">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Trading Platforms
                </motion.h2>

                <motion.p
                  className="text-xl text-slate-600 dark:text-gray-300 mb-8"
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
                      className="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1 text-slate-800 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
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
                  <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
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
                        <div className="text-slate-700 dark:text-white mb-1">{platform.icon}</div>
                        <span className="text-xs font-medium text-slate-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">
                          {platform.platform}
                        </span>
                        <div className="absolute -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Download className="w-3 h-3 text-slate-700 dark:text-white" />
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/20">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/mt5platform-1763519063444-1763934595347.jpg?width=8000&height=8000&resize=contain"
                    alt="MetaTrader 5 Multi-Platform Trading"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                  {/* Platform Info */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold mb-1 text-white">MetaTrader 5</h3>
                    <p className="text-white text-sm">
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
                  <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">80+</div>
                    <div className="text-xs text-slate-600 dark:text-gray-400 mt-1">Indicators</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">21</div>
                    <div className="text-xs text-slate-600 dark:text-gray-400 mt-1">Timeframes</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6</div>
                    <div className="text-xs text-slate-600 dark:text-gray-400 mt-1">
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
      <section className="min-h-screen bg-slate-50 dark:bg-background flex items-center justify-center py-20">
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
                  bgColor: "bg-white dark:bg-slate-900/50",
                  borderColor: "border-slate-200 dark:border-slate-700/50",
                  accentColor: "from-slate-600 to-slate-700",
                  icon: "📊",
                  delay: 0,
                },
                {
                  type: "Pro",
                  title: "Professional Account",
                  description: "For Experience Traders",
                  minDeposit: "$500",
                  spread: "From 0.0 pips",
                  commission: "$3.5 per lot",
                  leverage: "1:200",
                  features: [
                    "Raw Spreads",
                    "Priority Execution",
                    "Dedicated Manager",
                    "Premium Analytics",
                    "Free VPS Included",
                  ],
                  bgColor: "bg-white dark:bg-slate-800/60",
                  borderColor: "border-slate-200 dark:border-slate-700/50",
                  accentColor: "from-blue-600 to-blue-700",
                  icon: "⚡",
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
                  bgColor: "bg-white dark:bg-slate-900/50",
                  borderColor: "border-slate-200 dark:border-slate-700/50",
                  accentColor: "from-slate-600 to-slate-700",
                  icon: "🕌",
                  delay: 0.2,
                },
              ].map((account, index) => (
                <motion.div
                  key={account.type}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative group cursor-pointer"
                >
                  {/* Card Container */}
                  <div
                    className={`relative rounded-2xl ${account.bgColor} border-2 ${account.borderColor} p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full backdrop-blur-sm flex flex-col`}
                  >
                    {/* Content */}
                    <div className="relative flex-1 flex flex-col">
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
                        className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
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
                      <div className="space-y-2 mb-6 flex-1">
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto"
                      >
                        <button
                          className="w-full py-3 px-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Open Account
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Subtle Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${account.accentColor} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Comparison CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
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

      {/* Our Services Section */}
      <section className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            {/* Section Header */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive trading solutions designed to help you succeed
            </motion.p>

            {/* Masonry Layout with Tilted Cards */}
            <Masonry columns={3} gap={24} className="mx-auto">
              {[
                {
                  id: 1,
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Super Tight Spreads",
                  description: "Enjoy competitive spreads starting from 0.0 pips on major currency pairs and competitive pricing across all assets",
                  badge: "From 0.0 Pips",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-forex-trading-tight-spreads-conce-c45e1880-20251123233515.jpg",
                  altText: "Tight Spreads",
                  gradient: "from-green-500 to-emerald-500",
                  delay: 0,
                  height: "h-96",
                },
                {
                  id: 2,
                  icon: <Zap className="w-8 h-8" />,
                  title: "Ultra Fast Execution",
                  description: "Lightning-fast order execution with minimal latency. Trade with confidence knowing your orders are executed instantly",
                  badge: "Instant Execution",
                  imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=450&fit=crop&auto=format",
                  altText: "Fast Execution",
                  gradient: "from-yellow-500 to-orange-500",
                  delay: 0.1,
                  height: "h-72",
                },
                {
                  id: 3,
                  icon: <Copy className="w-8 h-8" />,
                  title: "Copy Trading",
                  description: "Follow and automatically copy the trades of successful traders. Perfect for beginners and busy professionals",
                  badge: "1000+ Traders",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-copy-trading-social-trading-conce-7226311a-20251123233514.jpg",
                  altText: "Copy Trading",
                  gradient: "from-purple-500 to-pink-500",
                  delay: 0.2,
                  height: "h-84",
                },
                {
                  id: 4,
                  icon: <HeadphonesIcon className="w-8 h-8" />,
                  title: "24/7 Client Support",
                  description: "Round-the-clock multilingual support team ready to assist you. Get help whenever you need it, day or night",
                  badge: "24/7 Available",
                  imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=500&fit=crop&auto=format",
                  altText: "Customer Support",
                  gradient: "from-indigo-500 to-blue-500",
                  delay: 0.3,
                  height: "h-80",
                },
                {
                  id: 5,
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Smart Education",
                  description: "Comprehensive educational resources including webinars, tutorials, market analysis, and trading guides for all levels",
                  badge: "Free Resources",
                  imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/28aaec83-16b3-459d-a24f-c7d65216651b/generated_images/modern-trading-education-learning-concep-6b5b87cd-20251123233526.jpg",
                  altText: "Trading Education",
                  gradient: "from-red-500 to-pink-500",
                  delay: 0.4,
                  height: "h-76",
                },
                {
                  id: 6,
                  icon: <Lock className="w-8 h-8" />,
                  title: "Fund Security",
                  description: "Your funds are protected with segregated accounts, negative balance protection, and tier-1 banking partnerships",
                  badge: "Fully Protected",
                  imageSrc: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=520&fit=crop&auto=format",
                  altText: "Fund Security",
                  gradient: "from-slate-500 to-gray-500",
                  delay: 0.5,
                  height: "h-82",
                },
              ].map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: service.delay }}
                  className="mb-6"
                >
                  <TiltedCard
                    imageSrc={service.imageSrc}
                    altText={service.altText}
                    className={service.height}
                  >
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white/90 mb-4 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 inline-block">
                        <span className="text-sm font-semibold text-white">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </TiltedCard>
                </motion.div>
              ))}
            </Masonry>

            {/* CTA Button */}
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
                Start Trading Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Need Help Getting Started Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 dark:from-blue-700 dark:via-blue-800 dark:to-blue-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Need help getting started?
            </h2>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Infinite Scrolling Payment Logos */}
            <div className="relative overflow-hidden">
              {/* Gradient Masks on both sides */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling Container */}
              <motion.div
                animate={{
                  x: [0, -1056],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                style={{
                  willChange: "transform",
                }}
                className="flex items-center gap-8"
              >
                {/* First set of items */}
                {[
                  { type: 'bank', icon: <Landmark className="w-full h-full text-slate-700 dark:text-slate-300" strokeWidth={2} fill="none" stroke="currentColor" /> },
                  { type: 'googlepay', icon: (
                    <svg viewBox="0 0 50 20" className="w-full h-full">
                      <path d="M23.697 9.975v5.82h-1.477V1.09h3.906c.947-.03 1.87.298 2.582.916.71.626 1.104 1.517 1.088 2.455.02.937-.373 1.83-1.088 2.455-.711.618-1.635.946-2.582.916h-2.429zm0-7.435v5.985h2.453c.614.02 1.21-.204 1.655-.623.448-.428.695-1.024.684-1.647.011-.623-.236-1.219-.684-1.647-.445-.419-1.041-.643-1.655-.623h-2.453zm9.955 3.888c1.082-.013 2.127.388 2.91 1.117.785.74 1.223 1.77 1.217 2.86v5.39h-1.43v-1.217h-.064c-.673.997-1.711 1.534-2.792 1.445-.895.055-1.774-.277-2.406-.908-.6-.58-.932-1.39-.916-2.23-.018-.866.342-1.697.992-2.294.685-.607 1.58-.929 2.502-.9 1.036-.03 2.052.278 2.888.877v-.62c.025-.624-.213-1.23-.66-1.672-.463-.45-1.085-.697-1.732-.686-.89-.03-1.74.392-2.246 1.117l-1.318-.828c.752-1.038 1.952-1.612 3.23-1.546v.095zm-2.07 5.85c-.012.487.183.956.54 1.302.373.334.86.51 1.36.492.695.036 1.37-.24 1.858-.76.517-.52.803-1.23.79-1.966-.577-.483-1.3-.74-2.04-.725-.61-.023-1.208.18-1.67.567-.443.37-.702.92-.69 1.493l-.147.596zm13.324-5.692v10.21h-1.43v-1.217h-.064c-.612.98-1.7 1.548-2.84 1.482-1.02.048-2.01-.333-2.73-1.052-.71-.743-1.1-1.743-1.07-2.78v-6.595h1.477v6.404c-.042.728.215 1.442.712 1.978.473.465 1.117.718 1.78.7.666.03 1.31-.242 1.78-.752.523-.556.802-1.29.78-2.04V6.586h1.477l.127-.001zm5.07 10.402c-.9.05-1.79-.213-2.516-.742-.708-.537-1.163-1.335-1.27-2.23l1.447-.6c.125.605.46 1.145.94 1.517.518.378 1.14.57 1.78.547.55.03 1.094-.126 1.556-.443.436-.28.696-.772.684-1.293.01-.464-.206-.902-.58-1.18-.45-.323-.967-.55-1.513-.66l-1.5-.35c-.77-.176-1.477-.567-2.04-1.133-.535-.537-.83-1.267-.815-2.023-.024-.87.347-1.7 1.007-2.254.727-.59 1.64-.896 2.574-.863.82-.03 1.626.197 2.31.648.627.446 1.09 1.08 1.32 1.81l-1.398.588c-.14-.47-.432-.873-.83-1.148-.42-.283-.915-.43-1.417-.42-.493-.027-.98.117-1.382.408-.366.254-.585.675-.588 1.133-.01.406.177.79.502 1.038.39.292.84.496 1.32.6l1.476.35c.82.186 1.565.616 2.135 1.235.547.6.844 1.38.837 2.183.035.932-.357 1.828-1.07 2.454-.778.648-1.762.98-2.77.933l-.16.095zm7.688-16.906V15.8h-1.477V1.09h1.477z" className="fill-slate-700 dark:fill-slate-300" />
                    </svg>
                  ) },
                  { type: 'applepay', icon: (
                    <svg viewBox="0 0 50 20" className="w-full h-full">
                      <path d="M7.138 3.736c.404-.525.68-1.254.604-1.983-.584.028-1.294.393-1.715.918-.378.459-.708 1.196-.62 1.9.655.05 1.328-.328 1.73-.835zm.595 1.002c-.96-.056-1.772.543-2.226.543-.454 0-1.158-.518-1.906-.504-1.31.014-2.52.762-3.193 1.938-1.363 2.367-.353 5.874 1.009 7.797.654.943 1.447 1.998 2.48 1.96.732-.028 1.012-.476 1.9-.476.89 0 1.132.476 1.905.462 1.045-.014 1.772-.962 2.44-1.905.756-1.087 1.065-2.146 1.086-2.202-.024-.014-2.088-.806-2.112-3.187-.023-1.987 1.623-2.937 1.696-2.993-.925-1.352-2.366-1.505-2.873-1.533-.016 0-1.146-.098-2.206.1zm9.474-2.03v13.866h2.146v-4.743h2.973c2.716 0 4.625-1.863 4.625-4.568 0-2.707-1.878-4.556-4.556-4.556h-5.188zm2.146 1.78h2.476c1.863 0 2.93.998 2.93 2.783 0 1.786-1.067 2.792-2.938 2.792h-2.468v-5.575zm12.726 12.17c1.352 0 2.602-.686 3.172-1.771h.046v1.687h1.986V8.598c0-2.007-1.604-3.298-4.063-3.298-2.276 0-3.96 1.306-4.024 3.096h1.94c.162-.856.93-1.414 2.023-1.414 1.322 0 2.06.617 2.06 1.747v.766l-2.698.163c-2.514.147-3.882 1.17-3.882 2.945 0 1.794 1.39 2.982 3.44 2.982zm.572-1.64c-1.17 0-1.917-.565-1.917-1.43 0-.894.717-1.414 2.084-1.493l2.43-.148v.77c0 1.278-1.077 2.3-2.597 2.3zm6.334 5.356c2.13 0 3.133-.812 4.008-3.276l3.805-10.67h-2.177l-2.56 8.154h-.046l-2.56-8.155h-2.238l3.697 10.26-.197.625c-.334.998-.872 1.385-1.84 1.385-.17 0-.503-.015-.648-.03v1.638c.13.03.718.069.756.069z" className="fill-slate-700 dark:fill-slate-300" />
                    </svg>
                  ) },
                  { type: 'bank', icon: <Landmark className="w-full h-full text-slate-700 dark:text-slate-300" strokeWidth={2} fill="none" stroke="currentColor" /> },
                ].flatMap(item => Array(3).fill(item)).map((payment, index) => (
                  <div
                    key={`set1-${index}`}
                    className="w-14 h-10 flex-shrink-0 flex items-center justify-center"
                  >
                    {payment.icon}
                  </div>
                ))}
                {/* Second set of items for seamless loop */}
                {[
                  { type: 'bank', icon: <Landmark className="w-full h-full text-slate-700 dark:text-slate-300" strokeWidth={2} fill="none" stroke="currentColor" /> },
                  { type: 'googlepay', icon: (
                    <svg viewBox="0 0 50 20" className="w-full h-full">
                      <path d="M23.697 9.975v5.82h-1.477V1.09h3.906c.947-.03 1.87.298 2.582.916.71.626 1.104 1.517 1.088 2.455.02.937-.373 1.83-1.088 2.455-.711.618-1.635.946-2.582.916h-2.429zm0-7.435v5.985h2.453c.614.02 1.21-.204 1.655-.623.448-.428.695-1.024.684-1.647.011-.623-.236-1.219-.684-1.647-.445-.419-1.041-.643-1.655-.623h-2.453zm9.955 3.888c1.082-.013 2.127.388 2.91 1.117.785.74 1.223 1.77 1.217 2.86v5.39h-1.43v-1.217h-.064c-.673.997-1.711 1.534-2.792 1.445-.895.055-1.774-.277-2.406-.908-.6-.58-.932-1.39-.916-2.23-.018-.866.342-1.697.992-2.294.685-.607 1.58-.929 2.502-.9 1.036-.03 2.052.278 2.888.877v-.62c.025-.624-.213-1.23-.66-1.672-.463-.45-1.085-.697-1.732-.686-.89-.03-1.74.392-2.246 1.117l-1.318-.828c.752-1.038 1.952-1.612 3.23-1.546v.095zm-2.07 5.85c-.012.487.183.956.54 1.302.373.334.86.51 1.36.492.695.036 1.37-.24 1.858-.76.517-.52.803-1.23.79-1.966-.577-.483-1.3-.74-2.04-.725-.61-.023-1.208.18-1.67.567-.443.37-.702.92-.69 1.493l-.147.596zm13.324-5.692v10.21h-1.43v-1.217h-.064c-.612.98-1.7 1.548-2.84 1.482-1.02.048-2.01-.333-2.73-1.052-.71-.743-1.1-1.743-1.07-2.78v-6.595h1.477v6.404c-.042.728.215 1.442.712 1.978.473.465 1.117.718 1.78.7.666.03 1.31-.242 1.78-.752.523-.556.802-1.29.78-2.04V6.586h1.477l.127-.001zm5.07 10.402c-.9.05-1.79-.213-2.516-.742-.708-.537-1.163-1.335-1.27-2.23l1.447-.6c.125.605.46 1.145.94 1.517.518.378 1.14.57 1.78.547.55.03 1.094-.126 1.556-.443.436-.28.696-.772.684-1.293.01-.464-.206-.902-.58-1.18-.45-.323-.967-.55-1.513-.66l-1.5-.35c-.77-.176-1.477-.567-2.04-1.133-.535-.537-.83-1.267-.815-2.023-.024-.87.347-1.7 1.007-2.254.727-.59 1.64-.896 2.574-.863.82-.03 1.626.197 2.31.648.627.446 1.09 1.08 1.32 1.81l-1.398.588c-.14-.47-.432-.873-.83-1.148-.42-.283-.915-.43-1.417-.42-.493-.027-.98.117-1.382.408-.366.254-.585.675-.588 1.133-.01.406.177.79.502 1.038.39.292.84.496 1.32.6l1.476.35c.82.186 1.565.616 2.135 1.235.547.6.844 1.38.837 2.183.035.932-.357 1.828-1.07 2.454-.778.648-1.762.98-2.77.933l-.16.095zm7.688-16.906V15.8h-1.477V1.09h1.477z" className="fill-slate-700 dark:fill-slate-300" />
                    </svg>
                  ) },
                  { type: 'applepay', icon: (
                    <svg viewBox="0 0 50 20" className="w-full h-full">
                      <path d="M7.138 3.736c.404-.525.68-1.254.604-1.983-.584.028-1.294.393-1.715.918-.378.459-.708 1.196-.62 1.9.655.05 1.328-.328 1.73-.835zm.595 1.002c-.96-.056-1.772.543-2.226.543-.454 0-1.158-.518-1.906-.504-1.31.014-2.52.762-3.193 1.938-1.363 2.367-.353 5.874 1.009 7.797.654.943 1.447 1.998 2.48 1.96.732-.028 1.012-.476 1.9-.476.89 0 1.132.476 1.905.462 1.045-.014 1.772-.962 2.44-1.905.756-1.087 1.065-2.146 1.086-2.202-.024-.014-2.088-.806-2.112-3.187-.023-1.987 1.623-2.937 1.696-2.993-.925-1.352-2.366-1.505-2.873-1.533-.016 0-1.146-.098-2.206.1zm9.474-2.03v13.866h2.146v-4.743h2.973c2.716 0 4.625-1.863 4.625-4.568 0-2.707-1.878-4.556-4.556-4.556h-5.188zm2.146 1.78h2.476c1.863 0 2.93.998 2.93 2.783 0 1.786-1.067 2.792-2.938 2.792h-2.468v-5.575zm12.726 12.17c1.352 0 2.602-.686 3.172-1.771h.046v1.687h1.986V8.598c0-2.007-1.604-3.298-4.063-3.298-2.276 0-3.96 1.306-4.024 3.096h1.94c.162-.856.93-1.414 2.023-1.414 1.322 0 2.06.617 2.06 1.747v.766l-2.698.163c-2.514.147-3.882 1.17-3.882 2.945 0 1.794 1.39 2.982 3.44 2.982zm.572-1.64c-1.17 0-1.917-.565-1.917-1.43 0-.894.717-1.414 2.084-1.493l2.43-.148v.77c0 1.278-1.077 2.3-2.597 2.3zm6.334 5.356c2.13 0 3.133-.812 4.008-3.276l3.805-10.67h-2.177l-2.56 8.154h-.046l-2.56-8.155h-2.238l3.697 10.26-.197.625c-.334.998-.872 1.385-1.84 1.385-.17 0-.503-.015-.648-.03v1.638c.13.03.718.069.756.069z" className="fill-slate-700 dark:fill-slate-300" />
                    </svg>
                  ) },
                  { type: 'bank', icon: <Landmark className="w-full h-full text-slate-700 dark:text-slate-300" strokeWidth={2} fill="none" stroke="currentColor" /> },
                ].flatMap(item => Array(3).fill(item)).map((payment, index) => (
                  <div
                    key={`set2-${index}`}
                    className="w-14 h-10 flex-shrink-0 flex items-center justify-center"
                  >
                    {payment.icon}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
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