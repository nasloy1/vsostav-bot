// Cosmetics Ingredients Database
// Categories: 'harmful' | 'caution' | 'safe'

const INGREDIENTS = [

  // ═══════════════════════════════════
  // ДОПОЛНИТЕЛЬНЫЕ ИНГРЕДИЕНТЫ v2
  // ═══════════════════════════════════

  // Изотиазолиноны — сильные аллергены (HARMFUL)
  {
    id: 'mit',
    names: ['methylisothiazolinone', 'mit', 'methylisothiazolinone (mit)', 'метилизотиазолинон'],
    category: 'harmful',
    group: 'Изотиазолиноны',
    concern: 'Сильнейший аллерген, запрещён в несмываемой косметике ЕС',
    description: 'Консервант. SCCS ЕС признал небезопасным при любой концентрации в несмываемой косметике. Вызывает контактный дерматит, сенсибилизацию кожи. Запрещён в несмываемой косметике в ЕС с 2016 г.'
  },
  {
    id: 'cmit',
    names: ['methylchloroisothiazolinone', 'cmit', 'chloromethylisothiazolinone', 'kathon cg', 'метилхлоризотиазолинон'],
    category: 'harmful',
    group: 'Изотиазолиноны',
    concern: 'Доказанный аллерген, сенсибилизатор кожи',
    description: 'Консервант с высоким аллергенным потенциалом. Запрещён в несмываемой косметике в ЕС. В смываемой разрешён только в смеси с MIT в концентрации до 0,0015%.'
  },
  {
    id: 'benzisothiazolinone',
    names: ['benzisothiazolinone', 'bit', 'бензизотиазолинон'],
    category: 'harmful',
    group: 'Изотиазолиноны',
    concern: 'Аллерген, раздражитель кожи',
    description: 'Консервант из группы изотиазолинонов. Вызывает аллергические реакции и контактный дерматит.'
  },

  // Гликоли и растворители (CAUTION)
  {
    id: 'hexylene_glycol',
    names: ['hexylene glycol', 'гексиленгликоль', '2-methyl-2,4-pentanediol'],
    category: 'caution',
    group: 'Гликоли',
    concern: 'Раздражает кожу и слизистые при высокой концентрации',
    description: 'Растворитель и увлажнитель. В высоких концентрациях раздражает кожу, глаза и органы дыхания. В малых концентрациях (<10%) относительно безопасен.'
  },
  {
    id: 'butylene_glycol',
    names: ['butylene glycol', '1,3-butylene glycol', 'бутиленгликоль', '1,3-butanediol'],
    category: 'safe',
    group: 'Гликоли',
    concern: null,
    description: 'Увлажнитель и растворитель. Более мягкий, чем пропиленгликоль. Хорошо переносится большинством типов кожи, эффективно удерживает влагу.'
  },
  {
    id: 'pentylene_glycol',
    names: ['pentylene glycol', 'пентиленгликоль', '1,2-pentanediol'],
    category: 'safe',
    group: 'Гликоли',
    concern: null,
    description: 'Многофункциональный увлажнитель с мягкими консервирующими свойствами. Хорошо переносится кожей, часто используется как альтернатива традиционным консервантам.'
  },
  {
    id: 'caprylyl_glycol',
    names: ['caprylyl glycol', 'каприлилгликоль', '1,2-octanediol'],
    category: 'safe',
    group: 'Гликоли',
    concern: null,
    description: 'Увлажнитель с антимикробными свойствами. Используется как альтернатива традиционным консервантам. Хорошо переносится кожей.'
  },

  // EDTA и хелаторы (CAUTION)
  {
    id: 'disodium_edta',
    names: ['disodium edta', 'edta', 'ethylenediaminetetraacetic acid', 'тетранатриевая соль эдта', 'динатриевая соль эдтк', 'disodium edetate'],
    category: 'caution',
    group: 'Хелаторы',
    concern: 'Усиливает проникновение других веществ через кожу',
    description: 'Хелатирующий агент. Связывает ионы металлов, повышая эффективность консервантов. Увеличивает проницаемость кожи, усиливая всасывание других компонентов, включая вредные.'
  },
  {
    id: 'tetrasodium_edta',
    names: ['tetrasodium edta', 'tetrasodium edetate', 'тетранатрий эдта'],
    category: 'caution',
    group: 'Хелаторы',
    concern: 'Усиливает проникновение других веществ через кожу',
    description: 'Хелатирующий агент, аналогичный Disodium EDTA. Повышает проницаемость кожи для других компонентов состава.'
  },

  // Четвертичные аммониевые соединения (CAUTION)
  {
    id: 'myrtrimonium_bromide',
    names: ['myrtrimonium bromide', 'миртримоний бромид'],
    category: 'caution',
    group: 'Четв. аммониевые',
    concern: 'Возможный аллерген, токсичен для водных организмов',
    description: 'Антимикробный агент из группы четвертичных аммониевых соединений. Может вызывать раздражение кожи и слизистых при высоких концентрациях.'
  },
  {
    id: 'benzalkonium_chloride',
    names: ['benzalkonium chloride', 'бензалкония хлорид', 'alkyl dimethyl benzyl ammonium chloride'],
    category: 'caution',
    group: 'Четв. аммониевые',
    concern: 'Раздражитель, аллерген, токсичен при длительном применении',
    description: 'Антисептик и консервант. При длительном применении нарушает барьерную функцию кожи, вызывает раздражение и аллергию.'
  },

  // Полоксамеры (CAUTION — ПЭГ-производные)
  {
    id: 'poloxamer',
    names: ['poloxamer', 'полоксамер', 'poloxamer 184', 'poloxamer 407', 'poloxamer 338', 'poloxamer 188'],
    category: 'caution',
    group: 'ПЭГ-соединения',
    concern: 'Производное ПЭГ, возможное загрязнение 1,4-диоксаном',
    description: 'Неионогенные ПАВ на основе полиэтиленгликоля. Как и другие ПЭГ-соединения, при производстве могут загрязняться канцерогеном 1,4-диоксаном.'
  },

  // Щёлочи (CAUTION)
  {
    id: 'sodium_hydroxide',
    names: ['sodium hydroxide', 'гидроксид натрия', 'каустическая сода', 'lye', 'naoh'],
    category: 'caution',
    group: 'Регуляторы pH',
    concern: 'Агрессивная щёлочь, раздражение при высокой концентрации',
    description: 'Регулятор pH. В малых количествах безопасен для нейтрализации кислот в косметике. В высоких концентрациях вызывает химические ожоги. В готовых продуктах обычно нейтрализован.'
  },
  {
    id: 'potassium_hydroxide',
    names: ['potassium hydroxide', 'гидроксид калия', 'koh', 'caustic potash'],
    category: 'caution',
    group: 'Регуляторы pH',
    concern: 'Агрессивная щёлочь при высокой концентрации',
    description: 'Регулятор pH, аналогичный гидроксиду натрия. В готовой продукции нейтрализован и безопасен при правильных концентрациях.'
  },

  // Спирты и растворители (CAUTION)
  {
    id: 'benzyl_alcohol',
    names: ['benzyl alcohol', 'бензиловый спирт', 'phenylmethanol'],
    category: 'caution',
    group: 'Консерванты',
    concern: 'Аллерген, раздражитель при высокой концентрации',
    description: 'Консервант и растворитель с природным происхождением (встречается в эфирных маслах). Является обязательным к маркировке аллергеном ЕС. При высоких концентрациях раздражает кожу.'
  },
  {
    id: 'isopropyl_alcohol',
    names: ['isopropyl alcohol', 'isopropanol', 'изопропиловый спирт', 'изопропанол', '2-propanol'],
    category: 'caution',
    group: 'Спирты',
    concern: 'Сушит кожу, нарушает барьер',
    description: 'Растворитель. Сушит и обезжиривает кожу, нарушает защитный барьер при регулярном применении. Убивает микробиом кожи.'
  },

  // Комедогенные эстеры (CAUTION)
  {
    id: 'isopropyl_myristate',
    names: ['isopropyl myristate', 'изопропилмиристат', 'ipm'],
    category: 'caution',
    group: 'Эмоленты',
    concern: 'Высокая комедогенность, закупоривает поры',
    description: 'Синтетический эмолент. Имеет высокий рейтинг комедогенности (4/5). Не рекомендован для жирной и склонной к акне кожи.'
  },
  {
    id: 'isopropyl_palmitate',
    names: ['isopropyl palmitate', 'изопропилпальмитат'],
    category: 'caution',
    group: 'Эмоленты',
    concern: 'Комедогенность, закупоривает поры',
    description: 'Синтетический эмолент с высоким рейтингом комедогенности. Не рекомендован для жирной и проблемной кожи.'
  },

  // Стирол/акрилаты (CAUTION — микропластик)
  {
    id: 'acrylates',
    names: ['acrylates copolymer', 'styrene/acrylates copolymer', 'акрилатный сополимер', 'acrylates/c10-30'],
    category: 'caution',
    group: 'Синтетические полимеры',
    concern: 'Синтетический полимер, микропластик',
    description: 'Синтетические полимеры на основе акриловой кислоты. Используются как загустители и плёнкообразователи. Не биоразлагаются, относятся к микропластикам.'
  },

  // ═══════════════════════════════════
  // БЕЗОПАСНЫЕ — дополнительные
  // ═══════════════════════════════════

  {
    id: 'caprylic_triglyceride',
    names: ['caprylic/capric triglyceride', 'caprylic capric triglyceride', 'каприловый триглицерид', 'mct oil', 'medium chain triglycerides'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Фракционированное кокосовое масло. Лёгкий эмолент, хорошо впитывается и не забивает поры. Стабилен при хранении, гипоаллергенен.'
  },
  {
    id: 'squalane',
    names: ['squalane', 'сквалан', 'olive squalane'],
    category: 'safe',
    group: 'Эмоленты',
    concern: null,
    description: 'Природный эмолент, близкий по составу к кожному себуму. Прекрасно увлажняет, не закупоривает поры, подходит для всех типов кожи включая жирную.'
  },
  {
    id: 'bisabolol',
    names: ['bisabolol', 'alpha-bisabolol', 'бисаболол', 'α-bisabolol'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Природный компонент ромашки. Успокаивает раздражённую кожу, оказывает противовоспалительный и антибактериальный эффект. Отлично переносится чувствительной кожей.'
  },
  {
    id: 'caffeine',
    names: ['caffeine', 'кофеин'],
    category: 'safe',
    group: 'Активные компоненты',
    concern: null,
    description: 'Антиоксидант с противовоспалительным эффектом. Сужает сосуды, уменьшает отёчность и тёмные круги. Активирует липолиз, используется в антицеллюлитной косметике.'
  },
  {
    id: 'centella',
    names: ['centella asiatica', 'gotu kola', 'центелла', 'cica', 'madecassoside', 'asiaticoside', 'titrated extract of centella'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Экстракт центеллы азиатской. Мощный регенерирующий компонент. Ускоряет заживление, стимулирует синтез коллагена, успокаивает воспаления.'
  },
  {
    id: 'oat',
    names: ['avena sativa', 'oat extract', 'colloidal oatmeal', 'овёс', 'экстракт овса', 'avenanthramides'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Коллоидный овёс. Успокаивает зуд и раздражение, укрепляет барьер кожи. Рекомендован дерматологами при атопическом дерматите и псориазе.'
  },
  {
    id: 'alpha_arbutin',
    names: ['alpha-arbutin', 'arbutin', 'альфа-арбутин', 'арбутин'],
    category: 'safe',
    group: 'Отбеливающие',
    concern: null,
    description: 'Природный осветляющий компонент из толокнянки. Безопасная альтернатива гидрохинону. Ингибирует синтез меланина без токсичности. Эффективен против пигментации.'
  },
  {
    id: 'azelaic_acid',
    names: ['azelaic acid', 'азелаиновая кислота', 'nonanedioic acid'],
    category: 'safe',
    group: 'Активные кислоты',
    concern: null,
    description: 'Природная дикарбоновая кислота. Борется с акне, пигментацией и розацеа. Имеет широкую доказательную базу безопасности и эффективности.'
  },
  {
    id: 'glucoside_surfactants',
    names: ['decyl glucoside', 'coco-glucoside', 'lauryl glucoside', 'caprylyl/capryl glucoside', 'glucose', 'глюкозид', 'декилглюкозид', 'кокоглюкозид'],
    category: 'safe',
    group: 'Мягкие ПАВ',
    concern: null,
    description: 'Мягкие ПАВ растительного происхождения (из кокоса и глюкозы). Биоразлагаемы, хорошо переносятся чувствительной кожей, не нарушают барьер.'
  },
  {
    id: 'sodium_cocoyl_isethionate',
    names: ['sodium cocoyl isethionate', 'sci', 'натрий кокоил изетионат'],
    category: 'safe',
    group: 'Мягкие ПАВ',
    concern: null,
    description: 'Мягкое ПАВ на основе кокосового масла. Намного мягче SLS, не нарушает барьер кожи. Используется в твёрдых шампунях и мягких очищающих средствах.'
  },
  {
    id: 'zinc_pca',
    names: ['zinc pca', 'цинк pca', 'zinc pyrrolidone carboxylic acid'],
    category: 'safe',
    group: 'Активные компоненты',
    concern: null,
    description: 'Комплекс цинка и пироглутаминовой кислоты. Регулирует выработку себума, борется с акне и жирным блеском. Естественный компонент кожи.'
  },
  {
    id: 'kaolin',
    names: ['kaolin', 'каолин', 'china clay', 'white kaolin'],
    category: 'safe',
    group: 'Минеральные компоненты',
    concern: null,
    description: 'Природная белая глина. Мягко очищает поры, впитывает излишки кожного сала. Отлично подходит для жирной и смешанной кожи.'
  },
  {
    id: 'bentonite',
    names: ['bentonite', 'бентонит', 'bentonite clay'],
    category: 'safe',
    group: 'Минеральные компоненты',
    concern: null,
    description: 'Природная вулканическая глина. Глубоко очищает поры, впитывает токсины и избыток жира. Эффективна в масках для проблемной кожи.'
  },
  {
    id: 'rosehip',
    names: ['rosa canina', 'rosehip oil', 'rosehip seed oil', 'шиповник', 'масло шиповника', 'rosa rubiginosa'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Масло шиповника — богато ретинолом, витамином C и незаменимыми жирными кислотами. Регенерирует кожу, уменьшает рубцы и пигментацию. Природный антиоксидант.'
  },
  {
    id: 'sea_buckthorn',
    names: ['hippophae rhamnoides', 'sea buckthorn', 'облепиха', 'sea buckthorn oil'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Масло облепихи богато каротиноидами, витамином E и омега-7 жирными кислотами. Ускоряет регенерацию кожи, обладает антиоксидантным и противовоспалительным действием.'
  },
  {
    id: 'evening_primrose',
    names: ['oenothera biennis', 'evening primrose oil', 'масло примулы вечерней', 'масло энотеры'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Масло примулы вечерней богато гамма-линоленовой кислотой (ГЛК). Эффективно при экземе, псориазе и атопическом дерматите. Укрепляет барьер кожи.'
  },
  {
    id: 'chlorphenesin',
    names: ['chlorphenesin', 'хлорфенезин', '3-(4-chlorophenoxy)-1,2-propanediol'],
    category: 'caution',
    group: 'Консерванты',
    concern: 'Раздражение кожи, ограничен в ЕС до 0,3%',
    description: 'Консервант с антибактериальным и противогрибковым действием. В ЕС ограничен концентрацией 0,3%. При превышении дозы вызывает раздражение кожи.'
  },
  {
    id: 'ethylhexylglycerin',
    names: ['ethylhexylglycerin', 'этилгексилглицерин', 'sensiva sc 50'],
    category: 'safe',
    group: 'Консерванты',
    concern: null,
    description: 'Мягкий консервант на основе глицерина. Часто используется совместно с феноксиэтанолом для усиления его действия. Хорошо переносится кожей.'
  },
  {
    id: 'sodium_hyaluronate_crosspolymer',
    names: ['sodium hyaluronate crosspolymer', 'hyaluronic acid crosspolymer', 'сшитый гиалуронат натрия'],
    category: 'safe',
    group: 'Увлажнители',
    concern: null,
    description: 'Сшитая форма гиалуроновой кислоты. Остаётся на поверхности кожи дольше обычного гиалуроната, обеспечивая длительное увлажнение и заполнение морщин.'
  },
  {
    id: 'copper_peptides',
    names: ['copper tripeptide-1', 'ghk-cu', 'copper peptide', 'медный пептид'],
    category: 'safe',
    group: 'Пептиды',
    concern: null,
    description: 'Трипептид меди — один из наиболее исследованных антивозрастных пептидов. Стимулирует синтез коллагена и эластина, ускоряет заживление, обладает антиоксидантными свойствами.'
  },
  {
    id: 'peptides',
    names: ['palmitoyl tripeptide-1', 'palmitoyl tetrapeptide-7', 'acetyl hexapeptide-3', 'matrixyl', 'argireline', 'leuphasyl', 'пептид', 'peptide'],
    category: 'safe',
    group: 'Пептиды',
    concern: null,
    description: 'Синтетические пептиды — цепочки аминокислот. Стимулируют производство коллагена и эластина, разглаживают морщины. Хорошо переносятся кожей.'
  },
  {
    id: 'neem',
    names: ['azadirachta indica', 'neem oil', 'масло ним', 'neem leaf extract'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Масло нима обладает мощными антибактериальными, противовирусными и противогрибковыми свойствами. Эффективно при акне и кожных инфекциях.'
  },
  {
    id: 'resveratrol',
    names: ['resveratrol', 'ресвератрол', 'trans-resveratrol'],
    category: 'safe',
    group: 'Антиоксиданты',
    concern: null,
    description: 'Природный полифенол из красного винограда. Мощный антиоксидант, защищает от УФ-излучения и преждевременного старения. Противовоспалительный эффект.'
  },
  {
    id: 'ferulic_acid',
    names: ['ferulic acid', 'феруловая кислота'],
    category: 'safe',
    group: 'Антиоксиданты',
    concern: null,
    description: 'Природный антиоксидант. Усиливает действие витаминов C и E, стабилизирует их. Защищает от УФ-излучения и свободных радикалов.'
  },
  {
    id: 'inulin',
    names: ['inulin', 'инулин', 'chicory root extract'],
    category: 'safe',
    group: 'Пребиотики',
    concern: null,
    description: 'Природный пребиотик из цикория. Питает полезные микроорганизмы микробиома кожи, укрепляет барьерные функции. Мягко увлажняет.'
  },
  {
    id: 'magnesium_sulfate',
    names: ['magnesium sulfate', 'сульфат магния', 'epsom salt', 'английская соль'],
    category: 'safe',
    group: 'Минеральные компоненты',
    concern: null,
    description: 'Сульфат магния. Используется как текстурообразующий агент в косметике. В ваннах расслабляет мышцы и успокаивает кожу.'
  },
  {
    id: 'silk',
    names: ['hydrolyzed silk', 'silk amino acids', 'гидролизованный шёлк', 'шёлковые аминокислоты', 'serica'],
    category: 'safe',
    group: 'Протеины',
    concern: null,
    description: 'Гидролизованный шёлк — белок с мелкими молекулами, проникающими в волосы и кожу. Придаёт гладкость, блеск и укрепляет структуру волос.'
  },
  {
    id: 'collagen',
    names: ['hydrolyzed collagen', 'soluble collagen', 'marine collagen', 'коллаген', 'гидролизованный коллаген'],
    category: 'safe',
    group: 'Протеины',
    concern: null,
    description: 'Гидролизованный коллаген увлажняет и укрепляет кожу, формируя защитную плёнку. Молекулы в косметике не проникают глубоко в дерму, но улучшают барьер.'
  },
  {
    id: 'kojic_acid',
    names: ['kojic acid', 'кодзиевая кислота', 'kojic dipalmitate'],
    category: 'caution',
    group: 'Отбеливающие',
    concern: 'Раздражение кожи, контактный дерматит',
    description: 'Природный депигментирующий агент, производимый грибками. Ингибирует синтез меланина. Может вызывать раздражение и контактный дерматит у чувствительной кожи.'
  },
  {
    id: 'limonene',
    names: ['limonene', 'лимонен', 'd-limonene'],
    category: 'caution',
    group: 'Ароматические аллергены',
    concern: 'Обязательный к маркировке аллерген ЕС',
    description: 'Терпен, содержащийся в цитрусовых маслах. Придаёт аромат, но является обязательным к маркировке аллергеном ЕС. При окислении усиливает аллергенность.'
  },
  {
    id: 'linalool',
    names: ['linalool', 'линалоол'],
    category: 'caution',
    group: 'Ароматические аллергены',
    concern: 'Обязательный к маркировке аллерген ЕС',
    description: 'Терпеновый спирт с цветочным ароматом. Один из 26 обязательных к маркировке аллергенов ЕС в косметике. При окислении значительно увеличивает аллергенность.'
  },
  {
    id: 'eugenol',
    names: ['eugenol', 'эвгенол'],
    category: 'caution',
    group: 'Ароматические аллергены',
    concern: 'Сильный аллерген, входит в список 26 аллергенов ЕС',
    description: 'Фенол из гвоздики и других эфирных масел. Сильный контактный аллерген. Обязателен к маркировке в ЕС. Часто встречается в натуральных ароматизаторах.'
  },
  {
    id: 'cinnamal',
    names: ['cinnamal', 'cinnamaldehyde', 'циннамаль', 'коричный альдегид'],
    category: 'caution',
    group: 'Ароматические аллергены',
    concern: 'Сильный аллерген, входит в топ-5 аллергенов',
    description: 'Ароматический альдегид из коричного масла. Один из наиболее частых причин контактного аллергического дерматита. Обязателен к маркировке в ЕС.'
  },

  // ═══════════════════════════════════
  // ВРЕДНЫЕ ИНГРЕДИЕНТЫ
  // ═══════════════════════════════════

  // Parabens
  {
    id: 'methylparaben',
    names: ['methylparaben', 'methyl paraben', 'methyl 4-hydroxybenzoate', 'e218', 'метилпарабен'],
    category: 'harmful',
    group: 'Парабены',
    concern: 'Нарушает гормональный баланс, имитирует эстроген',
    description: 'Синтетический консервант из группы парабенов. Проникает через кожу и накапливается в тканях. Обнаружен в образцах тканей рака молочной железы.'
  },
  {
    id: 'ethylparaben',
    names: ['ethylparaben', 'ethyl paraben', 'ethyl 4-hydroxybenzoate', 'e214', 'этилпарабен'],
    category: 'harmful',
    group: 'Парабены',
    concern: 'Эстрогеноподобное действие',
    description: 'Консервант из группы парабенов. Проявляет гормоноподобную активность. Запрещён в косметике для детей до 3 лет в ряде стран ЕС.'
  },
  {
    id: 'propylparaben',
    names: ['propylparaben', 'propyl paraben', 'propyl 4-hydroxybenzoate', 'e216', 'пропилпарабен'],
    category: 'harmful',
    group: 'Парабены',
    concern: 'Нарушает выработку тестостерона',
    description: 'Консервант с доказанным эстрогеноподобным действием. Нарушает репродуктивную систему, особенно у мужчин.'
  },
  {
    id: 'butylparaben',
    names: ['butylparaben', 'butyl paraben', 'butyl 4-hydroxybenzoate', 'бутилпарабен'],
    category: 'harmful',
    group: 'Парабены',
    concern: 'Сильнейший гормональный дисраптор из парабенов',
    description: 'Наиболее активный из парабенов по эстрогеноподобному действию. Запрещён в ЕС в косметике для детей до 3 лет.'
  },
  {
    id: 'isobutylparaben',
    names: ['isobutylparaben', 'isobutyl paraben', 'изобутилпарабен'],
    category: 'harmful',
    group: 'Парабены',
    concern: 'Гормональный дисраптор',
    description: 'Парабен с высокой эстрогеноподобной активностью. Запрещён в ЕС в косметике для детей до 3 лет.'
  },

  // Sulfates
  {
    id: 'sls',
    names: ['sodium lauryl sulfate', 'sls', 'натрия лаурил сульфат', 'натрий лаурилсульфат', 'лаурилсульфат натрия'],
    category: 'harmful',
    group: 'Сульфаты',
    concern: 'Разрушает барьер кожи, сильный раздражитель',
    description: 'Агрессивное поверхностно-активное вещество. Разрушает защитный барьер кожи, вызывает раздражение и сухость. Применяется в промышленных чистящих средствах.'
  },
  {
    id: 'sles',
    names: ['sodium laureth sulfate', 'sles', 'sodium lauryl ether sulfate', 'натрия лауретсульфат', 'лауретсульфат натрия'],
    category: 'harmful',
    group: 'Сульфаты',
    concern: 'Раздражение кожи, загрязнение канцерогеном 1,4-диоксаном',
    description: 'Мягче чем SLS, но также разрушает барьер кожи. При производстве может образовываться канцероген 1,4-диоксан.'
  },
  {
    id: 'ammonium_lauryl_sulfate',
    names: ['ammonium lauryl sulfate', 'als', 'аммония лаурилсульфат'],
    category: 'harmful',
    group: 'Сульфаты',
    concern: 'Раздражение кожи и слизистых',
    description: 'ПАВ из группы сульфатов. Аналогичен SLS по действию, вызывает раздражение и нарушает барьерные функции кожи.'
  },

  // Formaldehyde & releasers
  {
    id: 'formaldehyde',
    names: ['formaldehyde', 'formalin', 'формальдегид', 'формалин', 'methanal'],
    category: 'harmful',
    group: 'Формальдегид',
    concern: 'Канцероген группы 1 (IARC), сильный аллерген',
    description: 'Доказанный канцероген. Вызывает аллергию, раздражение дыхательных путей и кожи. Запрещён в ЕС в концентрациях выше 0,001%.'
  },
  {
    id: 'dmdm_hydantoin',
    names: ['dmdm hydantoin', 'dmdm', '1,3-bis(hydroxymethyl)-5,5-dimethylhydantoin', 'дмдм гидантоин'],
    category: 'harmful',
    group: 'Высвободители формальдегида',
    concern: 'Постепенно высвобождает формальдегид',
    description: 'Консервант, медленно выделяющий формальдегид. Канцерогенен, вызывает аллергические реакции и контактный дерматит.'
  },
  {
    id: 'imidazolidinyl_urea',
    names: ['imidazolidinyl urea', 'имидазолидинилмочевина', 'germall 115'],
    category: 'harmful',
    group: 'Высвободители формальдегида',
    concern: 'Высвобождает формальдегид',
    description: 'Консервант-высвободитель формальдегида. Частая причина контактного аллергического дерматита.'
  },
  {
    id: 'diazolidinyl_urea',
    names: ['diazolidinyl urea', 'germall ii', 'диазолидинилмочевина'],
    category: 'harmful',
    group: 'Высвободители формальдегида',
    concern: 'Высвобождает больше формальдегида, чем imidazolidinyl urea',
    description: 'Один из наиболее агрессивных консервантов-высвободителей формальдегида.'
  },
  {
    id: 'quaternium_15',
    names: ['quaternium-15', 'quaternium 15', 'dowicil 200', 'квотерниум-15'],
    category: 'harmful',
    group: 'Высвободители формальдегида',
    concern: 'Высвобождает формальдегид, частый аллерген',
    description: 'Консервант, высвобождающий формальдегид. Одна из наиболее распространённых причин контактного дерматита.'
  },
  {
    id: 'bronopol',
    names: ['bronopol', '2-bromo-2-nitropropane-1,3-diol', 'бронопол'],
    category: 'harmful',
    group: 'Высвободители формальдегида',
    concern: 'Высвобождает формальдегид и нитрозирующие агенты',
    description: 'Консервант, выделяющий формальдегид и образующий канцерогенные нитрозамины.'
  },

  // Petroleum derivatives
  {
    id: 'petrolatum',
    names: ['petrolatum', 'petroleum jelly', 'white petrolatum', 'вазелин', 'нефтяной вазелин'],
    category: 'harmful',
    group: 'Нефтепродукты',
    concern: 'Содержит канцерогенные ПАУ, нарушает дыхание кожи',
    description: 'Продукт нефтепереработки. Создаёт плёнку, блокирующую кожное дыхание. Может содержать примеси полициклических ароматических углеводородов (ПАУ) — канцерогенов.'
  },
  {
    id: 'mineral_oil',
    names: ['mineral oil', 'paraffinum liquidum', 'white mineral oil', 'минеральное масло', 'парафиновое масло', 'парафинум ликвидум', 'вазелиновое масло'],
    category: 'harmful',
    group: 'Нефтепродукты',
    concern: 'Нарушает дыхание кожи, содержит ПАУ',
    description: 'Жидкий парафин — продукт нефтепереработки. Закупоривает поры, препятствует газообмену кожи. Может содержать канцерогенные примеси.'
  },
  {
    id: 'paraffin',
    names: ['paraffin', 'paraffin wax', 'ceresin', 'ozokerite', 'microcrystalline wax', 'парафин', 'церезин', 'озокерит', 'cera microcristallina'],
    category: 'harmful',
    group: 'Нефтепродукты',
    concern: 'Нефтепроизводное, нарушает дыхание кожи',
    description: 'Твёрдые продукты нефтепереработки. Создают окклюзионную плёнку, препятствующую естественным функциям кожи.'
  },

  // Triclosan
  {
    id: 'triclosan',
    names: ['triclosan', 'triclocarban', 'трихлозан', 'триклозан'],
    category: 'harmful',
    group: 'Антибактериальные',
    concern: 'Гормональный дисраптор, формирует устойчивость к антибиотикам',
    description: 'Антибактериальный агент. Нарушает работу щитовидной железы и репродуктивных органов. Способствует резистентности к антибиотикам. Запрещён в США в антисептических мылах.'
  },

  // Phthalates
  {
    id: 'dibutyl_phthalate',
    names: ['dibutyl phthalate', 'dbp', 'дибутилфталат'],
    category: 'harmful',
    group: 'Фталаты',
    concern: 'Гормональный дисраптор, токсичен для репродуктивной системы',
    description: 'Пластификатор из группы фталатов. Нарушает гормональный баланс, токсичен для репродуктивной системы. Запрещён в косметике ЕС.'
  },
  {
    id: 'diethyl_phthalate',
    names: ['diethyl phthalate', 'dep', 'диэтилфталат'],
    category: 'harmful',
    group: 'Фталаты',
    concern: 'Эндокринный дисраптор',
    description: 'Фталатный пластификатор, применяемый в отдушках. Является эндокринным дисраптором, нарушает работу гормональной системы.'
  },

  // Coal tar & heavy metals
  {
    id: 'coal_tar',
    names: ['coal tar', 'каменноугольная смола', 'coal tar extract'],
    category: 'harmful',
    group: 'Каменноугольная смола',
    concern: 'Канцероген группы 1 (IARC)',
    description: 'Побочный продукт производства кокса. Доказанный канцероген. Используется в некоторых шампунях от перхоти и псориаза.'
  },
  {
    id: 'hydroquinone',
    names: ['hydroquinone', 'гидрохинон', '1,4-benzenediol'],
    category: 'harmful',
    group: 'Отбеливающие',
    concern: 'Возможный канцероген, нефротоксичность',
    description: 'Отбеливающее вещество. Запрещено в косметике ЕС. Является возможным канцерогеном, вызывает нефротоксичность при длительном применении.'
  },
  {
    id: 'toluene',
    names: ['toluene', 'methylbenzene', 'толуол', 'метилбензол'],
    category: 'harmful',
    group: 'Растворители',
    concern: 'Нейротоксичность, вред при беременности',
    description: 'Растворитель в лаках для ногтей. Нейротоксин. При беременности может вызвать нарушения развития плода. Запрещён в косметике ЕС и Канады.'
  },
  {
    id: 'polyacrylamide',
    names: ['polyacrylamide', 'полиакриламид', 'acrylamide'],
    category: 'harmful',
    group: 'Синтетические полимеры',
    concern: 'Содержит канцерогенный мономер акриламид',
    description: 'Синтетический загуститель. При деградации высвобождает акриламид — нейротоксичный канцероген группы 2A по IARC.'
  },

  // ═══════════════════════════════════
  // ОСТОРОЖНО
  // ═══════════════════════════════════

  {
    id: 'peg',
    names: ['peg', 'polyethylene glycol', 'полиэтиленгликоль', 'пэг'],
    category: 'caution',
    group: 'ПЭГ-соединения',
    concern: 'Возможное загрязнение 1,4-диоксаном, повышает проникновение токсинов',
    description: 'Производные полиэтиленгликоля. При производстве могут загрязняться канцерогеном 1,4-диоксаном. Повышают проницаемость кожи, усиливая всасывание других компонентов.'
  },
  {
    id: 'bha_preserv',
    names: ['butylhydroxyanisole', 'butylated hydroxyanisole', 'е320', 'бутилгидроксианизол'],
    category: 'caution',
    group: 'Синтетические антиоксиданты',
    concern: 'Возможный канцероген (IARC 2B), эндокринный дисраптор',
    description: 'Синтетический консервант-антиоксидант. IARC классифицирует как возможный канцероген. Влияет на работу щитовидной железы.'
  },
  {
    id: 'bht',
    names: ['bht', 'butylhydroxytoluene', 'butylated hydroxytoluene', 'e321', 'бутилгидрокситолуол'],
    category: 'caution',
    group: 'Синтетические антиоксиданты',
    concern: 'Слабый эндокринный дисраптор',
    description: 'Синтетический антиоксидант. Проявляет слабую эстрогеноподобную активность. Может раздражать кожу при длительном контакте.'
  },
  {
    id: 'propylene_glycol',
    names: ['propylene glycol', '1,2-propanediol', 'пропиленгликоль'],
    category: 'caution',
    group: 'Гликоли',
    concern: 'Раздражение при высокой концентрации, аллерген',
    description: 'Увлажнитель и растворитель. В высоких концентрациях (>5%) раздражает кожу, вызывает контактный дерматит. В малых концентрациях относительно безопасен.'
  },
  {
    id: 'parfum',
    names: ['parfum', 'fragrance', 'aroma', 'отдушка', 'парфюм', 'ароматизатор'],
    category: 'caution',
    group: 'Синтетические отдушки',
    concern: 'Скрывает сотни химикатов, один из главных аллергенов',
    description: 'Под этим термином могут скрываться сотни химических веществ без раскрытия состава. Один из наиболее распространённых аллергенов в косметике. Может содержать фталаты.'
  },
  {
    id: 'dea',
    names: ['dea', 'diethanolamine', 'диэтаноламин', 'cocamide dea', 'lauramide dea', 'oleamide dea'],
    category: 'caution',
    group: 'Этаноламины',
    concern: 'Образует канцерогенные нитрозамины',
    description: 'ПАВ и эмульгатор. Реагирует с нитрозирующими агентами, образуя нитрозамины — доказанные канцерогены. Запрещён в косметике ряда стран ЕС.'
  },
  {
    id: 'tea',
    names: ['tea', 'triethanolamine', 'триэтаноламин', 'тэа'],
    category: 'caution',
    group: 'Этаноламины',
    concern: 'Образует нитрозамины, аллерген',
    description: 'Эмульгатор и регулятор pH. Образует канцерогенные нитрозамины при взаимодействии с нитрозирующими агентами. Частая причина аллергии.'
  },
  {
    id: 'dimethicone',
    names: ['dimethicone', 'polydimethylsiloxane', 'pdms', 'диметикон', 'полидиметилсилоксан', 'cyclomethicone', 'cyclopentasiloxane', 'циклометикон', 'циклопентасилоксан'],
    category: 'caution',
    group: 'Силиконы',
    concern: 'Закупоривает поры, не биоразлагается',
    description: 'Силиконовые полимеры. Создают окклюзионную плёнку, препятствующую дыханию кожи. D4 и D5 — персистентные загрязнители, запрещены в смываемой косметике ЕС с 2018 г.'
  },
  {
    id: 'oxybenzone',
    names: ['oxybenzone', 'benzophenone-3', 'bp-3', 'оксибензон', 'бензофенон-3'],
    category: 'caution',
    group: 'Химические UV-фильтры',
    concern: 'Гормональный дисраптор, повреждает коралловые рифы',
    description: 'Химический UV-фильтр. Проникает в кровоток через кожу, обладает гормоноподобным действием. Токсичен для коралловых рифов. Запрещён на Гавайях.'
  },
  {
    id: 'octinoxate',
    names: ['octinoxate', 'ethylhexyl methoxycinnamate', 'emc', 'октиноксат', 'этилгексилметоксициннамат'],
    category: 'caution',
    group: 'Химические UV-фильтры',
    concern: 'Эндокринный дисраптор, влияет на гормоны щитовидной железы',
    description: 'Химический UV-фильтр. Проникает через кожу в кровоток. Нарушает уровень тиреоидных гормонов.'
  },
  {
    id: 'aluminum',
    names: ['aluminum chlorohydrate', 'aluminum zirconium', 'aluminum chloride', 'aluminium chlorohydrate', 'хлоргидрат алюминия', 'алюминия хлорид'],
    category: 'caution',
    group: 'Соли алюминия',
    concern: 'Нейротоксичность, возможная связь с раком груди',
    description: 'Активные компоненты антиперспирантов. Проникают в кожу. Исследования указывают на возможную связь с раком молочной железы, хотя окончательно не доказана.'
  },
  {
    id: 'phenoxyethanol',
    names: ['phenoxyethanol', 'феноксиэтанол', '2-phenoxyethanol'],
    category: 'caution',
    group: 'Консерванты',
    concern: 'Раздражение кожи, нейротоксичность при попадании внутрь',
    description: 'Консервант, позиционируемый как безопасная альтернатива парабенам. Раздражает кожу и слизистые. Нейротоксичен при проглатывании. Запрещён в детской косметике в ряде стран.'
  },
  {
    id: 'alcohol_denat',
    names: ['alcohol denat', 'denatured alcohol', 'sd alcohol', 'alcohol denat.', 'денатурированный спирт', 'спирт денатурированный'],
    category: 'caution',
    group: 'Денатурированный спирт',
    concern: 'Сушит кожу, нарушает барьер, убивает микробиом',
    description: 'Денатурированный спирт. При регулярном применении нарушает защитный барьер кожи, вызывает сухость. Особенно вреден для чувствительной кожи.'
  },
  {
    id: 'sodium_benzoate',
    names: ['sodium benzoate', 'бензоат натрия', 'e211', 'benzoic acid', 'бензойная кислота'],
    category: 'caution',
    group: 'Консерванты',
    concern: 'С витамином C образует канцероген бензол',
    description: 'Консервант. В сочетании с аскорбиновой кислотой образует бензол — известный канцероген. Распространённый аллерген.'
  },
  {
    id: 'microplastics',
    names: ['polyethylene', 'nylon-12', 'nylon-6', 'polymethyl methacrylate', 'pmma', 'полиэтилен', 'нейлон'],
    category: 'caution',
    group: 'Микропластик',
    concern: 'Загрязнение среды, накопление в организме',
    description: 'Синтетические полимерные частицы. Не биоразлагаются, накапливаются в экосистемах и тканях человека. Запрещены в смываемой косметике во многих странах.'
  },

  // ═══════════════════════════════════
  // БЕЗОПАСНЫЕ ИНГРЕДИЕНТЫ
  // ═══════════════════════════════════

  {
    id: 'water',
    names: ['water', 'aqua', 'вода', 'aqua purificata', 'eau'],
    category: 'safe',
    group: 'Основа',
    concern: null,
    description: 'Очищенная вода — основа большинства косметических продуктов. Абсолютно безопасна.'
  },
  {
    id: 'glycerin',
    names: ['glycerin', 'glycerol', 'глицерин', 'глицерол', 'glycerine'],
    category: 'safe',
    group: 'Увлажнители',
    concern: null,
    description: 'Природный увлажнитель, привлекающий влагу из воздуха. Безопасен для всех типов кожи.'
  },
  {
    id: 'aloe',
    names: ['aloe barbadensis', 'aloe vera', 'алоэ', 'aloe leaf juice', 'aloe barbadensis leaf juice', 'экстракт алоэ'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Растительный экстракт с противовоспалительными, увлажняющими и заживляющими свойствами. Хорошо переносится большинством типов кожи.'
  },
  {
    id: 'tocopherol',
    names: ['tocopherol', 'vitamin e', 'токоферол', 'витамин е', 'tocopheryl acetate', 'alpha-tocopherol'],
    category: 'safe',
    group: 'Витамины',
    concern: null,
    description: 'Витамин E — мощный природный антиоксидант. Защищает кожу от окислительного стресса, способствует регенерации.'
  },
  {
    id: 'ascorbic_acid',
    names: ['ascorbic acid', 'vitamin c', 'аскорбиновая кислота', 'витамин с', 'sodium ascorbyl phosphate', 'ascorbyl glucoside', 'magnesium ascorbyl phosphate'],
    category: 'safe',
    group: 'Витамины',
    concern: null,
    description: 'Витамин C — антиоксидант с осветляющим эффектом. Стимулирует синтез коллагена, защищает от УФ-излучения. Один из наиболее исследованных активных ингредиентов.'
  },
  {
    id: 'panthenol',
    names: ['panthenol', 'dexpanthenol', 'провитамин b5', 'пантенол', 'd-panthenol'],
    category: 'safe',
    group: 'Витамины',
    concern: null,
    description: 'Провитамин B5. Глубоко увлажняет, ускоряет заживление, снимает раздражение. Хорошо переносится даже чувствительной кожей.'
  },
  {
    id: 'hyaluronic_acid',
    names: ['hyaluronic acid', 'sodium hyaluronate', 'гиалуроновая кислота', 'гиалуронат натрия'],
    category: 'safe',
    group: 'Увлажнители',
    concern: null,
    description: 'Природный компонент кожи. Удерживает воду в объёме до 1000 раз превышающем собственную массу. Интенсивно увлажняет, биосовместим и гипоаллергенен.'
  },
  {
    id: 'jojoba',
    names: ['jojoba', 'simmondsia chinensis', 'масло жожоба', 'jojoba oil', 'jojoba seed oil'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Жидкий воск, близкий по составу к кожному себуму. Хорошо переносится жирной кожей. Обладает противовоспалительными свойствами, не окисляется.'
  },
  {
    id: 'argan',
    names: ['argan oil', 'argania spinosa', 'масло арганы', 'аргановое масло', 'argania spinosa kernel oil'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Натуральное масло, богатое витамином E и полиненасыщенными жирными кислотами. Питает, увлажняет и защищает кожу и волосы.'
  },
  {
    id: 'shea',
    names: ['shea butter', 'butyrospermum parkii', 'масло ши', 'масло карите', 'butyrospermum parkii butter'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Натуральное масло из орехов дерева ши. Богато жирными кислотами и витаминами. Питает и смягчает кожу, гипоаллергенно.'
  },
  {
    id: 'coconut',
    names: ['coconut oil', 'cocos nucifera', 'кокосовое масло', 'copra oil', 'cocos nucifera oil'],
    category: 'safe',
    group: 'Растительные масла',
    concern: null,
    description: 'Натуральное кокосовое масло с антибактериальными свойствами. Питает и увлажняет кожу. У склонных к акне может закупоривать поры.'
  },
  {
    id: 'niacinamide',
    names: ['niacinamide', 'nicotinamide', 'vitamin b3', 'ниацинамид', 'никотинамид', 'витамин b3'],
    category: 'safe',
    group: 'Витамины',
    concern: null,
    description: 'Витамин B3. Улучшает барьерные функции кожи, сужает поры, выравнивает тон, борется с акне. Широкая доказательная база эффективности и безопасности.'
  },
  {
    id: 'allantoin',
    names: ['allantoin', 'аллантоин'],
    category: 'safe',
    group: 'Заживляющие',
    concern: null,
    description: 'Природное вещество из растений (окопник, пшеница). Стимулирует регенерацию клеток, смягчает и успокаивает кожу.'
  },
  {
    id: 'citric_acid',
    names: ['citric acid', 'лимонная кислота', 'e330'],
    category: 'safe',
    group: 'Регуляторы pH',
    concern: null,
    description: 'Природная органическая кислота для регулирования pH. В малых концентрациях безопасна для всех типов кожи.'
  },
  {
    id: 'sodium_chloride',
    names: ['sodium chloride', 'хлорид натрия', 'поваренная соль', 'морская соль'],
    category: 'safe',
    group: 'Стабилизаторы',
    concern: null,
    description: 'Обычная поваренная соль. Используется как загуститель и регулятор реологических свойств. Абсолютно безопасна.'
  },
  {
    id: 'chamomile',
    names: ['chamomile', 'anthemis nobilis', 'matricaria', 'ромашка', 'chamomilla recutita', 'экстракт ромашки'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Экстракт ромашки. Противовоспалительный, успокаивающий, антиоксидантный эффект. Идеален для чувствительной кожи.'
  },
  {
    id: 'green_tea',
    names: ['green tea', 'camellia sinensis', 'зелёный чай', 'camellia sinensis leaf extract', 'egcg'],
    category: 'safe',
    group: 'Растительные экстракты',
    concern: null,
    description: 'Один из наиболее мощных антиоксидантов в косметике. Содержит катехины (EGCG) с противовоспалительными и антибактериальными свойствами.'
  },
  {
    id: 'zinc_oxide',
    names: ['zinc oxide', 'оксид цинка', 'zno'],
    category: 'safe',
    group: 'Физические UV-фильтры',
    concern: null,
    description: 'Минеральный UV-фильтр. Отражает УФ-лучи, не проникает в кожу. Обладает противовоспалительными свойствами, рекомендован для чувствительной кожи и детей.'
  },
  {
    id: 'titanium_dioxide',
    names: ['titanium dioxide', 'диоксид титана', 'ci 77891'],
    category: 'safe',
    group: 'Физические UV-фильтры',
    concern: null,
    description: 'Минеральный UV-фильтр и пигмент. Физически отражает солнечный свет. Безопасен при нанесении на кожу.'
  },
  {
    id: 'ceramide',
    names: ['ceramide', 'ceramide np', 'ceramide ap', 'ceramide eop', 'керамиды', 'ceramides'],
    category: 'safe',
    group: 'Барьерные компоненты',
    concern: null,
    description: 'Природные липиды, составляющие основу барьера кожи. Восстанавливают повреждённый барьер, удерживают влагу. Особенно важны при атопическом дерматите.'
  },
  {
    id: 'fatty_alcohols',
    names: ['cetyl alcohol', 'cetearyl alcohol', 'stearyl alcohol', 'behenyl alcohol', 'цетиловый спирт', 'цетеариловый спирт', 'стеариловый спирт'],
    category: 'safe',
    group: 'Жирные спирты',
    concern: null,
    description: 'Высокомолекулярные жирные спирты. Несмотря на название, не сушат кожу. Являются эмолентами и стабилизаторами эмульсий. Полностью безопасны.'
  },
  {
    id: 'lactic_acid',
    names: ['lactic acid', 'молочная кислота', 'ammonium lactate', 'sodium lactate', 'лактат натрия'],
    category: 'safe',
    group: 'АНА-кислоты',
    concern: null,
    description: 'Природная альфа-гидроксикислота. Мягко отшелушивает, увлажняет, улучшает текстуру. Является натуральным компонентом увлажняющего фактора кожи.'
  },
  {
    id: 'retinol',
    names: ['retinol', 'retinal', 'ретинол', 'vitamin a', 'витамин а'],
    category: 'safe',
    group: 'Ретиноиды',
    concern: null,
    description: 'Витамин A. Стимулирует обновление клеток, уменьшает морщины. Один из наиболее исследованных антивозрастных ингредиентов. Требует SPF днём. Не при беременности.'
  },
  {
    id: 'salicylic_acid',
    names: ['salicylic acid', 'салициловая кислота', 'beta hydroxy acid', 'willow bark extract'],
    category: 'safe',
    group: 'ВНА-кислоты',
    concern: null,
    description: 'Бета-гидроксикислота. Растворяется в масле, проникает в поры, растворяет излишки кожного сала. Эффективна против акне и чёрных точек.'
  },
  {
    id: 'sodium_pca',
    names: ['sodium pca', 'натрия пка', 'pyroglutamic acid', 'пироглутаминовая кислота'],
    category: 'safe',
    group: 'Увлажнители',
    concern: null,
    description: 'Природный компонент NMF (натурального увлажняющего фактора) кожи. Мощный гигроскопичный увлажнитель.'
  },
  {
    id: 'beta_glucan',
    names: ['beta-glucan', 'beta glucan', 'бета-глюкан'],
    category: 'safe',
    group: 'Увлажнители',
    concern: null,
    description: 'Природный полисахарид из овса или грибов. Глубоко увлажняет, успокаивает кожу, стимулирует иммунную функцию кожи.'
  },
  {
    id: 'xanthan_gum',
    names: ['xanthan gum', 'ксантановая камедь', 'e415'],
    category: 'safe',
    group: 'Загустители',
    concern: null,
    description: 'Природный полисахарид, получаемый ферментацией. Безопасный загуститель и стабилизатор эмульсий. Хорошо переносится кожей.'
  },
  {
    id: 'carbomer',
    names: ['carbomer', 'carbopol', 'карбомер', 'карбопол', 'acrylates/c10-30 alkyl acrylate crosspolymer'],
    category: 'safe',
    group: 'Загустители',
    concern: null,
    description: 'Синтетический полимер акриловой кислоты. Используется как загуститель и гелеобразующий агент. В косметических концентрациях безопасен.'
  },
  {
    id: 'cocamidopropyl_betaine',
    names: ['cocamidopropyl betaine', 'capb', 'кокамидопропил бетаин'],
    category: 'safe',
    group: 'Мягкие ПАВ',
    concern: null,
    description: 'Мягкое поверхностно-активное вещество на основе кокосового масла. Значительно мягче SLS/SLES, хорошо переносится кожей. Используется как альтернатива агрессивным ПАВ.'
  }
];
