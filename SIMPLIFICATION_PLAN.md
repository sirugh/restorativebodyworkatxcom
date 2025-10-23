# Codebase Simplification & Content Management Plan

## Overview

This site is built on the AstroWind template, which is designed for complex, multi-purpose websites. For a simple 6-page massage therapy business site, approximately **50-60% of the current codebase is unnecessary boilerplate** that increases maintenance burden without adding value.

### Current Stats
- 4,728 total lines of code
- 55 components (50% unused)
- 1,000+ lines of utility code (much for blog functionality that's disabled)
- Content scattered across multiple files

### Goals
1. ✅ Maintain current appearance and functionality
2. 📝 Enable owner to edit content (pricing, hours, contact info) without developer help
3. 🧹 Remove unused code to reduce maintenance overhead
4. 🎯 Simplify structure for a 6-page business site

---

## Phase 1: Content Management System (CMS) 🎯

### Problem
Content like pricing, hours, and contact info is hardcoded across multiple files, requiring developer intervention for simple updates. **Owner is non-technical and needs a user-friendly web interface to make edits.**

### Solution Options

#### Option A: Decap CMS (Recommended - Free & Simple) ⭐

**What it is:** Free, open-source CMS with a web interface. No database needed, stores content in Git.

**Owner Experience:**
1. Visits `/admin` on the website
2. Logs in with username/password
3. Edits content through simple forms
4. Clicks "Save" - site rebuilds automatically

**Setup:**
- Add Decap CMS to Astro (~30 min setup)
- Create admin interface at `/public/admin/`
- Configure forms for pricing, hours, contact info, FAQs
- Content stored in `src/content/` as JSON/YAML files
- Works with existing Netlify/Vercel deployment

**Pros:**
- ✅ Free and open-source
- ✅ No database or server required
- ✅ Simple form-based editing
- ✅ No coding knowledge needed for owner
- ✅ Works with static site generators
- ✅ Preview changes before publishing

**Cons:**
- ⚠️ Requires GitHub authentication or Git Gateway
- ⚠️ Slight learning curve for CMS interface

**Example Admin Interface:**
```yaml
# Pricing Form
60 Minute Session: $[120]
75 Minute Session: $[150]
90 Minute Session: $[180]

# Hours Form
Sunday:    [10:00 AM] - [5:00 PM]
Monday:    [10:00 AM] - [7:00 PM]
Tuesday:   [Closed]
...
```

---

#### Option B: Simple Custom Admin Panel (CHOSEN APPROACH) ⭐

**What it is:** Custom-built admin page with username/password protection - no third-party dependencies.

**Owner Experience:**
1. Visits `/admin` (password protected)
2. Fills out simple forms with clear labels
3. Clicks "Save" - triggers rebuild

**Setup:**
- Create protected admin route in Astro (`src/pages/admin.astro`)
- Build simple forms for each content type
- Store data in `src/content/site-data.json`
- Use Astro API route to save changes (`src/pages/api/save-content.ts`)
- Auto-rebuild via Netlify/Vercel webhook

**Architecture:**
```
/admin (page)
  → Simple HTML forms
  → Password protection via environment variable
  → Reads from src/content/site-data.json
  → Posts to /api/save-content

/api/save-content (API route)
  → Validates authentication
  → Saves to site-data.json
  → Returns success/error
  → Triggers rebuild webhook
```

**Pros:**
- ✅ Complete control over interface
- ✅ Simplest possible UI for owner
- ✅ No third-party dependencies
- ✅ Can add custom validation
- ✅ Lightweight and fast
- ✅ Works with SSR or static mode

**Cons:**
- ⚠️ Requires building the admin interface (~3-4 hours)
- ⚠️ Need to handle authentication (simple env var approach)
- ⚠️ More code to maintain (but minimal)

---

#### Option C: Tina CMS (Modern, Visual Editing)

**What it is:** Modern, visual CMS that lets owner edit content directly on the page.

**Owner Experience:**
1. Logs in via `/admin`
2. Browses to any page
3. Clicks "Edit" and changes content inline
4. Saves and publishes

**Pros:**
- ✅ Beautiful visual editing
- ✅ Live preview
- ✅ Modern interface

**Cons:**
- ⚠️ More complex setup than Decap
- ⚠️ Free tier has limitations
- ⚠️ May be overkill for simple site

---

### Implementation Approach: Custom Admin Panel

**Data Structure:**
Create `src/content/site-data.json`:

```json
{
  "businessInfo": {
    "name": "Restorative Bodywork",
    "phone": "(512) 920-3103",
    "email": "info@restorativebodyworkatx.com",
    "address": "2111 Dickson Dr #14",
    "city": "Austin",
    "state": "TX",
    "zip": "78704",
    "bookingUrl": "https://www.massagebook.com/therapists/restorativebodyworkatx",
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.699230326372!2d-97.78387882394603!3d30.245652409008724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab64db1f9f463763%3A0xc669fa7e156b773a!2sRestorative%20Bodywork!5e0!3m2!1sen!2sus!4v1715558773560!5m2!1sen!2sus"
  },
  "hours": {
    "sunday": "10:00 AM - 5:00 PM",
    "monday": "10:00 AM - 7:00 PM",
    "tuesday": "Closed",
    "wednesday": "Closed",
    "thursday": "Closed",
    "friday": "Closed",
    "saturday": "10:00 AM - 5:00 PM",
    "note": "By appointment only"
  },
  "pricing": [
    { "duration": "60 minutes", "price": 120 },
    { "duration": "75 minutes", "price": 150 },
    { "duration": "90 minutes", "price": 180 }
  ]
}
```

**Admin Page Structure:**
Create `src/pages/admin.astro`:
- Simple login form (checks password from env var)
- Once authenticated, show content editing forms
- Forms for: Business Info, Hours, Pricing
- Save button that posts to API route

**API Route:**
Create `src/pages/api/save-content.ts`:
- Validates authentication token
- Receives JSON data from admin form
- Writes to `src/content/site-data.json`
- Returns success/error response

**Environment Variables:**
```env
ADMIN_PASSWORD=choose_a_secure_password
```

### Files to Create
1. `src/content/site-data.json` - Content storage
2. `src/pages/admin.astro` - Admin interface
3. `src/pages/api/save-content.ts` - Save API endpoint

### Files to Update
- `src/pages/index.astro` - Import from `site-data.json`
- `src/pages/contact.astro` - Import from `site-data.json`
- `src/pages/faq.astro` - Import from `site-data.json`
- `src/data.js` - Merge FAQs into `site-data.json`, then delete
- `astro.config.mjs` - Enable SSR mode for API routes

### Implementation Tasks
1. Enable SSR in Astro config (for API routes)
2. Create `src/content/site-data.json` with all editable content
3. Build admin interface at `/admin`
4. Create API route for saving content
5. Add basic authentication
6. Update all pages to import from JSON file
7. Test admin interface and content updates

### Owner Benefits
- ✅ User-friendly web interface at `/admin`
- ✅ No coding or GitHub knowledge required
- ✅ Simple forms to update pricing, hours, contact info
- ✅ Preview changes before publishing
- ✅ Can't accidentally break the site
- ✅ Just needs username/password to login

---

## Phase 2: Remove Blog System (COMPLETELY UNUSED) 🗑️

### Problem
Blog is disabled (`apps.blog.isEnabled: false`) but entire infrastructure remains.

### Files to Delete (~500+ lines)

#### Components (11 files):
- `src/components/blog/Grid.astro`
- `src/components/blog/GridItem.astro`
- `src/components/blog/List.astro`
- `src/components/blog/ListItem.astro`
- `src/components/blog/SinglePost.astro`
- `src/components/blog/Headline.astro`
- `src/components/blog/Pagination.astro`
- `src/components/blog/Tags.astro`
- `src/components/blog/ToBlogLink.astro`
- `src/components/widgets/BlogLatestPosts.astro`
- `src/components/widgets/BlogHighlightedPosts.astro`

#### Utilities:
- `src/utils/blog.ts` (228 lines - fetching, filtering, pagination logic)

#### Content:
- `src/content/post/` directory (6 MDX/MD files)
- `src/pages/[...blog]/` directory (if exists)
- `src/pages/rss.xml.ts` (RSS feed generation)

#### Config:
- Remove blog section from `src/config.yaml` (lines 37-64)
- Remove blog types from TypeScript definitions in `src/types.ts`

#### Dependencies to Consider Removing:
- `@astrojs/rss` (if only used for blog)
- `@astrojs/mdx` (if only used for blog)

### Impact
-500+ lines of code, cleaner project structure

---

## Phase 3: Remove Unused Components 🧹

### Components Currently NOT Used by Any Page

#### Widgets (9 files):
- `src/components/widgets/Pricing.astro` - Pricing inline in index.astro instead
- `src/components/widgets/Stats.astro` - No stats displayed
- `src/components/widgets/Testimonials.astro` - No testimonials page
- `src/components/widgets/Steps.astro` + `Steps2.astro` - Not used
- `src/components/widgets/Announcement.astro` - No announcements
- `src/components/widgets/Note.astro` - No notes
- `src/components/widgets/CallToAction.astro` - No CTAs beyond hero
- `src/components/widgets/Main.astro` - Unused layout variant

#### Duplicate Component Variations

Keep only what's actively used. Currently there are:
- 3 Hero variants (Hero, Hero2, HeroText) - **keep 2 max**
- 3 Features variants (Features, Features2, Features3) - **keep 1-2 max**

**Analysis needed:** Check which ones are actually used:
- `index.astro` uses Hero
- `contact.astro` uses Features2
- Check other pages for Hero2, HeroText, Features, Features3

### Impact
-300+ lines of component code

---

## Phase 4: Simplify Utilities & Config 🔧

### Simplify `src/utils/config.ts` (205 lines)

**Current:** Complex YAML loading, merging, blog permalink generation
**Target:** Simple config object export (~50 lines)

```typescript
// Simplified config.ts
export const siteConfig = {
  name: 'Restorative Bodywork',
  url: 'https://restorativebodyworkatx.com',
  description: 'Restorative Bodywork, South Austin based therapists...',
  googleSiteVerificationId: 'kmkHW_W3a6t9LZdK_e208kkR_bkQx-ZUYQ5zUIbyfHc',
  theme: 'system',
}

export const metadata = {
  // SEO metadata
}
```

### Simplify `src/config.yaml`
- Remove entire blog config section (lines 37-64)
- Consider converting to simple `.js` file for easier editing
- Keep only: site info, metadata, theme settings

### Remove/Simplify:
- `src/utils/permalinks.ts` (83 lines) - Overly complex for 6 static pages
- Remove blog-specific functions from various utilities

### Impact
-200+ lines of configuration overhead

---

## Phase 5: Simplify Layouts 📐

### Current Layouts (4)
1. `Layout.astro` - Main wrapper
2. `PageLayout.astro` - Standard pages
3. `LandingLayout.astro` - Landing page
4. `MarkdownLayout.astro` - Blog posts (unused)

### Target (2-3 layouts)
- Delete `MarkdownLayout.astro` (blog only)
- Consider merging LandingLayout into PageLayout with props

### Impact
Simpler layout hierarchy

---

## Phase 6: Cleanup Dependencies 📦

### Review for Removal:
- `@astrojs/rss` - Only needed for blog RSS
- `@astrojs/partytown` - Third-party script optimization (check if used)
- `@astrolib/analytics` - Check if actually used (Google Analytics config is `null`)

### Keep:
- Core Astro + Tailwind
- `astro-icon` (used for icons)
- `astro-google-fonts-optimizer` (font loading)
- `@astrojs/sitemap` (SEO)

---

## Phase 7: Simplify Type Definitions 📝

`src/types.ts` contains 285+ lines of TypeScript interfaces for:
- Blog posts (unused)
- Team members (unused)
- Stats (unused)
- Testimonials (unused)
- Steps (unused)
- Pricing (could simplify)

**Target:** Keep only types for components actually used (~50-100 lines)

---

## Expected Results 📊

### Before:
- **4,728 lines** of code
- **55 components**
- **7 config files**
- Blog infrastructure (disabled but present)
- Content scattered across 5+ files

### After:
- **~1,500-2,000 lines** of code (60% reduction)
- **15-20 components** (60% reduction)
- **5-6 config files**
- No blog infrastructure
- **Web-based admin panel** for content management

### Maintenance Benefits:
- ✅ Owner logs into `/admin` with username/password
- ✅ Owner updates prices through simple web forms
- ✅ Owner updates hours through simple web forms
- ✅ Owner updates contact info through simple web forms
- ✅ **No technical knowledge required** - just click and type
- ✅ **No GitHub, code editor, or terminal access needed**
- ✅ Can't accidentally break the site
- ✅ Fewer files to maintain and understand
- ✅ Faster build times
- ✅ Easier onboarding for future developers
- ✅ Less code to update when upgrading Astro

---

## Implementation Checklist

### Phase 1: Custom Admin & Content Centralization
- [ ] Check current Astro config (static vs hybrid/server mode)
- [ ] Create `src/content/site-data.json` with all editable content (including FAQs from src/data.js)
- [ ] Build admin interface at `src/pages/admin.astro` with:
  - [ ] Login form with password protection
  - [ ] Business info form section
  - [ ] Hours form section
  - [ ] Pricing form section
  - [ ] FAQ management section
  - [ ] Save button with loading state
- [ ] Create API route at `src/pages/api/save-content.ts`:
  - [ ] Authentication validation
  - [ ] JSON parsing and validation
  - [ ] File write to site-data.json
  - [ ] Error handling
- [ ] Set up environment variable for admin password
- [ ] Update `src/pages/index.astro` to import from `site-data.json`
- [ ] Update `src/pages/contact.astro` to import from `site-data.json`
- [ ] Update `src/pages/faq.astro` to import from `site-data.json`
- [ ] Update header/footer components to use centralized data
- [ ] Delete `src/data.js` after merging into `site-data.json`
- [ ] Test admin interface at `/admin`
- [ ] Test content editing and save functionality
- [ ] Create simple instructions document for owner

### Phase 2: Remove Blog System
- [ ] Delete `src/components/blog/` directory
- [ ] Delete `src/components/widgets/BlogLatestPosts.astro`
- [ ] Delete `src/components/widgets/BlogHighlightedPosts.astro`
- [ ] Delete `src/utils/blog.ts`
- [ ] Delete `src/content/post/` directory
- [ ] Delete `src/pages/rss.xml.ts`
- [ ] Remove blog section from `src/config.yaml` (lines 37-64)
- [ ] Remove blog types from `src/types.ts`
- [ ] Remove `@astrojs/rss` from package.json
- [ ] Remove `@astrojs/mdx` from package.json (if not used elsewhere)
- [ ] Run `npm install` to clean up dependencies

### Phase 3: Remove Unused Components
- [ ] Analyze which Hero/Features variants are actually used
- [ ] Delete unused widget components:
  - [ ] `src/components/widgets/Pricing.astro`
  - [ ] `src/components/widgets/Stats.astro`
  - [ ] `src/components/widgets/Testimonials.astro`
  - [ ] `src/components/widgets/Steps.astro`
  - [ ] `src/components/widgets/Steps2.astro`
  - [ ] `src/components/widgets/Announcement.astro`
  - [ ] `src/components/widgets/Note.astro`
  - [ ] `src/components/widgets/CallToAction.astro`
  - [ ] `src/components/widgets/Main.astro`
- [ ] Consolidate Hero variants (keep only used ones)
- [ ] Consolidate Features variants (keep only used ones)

### Phase 4: Simplify Utilities & Config
- [ ] Simplify `src/utils/config.ts` to basic config object
- [ ] Remove blog config from `src/config.yaml`
- [ ] Simplify or remove `src/utils/permalinks.ts`
- [ ] Remove blog-specific utility functions

### Phase 5: Simplify Layouts
- [ ] Delete `src/layouts/MarkdownLayout.astro`
- [ ] Consider merging LandingLayout into PageLayout

### Phase 6: Cleanup Dependencies
- [ ] Review and remove unused dependencies
- [ ] Run `npm prune`
- [ ] Update package.json

### Phase 7: Cleanup Types
- [ ] Remove unused TypeScript interfaces from `src/types.ts`
- [ ] Keep only types for components actually used

### Testing & Documentation
- [ ] Run `npm run dev` and verify all 6 pages render correctly
- [ ] Test mobile responsiveness on all pages
- [ ] Test CMS admin interface at `/admin`
- [ ] Test content updates through CMS forms
- [ ] Verify changes appear on live site after saving
- [ ] Run `npm run build` and check for errors
- [ ] Create owner instruction guide for using the CMS
- [ ] Update README.md with admin access information

---

## Documentation for Site Owner

Create a simple instruction document (e.g., `OWNER_GUIDE.md` or PDF):

### How to Update Your Website Content

**Accessing the Admin Panel**

1. Go to: `https://restorativebodyworkatx.com/admin`
2. Log in with your credentials:
   - Username: `[provided by developer]`
   - Password: `[provided by developer]`

**Updating Pricing**

1. Click on "Site Content" in the admin panel
2. Scroll to the "Pricing" section
3. Edit the price for each session duration
4. Click "Save" at the top
5. Wait a few minutes for the site to rebuild
6. Refresh your website to see the changes

**Updating Hours**

1. Click on "Site Content"
2. Scroll to the "Hours" section
3. Update the hours for any day (e.g., change "10:00 AM - 5:00 PM" to "11:00 AM - 6:00 PM")
4. For closed days, type "Closed"
5. Click "Save"

**Updating Contact Information**

1. Click on "Site Content"
2. Find the "Business Info" section
3. Edit phone, email, or address as needed
4. Click "Save"

**Updating FAQs**

1. Click on "Site Content"
2. Scroll to the "FAQs" section
3. To edit: Click on an FAQ item and modify the question or answer
4. To add: Click "Add FAQ" button
5. To remove: Click the X or delete button next to an FAQ
6. Click "Save"

**Important Notes**

- Changes may take 2-5 minutes to appear on the live website
- You cannot break the website through the admin panel - all changes are safe
- If you make a mistake, you can always change it back
- If something doesn't look right, contact your developer

**Support**

For help or questions, contact: `[developer contact info]`

---

**Also add to README.md:**

```markdown
## Content Management

This site uses a custom admin interface for easy content management.

**For Site Owner:**
- Access admin panel: `https://restorativebodyworkatx.com/admin`
- See `OWNER_GUIDE.md` for detailed instructions
- No technical knowledge required
- Login with your provided password

**For Developers:**
- Admin interface: `src/pages/admin.astro`
- Content file: `src/content/site-data.json`
- Save API: `src/pages/api/save-content.ts`
- Set `ADMIN_PASSWORD` environment variable
- See `SIMPLIFICATION_PLAN.md` for implementation details
```

---

## Questions for Discussion

1. **Dark mode toggle:** Should we keep it? (adds complexity but is implemented)
2. **Google Analytics:** Keep integration even though currently disabled?
3. **Additional editable content:** Any other content the owner wants to edit easily?
   - Services descriptions?
   - FAQ items?
   - About Rose bio text?
4. **Config format:** Convert `config.yaml` to `config.js` for consistency?

---

## Timeline Estimate

- Phase 1 (Custom Admin + Content centralization): 3-4 hours
  - Create content data structure: 30 min
  - Build admin UI with forms: 1-2 hours
  - Create save API route: 30-60 min
  - Add authentication: 30 min
  - Update all pages to use centralized data: 30-60 min
  - Testing: 30 min
- Phase 2 (Remove blog): 1-2 hours
- Phase 3 (Remove unused components): 1-2 hours
- Phase 4 (Simplify utilities): 2-3 hours
- Phase 5 (Layouts): 1 hour
- Phase 6 (Dependencies): 1 hour
- Phase 7 (Types cleanup): 1 hour
- Testing & Owner documentation: 1-2 hours

**Total: 10-16 hours of work**

The work can be done incrementally - each phase is relatively independent and can be tested separately. Phase 1 provides the most immediate value to the site owner.

---

## Next Steps

1. Review this plan and approve/modify phases
2. Begin with Phase 1 (Content Centralization) - provides immediate value
3. Implement subsequent phases in order
4. Test thoroughly after each phase
5. Document changes for site owner

---

*Generated: 2025-10-23*
