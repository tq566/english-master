// 语法知识库：3 级难度 15 个知识点，每个含讲解+3 例句+4 道练习
window.GRAMMAR_BANK = [
  {
    id: "gram-01",
    level: 1,
    topic: "时态",
    title: "一般现在时与现在进行时",
    explanation: "一般现在时表示经常性、习惯性的动作或客观事实，主语是第三人称单数时动词要加 -s 或 -es，结构为“主语+动词原形/三单形式”，常与 usually、often、every day 等标志词连用。现在进行时表示说话时正在进行的动作，结构为“be+动词-ing”，常与 now、look、listen 等词连用。易错点：like、know、want 等状态动词一般不用进行时；否定句和疑问句要借助 do/does，并注意动词还原为原形。",
    examples: [
      { en: "She usually gets up at six.", zh: "她通常六点起床。" },
      { en: "Look! The children are flying kites in the park.", zh: "看！孩子们正在公园里放风筝。" },
      { en: "We don't go to school on Sundays.", zh: "我们周日不上学。" }
    ],
    exercises: [
      { q: "Look! The children ______ in the park.", options: ["play", "plays", "are playing", "played"], answer: 2, explain: "look 提示动作正在进行，用现在进行时 are playing。" },
      { q: "My father ______ newspapers every evening.", options: ["read", "reads", "is reading", "to read"], answer: 1, explain: "every evening 是一般现在时的标志词，主语 my father 是第三人称单数，动词用 reads。" },
      { q: "Listen! Someone ______ the piano next door.", options: ["is playing", "plays", "play", "played"], answer: 0, explain: "listen 提示动作正在进行，主语 someone 用 is playing。" },
      { q: "The earth ______ around the sun.", options: ["go", "goes", "going", "is going"], answer: 1, explain: "客观事实用一般现在时，主语 the earth 是第三人称单数，动词用 goes。" }
    ]
  },
  {
    id: "gram-02",
    level: 1,
    topic: "名词",
    title: "名词复数",
    explanation: "可数名词表示两个及以上时要用复数形式。规则变化：一般直接加 -s；以 s、x、ch、sh 结尾的加 -es；以“辅音字母+y”结尾的变 y 为 i 再加 -es；以 f、fe 结尾的多变 v 再加 -es，如 leaf 变 leaves。不规则变化需单独记忆，如 man 变 men、child 变 children、foot 变 feet。易错点：sheep、deer 等单复数同形；some、many、a lot of 后必须接复数名词；man、woman 作定语修饰复数名词时自身也要变复数。",
    examples: [
      { en: "I bought two kilos of tomatoes yesterday.", zh: "我昨天买了两公斤西红柿。" },
      { en: "There are many sheep on the hill.", zh: "山上有许多绵羊。" },
      { en: "The leaves turn yellow in autumn.", zh: "秋天树叶变黄。" }
    ],
    exercises: [
      { q: "How many ______ are there in your family?", options: ["people", "peoples", "persons", "person"], answer: 0, explain: "how many 后接可数名词复数，people 本身就是复数，意为“人们”；peoples 意为“民族”，不符合句意。" },
      { q: "Look at those ______! They are eating grass on the hill.", options: ["sheeps", "sheep", "sheepes", "a sheep"], answer: 1, explain: "sheep 是单复数同形的名词，those 后用原形 sheep，不能加 s。" },
      { q: "The baby has two white ______.", options: ["tooths", "toothes", "teeth", "tooth"], answer: 2, explain: "tooth 是不规则变化名词，复数为 teeth，two 后必须用复数。" },
      { q: "Mr. Smith has two ______, a son and a daughter.", options: ["childs", "childrens", "child", "children"], answer: 3, explain: "child 的复数是不规则变化 children，不能加 s。" }
    ]
  },
  {
    id: "gram-03",
    level: 1,
    topic: "冠词",
    title: "冠词 a、an 与 the 的用法",
    explanation: "不定冠词 a 用于以辅音音素开头的单词前，an 用于以元音音素开头的单词前，关键看读音而不是字母，如 an hour、a useful book。定冠词 the 表示特指，用于上文提到过的人或物、世界上独一无二的事物以及序数词、最高级之前。易错点：三餐、球类运动、学科名词前一般不加冠词；play the piano 中的 the 不可省略；an hour 中 h 虽是辅音字母但不发音。",
    examples: [
      { en: "She is an honest girl, and we all trust her.", zh: "她是个诚实的女孩，我们都信任她。" },
      { en: "The sun rises in the east.", zh: "太阳从东方升起。" },
      { en: "He had lunch at school and then played basketball.", zh: "他在学校吃了午饭，然后打了篮球。" }
    ],
    exercises: [
      { q: "This is ______ useful dictionary for beginners.", options: ["a", "an", "the", "/"], answer: 0, explain: "useful 以辅音音素 /j/ 开头，虽然首字母是元音 u，但仍用 a。" },
      { q: "______ moon moves around ______ earth.", options: ["/, /", "The, the", "A, an", "The, a"], answer: 1, explain: "月球和地球都是世界上独一无二的事物，前面都要用定冠词 the。" },
      { q: "He is ______ tallest boy in our class.", options: ["a", "an", "the", "/"], answer: 2, explain: "形容词最高级前必须加定冠词 the。" },
      { q: "We often play ______ football after ______ class.", options: ["the, /", "/, /", "a, the", "the, a"], answer: 1, explain: "球类运动和学科、三餐等名词前不加冠词，两空都用零冠词。" }
    ]
  },
  {
    id: "gram-04",
    level: 1,
    topic: "代词",
    title: "人称代词与物主代词",
    explanation: "人称代词分主格和宾格：主格作主语，如 I、he、they；宾格作动词或介词的宾语，如 me、him、them。物主代词分两类：形容词性物主代词后面必须接名词，如 my、your、their；名词性物主代词可单独使用，相当于“形容词性物主代词+名词”，如 mine、yours、theirs。易错点：介词后要用宾格；名词性物主代词后面不能再加名词；“of+名词性物主代词”可构成双重所有格，如 a friend of mine。",
    examples: [
      { en: "This book is mine, and that one is yours.", zh: "这本书是我的，那本是你的。" },
      { en: "Her mother is a teacher; she loves her students very much.", zh: "她的妈妈是一名老师，她非常爱她的学生。" },
      { en: "Tom and I are good friends. You can play with us.", zh: "汤姆和我是好朋友，你可以和我们一起玩。" }
    ],
    exercises: [
      { q: "______ is my sister. Do you know ______?", options: ["She, her", "Her, she", "She, she", "Her, her"], answer: 0, explain: "第一空作主语用主格 she；第二空作动词 know 的宾语用宾格 her。" },
      { q: "These are my books, and those on the desk are ______.", options: ["you", "your", "yourself", "yours"], answer: 3, explain: "空格后无名词，要用名词性物主代词 yours，相当于 your books。" },
      { q: "The teacher asked ______ to hand in ______ homework on time.", options: ["we, our", "us, our", "us, ours", "we, ours"], answer: 1, explain: "asked 后作宾语用宾格 us；homework 前要用形容词性物主代词 our。" },
      { q: "— Is this ______ bike? — No, it isn't ______.", options: ["hers, her", "her, hers", "her, her", "hers, hers"], answer: 1, explain: "bike 是名词，前面用形容词性物主代词 her；第二空后无名词，用名词性物主代词 hers。" }
    ]
  },
  {
    id: "gram-05",
    level: 1,
    topic: "形容词",
    title: "形容词比较级与最高级",
    explanation: "两者比较用比较级，结构为“比较级+than”；三者及以上比较用最高级，前面常加 the。规则变化：单音节词一般在词尾加 -er、-est，重读闭音节要双写末尾辅音字母再加，如 big 变 bigger；以辅音字母+y 结尾的变 y 为 i 再加；多音节词用 more、most 构成。易错点：比较级可用 much、even、a little 修饰，但不能用 very；than 前后比较对象要一致；the more..., the more... 表示“越……越……”。",
    examples: [
      { en: "My room is bigger than yours.", zh: "我的房间比你的大。" },
      { en: "She is the most careful student in our class.", zh: "她是我们班最仔细的学生。" },
      { en: "The more you practice, the better you will speak English.", zh: "你练习得越多，英语就会说得越好。" }
    ],
    exercises: [
      { q: "This T-shirt is too small for me. Please show me a ______ one.", options: ["big", "bigger", "biggest", "more big"], answer: 1, explain: "衣服太小想换大的，是两者之间的隐含比较，用比较级 bigger。" },
      { q: "Lucy is ______ than any other girl in her class.", options: ["taller", "tall", "tallest", "the tallest"], answer: 0, explain: "比较级+than any other+单数名词 表示“比班里其他任何女孩都高”，用比较级 taller。" },
      { q: "Of all the subjects, I like English ______.", options: ["good", "better", "best", "well"], answer: 2, explain: "of all the subjects 表示三者以上范围的比较，用最高级 best。" },
      { q: "He is ______ more careful than his brother.", options: ["much", "very", "so", "too"], answer: 0, explain: "比较级可以用 much、even 等词修饰加强程度，但 very、so、too 只能修饰原级。" }
    ]
  },
  {
    id: "gram-06",
    level: 2,
    topic: "时态",
    title: "现在完成时",
    explanation: "现在完成时表示过去发生的动作对现在造成的影响或结果，也表示从过去某时持续到现在的动作或状态。结构为“have/has+过去分词”，has 用于第三人称单数。标志词有 already、yet、just、ever、never、since、for、so far、recently 等。易错点：终止性动词如 buy、die、join、leave 不能与表示一段时间的 for、since 连用，常换成 have kept、have been dead 等延续性表达；have been to 意为“去过”，have gone to 意为“去了还没回来”。",
    examples: [
      { en: "I have already finished my homework.", zh: "我已经完成了作业。" },
      { en: "He has lived in Beijing since 2018.", zh: "自 2018 年以来他一直住在北京。" },
      { en: "Have you ever been to the Great Wall?", zh: "你去过长城吗？" }
    ],
    exercises: [
      { q: "My uncle ______ this car for five years.", options: ["bought", "has bought", "had", "has had"], answer: 3, explain: "for five years 表一段持续的时间，buy 是终止性动词，要换成延续性的 has had。" },
      { q: "— ______ you ever ______ to Shanghai? — Yes, twice.", options: ["Did, go", "Have, been", "Have, gone", "Do, go"], answer: 1, explain: "ever 和 twice 提示“去过某地已回来”，用 have been to；have gone to 表示“去了还没回”。" },
      { q: "She has worked in this factory ______ she came to the city.", options: ["since", "for", "when", "until"], answer: 0, explain: "since 后接过去的时间点或从句，表示“自从……以来”，从句用一般过去时，主句用现在完成时。" },
      { q: "— Where is Jack? — He ______ to the library.", options: ["has been", "has gone", "went", "goes"], answer: 1, explain: "杰克现在不在场，说明“去了还没回来”，用 has gone to。" }
    ]
  },
  {
    id: "gram-07",
    level: 2,
    topic: "语态",
    title: "被动语态",
    explanation: "被动语态表示主语是动作的承受者，基本结构为“be+及物动词的过去分词”，时态由 be 体现：一般现在时用 am/is/are done，一般过去时用 was/were done，一般将来时用 will be done，含情态动词用“情态动词+be done”。只有及物动词才有被动语态。易错点：happen、take place、belong to 等不及物动词短语不能用于被动；by 后接动作执行者，不需要时可省略；主动句中 make、see sb. do sth. 变为被动后要补上 to。",
    examples: [
      { en: "English is spoken by more and more people.", zh: "越来越多的人在说英语。" },
      { en: "The classroom was cleaned by the students yesterday.", zh: "教室昨天被学生们打扫过了。" },
      { en: "The work must be finished before Friday.", zh: "这项工作必须在周五之前完成。" }
    ],
    exercises: [
      { q: "Paper ______ by Cai Lun about 2,000 years ago.", options: ["invented", "was invented", "is invented", "invents"], answer: 1, explain: "纸张是被发明的，要用被动语态；ago 表过去，用 was invented。" },
      { q: "The new library ______ next year.", options: ["will build", "was built", "builds", "will be built"], answer: 3, explain: "图书馆是“被建造”，且 next year 表将来，用 will be built。" },
      { q: "This song ______ by many young people.", options: ["is loved", "loves", "loved", "is loving"], answer: 0, explain: "歌曲是被喜爱的，主语 song 是第三人称单数，一般现在时被动用 is loved。" },
      { q: "The boy was made ______ the classroom yesterday afternoon.", options: ["clean", "to clean", "cleaning", "cleaned"], answer: 1, explain: "make sb. do sth. 变被动后不定式要还原 to，即 be made to do sth.。" }
    ]
  },
  {
    id: "gram-08",
    level: 2,
    topic: "从句",
    title: "定语从句",
    explanation: "定语从句修饰名词或代词，被修饰的词叫先行词，从句紧跟在先行词之后。关系代词：先行词指人用 who、whom、whose，指物用 which、that，关系词在从句中作主语、宾语或定语。关系副词：先行词表时间用 when，表地点用 where，表原因用 why，在从句中作状语。易错点：先行词被序数词、最高级、the only、all 等修饰时关系词用 that；介词后只能用 which 或 whom；关系词作从句宾语时可以省略。",
    examples: [
      { en: "The girl who is standing there is my sister.", zh: "站在那儿的那个女孩是我的妹妹。" },
      { en: "This is the house where I lived ten years ago.", zh: "这就是我十年前住过的房子。" },
      { en: "I still remember the day when we first met.", zh: "我仍然记得我们初次见面的那一天。" }
    ],
    exercises: [
      { q: "Do you know the man ______ is talking with our teacher?", options: ["which", "whose", "who", "whom"], answer: 2, explain: "先行词 the man 指人，且在从句中作主语，用关系代词 who。" },
      { q: "This is the best film ______ I have ever seen.", options: ["which", "that", "who", "what"], answer: 1, explain: "先行词被最高级 the best 修饰，关系词只能用 that。" },
      { q: "I'll never forget the days ______ we spent together in Beijing.", options: ["which", "when", "where", "on which"], answer: 0, explain: "spend 是及物动词，先行词 the days 在从句中作宾语而不是状语，用关系代词 which 或 that。" },
      { q: "The factory ______ my father works is in the east of the city.", options: ["that", "which", "where", "in that"], answer: 2, explain: "先行词 the factory 表地点，在从句中作地点状语，用关系副词 where。" }
    ]
  },
  {
    id: "gram-09",
    level: 2,
    topic: "名词性从句",
    title: "宾语从句",
    explanation: "宾语从句在复合句中作宾语，常由三类词引导：that 引导陈述句作宾语，本身无词义，常可省略；if 或 whether 引导一般疑问句，意为“是否”；what、who、when、where、why、how 等连接代词或副词引导特殊疑问句。三大考查重点：从句必须用陈述语序；主句是过去时时，从句要用相应的过去时态，但客观真理仍用一般现在时；句末有 or not 时只能用 whether 引导。",
    examples: [
      { en: "He said that he would come to the party.", zh: "他说他会来参加聚会。" },
      { en: "I don't know whether she will accept the invitation or not.", zh: "我不知道她是否会接受邀请。" },
      { en: "Could you tell me where the nearest bank is?", zh: "你能告诉我最近的银行在哪里吗？" }
    ],
    exercises: [
      { q: "Do you know ______?", options: ["where does he live", "where he lives", "where he live", "he lives where"], answer: 1, explain: "宾语从句必须用陈述语序，即“连接词+主语+谓语”，所以是 where he lives。" },
      { q: "She asked me ______ I could help her with her English.", options: ["that", "what", "which", "if"], answer: 3, explain: "原句是一般疑问句，变宾语从句时用 if 或 whether 引导，意为“是否”。" },
      { q: "I wonder ______ or not he will attend the meeting.", options: ["whether", "if", "that", "what"], answer: 0, explain: "与 or not 连用时只能用 whether，不能用 if。" },
      { q: "The teacher told us that the earth ______ around the sun.", options: ["moved", "moves", "move", "would move"], answer: 1, explain: "虽然主句是过去时，但从句内容是客观真理，时态不变，仍用一般现在时 moves。" }
    ]
  },
  {
    id: "gram-10",
    level: 2,
    topic: "情态动词",
    title: "常用情态动词辨析",
    explanation: "情态动词表示说话人的语气和态度，后接动词原形，没有人称和数的变化。can 表示能力、许可或可能性；may 表示请求或“可能”；must 表示“必须”或语气很强的肯定推测；need 作情态动词多用于疑问句和否定句；should 表示建议和责任。易错点：以 Must 开头的一般疑问句，否定回答用 needn't 而不是 mustn't；can't 表示否定推测“不可能”，与 must 表示的肯定推测相对；情态动词后接完成式可表示对过去的推测。",
    examples: [
      { en: "You must return the book on time.", zh: "你必须按时归还这本书。" },
      { en: "May I use your dictionary?", zh: "我可以用一下你的词典吗？" },
      { en: "The light is on; he must be at home.", zh: "灯亮着，他一定在家。" }
    ],
    exercises: [
      { q: "— Must I finish the report today? — No, you ______. You can do it tomorrow.", options: ["mustn't", "can't", "needn't", "shouldn't"], answer: 2, explain: "must 开头的一般疑问句，否定回答用 needn't，表示“不必”；mustn't 意为“禁止”。" },
      { q: "The ground is wet. It ______ have rained last night.", options: ["must", "can", "should", "need"], answer: 0, explain: "“must+have done”表示对过去发生事情语气较强的肯定推测，意为“肯定已经”。" },
      { q: "______ you please pass me the salt?", options: ["Must", "Would", "Should", "Need"], answer: 1, explain: "“Would you please+动词原形”是礼貌的请求句型，must 无此用法。" },
      { q: "He isn't at school. He ______ be ill at home.", options: ["must", "can't", "may", "needn't"], answer: 2, explain: "表示可能性较小的推测“可能生病在家”用 may；must 语气过强，can't 是否定推测。" }
    ]
  },
  {
    id: "gram-11",
    level: 3,
    topic: "倒装",
    title: "倒装结构",
    explanation: "倒装分为部分倒装和完全倒装。部分倒装只把助动词、情态动词或 be 提到主语之前，常见于三种情况：否定词或含否定意义的词如 never、hardly、seldom、not only、no sooner 置于句首；only 加状语置于句首；so/such...that 结构中 so 或 such 部分提前。完全倒装把整个谓语动词放在主语前，常用于表示地点的介词短语提前且主语为名词时。易错点：not only...but also 连接两个分句时只倒装前一分句；hardly...when 结构表示“刚……就”。",
    examples: [
      { en: "Never have I seen such a beautiful sunset.", zh: "我从未见过如此美丽的日落。" },
      { en: "Only in this way can we solve the problem.", zh: "只有这样我们才能解决这个问题。" },
      { en: "In front of the house stands a tall tree.", zh: "房前矗立着一棵大树。" }
    ],
    exercises: [
      { q: "Not until midnight ______ his work.", options: ["he finished", "did he finish", "he did finish", "finished he"], answer: 1, explain: "not until 置于句首时主句要部分倒装，用助动词 did 提前：did he finish。" },
      { q: "Hardly ______ the station when the train left.", options: ["had I reached", "I had reached", "I reached", "did I reach"], answer: 0, explain: "hardly 置于句首引起部分倒装；hardly...when 表示“刚……就”，从句用过去完成时 had reached。" },
      { q: "So loudly ______ that everyone in the room could hear her.", options: ["she spoke", "spoke she", "did she speak", "she speaks"], answer: 2, explain: "so+副词置于句首时主句部分倒装，且由 that 从句的 could 可知是过去时，用 did she speak。" },
      { q: "______, he would have passed the exam.", options: ["If he worked harder", "Had he worked harder", "Does he work harder", "He had worked harder"], answer: 1, explain: "虚拟条件句省略 if 时要把 had 提前构成倒装，即 had he worked harder，表示对过去的假设。" }
    ]
  },
  {
    id: "gram-12",
    level: 3,
    topic: "非谓语动词",
    title: "非谓语动词",
    explanation: "非谓语动词包括不定式、动名词和分词，在句中不能单独作谓语。不定式 to do 常表目的或将来的动作，可作主语、宾语、定语和状语；动名词 doing 作主语或宾语，表示一般性、习惯性动作；现在分词表示主动或进行，过去分词表示被动或完成，多作定语、状语和补语。易错点：enjoy、finish、avoid、suggest、practise 等动词后只能接动名词；分词作状语时其逻辑主语必须与句子主语一致，表被动用 done，表主动用 doing。",
    examples: [
      { en: "To master a language, you need a lot of practice.", zh: "要掌握一门语言，你需要大量的练习。" },
      { en: "I suggest going out for a walk after dinner.", zh: "我建议晚饭后出去散步。" },
      { en: "Seen from the hill, the city looks very beautiful.", zh: "从山上看，这座城市非常美丽。" }
    ],
    exercises: [
      { q: "He suggested ______ a meeting to discuss the plan.", options: ["to hold", "holding", "hold", "held"], answer: 1, explain: "suggest 后只能接动名词作宾语，不接不定式，故用 holding。" },
      { q: "______ more attention, the trees could have grown better.", options: ["Given", "Giving", "To give", "Give"], answer: 0, explain: "trees 与 give 是被动关系（被给予关注），分词作状语用过去分词 Given。" },
      { q: "The ______ news made everyone ______.", options: ["excited, excited", "exciting, excited", "exciting, exciting", "excited, exciting"], answer: 1, explain: "news 令人兴奋用 exciting（主动）；everyone 感到兴奋用 excited（感受），即“-ing 修饰物，-ed 修饰人”。" },
      { q: "She kept me ______ for half an hour outside the office.", options: ["waiting", "wait", "to wait", "waited"], answer: 0, explain: "keep sb. doing sth. 表示“让某人一直做某事”，宾补用现在分词 waiting。" }
    ]
  },
  {
    id: "gram-13",
    level: 3,
    topic: "独立主格",
    title: "独立主格结构",
    explanation: "独立主格结构由“名词或代词+分词、形容词、副词、介词短语或名词”构成，位置在句首或句末，用逗号与主句隔开，表示伴随、原因、时间或条件。它的逻辑主语与主句主语不一致，这是它与分词作状语的重要区别。逻辑主语是分词动作的执行者用 doing，是承受者用 done。易错点：独立主格内部不能出现谓语动词；with 复合结构“with+宾语+doing/done/介词短语”是其常见变体，多作伴随状语；There be 句型变为独立主格用 there being。",
    examples: [
      { en: "Weather permitting, we will go hiking tomorrow.", zh: "如果天气允许，我们明天去远足。" },
      { en: "The work finished, we went home happily.", zh: "工作完成后，我们开心地回家了。" },
      { en: "He stood there, with his eyes fixed on the picture.", zh: "他站在那儿，眼睛盯着那幅画。" }
    ],
    exercises: [
      { q: "The signal ______, the train started to move slowly.", options: ["given", "giving", "was given", "to give"], answer: 0, explain: "signal 与 give 是被动关系，独立主格用“名词+过去分词”，不能出现谓语 was given。" },
      { q: "Time ______, we'd better hurry to the airport.", options: ["permit", "permits", "permitting", "permitted"], answer: 2, explain: "time 与 permit 是主动关系，独立主格用“名词+现在分词”，即 time permitting，是固定表达。" },
      { q: "He entered the room, ______ red with cold.", options: ["his nose was", "his nose being", "his nose is", "nose his being"], answer: 1, explain: "逗号后不能再接完整句子，用“名词+being+形容词”构成独立主格表原因或伴随。" },
      { q: "______ no bus, we had to walk home.", options: ["There was", "There being", "There is", "Being there"], answer: 1, explain: "there be 句型的独立主格形式为 there being，表原因，主句用 had to walk。" }
    ]
  },
  {
    id: "gram-14",
    level: 3,
    topic: "强调句",
    title: "强调句型",
    explanation: "强调句型的基本结构为“It is/was+被强调部分+that/who+句子其余部分”，可以强调主语、宾语和状语；强调人时可用 who，强调其他成分一律用 that；is 还是 was 取决于原句谓语的时态。判断方法：去掉 It is/was 与 that 后，句子剩余部分仍完整，即为强调句。强调谓语动词则用“do/does/did+动词原形”。易错点：强调时间、地点状语时只能用 that，不能用 when 或 where，这是与定语从句的核心区别。",
    examples: [
      { en: "It was in the library that I met her for the first time.", zh: "我第一次遇见她是在图书馆。" },
      { en: "It is English that many students find hard to learn.", zh: "很多学生发现难学的是英语。" },
      { en: "He did come to the meeting yesterday.", zh: "他昨天确实来参加了会议。" }
    ],
    exercises: [
      { q: "It was in the park ______ we took many photos.", options: ["where", "that", "which", "when"], answer: 1, explain: "强调地点状语 in the park，强调句中一律用 that，不能用 where。" },
      { q: "It was on Monday ______ he arrived in Beijing.", options: ["when", "on which", "that", "which"], answer: 2, explain: "强调时间状语 on Monday，强调句型用 that，不能用 when。" },
      { q: "It is the ability to do the work ______ matters, not where you come from.", options: ["that", "what", "which", "who"], answer: 0, explain: "强调主语 the ability to do the work，强调句用 that；去掉 it is...that 后句子仍完整。" },
      { q: "— ______ that you called me at ten last night? — Yes, I did.", options: ["Is it", "Was it", "Did it", "Was there"], answer: 1, explain: "强调句型的一般疑问句把 be 提前；原动作发生在过去，用 Was it that...。" }
    ]
  },
  {
    id: "gram-15",
    level: 3,
    topic: "虚拟语气",
    title: "虚拟语气高级用法",
    explanation: "虚拟语气的高级用法主要有三类。一是错综时间条件句：从句与主句时间不一致，要按各自时间调整动词形式，如从句用过去完成时、主句用 would+动词原形。二是省略 if 的倒装条件句：把 were、had、should 提到主语前。三是名词性从句中的虚拟：suggest、order、insist 等动词后的宾语从句，以及 important、essential 等形容词后的主语从句，谓语用“should+动词原形”，should 可省略。易错点：if only 感叹句用过去式或过去完成时表达遗憾。",
    examples: [
      { en: "If I had followed his advice, I would be rich now.", zh: "要是我当初听了他的建议，我现在就富有了。" },
      { en: "Had he been more careful, he wouldn't have made the mistake.", zh: "如果他再细心一点，就不会犯这个错误了。" },
      { en: "It is essential that every member be present at the meeting.", zh: "每位成员都必须出席会议，这一点至关重要。" }
    ],
    exercises: [
      { q: "If he ______ my advice, he would be much better now.", options: ["took", "had taken", "has taken", "would take"], answer: 1, explain: "从句动作发生在过去用 had taken，主句表现在的结果用 would be，属于错综时间虚拟条件句。" },
      { q: "______ the fog, we should have reached the top of the mountain.", options: ["But for", "If there is", "In case of", "Despite"], answer: 0, explain: "but for 意为“要不是”，引出含蓄条件，主句用 should have done 表示本应做到却没做到。" },
      { q: "The professor suggested that the report ______ before Friday.", options: ["is finished", "would be finished", "be finished", "must be finished"], answer: 2, explain: "suggest 表建议时，其后的宾语从句谓语用“（should）+动词原形”，且报告是被完成，用 be finished。" },
      { q: "If only I ______ how to swim when I was young!", options: ["had learned", "learned", "learn", "will learn"], answer: 0, explain: "if only 感叹句表示对过去的遗憾，谓语用过去完成时 had learned，意为“要是当年学会了该多好”。" }
    ]
  }
];
window.GRAMMAR_BANK_READY = true;
