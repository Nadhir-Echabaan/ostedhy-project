import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nemnkkgusenwmqjxkqeg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lbW5ra2d1c2Vud21xanhrcWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2ODMwODAsImV4cCI6MjA1NzI1OTA4MH0.cht4YBlVSGuGAtSF7ugUPptuhrwZYf0YKgkypehlppc'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;


