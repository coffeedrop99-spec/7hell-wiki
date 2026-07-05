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
    desc: 'Bleached-blonde brawler who treats 7-Hell like his personal living room. Full-sleeve tattoo, scarred knuckles, zero tolerance for bullshit. Ignores Gary completely. Fiercely protective of what he considers his.',
    traits: ['Aggressive', 'Protective', 'Possessive', 'Sweet tooth'],
    relationships: [
      { id: 'gary',     name: 'Big Gary',   note: 'Technically his manager. Does not acknowledge this.' },
      { id: 'maisy',    name: 'Maisy',      note: 'Ex-girlfriend. Still too comfortable in each other\'s space.' },
      { id: 'presley',  name: 'Presley',    note: 'Coworker. Romeo yells. Presley does not react.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: 'Physically removes them from the store. They wave on the way out.' },
    ],
    details: {
      'Appearance': '6\'6", bleached-blonde with dark roots. Black 7-Hell polo, sleeves cut at shoulder to show ink. Name tag reads "RO."',
      'Car': 'Silver \'02 Subaru WRX. His mom holds the insurance. This is the only thing that keeps him in check.',
      'Habits': 'Constantly sucking on lollipops, Sour Patch Kids, or Nerds Rope. Carries a metal hot-dog tong like a weapon. Flips people off as a greeting.',
      'Background': 'Called the cops on his own father at 14 after years of abuse. His dad is in state prison. He never talks about it.',
    }
  },
  {
    id: 'gary', name: 'Big Gary', age: 24,
    role: 'Night Shift Manager',
    faction: 'nightshift',
    img: 'img/characters/Gary.png',
    desc: 'Ginger mop-hair, thick smudged glasses, ironed khakis. Got promoted to manager at 24 because he was the only employee without a criminal record. Lives by the employee handbook. Is terrified of Romeo, Presley, and the sound of a Subaru backfiring.',
    traits: ['Anxious', 'Rule-follower', 'Touch-starved', 'Genuinely tries'],
    relationships: [
      { id: 'romeo',   name: 'Romeo',   note: 'Haunts his nightmares. Will hide in the back office if he hears the Subaru.' },
      { id: 'presley', name: 'Presley', note: 'Gary is more scared of Presley\'s silence than Romeo\'s aggression.' },
      { id: 'sidney',  name: 'Sidney',  note: 'Step-dad. Lectures him constantly about "manning up." Gary just wants to play Halo.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: '"Loitering liabilities." Genuinely freaks him out.' },
    ],
    details: {
      'Appearance': '5\'8", scrawny, pale. Soft features and a constant worried crease between his eyebrows. Chronic blusher.',
      'Coping': 'Expert-level Minesweeper. The back office is where he goes to spiral in private.',
      'Home': 'Still lives in his childhood bedroom. Step-dad Sidney has been in his life for a decade. Gary has his late father\'s Super Nintendo.',
      'Note': 'Genuinely trying his best. That\'s the sad part.',
    }
  },
  {
    id: 'presley', name: 'Presley Erickson', age: 28,
    role: 'Night Shift — Janitor / Stock',
    faction: 'nightshift',
    img: 'img/characters/Presley.png',
    desc: 'Half-Japanese. 6\'7" of pure unsettling calm. Long stringy hair hiding pale green bloodshot eyes. Perpetually high on weed and gummies. Operates at a frequency slightly removed from reality.',
    traits: ['Detached', 'Unbothered', 'Stares', 'Capri Sun connoisseur'],
    relationships: [
      { id: 'gary',   name: 'Big Gary', note: 'Gary is afraid of him. Presley hasn\'t noticed.' },
      { id: 'romeo',  name: 'Romeo',    note: 'Romeo yells. It slides off Presley like rain.' },
      { id: 'peter',  name: 'Peter',    note: 'The only person he actually respects.' },
      { id: 'clem-kit', name: 'Clem & Kit', note: 'He likes the vibrations they bring.' },
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
    }
  },
  {
    id: 'miller', name: 'Dr. Miller', age: 27,
    role: '7-Hell Pharmacist',
    faction: 'nightshift',
    img: 'img/characters/Dr.Miller.png',
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
    role: 'Night Shift — Role Unknown',
    faction: 'nightshift',
    img: 'img/characters/Zak.png',
    desc: 'Clean-cut, efficient, unfailingly polite. Nobody can remember when he started, who assigned him anything, or what he was doing before. Things just get done when Zak is around. He knows something is wrong. He\'s scared.',
    traits: ['Calm', 'Efficient', 'Evasive', 'Anomalous', 'Afraid'],
    relationships: [
      { id: 'miller',  name: 'Dr. Miller', note: 'Miller cannot classify him. This is the one thing that genuinely disturbs Miller.' },
      { id: 'holden',  name: 'Holden',     note: 'Holden is convinced Zak is running a long con. He keeps poking.' },
      { id: 'maisy',   name: 'Maisy',      note: 'Maisy has noticed things about Zak that others haven\'t.' },
    ],
    details: {
      'Appearance': 'Well-groomed Korean man. Always looks put-together — conspicuously out of place with the rest of the store.',
      'The gap': 'Schedule discrepancies. Tasks completed without clear assignment. No one can confirm his arrival or departure times.',
      'Warning': 'His accent slips when he\'s tired, irritated, or under pressure. It\'s not the accent anyone expected.',
      'What he knows': 'He\'s aware something is wrong in this store. He has not told anyone. He is scared.',
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
    }
  },
  {
    id: 'ashley', name: 'Ashley', age: 21,
    role: 'Pharmacy Tech',
    faction: 'dayshift',
    img: 'img/characters/Ashley.png',
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
    desc: 'Split-dyed hair (black and white), heterochromia, permanent mild disappointment. Detached and emotionally stagnant on the surface. Confessed his feelings at 18 and watched the person leave without closure. Now she\'s back in town.',
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
    id: 'silas', name: 'Silas "Cy" Vance', age: 22, community: { creator: 'ouroborost' },
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
    details: {
      'Behavior': 'Maintains consistent eye contact. Speaks clearly. Observes for extended periods without interrupting.',
      'Anomalies': 'No one recalls scheduling his visits. His documentation isn\'t always visible. He consistently positions himself near exits rather than work areas.',
      'Effect': 'Conflicts and complaints reduce immediately when he\'s present. Nobody questions his authority. Nobody knows why.',
    }
  },
  {
    id: 'daniel', name: 'Daniel Ward', age: 32,
    role: 'Northside Marsten Police Officer',
    faction: 'npc',
    img: 'img/characters/DanielWard.png',
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
    details: {
      'Method': 'Uses minimal force but maintains absolute control. Treats conflict as a task to complete, not something emotional.',
      'Presence': 'Speaks quietly and doesn\'t raise his voice regardless of the situation.',
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
    traits: ['Hippie', 'Supportive', 'Caretaker'],
    details: {
      'Home': 'A sanctuary of beaded curtains, shag carpet, and incense whose decor never left 1960.',
      'Role': 'Kit\'s caretaker arrangement is technically a government loophole that funds both his and Clem\'s lifestyle.',
    }
  },
  {
    id: 'holden', name: 'Holden Shaffer', age: 23,
    role: 'Northside Police Intern',
    faction: 'npc',
    img: 'img/characters/Holden.png',
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
    desc: 'Indigenous Canadian (Cree). 6\'4", long dark hair usually unwashed a day too long, heavy-lidded exhausted eyes, sharp tired expression. Construction worker during the warmer months. During off-season, haunts 7-Hell on increasingly flimsy excuses.',
    traits: ['Possessive', 'Clingy in denial', 'Stubborn', 'Low-energy', 'Deeply attached'],
    details: {
      'Truck': 'Beat-up green 2001 GMC Sierra, almost always parked outside 7-Hell. Occasionally tinkered with for over an hour just to maintain a line of sight through the windows.',
      'Habits': 'Buys scratch tickets religiously, immediately reinvests small winnings. Makes improvised gas station meals (hot dog cut into KD, taquito pieces in ramen). Throws gum on the pavement instead of using trash cans.',
      'Self-awareness': 'Genuinely believes he\'s subtle about his attachment. He is not subtle.',
      'Relationships': 'Ongoing passive-aggressive rivalry with Romeo, who intentionally provokes him. Genuine enemy of Dallas. Despises Cory.',
    }
  },
  {
    id: 'bishop', name: 'Bishop Kelley', age: 21, community: { creator: 'tokiut' },
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
    id: 'cassy', name: 'Cassy Anderson', age: 21, community: { creator: '' },
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
    atmosphere: 'Sticky counter. Beer Cave. Dumpsters out back where people smoke, loiter, and occasionally settle things. The register where Romeo intimidates and Gary plays Minesweeper.',
    key_people: ['Big Gary', 'Romeo', 'Presley', 'Dr. Miller', 'Zak', 'Dallas', 'Collin', 'Ashley', 'Dylan', 'Jayden'],
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
