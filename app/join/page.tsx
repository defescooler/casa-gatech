import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { JoinForm } from "@/components/join-form"

export default function JoinPage() {
    return (
        <div className="container flex min-h-screen flex-col items-center justify-center py-12">
            <Link href="/" className="mb-8 flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>
            <Card className="mx-auto w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Join CASA GT</CardTitle>
                    <CardDescription>
                        Fill out this form to become a member of the Central Asian Student Association at Georgia Tech.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <JoinForm />
                </CardContent>
            </Card>
        </div>
    )
}