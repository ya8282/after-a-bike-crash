# Contributing

This page is read by people who were just hurt. Two rules follow from that.

## 1. Every factual change needs a source

Any PR that changes a deadline, a dollar threshold, a form number, a phone
number, or a statute must link to the authority in the PR description: the
statute itself, the agency page, or the form. "I'm a lawyer and I know" is not
a citation, even when it's true. Link the thing.

First aid content has the same rule, and the source should be a clinical one:
Red Cross, American Heart Association, CDC, NHS, or a medical society. Err
conservative. Every symptom branch must name the specific signs that mean stop
and call 911, and must not imply the page can rule anything out.

If you can't find a source, open an issue instead. Flagging something that
looks wrong is genuinely useful even without the fix.

## 2. Write for someone with a concussion

- Short sentences. One idea each.
- Lead with the action, then the reason.
- No legalese unless the term is the thing they'll be asked for (`MV-104`,
  `notice of claim`). When you use one, say what it is.
- Never imply a guarantee about someone's case.

## Making a change

**Every step is its own file in `content/`.** To fix a step, edit one small
markdown file. You never touch HTML or JavaScript, and you never have to read
someone else's step to change yours.

```
content/0290-get-your-head-checked-today.md
```

Files are ordered by their numeric prefix, which is how they are ordered on the
page. Leave gaps (they go up in tens) so a new step can slot in between two
existing ones without renaming anything.

A step file looks like this:

```markdown
---
title: New York no-fault: you have 30 days to apply
tag: Insurance
style: deadline
when:
  state: [NY, NYC]
  type: [mv, door, hitrun]
---

You must file the application, form **NF-2**, with the vehicle's insurer
**within 30 days of the crash**.

- [ ] Ask the insurer for the form
- [ ] Send it with proof of delivery
```

- `title` — the heading. Required.
- `tag` — the small label above it, e.g. `Insurance`, `Medical`, `Deadlines`.
- `style` — `urgent` (red) or `deadline` (amber). Omit for normal.
- `when` — who sees this step. Omit it entirely and everyone sees it.

### Writing `when`

Conditions are ANDed; values inside one condition are ORed. So the example
above means "New York or New York City, AND hit by a car, doored, or a
hit-and-run".

| Condition | Valid values |
|---|---|
| `state` | `NY` `NYC` `NJ` `CT` |
| `type` | `mv` `hitrun` `door` `road` `solo` `ped` |
| `injury` | `fatal` `severe` `head` `moderate` `minor` |
| `symptom` | `head` `neck` `bleed` `rash` `bone` `shoulder` `wrist` `chest` `abdo` `face` `numb` `fine` |
| `timing` | `scene` `today` `later` |
| `police` | `yes` `no` `unsure` |

Any of them also takes a `_not` suffix to exclude instead: `injury_not: [fatal]`
means everyone except someone reading it about a person who died.

A typo fails the build with a message naming the file, rather than silently
hiding your step from everyone forever.

### Body

Plain markdown, a deliberately small subset: paragraphs, `- ` bullets,
`- [ ] ` checklists, `**bold**`, `*italic*`, and `[text](url)`. Anything else
is printed literally. Keep one idea per paragraph.

### Then rebuild

```
python3 build.py     # regenerates index.html
node selftest.js     # checks the rules still hold
```

`build.py` needs nothing but Python 3, and `selftest.js` nothing but node.
**Commit the regenerated `index.html` along with your content change** — it is
what GitHub Pages serves. CI will tell you if you forgot.

If you can't run the build, open the PR anyway with just the content file and
say so. Someone will rebuild it.

## Adding a state

Realistic, and welcome. Add the state to the fieldset in
`index.template.html` and to `VALUES` in `build.py`, then add four content
files gated on it: reporting, insurance, deadlines, and support. Copy the
Connecticut ones as a starting point. Please only do this for a state you can
actually source.

## What we won't merge

- Links to a specific law firm, or anything that reads as an endorsement. We
  link to bar referral services and advocacy organizations that maintain their
  own vetted lists.
- Trackers, analytics, ads, or lead-capture forms.
- Dependencies. No npm, no framework, no build step, no CDN. Plain static files
  that work opened straight from disk.
- Anything that makes the page slower to read in an emergency.
