import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jilnetymabsaeojtxwxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbG5ldHltYWJzYWVvanR4d3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2ODY2NDksImV4cCI6MTk4NzI2MjY0OX0.whi3i8Snd8Oup0ov4OcKK29fkha7N8G-9AvbHQBxq4k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
