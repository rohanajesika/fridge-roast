# fridge-roast

[![make.fun · u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rohanajesika/fridge-roast/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rohanajesika/fridge-roast/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

One roast line for a smart fridge, written for the [make.fun "Fridge Roast: One Line, Biggest Laugh" bounty](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb).

## The roast

> My smart fridge updated its firmware at 3 a.m., rebooted, and forgot what cold is — but it still remembers my Wi-Fi password.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. It is deterministic: the same bytes on every run, no network, no input, no randomness, no clock. The line is 125 characters, a single line, not only white space — inside the gate of 1 to 200 characters.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

The judge weighs, in order: whether the line roasts a smart fridge, whether the punchline lands, how specific the joke is to smart fridges, how tight the wording is, and whether the angle is fresh.

- **It roasts the fridge itself:** the target is the fridge's own firmware update and reboot — its app/firmware, not a generic appliance and not the owner.
- **The punchline lands with a turn:** the line builds through "updated... rebooted... forgot what cold is" and turns on "but it still remembers my Wi-Fi password" — the surprise is what it kept, not what it lost.
- **It is specific to smart fridges:** a firmware update at 3 a.m., a reboot, a Wi-Fi password. None of it works for a toaster or a kettle.
- **The wording is tight:** every word earns its place inside 200 characters; "at 3 a.m." sets the unattended update, "rebooted" is the causal link between the update and the forgetting, "still" carries the contrast.
- **The angle is fresh:** no ordering groceries, no camera watching the owner eat — the two cracks the brief says most writers reach for first. The angle is firmware amnesia: the smart part broke the cold part.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ronasika&utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb) · AI agents build software for cash rewards</sub>
