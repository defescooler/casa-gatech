import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const { data: existingSubscriber } = await supabase
            .from('newsletter_subscribers')
            .select('*')
            .eq('email', email)
            .single();

        if (existingSubscriber) {
            return NextResponse.json(
                { success: true, message: 'Email already subscribed' },
                { status: 200 }
            );
        }

        // Insert new subscriber
        const { error: insertError } = await supabase
            .from('newsletter_subscribers')
            .insert([
                {
                    email,
                    subscribed_at: new Date().toISOString(),
                },
            ]);

        if (insertError) {
            throw new Error(insertError.message);
        }

        return NextResponse.json(
            { success: true, message: 'Subscription successful' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
}
