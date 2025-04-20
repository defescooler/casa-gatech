"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CulturalMap() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

    const countries = [
        {
            id: "kazakhstan",
            name: "Kazakhstan",
            capital: "Astana",
            population: "19 million",
            languages: "Kazakh, Russian",
            facts: [
                "Largest landlocked country in the world",
                "Home to the Baikonur Cosmodrome, the world's first and largest space launch facility",
                "Traditional nomadic heritage with rich equestrian culture",
            ],
        },
        {
            id: "uzbekistan",
            name: "Uzbekistan",
            capital: "Tashkent",
            population: "35 million",
            languages: "Uzbek, Russian",
            facts: [
                "Home to historic Silk Road cities like Samarkand, Bukhara, and Khiva",
                "Known for its intricate blue-tiled Islamic architecture",
                "Rich tradition of handicrafts including silk weaving and ceramics",
            ],
        },
        {
            id: "kyrgyzstan",
            name: "Kyrgyzstan",
            capital: "Bishkek",
            population: "6.7 million",
            languages: "Kyrgyz, Russian",
            facts: [
                "Known as the 'Switzerland of Central Asia' for its mountainous terrain",
                "Home to Lake Issyk-Kul, the second-largest alpine lake in the world",
                "Strong nomadic traditions including the epic of Manas, one of the longest poems in the world",
            ],
        },
        {
            id: "tajikistan",
            name: "Tajikistan",
            capital: "Dushanbe",
            population: "9.8 million",
            languages: "Tajik, Russian",
            facts: [
                "Over 90% of the country is mountainous",
                "Tajik language is closely related to Persian/Farsi",
                "Home to the Pamir Mountains, known as the 'Roof of the World'",
            ],
        },
        {
            id: "turkmenistan",
            name: "Turkmenistan",
            capital: "Ashgabat",
            population: "6.2 million",
            languages: "Turkmen, Russian",
            facts: [
                "Home to the Darvaza Gas Crater, known as the 'Door to Hell'",
                "Famous for its handwoven Turkmen carpets",
                "Ashgabat holds the world record for the highest concentration of white marble buildings",
            ],
        },
    ]

    return (
        <div className="w-full">
            <div className="mb-6 flex flex-wrap justify-center gap-3">
                {countries.map((country) => (
                    <Button
                        key={country.id}
                        variant={selectedCountry === country.id ? "default" : "outline"}
                        onClick={() => setSelectedCountry(country.id)}
                        className="min-w-[120px]"
                    >
                        {country.name}
                    </Button>
                ))}
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="/placeholder.svg?height=600&width=800&text=Central+Asia+Map"
                        alt="Map of Central Asia"
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Map markers - in a real implementation, these would be positioned correctly */}
                {countries.map((country) => (
                    <div
                        key={country.id}
                        className={`absolute h-4 w-4 rounded-full border-2 border-white transition-all ${
                            selectedCountry === country.id ? "bg-amber-500 h-6 w-6" : "bg-amber-400"
                        }`}
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                        }}
                        onClick={() => setSelectedCountry(country.id)}
                    />
                ))}
            </div>

            {selectedCountry && (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>{countries.find((c) => c.id === selectedCountry)?.name}</CardTitle>
                        <CardDescription>
                            Capital: {countries.find((c) => c.id === selectedCountry)?.capital} | Population:{" "}
                            {countries.find((c) => c.id === selectedCountry)?.population} | Languages:{" "}
                            {countries.find((c) => c.id === selectedCountry)?.languages}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h4 className="mb-2 font-medium">Interesting Facts:</h4>
                        <ul className="list-inside list-disc space-y-1">
                            {countries
                                .find((c) => c.id === selectedCountry)
                                ?.facts.map((fact, index) => (
                                    <li key={index} className="text-sm text-muted-foreground">
                                        {fact}
                                    </li>
                                ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
