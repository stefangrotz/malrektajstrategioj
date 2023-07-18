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
    "Ekvilibrigu konsistenco kun nekonsistenco",
    "Estu malpura",
    "Estu ekstravaganca",
    "Estu malpli kritika pli ofte",
    "Spiru pli profunde",
    "Konstruu pontojn",
    "Forbruligu pontojn",
    "Voku vian patrinon kaj demandu al ŝi kion fari",
    "Kaskadoj",
    "Ŝanĝigu ambiguaĵoj al specifaĵoj",
    "Ŝanĝigu specifaĵoj al ambiguaĵoj",
    "Ŝanĝigu rolojn",
    "Ŝanĝigu nenion kaj daŭrigu kun senmakula konsistenco",
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
    "Priskribu la pejzaĝon al kiu tio ĉi apartenas",
    "Detruu nenion",
    "Forĵetu aksiomon",
    "Disciplina memindulgo",
    "Malkonektu de deziro",
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
    "Mekanikigi ion idiosinkrazian",
    "Moviĝu al la neebla",
    "Moviĝu al la negrava",
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
    "Forigu la mezon, etendu la randojn",
    "Ripeto estas formo de ŝanĝo",
    "Reiru viajn paŝojn",
    "Revalorigo (varma sento)",
    "Reversu",
    "Kurta cirkvito",
    "Fermu la pordon kaj aŭskultu de ekstere",
    "Simpla afero de laboro",
    "Malrapida preparado, rapida ekzekuto",
    "Deklaru la problemon per la plej simplaj vortoj kiel eble",
    "Ŝtelu solvon",
    "Prenu paŭzon",
    "Forprenu kiel eble plej multe da mistero, Kio restas?",
    "Forprenu la elementojn en ordo de ŝajna negraveco",
    "Forprenu la gravajn partojn",
    "Glubendu vian buŝon",
    "La principo de nekonsistenco",
    "La plej grava afero estas la afero plej facile forgesebla",
    "Pensu ene de la verko",
    "Pensu ekster la verkon",
    "Pensu pri la radio",
    "Ordigu",
    "Sensignifen",
    "Fidu al vi de la nuna momento",
    "Provu falsi ĝin",
    "Turnu ĝin renversita",
    "Tordu la spinon",
    "Uzu nekvalifikitajn homojn",
    "Uzu malnovan ideon",
    "Uzu neakcepteblan stilon",
    "Uzu kliŝojn",
    "Uzu malpli da notoj",
    "Uzu filtrilojn",
    "Uzu ion proksiman kiel modelon",
    "Uzu viajn proprajn ideojn",
    "Esprimu viajn suspektojn",
    "Akvo",
    "Fajro",
    "Tero",
    "Vento",
    "Koro",
    "Kio estas la sekcioj de la sekcioj?",
    "Kia kunteksto aspektus ĝuste?",
    "Kion vi faras?",
    "Nu, kion vi plej bone faras?",
    "Ĉu ĝi similas al io alia?",
    "Kio estas la realeco de la situacio?",
    "Kio estas la plej simpla solvo?",
    "Kiajn erarojn vi faris lastfoje?",
    "Kio plej lastatempe imponis vin?",
    "Kion vi povas lerni de ĝi?",
    "Kiel ĝi estas simila?",
    "Kion vi povus preni el tio?",
    "Kion pliigi? Kion redukti? Kion konservi?",
    "Kio estis la branĉopunktoj en la evoluo de ĉi tiu eco?",
    "Pri kio vi vere pensis ĝuste nun? Uzu ĝin",
    "Kio farus ĉi tion vere sukcesa?",
    "Kion via plej proksima amiko farus?",
    "Kion vi ne farus? Faru tion",
    "Por kiam ĝi estas?",
    "Por kiu ĝi estas?",
    "Kie estas la rando?",
    "Kiuj partoj povas esti grupigitaj?",
    "Kiu farus ĉi tion vere sukcesa?",
    "Laboru je alia rapido",
    "Ĉu iu ajn dezirus ĝin?",
    "Vi estas inĝeniero",
    "Vi nur povas fari unu punkton samtempe",
    "Vi ne devas honti utiligi viajn proprajn ideojn",
    "Via eraro estis kaŝita intenco",
    " "];
