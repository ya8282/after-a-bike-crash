# After a Bike Crash — NY / NJ / CT

A single static page that tells someone what to do after a bicycle crash in New
York, New Jersey, or Connecticut, based on their actual situation.

Answer six questions — state, what happened, how bad the injuries are, which
symptoms you have, how long ago, whether police responded — and it renders an ordered checklist: emergency
care, symptom-by-symptom first aid, evidence at the scene, crash reporting, insurance, the deadlines that
quietly kill claims, support organizations, and a records checklist. Printable.

**[Read the disclaimer.](#accuracy-and-limits)** This is not legal or medical
advice, and it has not been reviewed by an attorney or a clinician.

## Why this exists

Post-crash guidance for cyclists is either a static one-size list (the
[NY Bicycling Coalition guide](https://nybc.net/nys-bike-law/in-a-crash-2), good
but New York only), a national guide that isn't state-specific
([Families for Safe Streets](https://www.familiesforsafestreets.org/national-resource-guide),
excellent on the human side), or law firm lead-generation. New Jersey and
Connecticut cyclists have almost nothing non-commercial at all.

Nothing we found branches on the situation, and nothing surfaces the **90-day
municipal notice of claim** deadlines in all three states — the trap that ends
claims against a city, a transit authority, or a pothole before the victim knows
it existed.

## The pages

- **`index.html`** — the situation-based next steps, for someone who just crashed.
- **`prepare.html`** — what to carry and set up beforehand: a specific first aid
  kit list with reasons, phone and Medical ID setup, the insurance coverage that
  actually matters for a cyclist (your own uninsured motorist limit), bike
  documentation, camera footage handling, and a printable wallet card.

## Editing the advice

Every step of advice is its own markdown file in `content/`. Fix a fact by
editing one small file; you never touch HTML or JavaScript. A step declares who
sees it in its frontmatter:

```markdown
---
title: New York no-fault: you have 30 days to apply
tag: Insurance
style: deadline
when:
  state: [NY, NYC]
  type: [mv, door, hitrun]
---
```

Then `python3 build.py` regenerates `index.html`, and `node selftest.js`
checks the rules. Both are stdlib-only; there are no dependencies to install.
A typo in a condition fails the build with a message naming the file, instead
of silently hiding that step from everyone. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## Running it

Open `index.html`. No bundler, no dependencies, no tracking.

To serve locally: `python3 -m http.server`. To host it: GitHub Pages from the
repository root works with no configuration.

`style.css` is shared by both pages. `index.html#selftest` runs the rule-matching checks; the tab title becomes
"selftest passed".

The short version of the contribution rules: **factual changes need a source
link**, and the prose is written for someone with a concussion.

## Accuracy and limits

This is general information, not legal or medical advice, and no attorney-client
relationship is created by reading it. It has **not been reviewed by an attorney
in any state.** Thresholds, form numbers, and deadlines change; the text is
deliberately written as "confirm with the agency."

Known gaps and things to re-verify annually:

- Attorney review of every deadline step, per state. **Open — help wanted.**
- Clinical review of the first aid steps by a physician, paramedic, or nurse.
  **Open — help wanted.**
- NY MV-104 filing window and property-damage threshold
- NY no-fault NF-2 30-day application deadline; MVAIC notice period
- NJ State Police reporting threshold and window; UCJF notice period
- CT reporting threshold; highway-defect notice under Conn. Gen. Stat. 13a-144 / 13a-149
- Municipal notice-of-claim periods in all three states
- Wrongful death deadlines and estate-representative requirements
- Spanish translation. **Open — help wanted.**
- Only three states. Adding one is a contained change; see CONTRIBUTING.

If you are a personal injury attorney in NY, NJ, or CT and willing to read the
deadline steps for your state, that is the single most valuable contribution
available here. Open an issue.

## License

MIT, content included. Adapt it for your state.
