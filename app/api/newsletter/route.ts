import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) return null;
    return createClient(supabaseUrl, supabaseServiceKey);
}

export async function POST(request: Request) {
    try {
        const supabase = getSupabaseClient();
        if (!supabase) {
            return NextResponse.json(
                { error: 'Newsletter is not configured' },
                { status: 500 }
            );
        }

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
