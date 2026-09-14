# Kaliper Homepage Redesign

## Goal
Replace the blank home page with the selected “Frosted Instrument” direction: a polished, responsive consultancy homepage that makes Kaliper’s analytics expertise, proof, and consultation path immediately clear.

## What I’ll build
- A sticky, minimal Kaliper navigation with working section links and a prominent “Talk to an Expert” action.
- A first-screen statement for Kaliper’s marketing analytics, data engineering, BI, and AI offer, paired with a refined data visualization.
- A restrained scrolling tools band using the platforms represented on the current Kaliper site.
- Proof metrics for 8+ years, 100+ clients, 25+ experts, and three core disciplines.
- Three service sections for Data Engineering, Data Analytics, and AI Transformations.
- A “Why Kaliper” section focused on business understanding, delivery, cost efficiency, and ongoing support.
- A final consultation section linked to Kaliper’s existing Calendly booking page, plus a concise footer.
- Responsive mobile navigation and layouts, visible focus states, reduced-motion support, and accessible page structure.

## Visual direction
- Preserve the selected composition and hierarchy.
- Use Sora for headings, Manrope for body copy, and a restrained mono face for data labels.
- Carry over the chosen palette exactly: near-black, warm off-white, amber, and teal.
- Use translucent surfaces, fine measurement-grid details, precise charts, and restrained motion.
- Remove the prototype’s decorative blurred color blobs and avoid unsupported claims or invented contact details.

## Technical details
- Rebuild the `/` page using the existing TanStack structure and Tailwind v4 setup.
- Add semantic color, typography, motion, and surface tokens to the global stylesheet.
- Load fonts from the page head rather than CSS imports.
- Add unique homepage title, description, Open Graph metadata, and Twitter card metadata.
- Keep all content and interactions frontend-only; no database or account system is needed.
- Verify the finished page at desktop and mobile widths, including navigation, links, overflow, and build/runtime health.
