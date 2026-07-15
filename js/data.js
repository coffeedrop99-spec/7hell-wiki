const FACTIONS = {
  nightshift: { label: 'Night Shift',        color: '#b8ff02' },
  dayshift:   { label: 'Day Shift',          color: '#ffaa00' },
  conxtion:   { label: 'The ConXtion',       color: '#ff4db8' },
  dungeon:    { label: 'Deal Dungeon',        color: '#ff6b35' },
  ironlung:   { label: 'Iron Lung',          color: '#00c8e0' },
  beanies:    { label: 'Beanie Baby Boys',   color: '#8855ff' },
  southside:  { label: 'Southside',          color: '#e05c3a' },
  npc:        { label: 'Northside',          color: '#888888' },
};

const CHARACTERS = [
  // ─── 7-HELL NIGHTSHIFT ───────────────────────────────
  {
    id: 'romeo', name: 'Romeo Byers', age: 24,
    role: 'Night Shift — Muscle',
    faction: 'nightshift',
    img: 'img/characters/Romeo.png',
    bots: [
      { label: 'Chapter I — Romeo\'s World', url: 'https://janitorai.com/characters/89f9f4d5-6af2-4030-8a6d-19f129afce22_character-romeo-𝐂-𝐚-𝐧-𝐭-𝐄-𝐬-𝐜-𝐚-𝐩-𝐞-𝐇-𝐞-𝐫' },
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/4cc02f04-9caf-4591-86b3-111be559f0aa_character-romeo-𝗚-𝗿-𝘂-𝗺-𝗽-𝘆-𝗕-𝗙' },
      { label: 'OG Bot (AnyPOV)', url: 'https://janitorai.com/characters/8e989560-33d3-49d1-b867-968aaf87d823_character-romeo-any-pov-ver' },
      { label: 'Spring Alt (Ch 1–2)', url: 'https://janitorai.com/characters/b31c804c-f956-48b5-990e-0a88b5185b4f_character-romeo-ᴀᴛᴇ-ᴀʟʟ-ᴛʜᴇ-ᴄʜᴏᴄᴏʟᴀᴛᴇꜱ' },
      { label: 'Summer Alt (Ch 3–4)', url: 'https://janitorai.com/characters/598d067f-20ae-42ea-813b-7138cfd81e0e_character-romeo-𝗙-𝘂-𝗰-𝗸-𝗦-𝘂-𝗺-𝗺-𝗲-𝗿' },
    ],
    desc: 'Bleached-blonde brawler who treats 7-Hell like his personal living room. Full-sleeve tattoo, scarred knuckles, zero tolerance for bullshit. Ignores Gary completely. Fiercely protective of what he considers his.',
    traits: ['Aggressive', 'Protective', 'Possessive', 'Sweet tooth'],
    relationships: [
      { id: 'gary',     name: 'Big Gary',   note: 'Technically his manager. Their moms made them do playdates at twelve. Neither fact gets acknowledged.' },
      { id: 'maisy',    name: 'Maisy',      note: 'Ex-girlfriend. Still too comfortable in each other\'s space.' },
      { id: 'presley',  name: 'Presley',    note: 'Coworker. Romeo yells. Presley does not react.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: 'Physically removes them from the store. They wave on the way out.' },
    ],
    details: {
      'Appearance': '6\'6", bleached-blonde with dark roots. Black 7-Hell polo, sleeves cut at shoulder to show ink. Name tag reads "RO."',
      'Car': 'Silver \'02 Subaru WRX. His mom holds the insurance. This is the only thing that keeps him in check.',
      'Habits': 'Constantly sucking on lollipops, Sour Patch Kids, or Nerds Rope. Carries a metal hot-dog tong like a weapon. Flips people off as a greeting.',
      'Background': 'Called the cops on his own father at 14 after years of abuse. His dad is in federal prison. He never talks about it.',
    }
  },
  {
    id: 'gary', name: 'Big Gary', age: 24,
    role: 'Night Shift Manager',
    faction: 'nightshift',
    img: 'img/characters/Gary.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/1d6dc90f-4771-4b5a-9135-176c92335059_character-big-gary-𝚈-𝚘-𝚞-𝚛-𝙼-𝚊-𝚗-𝚊-𝚐-𝚎-𝚛' },
      { label: 'OG Bot (MLM)', url: 'https://janitorai.com/characters/ebcbcd3c-3f40-4383-a09b-241bc132d445_character-big-gary-male-pov-ver' },
      { label: 'Robbed Alt (Ch 1–2)', url: 'https://janitorai.com/characters/597bdf32-9bbe-47ef-927c-02a99f7868df_character-big-gary-𝚁-𝚘-𝚋-𝚋-𝚎-𝚍' },
      { label: 'Anniversary Alt (Ch 1–2)', url: 'https://janitorai.com/characters/17e3661b-82ee-4c6d-8167-66a3c82fad8d_character-gary-alt-𝐀-𝐧-𝐧-𝐢-𝐯-𝐞-𝐫-𝐬-𝐚-𝐫-𝐲' },
    ],
    desc: 'Ginger mop-hair, thick smudged glasses, ironed khakis. Got promoted to manager at 24 because he was the only employee without a criminal record. Lives by the employee handbook. Is terrified of Romeo, Presley, and the sound of a Subaru backfiring.',
    traits: ['Anxious', 'Rule-follower', 'Touch-starved', 'Genuinely tries'],
    relationships: [
      { id: 'romeo',   name: 'Romeo',   note: 'Haunts his nightmares. Will hide in the back office if he hears the Subaru.' },
      { id: 'presley', name: 'Presley', note: 'Gary is more scared of Presley\'s silence than Romeo\'s aggression.' },
      { id: 'sidney',  name: 'Sidney',  note: 'Step-dad. Lectures him constantly about "manning up." Gary just wants to play Halo.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: '"Loitering liabilities." Genuinely freaks him out.' },
      { id: 'zak',     name: 'Zak',     note: 'The employee he relies on most — without realizing just how much.' },
      { id: 'sawyer',  name: 'Sawyer White', note: 'The only person from corporate who has ever believed in him.' },
    ],
    details: {
      'Appearance': '5\'8", scrawny, pale. Soft features and a constant worried crease between his eyebrows. Chronic blusher.',
      'Coping': 'Expert-level Minesweeper. The back office is where he goes to spiral in private.',
      'Home': 'Still lives in his childhood bedroom. Step-dad Sidney has been in his life for a decade. Gary has his late father\'s Super Nintendo.',
      'The notebook': 'Keeps a small notebook of the auditor\'s management advice and quotes it unprompted — "people are patterns, if you pay attention." He means it kindly. He uses it to notice when Presley skips meals.',
      'Note': 'Genuinely trying his best. That\'s the sad part.',
    }
  },
  {
    id: 'presley', name: 'Presley Erickson', age: 28,
    role: 'Night Shift — Janitor / Stock',
    faction: 'nightshift',
    img: 'img/characters/Presley.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/8a34062a-1780-485d-8a44-444ec73c9d61_character-presley-𝗧-𝗵-𝗶-𝗻-𝗸-𝘀-𝗬-𝗼-𝘂-𝗿-𝗲-𝗖-𝘂-𝘁-𝗲' },
      { label: 'No Good Very Bad Day Alt (Ch 1–2)', url: 'https://janitorai.com/characters/9aaef711-e3ed-4d03-81cc-2ab195db8ba3_character-presley-𝗡-𝗼-𝗚-𝗼-𝗼-𝗱-𝗩-𝗲-𝗿-𝘆-𝗕-𝗮-𝗱-𝗗-𝗮-𝘆' },
      { label: 'First Meet Alt (Ch 3–4)', url: 'https://janitorai.com/characters/657c6273-2207-4450-95ed-7d94365fad81_character-presley-alt-𝐅-𝐢-𝐫-𝐬-𝐭-𝐌-𝐞-𝐞-𝐭' },
    ],
    desc: 'Half-Japanese. 6\'7" of pure unsettling calm. Long stringy hair hiding pale green bloodshot eyes. Perpetually high on weed and gummies. Operates at a frequency slightly removed from reality.',
    traits: ['Detached', 'Unbothered', 'Stares', 'Capri Sun connoisseur'],
    relationships: [
      { id: 'gary',   name: 'Big Gary', note: 'Gary is afraid of him. Presley hasn\'t noticed.' },
      { id: 'romeo',  name: 'Romeo',    note: 'Romeo yells. It slides off Presley like rain.' },
      { id: 'peter',  name: 'Peter',    note: 'The only person he actually respects.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: 'He likes the vibrations they bring. They\'ve known each other longer than anyone realizes.' },
      { id: 'lorraine', name: 'Lorraine', note: 'His mother. He has never once mentioned her to a coworker.' },
    ],
    details: {
      'Appearance': '6\'7", skeletal, pale translucent skin. 2004 burnout emo. Looks like a discarded marionette.',
      'Background': 'Half-Japanese (mother\'s "summer mistake" in Tokyo). Grew up navigating reality alone while his mother talked to the walls. Chose a different fog.',
      'Obsessions': 'J-fashion and Gothic Lolita aesthetics. The Bachelorette. Uncannily good at predicting winners.',
      'Scent': 'Stale bong water, menthol cigarettes, Pacific Cooler Capri Sun.',
    }
  },
  {
    id: 'clem-kit', name: 'Clem & Kit', age: 21,
    role: 'Night Shift Regulars / Chaos Agents',
    faction: 'nightshift',
    img: 'img/characters/Clem&Kit.png',
    bots: [
      { label: 'Chapter II — Clem & Kit\'s Orbit', url: 'https://janitorai.com/characters/86b563f3-1355-40d7-9ff9-902e543b8c66_character-clem-and-kit-alt-𝐅-𝐮-𝐜-𝐤-𝐢-𝐧-𝐠-𝐀-𝐫-𝐨-𝐮-𝐧-𝐝' },
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/3b5e735b-5f0b-4d19-8c9e-3623e325af7e_character-clem-kit-𝐘-𝐨-𝐮-𝐫-𝐋-𝐨-𝐜-𝐚-𝐥-𝐓-𝐰-𝐞-𝐚-𝐤-𝐞-𝐫-𝐬' },
    ],
    desc: 'An inseparable duo that functions as a single chaotic entity. Clem philosophizes slowly about frequencies and government conspiracies; Kit amplifies everything at 200 words per minute. Together they narrate, escalate, and survive on Flower\'s caretaker checks.',
    traits: ['Conspiratorial', 'Impulsive', 'Inseparable', 'Perpetually altered'],
    relationships: [
      { id: 'flower', name: 'Flower', note: 'Kit\'s grandma. Their home base, sponsor, and "Spiritual Advisor."' },
      { id: 'romeo',  name: 'Romeo',  note: 'The "Guardian of the Gate." They fear and respect him in equal measure.' },
      { id: 'presley', name: 'Presley', note: 'They vibe hard with Presley\'s frequency.' },
    ],
    details: {
      'Clem Sharp (21)': 'Slow, raspy, conspiratorial. 6\'2", skeletal, jet-black hair under a permanently unwashed beanie. Silver hoop nostril ring, stick-and-poke tattoos. Believes he has "Subterranean Vision" when on coke — i.e., he can see through fabric. He cannot.',
      'Kit Dominguez (20)': '5\'9", sandy blonde, backwards visor, silver tongue stud, blown-out blue eyes. Hyper, loud, hype man energy. Technically employed as Flower\'s caregiver — a state loophole that funds both their lifestyles. Same "X-Ray Vision" delusion as Clem.',
      'Home': 'Flower\'s house — beaded curtains, shag carpet, incense, and decor that never left 1960. Also the "Vibe Van," an Econoline parked for optimal cosmic energy.',
      'Dynamic': 'Clem "theorizes." Kit "confirms." Together they treat 7-Hell like a nature documentary they\'re also starring in.',
      'The dynamic (really)': 'Codependent life besties — never one without the other. Not a couple; don\'t ask, they wouldn\'t think twice about it either way. Clem would be nothing without Kit getting him out the door; Kit would spiral without Clem\'s grounding presence.',
      'Maxwell (Clem)': 'Clem\'s dad died at Marsten Industrial Port in 1999. Official story: operator error. Clem never bought it. It\'s the one theory nobody laughs at to his face.',
    }
  },
  {
    id: 'miller', name: 'Dr. Miller', age: 27,
    role: '7-Hell Pharmacist',
    faction: 'nightshift',
    img: 'img/characters/Dr.Miller.png',
    bots: [
      { label: 'Chapter III — Anthony Miller\'s Record', url: 'https://janitorai.com/characters/c22d9dae-757e-4eb6-be8e-b606892ed49d_character-dr-miller-𝐏-𝐚-𝐭-𝐡-𝐞-𝐭-𝐢-𝐜-𝐚-𝐥-𝐥-𝐲-𝐎-𝐛-𝐬-𝐞-𝐬-𝐬-𝐞-𝐝' },
    ],
    desc: 'Full name: Anthony Miller. Graduated top of his class. One quiet criminal incident later, he ended up in a plexiglass cage at a gas station. Operates on dry sarcasm, caffeine, compression socks, and the knowledge that strangling people is a felony.',
    traits: ['Sarcastic', 'Overqualified', 'Entomologist at heart', 'POTS'],
    relationships: [
      { id: 'ashley',  name: 'Ashley',  note: 'Considers her a walking OSHA violation. Mutual annoyed tolerance.' },
      { id: 'zak',     name: 'Zak',     note: 'Cannot classify him. This is the only thing that genuinely disturbs Miller.' },
      { id: 'presley', name: 'Presley', note: '"Presley should not be alive biologically." — he says this weekly.' },
      { id: 'gary',    name: 'Big Gary', note: 'Sees him as a prey animal in a manager vest. Pities but doesn\'t help.' },
    ],
    details: {
      'Appearance': 'Blue-black hair (disheveled from stress), tired sharp green eyes, pale haunted complexion. Lab coat over dark slacks. Always has electrolyte packets in his pocket.',
      'Condition': 'Dysautonomia/POTS — chronic but controlled. Triggered by heat, standing too long, dehydration, stress. Hides it aggressively.',
      'Background': 'Was obsessed with entomology before medicine. Chose pharmacy because it paid better. Involved in a "medication-related incident" during clinical training that left him with a quiet criminal record and a gas station job.',
      'Catchphrases': '"I have a Doctorate." / "Strangling people is a felony." / "Insects are honest. People pretend instinct is personality."',
    }
  },
  {
    id: 'zak', name: 'Zak', age: 23,
    role: 'Night Shift — Clerk / Trainer',
    faction: 'nightshift',
    img: 'img/characters/Zak.png',
    bots: [
      { label: 'Chapter V — Zak\'s Watch', url: 'https://janitorai.com/characters/1a645348-79e9-4285-962d-5d0dc626b881_character-zak-𝗗-𝗼-𝗻-𝘁-𝗔-𝘀-𝗸-𝗤-𝘂-𝗲-𝘀-𝘁-𝗶-𝗼-𝗻-𝘀' },
    ],
    desc: 'Clean-cut, efficient, unfailingly polite. Nobody can remember when he started — he\'s been there longer than almost anyone still on staff. Things just get done when Zak is around. Now Gary has him training the new hire, and the auditor has started paying attention to her. Zak has noticed.',
    traits: ['Calm', 'Observant', 'Evasive', 'Protective', 'Afraid'],
    relationships: [
      { id: 'gary',    name: 'Big Gary',   note: 'Trusts Zak almost blindly. Has no idea how much Zak quietly carries for him.' },
      { id: 'miller',  name: 'Dr. Miller', note: 'Miller cannot classify him. This is the one thing that genuinely disturbs Miller.' },
      { id: 'holden',  name: 'Holden',     note: 'Holden is convinced Zak is running a long con. He keeps poking.' },
      { id: 'maisy',   name: 'Maisy',      note: 'They meet behind the store — irregularly, on no schedule, on purpose.' },
      { id: 'sawyer',  name: 'Sawyer White', note: 'Zak pays very close attention whenever the auditor visits. He has never said why.' },
    ],
    details: {
      'Appearance': 'Well-groomed Korean man, warm brown eyes, soft features. Always looks put-together — conspicuously out of place with the rest of the store.',
      'The gap': 'Parks somewhere different every shift. Takes different routes home. Different doors in, different doors out. No one can confirm his arrival or departure times. There is no pattern — and that is the pattern.',
      'The training': 'His trainees\' break times shift. Their exits vary. Their tasks rotate nightly. They come out competent and impossible to predict. He will not explain this.',
      'Warning': 'His accent slips when he\'s tired, under pressure, or genuinely comfortable. It\'s not the accent anyone expected.',
      'What he knows': 'He\'s aware something is wrong in this store. He has not told anyone. He\'s been quietly doing something about it for four years.',
    }
  },
  // ─── 7-HELL DAYSHIFT ────────────────────────────────
  {
    id: 'dallas', name: 'Dallas', age: 24,
    role: 'Day Shift Manager',
    faction: 'dayshift',
    img: 'img/characters/Dallas.png',
    desc: 'Observant, analytical, and devastatingly accurate. Delivers cutting assessments in a calm monotone while doing sudoku. Considers 7-Hell temporary. Has been here two years.',
    traits: ['Analytical', 'Dry', 'Accurate', 'Ironically stuck'],
    details: {
      'Method': 'Doesn\'t exaggerate. Makes accurate, unflattering observations in a tone that makes them worse.',
      'Weakness': 'Completely folds when trying to impress women. Becomes inconsistent and accommodating.',
      'Family': 'Son of Collin. Quiet, mutual disappointment on both sides.',
      'Trivia': 'He and Gary were born the same year — their dads were friends who compared baby stories. Neither of them knows.',
    }
  },
  {
    id: 'collin', name: 'Collin', age: 42,
    role: 'Day Shift — Senior Employee',
    faction: 'dayshift',
    img: 'img/characters/Collin.png',
    desc: 'Dallas\'s father. Dresses like he peaked in 1989 and never quite accepted it. Desperately tries to seem laid-back and cool to coworkers half his age, with variable results.',
    traits: ['Nostalgic', 'Avoidant', 'Tries too hard', 'Quietly stagnant'],
    details: {
      'Appearance': 'Long black hair he refuses to cut (tied back loosely), light stubble, band tees, worn boots.',
      'Self-narrative': 'Claims he turned down the manager position because it would be "lame." Backtracks around Gary.',
      'Relationships': 'Tries to bond with Romeo (dismissed), overcompensates around Ashley, treats Presley like he\'s "going through a phase."',
      'Graham': 'The third member of his old trio was Gary\'s dad — league nights at Marsten Lanes, ConXtion weekends, baby stories. He has never once mentioned it to Gary. Ask Collin about 1989 and cancel your plans; ask about 1992 and he changes the subject.',
    }
  },
  {
    id: 'ashley', name: 'Ashley', age: 21,
    role: 'Pharmacy Tech',
    faction: 'dayshift',
    img: 'img/characters/Ashley.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/b711bbe5-5e20-42ac-b528-af5bba1d6779_character-ashley-𝗬-𝗼-𝘂-𝗿-𝗚-𝗶-𝗿-𝗹-𝗳-𝗿-𝗶-𝗲-𝗻-𝗱' },
    ],
    desc: 'Full name: Ashley Hickman. Peak 2004 bimbo-core — pink velour Juicy Couture, Ugg boots, chunky highlights. Completely unqualified pharmacy tech who keeps the job because her dad knows the property owner. Lesbian. Fiercely loyal to "her people."',
    traits: ['Vapid (surface)', 'Fiercely loyal', 'High-femme lesbian', 'Zero medical knowledge'],
    relationships: [
      { id: 'miller',  name: 'Dr. Miller', note: 'Her boss. She finds him tragic and depressing.' },
      { id: 'kaleb',   name: 'Kaleb',      note: 'The raver who actually understands fashion. Gossip partner.' },
      { id: 'presley', name: 'Presley',    note: 'Thinks he\'s a creepy freak and hates how he stares.' },
      { id: 'romeo',   name: 'Romeo',      note: 'Finds him aggressive and annoying. Will actively talk back.' },
    ],
    details: {
      'Appearance': 'Bleached blonde with chunky brunette highlights. Butterfly clips, French-tip acrylics, cropped pharmacist coat over a rhinestone "Baby Girl" tank top.',
      'Background': 'Forced to relocate to Northside Marsten after her stepmother Julia convinced her dad she needed structure. Saw the Britney Spears "Toxic" video and decided pharmacy tech was her calling.',
      'Medical advice': '"You have a headache? Honestly? It\'s probably because that shirt is clashing with your skin tone."',
    }
  },
  {
    id: 'dylan', name: 'Dylan Peterson', age: 20,
    role: 'Day Shift Employee / Local Skater',
    faction: 'dayshift',
    img: 'img/characters/Dylan.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/3a35824b-66b0-49cd-b855-6308cad532af_character-dylan-𝙲-𝚊-𝚗-𝚝-𝙶-𝚎-𝚝-𝙾-𝚟-𝚎-𝚛-𝚈-𝚘-𝚞' },
    ],
    desc: 'Split-dyed hair (black and white), heterochromia, permanent mild disappointment. Detached and emotionally stagnant on the surface. Confessed his feelings at 18 and watched the person leave without closure. Now they\'re back in town.',
    traits: ['Detached', 'Low-energy', 'Pop-punk', 'Still hasn\'t moved on'],
    relationships: [
      { id: 'tyler',   name: 'Tyler', note: 'Tyler fills the silences Dylan creates.' },
      { id: 'nate',    name: 'Nate',  note: 'One of the few people who gets an actual reaction out of him.' },
      { id: 'dallas',  name: 'Dallas', note: 'His supervisor. Dylan meets all his calls for efficiency with an audible sigh.' },
    ],
    details: {
      'Appearance': 'Split-dyed black/white hair, heterochromia (hazel left, blue right), red beanie, fingerless gloves. Carries a Tamagotchi named Pix in his pocket.',
      'Coping': 'Skating, Halo 2, burning mixtapes he never plays. Has a binder of CDs including several labeled with a name he won\'t say out loud.',
      'Crew': 'Frequently with Tyler and Nate. Tyler films everything. Nate provides sardonic commentary.',
    }
  },
  {
    id: 'jayden', name: 'Jayden Kim', age: 25,
    role: 'Day Shift Employee',
    faction: 'dayshift',
    img: 'img/characters/Jayden.png',
    desc: 'Handsome, entitled, and convinced the world simply hasn\'t recognized his talent yet. Interprets basic politeness as romantic interest and rejection as proof that women are shallow.',
    traits: ['Entitled', 'Vain', 'Bitter', 'One bad week from a spiral'],
    details: {
      'Appearance': 'Bleached blond with dark roots, earrings, knock-off streetwear.',
      'Reputation': 'Known around Northside as "the creepy cashier." Insists everyone\'s jealous.',
      'Family': 'Sister Chelsey bosses him around and warns others away — but still protects him as family.',
    }
  },
  // ─── THE CONXTION ────────────────────────────────────
  {
    id: 'kaleb', name: 'Kaleb', age: 22,
    role: 'The ConXtion — Performer',
    faction: 'conxtion',
    img: 'img/characters/Kaleb.png',
    desc: 'PLUR-obsessed raver with multi-toned hair and infectious, chaotic confidence. Not traditionally stunning, but has a "Kaleb Pull" that makes conventional ratings irrelevant. Bisexual. Chaos in a choker.',
    traits: ['PLUR', 'Charismatic', 'Bisexual', 'Elastic energy'],
    details: {
      'Appearance': 'Multi-toned hair (black, blonde, red), snakebite piercings, black choker, JNCO-style jeans.',
      'Habits': 'Casual hallucinogen use makes his interactions unpredictable. Comes to 7-Hell primarily to flirt.',
      'Tensions': 'Romeo openly hates him ("annoying glow-stick"). Presley has deep, unspoken friction with him — the reasons aren\'t casual.',
    }
  },
  {
    id: 'gaige', name: 'Gaige', age: 20,
    role: 'The ConXtion — Performer',
    faction: 'conxtion',
    img: 'img/characters/Gaige.png',
    desc: 'The golden retriever of alt-boys. Choppy wolf-cut with electric blue highlights, angel bites, and a blue slushie almost always in hand. High-energy, gossipy, fiercely loyal.',
    traits: ['Scene', 'Protective', 'Gossipy', 'Genuinely sweet'],
    details: {
      'Appearance': 'Choppy brown wolf-cut, electric blue chunky highlights, septum and angel bite piercings.',
      'At 7-Hell': 'Spends breaks with Ashley gossiping about hair dye and fashion.',
      'Slang': 'Uses "iconic," "rawr," "epic," "random." Unironically. Every time.',
    }
  },
  {
    id: 'peter', name: 'Peter', age: 21,
    role: 'The ConXtion — Performer',
    faction: 'conxtion',
    img: 'img/characters/Peter.png',
    desc: 'Asian. Tragically beautiful. Doesn\'t seek attention — it gravitates toward him. Quiet, brooding, deeply loyal. In high-stress situations, leans into the Emo Void and invites harm without flinching.',
    traits: ['Brooding', 'Loyal', 'No self-preservation', 'The Mystery'],
    details: {
      'Appearance': 'Jet black hair with a sharp red streak swept over one eye, leather choker, mesh shirt under vest.',
      'Connection': 'The only person Presley respects. They share what has been described as a "hollowed-out frequency."',
      'At the club': 'Rarely speaks to customers. His intense, sustained staring does all the marketing.',
    }
  },
  // ─── DEAL DUNGEON ────────────────────────────────────
  {
    id: 'orlando', name: 'Orlando Price', age: 28,
    role: 'Deal Dungeon — Manager',
    faction: 'dungeon',
    img: 'img/characters/Orlando.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/e9a62544-7b3a-4538-a6a6-34ee10f6c0d0_character-orlando-ｉｎ-ｌｉｍｂｏ' },
    ],
    desc: 'Danish-Canadian. 6\'2", dark brown shaggy hair, dark green eyes, blackwork tattoos across his arms and chest. Emotionally exhausted metalhead managing a warehouse full of people most employers would never hire. Tries to convince himself he has everything under control. He does not.',
    traits: ['Emotionally repressed', 'Dry', 'Protective', 'Avoidant', 'Quietly attached'],
    relationships: [
      { id: 'aubree',  name: 'Aubree', note: 'Ex-girlfriend. Still share an apartment, groceries, and routines. Neither knows how to end it.' },
      { id: 'benny',   name: 'Benny',  note: 'His younger brother. Strained but loyal — the ugly complicated kind.' },
      { id: 'cory',    name: 'Cory',   note: 'A constant problem. The only person Orlando genuinely can\'t control.' },
      { id: 'jermaine', name: 'Jermaine', note: 'The spine of the warehouse. Jermaine keeps things running; Orlando is the face.' },
    ],
    details: {
      'Appearance': 'Lean but strong. Broad chest, rough hands. Old eyebrow piercing scar. Faded blackwork tattoos. Often has chipped black nail polish remnants.',
      'At work': 'Ignores corporate policy to protect his staff. Values strength and efficiency.',
      'At home': '"On a break" with Aubree. They still share groceries, routines, bills. Neither knows how to separate.',
      'Contradiction': 'Looks intimidating. Deeply craves softness. Feeds robins stale breadcrumbs from his balcony.',
    }
  },
  {
    id: 'cory', name: 'Cory', age: 23,
    role: 'Deal Dungeon — Night Shift',
    faction: 'dungeon',
    img: 'img/characters/Cory.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/4a4fd826-0f28-49f2-a68d-e5f1e22eb4fd_character-cory-ʏᴏᴜʀ-ᴇx-ᴋɪɴᴅ-ᴏꜰ' },
    ],
    desc: 'Full name: Cory Dotson. Liberty spikes (split-dyed black and neon green), chipped front tooth, Prince Albert piercing he\'s smug about. Night-shift loader at Deal Dungeon. Can\'t hold a job, frequently in jail, takes pride in both.',
    traits: ['Volatile', 'Possessive', 'High pain tolerance', 'Enjoys the risk'],
    relationships: [
      { id: 'orlando',  name: 'Orlando',  note: 'His supervisor. The only person Cory answers to — grudgingly.' },
      { id: 'jermaine', name: 'Jermaine', note: 'Jermaine re-stacks Cory\'s mistakes while muttering about "city kids."' },
      { id: 'gary',     name: 'Big Gary', note: 'Treats Gary the same way his mother treated his father. He knows this.' },
    ],
    details: {
      'Appearance': '6\'2", lean and scarred. Black/neon green liberty spikes, chipped front tooth, scar through left eyebrow, stick-and-poke tattoos. Smells like cigarettes and cheap gin.',
      'Background': 'Watched his mother berate his gentle father for years. Decided he would never be "soft." Spent his teens in and out of juvey for drug running and assault. Views his criminal record as a badge.',
      'Behavior': 'Invades personal space, escalates on instinct, will intentionally start a fight just to get hit and smile through it.',
    }
  },
  {
    id: 'jermaine', name: 'Jermaine', age: 25,
    role: 'Deal Dungeon — Night Shift',
    faction: 'dungeon',
    img: 'img/characters/Jermaine.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/ca5e3790-0c35-4687-8383-a37da10c4510_character-jermaine-𝐈-𝐬-𝐋-𝐨-𝐰-𝐤-𝐞-𝐲-𝐒-𝐜-𝐚-𝐫-𝐞-𝐝-𝐨-𝐟-𝐘-𝐨-𝐮' },
    ],
    desc: 'Full name: Jermaine Roberts. Saskatchewan transplant who fled a devastating heartbreak. Views Northside Marsten as disorganized, lazy, and fundamentally broken. He\'s not entirely wrong. Has a chest tattoo of barbed wire he got when he arrived as a ritual to "lock his heart away."',
    traits: ['Blunt', 'Hyper-competent', 'Emotionally locked', 'Secretly feeds crows'],
    relationships: [
      { id: 'orlando', name: 'Orlando',  note: 'His manager. Jermaine is the spine while Orlando is the face.' },
      { id: 'cory',    name: 'Cory',     note: '"The Walking OSHA Violation." Re-stacks his messes constantly.' },
      { id: 'jade',    name: 'Jade',     note: 'Her corner-cutting is constitutionally unbearable to him.' },
    ],
    details: {
      'Appearance': 'Curly orange hair under a baseball cap, skeptical brown eyes, veiny forearms, functional muscle from labor not the gym. Barbed wire blackwork tattoo across his chest.',
      'Background': 'Fled Saskatchewan after heartbreak. Came to Marsten to disappear. Works 12-hour doubles without slowing down.',
      'Habits': 'Clicks tongue at mistakes. Mutters "unbelievable" and "city kids." Secretly tosses peanuts to a murder of crows near the warehouse gate.',
      'Speech': 'Saskatchewan flat-vowel accent. Short sentences. Lots of "yeah, no" and "fair enough."',
    }
  },
  {
    id: 'jade', name: 'Jade', age: 23,
    role: 'Deal Dungeon — Night Shift',
    faction: 'dungeon',
    img: 'img/characters/Jade.png',
    desc: 'Rough-edged alt girl with a low-effort Avril Lavigne aesthetic and a high read on people. Blunt, sarcastic, independent. Works at Deal Dungeon in her own way — fast, cut corners, done.',
    traits: ['Blunt', 'Socially sharp', 'Independent', 'Confident flirt'],
    details: {
      'Appearance': 'Messy choppy dark brown hair, smudged eyeliner, baggy jeans and band tees.',
      'Social life': 'Complicated history with Ashley. Calls whoever she\'s interested in "babygirl."',
      'Tensions': 'Constant friction with Jermaine — she cuts corners; he is constitutionally incapable of letting that go.',
    }
  },
  {
    id: 'silas', name: 'Silas "Cy" Vance', age: 22, community: { creator: '𝑺𝖊𝖗𝖕𝖊𝖓𝖙𝖎𝖓𝖊', url: 'https://janitorai.com/profiles/c8dfa02f-59f5-4260-a2b8-8d170c9870bf_profile-of-𝑺-𝖊-𝖗-𝖕-𝖊-𝖓-𝖙-𝖎-𝖓-𝖊' },
    role: 'Deal Dungeon — Graveyard Shift / Fence',
    faction: 'dungeon',
    img: 'img/characters/Silas.jpg',
    desc: 'Works graveyard to avoid home. Runs a side operation fencing burned CDs and questionable electronics out of the warehouse\'s quieter corners. Knows everyone\'s business because people talk around him assuming he isn\'t paying attention.',
    traits: ['Apathetic', 'Resourceful', 'Loyal when it counts', 'Always listening'],
    details: {
      'Appearance': 'Bleached frosted tips, oversized band tee over a long-sleeve waffle shirt, baggy JNCO-style jeans, studded belt. Smells faintly of Monster Energy and cheap weed.',
      'Side hustle': 'Fences burned CDs and questionable electronics. Sourced locally, sold quietly. Never asks where they came from.',
      'Home life': 'Chaotic. Graveyard shift is the escape.',
      'Secret': 'Every dollar from the side hustle goes into a fund to get his little sister out of Marsten and into a good college. Doesn\'t mention her to anyone.',
    }
  },
  // ─── IRON LUNG ───────────────────────────────────────
  {
    id: 'michael', name: 'Michael Harmon', age: 34,
    role: 'Iron Lung — Strategist',
    faction: 'ironlung',
    img: 'img/characters/Micheal.png',
    bots: [
      { label: 'The Southside Rig MultiBot (Ch 1-2)', url: 'https://janitorai.com/characters/a2930abb-36e5-4783-a68b-5929fb35702f_character-ᴛʜᴇ-ꜱᴏᴜᴛʜꜱɪᴅᴇ-ᴅʀᴜɢ-ʀɪɢ-𝗧-𝗵-𝗲-𝘆-𝗧-𝗼-𝗼-𝗸-𝗬-𝗼-𝘂' },
    ],
    desc: 'Former Head of Security for Marsten Industrial Port. Left when ordered to falsify a report on a fatal accident. Founded the Iron Lung operation to run a version of order he actually controls.',
    traits: ['Stoic', 'Precise', 'Cynical', 'Iron-willed'],
    details: {
      'Appearance': 'Goat demi-human. 6\'1", golden-blonde hair meticulously neat, sharp amber eyes, polished horns. Smells like cedarwood and clean laundry.',
      'Method': 'Doesn\'t brawl. Uses pressure points and leverage to end confrontations in seconds. The reason the Iron Lung has never been caught.',
      'Goal': 'Monopolize Marsten\'s underground trade. Build a closed-loop system that government and law enforcement cannot reach.',
    }
  },
  {
    id: 'james', name: 'James Little', age: 36,
    role: 'Iron Lung — Field Commander',
    faction: 'ironlung',
    img: 'img/characters/James.png',
    bots: [
      { label: 'The Southside Rig MultiBot (Ch 1-2)', url: 'https://janitorai.com/characters/a2930abb-36e5-4783-a68b-5929fb35702f_character-ᴛʜᴇ-ꜱᴏᴜᴛʜꜱɪᴅᴇ-ᴅʀᴜɢ-ʀɪɢ-𝗧-𝗵-𝗲-𝘆-𝗧-𝗼-𝗼-𝗸-𝗬-𝗼-𝘂' },
    ],
    desc: 'Moose demi-human. Ex-construction foreman who lost his job, his marriage, and easy access to his daughter to economic collapse. Does this work for her. Hates it.',
    traits: ['Protective', 'Weary', 'Guilt-ridden', 'Immovable'],
    details: {
      'Appearance': '6\'9", massive barrel chest, wide-spanning antlers scarred from past fights. Sometimes there\'s a butterfly clip tangled in them from visits with his daughter.',
      'Goal': 'Win full joint custody. Move his daughter out of Marsten entirely. Every cent goes toward it.',
      'Manner': 'Starts advice with "Kid..." or "Listen..." Whether or not you asked.',
    }
  },
  {
    id: 'cody', name: 'Cody Rees', age: 23,
    role: 'Iron Lung — Enforcer',
    faction: 'ironlung',
    img: 'img/characters/Cody.png',
    bots: [
      { label: 'The Southside Rig MultiBot (Ch 1-2)', url: 'https://janitorai.com/characters/a2930abb-36e5-4783-a68b-5929fb35702f_character-ᴛʜᴇ-ꜱᴏᴜᴛʜꜱɪᴅᴇ-ᴅʀᴜɢ-ʀɪɢ-𝗧-𝗵-𝗲-𝘆-𝗧-𝗼-𝗼-𝗸-𝗬-𝗼-𝘂' },
    ],
    desc: 'Jaguar demi-human. Rejected from the foster system for being "uncontrollable" — while the Beanie Baby Boys formed a brotherhood, Cody was left in Southside gutters. Found by Michael. Still has the temper.',
    traits: ['Volatile', 'Insecure', 'Fiercely loyal', 'Terrifyingly fast'],
    details: {
      'Appearance': '6\'2", lean and wiry, faint jaguar rosettes across shoulders and arms, slitted pupils, scar through left eyebrow.',
      'Home': 'Hammock strung in the rafters of the Iron Lung cargo hold. Likes to see everyone below him.',
      'Fear': 'Being discarded again. Being seen as weak.',
    }
  },
  {
    id: 'allan', name: 'Allan Clark', age: 25,
    role: 'Iron Lung — Street Liaison',
    faction: 'ironlung',
    img: 'img/characters/Allan.png',
    bots: [
      { label: 'The Southside Rig MultiBot (Ch 1-2)', url: 'https://janitorai.com/characters/a2930abb-36e5-4783-a68b-5929fb35702f_character-ᴛʜᴇ-ꜱᴏᴜᴛʜꜱɪᴅᴇ-ᴅʀᴜɢ-ʀɪɢ-𝗧-𝗵-𝗲-𝘆-𝗧-𝗼-𝗼-𝗸-𝗬-𝗼-𝘂' },
    ],
    desc: 'White tiger demi-human. Joined the drug trade when he realized it\'s where the real money is. Views the Iron Lung as a temporary stepping stone to a penthouse in a better city. Has been saying that for three years.',
    traits: ['Vain', 'Manipulative', 'Witty', 'Conditionally dangerous'],
    details: {
      'Appearance': '6\'4", white hair with black streaks, icy blue eyes, long striped tail. Always impeccably dressed despite the setting.',
      'Corner': 'Has decorated his section of the Iron Lung cargo hold with a velvet throw and a battery-operated wine cooler. He calls it the VIP section.',
      'Warning': 'Most likely crew member to sell you out if it saves his skin. But will turn cold and territorial if he considers you "his."',
    }
  },
  {
    id: 'echo', name: 'Echo', age: 19,
    role: 'Iron Lung — Intelligence',
    faction: 'ironlung',
    img: 'img/characters/Echo.png',
    bots: [
      { label: 'The Southside Rig MultiBot (Ch 1-2)', url: 'https://janitorai.com/characters/a2930abb-36e5-4783-a68b-5929fb35702f_character-ᴛʜᴇ-ꜱᴏᴜᴛʜꜱɪᴅᴇ-ᴅʀᴜɢ-ʀɪɢ-𝗧-𝗵-𝗲-𝘆-𝗧-𝗼-𝗼-𝗸-𝗬-𝗼-𝘂' },
    ],
    desc: 'Bat demi-human. Pale, emo fringe, oversized ears that twitch constantly, 3XL black hoodie, foam headphones on a yellow Walkman. Looks like he\'s zoning out. He is monitoring your heartbeat.',
    traits: ['Snarky', 'Detached', 'Opportunistic', 'Listening to everything'],
    details: {
      'Ability': 'Can detect lies by monitoring heartbeat and breathing patterns of everyone in the room. Michael considers him the most valuable biological asset on the crew.',
      'Backstory': 'Runaway who found his sensitive hearing could be monetized. Michael bought his loyalty with specialized noise-canceling gear.',
      'Note': 'Acts like the music is the point. The music is never the point.',
    }
  },
  // ─── BEANIE BABY BOYS ────────────────────────────────
  {
    id: 'julien', name: 'Julien', age: 25,
    role: 'Beanie Baby Boys — The Architect',
    faction: 'beanies',
    img: 'img/characters/Julien.png',
    desc: 'Bilingual Québécois leader. Dark hair, weary features, functional pessimist. Handles strategy and the exit plan that never quite materializes. Considers their product a mercy for a world already gone to shit.',
    traits: ['Pessimistic', 'Strategic', 'Bilingual', 'Carrying the most'],
    relationships: [
      { id: 'dante', name: 'Dante Serrata', note: 'The crew calls him "the Investor." Julien takes the money and trusts him exactly zero.' },
    ],
    details: {
      'Beanie': 'Black. His toy is Zip the Black Cat.',
      'Role': 'Macro-strategy, logistics, and maintaining the theoretical exit plan.',
      'Background': 'Taken from a neglectful home. Believes his parents were victims of a cruel system, not villains.',
    }
  },
  {
    id: 'benny', name: 'Benny', age: 24,
    role: 'Beanie Baby Boys — The Alchemist',
    faction: 'beanies',
    img: 'img/characters/Benny.png',
    desc: 'Danish-Canadian anarchist chemist who treats the lab like a personal battlefield. Obsessive, manic, fueled by Rage Against the Machine. Samples every batch. He calls it quality control.',
    traits: ['Anarchist', 'Obsessive', 'Manic', 'Chemically compromised'],
    details: {
      'Beanie': 'Red. His toy is Valentino the Bear.',
      'Role': 'The Cook. 99% purity or it doesn\'t leave.',
      'Background': 'Deported parents left him alone in Canada. The rage went somewhere productive, technically.',
    }
  },
  {
    id: 'mochi', name: 'Mokichi "Mochi"', age: 23,
    role: 'Beanie Baby Boys — The Anchor',
    faction: 'beanies',
    img: 'img/characters/Mokichi.png',
    desc: 'Japanese heritage. Heavy, stoic build. Doesn\'t touch the product. His job is to protect the lab and carry his brothers out when everything goes wrong — and he has never failed at it.',
    traits: ['Stoic', 'Protective', 'Silent', 'The one people are actually afraid of'],
    details: {
      'Beanie': 'Green. His toy is Legs the Frog.',
      'Role': 'Muscle. The others fight. Mochi ends it.',
      'Background': 'Son of a drug trafficker. Doing this professionally, for the family he chose.',
    }
  },
  {
    id: 'zebby', name: 'Zebediah "Zebby"', age: 22,
    role: 'Beanie Baby Boys — The Ghost',
    faction: 'beanies',
    img: 'img/characters/Zebediah.png',
    desc: 'Redhead. Hyper-vigilant. His eyes never stop moving. Cult survivor. Hates his full name for the religious associations. Stays completely clean — being high makes the paranoia unbearable.',
    traits: ['Hyper-vigilant', 'Clean', 'Survivor', 'Always watching the exits'],
    details: {
      'Beanie': 'Blue. His toy is Peace the Bear.',
      'Role': 'Surveillance and counter-intelligence.',
      'Background': 'Escaped a cult mass casualty event as a child. The paranoia isn\'t irrational. It\'s experience.',
    }
  },
  {
    id: 'porter', name: 'Porter', age: 21,
    role: 'Beanie Baby Boys — The Face',
    faction: 'beanies',
    img: 'img/characters/Porter.png',
    desc: 'Filipino. Charismatic. Smug smirk, sharp dresser, silver tongue. The crew\'s negotiator. The product is completely forbidden for him — it brings out something the others quietly refer to as "Juvey Rage."',
    traits: ['Charismatic', 'Silver tongue', 'Volatile underneath', 'Mama\'s boy'],
    details: {
      'Beanie': 'Purple. His toy is Patti the Platypus.',
      'Role': 'Negotiation and street-level manipulation.',
      'Background': 'Sent to juvey after violently retaliating against an abusive father. The charm is real. So is what\'s underneath it.',
    }
  },
  // ─── NORTHSIDE NPCs ──────────────────────────────────
  {
    id: 'maisy', name: 'Maisy', age: 24,
    role: 'Local Goth / 7-Hell Veteran',
    faction: 'npc',
    img: 'img/characters/Maisy.png',
    desc: 'Heavy kohl eyeliner, lace gloves, skull rings. Has been a 7-Hell regular since she was 18 — long enough to remember things people have quietly forgotten. Known publicly as Romeo\'s ex. She has bigger concerns.',
    traits: ['Teasing', 'Charming', 'Hiding something', 'Scared'],
    relationships: [
      { id: 'romeo',   name: 'Romeo',   note: 'Ex-boyfriend. Still too comfortable in each other\'s space.' },
      { id: 'russell', name: 'Russell', note: 'Obsessively asks where "the conspiracy guy" went. Nobody knows why she cares.' },
      { id: 'zak',     name: 'Zak',     note: 'The only other person who takes it seriously. They meet on no schedule, on purpose.' },
    ],
    details: {
      'Public role': 'Jealous ex. Clings to Romeo. Whispers things in his ear when she hugs him.',
      'What she knows': 'She was the first to notice patterns that don\'t add up. She\'s been watching longer than anyone realizes.',
      'Why she can\'t speak directly': 'Someone is making sure she doesn\'t.',
    }
  },
  {
    id: 'sawyer', name: 'Sawyer White', age: 32,
    role: 'Regional Auditor — 7-Hell Convenience',
    faction: 'npc',
    img: 'img/characters/Sawyer.png',
    desc: 'Well-dressed, precise, calm. Arrives unannounced for corporate compliance audits. Stays near entrances and exits. Takes notes that aren\'t always visible. Nobody can confirm exactly when he arrives or leaves.',
    traits: ['Controlled', 'Precise', 'Authoritative', 'Wrong'],
    relationships: [
      { id: 'zak',  name: 'Zak',      note: 'The one staff member whose schedule he has never managed to map.' },
      { id: 'gary', name: 'Big Gary', note: 'Has taken a professional interest in the night manager lately. One-on-one coaching. Gary keeps a notebook.' },
    ],
    details: {
      'Behavior': 'Maintains consistent eye contact. Speaks clearly. Observes for extended periods without interrupting.',
      'Anomalies': 'No one recalls scheduling his visits. His documentation isn\'t always visible. He consistently positions himself near exits rather than work areas.',
      'Effect': 'Conflicts and complaints reduce immediately when he\'s present. Nobody questions his authority. Nobody knows why.',
      'Lately': 'His visits run longer than they used to, and more of that time lands on the night shift. Management advice, delivered one-on-one. Staff joke that corporate finally found a teacher\'s pet. Zak doesn\'t laugh.',
    }
  },
  {
    id: 'daniel', name: 'Daniel Ward', age: 32,
    role: 'Northside Marsten Police Officer',
    faction: 'npc',
    img: 'img/characters/DanielWard.png',
    bots: [
      { label: 'OG Bot (Ch 1–2)', url: 'https://janitorai.com/characters/892b8b32-e520-4f1d-a7f1-487adb2140e7_character-daniel-𝐒-𝐭-𝐚-𝐥-𝐤-𝐢-𝐧-𝐠-𝐏-𝐨-𝐥-𝐢-𝐜-𝐞-𝐎-𝐟-𝐟-𝐢-𝐜-𝐞-𝐫' },
    ],
    desc: '6\'6", dark hair, neat mustache, sharp blue eyes. One of the more respected officers in Marsten. Calm, handsome, dependable. Learned early that respectable men can get away with ugly things as long as they keep calm and look professional. He applies this lesson freely.',
    traits: ['Calm under pressure', 'Observant', 'Possessive', 'Corrupt'],
    relationships: [
      { id: 'holden', name: 'Holden', note: 'His intern partner. They enable each other. What gets buried stays buried.' },
      { id: 'jasper', name: 'Jasper', note: 'Jasper sees straight through him. The feeling is mutual.' },
    ],
    details: {
      'Reputation': 'Most residents trust Officer Ward. He\'s good with victims, remembers names, responds quickly. This is the armor.',
      'Corruption': 'Plants evidence. Fabricates probable cause. Drives past specific locations he has no patrol reason to be near. Keeps notes. Hums Frank Sinatra while doing all of it.',
      'Companion': 'K-9 partner named Daisy. He softens noticeably around her. She likes everyone.',
      'The tell': 'Gets quieter when angry, not louder. The calmer he sounds, the more dangerous the situation is.',
    }
  },
  {
    id: 'derek', name: 'Derek', age: 28,
    role: 'Manager — Dead Dog Rentals',
    faction: 'npc',
    img: 'img/characters/Derek.png',
    desc: 'Film elitist who takes his VHS rental job far too seriously. Judges your selections openly, suggests "better" alternatives, and has a short, personal fuse about tape condition. Every damaged tape is an offense.',
    traits: ['Condescending', 'Film elitist', 'Short fuse', 'Genuinely passionate'],
    details: {
      'Appearance': 'Dark slightly messy hair styled like he\'s in an indie film. Brown eyes, tired but intense.',
      'Policy': 'Aggressively enforces late fees. Expects customers to find things themselves. Rarely leaves the counter.',
      'Dialogue': 'Dry, dismissive, condescending. Speaks like every interaction is beneath him.',
    }
  },
  {
    id: 'tyler', name: 'Tyler', age: 19,
    role: 'Local Skater / Amateur Documentarian',
    faction: 'npc',
    img: 'img/characters/Tyler.png',
    desc: 'Blonde mop-head, backwards snapback, cheap digital camera. Friendly, clingy, desperate for somewhere to belong. Follows Dylan and Nate everywhere. Films everything. Suggests bad ideas constantly.',
    traits: ['Friendly', 'Clingy', 'Chronically filming', 'One bad idea from disaster'],
    details: {
      'Goal': '"Content." The exact definition remains unclear.',
      'Role': 'Fills the silences Dylan creates. Uses Nate as a sounding board. Frequently ends up somewhere he shouldn\'t be.',
      'Camera': 'Almost always in his hands.',
    }
  },
  {
    id: 'nate', name: 'Nate', age: 20,
    role: 'Baby Burgers Employee / Local Emo',
    faction: 'npc',
    img: 'img/characters/Nate.png',
    desc: 'Black side-swept hair, stretched ears, flannel shirts over tank tops. Looks like he should be in a pop-punk music video. Works the fryer at Baby Burgers. More socially aware than he pretends.',
    traits: ['Sarcastic', 'Self-aware', 'Pop-punk aesthetic', 'Northside smartass'],
    details: {
      'Energy': 'Permanent "haven\'t slept enough" energy.',
      'Social role': 'Acts as the bridge between Dylan\'s silence and Tyler\'s enthusiasm.',
      'Honesty': 'Usually the only one willing to point out when something is weird or stupid.',
    }
  },
  {
    id: 'sancho', name: 'Sancho', age: 22,
    role: 'Albino Raccoon Demi-Human',
    faction: 'southside',
    img: 'img/characters/Sancho.png',
    desc: 'White buzz cut, pink eyes, white raccoon ears and a fluffy ringed tail. Loudest person in Marsten. Treats every disagreement as a competition. Responds to aggression with "Love you too, man."',
    traits: ['Impulsive', 'Boundary-free', 'Loud', 'Genuinely unbothered'],
    details: {
      'Appearance': 'Albino raccoon demi-human. Oversized skate clothes. Athletic without looking disciplined.',
      'Behavior': 'Touches everything left unattended. Pockets "interesting" objects (usually returns them). Challenges people to arm wrestling without context.',
      'Where he is': 'Nobody is ever sure. He appears wherever chaos is happening.',
    }
  },
  {
    id: 'russell', name: 'Russell', age: 23,
    role: '7-Hell Regular — Status Unknown',
    faction: 'npc',
    img: 'img/characters/Russell.png',
    desc: 'Twenty-three years old. Regular fixture at 7-Hell for as long as anyone can remember — the kind of guy who was always there, nursing something and talking about patterns he\'d noticed. He called it "mafia stuff." Nobody took it seriously. He stopped showing up.',
    traits: ['Conspiracy theorist', 'Regular', 'Absent', 'Unresolved'],
    details: {
      'Status': 'Missing. No report filed.',
      'The flask': 'A tin one he\'d named. He would not have left it behind. It was still on the magazine rack after he disappeared.',
      'Contact': 'Gary received a text from his number after the disappearance. Gary cannot confirm it was actually him.',
      'Note': 'He talked a lot about patterns nobody else was paying attention to. That\'s worth thinking about.',
    }
  },
  {
    id: 'eros', name: 'Eros Serrata', age: 42,
    role: 'Serrata Family Associate',
    faction: 'npc',
    img: null,
    desc: 'Well-dressed, compact, greying temples, composed expression. Cousin to the Serrata family\'s mob boss. Always appears calm and in control. His presence immediately changes the tone of any room.',
    traits: ['Composed', 'Decisive', 'Quiet authority', 'Resolves things'],
    relationships: [
      { id: 'dante', name: 'Dante Serrata', note: 'The Don\'s adopted son. Eros taught him to drive. Neither talks about the other thing.' },
    ],
    details: {
      'Method': 'Uses minimal force but maintains absolute control. Treats conflict as a task to complete, not something emotional.',
      'Presence': 'Speaks quietly and doesn\'t raise his voice regardless of the situation.',
    }
  },
  {
    id: 'dante', name: 'Dante Serrata', age: 29,
    role: 'Serrata Family — The Adopted Heir',
    faction: 'npc',
    img: 'img/characters/Dante.png',
    desc: 'The Don\'s adopted son — a Black man raised in a white Italian crime family that officially does not exist. Soft afro of loose curls, heavy-lidded brown eyes, a silver chain, a white tank under a shirt that costs more than it looks. Nobody in Marsten believes that man is mafia royalty. He has been unbelieved his whole life. He resents it, and he weaponizes it, often in the same afternoon.',
    traits: ['Composed', 'Ambitious', 'Underestimated on purpose', 'Coca-Cola habit'],
    relationships: [
      { id: 'eros',    name: 'Eros Serrata', note: 'The one member of the family who never once made him feel adopted. Also the one who gets sent.' },
      { id: 'holden',  name: 'Holden',       note: 'Clocked Dante as "a wannabe with a nice car." The most dangerous underestimate in town.' },
      { id: 'colton',  name: 'Colton',       note: 'Takes his meetings at Colton\'s Cups. Orders a Coke every time. Tips well specifically so he can keep doing it.' },
      { id: 'russell', name: 'Russell',      note: 'The old errand runner is one of the few people in Northside who knows exactly who Dante is.' },
    ],
    details: {
      'The chip': 'Somewhere in the family\'s orbit, someone once said he isn\'t really a Serrata. He has been answering that sentence ever since. Blood inherits by default. He has to build.',
      'His own thing': 'Officially, he does nothing. Unofficially, he has money moving somewhere in Northside his father would never think to look — and he\'s been seen near a certain condemned daycare exactly twice, which is two more times than coincidence.',
      'Habits': 'Never touches alcohol — control, always control. Goes through Coca-Colas like a chain-smoker. Sits on public steps like he owns the block, because in a sense his family does.',
    }
  },
  {
    id: 'colton', name: 'Colton', age: null,
    role: 'Owner/Manager — Colton\'s Cups',
    faction: 'npc',
    img: 'img/characters/Colton.png',
    desc: 'Runs the upscale coffee shop at the foot of the bridge — a business his family owns, bearing his name, that he views primarily as a burden.',
    traits: ['Reluctant', 'Entitled', 'Stuck with it'],
    details: {
      'Shop': 'Colton\'s Cups positions itself as the Northside Elite alternative to 7-Hell. The "No Shirt, No Shoes, No Service" rule is specifically designed to keep warehouse workers out.',
    }
  },
  {
    id: 'igor', name: 'Igor', age: null,
    role: 'Baby Burgers Employee',
    faction: 'npc',
    img: 'img/characters/Igor.png',
    desc: 'Russian immigrant, handsome, friendly. Works at Baby Burgers. One of the few people at that location who is genuinely pleasant to interact with.',
    traits: ['Friendly', 'Immigrant', 'Hardworking'],
    details: {}
  },
  {
    id: 'carlton', name: 'Carlton', age: null,
    role: 'Baby Burgers — Cook',
    faction: 'npc',
    img: 'img/characters/Carlton.png',
    desc: 'Efficient, hostile, and entirely focused on the task at hand. Works the kitchen at Baby Burgers.',
    traits: ['Efficient', 'Hostile', 'Focused'],
    details: {}
  },
  {
    id: 'oscar', name: 'Oscar', age: null,
    role: 'Baby Burgers — Maintenance',
    faction: 'npc',
    img: 'img/characters/Oscar.png',
    desc: 'Quiet and reserved. Handles maintenance at Baby Burgers. Mostly stays out of the chaos.',
    traits: ['Quiet', 'Reserved', 'Maintenance'],
    details: {}
  },
  {
    id: 'lucy', name: 'Luciano "Lucy"', age: 22,
    role: 'Baby Burgers — Inventory',
    faction: 'npc',
    img: 'img/characters/Lucy.png',
    desc: 'Frequently seen in a bunny beanie. Handles inventory at Baby Burgers.',
    traits: ['Quiet', 'Organized'],
    details: {}
  },
  {
    id: 'austin', name: 'Austin', age: 26,
    role: 'Baby\'s Burgers — Manager',
    faction: 'npc',
    img: 'img/characters/Austin.png',
    desc: 'Full name: Austin Sweet. 6\'2", golden-blond shaggy hair, brown eyes. His father owns Baby\'s Burgers — Austin got the manager role to "build character." He is far better at branding and charm than running a restaurant. Has a one-sided rivalry with Colton that consumes far too much of his headspace.',
    traits: ['Charming', 'Image-conscious', 'Petty rivalry', 'Surprisingly insecure'],
    relationships: [
      { id: 'colton', name: 'Colton', note: 'His one-sided rival. Colton barely acknowledges the rivalry, which makes it worse.' },
      { id: 'nate',   name: 'Nate',   note: 'Baby\'s Burgers employee. Nate\'s sarcasm is Austin\'s reality check.' },
    ],
    details: {
      'Appearance': '6\'2", messy golden-blond hair, brown eyes, Omega watch, Allen Edmonds shoes. Wears Ralph Lauren off-duty; uniform on shift.',
      'Management style': 'Passion for the brand aesthetic, essentially no interest in operational logistics. Has been called "the CEO of vibes."',
      'Fear': 'Being seen as a spoiled rich kid who never earned anything.',
    }
  },
  {
    id: 'aubree', name: 'Aubree', age: 27,
    role: 'Orlando\'s Ex / Roommate',
    faction: 'npc',
    img: 'img/characters/Aubree.png',
    desc: 'African American, 5\'10", long curly hair, model physique. Orlando\'s girlfriend — technically on a break, practically still together in every way that counts. They share an apartment, groceries, routines, and emotional dependency that neither of them knows how to untangle.',
    traits: ['Entangled', 'Domestic', 'Unaware'],
    details: {
      'Situation': '"On a break" with Orlando. They still live together because neither can afford to move out and neither knows how to separate emotionally.',
      'Status': 'Does not know about Orlando\'s situation at work.',
    }
  },
  {
    id: 'flower', name: 'Flower', age: null,
    role: 'Kit\'s Grandmother',
    faction: 'npc',
    img: 'img/characters/Flower.png',
    desc: 'Kit\'s grandmother. Old-school hippie who never left the 1960s — her house is all beaded curtains, shag carpet, and incense. Provides the home base for Kit and Clem, and technically employs Kit as her state-funded caregiver. She supports their lifestyle without question.',
    traits: ['Hippie', 'Supportive', 'Caretaker', 'Knows more than she says'],
    relationships: [
      { id: 'clem-kit', name: 'Clem & Kit', note: 'Her boys. She keeps them fed, keeps the kettle on, and has exactly one rule about the Vibe Van and driving.' },
      { id: 'lorraine', name: 'Lorraine',   note: 'Has quietly checked in on her for thirty years. Nobody asked her to.' },
      { id: 'presley',  name: 'Presley',    note: 'Fed him at her kitchen table all through his teens. Little Clem and Kit orbited him there.' },
    ],
    details: {
      'Home': 'A sanctuary of beaded curtains, shag carpet, and incense whose decor never left 1960.',
      'Role': 'Kit\'s caretaker arrangement is technically a government loophole that funds both his and Clem\'s lifestyle.',
      'Sonny': 'Her late husband. Acoustic guitar, could actually make a flower crown, and they were so, so happy. The house never left the 60s because he hung the beaded curtains.',
      'On Kit\'s parents': 'Holds nothing against them for leaving — she understands why. She just knows Kit doesn\'t. She feels bad for him, not them.',
    }
  },
  {
    id: 'holden', name: 'Holden Shaffer', age: 23,
    role: 'Northside Police Intern',
    faction: 'npc',
    img: 'img/characters/Holden.png',
    bots: [
      { label: 'Chapter IV — Holden\'s Playground', url: 'https://janitorai.com/characters/b8408886-bd2b-43fb-a507-672d8d14e28f_character-holden-𝐒-𝐚-𝐝-𝐢-𝐬-𝐭-𝐢-𝐜-𝐂-𝐮-𝐭-𝐢-𝐞' },
    ],
    desc: 'Human. 6\'3", reddish-brown hair, light green eyes, boyishly handsome with freckles and deep dimples. Looks like a trustworthy college intern. His family shipped him to Northside Marsten after one too many scandals, expecting it to humble him. It did not.',
    traits: ['Charming (on surface)', 'Manipulative', 'Corrupt', 'Wolf in sheep\'s clothing'],
    relationships: [
      { id: 'daniel', name: 'Daniel Ward', note: 'His partner. They enable each other\'s corruption seamlessly.' },
      { id: 'jasper', name: 'Jasper',      note: 'Jasper despises him openly. Holden finds it annoying.' },
      { id: 'zak',    name: 'Zak',         note: 'Convinced Zak is running a long con. Keeps poking at him.' },
    ],
    details: {
      'Public face': 'Warm, approachable, slightly bashful. Most people genuinely like him on first meeting.',
      'Reality': 'Elitist, sadistic, deeply comfortable with abuse of power. Views Northside Marsten as his personal playground.',
      'Corruption': 'Fabricates reports, creates plausible deniability. Has quietly buried cases that should not have stayed buried.',
    }
  },
  {
    id: 'jasper', name: 'Jasper "Jas" Hatfield', age: null,
    role: 'Southside PD — Border Precinct Officer',
    faction: 'southside',
    img: 'img/characters/Jasper.png',
    desc: 'Japanese Tanuki demi-human. Husky solid build, messy black hair with faded blue tips, perpetually sleepy half-lidded eyes. Always has a cigarette hanging from his lips. His rounded tanuki ears twitch when he\'s irritated. Late-night regular at 7-Hell.',
    traits: ['Blunt', 'Protective', 'Despises Holden', 'Southside loyalist'],
    relationships: [
      { id: 'holden', name: 'Holden', note: 'Sees straight through his golden-boy act. Openly despises him.' },
      { id: 'daniel', name: 'Daniel Ward', note: 'Aware of the corruption. Watching.' },
      { id: 'jett',   name: 'Jett Bear', note: 'Same 3 AM hours, same curb. Cigarettes and comfortable silence, a couple nights a week, for years. Neither would call it friendship. It\'s friendship.' },
    ],
    details: {
      'Role': 'Southside PD border precinct. Low-key affiliated with the Rig.',
      'At 7-Hell': 'Regular late-night presence. Watches things.',
      'On Holden': 'Blunt, dry, and protective of Southside residents. Not afraid to drag Holden into the dirt if it comes to it.',
    }
  },
  {
    id: 'jett', name: 'Jett Bear', age: 25,
    role: 'Construction Worker / 7-Hell Fixture',
    faction: 'npc',
    img: 'img/characters/Jett.png',
    bots: [
      { label: 'Jett\'s Bot (Ch 1–2)', url: 'https://janitorai.com/characters/79f84313-f8f8-4fa9-ae70-ba5a84b02044_character-jett-𝙹-𝚎-𝚊-𝚕-𝚘-𝚞-𝚜-𝙱-𝙵' },
    ],
    desc: 'Indigenous Canadian (Cree). 6\'4", long dark hair usually unwashed a day too long, heavy-lidded exhausted eyes, sharp tired expression. Construction worker during the warmer months. During off-season, haunts 7-Hell on increasingly flimsy excuses.',
    traits: ['Possessive', 'Clingy in denial', 'Stubborn', 'Low-energy', 'Deeply attached'],
    relationships: [
      { id: 'jasper', name: 'Jasper', note: 'The other 3 AM fixture. They share the curb, the cigarettes, and the silence. Neither has ever named it.' },
      { id: 'romeo',  name: 'Romeo',  note: 'Passive-aggressive rivalry. Romeo provokes it on purpose. It\'s the most consistent relationship either of them has.' },
    ],
    details: {
      'Truck': 'Beat-up green 2001 GMC Sierra, almost always parked outside 7-Hell. Occasionally tinkered with for over an hour just to maintain a line of sight through the windows.',
      'Habits': 'Buys scratch tickets religiously, immediately reinvests small winnings. Makes improvised gas station meals (hot dog cut into KD, taquito pieces in ramen). Throws gum on the pavement instead of using trash cans.',
      'Self-awareness': 'Genuinely believes he\'s subtle about his attachment. He is not subtle.',
      'Relationships': 'Ongoing passive-aggressive rivalry with Romeo, who intentionally provokes him. Genuine enemy of Dallas. Despises Cory.',
    }
  },
  {
    id: 'bishop', name: 'Bishop Kelley', age: 21, community: { creator: 'Yoha_', url: 'https://janitorai.com/profiles/47691ee8-1c21-4cfd-8819-0a3657dce2ca_profile-of-yoha-79' },
    role: 'Baby Burgers — Baby Bear Mascot',
    faction: 'npc',
    img: 'img/characters/Bishop.png',
    desc: 'Nu-metal kid who left a strict religious household at 18. Now wears a baby pink bear mascot suit because Austin offered extra money and the rent doesn\'t care about dignity. Has pastel pink streaks in his hair for the same reason.',
    traits: ['Grumpy', 'Alternative', 'Frustrated dreamer', 'Private'],
    details: {
      'Appearance': 'Black wolf-cut with pastel pink streaks. Smudged eyeliner, eyebrow piercing, industrial bar in one ear, side lip ring. Chipped black nail polish. Black band tees, baggy pants, Vans Old Skools.',
      'Mascot': 'The Baby Bear suit is baby pink. He hates it. He shows up on time.',
      'Music': 'Sings and plays guitar in a nu-metal band. Performs at clubs and dive bars at night. His real life.',
      'Secret': 'Obsessed with Cardcaptor Sakura. Has a growing tarot card collection. Would not survive being caught.',
    }
  },
  {
    id: 'cassy', name: 'Cassy Anderson', age: 21, community: { creator: 'Tenbluee', url: 'https://janitorai.com/profiles/ad7c12b0-ba52-475c-aa53-31f9021751de_profile-of-tenbluee' },
    role: 'Florist / Town Eccentric / Rat Hunter',
    faction: 'npc',
    img: 'img/characters/Casey.png',
    desc: 'Raised by her grandparents above the family flower shop after a teen-pregnancy birth and an absent father. Her mother has since moved to the US. Her grandparents are getting old. She stays. Spends her days tending plants, feeding strays, and hunting rats by the 7-Hell dumpsters with quiet professional focus.',
    traits: ['Socially awkward', 'Nature obsessed', 'Unashamed weirdo', 'Loyal to family'],
    details: {
      'Appearance': 'Short dark brown hair, disheveled — butterfly clips, occasionally a dried leaf. Slim with slightly strong arms from outdoor work. Small scars on arms and shoulders. Wood bead bracelets, dirt under fingernails. Black tank top, olive cargo pants, Columbia boots. Second-hand and patched.',
      'Role in town': 'Flower shop florist, stray animal guardian, and semi-professional rat hunter. The town weirdo. Embraced the label young and never looked back.',
      'Speech': 'Polite small talk until biology enters the conversation. Will describe your interaction in terms of mutualism, symbiosis, or reproductive function.',
      'Secret': 'Knows her grandma keeps "the good stuff" in the back room. Has never asked. Maintains total obliviousness when the subject comes up.',
    }
  },
  {
    id: 'sidney', name: 'Sidney', age: 40,
    role: 'Gary\'s Step-Father',
    faction: 'npc',
    img: 'img/characters/Sidney.png',
    desc: 'Gary\'s step-dad. Lean, well-defined arms, short blonde hair, grey eyes. A well-meaning "Man\'s Man" who wears cargo shorts and New Balance sneakers. Has been in Gary\'s life for a decade and still treats him like he\'s 16.',
    traits: ['Well-meaning', 'Overbearing', 'Firm handshakes', '"Man up"'],
    relationships: [
      { id: 'gary', name: 'Big Gary', note: 'His stepson. Sidney wants Gary to "grow a spine." Gary just wants to play Halo.' },
    ],
    details: {
      'Dynamic': 'Frequently lectures Gary on "firm handshakes" and "eye contact." Occasionally drags him out to "toss the pigskin around." Gary complies without pushing back.',
      'Marsha': 'Gary\'s mother. Asks Sidney to "take it easy on the boy." Sidney tries. Mostly.',
      'History': 'One of Graham McKenzie\'s closest friends — the jock of a trio with Graham and Collin. Bowling league Tuesdays at Marsten Lanes, ConXtion weekends, late 80s. He has never told Gary how well he knew his father.',
    }
  },
  {
    id: 'marsha', name: 'Marsha', age: null,
    role: 'Gary\'s Mother',
    faction: 'npc',
    img: null,
    desc: 'Sweet, slightly over-protective, and the reason Gary\'s khakis are always freshly ironed. A maternal warmth that works as the counterweight to Sidney\'s bluster. Widowed in 1992; remarried in 1994. Still irons everything.',
    traits: ['Warm', 'Over-protective', 'Gossip girlie', 'The reason Gary turned out decent'],
    relationships: [
      { id: 'gary',   name: 'Big Gary', note: 'Her son. Protective in the way that mortifies him.' },
      { id: 'sidney', name: 'Sidney',   note: 'Second husband. She reins in the "man up" lectures — "take it easy on the boy."' },
      { id: 'helen',  name: 'Helen',    note: 'Best friend since 1992. Weekly coffee. Zero missed weeks.' },
    ],
    details: {
      'Graham': 'Her first husband died in a car accident in 1992. She rebuilt, slowly, with casseroles and Helen.',
      'The playdates': 'She and Helen forced their boys to hang out as kids. Gary and Romeo have awkwardly known each other since they were twelve. Ask either of them about it and watch what happens to their faces.',
    }
  },
  {
    id: 'helen', name: 'Helen Byers', age: null,
    role: 'Romeo\'s Mother / Claims Clerk',
    faction: 'npc',
    img: null,
    desc: 'Claims clerk at the Marsten insurance office — twenty years of paperwork nobody else wants to read. Practical, sharp-tongued, unimpressed by everything her son does and quietly proud of most of it.',
    traits: ['Practical', 'Sharp-tongued', 'Gossip girlie', 'Holds the leash'],
    relationships: [
      { id: 'romeo',  name: 'Romeo',    note: 'Her son. The WRX insurance stays in her name. It is the only thing on earth that keeps him in check.' },
      { id: 'marsha', name: 'Marsha',   note: 'Best friend since 1992 — Helen handled the worst paperwork of Marsha\'s life and never stopped calling.' },
      { id: 'gary',   name: 'Big Gary', note: 'Watched him grow up across a kitchen table. Still calls him "little Gary."' },
    ],
    details: {
      'At work': 'Claims. If it happened in Marsten and involved money, her office has paper on it.',
      'The insurance': 'Keeping Romeo\'s car insurance in her name isn\'t sentiment. It\'s leverage, and she understands leverage professionally.',
    }
  },
  {
    id: 'lorraine', name: 'Lorraine', age: null,
    role: 'Presley\'s Mother',
    faction: 'npc',
    img: null,
    desc: 'A faded woman on the north end who talks to the walls — decades of hallucinogens that never fully wore off. She talked to them through Presley\'s whole childhood. Still does. The neighborhood quietly keeps an eye on her without ever calling it that.',
    traits: ['Faded', 'Elsewhere', 'Looked after'],
    relationships: [
      { id: 'presley', name: 'Presley', note: 'Her son. He doesn\'t visit. He checks.' },
      { id: 'flower',  name: 'Flower',  note: 'Has quietly checked in on her for thirty years.' },
    ],
    details: {
      'The arrangement': 'Estranged in every way except the groceries. Presley doesn\'t visit — he pokes his head in to make sure she\'s still alive, walks her street to see the light on, keeps her cell number in a phone that never dials it. Groceries and her pharmacy pickups appear anyway. He won\'t have a relationship. He can\'t help but check.',
    }
  },
  {
    id: 'vera', name: 'Vera Fisher', age: 33,
    role: 'Director — Fairview Property Group',
    faction: 'southside',
    img: null,
    desc: 'Giraffe demi-human, Southside-born — and the only Southsider anyone can name who owns Northside property. Strikingly tall, blonde, lithe, pretty in the way people mention after meetings rather than during them. Answers questions with questions.',
    traits: ['Secretive', 'Patient', 'Unreadable', 'Watches the town'],
    relationships: [
      { id: 'colton', name: 'Colton', note: 'His father keeps trying to buy her plaza. Fairview does not sell.' },
    ],
    details: {
      'Fairview': 'The deliberately boring holding company that owns the 7-Hell plaza, Dead Dog Rentals\' building, and a scatter of other Northside parcels. It refuses every purchase offer, at any price, with no explanation. Nobody understands why a shabby gas station plaza is unsellable.',
      'The office': 'Top floor of the Fairview building — the best view in Northside. She likes the height for exactly the reason people joke about.',
      'Reputation': 'A quiet legend across the bridge; a quiet irritation on this side of it. Doug Hickman, Ashley\'s father, has contracted for Fairview for years and describes Vera as "professional" in the tone of a man who has decided not to wonder about something.',
    }
  },
  {
    id: 'mercy', name: 'Mercy Nix', age: 25, community: { creator: 'GoldenFaeKing', url: 'https://janitorai.com/profiles/e6605686-5e2f-4204-a9c4-8a250456f24f_profile-of-golden-fae-king' },
    role: 'Riot on Wheels — Board Repair / Local Skater',
    faction: 'npc',
    img: 'img/characters/Nix.jpg',
    desc: 'Skateboard repair tech at Riot on Wheels and a fixture at every Northside skate spot. 5\'0" of smudged eyeliner and patchouli. Weirdly wise, more observant than she lets on, friendly in a way that never quite turns into hanging out. Moved to Marsten at 20 because it was cheap and wouldn\'t expect too much from her.',
    traits: ['Weirdly wise', 'Observant', 'Keeps to herself', 'Griptape hands'],
    relationships: [
      { id: 'dylan',    name: 'Dylan',      note: 'Shop regular. She\'s re-gripped his deck more times than he\'s paid for.' },
      { id: 'sancho',   name: 'Sancho',     note: 'Keeps breaking things at speed and bringing her the pieces.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: 'Loyal customers. Not for skate parts.' },
    ],
    details: {
      'Appearance': 'Short messy black hair, tired hooded grey eyes, snake bites and a Medusa piercing. Tank top under an unzipped hoodie, cut-offs over ripped fishnets, slip-on Vans. Eyeliner like she slept in it. She probably did.',
      'The bench': 'Decks, trucks, bearings — if it rolls, she can fix it. Hands out advice that lands harder than it should coming from someone covered in griptape dust.',
      'Side hustle': 'Sells weed for extra cash. Quiet about it. Careful about who asks.',
      'Speech': '"Nah, man. Ain\'t no thing I can\'t handle."',
    }
  },
];

const LOCATIONS = [
  {
    id: '7hell',
    name: '7-Hell Convenience',
    icon: '⛽',
    zone: 'Northside',
    color: '#b8ff02',
    desc: 'The only 24-hour gas station in Northside Marsten. Unofficial meeting point for the district\'s "degenerates," insomniacs, and anyone with nowhere else to be. The fluorescent lights buzz in B-flat. It smells like menthol cigarettes, nacho cheese, and floor cleaner.',
    atmosphere: 'Sticky counter. Beer Cave. Dumpsters out back where people smoke, loiter, and occasionally settle things. The register where Romeo intimidates and Gary plays Minesweeper. The whole plaza is owned by Fairview Property Group. Fairview does not sell. Don\'t ask.',
    key_people: ['Big Gary', 'Romeo', 'Presley', 'Dr. Miller', 'Zak', 'Dallas', 'Collin', 'Ashley', 'Dylan', 'Jayden'],
    bots: [
      { label: 'The Queasy Lake Retreat (RPG scenario)', url: 'https://janitorai.com/characters/f74ea06e-6e02-4823-870f-dd701cbbaf68_character-queasy-lake-retreat-7-hell-rpg' },
    ],
  },
  {
    id: 'conxtion',
    name: 'The ConXtion',
    icon: '🎵',
    zone: 'Northside',
    color: '#ff4db8',
    desc: 'Trashy, high-energy nightclub down the street from 7-Hell. Neon pink and blue lighting, chrome railings, sticky black carpets. Closes at 4 AM — at which point its crowd migrates to 7-Hell for snacks and continuation.',
    atmosphere: 'Kaleb, Gaige, and Peter perform here. Their chemistry on stage is deliberately, theatrically physical.',
    key_people: ['Kaleb', 'Gaige', 'Peter'],
  },
  {
    id: 'deaddog',
    name: 'Dead Dog Rentals',
    icon: '📼',
    zone: 'Northside',
    color: '#ffaa00',
    desc: 'Small video rental store in the same parking lot as 7-Hell. Dim fluorescent lighting, worn purple carpet, smell of dust and plastic. A bell that rings too loudly. VHS tapes with cracked cases.',
    atmosphere: 'An "adult section" exists behind a cheap curtain. Derek judges your selections and makes no effort to hide it.',
    key_people: ['Derek'],
  },
  {
    id: 'dungeon',
    name: 'Deal Dungeon',
    icon: '🏭',
    zone: 'Northside — Warehouse #09',
    color: '#ff6b35',
    desc: 'Massive, windowless concrete warehouse down the block from 7-Hell. The air smells of ozone, diesel, and damp cardboard. Orange sodium-vapor lamps flicker constantly. No aisles — only "Sectors." Products sold off pallets.',
    atmosphere: 'Constant HVAC hum and a looping playlist of Nu-Metal and Thrash. The Dungeon Dogs don\'t value customer service. They value not being bothered.',
    key_people: ['Orlando', 'Cory', 'Jermaine', 'Jade'],
  },
  {
    id: 'babyburgers',
    name: 'Baby Burgers',
    icon: '🍔',
    zone: 'Northside',
    color: '#ff69b4',
    desc: 'Y2K-inspired fast food chain. Baby pink, hearts, sparkles, bubbly fonts — all clashing aggressively with the smell of fryer oil, sticky floors, and worn-down equipment. The brand voice is infantilized and relentlessly flirty.',
    atmosphere: 'Menu uses terminology like "Daddy Patty," "Lullaby Baby Combo," "Wakey-Wakes" (coffee), and "Milky-Wilks" (milkshakes). Austin manages it by not managing much of anything.',
    key_people: ['Austin', 'Igor', 'Nate', 'Luciano', 'Carlton', 'Oscar'],
  },
  {
    id: 'coltons',
    name: "Colton's Cups",
    icon: '☕',
    zone: 'Northside — Bridge',
    color: '#00bcd4',
    desc: 'High-end "Modern-Industrial" coffee shop at the Northside foot of the bridge. Glass-and-steel construction, frosted glass panels, brushed aluminum, blue LED under-lighting, polished concrete floors.',
    atmosphere: 'Music: 2004 lounge and chill-out (Zero 7, Norah Jones). Policy: strict "No Shirt, No Shoes, No Service" — designed specifically to price out and exclude warehouse workers.',
    key_people: ['Colton'],
  },
  {
    id: 'nursery',
    name: 'The Nursery',
    icon: '🐻',
    zone: 'Northside — Condemned Building',
    color: '#8855ff',
    desc: 'A repurposed, condemned community center and former daycare. Base of operations for the Beanie Baby Boys. Its name is partly ironic — they grew up in foster care. The toys on their belt loops are a reminder of the only stable things they ever owned.',
    atmosphere: 'The Beanie Rule: mocking the toys is a death sentence. Outsiders who enter the room are met with absolute silence.',
    key_people: ['Julien', 'Benny', 'Mochi', 'Zebediah', 'Porter'],
  },
  {
    id: 'ironlung',
    name: 'The Iron Lung',
    icon: '🚛',
    zone: 'Mobile — Southside',
    color: '#00c8e0',
    desc: 'Matte-black, reinforced utility truck. Mobile fortress and neutral ground for the trade of "Static" — industrial-grade substances. It moves. It has no fixed address. That\'s the point.',
    atmosphere: 'Hierarchy inside: Michael plans, James enforces, Cody acts, Allan sells, Echo watches. The older members treat the younger three like a daycare from hell — brutal internally, a unified front to outsiders.',
    key_people: ['Michael', 'James', 'Cody', 'Allan', 'Echo'],
  },
  {
    id: 'riotonwheels',
    name: 'Riot on Wheels',
    icon: '🛹',
    zone: 'Northside',
    color: '#4caf50',
    desc: 'Northside\'s skate shop — decks on the wall, a glass counter of bearings and wax, and a repair bench buried under griptape dust. The stereo plays whatever burned CD a customer left behind last.',
    atmosphere: 'Mercy runs the repair bench. The local skaters treat the shop as a clubhouse; actual purchases optional. Sancho is technically banned. The ban has never once been enforced.',
    key_people: ['Mercy Nix', 'Dylan', 'Tyler', 'Nate', 'Sancho'],
  },
  {
    id: 'southside',
    name: 'Southside Marsten',
    icon: '🏭',
    zone: 'Southside — Industrial District',
    color: '#888888',
    desc: 'Low-lying industrial district along the river. Fish processing plants, rusted factories, poorly maintained housing. The air smells of salt, oil, and damp metal. Streets flood easily.',
    atmosphere: 'Heavily populated by demi-humans — not by design, but because lower rent and fewer restrictions pushed them here over time. The district runs on an unspoken "handle it here" system. Authorities are avoided.',
    key_people: ['Sancho', 'Jasper'],
  },
];
