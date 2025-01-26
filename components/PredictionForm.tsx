'use client'

import { useState } from 'react'
import axios from 'axios'
import { Building2, Home, IndianRupee, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PredictionResult {
  estimated_price: number
}

export function PredictionForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [prediction, setPrediction] = useState<number>(0)
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setPrediction(0)

    const formData = new FormData(event.currentTarget)
    
    try {
      const {data} = await axios.post(`${SERVER_URL}/predict_home_price`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set the prediction value directly as it's a float
      setPrediction(data.estimated_price)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  // Function to format the price in lacs
  const formatPriceInLacs = (price: number) => {
    const priceInLacs = price / 100000; // Convert to lacs
    return `${priceInLacs.toFixed(2)} Lacs`; // Format with 2 decimal places
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="backdrop-blur-sm bg-white/95">
        <CardHeader className="space-y-6 text-center">
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
              <Home className="h-8 w-8" />
               Property Price Prediction
            </CardTitle>
            <CardDescription className="text-lg">
              Get an instant AI-powered price estimate for your property in Bangalore
            </CardDescription>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Bangalore, Karnataka
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base">
                  Location/Area
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="e.g., Whitefield, Indiranagar"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="total_sqft" className="text-base">
                  Total Square Feet
                </Label>
                <Input
                  id="total_sqft"
                  name="total_sqft"
                  type="number"
                  required
                  min="100"
                  placeholder="Enter total square feet"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bhk" className="text-base">
                  BHK (Bedrooms)
                </Label>
                <Select name="bhk" required defaultValue="2">
                  <SelectTrigger id="bhk" className="h-12 ">
                    <SelectValue placeholder="Select BHK" />
                  </SelectTrigger>
                  <SelectContent className=' bg-white'>
                    <SelectItem value="1">1 BHK</SelectItem>
                    <SelectItem value="2">2 BHK</SelectItem>
                    <SelectItem value="3">3 BHK</SelectItem>
                    <SelectItem value="4">4 BHK</SelectItem>
                    <SelectItem value="5">5 BHK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bath" className="text-base">
                  Bathrooms
                </Label>
                <Select name="bath" required defaultValue="2">
                  <SelectTrigger id="bath" className="h-12">
                    <SelectValue placeholder="Select bathrooms" />
                  </SelectTrigger>
                  <SelectContent className='bg-white'>
                    <SelectItem value="1">1 Bathroom</SelectItem>
                    <SelectItem value="2">2 Bathrooms</SelectItem>
                    <SelectItem value="3">3 Bathrooms</SelectItem>
                    <SelectItem value="4">4 Bathrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full text-lg h-12" 
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Get Price Estimate'}
            </Button>

            {error && (
              <div className="text-sm text-red-500 text-center">
                {error}
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {prediction !== 0 && (
        <Card className="border-2 border-primary/50 shadow-lg backdrop-blur-sm bg-white/95">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Building2 className="h-8 w-8" />
              Estimated Property Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary">
                <IndianRupee className="h-8 w-8" />
                {prediction} Lacs
              </div>
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground max-w-md mx-auto">
                  This is an AI-generated estimate based on recent market data and similar properties in Bangalore. 
                  Actual prices may vary based on specific location factors and market conditions.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
