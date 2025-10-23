import fs from 'fs/promises';
import path from 'path';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.businessInfo || !data.hours || !data.pricing || !data.faqs) {
      return new Response(
        JSON.stringify({ error: "Invalid data structure" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!data.businessInfo.phone || !data.businessInfo.email) {
      return new Response(
        JSON.stringify({ error: "Phone and email are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!Array.isArray(data.pricing) || data.pricing.length === 0) {
      return new Response(
        JSON.stringify({ error: "Pricing must be a non-empty array" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const filePath = path.join(process.cwd(), "src", "data", "site-data.json");
    await fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      "utf-8"
    );
    return new Response(
      JSON.stringify({ success: true, message: "Content saved successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error saving content:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to save content",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
