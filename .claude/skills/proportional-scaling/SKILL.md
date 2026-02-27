# Skill: proportional-scaling

**Trigger when**: UI elements have fixed pixel heights that squash or stretch at different
viewport sizes, or when Figma designs need to scale proportionally across breakpoints.

**Keywords**: `lg:h-[Xpx]`, fixed width+height pairs, cards that look wrong at 1920px vs
1440px, requests for "fluid" or "viewport-relative" sizing, "cut off below the fold",
"aspect ratio" layout issues.

---

## Core Patterns

| Situation | Pattern |
|---|---|
| Fixed W+H element (card, image) | `aspect-ratio: W/H` + `maxHeight: clamp(min, Xvh, max)` |
| Text that scales with layout width | `fontSize: clamp(minPx, Xvw, maxPx)` |
| Vertical spacing / padding | `clamp(minPx, Yvh, maxPx)` |
| Sibling should match a capped element | Flexbox stretch — no extra CSS needed |
| Extract ratio from Figma | Node W × H → `aspectRatio: "W/H"` |
| vw target formula | `(figma_size / figma_viewport_width) * 100` |
| vh target formula | `(figma_size / figma_viewport_height) * 100` |

---

## Decision Flow

1. **Does it have a fixed 2D size (W+H)?**
   → Use `aspect-ratio: W/H` (drives width-proportional height)
   → Cap with `maxHeight: clamp(minPx, Xvh, maxPx)` so tall viewports don't over-inflate

2. **Is it text scaling with layout width?**
   → `fontSize: clamp(minPx, Xvw, maxPx)`

3. **Is it vertical spacing (padding, margin, gap)?**
   → `clamp(minPx, Yvh, maxPx)` in inline style or Tailwind arbitrary value

4. **Should a sibling match the height of a capped element?**
   → Put both in a flex row — the sibling stretches automatically. Remove any fixed height.

5. **Test matrix** (use DevTools responsive mode):
   - Widths: 1280, 1440, 1920
   - Heights: 768, 900, 1080

---

## Example: Credit Card Card (payments page)

**Problem**: At 1920px wide, card is ~796px wide → `aspect-ratio: 693/405` gives 465px tall.
At 900px viewport height this pushes content below the fold.

**Fix**:
```tsx
style={{
  aspectRatio: "693/405",
  minHeight: "220px",
  maxHeight: "clamp(260px, 38vh, 420px)",  // ← added
  borderRadius: "35px",
  background: "...",
}}
```

The sibling payment-summary card uses `lg:w-1/2` in the same flex row → auto-stretches to match.

**Vertical spacing compressed with `clamp()`**:
```tsx
// Title bottom margin
className="... mb-[clamp(12px,2vh,32px)]"

// Top-row bottom margin
className="flex flex-col lg:flex-row gap-6 mb-[clamp(8px,1.5vh,24px)]"

// Personal details card vertical padding
className="... py-[clamp(14px,2vh,36px)]"

// Header row inside personal details
className="flex items-start justify-between mb-[clamp(10px,1.5vh,24px)]"

// Field minHeight
style={{ minHeight: "clamp(70px, 8vh, 90px)", ... }}
```

---

## Why `clamp()` over breakpoints

Breakpoints snap. `clamp()` animates smoothly as the viewport resizes. Use breakpoints for
layout changes (e.g. stack → row), `clamp()` for sizes that should scale continuously.

---

## Pitfalls

- `maxHeight` on an `aspect-ratio` element: CSS takes the smaller of the two values — this is
  intentional and correct.
- Don't use `vh` for font sizes inside scrollable containers (use `vw` or `em` instead).
- `clamp(min, preferred, max)` — preferred must be a relative unit (`vh`, `vw`, `%`), not `px`.
- On mobile, `100vh` can include the browser chrome. Prefer `svh` if targeting mobile-first,
  or keep `min` values generous enough to handle that case.
