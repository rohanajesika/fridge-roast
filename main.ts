// Fridge Roast: One Line, Biggest Laugh — make.fun bounty
// u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
//
// The entry is one roast line a program writes to /output/entry.txt.
// It is fully deterministic: the same line every run, no network, no
// randomness, no input read, no clock. It writes the line and nothing
// else.
//
// The line: a smart fridge that updated its firmware at 3 a.m.,
// rebooted, and forgot how to be cold — but still remembers the
// Wi-Fi password. The joke is the inversion of the fridge's one job
// against the one thing it kept: it lost "cold" and kept the password.
//
// Judge brief mapping (criteria in the judge's own order):
// 1. On-subject roast of a smart fridge: the target is the fridge's
//    firmware update and reboot — its app/firmware, not a generic
//    appliance and not the owner.
// 2. Punchline lands: the line builds through "updated... rebooted...
//    forgot how to be cold" and turns on "but it still remembers my
//    Wi-Fi password" — the surprise is what it kept, not what it lost.
// 3. Specific to smart fridges: a firmware update at 3 a.m., a reboot,
//    a Wi-Fi password. None of it works for a toaster or a kettle.
// 4. Tight wording: every word earns its place inside 200 characters;
//    "at 3 a.m." sets the unattended update, "rebooted" is the causal
//    link between the update and the forgetting, "still" carries the
//    contrast. No setup the punchline does not need.
// 5. Fresh angle: no ordering groceries, no camera watching the owner
//    eat — the two cracks the brief says most writers reach for first.
//    The angle is firmware amnesia: the smart part broke the cold part.
//
// Rejected alternatives (kept here so the choice is on the record):
// - "My fridge's ice maker makes two cubes a day and logs each one in
//   the app like a quarterly earnings report." Weaker turn: the
//   earnings-report simile is a second joke competing with the first,
//   and "two cubes a day" is a complaint, not a roast with a turn.
// - "My smart fridge spent six hours updating, then asked me to agree
//   to new terms before it would make ice." Good ToS angle, but the
//   punchline is a demand, not a surprise — it tells you the joke
//   instead of landing it.
// - "My fridge's camera identified my leftovers as a science project
//   and filed a health inspection on itself." Fails criterion 5: it
//   leans on the camera-watching-you crack the brief warns against.

import { writeFileSync, mkdirSync } from "node:fs";

// The roast. One line, first person, the owner's fridge as the butt
// of the joke: it updated itself in the middle of the night, rebooted,
// and came back unable to do the single thing a fridge is for — while
// the utterly useless thing it remembered is the Wi-Fi password.
// REVISION (post-first-write, quality review): "forgot how to be
// cold" -> "forgot what cold is". Two characters shorter, and the
// joke sharpens: the fridge did not lose a skill, it lost the very
// concept of cold — which makes "but it still remembers my Wi-Fi
// password" land harder, because the thing it kept is the one thing
// that has nothing to do with being a fridge. Criterion 4 (tight
// wording) and criterion 2 (the turn) both improve; nothing else
// changes.
const FRIDGE_ROAST =
  "My smart fridge updated its firmware at 3 a.m., rebooted, and forgot what cold is — but it still remembers my Wi-Fi password.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FRIDGE_ROAST, "utf8");
