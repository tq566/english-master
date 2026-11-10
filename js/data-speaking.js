// 口语训练库：3 级难度 × 日常/学术/观点场景，15 个话题
window.SPEAKING_BANK = [
  {
    id: "spk-01",
    topic: "自我介绍",
    scene: "日常交流",
    level: 1,
    intro: "学会用地道的英语介绍自己的姓名、专业和爱好",
    sentences: [
      { en: "Hi, I'm Li Ming. It's a pleasure to meet you.", zh: "嗨，我是李明。很高兴认识你。", tip: "pleasure 注意 /ˈpleʒə/ 的发音，重音在第一音节" },
      { en: "I'm a second-year student majoring in computer science.", zh: "我是一名计算机专业的大二学生。", tip: "majoring in 可连读；enjoy 类 -ing 词尾不要读成硬邦邦的‘硬’" },
      { en: "In my free time, I enjoy playing basketball and listening to music.", zh: "空闲时我喜欢打篮球和听音乐。", tip: "enjoy 重音在第二音节 /ɪnˈdʒɔɪ/；playing basketball 之间可自然连读" },
      { en: "I was born in a small town in the south of China, but now I live in Shanghai.", zh: "我出生在中国南方的一个小镇，但现在住在上海。", tip: "born in 连读；was 弱读为 /wəz/，不要重读" },
      { en: "My dream is to study abroad one day, so I'm working hard to improve my English every day.", zh: "我的梦想是有一天能出国留学，所以我每天都努力提高英语。", tip: "abroad 重音在第二音节 /əˈbrɔːd/；improve 注意 /ɪmˈpruːv/ 的 /pr/ 连贯过渡" }
    ],
    model: {
      en: "Hello, everyone! My name is Li Ming, and I'm twenty years old. I'm a second-year student majoring in computer science at Fudan University. In my free time, I enjoy playing basketball and listening to music, especially pop songs. I was born in a small town in the south of China, but now I live in Shanghai with my parents. My dream is to study abroad one day, so I'm working hard to improve my English every day. Thank you for listening!",
      zh: "大家好！我叫李明，今年二十岁。我是复旦大学计算机专业的大二学生。空闲时间我喜欢打篮球、听音乐，尤其是流行歌曲。我出生在中国南方的一个小镇，现在和父母一起住在上海。我的梦想是有一天能出国留学，所以我每天都很努力地提高英语。谢谢大家的聆听！"
    }
  },
  {
    id: "spk-02",
    topic: "点餐购物",
    scene: "日常交流",
    level: 1,
    intro: "掌握点餐和购物时最常用的礼貌表达与询价句型",
    sentences: [
      { en: "Could I see the menu, please?", zh: "请给我看看菜单好吗？", tip: "Could I 连读为 /kʊdaɪ/；menu 重音在第一音节 /ˈmenjuː/" },
      { en: "I'd like a hamburger and a small Coke, please.", zh: "我想要一个汉堡和一小杯可乐。", tip: "I'd like 读 /aɪd laɪk/，d 只轻触不发满音" },
      { en: "How much does this T-shirt cost?", zh: "这件T恤多少钱？", tip: "much 与 does 分清 /tʃ/ 和 /d/；cost 结尾 /t/ 轻轻收住" },
      { en: "Do you have this shirt in a larger size?", zh: "这件衬衫有大一号的吗？", tip: "larger 注意美音卷舌 /ˈlɑːrdʒər/；size 读 /saɪz/，浊音 /z/ 收尾" },
      { en: "Excuse me, I think there's a mistake in the bill — could you check it for me?", zh: "打扰一下，我觉得账单有误，您能帮我核对一下吗？", tip: "there's a 连读为 /ðerzə/；check it 连读 /tʃekɪt/，礼貌提问句尾语调上扬" }
    ],
    model: {
      en: "Whenever I go to a restaurant, I usually start by asking for the menu. If I'm not sure what to order, I ask the waiter for recommendations. Yesterday, for example, I ordered a hamburger, some French fries, and a small Coke. After the meal, I asked for the bill and checked it carefully. I also like shopping for clothes on weekends. When I need help, I simply say, 'Excuse me, do you have this in a larger size?' Being polite always makes shopping easier and more fun.",
      zh: "每次去餐厅，我通常先要一份菜单。如果不知道点什么，我会请服务员推荐。比如昨天，我点了一个汉堡、一些薯条和一小杯可乐。吃完饭后我要求结账，并仔细核对了账单。周末我也喜欢买衣服。需要帮助时，我只需说：‘打扰一下，这件有大一号的吗？’礼貌待人总能让购物更轻松、更愉快。"
    }
  },
  {
    id: "spk-03",
    topic: "问路",
    scene: "日常交流",
    level: 1,
    intro: "学会礼貌问路、听懂指路并确认行进方向",
    sentences: [
      { en: "Excuse me, where is the nearest bus stop?", zh: "打扰一下，最近的公交车站在哪里？", tip: "Excuse me 读 /ɪkˈskjuːz miː/；nearest 重音在第一音节" },
      { en: "Go straight ahead and turn left at the second crossing.", zh: "一直往前走，在第二个路口左转。", tip: "straight 读 /streɪt/，gh 不发音；turn left 注意连读时的 /n/ 与 /l/ 衔接" },
      { en: "Is it far from here? Can I walk there?", zh: "离这里远吗？我可以走过去吗？", tip: "far from 连读；walk 中的 l 不发音，读 /wɔːk/" },
      { en: "Could you tell me how to get to the railway station?", zh: "您能告诉我怎么去火车站吗？", tip: "get to 连读为 /ɡetə/，t 弱化爆破；railway 重音在第一音节" },
      { en: "Sorry, I'm new here too, but you can ask that policeman over there for help.", zh: "抱歉，我也是刚来这里的，不过你可以请那边那位警察帮忙。", tip: "new here 连读 /njuːhɪə/；policeman 重音在第二音节 /pəˈliːsmən/" }
    ],
    model: {
      en: "Asking for directions is a skill every traveler needs. When I get lost, I walk up to someone politely and say, 'Excuse me, could you tell me how to get to the railway station?' Most people are happy to help. They might say, 'Go straight ahead and turn left at the second crossing.' I always repeat the directions to make sure I understand. If the place is too far to walk, I ask where the nearest bus stop is. With a few simple questions, I usually find my way.",
      zh: "问路是每个旅行者都需要掌握的技能。迷路时，我会礼貌地走向别人说：‘打扰一下，您能告诉我怎么去火车站吗？’大多数人都很乐意帮忙。他们可能会说：‘一直往前走，在第二个路口左转。’我总会把路线复述一遍，确保自己听懂了。如果目的地走路太远，我会问最近的公交车站在哪里。只要问几个简单的问题，我通常都能找到路。"
    }
  },
  {
    id: "spk-04",
    topic: "谈论天气与爱好",
    scene: "日常交流",
    level: 1,
    intro: "用地道英语谈论天气和个人爱好，轻松开启闲聊",
    sentences: [
      { en: "It's a lovely day, isn't it?", zh: "今天天气真好，是吧？", tip: "反义疑问句 isn't it 用升调；lovely 重音在第一音节 /ˈlʌvli/" },
      { en: "It's raining cats and dogs outside.", zh: "外面正下着倾盆大雨。", tip: "习语 raining cats and dogs 中 and 弱读为 /ən/，整体连读要顺" },
      { en: "What do you usually do in your spare time?", zh: "你闲暇时间通常做什么？", tip: "usually 读 /ˈjuːʒuəli/；spare 注意美音卷舌 /sper/" },
      { en: "I'm really fond of hiking. It helps me relax after a long week.", zh: "我特别喜欢徒步，它能帮我在漫长的一周后放松。", tip: "fond of 连读为 /fɒndəv/；really 读 /ˈrɪəli/，两个音节要分开" },
      { en: "Some people prefer staying indoors reading books, while others enjoy outdoor activities like cycling or camping.", zh: "有人喜欢宅在家里看书，也有人喜欢骑车、露营这类户外活动。", tip: "prefer 重音在第二音节 /prɪˈfɜːr/；while others 连读 /waɪlˈʌðərz/ 形成对比" }
    ],
    model: {
      en: "Weather is a perfect topic to start a friendly conversation. On a sunny day, I often say, 'It's a lovely day, isn't it?' and people usually smile and agree. My favorite season is autumn because it's cool and comfortable. As for hobbies, I'm really fond of hiking. Every weekend, I hike in the mountains near my city with my best friends. Hiking not only keeps me fit but also helps me relax after a long week. When it rains, I stay indoors and read books or listen to music quietly.",
      zh: "天气是开启友好交谈的绝佳话题。晴天时我常说：‘今天天气真好，是吧？’人们通常会微笑着表示赞同。我最喜欢的季节是秋天，因为凉爽舒适。说到爱好，我特别喜欢徒步。每个周末我都和好朋友们去城市附近的山里远足。徒步不仅让我保持健康，还能帮我在忙碌一周后放松身心。下雨的时候，我就待在家里安静地看书或听音乐。"
    }
  },
  {
    id: "spk-05",
    topic: "打电话预约",
    scene: "日常交流",
    level: 1,
    intro: "掌握电话预约的礼貌开场、改期协商与确认表达",
    sentences: [
      { en: "Hello, may I speak to Dr. Smith, please?", zh: "你好，请问我能和史密斯医生通话吗？", tip: "May I 连读为 /meɪaɪ/；Dr. 读作 /ˈdɒktər/" },
      { en: "I'm calling to make an appointment for tomorrow morning.", zh: "我打电话是想预约明天上午。", tip: "make an 连读 /meɪkən/；appointment 重音在第二音节 /əˈpɔɪntmənt/" },
      { en: "Would ten o'clock on Friday work for you?", zh: "周五十点您方便吗？", tip: "o'clock 重音在后 /əˈklɒk/；would 弱读为 /wəd/" },
      { en: "I'm afraid I have a meeting at that time. Could we make it a little later?", zh: "恐怕那个时间我有会，我们能约晚一点吗？", tip: "I'm afraid 放慢语速表达歉意；make it a 连读为 /meɪkɪtə/" },
      { en: "Great, so that's four o'clock on Thursday afternoon. Thank you very much — see you then!", zh: "好的，那就是周四下午四点，非常感谢，到时候见！", tip: "that's 弱读 /ðæts/；see you 连读时 /j/ 与 /uː/ 顺滑过渡，收尾语调轻快" }
    ],
    model: {
      en: "Making appointments by phone is a very useful skill. Last week, I called my dentist because I had a bad toothache. I said, 'Hello, may I speak to Dr. Smith, please? I'm calling to make an appointment.' The nurse asked when I was available, so I suggested Friday morning. She checked the schedule and said, 'Would ten o'clock work for you?' I agreed at once. Before hanging up, I repeated the time and thanked her politely. The next day, everything went smoothly, and my tooth felt much better.",
      zh: "打电话预约是一项非常实用的技能。上周我牙疼得厉害，就给牙医打了电话。我说：‘您好，请问我能和史密斯医生通话吗？我想预约一下。’护士问我什么时候方便，我提议周五上午。她查了日程后说：‘十点可以吗？’我立刻答应了。挂电话前，我复述了一遍时间并礼貌地道谢。第二天一切顺利，我的牙齿也感觉好多了。"
    }
  },
  {
    id: "spk-06",
    topic: "校园生活",
    scene: "日常交流",
    level: 2,
    intro: "用更丰富的词汇和句式描述校园学习与社团生活",
    sentences: [
      { en: "How are you getting along with your new classmates?", zh: "你和新同学们相处得怎么样？", tip: "getting along 连读自然，语速可稍快但吐字清晰" },
      { en: "I have to hand in my term paper by next Friday.", zh: "我必须在下周五之前交学期论文。", tip: "have to 习惯读 /hæftə/，t 浊化；hand in 连读 /hændɪn/" },
      { en: "The library is always packed with students during exam weeks.", zh: "考试周图书馆总是挤满了学生。", tip: "packed with 连读 /pæktwɪð/；packed 结尾 /kt/ 两个辅音轻快带过" },
      { en: "Besides attending lectures, I spend most of my time in the lab working on my research project.", zh: "除了上课，我大部分时间都待在实验室做研究项目。", tip: "Besides attending 连读；research 重音在第二音节 /rɪˈsɜːtʃ/" },
      { en: "Joining the debate club has not only improved my spoken English but also taught me how to think critically.", zh: "加入辩论社不仅提高了我的英语口语，还教会了我如何批判性思考。", tip: "not only...but also 重读 not 与 also 突出递进；critically 重音在第一音节 /ˈkrɪtɪkli/" }
    ],
    model: {
      en: "My campus life is busy but colorful. Every morning, I attend lectures from eight to twelve, and in the afternoon, I usually study in the library, which is always packed with students during exam weeks. Besides my major courses, I joined the English debate club this semester. It has not only improved my spoken English but also taught me how to think critically. On weekends, I play badminton with my roommates or take part in volunteer activities. Assignments sometimes keep me up late, but I genuinely enjoy my university life.",
      zh: "我的校园生活忙碌而多彩。每天上午八点到十二点我都要上课，下午通常在图书馆自习——考试周那里总是挤满了学生。除了专业课程，这学期我还加入了英语辩论社。它不仅提高了我的英语口语，还教会了我如何批判性思考。周末我会和室友打羽毛球，或参加志愿活动。虽然作业有时让我熬夜到很晚，但我真心享受我的大学生活。"
    }
  },
  {
    id: "spk-07",
    topic: "小组讨论发言",
    scene: "学术表达",
    level: 2,
    intro: "学会小组讨论中提议、补充、质疑与总结的常用句型",
    sentences: [
      { en: "Shall we get started? We have five items on the agenda.", zh: "我们开始吧，议程上有五项内容。", tip: "Shall we 连读 /ʃælwɪ/；agenda 重音在第二音节 /əˈdʒendə/" },
      { en: "I'd like to add one more point to what Tom just said.", zh: "我想补充一点汤姆刚才说的内容。", tip: "add one 连读为 /ædwʌn/，d 与元音自然衔接" },
      { en: "From my perspective, cost is the key factor we should consider first.", zh: "在我看来，成本是我们应该首先考虑的关键因素。", tip: "perspective 重音在第二音节 /pərˈspektɪv/；key factor 重读突出重点" },
      { en: "That's an interesting point, but have we considered the possible risks?", zh: "这个观点很有意思，但我们考虑过潜在风险吗？", tip: "That's an interesting 三连读要顺；句尾 risks 用升调表达委婉质疑" },
      { en: "To sum up, we've agreed on the timeline, and I'll draft the proposal and share it with everyone by Wednesday.", zh: "总结一下，我们就时间表达成了一致，我会在周三前起草方案发给大家。", tip: "sum up 连读 /sʌmʌp/；agree on 连读；draft 读 /dræft/（美）或 /drɑːft/（英）保持一致" }
    ],
    model: {
      en: "In group discussions, expressing yourself clearly matters as much as having good ideas. I begin by saying, 'Shall we get started? We have five items on the agenda.' When I want to contribute, I say, 'I'd like to add one more point,' or 'From my perspective, cost is the key factor.' If I disagree, I stay polite: 'That's an interesting point, but have we considered the risks?' When time is up, someone summarizes: 'To sum up, we've agreed on the timeline.' These simple phrases keep our discussion organized and friendly.",
      zh: "在小组讨论中，清晰地表达自己和拥有好想法同样重要。我这样开场：‘我们开始吧，议程上有五项内容。’想发言时，我会说：‘我想补充一点’，或者‘在我看来，成本是关键因素。’如果有不同意见，我也会保持礼貌：‘这个观点很有意思，但我们考虑过风险吗？’时间到了，就有人总结：‘总结一下，我们就时间表达成了一致。’这些简单的表达能让讨论有条理又友好。"
    }
  },
  {
    id: "spk-08",
    topic: "描述图表趋势",
    scene: "学术表达",
    level: 2,
    intro: "掌握描述数据趋势的核心动词与对比句式",
    sentences: [
      { en: "This chart shows the changes in online shopping over five years.", zh: "这张图表展示了五年间网购的变化。", tip: "chart 读 /tʃɑːrt/，注意卷舌；shows 结尾 /z/ 轻轻收住" },
      { en: "The number of users increased sharply in 2022.", zh: "2022年用户数量急剧增长。", tip: "increased sharply 连读；-ed 在 /t/ 后读 /ɪd/" },
      { en: "Sales rose steadily from March to June, then leveled off.", zh: "销量从三月到六月稳步上升，随后趋于平稳。", tip: "rose steadily 连读；leveled off 连读 /ˈlevəldɔːf/，注意 level 过去式双写 l" },
      { en: "By contrast, the percentage of traditional shoppers fell from 40% to just 15%.", zh: "相比之下，传统购物者的比例从40%下降到仅15%。", tip: "By contrast 重读形成对比；percentage 重音在第二音节 /pərˈsentɪdʒ/" },
      { en: "Overall, the figures indicate a significant shift towards mobile payment, which nearly doubled during the period.", zh: "总体来看，数据表明支付方式明显向移动支付转移，其间移动支付几乎翻了一番。", tip: "indicate 重音在第一音节 /ˈɪndɪkeɪt/；doubled 读 /ˈdʌbəld/，b 不发音" }
    ],
    model: {
      en: "When describing a chart, structure is everything. I start with an overview: 'This chart shows the changes in online shopping over five years.' Then I point out the key trends: 'The number of users increased sharply in 2022, while sales rose steadily from March to June and then leveled off.' I also make comparisons: 'By contrast, the percentage of traditional shoppers fell from forty percent to just fifteen.' I end with a summary: 'Overall, the figures indicate a significant shift towards mobile payment.' Clear structure makes data easy to understand.",
      zh: "描述图表时，结构决定一切。我总是先做概述：‘这张图表展示了五年间网购的变化。’接着指出关键趋势：‘2022年用户数量急剧增长，而销量从三月到六月稳步上升，随后趋于平稳。’然后进行对比：‘相比之下，传统购物者的比例从百分之四十下降到仅百分之十五。’最后以总结收尾：‘总体来看，数据表明支付方式明显向移动支付转移。’清晰的结构能让数据一目了然。"
    }
  },
  {
    id: "spk-09",
    topic: "面试问答",
    scene: "日常交流",
    level: 2,
    intro: "用具体事例展示自身优势，自信应对常见面试问题",
    sentences: [
      { en: "Thank you for inviting me to this interview.", zh: "感谢您邀请我参加这次面试。", tip: "inviting me 连读 /ɪnˈvaɪtɪŋmi/；interview 重音在第一音节 /ˈɪntərvjuː/" },
      { en: "I graduated from Beijing University with a degree in marketing.", zh: "我毕业于北京大学市场营销专业。", tip: "graduated from 连读；-uated 读 /eɪtɪd/，音节完整" },
      { en: "My greatest strength is that I never give up when facing challenges.", zh: "我最大的优点是面对困难从不放弃。", tip: "strength 结尾 /ŋθ/ 两个辅音相连，不要加元音；facing 读 /ˈfeɪsɪŋ/" },
      { en: "In my last internship, I helped increase the company's social media followers by thirty percent.", zh: "在上一份实习中，我帮助公司社交媒体粉丝数增长了30%。", tip: "increase...by 表示增长幅度；thirty 注意 /ˈθɜːrti/ 的咬舌音" },
      { en: "I believe my skills and experience make me a good fit for this position, and I'm eager to contribute to your team.", zh: "我相信我的技能和经验很适合这个职位，也热切希望能为贵团队做出贡献。", tip: "fit for 连读；contribute 重音在第二音节 /kənˈtrɪbjuːt/" }
    ],
    model: {
      en: "Job interviews become much easier with preparation. When the interviewer asks me to introduce myself, I keep it short: 'Thank you for inviting me. I graduated from Beijing University with a degree in marketing.' When asked about my strengths, I give examples instead of empty words: 'In my last internship, I helped increase the company's social media followers by thirty percent.' I always end confidently: 'I believe my skills and experience make me a good fit for this position.' A smile, clear answers, and honest eyes win the room.",
      zh: "做好准备的求职面试会轻松许多。当面试官让我自我介绍时，我保持简洁：‘感谢您邀请我。我毕业于北京大学市场营销专业。’被问到优点时，我用实例代替空话：‘在上一份实习中，我帮助公司社交媒体粉丝数增长了百分之三十。’我总是自信地收尾：‘我相信我的技能和经验很适合这个职位。’一个微笑、清晰的回答和真诚的眼神就能赢得青睐。"
    }
  },
  {
    id: "spk-10",
    topic: "旅行经历描述",
    scene: "日常交流",
    level: 2,
    intro: "按时间与感受组织语言，生动讲述一段旅行经历",
    sentences: [
      { en: "Last summer, I traveled to Yunnan with my family.", zh: "去年夏天，我和家人去了云南旅行。", tip: "traveled to 连读 /ˈtrævəldtu/；last 结尾 /t/ 轻爆破即可" },
      { en: "The ancient town of Lijiang was even more beautiful than I had expected.", zh: "丽江古城比我想象的还要美。", tip: "than I 连读 /ðənaɪ/；had expected 中 had 弱读为 /həd/" },
      { en: "We spent the whole day wandering around the old streets and tasting local food.", zh: "我们一整天都在老街闲逛、品尝当地美食。", tip: "wandering around 连读；whole 读 /həʊl/，w 不发音对、l 收尾清晰" },
      { en: "What impressed me most was the sunrise over the snow mountain — it was absolutely breathtaking.", zh: "最让我难忘的是雪山上的日出，真是美得令人窒息。", tip: "impressed 重音在第二音节；复合词 breathtaking 重音在前 /ˈbreθteɪkɪŋ/" },
      { en: "If you ever get the chance to visit Yunnan, don't hesitate — it's a trip you'll remember for the rest of your life.", zh: "如果有机会去云南，千万别犹豫，那将是一段终生难忘的旅程。", tip: "don't hesitate 连读；you'll 读 /juːl/，结尾 /l/ 不要吞掉" }
    ],
    model: {
      en: "Traveling broadens the mind, and my trip to Yunnan proved it. Last summer, I went there with my family, and the ancient town of Lijiang was even more beautiful than I had expected. We spent whole days wandering around the old streets and tasting local food. What impressed me most was the sunrise over the snow mountain — it was absolutely breathtaking. If you ever get the chance to visit Yunnan, don't hesitate. It's a trip you'll remember for the rest of your life.",
      zh: "旅行能开阔眼界，我的云南之行正印证了这一点。去年夏天我和家人去了那里，丽江古城比我想象的还要美。我们整日漫步在老街，品尝当地美食。最让我难忘的是雪山上的日出——真是美得令人窒息。如果有机会去云南，千万别犹豫。那将是你余生都会铭记的旅程。"
    }
  },
  {
    id: "spk-11",
    topic: "学术观点陈述",
    scene: "学术表达",
    level: 3,
    intro: "学会用学术性、留有余地的措辞陈述并论证观点",
    sentences: [
      { en: "Today I would like to address the issue of online learning.", zh: "今天我想探讨在线学习这一议题。", tip: "address 作动词重音在第二音节 /əˈdres/；issue 读 /ˈɪʃuː/" },
      { en: "There is growing evidence that blended learning improves student engagement.", zh: "越来越多的证据表明混合式学习能提高学生的参与度。", tip: "evidence 读 /ˈevɪdəns/；engagement 重音在第二音节 /ɪnˈɡeɪdʒmənt/" },
      { en: "It could be argued that technology narrows rather than widens the educational gap.", zh: "有人可能认为，技术缩小而非扩大了教育差距。", tip: "argued 读 /ˈɑːrɡjuːd/；narrows 与 widens 一降一升形成语调对比" },
      { en: "While the benefits are considerable, we must also acknowledge the potential drawbacks of excessive screen time.", zh: "尽管益处显著，我们也必须承认屏幕时间过长的潜在弊端。", tip: "acknowledge 中 k 不发音 /əkˈnɒlɪdʒ/；While 引导让步从句时适当重读" },
      { en: "On balance, I would contend that a cautious, well-regulated integration of technology serves students' long-term interests best.", zh: "总的来看，我认为谨慎、规范地融合技术才最符合学生的长远利益。", tip: "contend 重音在第二音节 /kənˈtend/；long-term 复合词两个部分都咬字清晰" }
    ],
    model: {
      en: "When presenting an academic viewpoint, precision and hedging matter. Rather than claiming technology solves everything, I might say, 'There is growing evidence that blended learning improves student engagement.' To sound balanced, I add, 'It could be argued that technology narrows rather than widens the educational gap.' Acknowledging the other side strengthens my position: 'While the benefits are considerable, we must also acknowledge the potential drawbacks.' Finally, I conclude firmly: 'On balance, I would contend that a cautious, well-regulated integration of technology serves students best.' Careful language earns academic credibility.",
      zh: "陈述学术观点时，措辞精确和适当留有余地非常重要。我不会宣称技术能解决一切，而是会说：‘越来越多的证据表明混合式学习能提高学生的参与度。’为了显得客观，我会补充：‘有人可能认为，技术缩小而非扩大了教育差距。’承认对立面反而能强化我的立场：‘尽管益处显著，我们也必须承认其潜在弊端。’最后我坚定收尾：‘总的来看，我认为谨慎、规范地融合技术才最符合学生的利益。’严谨的语言能赢得学术公信力。"
    }
  },
  {
    id: "spk-12",
    topic: "图表数据解读",
    scene: "学术表达",
    level: 3,
    intro: "掌握数据解读的学术句式：引导注意、描述趋势、深入分析与推断",
    sentences: [
      { en: "Let me draw your attention to the figures in the second column.", zh: "请大家注意第二列的数据。", tip: "draw your attention 连读；column 读 /ˈkɒləm/，mn 只发 /m/" },
      { en: "The data reveal a marked upward trend over the decade under review.", zh: "数据显示，在所研究的十年间呈现显著上升趋势。", tip: "data 学术场合常读 /ˈdeɪtə/；reveal 重音在第二音节 /rɪˈviːl/" },
      { en: "Consumption peaked at roughly 78% in 2019 before declining gradually.", zh: "消费占比在2019年达到约78%的峰值，随后逐渐回落。", tip: "peaked at 连读 /piːktət/；roughly 读 /ˈrʌfli/，gh 不发音" },
      { en: "A closer analysis suggests that this fluctuation correlates strongly with seasonal demand rather than price changes.", zh: "进一步分析表明，这种波动与季节性需求密切相关，而非价格变动。", tip: "correlates 重音在第一音节 /ˈkɒrəleɪts/；rather than 前后对比，重读 correlates 与 price" },
      { en: "Taken together, these findings point to a structural transformation in consumer behavior, one that policy makers can scarcely afford to ignore.", zh: "综合来看，这些发现指向消费行为的结构性转变，政策制定者几乎不容忽视。", tip: "Taken together 连读顺滑；scarcely 读 /ˈskeəsli/，/s/ 后的 c 不卷舌" }
    ],
    model: {
      en: "Interpreting data academically requires careful language. I begin by directing attention: 'Let me draw your attention to the figures in the second column.' Then I describe the trend objectively: 'The data reveal a marked upward trend over the decade under review. Consumption peaked at roughly seventy-eight percent in 2019 before declining gradually.' Deeper analysis follows: 'A closer analysis suggests that this fluctuation correlates strongly with seasonal demand.' I conclude with implications: 'Taken together, these findings point to a structural transformation in consumer behavior.' Never overstate; let the evidence speak.",
      zh: "以学术方式解读数据需要严谨的措辞。我先引导注意力：‘请大家注意第二列的数据。’然后客观描述趋势：‘数据显示，所研究的十年间呈显著上升趋势。消费占比在2019年达到约百分之七十八的峰值，随后逐渐回落。’接着深入分析：‘进一步分析表明，这种波动与季节性需求密切相关。’最后落脚到启示：‘综合来看，这些发现指向消费行为的结构性转变。’切忌夸大，让证据自己说话。"
    }
  },
  {
    id: "spk-13",
    topic: "辩论观点：科技与生活",
    scene: "观点陈述",
    level: 3,
    intro: "就科技与生活展开辩论：学会让步、转折并亮明立场",
    sentences: [
      { en: "Smartphones have become an extension of ourselves, haven't they?", zh: "智能手机已成为我们自身的延伸，不是吗？", tip: "extension 读 /ɪkˈstenʃn/；反义疑问句 haven't they 用升调" },
      { en: "Admittedly, technology brings undeniable convenience to our daily lives.", zh: "诚然，科技给我们的日常生活带来了不可否认的便利。", tip: "Admittedly 重音在第二音节 /ədˈmɪtɪdli/；undeniable 重音在第三音节 /ˌʌndɪˈnaɪəbl/" },
      { en: "However, the constant stream of notifications is quietly eroding our ability to concentrate.", zh: "然而，源源不断的通知正在悄然侵蚀我们的专注力。", tip: "eroding 读 /ɪˈrəʊdɪŋ/；However 后稍作停顿，突出转折" },
      { en: "What worries me most is not the technology itself, but our growing dependence on it.", zh: "最让我担心的不是技术本身，而是我们对它日益加深的依赖。", tip: "not...but 强调结构，两个词都要重读；dependence 读 /dɪˈpendəns/" },
      { en: "If we fail to set boundaries now, we may wake up one day to find that machines think for us and we merely exist.", zh: "如果我们现在不设好界限，也许某天醒来会发现机器替我们思考，而我们只是存在着。", tip: "fail to 连读 /feɪltə/；merely 读 /ˈmɪəli/，句尾 exist 重读收束有力" }
    ],
    model: {
      en: "Are we masters of technology, or its servants? Admittedly, technology brings undeniable convenience: we order food, pay bills, and learn new skills with a single tap. However, the constant stream of notifications is quietly eroding our ability to concentrate. What worries me most is not the technology itself, but our growing dependence on it. My position is clear: we should embrace innovation while setting firm boundaries. If we fail to act now, we may one day find that machines think for us, and we merely exist.",
      zh: "我们是技术的主人，还是它的仆人？诚然，科技带来了不可否认的便利：动动手指就能点餐、缴费、学习新技能。然而，源源不断的通知正在悄然侵蚀我们的专注力。最让我担心的不是技术本身，而是我们对它日益加深的依赖。我的立场很明确：我们应当拥抱创新，同时设立坚定的界限。如果现在不行动，也许有一天我们会发现，机器替我们思考，而我们只是存在着。"
    }
  },
  {
    id: "spk-14",
    topic: "话题卡：影响我的人",
    scene: "观点陈述",
    level: 3,
    intro: "按雅思Part2思路描述人物：身份、特点、事例与影响层层展开",
    sentences: [
      { en: "Well, the person I'd like to talk about is my high school English teacher.", zh: "嗯，我想谈的人是我的高中英语老师。", tip: "Well 作为填充词轻读 /wel/；I'd like to 连读 /aɪdˈlaɪktə/" },
      { en: "What made her special was her endless patience with slow learners like me.", zh: "她的特别之处在于对像我这样学得慢的学生有着无穷的耐心。", tip: "What made her 连读；endless 读 /ˈendləs/，d 轻爆破" },
      { en: "She had this remarkable ability to turn boring grammar rules into funny stories.", zh: "她有种了不起的本领，能把枯燥的语法规则变成有趣的故事。", tip: "remarkable 重音在第二音节 /rɪˈmɑːrkəbl/；rules into 连读 /ˈruːlzɪntə/" },
      { en: "Thanks to her encouragement, I eventually overcame my fear of speaking English in public.", zh: "多亏她的鼓励，我最终克服了当众说英语的恐惧。", tip: "Thanks to 连读 /θæŋkstu/；eventually 读 /ɪˈventʃuəli/，四个音节要完整" },
      { en: "Even now, whenever I feel like giving up, I can still hear her saying that every small step counts, and honestly, that belief has shaped who I am today.", zh: "直到今天，每当我想放弃时，耳边仍会响起她的话：每一小步都算数。说真的，这个信念塑造了今天的我。", tip: "长句按意群断句，giving up 后自然换气；counts 重读，句尾 today 缓缓收住" }
    ],
    model: {
      en: "For this topic, I'd like to talk about my high school English teacher, Miss Chen. What made her special was her endless patience with slow learners like me. She had this remarkable ability to turn boring grammar rules into funny stories, so we never felt sleepy in her class. Thanks to her encouragement, I eventually overcame my fear of speaking English in public. Even now, whenever I feel like giving up, I can still hear her saying that every small step counts. That belief has shaped who I am today.",
      zh: "这个话题我想谈谈我的高中英语老师——陈老师。她的特别之处在于对像我这样学得慢的学生有着无穷的耐心。她有种了不起的本领，能把枯燥的语法规则变成有趣的故事，所以她的课上我们从不会犯困。多亏她的鼓励，我最终克服了当众说英语的恐惧。直到今天，每当我想放弃时，耳边仍会响起她的话：每一小步都算数。正是这个信念塑造了今天的我。"
    }
  },
  {
    id: "spk-15",
    topic: "总结陈词",
    scene: "观点陈述",
    level: 3,
    intro: "学会结构化总结陈词：回顾要点、重申立场与号召收尾",
    sentences: [
      { en: "Let me briefly recap the main points of today's discussion.", zh: "让我简要回顾一下今天讨论的要点。", tip: "briefly 读 /ˈbriːfli/，br 要连贯；recap 读 /ˈriːkæp/" },
      { en: "As the evidence shows, neither extreme offers a workable solution.", zh: "正如证据所示，两个极端都行不通。", tip: "neither 读 /ˈnaɪðər/ 或 /ˈniːðər/ 均可，全文保持一致；extreme 重音在第二音节" },
      { en: "We must therefore weigh the short-term costs against the long-term benefits.", zh: "因此，我们必须权衡短期成本与长期收益。", tip: "therefore 位于句中时轻读带过；weigh 读 /weɪ/，gh 不发音" },
      { en: "Having considered all sides, I am convinced that cooperation, not confrontation, is the way forward.", zh: "综合考量各方观点后，我确信前进之路在于合作而非对抗。", tip: "Having considered 分词开头连读；not confrontation 重读 not 形成强对比" },
      { en: "In conclusion, the choices we make today will determine whether future generations inherit a world of opportunity or one of regret — so let us choose wisely.", zh: "总之，我们今天的选择将决定后代继承的是一个充满机遇的世界还是一个充满遗憾的世界——让我们明智抉择。", tip: "conclusion 读 /kənˈkluːʒn/；破折号前停顿，choose wisely 放慢逐字重读，收尾有力" }
    ],
    model: {
      en: "A strong conclusion ties everything together and leaves a final impression. I usually begin with a signpost: 'Let me briefly recap the main points of today's discussion.' Then I restate my thesis in fresh words: 'As the evidence shows, neither extreme offers a workable solution.' I acknowledge complexity before committing: 'Having considered all sides, I am convinced that cooperation, not confrontation, is the way forward.' Finally, I end with a call to action: 'The choices we make today will determine the world we leave behind — so let us choose wisely.'",
      zh: "有力的总结能把所有内容串联起来，留下最终印象。我通常先给出路标：‘让我简要回顾一下今天讨论的要点。’然后用新的措辞重申论点：‘正如证据所示，两个极端都行不通。’在表明立场前先承认复杂性：‘综合考量各方观点后，我确信前进之路在于合作而非对抗。’最后以号召收尾：‘我们今天的选择将决定我们留给后代的世界——让我们明智抉择。’"
    }
  }
];
window.SPEAKING_BANK_READY = true;