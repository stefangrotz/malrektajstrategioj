var quotes = [
    "Linio havas du flankojn",
    "Tre malgranda objekto - ĝia centro",
    "Delasu deziron",
    "Ignoru normalajn instrukciojn",
    "Akceptu konsilon",
    "Kresko",
    "Aldonu plu",
    "Permesu malpezigon (malpezigo estas la foresto de limigo)",
    "Ĉiam fieru vi mem por havi pli ol personeco",
    "Ĉiam la unuaj paŝoj",
    "Bestaj sonoj",
    "Ĉu estas sekcioj? Konsideru transirojn",
    "Petu komputilan programon ripeti vian lastan agon",
    "Petu homojn labori kontraŭ ilia pli bona juĝo",
    "Demandu vian korpon",
    "Kunvenigu kelkajn el la elementoj en grupo kaj traktu la grupon",
    "Reiru kelkajn paŝojn. Kion alian vi povus fari?",
    "Ekvilibro la principo de konsistenco kun la principo de nekonsistenco",
    "Estu malpura",
    "Estu ekstravaganca",
    "Estu malpli kritika pli ofte",
    "Spiru pli profunde",
    "Konstruu pontojn",
    "Forbruligu pontojn",
    "Voku vian patrinon kaj demandu al ŝi kion fari",
    "Kaskadoj",
    "Ŝanĝu ambiguaĵoj al specifaĵoj",
    "Ŝanĝu specifaĵoj al ambiguaĵoj",
    "Ŝanĝu rolojn",
    "Ŝanĝu nenion kaj daŭrigu kun senmakula konsistenco",
    "Infanaj voĉoj parolante",
    "Infanaj voĉoj kantante",
    "Konsideru transirojn",
    "Konsultu aliajn promesplenajn fontojn",
    "Konsultu aliajn nepromesplenajn fontojn",
    "Kuraĝo!",
    "Tranĉu esencan konekton",
    "Tranĉu virtualan konekton",
    "Ornamu, ornamu",
    "Difinu areon kiel sekura kaj uzu ĝin kiel ankro",
    "Priskribu la pejzaĝon al kiu ĉi tio apartenas",
    "Detruu nenion",
    "Forĵetu aksiomon",
    "Disciplina memindulgo",
    "Malkonekti de deziro",
    "Malkovru la receptojn, kiujn vi uzas kaj forĵetu ilin",
    "Malkovru viajn formulojn kaj forgesu ilin",
    "Montru vian talenton",
    "Distordado de tempo",
    "Faru nenion kiel eble plej longe",
    "Faru ion enuigan",
    "Faru ion subitan, detruan kaj neantaŭvideblan",
    "Unue faru la lastan aferon",
    "Lavu la vazarojn",
    "Ĉu la vortoj devas ŝanĝiĝi?",
    "Ĉu ni bezonas truojn?",
    "Ne evitu tion, kio estas facila",
    "Ne timu aferojn, nur ĉar ili estas facile fareblaj",
    "Ne timu kliŝojn",
    "Ne timu montri viajn talentojn",
    "Ne rompu la silenton",
    "Ne emfazu unu aferon pli ol alian",
    "Emfazu diferencojn",
    "Emfazu ripetojn",
    "Emfazu la malfortojn",
    "Alfrontante elekton, faru ambaŭ!",
    "Unue laboru sole, poste laboru en nekutimaj paroj",
    "De nenio ĝis pli ol nenio",
    "Masaĝu vian kolon",
    "Fantomaj eĥoj",
    "Fordoni la ludon",
    "Akceptu vian plej malbonan impulson",
    "Iru eksteren. Fermu la pordon",
    "Iru malrapide ĉirkaŭ la ekstero",
    "Iru al ekstremo, reiru al pli komforta loko",
    "Kiel iu alia farus ĝin?",
    "Kiel vi klarigus ĉi tion al viaj gepatroj?",
    "Kiel vi farus ĝin?",
    "Humanigu ion, kio estas senerara",
    "Idiota ĝojo",
    "En tuta mallumo",
    "En tre granda ĉambro, tre mallaŭte",
    "Senfinaj gradientoj",
    "Anstataŭ ŝanĝi la aferon, ŝanĝu la mondon ĉirkaŭ ĝi",
    "Kredebleco de intencoj",
    "Nobleco de intencoj",
    "Humileco de intencoj",
    "Ĉu ĝi estas finita?",
    "Ĉu io mankas?",
    "Ĉu la stilo taŭgas?",
    "Ĉu la agordado taŭgas?",
    "Ĝi tute eblas (finfine)",
    "Simple temas pri laboro",
    "Nur daŭrigu",
    "Listigu la kvalitojn kiujn ĝi havas. Listigu tiujn, kiujn vi ŝatus",
    "Aŭskultu en plena mallumo",
    "Aŭskultu en tre granda ĉambro, tre trankvile",
    "Aŭskultu la trankvilan voĉon",
    "Rigardu tre etan objekton, rigardu ĝian centron",
    "Rigardu la ordon en kiu vi faras aferojn",
    "Rigardu atente la plej embarasajn detalojn kaj pligrandigu",
    "Perdita en senutila teritorio",
    "Pligrandigu la plej malfacilajn detalojn",
    "Faru malplenaĵo valora metante ĝin en delikatan kadron",
    "Faru subitan, detruan neantaŭvideblan agon. Uzu ĝin",
    "Faru ampleksan liston de ĉio, kion vi povus fari kaj faru la lastan aferon en la listo",
    "Faru ĝin pli plezurama",
    "Faru ĝin pli banala",
    "Faru la perfektan pli homa",
    "Mekanizi ion idiosinkrazian",
    "Movu al la neebla",
    "Movu al la negrava",
    "Silentigu kaj daŭrigu",
    "Ne konstruante muron sed farante brikon",
    "Post kiam la serĉo estas en progreso, io estos trovita",
    "Nur parto, ne la tuto",
    "Nur unu elemento de ĉiu speco",
    "Malkaŝe rezistu al ŝanĝo",
    "Atentu distraĵojn",
    "Bildo de homo lumigita",
    "Enmetu orelŝtopojn",
    "Pridubu la heroan aliron",
    "Reordigu",
    "Memoru tiujn trankvilajn vesperojn",
    "Forigu limigon",
    "Forigu ambiguaĵojn kaj konvertu al specifaĵoj",
    "Forigu specifaĵojn kaj konvertu al ambiguaĵoj",
    "Forigu la mezon, etendi la randojn",
    "Ripeto estas formo de ŝanĝo",
    "Reiru viajn paŝojn",
    "Revalorigo (varma sento)",
    "Reversu",
    "Kurta cirkvito",
    "Fermu la pordon kaj aŭskultu de ekstere",
    "Simple subtraction",
    "Simply a matter of work",
    "Slow preparation, fast execution",
    "Spectrum analysis",
    "State the problem in words as simply as possible",
    "Steal a solution",
    "Take a break",
    "Take away as much mystery as possible What is left?",
    "Take away the elements in order of apparent non-importance",
    "Take away the important parts",
    "Tape your mouth",
    "The inconsistency principle",
    "The most important thing is the thing most easily forgotten",
    "The tape is now the music",
    "Think inside the work",
    "Think outside the work",
    "Think of the radio",
    "Tidy up",
    "Towards the insignificant",
    "Trust in the you of now",
    "Try faking it",
    "Turn it upside down",
    "Twist the spine",
    "Use unqualified people",
    "Use an old idea",
    "Use an unacceptable color",
    "Use cliches",
    "Use fewer notes",
    "Use filters",
    "Use something nearby as a model",
    "Use your own ideas",
    "Voice your suspicions",
    "Water",
    "Fire",
    "Earth",
    "Wind",
    "Heart",
    "What are the sections sections of?",
    "What context would look right?",
    "What do you do?",
    "Now, what do you do best?",
    "What else is this like?",
    "What is the reality of the situation?",
    "What is the simplest solution?",
    "What mistakes did you make last time?",
    "What most recently impressed you?",
    "What can you learn from it?",
    "How is it similar?",
    "What could you take from it?",
    "What to increase?<br />What to reduce?<br />What to maintain?",
    "What were the branch points in the evolution of this entity?",
    "What were you really thinking about just now? Incorporate",
    "What would make this really successful?",
    "What would your closest friend do?",
    "What wouldn't you do? Do that",
    "When is it for?",
    "Who is it for?",
    "Where is the edge?",
    "Which parts can be grouped?",
    "Who would make this really successful?",
    "Work at a different speed",
    "Would anyone want it?",
    "You are an engineer",
    "You can only make one dot at a time",
    "You don't have to be ashamed of using your own ideas",
    "Your mistake was a hidden intention",
    " "];
