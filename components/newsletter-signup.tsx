"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Basic email validation
        if (!email || !email.includes("@") || !email.includes(".")) {
            setError("Please enter a valid email address")
            return
        }

        // TODO: In a real application, you would send this to your API
        console.log("Subscribing email:", email)
        setSubmitted(true)
        setError("")
    }

    return (
        <div className="w-full max-w-md">
            {submitted ? (
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                    <h3 className="text-lg font-medium">Thank you for subscribing!</h3>
                    <p className="text-sm text-muted-foreground">You'll receive updates about our events and activities.</p>
                    <Button
                        variant="link"
                        onClick={() => {
                            setSubmitted(false)
                            setEmail("")
                        }}
                    >
                        Subscribe another email
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                    <h3 className="text-lg font-medium">Subscribe to our Newsletter</h3>
                    <p className="text-sm text-muted-foreground">
                        Stay updated with our events, activities, and cultural insights.
                    </p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={error ? "border-red-500" : ""}
                        />
                        <Button type="submit">Subscribe</Button>
                    </div>
                    {error && <p className="text-xs text-red-500">{error}</p>}
                </form>
            )}
        </div>
    )
}
