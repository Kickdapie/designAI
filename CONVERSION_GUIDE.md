# Example Conversion Guide

This guide helps you convert old-format examples to the proper `Example` format.

## Old Format Pattern

```typescript
{
  id: "example-id",
  label: "Example Name",           // ❌ OLD - change to 'name'
  description: "Description text",
  highlight: "Highlight text",
  trait: {
    id: "example-id",
    type: "element",
    label: "Element label",
    sourceExampleId: "source-id",
    description: "Element description",
    colors: ["#FFFFFF", "#000000"],
    fonts: ["Sans-serif bold", "Sans-serif regular"],
    layoutHints: ["Hint 1", "Hint 2"],
  },
},
```

## New Format Pattern

```typescript
{
  id: "example-id",
  name: "Example Name",            // ✅ NEW - renamed from 'label'
  tagline: "Highlight text",       // ✅ NEW - from 'highlight'
  scenario: "Website scenario",    // ✅ NEW - generate from sourceExampleId or id
  description: "Description text",
  palette: ["#FFFFFF", "#000000"], // ✅ NEW - from trait.colors
  fonts: ["Sans-serif"],           // ✅ NEW - from trait.fonts (cleaned)
  layoutTags: ["Hint 1", "Hint 2"], // ✅ NEW - from trait.layoutHints (first 6)
  thumbnail: "https://images.unsplash.com/photo-...?auto=format&fit=crop&w=400&q=60",
  preview: "https://images.unsplash.com/photo-...?auto=format&fit=crop&w=900&q=60",
  elements: [                      // ✅ NEW - wrap trait in array
    {
      id: "example-id-element",
      label: "Element label",
      description: "Element description",
      highlight: "Highlight text",
      trait: {
        id: "example-id",
        type: "element",
        label: "Element label",
        sourceExampleId: "example-id", // ✅ Change to use example's id
        description: "Element description",
        colors: ["#FFFFFF", "#000000"],
        fonts: ["Sans-serif"],          // ✅ Clean font names
        layoutHints: ["Hint 1", "Hint 2"],
      },
    },
  ],
},
```

## Conversion Steps

For each old-format example:

1. **Change `label:` to `name:`** ✓
2. **Add `tagline:`** - Copy value from `highlight` field
3. **Add `scenario:`** - Generate from `trait.sourceExampleId` or `id`:
   - Replace hyphens with spaces
   - Capitalize first letter of each word
   - Example: `"default-blog-about-layout"` → `"Default Blog About"`
4. **Add `palette:`** - Copy from `trait.colors`
5. **Add `fonts:`** - Copy from `trait.fonts`, but clean them:
   - Remove anything in parentheses: `"Sans-serif bold (headings)"` → `"Sans-serif bold"`
   - If empty, use `["Sans-serif"]`
6. **Add `layoutTags:`** - Copy first 6 items from `trait.layoutHints`
7. **Add `thumbnail:` and `preview:`** - Use Unsplash URLs:
   - Format: `https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=400&q=60`
   - Use different photo IDs for variety (see list below)
8. **Wrap `trait` in `elements` array:**
   - Element `id`: `${example.id}-element`
   - Element `label`: from `trait.label`
   - Element `highlight`: from top-level `highlight`
   - `trait.sourceExampleId`: change to example's `id` (not the original sourceExampleId)

## Font Cleaning Examples

- `"Sans-serif bold (hero heading)"` → `"Sans-serif bold"`
- `"Serif body"` → `"Serif"`
- `"Handwritten script (logo/brand name)"` → `"Handwritten script"`
- `"Modern sans-serif (headings)"` → `"Modern sans-serif"`

## Unsplash Photo IDs for Variety

Use these photo IDs (rotate through them):

```
1467232004584-a241de8bcf5d  (workspace/design)
1492562080023-ab3db95bfbce  (person/portrait)
1523050854058-8df90110c9f1  (academic/business)
1499750310107-5fef28a66643  (blog/writing)
1497613812973-731b5a8cc776  (creative/art)
1460925895917-afdab827c52f  (tech/computer)
1519389950473-47ba0277781c  (modern/building)
1432888622747-4eb9a8f2e40c  (nature/inspiration)
1492691527719-9d1e07e534b4  (urban/city)
1487058792275-0ad4aaf24ca7  (abstract/patterns)
1504868584819-f8e8b4b6d7e3  (minimal/clean)
1515895307828-95d45c2cbf0a  (colorful/bright)
1517077304055-6e89abbf09b0  (professional/corporate)
1522071820081-009f3129cbfb  (ecommerce/shopping)
1522542559099-2d422a75104a  (portfolio/showcase)
1498050108023-c5249f4df085  (tech/dashboard)
1506905925346-21bda4d32df4  (gradient/abstract)
1517486808906-6ca8b3f04846  (dark/moody)
1521737604893-d14cc237f11d  (light/airy)
```

Use: `https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=400&q=60` (thumbnail)
Use: `https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=900&q=60` (preview)

## Quick Reference Template

```typescript
{
  id: "[ID]",
  name: "[LABEL]",
  tagline: "[HIGHLIGHT]",
  scenario: "[GENERATED FROM ID/SOURCE]",
  description: "[DESCRIPTION]",
  palette: [/* trait.colors */],
  fonts: [/* trait.fonts cleaned */],
  layoutTags: [/* trait.layoutHints.slice(0, 6) */],
  thumbnail: "https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=400&q=60",
  preview: "https://images.unsplash.com/photo-[ID]?auto=format&fit=crop&w=900&q=60",
  elements: [
    {
      id: "[ID]-element",
      label: "[trait.label]",
      description: "[trait.description]",
      highlight: "[highlight]",
      trait: {
        id: "[trait.id]",
        type: "element",
        label: "[trait.label]",
        sourceExampleId: "[ID]", // Use example's id, not original sourceExampleId
        description: "[trait.description]",
        colors: [/* trait.colors */],
        fonts: [/* trait.fonts cleaned */],
        layoutHints: [/* trait.layoutHints */],
      },
    },
  ],
},
```

## Example Conversion

**Before:**
```typescript
{
  id: "coaching-brand-hero-stack",
  label: "Lifestyle coaching hero stack",
  description: "Full-width lifestyle hero...",
  highlight: "Strong personal brand...",
  trait: {
    id: "coaching-brand-hero-stack",
    type: "element",
    label: "Personal coaching landing stack",
    sourceExampleId: "nadejiah-coaching-site",
    description: "Large hero with lifestyle...",
    colors: ["#A9714B", "#2F5D50", "#F3E8E3", "#FFFFFF", "#1F1F1F"],
    fonts: ["Serif display", "Sans-serif body"],
    layoutHints: ["Full-width hero", "Lifestyle photography", ...],
  },
},
```

**After:**
```typescript
{
  id: "coaching-brand-hero-stack",
  name: "Lifestyle coaching hero stack",
  tagline: "Strong personal brand with clear conversion paths",
  scenario: "Coaching Website",
  description: "Full-width lifestyle hero...",
  palette: ["#A9714B", "#2F5D50", "#F3E8E3", "#FFFFFF", "#1F1F1F"],
  fonts: ["Serif", "Sans-serif"],
  layoutTags: ["Full-width hero", "Lifestyle photography", "Overlay headline and CTA", "Email signup section", "Stat highlight band", "Alternating image-text sections"],
  thumbnail: "https://images.unsplash.com/photo-1497613812973-731b5a8cc776?auto=format&fit=crop&w=400&q=60",
  preview: "https://images.unsplash.com/photo-1497613812973-731b5a8cc776?auto=format&fit=crop&w=900&q=60",
  elements: [
    {
      id: "coaching-brand-hero-stack-element",
      label: "Personal coaching landing stack",
      description: "Large hero with lifestyle...",
      highlight: "Strong personal brand with clear conversion paths",
      trait: {
        id: "coaching-brand-hero-stack",
        type: "element",
        label: "Personal coaching landing stack",
        sourceExampleId: "coaching-brand-hero-stack",
        description: "Large hero with lifestyle...",
        colors: ["#A9714B", "#2F5D50", "#F3E8E3", "#FFFFFF", "#1F1F1F"],
        fonts: ["Serif", "Sans-serif"],
        layoutHints: ["Full-width hero", "Lifestyle photography", ...],
      },
    },
  ],
},
```

