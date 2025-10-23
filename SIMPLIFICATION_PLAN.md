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

## Phase 1: Content Centralization 🎯

### Problem
Content like pricing, hours, and contact info is hardcoded across multiple files, requiring developer intervention for simple updates.

### Solution
Create `src/content.js` as single source of truth:

```javascript
// src/content.js - Edit this file to update site content

export const businessInfo = {
  name: 'Restorative Bodywork',
  phone: '(512) 920-3103',
  phoneLink: 'tel:+15129203103',
  email: 'info@restorativebodyworkatx.com',
  address: '2111 Dickson Dr #14',
  city: 'Austin',
  state: 'TX',
  zip: '78704',
  fullAddress: '2111 Dickson Dr #14, Austin, TX 78704',
  bookingUrl: 'https://www.massagebook.com/therapists/restorativebodyworkatx',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.699230326372!2d-97.78387882394603!3d30.245652409008724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab64db1f9f463763%3A0xc669fa7e156b773a!2sRestorative%20Bodywork!5e0!3m2!1sen!2sus!4v1715558773560!5m2!1sen!2sus',
}

export const hours = {
  sunday: { open: '10:00 AM', close: '5:00 PM' },
  monday: { open: '10:00 AM', close: '7:00 PM' },
  tuesday: 'Closed',
  wednesday: 'Closed',
  thursday: 'Closed',
  friday: 'Closed',
  saturday: { open: '10:00 AM', close: '5:00 PM' },
  note: 'By appointment only',
}

export const pricing = [
  { duration: '60 minutes', price: 120 },
  { duration: '75 minutes', price: 150 },
  { duration: '90 minutes', price: 180 },
]

// FAQ data (currently in src/data.js - consolidate here)
export const faqs = [
  {
    title: 'Before Your Appointment',
    description: 'For your first appointment, please arrive 15 minutes prior...',
  },
  // ... rest of FAQ items
]
```

### Files to Update
- `src/pages/index.astro` - Import pricing/contact from content.js (lines 28-99)
- `src/pages/contact.astro` - Import hours/contact from content.js (lines 16-42)
- `src/data.js` - Merge into content.js, delete original
- `src/components/widgets/Header.astro` - Use centralized contact info
- `src/components/widgets/Footer.astro` - Use centralized contact info

### Owner Benefits
Change prices, hours, or contact info in ONE place, without touching HTML/Astro code.

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
- **Single content.js file** for all business info

### Maintenance Benefits:
- ✅ Owner can update prices in `src/content.js` without developer
- ✅ Owner can update hours in `src/content.js` without developer
- ✅ Owner can update contact info in `src/content.js` without developer
- ✅ Fewer files to maintain and understand
- ✅ Faster build times
- ✅ Easier onboarding for future developers
- ✅ Less code to update when upgrading Astro

---

## Implementation Checklist

### Phase 1: Content Centralization
- [ ] Create `src/content.js` with businessInfo, hours, pricing, FAQs
- [ ] Update `src/pages/index.astro` to import from `content.js`
- [ ] Update `src/pages/contact.astro` to import from `content.js`
- [ ] Update header/footer components to use centralized contact info
- [ ] Delete `src/data.js` after merging
- [ ] Test that pricing/hours/contact display correctly on all pages

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
- [ ] Test content updates in `src/content.js`
- [ ] Run `npm run build` and check for errors
- [ ] Add documentation comment block at top of `src/content.js`
- [ ] Update README.md with content management instructions

---

## Documentation for Site Owner

After implementation, add this to the top of `src/content.js`:

```javascript
/**
 * CONTENT MANAGEMENT - Edit this file to update site content
 *
 * This file contains all the content that appears on your website.
 * You can edit pricing, hours, contact information, and more without
 * needing to touch any other code files.
 *
 * After making changes:
 * 1. Save this file
 * 2. Run 'npm run build' to rebuild the site
 * 3. Deploy the changes (if auto-deploy is not set up)
 *
 * Need help? Contact your developer.
 */
```

Add to README.md:

```markdown
## Updating Site Content

All site content (pricing, hours, contact info, FAQs) is managed in a single file: `src/content.js`

To update content:
1. Open `src/content.js` in any text editor
2. Edit the values (prices, hours, contact info, etc.)
3. Save the file
4. Rebuild the site: `npm run build`
5. Deploy (may be automatic depending on hosting setup)

No developer knowledge required for content updates!
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

- Phase 1 (Content centralization): 2-3 hours
- Phase 2 (Remove blog): 1-2 hours
- Phase 3 (Remove unused components): 1-2 hours
- Phase 4 (Simplify utilities): 2-3 hours
- Phase 5 (Layouts): 1 hour
- Phase 6 (Dependencies): 1 hour
- Phase 7 (Types cleanup): 1 hour
- Testing & Documentation: 2-3 hours

**Total: 11-17 hours of work**

The work can be done incrementally - each phase is relatively independent and can be tested separately.

---

## Next Steps

1. Review this plan and approve/modify phases
2. Begin with Phase 1 (Content Centralization) - provides immediate value
3. Implement subsequent phases in order
4. Test thoroughly after each phase
5. Document changes for site owner

---

*Generated: 2025-10-23*
