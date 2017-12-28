(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};

var bingoList = [];

bingoList[1] = [
  { name: "Bunny Amulet", types: ["Amulet","Ch2",] },
  { name: "Bunny Whirl", types: ["Whirl","Hammer",] },
  { name: "Hammer Wave", types: ["Wave","Hammer",] },
  { name: "Lv.2 Speed Boost", types: ["Speed Boost",] },
  { name: "Soul Heart", types: ["Soul Heart",] },
  { name: "Healing Staff", types: ["Green",] },
  { name: "Quick Barrette", types: ["Barrette",] },
  { name: "Auto Earrings", types: ["Earrings",] },
  { name: "Hold 3 Rumi Donuts at Once", types: ["Donut",] },
  { name: "Mana Surge Badge", types: ["Mana Surge",] },
  { name: "ATK Trade Badge", types: ["ATK Trade",] },
  { name: "Carrot Boost Badge", types: ["Carrot Boost",] },
  { name: "Weaken Badge", types: ["Weaken",] },
  { name: "Lucky Seven Badge", types: ["Lucky Seven",] },
  { name: "Toxic Strike Badge", types: ["Toxic Strike",] },
  { name: "Recruit Rita", types: ["Rita",] },
  { name: "Recruit Cicini", types: ["Cicini",] },
  { name: "Recruit Vanilla", types: ["Vanilla",] },
  { name: "Defeat Rita", types: ["Rita",] },
  { name: "Defeat Illusion Alius I", types: ["Alius","Ch2",] },
  { name: "Log the Speed Down debuff", types: ["Cicini",] },
  { name: "Log the Numb debuff", types: ["Numb",] },
  { name: "Log the Poisoned debuff", types: ["Poisoned",] },
  { name: "Log the Attack Down debuff", types: ["Alius","Nieve",] },
  { name: "Log the Defense Down debuff", types: ["Alius","Nixie",] },
  { name: "Log the Defense Drop debuff", types: ["Cicini",] },
  { name: "Hear ♪ Underwater Ambient", types: ["Northern Tundra",] },
  { name: "Hear ♪ Library Ambient", types: ["Western Coast",] },
  { name: "Hear ♪ Nightwalker", types: ["Southern Woodland",] },
  { name: "Hear ♪ Inside UPRPRC", types: ["Island Core",] },
  { name: "Hear ♪ Golden Riverbank", types: ["Eastern Highlands",] },
  { name: "Hear ♪ Floating Graveyard", types: ["Western Coast",] },
  { name: "Hear ♪ Sky-High Bridge", types: ["Island Core",] },
  { name: "Hear ♪ Warp Destination", types: ["Warp Destination",] },
  { name: "Hear ♪ Icy Summit", types: ["Northern Tundra",] },
  { name: "Hear ♪ Melting Point", types: ["Rita","Lilith",] },
  { name: "Hear ♪ Sandbag Mini Game", types: ["Island Core",] },
  { name: "Hear ♪ Hi-Tech Duel", types: ["Cicini","Syaro",] },
  { name: "Hear ♪ Kitty Attack", types: ["Vanilla","Chocolate","Saya","Seana",] },
  { name: "Hear ♪ Sudden Death", types: ["Alius",] },
  { name: "5% Item", types: ["Collection",] },
];
bingoList[2] = [
  { name: "Lv.2 Bunny Amulet", types: ["Amulet","Ch2",] },
  { name: "Super Carrot", types: ["Super Carrot","Carrot Bomb",] },
  { name: "Sliding Powder", types: ["Slide","Lab",] },
  { name: "Hourglass", types: ["Hourglass","Carrot Bomb","Pandora",] },
  { name: "Max Bracelet", types: ["Bracelet",] },
  { name: "ATK and DEF Trade Badges", types: ["ATK Trade","DEF Trade",] },
  { name: "Recruit Chocolate", types: ["Chocolate",] },
  { name: "Defeat Holo-Defense System (Rainbow Maid)", types: ["Cicini","Lab","Rainbow Maid",] },
  { name: "Defeat UPRPRC Starting Forest Night", types: ["UPRPRC",] },
  { name: "Visit the computer room in Exotic Lab", types: ["Cicini","Lab",] },
  { name: "5 Health Up Potions", types: ["Health Up",] },
  { name: "4 Easter Eggs", types: ["Eggs",] },
  { name: "10 Warp Stones", types: ["Warp Stone",] },
  { name: "Hear ♪ Exotic Laboratory", types: ["Eastern Highlands",] },
  { name: "Equip at least 4 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
];
bingoList[3] = [
  { name: "Bunny Strike", types: ["Slide","Bunny Strike",] },
  { name: "Lv.2 Bunny Strike", types: ["Slide","Bunny Strike",] },
  { name: "Wall Jump", types: ["Slide","Wall Jump",] },
  { name: "Rainbow Shot", types: ["Rainbow","Eggs",] },
  { name: "Book of Carrot", types: ["Book",] },
  { name: "ATK Grow Badge", types: ["ATK Grow",] },
  { name: "Arm Strength Badge", types: ["Arm Strength",] },
  { name: "Armored Badge", types: ["Armored",] },
  { name: "Mana Wager Badge", types: ["Mana Wager",] },
  { name: "5 Badges", types: ["Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Recruit Pandora", types: ["Pandora",] },
  { name: "Defeat Shadow Rita", types: ["Nixie",] },
  { name: "Defeat Mr. Big Box", types: ["Cicini","Slide","Lab","Big Box",] },
  { name: "Defeat All 3 UPRPRC Hideout Bosses", types: ["UPRPRC",] },
  { name: "Purchase the Defense Up Buff", types: ["Defense Up Buff","Rita",] },
  { name: "Recruit 3 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "5 Mana Up Potions", types: ["Mana Up",] },
  { name: "5 Pack Up Potions", types: ["Pack Up",] },
  { name: "5 Attack Up Potions", types: ["Attack Up",] },
  { name: "Have an S rank or higher shown on the Town menu", types: ["Boss",] },
  { name: "Have an SS rank or higher shown on the Town menu", types: ["Boss",] },
  { name: "Hear ♪ Plurkwood", types: ["Plurkwood",] },
  { name: "Hear ♪ Midboss Battle", types: ["Big Box","Rainbow Maid","Robot Maids","Crystals",] },
  { name: "Hear ♪ Brawl Breaks Ver.2", types: ["Ashuri","Kotri",] },
  { name: "Hear ♪ Full On Combat", types: ["Lilith","Aruraune","Pandora",] },
];
bingoList[4] = [
  { name: "Light Orb", types: ["Slide","Light Orb",] },
  { name: "Lv.3 Bunny Strike", types: ["Slide","Bunny Strike",] },
  { name: "Explode Shot", types: ["Red","Ashuri",] },
  { name: "Charge Ring", types: ["Ring","Cocoa",] },
  { name: "Plus Necklace", types: ["Necklace",] },
  { name: "Lv.2 Auto Earrings", types: ["Earrings",] },
  { name: "Health Surge Badge", types: ["Health Surge",] },
  { name: "Stamina Plus Badge", types: ["Stamina Plus",] },
  { name: "Cashback Badge", types: ["Cashback",] },
  { name: "ATK and DEF Grow Badges", types: ["ATK Grow","DEF Grow",] },
  { name: "Defeat Blue Kotri", types: ["Kotri Fight",] },
  { name: "Defeat UPRPRC Evernight Peak", types: ["UPRPRC",] },
  { name: "Purchase the Speedy Buff", types: ["Speedy Buff","Cicini",] },
  { name: "Purchase the MaxHP Up Buff", types: ["MaxHP Buff","Chocolate",] },
  { name: "Purchase the MaxMP Up Buff", types: ["MaxMP Buff","Vanilla",] },
  { name: "Log the Bunny Lover buff", types: ["Eggs","Miru",] },
  { name: "5 Regen Up Potions", types: ["Regen Up",] },
  { name: "5 Health Up and 5 Mana Up", types: ["Health Up","Mana Up",] },
  { name: "All 3 Island Core Warp Stones", types: ["Island Core","Warp Stone",] },
  { name: "Hear ♪ Sky Island Town", types: ["Western Coast",] },
  { name: "Hear ♪ Evernight Peak", types: ["Eastern Highlands",] },
  { name: "Have at least 200 max HP", types: ["Health Up","MaxHP Buff","Health Plus","Health Surge","Mana Wager",] },
  { name: "Nixie Egg", types: ["Eggs","Nixie",] },
];
bingoList[5] = [
  { name: "Nature Orb", types: ["Aruraune","Nature Orb",] },
  { name: "Lv.3 Speed Boost", types: ["Speed Boost",] },
  { name: "Chaos Rod", types: ["Purple","Pandora",] },
  { name: "Lv.2 Plus Necklace", types: ["Necklace",] },
  { name: "Carrot Bomb, Super Carrot, and Hourglass", types: ["Carrot Bomb","Super Carrot","Hourglass",] },
  { name: "Hold 3 Rumi Cakes at Once", types: ["Cake",] },
  { name: "Self-Defense Badge", types: ["Self-Defense",] },
  { name: "Hex Cancel Badge", types: ["Hex Cancel",] },
  { name: "Frame Cancel Badge", types: ["Frame Cancel",] },
  { name: "Health Plus and Surge Badges", types: ["Health Plus","Health Surge",] },
  { name: "Arm Strength and Carrot Boost Badges", types: ["Arm Strength","Carrot Boost",] },
  { name: "Recruit Saya", types: ["Saya",] },
  { name: "Recruit Cocoa", types: ["Cocoa","Green Kotri",] },
  { name: "Recruit Aruraune", types: ["Aruraune",] },
  { name: "Recruit Chocolate and Vanilla", types: ["Chocolate","Vanilla",] },
  { name: "Defeat Ashuri II", types: ["Ashuri",] },
  { name: "Defeat Illusion Alius II", types: ["Alius","Ch3",] },
  { name: "Defeat GemaYue", types: ["Ch4",] },
  { name: "Purchase the Arrest Buff", types: ["Arrest Buff","Pandora",] },
  { name: "Log the Cursed debuff", types: ["Purple",] },
  { name: "Log the Burn debuff", types: ["Red","Kotri",] },
  { name: "Log the Shrink debuff", types: ["Alius","Ashuri",] },
  { name: "Log the Hex Cancel buff", types: ["Hex Cancel","Ch4",] },
  { name: "Log the Survival Instinct buff", types: ["Survival","Ch3",] },
  { name: "10 Health Up Potions", types: ["Health Up",] },
  { name: "All 5 Southern Woodland Health Up Potions", types: ["Southern Woodland","Health Up",] },
  { name: "All 3 Western Coast Attack Up Potions", types: ["Western Coast","Attack Up",] },
  { name: "10 Island Core items", types: ["Island Core","Collection",] },
  { name: "All 4 Island Core Health Up Potions", types: ["Island Core","Health Up",] },
  { name: "All 4 Northern Tundra Warp Stones", types: ["Northern Tundra","Warp Stone",] },
  { name: "10 Eastern Highlands items", types: ["Eastern Highlands","Collection",] },
  { name: "All 3 Eastern Highlands Warp Stones", types: ["Eastern Highlands","Warp Stone",] },
  { name: "Hear ♪ Aurora Palace", types: ["Northern Tundra",] },
  { name: "Hear ♪ Volcanic Canerns", types: ["Subterranean Area",] },
  { name: "Use at least 20 PP", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Equip at least 5 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Have at least 100 max MP", types: ["Mana Up","MaxMP Buff","Mana Plus","Mana Surge","Health Wager",] },
  { name: "Defeat a Lv.10 or higher boss", types: ["Boss",] },
  { name: "10% Item", types: ["Collection",] },
  { name: "Saya's Pillar Egg", types: ["Eggs","Saya",] },
  { name: "CreSpirit Base Egg", types: ["Eggs","Ch4",] },
];
bingoList[6] = [
  { name: "Fire Orb", types: ["Subterranean Area","Fire Orb",] },
  { name: "Lv.3 Bunny Amulet", types: ["Amulet","Ch2",] },
  { name: "Air Dash", types: ["Slide","Air Dash",] },
  { name: "Spike Barrier", types: ["Slide","Spike",] },
  { name: "Weaken and Self-Defense Badges", types: ["Weaken","Self-Defense",] },
  { name: "Hex Cancel and Lucky Seven Badges", types: ["Hex Cancel","Lucky Seven",] },
  { name: "Defeat Aruraune", types: ["Aruraune",] },
  { name: "Defeat Illusion Alius III", types: ["Alius","Ch4",] },
  { name: "Purchase the HP Regen Buff", types: ["HP Regen Buff","Aruraune",] },
  { name: "Purchase the Giant Buff", types: ["Giant Buff","Saya",] },
  { name: "Log the Freeze debuff", types: ["Nixie","Nieve",] },
  { name: "Recruit 4 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "10 Mana Up Potions", types: ["Mana Up",] },
  { name: "10 Southern Woodland items", types: ["Southern Woodland","Collection",] },
  { name: "1 Subterranean Area Warp Stone", types: ["Subterranean Area","Warp Stone",] },
  { name: "15 Warp Stones", types: ["Warp Stone",] },
  { name: "Hear ♪ Deep Under the Sea", types: ["Northern Tundra",] },
];
bingoList[7] = [
  { name: "Lv.2 Wall Jump", types: ["Slide","Wall Jump",] },
  { name: "Hammer Roll", types: ["Whirl","Roll","Hammer",] },
  { name: "Lv.2 Charge Ring", types: ["Ring","Cocoa",] },
  { name: "Healing Staff, Soul Heart, Book of Carrot, and Max Bracelet", types: ["Green","Soul Heart","Book","Bracelet",] },
  { name: "Mana Plus Badge", types: ["Mana Plus",] },
  { name: "Defeat Nieve", types: ["Water Orb",] },
  { name: "Defeat Shadow Pandora", types: ["Pandora",] },
  { name: "Log the Stunned debuff", types: ["Alius",] },
  { name: "All 3 Southern Woodland Regen Up Potions", types: ["Southern Woodland","Regen Up",] },
  { name: "10 Western Coast items", types: ["Western Coast","Collection",] },
  { name: "All 3 Island Core Regen Up Potions", types: ["Island Core","Regen Up",] },
  { name: "Have an SSS rank or higher shown on the Town menu", types: ["Boss",] },
  { name: "Hear ♪ Bounce Bounce", types: ["Nieve","Nixie","Keke Bunny","Seana",] },
  { name: "Volcanic Caverns Shaft Egg", types: ["Eggs",] },
];
bingoList[8] = [
  { name: "Water Orb", types: ["Water Orb",] },
  { name: "Lv.2 Air Dash", types: ["Slide","Air Dash",] },
  { name: "Lv.3 Plus Necklace", types: ["Necklace",] },
  { name: "Lv.3 Auto Earrings", types: ["Earrings",] },
  { name: "Recruit Rita and Saya", types: ["Rita","Saya",] },
  { name: "10 Attack Up Potions", types: ["Attack Up",] },
  { name: "8 Easter Eggs", types: ["Eggs",] },
  { name: "All 3 Southern Woodland Pack Up Potions", types: ["Southern Woodland","Pack Up",] },
  { name: "15 Western Coast items", types: ["Western Coast","Collection",] },
  { name: "All 6 Western Coast Mana Up Potions", types: ["Western Coast","Mana Up",] },
  { name: "15 Island Core items", types: ["Island Core","Collection",] },
  { name: "All 4 Island Core Attack Up Potions", types: ["Island Core","Attack Up",] },
  { name: "All 4 Eastern Highlands Health Up Potions", types: ["Eastern Highlands","Health Up",] },
];
bingoList[9] = [
  { name: "Air Jump", types: ["Air Jump","System Interior","Cicini","Syaro",] },
  { name: "Quick Barrette, Charge Ring, Plus Necklace, and Auto Earrings", types: ["Barrette","Ring","Necklace","Earrings",] },
  { name: "Pure Love Badge", types: ["Pure Love",] },
  { name: "Top Form Badge", types: ["Top Form",] },
  { name: "Tough Skin Badge", types: ["Tough Skin","Ashuri","Crystals",] },
  { name: "10 Badges", types: ["Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Recruit Ashuri", types: ["Ashuri",] },
  { name: "Defeat Seana I", types: ["Seana",] },
  { name: "Defeat Shadow Rita and Shadow Pandora", types: ["Pandora","Nixie",] },
  { name: "Defeat Robot Maids", types: ["System Interior","Robot Maids",] },
  { name: "Defeat Rainbow Crystals", types: ["Ashuri","Crystals",] },
  { name: "Purchase 3 Buffs at Once", types: ["Attack Up Buff","Defense Up Buff","Arrest Buff","Speedy Buff","MaxHP Buff","MaxMP Buff","Amulet Cut Buff","HP Regen Buff","MP Regen Buff","Give ATK Down Buff","Give DEF Down Buff","Shrink Buff","Giant Buff",] },
  { name: "Log the Null Melee buff", types: ["System Interior",] },
  { name: "Log the Null Slow buff", types: ["Pandora",] },
  { name: "15 Health Up Potions", types: ["Health Up",] },
  { name: "10 Regen Up Potions", types: ["Regen Up",] },
  { name: "5 Regen Up and 5 Pack Up", types: ["Regen Up","Pack Up",] },
  { name: "4 Health, Mana, Regen, Pack, Attack Up", types: ["Health Up","Mana Up","Regen Up","Pack Up","Attack Up",] },
  { name: "15 Southern Woodland items", types: ["Southern Woodland","Collection",] },
  { name: "All 6 Southern Woodland Mana Up Potions", types: ["Southern Woodland","Mana Up",] },
  { name: "10 Northern Tundra items", types: ["Northern Tundra","Collection",] },
  { name: "Have a MAX rank shown on the Town menu", types: ["Boss",] },
  { name: "Hear ♪ cyberspace.exe", types: ["System Interior",] },
  { name: "Equip at least 6 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Have at least 350 max HP", types: ["Health Up","MaxHP Buff","Health Plus","Health Surge","Mana Wager",] },
  { name: "Have at least 125 max MP", types: ["Mana Up","MaxMP Buff","Mana Plus","Mana Surge","Health Wager",] },
  { name: "Defeat a Lv.15 or higher boss", types: ["Boss",] },
  { name: "15% Item", types: ["Collection",] },
  { name: "System Interior Egg", types: ["Eggs",] },
];
bingoList[10] = [
  { name: "Lv.2 Super Carrot", types: ["Super Carrot","Carrot Bomb",] },
  { name: "Lv.3 Air Dash", types: ["Slide","Air Dash",] },
  { name: "Lv.2 Bunny Whirl", types: ["Whirl","Hammer",] },
  { name: "Lv.2 Hammer Roll", types: ["Whirl","Roll","Hammer",] },
  { name: "Lv.2 Hammer Wave", types: ["Wave","Hammer",] },
  { name: "Crisis Boost Badge", types: ["Crisis Boost",] },
  { name: "Survival Badge", types: ["Survival",] },
  { name: "Mana Plus and Surge Badges", types: ["Mana Plus","Mana Surge",] },
  { name: "Recruit Kotri", types: ["Kotri",] },
  { name: "Recruit Cocoa, Chocolate, and Vanilla", types: ["Cocoa","Chocolate","Vanilla","Green Kotri",] },
  { name: "Defeat All 3 Otaku Battles", types: ["Ch4",] },
  { name: "20 Western Coast items", types: ["Western Coast","Collection",] },
  { name: "All 5 Western Coast Health Up Potions", types: ["Western Coast","Health Up",] },
  { name: "All 4 Western Coast Warp Stones", types: ["Western Coast","Warp Stone",] },
  { name: "All 4 Island Core Mana Up Potions", types: ["Island Core","Mana Up",] },
  { name: "All 4 Northern Tundra Mana Up Potions", types: ["Northern Tundra","Mana Up",] },
  { name: "All 2 Northern Tundra Pack Up Potions", types: ["Northern Tundra","Pack Up",] },
  { name: "7 Northern Tundra Easter Eggs", types: ["Northern Tundra","Eggs",] },
  { name: "4 Eastern Highlands Easter Eggs", types: ["Eastern Highlands","Eggs",] },
];
bingoList[11] = [
  { name: "Lv.2 Fire Orb", types: ["Subterranean Area","Fire Orb",] },
  { name: "Lv.2 Nature Orb", types: ["Aruraune","Nature Orb",] },
  { name: "Lv.2 Piko Hammer", types: ["Hammer",] },
  { name: "Lv.2 Carrot Bomb", types: ["Carrot Bomb",] },
  { name: "Lv.2 Sliding Powder", types: ["Slide",] },
  { name: "Lv.3 Wall Jump", types: ["Slide","Wall Jump",] },
  { name: "Lv.2 Spike Barrier", types: ["Slide","Spike",] },
  { name: "Lv.3 Charge Ring", types: ["Ring","Cocoa",] },
  { name: "Obtain a Gold Carrot", types: ["Gold Carrot",] },
  { name: "Obtain a Cocoa Bomb", types: ["Cocoa Bomb","Cocoa",] },
  { name: "Kill a house", types: ["Cocoa Bomb",] },
  { name: "Kill Cicini's Desk", types: ["Cocoa Bomb","Cicini",] },
  { name: "Kill a Thwomp", types: ["Cocoa Bomb",] },
  { name: "Kill a spring board", types: ["Cocoa Bomb",] },
  { name: "Recruit Syaro", types: ["Cicini","Syaro","System Interior",] },
  { name: "Recruit Nieve and Nixie", types: ["Nixie",] },
  { name: "Defeat Lilith I", types: ["Lilith",] },
  { name: "Purchase the Amulet Cut Buff", types: ["Amulet Cut Buff","Kotri",] },
  { name: "Purchase the Give DEF Down Buff", types: ["Give DEF Down Buff","Nieve",] },
  { name: "Purchase the Shrink Buff", types: ["Shrink Buff","Ashuri",] },
  { name: "Purchase 4 Buffs at Once", types: ["Attack Up Buff","Defense Up Buff","Arrest Buff","Speedy Buff","MaxHP Buff","MaxMP Buff","Amulet Cut Buff","HP Regen Buff","MP Regen Buff","Give ATK Down Buff","Give DEF Down Buff","Shrink Buff","Giant Buff",] },
  { name: "Recruit 5 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "15 Mana Up Potions", types: ["Mana Up",] },
  { name: "All 3 Western Coast Pack Up Potions", types: ["Western Coast","Pack Up",] },
  { name: "5 Western Coast Easter Eggs", types: ["Western Coast","Eggs",] },
  { name: "15 Eastern Highlands items", types: ["Eastern Highlands","Collection",] },
  { name: "All 4 Eastern Highlands Mana Up Potions", types: ["Eastern Highlands","Mana Up",] },
  { name: "All 4 Eastern Highlands Pack Up Potions", types: ["Eastern Highlands","Pack Up",] },
];
bingoList[12] = [
  { name: "Lv.2 Water Orb", types: ["Water Orb",] },
  { name: "Lv.2 Light Orb", types: ["Slide","Light Orb",] },
  { name: "Sunny Beam, Chaos Rod, Healing Staff, Explode Shot, and Rainbow Shot", types: ["Yellow","Purple","Green","Red","Rainbow",] },
  { name: "Health Wager Badge", types: ["Health Wager",] },
  { name: "Defeat Pink Kotri", types: ["Kotri","Kotri Fight",] },
  { name: "Defeat Syaro", types: ["Cicini","Syaro","System Interior",] },
  { name: "Defeat Nixie", types: ["Nixie",] },
  { name: "Defeat All 7 UPRPRC Battles", types: ["UPRPRC",] },
  { name: "End with 30000 EN", types: ["Money",] },
  { name: "Purchase the Give ATK Down Buff", types: ["Give ATK Down Buff","Nixie",] },
  { name: "10 Health Up and 10 Mana Up", types: ["Health Up","Mana Up",] },
  { name: "15 Northern Tundra items", types: ["Northern Tundra","Collection",] },
  { name: "4 Subterranean Area Easter Eggs", types: ["Subterranean Area","Eggs",] },
  { name: "18 Warp Stones", types: ["Warp Stone",] },
  { name: "Use at least 30 PP", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Get a High-Score above 3000 on the sandbag", types: ["Sandbag",] },
  { name: "Halloween Warp Zone Egg", types: ["Eggs",] },
];
bingoList[13] = [
  { name: "Strange Box", types: ["Syaro",] },
  { name: "ATK Trade, Crisis Boost, and Arm Strength Badges", types: ["ATK Trade","Crisis Boost","Arm Strength",] },
  { name: "10 Pack Up Potions", types: ["Pack Up",] },
  { name: "12 Easter Eggs", types: ["Eggs",] },
  { name: "20 Southern Woodland items", types: ["Southern Woodland","Collection",] },
  { name: "20 Island Core items", types: ["Island Core","Collection",] },
  { name: "7 Island Core Easter Eggs", types: ["Island Core","Eggs",] },
  { name: "All 3 Northern Tundra Regen Up Potions", types: ["Northern Tundra","Regen Up",] },
  { name: "20 Eastern Highlands items", types: ["Eastern Highlands","Collection",] },
  { name: "All 3 Eastern Highlands Regen Up Potions", types: ["Eastern Highlands","Regen Up",] },
  { name: "All 6 Eastern Highlands Attack Up Potions", types: ["Eastern Highlands","Attack Up",] },
  { name: "Have 2 MAX ranks shown on the Town menu", types: ["Boss",] },
  { name: "Equip at least 7 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Have at least 150 max MP", types: ["Mana Up","MaxMP Buff","Mana Plus","Mana Surge","Health Wager",] },
];
bingoList[14] = [
  { name: "Lv.3 Fire Orb", types: ["Subterranean Area","Fire Orb",] },
  { name: "Lv.3 Piko Hammer", types: ["Hammer",] },
  { name: "Lv.3 Carrot Bomb", types: ["Carrot Bomb",] },
  { name: "Lv.3 Sliding Powder", types: ["Slide",] },
  { name: "Lv.3 Hammer Roll", types: ["Whirl","Roll","Hammer",] },
  { name: "Lv.3 Hammer Wave", types: ["Wave","Hammer",] },
  { name: "Lv.3 Spike Barrier", types: ["Slide","Spike",] },
  { name: "Fire, Water, Nature, and Light Orbs", types: ["Fire Orb","Water Orb","Nature Orb","Light Orb",] },
  { name: "Health and Mana Wager Badges", types: ["Health Wager","Mana Wager",] },
  { name: "Recruit 6 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "8 Southern Woodland Easter Eggs", types: ["Southern Woodland","Eggs",] },
  { name: "6 System Interior items", types: ["System Interior","Collection",] },
  { name: "Have at least 500 max HP", types: ["Health Up","MaxHP Buff","Health Plus","Health Surge","Mana Wager",] },
  { name: "20% Item", types: ["Collection",] },
];
bingoList[15] = [
  { name: "Lv.3 Super Carrot", types: ["Super Carrot","Carrot Bomb",] },
  { name: "Lv.3 Bunny Whirl", types: ["Whirl","Hammer",] },
  { name: "Defeat Plurkwood's Twin Cats", types: ["Plurkwood",] },
  { name: "Purchase 5 Buffs at Once", types: ["Attack Up Buff","Defense Up Buff","Arrest Buff","Speedy Buff","MaxHP Buff","MaxMP Buff","Amulet Cut Buff","HP Regen Buff","MP Regen Buff","Give ATK Down Buff","Give DEF Down Buff","Shrink Buff","Giant Buff",] },
  { name: "5 Health, Mana, Regen, Pack, Attack Up", types: ["Health Up","Mana Up","Regen Up","Pack Up","Attack Up",] },
  { name: "75% Southern Woodland Map", types: ["Southern Woodland","Map",] },
  { name: "All 3 Plurkwood Easter Eggs", types: ["Plurkwood","Eggs",] },
  { name: "Defeat a Lv.20 or higher boss", types: ["Boss",] },
];
bingoList[16] = [
  { name: "Lv.3 Water Orb", types: ["Water Orb",] },
  { name: "Lv.3 Nature Orb", types: ["Aruraune","Nature Orb",] },
  { name: "Lv.3 Light Orb", types: ["Slide","Light Orb",] },
  { name: "P Hairpin", types: ["P Hairpin","Plurkwood",] },
  { name: "Slide Powder, Air Jump, Air Dash, and Wall Jump", types: ["Slide","Air Jump","Air Dash","Wall Jump",] },
  { name: "Top Form and Tough Skin Badges", types: ["Top Form","Tough Skin",] },
  { name: "Recruit Lilith", types: ["Cicini","Lilith",] },
  { name: "Recruit Keke Bunny", types: ["Keke Bunny","Plurkwood",] },
  { name: "Recruit Kotri and Pandora", types: ["Kotri","Pandora",] },
  { name: "End with 40000 EN", types: ["Money",] },
  { name: "20 Health Up Potions", types: ["Health Up",] },
  { name: "15 Attack Up Potions", types: ["Attack Up",] },
];
bingoList[17] = [
  { name: "Hold 4 Cocoa Bombs at Once", types: ["Cocoa Bomb","Cocoa",] },
  { name: "Recruit Ashuri, Pandora, and Rita", types: ["Ashuri","Pandora","Rita",] },
  { name: "Recruit Nieve, Nixie, and Cocoa", types: ["Cocoa","Nieve","Nixie","Green Kotri",] },
  { name: "Purchase the MP Regen Buff", types: ["MP Regen Buff","Lilith",] },
  { name: "25 Western Coast items", types: ["Western Coast","Collection",] },
  { name: "40% System Interior Map", types: ["System Interior","Map",] },
  { name: "Equip at least 8 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
];
bingoList[18] = [
  { name: "20 Mana Up Potions", types: ["Mana Up",] },
  { name: "15 Regen Up Potions", types: ["Regen Up",] },
  { name: "16 Easter Eggs", types: ["Eggs",] },
  { name: "25 Southern Woodland items", types: ["Southern Woodland","Collection",] },
  { name: "25 Eastern Highlands items", types: ["Eastern Highlands","Collection",] },
  { name: "70% Eastern Highlands Map", types: ["Eastern Highlands","Map",] },
  { name: "100% Plurkwood Map", types: ["Plurkwood","Map",] },
  { name: "Have at least 175 max MP", types: ["Mana Up","MaxMP Buff","Mana Plus","Mana Surge","Health Wager",] },
];
bingoList[19] = [
  { name: "15 Badges", types: ["Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "60% Western Coast Map", types: ["Western Coast","Map",] },
  { name: "Use at least 40 PP", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "All 5 Northern Tundra Health Up Potions", types: ["Northern Tundra","Health Up",] },
];
bingoList[20] = [
  { name: "Get a High-Score above 4000 on the sandbag", types: ["Sandbag",] },
  { name: "Lv.2 P Hairpin", types: ["P Hairpin","Plurkwood",] },
  { name: "Recruit 7 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "Defeat a Lv.25 or higher boss", types: ["Boss",] },
];
bingoList[21] = [
  { name: "Have at least 600 max HP", types: ["Health Up","MaxHP Buff","Health Plus","Health Surge","Mana Wager",] },
  { name: "25% Item", types: ["Collection",] },
  { name: "Recruit Aruraune and Lilith", types: ["Aruraune","Lilith",] },
  { name: "20 Attack Up Potions", types: ["Attack Up",] },
];
bingoList[22] = [
  { name: "All 5 Northern Tundra Attack Up Potions", types: ["Northern Tundra","Attack Up",] },
  { name: "End with 50000 EN", types: ["Money",] },
  { name: "15 Pack Up Potions", types: ["Pack Up",] },
  { name: "75% Western Coast Map", types: ["Western Coast","Map","Halloween",] },
];
bingoList[23] = [
  { name: "Lv.3 P Hairpin", types: ["P Hairpin","Plurkwood",] },
  { name: "20 Easter Eggs", types: ["Eggs",] },
  { name: "10 Western Coast Easter Eggs", types: ["Western Coast","Eggs","Halloween",] },
  { name: "70% Northern Tundra Map", types: ["Northern Tundra","Map",] },
];
bingoList[24] = [
  { name: "15 Health Up and 15 Mana Up", types: ["Health Up","Mana Up",] },
  { name: "6 Health, Mana, Regen, Pack, Attack Up", types: ["Health Up","Mana Up","Regen Up","Pack Up","Attack Up",] },
  { name: "20 Northern Tundra items", types: ["Northern Tundra","Collection",] },
  { name: "Equip at least 9 Badges", types: ["Pack Up","Health Plus","Health Surge","Mana Plus","Mana Surge","Crisis Boost","ATK Grow","DEF Grow","ATK Trade","DEF Trade","Arm Strength","Carrot Boost","Weaken","Self-Defense","Armored","Lucky Seven","Hex Cancel","Pure Love","Toxic Strike","Frame Cancel","Health Wager","Mana Wager","Stamina Plus","Cashback","Survival","Top Form","Tough Skin",] },
  { name: "Recruit Ashuri and Lilith", types: ["Ashuri","Lilith",] },
];
bingoList[25] = [
  { name: "Recruit 8 Towns Members", types: ["Ashuri","Pandora","Rita","Saya","Cocoa","Kotri","Cicini","Syaro","Chocolate","Vanilla","Nixie","Aruraune","Lilith","Seana","Keke Bunny",] },
  { name: "10 Regen Up and 10 Pack Up", types: ["Regen Up","Pack Up",] },
  { name: "Get a High-Score above 5000 on the sandbag", types: ["Sandbag",] },
  { name: "Have at least 700 max HP", types: ["Health Up","MaxHP Buff","Health Plus","Health Surge","Mana Wager",] },
  { name: "Have at least 200 max MP", types: ["Mana Up","MaxMP Buff","Mana Plus","Mana Surge","Health Wager",] },
];