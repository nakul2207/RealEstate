import { CheckCircle, MapPin, BarChart3, Clock, Building2, Search, TrendingUp, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { PredictionForm } from '@/components/PredictionForm'
import { Nav } from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav/>

      {/* Hero Section */}
  {/* Hero Section */}
<section className="w-full min-h-screen bg-gradient-to-b  from-gray-300 to-white">
  <div className="container mx-auto px-20 pt-14 pb-14">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      {/* Left Content */}
      <div className="flex-1 space-y-10">
        <div className="space-y-8">
          <div className="flex items-center gap-2 px-4 py-2 w-fit rounded-full border border-black/10 bg-gradient-to-r from-white to-gray-50 shadow-sm">
            <TrendingUp className="h-4 w-4 text-black" />
            <span className="text-sm font-medium">AI-Powered Price Predictions</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
              <span className="block">Find Your</span>
              <span className="block bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                Dream Home
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Get instant property valuations in Bangalore with our advanced 
              machine learning algorithms.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90 text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="#predict">Get Price Prediction</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-black text-black hover:bg-black/5 text-lg h-14 px-8 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-12 pt-8 border-t border-black/10">
          {[
            { value: "98%", label: "Accuracy Rate" },
            { value: "50K+", label: "Predictions Made" },
            { value: "24/7", label: "Instant Results" },
          ].map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content - Feature Grid */}
      <div className="flex-1 w-full">
        <div className="grid grid-cols-2 gap-6 p-4">
          {[
            {
              icon: Building2,
              title: "Property Analysis",
              desc: "Comprehensive property insights"
            },
            {
              icon: Search,
              title: "Market Research",
              desc: "Deep market understanding"
            },
            {
              icon: Shield,
              title: "Verified Data",
              desc: "Trustworthy predictions"
            },
            {
              icon: BarChart3,
              title: "Price Trends",
              desc: "Real-time market trends"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-black/5 hover:border-black/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-black/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Prediction Section */}
      <section id="predict" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Get Your Property Valuation
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Enter your property details below to receive an instant AI-powered price prediction
            </p>
          </div>
          <PredictionForm />
        </div>
      </section>
    </main>
  )
}

