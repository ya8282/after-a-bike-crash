# After a Bike Crash — NY / NJ / CT

A single static page that tells someone what to do after a bicycle crash in New
York, New Jersey, or Connecticut, based on their actual situation.

Answer five questions — state, what happened, how bad the injuries are, how long
ago, whether police responded — and it renders an ordered checklist: emergency
care, evidence at the scene, crash reporting, insurance, the deadlines that
quietly kill claims, support organizations, and a records checklist. Printable.

**[Read the disclaimer.](#accuracy-and-limits)** This is not legal advice and it
has not been reviewed by an attorney.

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

## Running it

Open `index.html`. That's it — no build, no dependencies, no tracking.

To serve locally: `python3 -m http.server`. To host it: GitHub Pages from the
repository root works with no configuration.

`index.html#selftest` runs the rule-matching checks; the tab title becomes
"selftest passed".

## Editing the content

All advice lives in the `STEPS` array near the bottom of `index.html`. See
[CONTRIBUTING.md](CONTRIBUTING.md) for the shape of a step and the rules for
changing one. The short version: **factual changes need a source link**, and
the prose is written for someone with a concussion.

## Accuracy and limits

This is general information, not legal or medical advice, and no attorney-client
relationship is created by reading it. It has **not been reviewed by an attorney
in any state.** Thresholds, form numbers, and deadlines change; the text is
deliberately written as "confirm with the agency."

Known gaps and things to re-verify annually:

- Attorney review of every deadline step, per state. **Open — help wanted.**
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
