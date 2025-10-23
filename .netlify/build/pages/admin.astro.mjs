import { d as createAstro, c as createComponent, e as renderHead, a as renderTemplate, b as addAttribute, f as defineScriptVars } from '../chunks/astro/server_CM5XzD-x.mjs';
import 'kleur/colors';
import 'clsx';
import { s as siteData } from '../chunks/site-data_CA2xTrsl.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://restorativebodyworkatx.com");
const prerender = false;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const isPost = Astro2.request.method === "POST";
  let isAuthenticated = false;
  let errorMessage = "";
  if (isPost) {
    const formData = await Astro2.request.formData();
    const password = formData.get("password");
    const adminPassword = "admin123";
    if (password === adminPassword) {
      isAuthenticated = true;
    } else {
      errorMessage = "Invalid password. Please try again.";
    }
  }
  return renderTemplate`<html lang="en" data-astro-cid-2zp6q64z> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin - Restorative Bodywork</title>${renderHead()}</head> <body data-astro-cid-2zp6q64z> <div class="container" data-astro-cid-2zp6q64z> <div class="header" data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>Content Management</h1> <p data-astro-cid-2zp6q64z>Update your website content easily</p> </div> <div class="content" data-astro-cid-2zp6q64z> ${!isAuthenticated ? renderTemplate`<div class="login-form" data-astro-cid-2zp6q64z> <h2 style="text-align: center; margin-bottom: 24px; color: #2D3748;" data-astro-cid-2zp6q64z>Login</h2> ${errorMessage && renderTemplate`<div class="error" data-astro-cid-2zp6q64z>${errorMessage}</div>`} <form method="POST" data-astro-cid-2zp6q64z> <div class="form-group" data-astro-cid-2zp6q64z> <label for="password" data-astro-cid-2zp6q64z>Password</label> <input type="password" id="password" name="password" required autofocus placeholder="Enter admin password" data-astro-cid-2zp6q64z> </div> <button type="submit" class="btn" data-astro-cid-2zp6q64z>Login</button> </form> <p style="margin-top: 20px; text-align: center; color: #718096; font-size: 14px;" data-astro-cid-2zp6q64z>
Contact your developer if you've forgotten the password.
</p> </div>` : renderTemplate`<form id="contentForm" data-astro-cid-2zp6q64z> <!-- Business Info Section --> <div class="section" data-astro-cid-2zp6q64z> <h2 class="section-title" data-astro-cid-2zp6q64z>Business Information</h2> <div class="grid" data-astro-cid-2zp6q64z> <div class="form-group" data-astro-cid-2zp6q64z> <label for="phone" data-astro-cid-2zp6q64z>Phone Number</label> <input type="text" id="phone" name="phone"${addAttribute(siteData.businessInfo.phone, "value")} required data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="email" data-astro-cid-2zp6q64z>Email Address</label> <input type="email" id="email" name="email"${addAttribute(siteData.businessInfo.email, "value")} required data-astro-cid-2zp6q64z> </div> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="address" data-astro-cid-2zp6q64z>Street Address</label> <input type="text" id="address" name="address"${addAttribute(siteData.businessInfo.address, "value")} required data-astro-cid-2zp6q64z> </div> <div class="grid" data-astro-cid-2zp6q64z> <div class="form-group" data-astro-cid-2zp6q64z> <label for="city" data-astro-cid-2zp6q64z>City</label> <input type="text" id="city" name="city"${addAttribute(siteData.businessInfo.city, "value")} required data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="state" data-astro-cid-2zp6q64z>State</label> <input type="text" id="state" name="state"${addAttribute(siteData.businessInfo.state, "value")} required data-astro-cid-2zp6q64z> </div> </div> </div> <!-- Hours Section --> <div class="section" data-astro-cid-2zp6q64z> <h2 class="section-title" data-astro-cid-2zp6q64z>Business Hours</h2> <p class="help-text" style="margin-bottom: 16px;" data-astro-cid-2zp6q64z>For closed days, type "Closed". Otherwise use format: "10:00 AM - 5:00 PM"</p> <div class="grid" data-astro-cid-2zp6q64z> <div class="form-group" data-astro-cid-2zp6q64z> <label for="sunday" data-astro-cid-2zp6q64z>Sunday</label> <input type="text" id="sunday" name="sunday"${addAttribute(siteData.hours.sunday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="monday" data-astro-cid-2zp6q64z>Monday</label> <input type="text" id="monday" name="monday"${addAttribute(siteData.hours.monday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="tuesday" data-astro-cid-2zp6q64z>Tuesday</label> <input type="text" id="tuesday" name="tuesday"${addAttribute(siteData.hours.tuesday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="wednesday" data-astro-cid-2zp6q64z>Wednesday</label> <input type="text" id="wednesday" name="wednesday"${addAttribute(siteData.hours.wednesday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="thursday" data-astro-cid-2zp6q64z>Thursday</label> <input type="text" id="thursday" name="thursday"${addAttribute(siteData.hours.thursday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="friday" data-astro-cid-2zp6q64z>Friday</label> <input type="text" id="friday" name="friday"${addAttribute(siteData.hours.friday, "value")} data-astro-cid-2zp6q64z> </div> <div class="form-group" data-astro-cid-2zp6q64z> <label for="saturday" data-astro-cid-2zp6q64z>Saturday</label> <input type="text" id="saturday" name="saturday"${addAttribute(siteData.hours.saturday, "value")} data-astro-cid-2zp6q64z> </div> </div> </div> <!-- Pricing Section --> <div class="section" data-astro-cid-2zp6q64z> <h2 class="section-title" data-astro-cid-2zp6q64z>Session Pricing</h2> ${siteData.pricing.map((item, index) => renderTemplate`<div class="pricing-item" data-astro-cid-2zp6q64z> <div class="grid" data-astro-cid-2zp6q64z> <div class="form-group" style="margin-bottom: 0;" data-astro-cid-2zp6q64z> <label${addAttribute(`price-duration-${index}`, "for")} data-astro-cid-2zp6q64z>Duration</label> <input type="text"${addAttribute(`price-duration-${index}`, "id")}${addAttribute(`price-duration-${index}`, "name")}${addAttribute(item.duration, "value")} required data-astro-cid-2zp6q64z> </div> <div class="form-group" style="margin-bottom: 0;" data-astro-cid-2zp6q64z> <label${addAttribute(`price-amount-${index}`, "for")} data-astro-cid-2zp6q64z>Price ($)</label> <input type="number"${addAttribute(`price-amount-${index}`, "id")}${addAttribute(`price-amount-${index}`, "name")}${addAttribute(item.price, "value")} required min="0" step="1" data-astro-cid-2zp6q64z> </div> </div> </div>`)} </div> <!-- Save Button --> <button type="submit" class="btn" id="saveBtn" data-astro-cid-2zp6q64z>Save All Changes</button> <div id="saveStatus" data-astro-cid-2zp6q64z></div> </form>`} </div> </div> ${isAuthenticated && renderTemplate(_a || (_a = __template(["<script>(function(){", `
      const form = document.getElementById('contentForm');
      const saveBtn = document.getElementById('saveBtn');
      const saveStatus = document.getElementById('saveStatus');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving...';
        saveStatus.textContent = '';
        saveStatus.className = '';

        // Collect form data
        const formData = new FormData(form);
        const data = {
          businessInfo: {
            name: "Restorative Bodywork",
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip: "78704", // Keep existing zip
            bookingUrl: "https://www.massagebook.com/therapists/restorativebodyworkatx",
            mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.699230326372!2d-97.78387882394603!3d30.245652409008724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab64db1f9f463763%3A0xc669fa7e156b773a!2sRestorative%20Bodywork!5e0!3m2!1sen!2sus!4v1715558773560!5m2!1sen!2sus"
          },
          hours: {
            sunday: formData.get('sunday'),
            monday: formData.get('monday'),
            tuesday: formData.get('tuesday'),
            wednesday: formData.get('wednesday'),
            thursday: formData.get('thursday'),
            friday: formData.get('friday'),
            saturday: formData.get('saturday'),
            note: "By appointment only"
          },
          pricing: [
            {
              duration: formData.get('price-duration-0'),
              price: parseInt(formData.get('price-amount-0'))
            },
            {
              duration: formData.get('price-duration-1'),
              price: parseInt(formData.get('price-amount-1'))
            },
            {
              duration: formData.get('price-duration-2'),
              price: parseInt(formData.get('price-amount-2'))
            }
          ],
          faqs: faqs // Use the variable passed from Astro
        };

        try {
          const response = await fetch('/api/save-content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });

          const result = await response.json();

          if (response.ok) {
            saveStatus.textContent = '✓ Changes saved successfully!';
            saveStatus.className = 'success';
          } else {
            throw new Error(result.error || 'Save failed');
          }
        } catch (error) {
          saveStatus.textContent = '✗ Error: ' + error.message;
          saveStatus.className = 'error';
        } finally {
          saveBtn.disabled = false;
          saveBtn.textContent = 'Save All Changes';
        }
      });
    })();</script>`])), defineScriptVars({ faqs: siteData.faqs }))} </body> </html>`;
}, "/home/user/restorativebodyworkatxcom/src/pages/admin.astro", void 0);
const $$file = "/home/user/restorativebodyworkatxcom/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
