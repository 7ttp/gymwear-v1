import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://asrwlhfacmcjbqeazfze.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcndsaGZhY21jamJxZWF6ZnplIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTYzNjQ3NiwiZXhwIjoyMDY3MjEyNDc2fQ.cQToU3rf9xS1eyvc8Mi5LczlGs3G7sM10M72VwGx8Mc'
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { email, ip } = req.body;
  if (!email || !ip) return res.status(400).json({ error: 'Missing email or IP' });

  // Check for existing claim by email or IP
  const { data: existing, error: fetchError } = await supabase
    .from('affiliate_claims')
    .select('id')
    .or(`email.eq.${email},ip.eq.${ip}`)
    .maybeSingle();
  if (fetchError) return res.status(500).json({ error: 'Database error', details: fetchError.message });
  if (existing) return res.status(429).json({ error: 'Already claimed' });

  // Insert new claim
  const { error } = await supabase
    .from('affiliate_claims')
    .insert([{ email, ip, notified: false }]);
  if (error) return res.status(500).json({ error: 'Failed to save claim', details: error.message });

  return res.status(200).json({ success: true });
} 