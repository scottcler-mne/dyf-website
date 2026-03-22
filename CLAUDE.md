# DYF Website - Documentation & Status

## COLLABORATION GUIDELINES

Universal working preferences: See ~/.claude/CLAUDE.md

**Project-Specific Guidelines**:
1. Color scheme must match DYF logo: #00ADEE (blue), #F6921E (orange), #86C244 (green)
2. Maintain responsive design - mobile-first approach with hamburger menu
3. Keep navigation structure: Programs, Events, About, Impact, Contact, Donate
4. Animated dot pattern in hero section should remain subtle but engaging
5. All changes should maintain accessibility standards

---

## CURRENT METRICS (Sources of Truth)

These metrics are validated at session-start. If discrepancies found, fix the source.

| Metric | Value | Source of Truth |
|--------|-------|-----------------|
| Logo files | 2 SVG files | `public/dyf-logo.svg`, `public/dyf-logo-alt.svg` |
| Primary color | #00ADEE | `src/App.css` :root variables |
| Navigation items | 6 items | `src/App.jsx` nav section |
| Dev server port | 5173 | Vite default |
| Build tool | Vite + React | `package.json` |
| Deployment target | Cloudflare Pages | `wrangler.toml`, deployment docs |

**Last Validated**: March 21, 2026 (Session #1)

---

## SESSION WORKFLOW

### At /session-start:
1. Present work queue from this document
2. Check deferred work - review items bumped in previous sessions
3. Note any in-progress work from Session Progress section
4. Wait for direction

### During session:
- Web search proactively for best practices
- Stay aligned with work queue unless redirected
- Monitor context usage - find clean stopping points proactively

### Before /session-end:
- Update Session Progress if mid-implementation
- Documentation Sync Check
- Add bumped items to Deferred Work table
- Commit changes if appropriate

---

## SESSION PROGRESS

*Updated each session if work is in progress.*

**Current**: Session #1
**Status**: Project memory structure established

### Session #1: Initial Setup & Framework Adoption
- Created complete React + Vite website with responsive design
- Integrated DYF logo files from user's desktop
- Implemented color scheme matching logo (#00ADEE, #F6921E, #86C244)
- Added animated SVG dot pattern in hero section
- Created deployment documentation for Cloudflare Pages
- Established project-level memory structure with CLAUDE.md
- Created session-start and session-end commands

---

## DEFERRED WORK (Bumped Items with Context)

*Items that were planned but bumped. Prevents lost work.*

| Item | Originally From | Why Deferred | Context/Next Steps |
|------|-----------------|--------------|-------------------|
| *(none yet)* | - | - | - |

---

## WORK QUEUE

### P1: High Priority Items
*(none currently - awaiting direction)*

### P2: Medium Priority Items
- Consider adding actual event data to calendar section
- Evaluate email signup integration options
- Review accessibility compliance beyond basic standards

### P3: PARKING LOT (Low Priority)

| Item | Reason |
|------|--------|
| Add analytics tracking | Deployment not yet complete |
| Performance optimization | Site performs well currently |
| SEO meta tags enhancement | Basic SEO in place |

---

## COMPLETED MILESTONES

| Milestone | Sessions | Status |
|-----------|----------|--------|
| Initial website build | #1 | Complete |
| Logo integration | #1 | Complete |
| Color scheme alignment | #1 | Complete |
| Responsive design | #1 | Complete |
| Animated hero section | #1 | Complete |
| Deployment documentation | #1 | Complete |

---

## TECHNICAL CONTEXT

### Stack
- React 18.3.1
- Vite 5.4.2
- CSS3 with CSS variables for theming

### Key Files
- `src/App.jsx` - Main component with all sections
- `src/App.css` - Styling with logo colors and animations
- `src/index.css` - Global styles and resets
- `public/dyf-logo.svg` - Primary logo
- `public/dyf-logo-alt.svg` - Alternative logo

### Deployment
- Target: Cloudflare Pages
- Documentation: `START_HERE.md`, `QUICK_START.md`, `CLOUDFLARE_SETUP.md`
- Configuration: `wrangler.toml`, `_headers`, `_redirects`

---

**Last Updated**: March 21, 2026 (Session #1)
