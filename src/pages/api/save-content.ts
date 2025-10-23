import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const prerender = false; // This route needs server-side rendering

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the request body
    const data = await request.json();

    // Basic validation
    if (!data.businessInfo || !data.hours || !data.pricing || !data.faqs) {
      return new Response(
        JSON.stringify({ error: 'Invalid data structure' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate required fields
    if (!data.businessInfo.phone || !data.businessInfo.email) {
      return new Response(
        JSON.stringify({ error: 'Phone and email are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate pricing
    if (!Array.isArray(data.pricing) || data.pricing.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Pricing must be a non-empty array' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get the path to site-data.json
    const filePath = path.join(process.cwd(), 'src', 'data', 'site-data.json');

    // Write the data to file
    await fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      'utf-8'
    );

    return new Response(
      JSON.stringify({ success: true, message: 'Content saved successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error saving content:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to save content',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
