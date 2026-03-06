// Cosmetics Ingredients Database
// Categories: 'harmful' | 'caution' | 'safe'

const INGREDIENTS = [

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
