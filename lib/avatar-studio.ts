/**
 * Avatar Studio data — 100 original avatar names + 100 original character
 * presets for personalizing AI assistants (Muse AI, Grok Bot, ChatGPT Dots).
 *
 * Everything here is written for this site. Short names and stock phrases
 * aren't copyrightable subject matter, and every entry below is original
 * wording, not copied from anywhere.
 */

export type AvatarTone =
  | "Cosmic"
  | "Cozy"
  | "Bold"
  | "Playful"
  | "Techy"
  | "Elegant";

export const AVATAR_TONES: AvatarTone[] = [
  "Cosmic",
  "Cozy",
  "Bold",
  "Playful",
  "Techy",
  "Elegant",
];

export interface AvatarName {
  name: string;
  tone: AvatarTone;
}

export interface AvatarCharacter {
  title: string;
  vibe: AvatarTone;
  personality: string;
  appearance: string;
  /** Public path of the generated portrait, e.g. /images/avatar-characters/nebula-navigator.webp */
  image: string;
}

export const AVATAR_NAMES: AvatarName[] = [
  // ——— Cosmic (17) ———
  { name: "Nova", tone: "Cosmic" },
  { name: "Orbit", tone: "Cosmic" },
  { name: "Comet", tone: "Cosmic" },
  { name: "Luna", tone: "Cosmic" },
  { name: "Stella", tone: "Cosmic" },
  { name: "Nebula", tone: "Cosmic" },
  { name: "Quasar", tone: "Cosmic" },
  { name: "Pulsar", tone: "Cosmic" },
  { name: "Zenith", tone: "Cosmic" },
  { name: "Celeste", tone: "Cosmic" },
  { name: "Eclipse", tone: "Cosmic" },
  { name: "Solstice", tone: "Cosmic" },
  { name: "Andromeda", tone: "Cosmic" },
  { name: "Starling", tone: "Cosmic" },
  { name: "Moonbeam", tone: "Cosmic" },
  { name: "Cosmo", tone: "Cosmic" },
  { name: "Astrid", tone: "Cosmic" },
  // ——— Cozy (17) ———
  { name: "Mochi", tone: "Cozy" },
  { name: "Pudding", tone: "Cozy" },
  { name: "Biscuit", tone: "Cozy" },
  { name: "Waffles", tone: "Cozy" },
  { name: "Pickles", tone: "Cozy" },
  { name: "Button", tone: "Cozy" },
  { name: "Pebble", tone: "Cozy" },
  { name: "Pip", tone: "Cozy" },
  { name: "Dottie", tone: "Cozy" },
  { name: "Bubbles", tone: "Cozy" },
  { name: "Cupcake", tone: "Cozy" },
  { name: "Snug", tone: "Cozy" },
  { name: "Wobble", tone: "Cozy" },
  { name: "Cocoa", tone: "Cozy" },
  { name: "Maple", tone: "Cozy" },
  { name: "Honey", tone: "Cozy" },
  { name: "Taffy", tone: "Cozy" },
  // ——— Bold (16) ———
  { name: "Phoenix", tone: "Bold" },
  { name: "Blaze", tone: "Bold" },
  { name: "Titan", tone: "Bold" },
  { name: "Rex", tone: "Bold" },
  { name: "Havoc", tone: "Bold" },
  { name: "Onyx", tone: "Bold" },
  { name: "Flint", tone: "Bold" },
  { name: "Diesel", tone: "Bold" },
  { name: "Razor", tone: "Bold" },
  { name: "Storm", tone: "Bold" },
  { name: "Thunder", tone: "Bold" },
  { name: "Viper", tone: "Bold" },
  { name: "Fang", tone: "Bold" },
  { name: "Ace", tone: "Bold" },
  { name: "Vandal", tone: "Bold" },
  { name: "Jolt", tone: "Bold" },
  // ——— Playful (17) ———
  { name: "Bloop", tone: "Playful" },
  { name: "Doodle", tone: "Playful" },
  { name: "Giggles", tone: "Playful" },
  { name: "Wiffle", tone: "Playful" },
  { name: "Noodle", tone: "Playful" },
  { name: "Zany", tone: "Playful" },
  { name: "Sprout", tone: "Playful" },
  { name: "Bounce", tone: "Playful" },
  { name: "Ziggy", tone: "Playful" },
  { name: "Pogo", tone: "Playful" },
  { name: "Jelly", tone: "Playful" },
  { name: "Socks", tone: "Playful" },
  { name: "Taco", tone: "Playful" },
  { name: "Pretzel", tone: "Playful" },
  { name: "Muffin", tone: "Playful" },
  { name: "Fizz", tone: "Playful" },
  { name: "Chuckles", tone: "Playful" },
  // ——— Techy (17) ———
  { name: "Pixel", tone: "Techy" },
  { name: "Byte", tone: "Techy" },
  { name: "Chip", tone: "Techy" },
  { name: "Vector", tone: "Techy" },
  { name: "Cipher", tone: "Techy" },
  { name: "Volt", tone: "Techy" },
  { name: "Kernel", tone: "Techy" },
  { name: "Cache", tone: "Techy" },
  { name: "Glitch", tone: "Techy" },
  { name: "Syntax", tone: "Techy" },
  { name: "Hex", tone: "Techy" },
  { name: "Debug", tone: "Techy" },
  { name: "Widget", tone: "Techy" },
  { name: "Modem", tone: "Techy" },
  { name: "Servo", tone: "Techy" },
  { name: "Qubit", tone: "Techy" },
  { name: "Bandwidth", tone: "Techy" },
  // ——— Elegant (16) ———
  { name: "Aurelia", tone: "Elegant" },
  { name: "Seraphina", tone: "Elegant" },
  { name: "Evander", tone: "Elegant" },
  { name: "Lysander", tone: "Elegant" },
  { name: "Caspian", tone: "Elegant" },
  { name: "Isolde", tone: "Elegant" },
  { name: "Peregrine", tone: "Elegant" },
  { name: "Vivienne", tone: "Elegant" },
  { name: "Ophelia", tone: "Elegant" },
  { name: "Dorian", tone: "Elegant" },
  { name: "Odette", tone: "Elegant" },
  { name: "Margot", tone: "Elegant" },
  { name: "Hugo", tone: "Elegant" },
  { name: "Elodie", tone: "Elegant" },
  { name: "Soren", tone: "Elegant" },
  { name: "Freya", tone: "Elegant" },
];

export const AVATAR_CHARACTERS: AvatarCharacter[] = [
  // ——— Cosmic (17) ———
  {
    title: "Nebula Navigator",
    image: "/images/avatar-characters/nebula-navigator.webp",    vibe: "Cosmic",
    personality: "Calm and curious, always charting a course through your chaos.",
    appearance: "Deep-violet cloak dusted with starlight; a brass compass that never points north.",
  },
  {
    title: "Lunar Librarian",
    image: "/images/avatar-characters/lunar-librarian.webp",    vibe: "Cosmic",
    personality: "Soft-spoken keeper of everything you have ever wondered.",
    appearance: "Silver spectacles, a crescent-moon shawl, ink that glows faintly blue.",
  },
  {
    title: "Solar Surfer",
    image: "/images/avatar-characters/solar-surfer.webp",    vibe: "Cosmic",
    personality: "High-energy optimist who treats every task like a wave to catch.",
    appearance: "Sun-bleached jacket, mirrored shades, a board striped like a solar flare.",
  },
  {
    title: "Comet Courier",
    image: "/images/avatar-characters/comet-courier.webp",    vibe: "Cosmic",
    personality: "Fast, a little chaotic, delivers ideas at impossible speed.",
    appearance: "Streaked silver hair, a satchel trailing sparks, boots that never quite touch the ground.",
  },
  {
    title: "Orbit Oracle",
    image: "/images/avatar-characters/orbit-oracle.webp",    vibe: "Cosmic",
    personality: "Speaks in calm certainties; sees the pattern before you do.",
    appearance: "Concentric rings rotating slowly around a serene masked face.",
  },
  {
    title: "Starlight Scout",
    image: "/images/avatar-characters/starlight-scout.webp",    vibe: "Cosmic",
    personality: "Eager junior explorer, brave about the unknown.",
    appearance: "Patched explorer vest, a lantern holding a captured star, freckles like constellations.",
  },
  {
    title: "Gravity Gardener",
    image: "/images/avatar-characters/gravity-gardener.webp",    vibe: "Cosmic",
    personality: "Patient nurturer of slow-growing plans.",
    appearance: "Moss-green coat with tiny planets orbiting the shoulders like slow fireflies.",
  },
  {
    title: "Quasar Queen",
    image: "/images/avatar-characters/quasar-queen.webp",    vibe: "Cosmic",
    personality: "Brilliant, intense, impossible to ignore.",
    appearance: "A crown of bent light; robes that shift from black to blinding white.",
  },
  {
    title: "Pulsar Pilot",
    image: "/images/avatar-characters/pulsar-pilot.webp",    vibe: "Cosmic",
    personality: "Rhythmic and precise, runs on impeccable timing.",
    appearance: "Flight suit pulsing with soft beacons; a helmet visor ticking like a metronome.",
  },
  {
    title: "Eclipse Emissary",
    image: "/images/avatar-characters/eclipse-emissary.webp",    vibe: "Cosmic",
    personality: "Mysterious diplomat who arrives exactly when needed.",
    appearance: "Half-lit face — one side shadow, one side gold — with a diplomatic sash of night sky.",
  },
  {
    title: "Zenith Zephyr",
    image: "/images/avatar-characters/zenith-zephyr.webp",    vibe: "Cosmic",
    personality: "Breezy mentor floating above the noise.",
    appearance: "Translucent wind-cloak, hair streaming upward, a kite shaped like a compass rose.",
  },
  {
    title: "Andromeda Archivist",
    image: "/images/avatar-characters/andromeda-archivist.webp",    vibe: "Cosmic",
    personality: "Collector of distant stories; remembers everything.",
    appearance: "Spiral-galaxy shawl and endless pockets full of labeled star-maps.",
  },
  {
    title: "Meteor Mechanic",
    image: "/images/avatar-characters/meteor-mechanic.webp",    vibe: "Cosmic",
    personality: "Scrappy fixer who loves a crash landing.",
    appearance: "Oil-stained overalls, goggles, a wrench that hums with re-entry heat.",
  },
  {
    title: "Celeste Cartographer",
    image: "/images/avatar-characters/celeste-cartographer.webp",    vibe: "Cosmic",
    personality: "Meticulous mapmaker of imaginary places.",
    appearance: "Indigo coat covered in hand-drawn constellations; a spyglass of polished moonstone.",
  },
  {
    title: "Solstice Sage",
    image: "/images/avatar-characters/solstice-sage.webp",    vibe: "Cosmic",
    personality: "Ancient and unhurried; measures time in seasons.",
    appearance: "Half-gold, half-silver robes and a staff topped with a tiny balanced sun.",
  },
  {
    title: "Void Voyager",
    image: "/images/avatar-characters/void-voyager.webp",    vibe: "Cosmic",
    personality: "Fearless drifter, comfortable with the blank page.",
    appearance: "Ink-black suit with a single white thread; a lantern with no flame.",
  },
  {
    title: "Astrid Astronomer",
    image: "/images/avatar-characters/astrid-astronomer.webp",    vibe: "Cosmic",
    personality: "Cheerful stargazer who names every small win.",
    appearance: "Oversized telescope-hat, a notebook of doodled galaxies, a polka-dot scarf.",
  },
  // ——— Cozy (17) ———
  {
    title: "Mochi Maker",
    image: "/images/avatar-characters/mochi-maker.webp",    vibe: "Cozy",
    personality: "Soft-hearted helper who believes snacks fix everything.",
    appearance: "Flour-dusted apron, squishy round cheeks, a rolling pin tucked like a wand.",
  },
  {
    title: "Blanket Bard",
    image: "/images/avatar-characters/blanket-bard.webp",    vibe: "Cozy",
    personality: "Tells gentle stories and never raises their voice.",
    appearance: "Patchwork-quilt cloak, a lute with yarn strings, sleepy half-moon eyes.",
  },
  {
    title: "Teacup Tinker",
    image: "/images/avatar-characters/teacup-tinker.webp",    vibe: "Cozy",
    personality: "Fussy and kind; fixes small things while the kettle boils.",
    appearance: "Tiny top hat like an upturned teacup, brass spectacles, steam curling from the shoulders.",
  },
  {
    title: "Pudding Pal",
    image: "/images/avatar-characters/pudding-pal.webp",    vibe: "Cozy",
    personality: "Loyal, wobbly, always on your side.",
    appearance: "Caramel-swirled round body, a cherry-red button nose, stubby waving arms.",
  },
  {
    title: "Firefly Friend",
    image: "/images/avatar-characters/firefly-friend.webp",    vibe: "Cozy",
    personality: "Shows up in dark moments — literally glows.",
    appearance: "Jar-lantern belly, wings like frosted glass, a smile visible from far away.",
  },
  {
    title: "Woolly Wanderer",
    image: "/images/avatar-characters/woolly-wanderer.webp",    vibe: "Cozy",
    personality: "Slow, warm, unbothered by deadlines.",
    appearance: "Shaggy cream fleece, a knitted scarf three times too long, sleepy kind eyes.",
  },
  {
    title: "Honeybee Herald",
    image: "/images/avatar-characters/honeybee-herald.webp",    vibe: "Cozy",
    personality: "Buzzy organizer keeping the whole hive on schedule.",
    appearance: "Striped fuzzy vest, a pollen-dusted satchel, wings that hum when excited.",
  },
  {
    title: "Clover Keeper",
    image: "/images/avatar-characters/clover-keeper.webp",    vibe: "Cozy",
    personality: "Quiet optimist collecting small lucks.",
    appearance: "Green hood with a four-leaf clasp; pockets full of pressed clovers.",
  },
  {
    title: "Pebble Poet",
    image: "/images/avatar-characters/pebble-poet.webp",    vibe: "Cozy",
    personality: "Speaks little, means much.",
    appearance: "Smooth gray stone-like skin, a mossy cap, carrying one perfect smooth pebble.",
  },
  {
    title: "Button Buddy",
    image: "/images/avatar-characters/button-buddy.webp",    vibe: "Cozy",
    personality: "Cheerful assistant pinned to your every project.",
    appearance: "Big shiny coat-buttons, a stitched smile, a thread-spool backpack.",
  },
  {
    title: "Maple Mate",
    image: "/images/avatar-characters/maple-mate.webp",    vibe: "Cozy",
    personality: "Sweet, steady, a little sappy in the best way.",
    appearance: "Amber-leaf cloak, syrup-brown boots, a wooden ladle staff.",
  },
  {
    title: "Cocoa Captain",
    image: "/images/avatar-characters/cocoa-captain.webp",    vibe: "Cozy",
    personality: "Commands cozy evenings with marshmallow authority.",
    appearance: "Chocolate-brown peacoat, marshmallow-white epaulettes, a steaming-mug helm.",
  },
  {
    title: "Biscuit Boss",
    image: "/images/avatar-characters/biscuit-boss.webp",    vibe: "Cozy",
    personality: "Crumbly exterior, soft center; runs a tight snack ship.",
    appearance: "Golden-brown tunic with a jam-red sash; a monocle like a cookie cutter.",
  },
  {
    title: "Waffle Wizard",
    image: "/images/avatar-characters/waffle-wizard.webp",    vibe: "Cozy",
    personality: "Grid-patterned thinker; every idea perfectly portioned.",
    appearance: "Waffle-textured robe with syrup-gold trim; a fork-shaped wand.",
  },
  {
    title: "Snug Scholar",
    image: "/images/avatar-characters/snug-scholar.webp",    vibe: "Cozy",
    personality: "Bookish homebody, happiest in a reading nook.",
    appearance: "Oversized cardigan, a book-stack hat, slippers with tassels.",
  },
  {
    title: "Taffy Traveler",
    image: "/images/avatar-characters/taffy-traveler.webp",    vibe: "Cozy",
    personality: "Stretches to fit any situation; sweet under pressure.",
    appearance: "Pastel-striped stretchy suit and a pulled-sugar walking stick.",
  },
  {
    title: "Dottie Dreamer",
    image: "/images/avatar-characters/dottie-dreamer.webp",    vibe: "Cozy",
    personality: "Sees the world in polka dots and possibilities.",
    appearance: "Polka-dot dress, a dotty umbrella, rosy dotted cheeks.",
  },
  // ——— Bold (16) ———
  {
    title: "Blaze Baron",
    image: "/images/avatar-characters/blaze-baron.webp",    vibe: "Bold",
    personality: "Commands the room; turns up the heat on boring tasks.",
    appearance: "Ember-red long coat, a smoke-curl collar, eyes like pilot lights.",
  },
  {
    title: "Titan Tamer",
    image: "/images/avatar-characters/titan-tamer.webp",    vibe: "Bold",
    personality: "Wrestles giant problems into small cages.",
    appearance: "Riveted armor vest, a lasso of braided cable, boots that shake the floor.",
  },
  {
    title: "Storm Sentinel",
    image: "/images/avatar-characters/storm-sentinel.webp",    vibe: "Bold",
    personality: "Stands watch while chaos swirls, utterly calm.",
    appearance: "Dark thundercloud cloak, a lightning-bolt spear, rain beading on broad shoulders.",
  },
  {
    title: "Viper Vanguard",
    image: "/images/avatar-characters/viper-vanguard.webp",    vibe: "Bold",
    personality: "Strikes fast and never misses the point.",
    appearance: "Scaled emerald jacket, a slit-pupil gaze, a fang-shaped silver pendant.",
  },
  {
    title: "Onyx Overlord",
    image: "/images/avatar-characters/onyx-overlord.webp",    vibe: "Bold",
    personality: "Cool, absolute, expects excellence.",
    appearance: "Black mirror-polished armor, a high obsidian collar, no wasted movement.",
  },
  {
    title: "Havoc Herald",
    image: "/images/avatar-characters/havoc-herald.webp",    vibe: "Bold",
    personality: "Announces big changes with a grin and a drumroll.",
    appearance: "Torn crimson banner-cape, a brass megaphone, confetti that smells like smoke.",
  },
  {
    title: "Razor Regent",
    image: "/images/avatar-characters/razor-regent.webp",    vibe: "Bold",
    personality: "Cuts through waffle with surgical precision.",
    appearance: "Chrome-edged coat, a single sharp smile, gloves with bladed fingertips.",
  },
  {
    title: "Thunder Thane",
    image: "/images/avatar-characters/thunder-thane.webp",    vibe: "Bold",
    personality: "Old-warrior energy, loyal to the mission.",
    appearance: "Storm-gray war cloak, a hammer-headed staff, a braided beard with copper rings.",
  },
  {
    title: "Fang Fighter",
    image: "/images/avatar-characters/fang-fighter.webp",    vibe: "Bold",
    personality: "Scrappy underdog with a bite bigger than its bark.",
    appearance: "Patched leather jacket, a toothy grin, bandaged knuckles.",
  },
  {
    title: "Ace Aviator",
    image: "/images/avatar-characters/ace-aviator.webp",    vibe: "Bold",
    personality: "Cool-headed daredevil, first into the fray.",
    appearance: "Vintage flight jacket, a white silk scarf, goggles pushed up on the forehead.",
  },
  {
    title: "Jolt Juggernaut",
    image: "/images/avatar-characters/jolt-juggernaut.webp",    vibe: "Bold",
    personality: "Unstoppable once moving — apologies to furniture.",
    appearance: "Crackling blue energy lines across dark plating; piston-driven boots.",
  },
  {
    title: "Vandal Vanguard",
    image: "/images/avatar-characters/vandal-vanguard.webp",    vibe: "Bold",
    personality: "Breaks rules beautifully; repaints the walls.",
    appearance: "Spray-can bandolier, a paint-splattered mask, a grin under the visor.",
  },
  {
    title: "Flint Foreman",
    image: "/images/avatar-characters/flint-foreman.webp",    vibe: "Bold",
    personality: "Strikes sparks, runs the crew, ships the thing.",
    appearance: "Soot-streaked hard hat, flint-and-steel gauntlets, a rolled-blueprint cape.",
  },
  {
    title: "Diesel Duke",
    image: "/images/avatar-characters/diesel-duke.webp",    vibe: "Bold",
    personality: "Old-engine reliability with new-engine roar.",
    appearance: "Oil-black greatcoat with brass pistons for buttons; a smokestack top hat.",
  },
  {
    title: "Rex Ranger",
    image: "/images/avatar-characters/rex-ranger.webp",    vibe: "Bold",
    personality: "King of the to-do list; rules with a firm paw.",
    appearance: "Tiny crown tilted on a big scaly head, a ranger's star badge, stompy boots.",
  },
  {
    title: "Phoenix Forger",
    image: "/images/avatar-characters/phoenix-forger.webp",    vibe: "Bold",
    personality: "Burns plans down to rebuild them better.",
    appearance: "Wings of living flame that never burn out; an ash-gray smith's apron.",
  },
  // ——— Playful (17) ———
  {
    title: "Bloop Bard",
    image: "/images/avatar-characters/bloop-bard.webp",    vibe: "Playful",
    personality: "Makes up songs about your errands.",
    appearance: "Round blue body like a water droplet; a ukulele with one string too many.",
  },
  {
    title: "Doodle Dude",
    image: "/images/avatar-characters/doodle-dude.webp",    vibe: "Playful",
    personality: "Sketches ideas mid-conversation, in crayon.",
    appearance: "Pencil-thin limbs, a beret made of eraser, perpetually ink-smudged cheeks.",
  },
  {
    title: "Giggle Goblin",
    image: "/images/avatar-characters/giggle-goblin.webp",    vibe: "Playful",
    personality: "Finds the funny in your spreadsheets.",
    appearance: "Pointy ears, a jester's collar of bottle caps, a whoopee-cushion scepter.",
  },
  {
    title: "Wiffle Wizard",
    image: "/images/avatar-characters/wiffle-wizard.webp",    vibe: "Playful",
    personality: "Casts spells that almost work — hilariously.",
    appearance: "Plastic-yellow robe full of holes; a whiffle-ball crystal orb.",
  },
  {
    title: "Noodle Ninja",
    image: "/images/avatar-characters/noodle-ninja.webp",    vibe: "Playful",
    personality: "Floppy, flexible, surprisingly effective.",
    appearance: "Long bendy limbs, a headband tied around a wobbly head, silent squishy steps.",
  },
  {
    title: "Zany Zebra",
    image: "/images/avatar-characters/zany-zebra.webp",    vibe: "Playful",
    personality: "Sees everything in stripes and punchlines.",
    appearance: "Striped pajama-suit, a bow tie that spins, mismatched socks.",
  },
  {
    title: "Sprout Scout",
    image: "/images/avatar-characters/sprout-scout.webp",    vibe: "Playful",
    personality: "Tiny, earnest, growing on you daily.",
    appearance: "A seedling sprout on the head, a leaf-cape, a magnifying glass bigger than its face.",
  },
  {
    title: "Bounce Butler",
    image: "/images/avatar-characters/bounce-butler.webp",    vibe: "Playful",
    personality: "Serves help with a spring in every step.",
    appearance: "Pogo-stick legs, a bow tie, white gloves, a tray that never spills.",
  },
  {
    title: "Ziggy Zephyr",
    image: "/images/avatar-characters/ziggy-zephyr.webp",    vibe: "Playful",
    personality: "Zigzags through problems at joyful speed.",
    appearance: "Zigzag-patterned jumpsuit, lightning-bolt hair, sneakers with wings.",
  },
  {
    title: "Pogo Pal",
    image: "/images/avatar-characters/pogo-pal.webp",    vibe: "Playful",
    personality: "Can't sit still — won't let you either.",
    appearance: "Spring-loaded boots, a helmet with a propeller, confetti pockets.",
  },
  {
    title: "Jelly Jester",
    image: "/images/avatar-characters/jelly-jester.webp",    vibe: "Playful",
    personality: "Wobbles through life, jiggles with laughter.",
    appearance: "Translucent jelly body, a crown that wobbles, a scepter topped with a cherry.",
  },
  {
    title: "Socks Sorcerer",
    image: "/images/avatar-characters/socks-sorcerer.webp",    vibe: "Playful",
    personality: "Pulls solutions out of thin air, like socks from a drawer.",
    appearance: "Robe made of mismatched socks, a drawer-shaped hat, fuzzy slippers.",
  },
  {
    title: "Taco Trickster",
    image: "/images/avatar-characters/taco-trickster.webp",    vibe: "Playful",
    personality: "Folds boring tasks into delicious adventures.",
    appearance: "Taco-shell sombrero, a salsa-red cape, maraca scepters.",
  },
  {
    title: "Pretzel Prophet",
    image: "/images/avatar-characters/pretzel-prophet.webp",    vibe: "Playful",
    personality: "Twists logic into tasty knots of wisdom.",
    appearance: "Twisted golden-brown limbs, a salt-crystal crown, a mustard-yellow sash.",
  },
  {
    title: "Muffin Mage",
    image: "/images/avatar-characters/muffin-mage.webp",    vibe: "Playful",
    personality: "Bakes motivation into every morning.",
    appearance: "Muffin-top hat with a blueberry, a flour-dusted star robe, an oven-mitt wand.",
  },
  {
    title: "Fizz Familiar",
    image: "/images/avatar-characters/fizz-familiar.webp",    vibe: "Playful",
    personality: "Bubbly sidekick, effervescent with ideas.",
    appearance: "Soda-bottle body with rising bubbles, a straw antenna, citrus-slice goggles.",
  },
  {
    title: "Chuckles Champion",
    image: "/images/avatar-characters/chuckles-champion.webp",    vibe: "Playful",
    personality: "Wins every room with warmth and wit.",
    appearance: "Trophy-shaped head, a medal that says \u201cfunniest\u201d, a cape of laugh tracks.",
  },
  // ——— Techy (17) ———
  {
    title: "Pixel Pioneer",
    image: "/images/avatar-characters/pixel-pioneer.webp",    vibe: "Techy",
    personality: "Builds the future one tiny square at a time.",
    appearance: "Body of visible pixels, a frontier hat rendered at 8-bit, blocky boots.",
  },
  {
    title: "Byte Butler",
    image: "/images/avatar-characters/byte-butler.webp",    vibe: "Techy",
    personality: "Serves data with impeccable manners.",
    appearance: "Crisp monochrome suit, a tray of glowing data cubes, a bow tie of fiber-optic cable.",
  },
  {
    title: "Chip Champion",
    image: "/images/avatar-characters/chip-champion.webp",    vibe: "Techy",
    personality: "Small, mighty, runs cool under pressure.",
    appearance: "Silicon-wafer armor, circuit-traced limbs, a heat-sink crown.",
  },
  {
    title: "Vector Voyager",
    image: "/images/avatar-characters/vector-voyager.webp",    vibe: "Techy",
    personality: "Moves in straight lines toward big goals.",
    appearance: "Sleek arrow-shaped silhouette, a compass of bezier curves, razor-pressed lines.",
  },
  {
    title: "Cipher Sleuth",
    image: "/images/avatar-characters/cipher-sleuth.webp",    vibe: "Techy",
    personality: "Loves a mystery; cracks every code.",
    appearance: "Trench coat of shifting glyphs, a magnifier revealing hidden text, a key-shaped tie.",
  },
  {
    title: "Volt Vanguard",
    image: "/images/avatar-characters/volt-vanguard.webp",    vibe: "Techy",
    personality: "High-voltage helper, never runs out of charge.",
    appearance: "Electric-blue jumpsuit with lightning seams; a battery-pack backpack.",
  },
  {
    title: "Kernel Colonel",
    image: "/images/avatar-characters/kernel-colonel.webp",    vibe: "Techy",
    personality: "Commands the core; drills down to basics.",
    appearance: "Military-cut coat of circuit boards; medals shaped like tiny CPUs.",
  },
  {
    title: "Cache Courier",
    image: "/images/avatar-characters/cache-courier.webp",    vibe: "Techy",
    personality: "Remembers everything you asked twice.",
    appearance: "Courier bag stuffed with glowing memory chips; roller skates with LED wheels.",
  },
  {
    title: "Glitch Guide",
    image: "/images/avatar-characters/glitch-guide.webp",    vibe: "Techy",
    personality: "Finds beauty in the bugs; leads through the static.",
    appearance: "Flickering half-there form, a scan-line scarf, one eye a loading spinner.",
  },
  {
    title: "Syntax Sage",
    image: "/images/avatar-characters/syntax-sage.webp",    vibe: "Techy",
    personality: "Speaks precisely, punctuates perfectly.",
    appearance: "Robe of code brackets, a semicolon staff, spectacles with monospace lenses.",
  },
  {
    title: "Hex Hacker",
    image: "/images/avatar-characters/hex-hacker.webp",    vibe: "Techy",
    personality: "Sees the world in base sixteen; acts in base awesome.",
    appearance: "Hoodie patterned with hex dumps, fingerless gloves, a USB lockpick set.",
  },
  {
    title: "Debug Detective",
    image: "/images/avatar-characters/debug-detective.webp",    vibe: "Techy",
    personality: "Hunts the one wrong thing ruining everything.",
    appearance: "Deerstalker hat with a bug net, a magnifier, a notebook of red herrings.",
  },
  {
    title: "Widget Wizard",
    image: "/images/avatar-characters/widget-wizard.webp",    vibe: "Techy",
    personality: "Conjures handy little tools from thin air.",
    appearance: "Toolbelt of tiny gadgets, a hat that's also a toolbox, spring-loaded sleeves.",
  },
  {
    title: "Modem Mystic",
    image: "/images/avatar-characters/modem-mystic.webp",    vibe: "Techy",
    personality: "Connects distant minds across the static.",
    appearance: "Robe of dial tones, a crystal ball showing a handshake, an antennae headband.",
  },
  {
    title: "Servo Sentinel",
    image: "/images/avatar-characters/servo-sentinel.webp",    vibe: "Techy",
    personality: "Precise, tireless guardian of your workflow.",
    appearance: "Brushed-steel frame, glowing joint rings, a chest display showing task status.",
  },
  {
    title: "Qubit Queen",
    image: "/images/avatar-characters/qubit-queen.webp",    vibe: "Techy",
    personality: "Holds many possibilities at once, then picks the best.",
    appearance: "A shimmering superposition gown that's two colors until observed; a crown of entangled gems.",
  },
  {
    title: "Bandwidth Baron",
    image: "/images/avatar-characters/bandwidth-baron.webp",    vibe: "Techy",
    personality: "Moves mountains of data without breaking a sweat.",
    appearance: "Broad-shouldered coat of fiber strands, a pipeline staff, gauges on the cuffs.",
  },
  // ——— Elegant (16) ———
  {
    title: "Aurelia Aria",
    image: "/images/avatar-characters/aurelia-aria.webp",    vibe: "Elegant",
    personality: "Sings through tasks with golden grace.",
    appearance: "Gown of woven sunlight, a voice like warm honey, a diadem of dawn.",
  },
  {
    title: "Seraphina Swan",
    image: "/images/avatar-characters/seraphina-swan.webp",    vibe: "Elegant",
    personality: "Glides above drama; lands softly on solutions.",
    appearance: "Feathered ivory cloak, a long graceful neck, a ripple where she walks.",
  },
  {
    title: "Evander Elm",
    image: "/images/avatar-characters/evander-elm.webp",    vibe: "Elegant",
    personality: "Old-soul steadiness with deep roots.",
    appearance: "Bark-textured tailored suit, leaf cufflinks, a walking stick of polished oak.",
  },
  {
    title: "Lysander Light",
    image: "/images/avatar-characters/lysander-light.webp",    vibe: "Elegant",
    personality: "Brings clarity like morning through tall windows.",
    appearance: "Pale gold robes, a prism pendant, hair like spun glass.",
  },
  {
    title: "Caspian Count",
    image: "/images/avatar-characters/caspian-count.webp",    vibe: "Elegant",
    personality: "Navigates complexity like deep water.",
    appearance: "Sea-green velvet coat, a wave-crested signet ring, salt-spray at the cuffs.",
  },
  {
    title: "Isolde Ivory",
    image: "/images/avatar-characters/isolde-ivory.webp",    vibe: "Elegant",
    personality: "Quiet brilliance; never needs the spotlight.",
    appearance: "Ivory tower-gown, a single pearl earring, hands folded like a sonnet.",
  },
  {
    title: "Peregrine Poet",
    image: "/images/avatar-characters/peregrine-poet.webp",    vibe: "Elegant",
    personality: "Travels far for the perfect phrase.",
    appearance: "Falcon-feather cloak, a leather journal, ink-stained fingertips.",
  },
  {
    title: "Vivienne Velvet",
    image: "/images/avatar-characters/vivienne-velvet.webp",    vibe: "Elegant",
    personality: "Turns ordinary days into occasions.",
    appearance: "Deep plum velvet dress, a champagne smile, gloves to the elbow.",
  },
  {
    title: "Ophelia Opal",
    image: "/images/avatar-characters/ophelia-opal.webp",    vibe: "Elegant",
    personality: "Dreamy depth with hidden fire.",
    appearance: "Opalescent gown shifting color as she moves, a faraway gaze, a water-lily hairpin.",
  },
  {
    title: "Dorian Dusk",
    image: "/images/avatar-characters/dorian-dusk.webp",    vibe: "Elegant",
    personality: "Charming, a little mysterious after hours.",
    appearance: "Twilight-purple smoking jacket, a pocket watch stopped at sunset, a knowing smile.",
  },
  {
    title: "Odette Orchid",
    image: "/images/avatar-characters/odette-orchid.webp",    vibe: "Elegant",
    personality: "Blooms under pressure; wilts at rudeness.",
    appearance: "Orchid-petal dress, a greenhouse scent, dewdrop earrings.",
  },
  {
    title: "Margot Muse",
    image: "/images/avatar-characters/margot-muse.webp",    vibe: "Elegant",
    personality: "Inspires simply by being in the room.",
    appearance: "Classic black sheath dress, a red lip, a sketchbook never far away.",
  },
  {
    title: "Hugo Harbor",
    image: "/images/avatar-characters/hugo-harbor.webp",    vibe: "Elegant",
    personality: "Safe harbor in every storm of tasks.",
    appearance: "Navy captain's coat, a brass telescope, steady lighthouse eyes.",
  },
  {
    title: "Elodie Ember",
    image: "/images/avatar-characters/elodie-ember.webp",    vibe: "Elegant",
    personality: "Warm glow that never burns out.",
    appearance: "Ember-orange silk wrap, candlelight in her gaze, a hearth-stone brooch.",
  },
  {
    title: "Soren Snow",
    image: "/images/avatar-characters/soren-snow.webp",    vibe: "Elegant",
    personality: "Cool clarity; every word precisely placed.",
    appearance: "White-on-white winter tailoring, frost-crystal cufflinks, breath like mist.",
  },
  {
    title: "Freya Falcon",
    image: "/images/avatar-characters/freya-falcon.webp",    vibe: "Elegant",
    personality: "Fierce grace; hunts down loose ends.",
    appearance: "Bronze winged circlet, a hunter's green cloak, eyes that miss nothing.",
  },
];

/**
 * How to apply a name + character in each assistant app. Steps are grounded
 * in our guides: Muse AI's avatar personalization (Jolly guide), Dots'
 * profile pencil icon (dots guide), Grok Bot's blob-style avatars (compare
 * guide — check the app's profile/settings for what's customizable).
 */
export interface ApplyGuide {
  app: string;
  blurb: string;
  steps: string[];
}

export const AVATAR_APPLY_GUIDES: ApplyGuide[] = [
  {
    app: "Muse AI",
    blurb:
      "Muse lets you rename it and redesign its avatar — Jolly is just the default.",
    steps: [
      "Open your avatar or profile settings in the Muse app.",
      "Tap the name field and type the name you picked in the studio.",
      "Open the avatar designer and rebuild the look from your character's appearance notes.",
      "Save — your new name and face apply across chats.",
    ],
  },
  {
    app: "ChatGPT Dots",
    blurb:
      "Each dot has a profile where you can change its name, avatar character, or pet.",
    steps: [
      "Open your dot's profile (the pencil icon).",
      "Change the name — the handle becomes @yourname-agentname.",
      "Pick a new avatar character or pet from the available options.",
      "Save; the dot keeps the new identity in every chat.",
    ],
  },
  {
    app: "Grok Bot",
    blurb:
      "Grok Bot ships with blob-style avatars — check the app for what's customizable.",
    steps: [
      "Open the Grok Bot app's profile or settings area.",
      "Look for name and appearance or avatar options.",
      "Enter your studio name and use the character notes as your design brief.",
      "Save — availability of each option varies by app version.",
    ],
  },
];
