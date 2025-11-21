import { Navbar } from "@/components/navbar";
import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap, HeadphonesIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with LightRays Background */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background LightRays */}
        <div className="absolute inset-0 w-full h-full">
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

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
              <Shield className="w-4 h-4 text-black dark:text-white" />
              <span className="text-sm font-medium">Regulated by Labuan FSA</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Trade Forex & CFDs With Confidence
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation trading with advanced tools, competitive spreads, 
              and a platform designed for both beginners and professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg">
                Open Live Account
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50">
                Open Demo Account
              </Button>
            </div>

            {/* Feature Pills - Made Smaller */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <HeadphonesIcon className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">24/7 Customer Support</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <Zap className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">Lightning Fast Execution</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-3.5 h-3.5 text-green-500 dark:text-green-400 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">2000+ Trading Instruments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      </section>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold">Ready to build</h2>
      </div>
    </div>
  );
}