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

The site is three files: `index.html` (the situation-based next steps),
`prepare.html` (static, what to do before a crash), and `style.css`, shared by
both. Design tokens live at the top of the stylesheet; don't add a second copy.

Content for the next-steps page lives in the `STEPS` array near the bottom of
`index.html`. Each entry:

```js
{when: a => a.state === "NJ" && a.type === "door",  // omit to always show
 cls: "urgent" | "deadline" | "",                   // left border color
 tag: "Insurance",                                  // small label
 title: "...",
 html: `...`}
```

`a` holds the answers: `state` (NY/NYC/NJ/CT), `type`
(mv/hitrun/door/road/solo/ped), `injury` (fatal/severe/head/moderate/minor),
`when` (scene/today/later), `police` (yes/no/unsure), and `sym`, a Set of zero
or more symptoms. Read `sym` with the `has(a, "wrist")` helper, never
`a.sym.has` directly.

Add a step by appending an object. There is no build step.

Before opening a PR:

1. Open `index.html#selftest`. The tab title should read "selftest passed".
2. If your change adds a branch that matters, add an assertion to that block.
3. Check the page at phone width and in dark mode.

## Adding a state

Realistic, and welcome. You'd add the option to the state fieldset and then a
reporting step, an insurance step, a deadlines step, and a support step gated
on it. Copy the Connecticut ones as a template. Please only do this for a state
you can actually source.

## What we won't merge

- Links to a specific law firm, or anything that reads as an endorsement. We
  link to bar referral services and advocacy organizations that maintain their
  own vetted lists.
- Trackers, analytics, ads, or lead-capture forms.
- Dependencies. No npm, no framework, no build step, no CDN. Plain static files
  that work opened straight from disk.
- Anything that makes the page slower to read in an emergency.
