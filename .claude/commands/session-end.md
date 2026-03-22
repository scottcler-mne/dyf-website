# Session End - Update Documentation & Close Session

## Instructions

### Step 1: Session Summary
Ask: "What did we accomplish this session?"

### Step 2: Documentation Sync Check
Did this session modify any sources of truth?
- Color scheme in `src/App.css`?
- Navigation structure in `src/App.jsx`?
- Logo files in `public/`?
- Package dependencies in `package.json`?
- Deployment config in `wrangler.toml`?

If yes, update both source AND documentation.

### Step 3: Deferred Work Check
Ask: "Were any planned items bumped or deferred?"

If yes, add to Deferred Work table with context:
- What was the item?
- Why was it deferred?
- What context is needed to resume?

### Step 4: Update Documentation Files
For each file needing updates:
1. Update "Last Updated" date and session number
2. Update relevant metrics from sources of truth
3. Show changes before writing

### Step 5: Update CLAUDE.md
1. Update Current Metrics if values changed
2. Add condensed session entry to Session Progress (max 10 lines)
3. If CLAUDE.md >40k chars, archive old sessions to `CLAUDE.archive.md`

### Step 6: Final Checklist
- Source of truth updates: [✓/✗]
- Documentation sync: [✓/✗/N/A] for each doc
- Deferred work tracked: [✓/✗]
- Commit ready: [✓/✗]

**Session complete. Safe to exit.**
