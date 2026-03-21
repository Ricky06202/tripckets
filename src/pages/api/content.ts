import type { APIRoute } from 'astro';
import { fetchSanityData } from '../../lib/fetchSanity';

export const GET: APIRoute = async () => {
  const data = await fetchSanityData();
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
