// 听力素材库：3 档难度 × 日常/学术/新闻场景，共 30 篇
window.LISTENING_BANK = [
  {
    id: "lis-01",
    title: "Ordering Coffee at a Café",
    level: 1,
    scene: "日常对话",
    intro: "在咖啡馆点单的简短对话",
    lines: [
      { speaker: "A", en: "Good morning! What can I get for you today?", zh: "早上好！今天想喝点什么？" },
      { speaker: "B", en: "Hi! Could I have a medium latte, please?", zh: "你好！请给我来一杯中杯拿铁。" },
      { speaker: "A", en: "Sure. Would you like that here or to go?", zh: "好的。请问是在店里喝还是外带？" },
      { speaker: "B", en: "To go, please. I'm running a little late for work.", zh: "麻烦外带。我上班要迟到了。" },
      { speaker: "A", en: "No problem. Anything to eat? Our banana bread is fresh today.", zh: "没问题。要吃点什么吗？我们的香蕉面包今天是新鲜出炉的。" },
      { speaker: "B", en: "That sounds good. I'll take one slice.", zh: "听起来不错，我要一块。" },
      { speaker: "A", en: "OK, one latte and one slice of banana bread. That'll be seven dollars fifty.", zh: "好的，一杯拿铁加一块香蕉面包，一共七美元五十美分。" },
      { speaker: "B", en: "Here you go. Thank you very much!", zh: "给你钱，非常感谢！" },
      { speaker: "A", en: "You're welcome. Have a nice day!", zh: "不客气，祝你今天愉快！" }
    ],
    keyPhrases: [
      { en: "to go", zh: "外带" },
      { en: "What can I get for you?", zh: "您想点些什么？" },
      { en: "run late", zh: "快迟到了" },
      { en: "That'll be...", zh: "一共是……（钱）" }
    ],
    questions: [
      {
        q: "What does the customer order?",
        options: ["A medium latte", "A large coffee", "A cup of green tea", "Hot chocolate"],
        answer: 0,
        explain: "对话开头顾客明确点了 \"a medium latte\"（中杯拿铁）。"
      },
      {
        q: "Why does the customer take the coffee to go?",
        options: ["She doesn't like the café.", "She is running late for work.", "The café is too noisy.", "It is too hot inside."],
        answer: 1,
        explain: "顾客说 \"I'm running a little late for work\"，因为上班快迟到所以选择外带。"
      },
      {
        q: "What food does the customer buy?",
        options: ["A sandwich", "A cookie", "A slice of banana bread", "A piece of cake"],
        answer: 2,
        explain: "顾客说 \"I'll take one slice\"，买了一块香蕉面包。"
      }
    ]
  },
  {
    id: "lis-02",
    title: "Shopping for a Winter Jacket",
    level: 1,
    scene: "日常对话",
    intro: "在服装店买冬装的日常对话",
    lines: [
      { speaker: "A", en: "Can I help you find something?", zh: "需要我帮您找什么吗？" },
      { speaker: "B", en: "Yes, I'm looking for a jacket for the winter.", zh: "是的，我想买一件冬天穿的夹克。" },
      { speaker: "A", en: "What size do you wear?", zh: "您穿什么尺码？" },
      { speaker: "B", en: "I usually wear a medium.", zh: "我平时穿中号。" },
      { speaker: "A", en: "How about this blue one? It's warm and on sale this week.", zh: "这件蓝色的怎么样？很暖和，而且本周特价。" },
      { speaker: "B", en: "It looks nice. Can I try it on?", zh: "看起来不错，我可以试穿一下吗？" },
      { speaker: "A", en: "Of course. The fitting room is over there.", zh: "当然可以，试衣间在那边。" },
      { speaker: "B", en: "It fits well, but do you have it in black?", zh: "很合身，不过这件有黑色的吗？" },
      { speaker: "A", en: "Let me check... Yes, here's a black medium.", zh: "我看看……有，这是一件黑色中号。" },
      { speaker: "B", en: "Great! I'll take it.", zh: "太好了！我买了。" }
    ],
    keyPhrases: [
      { en: "look for", zh: "寻找" },
      { en: "on sale", zh: "打折促销" },
      { en: "try on", zh: "试穿" },
      { en: "fitting room", zh: "试衣间" }
    ],
    questions: [
      {
        q: "What is the customer looking for?",
        options: ["A winter jacket", "A summer dress", "A pair of shoes", "A warm hat"],
        answer: 0,
        explain: "顾客一开始就说 \"I'm looking for a jacket for the winter\"。"
      },
      {
        q: "What size does the customer usually wear?",
        options: ["Small", "Medium", "Large", "Extra large"],
        answer: 1,
        explain: "顾客说 \"I usually wear a medium\"（平时穿中号）。"
      },
      {
        q: "Which jacket does the customer finally take?",
        options: ["The blue one", "The black one", "The red one", "The green one"],
        answer: 1,
        explain: "顾客试穿蓝色后问有没有黑色，最后店员拿来黑色中号，顾客说 \"I'll take it\"，买的是黑色的。"
      }
    ]
  },
  {
    id: "lis-03",
    title: "Looking for a Book in the Library",
    level: 1,
    scene: "学术场景",
    intro: "学生向图书管理员询问找不到的书",
    lines: [
      { speaker: "Student", en: "Excuse me, I can't find this book for my history class.", zh: "打扰一下，我找不到历史课要用的这本书。" },
      { speaker: "Librarian", en: "Let me see. Hmm, the computer says the book is on the second floor.", zh: "我看看。嗯，电脑显示这本书在二楼。" },
      { speaker: "Student", en: "I looked there, but it wasn't on the shelf.", zh: "我去找过了，但书架上没有。" },
      { speaker: "Librarian", en: "Oh, maybe someone is reading it inside the library. Books with that yellow sticker can't be taken out.", zh: "哦，可能是有人正在馆内阅读。贴黄色标签的书是不能带出馆的。" },
      { speaker: "Student", en: "So how can I get it?", zh: "那我怎样才能拿到这本书呢？" },
      { speaker: "Librarian", en: "You can check the study tables, or put it on hold at the front desk.", zh: "您可以看看自习桌那边，或者在前台登记预约这本书。" },
      { speaker: "Student", en: "What does 'put it on hold' mean?", zh: "\"put it on hold\" 是什么意思？" },
      { speaker: "Librarian", en: "It means we keep the book for you when it comes back, and send you an email.", zh: "意思是书还回来后我们替您保留，并给您发邮件通知。" },
      { speaker: "Student", en: "That's great. Thank you so much for your help!", zh: "太好了，非常感谢您的帮助！" },
      { speaker: "Librarian", en: "You're welcome. Good luck with your class.", zh: "不客气，祝你课程顺利。" }
    ],
    keyPhrases: [
      { en: "on the shelf", zh: "在书架上" },
      { en: "put a book on hold", zh: "预约保留一本书" },
      { en: "front desk", zh: "前台" },
      { en: "come back", zh: "（书）被归还" }
    ],
    questions: [
      {
        q: "Where does the computer say the book is?",
        options: ["On the first floor", "On the second floor", "In the storeroom", "At another library"],
        answer: 1,
        explain: "管理员查询电脑后说 \"the book is on the second floor\"。"
      },
      {
        q: "What does 'put it on hold' mean?",
        options: ["To borrow the book for one day", "To keep the book for you when it returns", "To buy the book online", "To copy some pages of the book"],
        answer: 1,
        explain: "管理员解释：hold 就是书还回来后替您保留并邮件通知。"
      },
      {
        q: "How will the student know the book is ready?",
        options: ["By a phone call", "By a text message", "By an email", "By a letter"],
        answer: 2,
        explain: "管理员说 \"send you an email\"，会通过邮件通知学生。"
      }
    ]
  },
  {
    id: "lis-04",
    title: "Making Weekend Plans with a Classmate",
    level: 1,
    scene: "学术场景",
    intro: "同学之间商量周末去科技馆的计划",
    lines: [
      { speaker: "Anna", en: "Hi Ben! Do you have any plans for the weekend?", zh: "嗨，本！周末有什么安排吗？" },
      { speaker: "Ben", en: "Not really. I just want to relax. What about you?", zh: "没什么安排，就想放松一下。你呢？" },
      { speaker: "Anna", en: "A few of us are going to the science museum on Saturday. Want to come?", zh: "我们几个人周六要去科技馆，想来吗？" },
      { speaker: "Ben", en: "That sounds fun, but I have a math test on Monday.", zh: "听起来很有意思，但我周一有数学考试。" },
      { speaker: "Anna", en: "Oh, right. Mr. Carter's test is hard. How long do you need to study?", zh: "哦，对了，卡特老师的考试挺难的。你要复习多久？" },
      { speaker: "Ben", en: "Maybe three or four hours on Saturday morning.", zh: "周六上午大概要复习三四个小时。" },
      { speaker: "Anna", en: "Then you could join us in the afternoon. We're meeting at two o'clock at the museum gate.", zh: "那你下午可以和我们一起去，我们两点在博物馆门口集合。" },
      { speaker: "Ben", en: "That works! Is the museum free for students?", zh: "这个时间可以！学生去博物馆免费吗？" },
      { speaker: "Anna", en: "Yes, we just need to show our student cards.", zh: "免费，只需要出示学生证就行。" },
      { speaker: "Ben", en: "Perfect. See you there on Saturday afternoon.", zh: "太好了，周六下午见。" }
    ],
    keyPhrases: [
      { en: "make plans", zh: "安排计划" },
      { en: "That works!", zh: "这个安排可以！" },
      { en: "show one's student card", zh: "出示学生证" },
      { en: "meet at...", zh: "在……集合" }
    ],
    questions: [
      {
        q: "What does Anna invite Ben to do?",
        options: ["To visit a science museum", "To watch a movie", "To go swimming", "To study together"],
        answer: 0,
        explain: "安娜邀请本周六和大家一起去科技馆（the science museum）。"
      },
      {
        q: "Why can't Ben go on Saturday morning?",
        options: ["He has to work.", "He needs to study for a math test.", "He will visit his family.", "He is not interested."],
        answer: 1,
        explain: "本说周一有数学考试，周六上午要花三四个小时复习。"
      },
      {
        q: "What do students need to do to enter the museum for free?",
        options: ["Buy tickets online", "Show their student cards", "Bring a teacher's letter", "Do nothing at all"],
        answer: 1,
        explain: "安娜说 \"we just need to show our student cards\"，出示学生证即可免费入场。"
      }
    ]
  },
  {
    id: "lis-05",
    title: "Local News: New City Park Opens",
    level: 1,
    scene: "新闻播报",
    intro: "关于新城市公园开放的本地新闻",
    lines: [
      { speaker: "News", en: "Good evening. Here is today's local news.", zh: "晚上好，以下是今天的本地新闻。" },
      { speaker: "News", en: "The city's new Central Park opened to the public on Saturday morning.", zh: "本市新建的中央公园于周六上午向公众开放。" },
      { speaker: "News", en: "The park cost ten million dollars to build and took two years to finish.", zh: "公园耗资一千万美元，历时两年建成。" },
      { speaker: "News", en: "It has a big lake, three playgrounds, and more than five hundred new trees.", zh: "园内有一个大湖、三个游乐场和五百多棵新栽的树。" },
      { speaker: "News", en: "City leaders say the park will give families a safe place to play and relax.", zh: "市领导表示，公园将为各个家庭提供一个安全游玩和放松的场所。" },
      { speaker: "News", en: "On the first day, more than eight thousand people visited the park.", zh: "开放首日，公园接待了八千多名游客。" },
      { speaker: "News", en: "The park is open every day from six in the morning to ten at night, and entry is free.", zh: "公园每天早上六点至晚上十点开放，免费入园。" },
      { speaker: "News", en: "More information can be found on the city website.", zh: "更多信息可以在市政府网站上查询。" }
    ],
    keyPhrases: [
      { en: "open to the public", zh: "向公众开放" },
      { en: "city leaders", zh: "市领导" },
      { en: "entry is free", zh: "免费入园" },
      { en: "local news", zh: "本地新闻" }
    ],
    questions: [
      {
        q: "When did the new park open?",
        options: ["On Saturday morning", "On Sunday afternoon", "On Friday night", "On Monday morning"],
        answer: 0,
        explain: "新闻中说公园于 \"Saturday morning\"（周六上午）向公众开放。"
      },
      {
        q: "How much did the park cost to build?",
        options: ["Two million dollars", "Five million dollars", "Ten million dollars", "Twenty million dollars"],
        answer: 2,
        explain: "原文说 \"The park cost ten million dollars to build\"（耗资一千万美元）。"
      },
      {
        q: "How many hours is the park open each day?",
        options: ["Eight hours", "Ten hours", "Fourteen hours", "Sixteen hours"],
        answer: 3,
        explain: "开放时间为早六点到晚十点，共十六个小时。"
      }
    ]
  },
  {
    id: "lis-06",
    title: "At the Doctor's Clinic",
    level: 2,
    scene: "日常对话",
    intro: "患者在诊所向医生描述症状并问诊",
    lines: [
      { speaker: "Doctor", en: "Good afternoon. What seems to be the problem?", zh: "下午好，请问哪里不舒服？" },
      { speaker: "Patient", en: "I've had a sore throat and a cough for almost a week, and it's not getting better.", zh: "我嗓子疼、咳嗽快一个星期了，一直没好转。" },
      { speaker: "Doctor", en: "Do you have a fever or feel tired?", zh: "有没有发烧或者觉得乏力？" },
      { speaker: "Patient", en: "I felt a little hot last night, around thirty-eight degrees. And yes, I'm quite tired.", zh: "昨晚有点发热，大概三十八度。而且确实感觉很累。" },
      { speaker: "Doctor", en: "Let me take a look at your throat... It's red and a bit swollen. It looks like a throat infection.", zh: "让我看看你的喉咙……又红又有点肿，看起来是咽喉感染。" },
      { speaker: "Patient", en: "Is it serious? Do I need any medicine?", zh: "严重吗？需要吃药吗？" },
      { speaker: "Doctor", en: "I'll prescribe some antibiotics. Take them twice a day after meals for five days.", zh: "我给你开一些抗生素，一天两次、饭后服用，连吃五天。" },
      { speaker: "Patient", en: "Should I stay home from work?", zh: "我需要请假在家休息吗？" },
      { speaker: "Doctor", en: "I'd recommend resting for two or three days and drinking plenty of water.", zh: "我建议休息两三天，并且多喝水。" },
      { speaker: "Patient", en: "All right. When should I come back if I don't feel better?", zh: "好的。如果没好转，我什么时候需要再来？" },
      { speaker: "Doctor", en: "If the symptoms continue after you finish the medicine, come back and see me.", zh: "如果吃完药后症状还在，就回来复诊。" }
    ],
    keyPhrases: [
      { en: "sore throat", zh: "嗓子疼" },
      { en: "prescribe antibiotics", zh: "开抗生素" },
      { en: "twice a day", zh: "一天两次" },
      { en: "symptom", zh: "症状" },
      { en: "plenty of water", zh: "大量的水" }
    ],
    questions: [
      {
        q: "How long has the patient been sick?",
        options: ["For two days", "For almost a week", "For a month", "For one night"],
        answer: 1,
        explain: "患者说 \"for almost a week\"，症状已经持续快一周。"
      },
      {
        q: "What does the doctor prescribe?",
        options: ["Painkillers", "Antibiotics", "Vitamin pills", "Cough syrup"],
        answer: 1,
        explain: "医生说 \"I'll prescribe some antibiotics\"，开的是抗生素。"
      },
      {
        q: "What does the doctor advise the patient to do?",
        options: ["Go back to work at once", "Rest for two or three days and drink plenty of water", "Do more exercise every day", "Take the medicine once a day"],
        answer: 1,
        explain: "医生建议休息两三天并多喝水（rest for two or three days and drink plenty of water）。"
      }
    ]
  },
  {
    id: "lis-07",
    title: "Renting an Apartment",
    level: 2,
    scene: "日常对话",
    intro: "租客向中介咨询公寓的租金和细节",
    lines: [
      { speaker: "Agent", en: "Good morning! Are you looking for a place to rent?", zh: "早上好！您是在找出租的房子吗？" },
      { speaker: "Tenant", en: "Yes. I saw your ad online for a two-bedroom apartment on Green Street.", zh: "是的。我在网上看到了你们在格林街一套两居室公寓的广告。" },
      { speaker: "Agent", en: "Ah yes, that one is still available. Would you like to know more about it?", zh: "啊，对，那套还没租出去。想了解一下详细情况吗？" },
      { speaker: "Tenant", en: "Please. How big is it, and how much is the rent?", zh: "麻烦介绍一下。房子多大？租金多少？" },
      { speaker: "Agent", en: "It's on the fourth floor, about eighty square meters. The rent is eight hundred dollars a month.", zh: "在四楼，大约八十平方米，月租八百美元。" },
      { speaker: "Tenant", en: "Does that include the bills, like water and electricity?", zh: "租金包含水电这类费用吗？" },
      { speaker: "Agent", en: "Water is included, but you pay for electricity and the Internet yourself.", zh: "水费包含在内，电费和网络需要您自己承担。" },
      { speaker: "Tenant", en: "I see. How much is the deposit?", zh: "明白了。押金要多少？" },
      { speaker: "Agent", en: "One month's rent. You'll get it back when you move out if there's no damage.", zh: "一个月的租金。如果没有损坏，搬走时会退还给您。" },
      { speaker: "Tenant", en: "That sounds fair. Can I visit the apartment this Saturday?", zh: "听起来挺合理的。这周六我能去看房吗？" },
      { speaker: "Agent", en: "Of course. How about ten o'clock in the morning?", zh: "当然可以。上午十点怎么样？" },
      { speaker: "Tenant", en: "Ten o'clock works for me. See you then!", zh: "十点没问题，到时见！" }
    ],
    keyPhrases: [
      { en: "rent an apartment", zh: "租公寓" },
      { en: "be available", zh: "（房子）还没租出去" },
      { en: "deposit", zh: "押金" },
      { en: "include the bills", zh: "包含水电等费用" },
      { en: "move out", zh: "搬走、退租" }
    ],
    questions: [
      {
        q: "How much is the monthly rent?",
        options: ["Six hundred dollars", "Eight hundred dollars", "One thousand dollars", "One month's deposit"],
        answer: 1,
        explain: "中介说 \"The rent is eight hundred dollars a month\"，月租八百美元。"
      },
      {
        q: "Which bill is included in the rent?",
        options: ["Electricity", "The Internet", "Water", "Gas"],
        answer: 2,
        explain: "中介说 \"Water is included\"，水费包含在租金里，电费和网络费自理。"
      },
      {
        q: "When will the tenant see the apartment?",
        options: ["This Friday at ten a.m.", "This Saturday at ten a.m.", "This Saturday at two p.m.", "This Sunday at noon"],
        answer: 1,
        explain: "双方约好周六上午十点（this Saturday, ten o'clock in the morning）看房。"
      }
    ]
  },
  {
    id: "lis-08",
    title: "Group Discussion: Choosing a Research Topic",
    level: 2,
    scene: "学术场景",
    intro: "教授与学生讨论研究选题和数据收集方法",
    lines: [
      { speaker: "Professor", en: "Today we'll discuss your research topics. Who wants to start?", zh: "今天我们来讨论你们的研究选题，谁想先说？" },
      { speaker: "Student A", en: "I'd like to study how social media affects teenagers' sleep.", zh: "我想研究社交媒体如何影响青少年的睡眠。" },
      { speaker: "Professor", en: "That's a popular area. Can you make your topic a bit more specific?", zh: "这个领域研究的人很多，你能把题目再具体一点吗？" },
      { speaker: "Student A", en: "Maybe... how does using phones before bedtime influence high school students' sleep quality?", zh: "也许可以改成：睡前使用手机如何影响高中生的睡眠质量？" },
      { speaker: "Professor", en: "Better. Do you plan to use a survey or interviews?", zh: "好多了。你打算用问卷调查还是访谈？" },
      { speaker: "Student A", en: "A survey, I think. I can ask about two hundred students in my school.", zh: "我觉得用问卷。我可以在学校调查大约两百名学生。" },
      { speaker: "Student B", en: "I'm interested in food waste in university canteens. Could I compare two campuses?", zh: "我对大学食堂的食物浪费感兴趣，我可以对比两个校区吗？" },
      { speaker: "Professor", en: "Comparing two campuses is a good idea, but it might take a lot of time. One campus with detailed data would be enough.", zh: "对比两个校区是个好想法，但可能太费时间。研究一个校区、把数据做细就足够了。" },
      { speaker: "Student B", en: "OK, I'll focus on our main campus and collect data for two weeks.", zh: "好的，我就聚焦我们的主校区，收集两周的数据。" },
      { speaker: "Professor", en: "Excellent. Please send me your topic and plan by Friday, and I'll give you feedback.", zh: "很好。请在周五前把选题和计划发给我，我会给你们反馈。" }
    ],
    keyPhrases: [
      { en: "research topic", zh: "研究选题" },
      { en: "make it more specific", zh: "使它更具体" },
      { en: "collect data", zh: "收集数据" },
      { en: "give feedback", zh: "给出反馈" }
    ],
    questions: [
      {
        q: "What is Student A's research topic?",
        options: ["Food waste in canteens", "Phones and teenagers' sleep", "Online learning habits", "Teenagers and sports"],
        answer: 1,
        explain: "学生 A 的选题是睡前使用手机对高中生睡眠质量的影响。"
      },
      {
        q: "What method will Student A probably use?",
        options: ["Interviews", "A survey", "Lab experiments", "Reading old reports"],
        answer: 1,
        explain: "学生 A 明确说打算用问卷调查（survey）约两百名学生。"
      },
      {
        q: "What advice does the professor give Student B?",
        options: ["Choose two campuses", "Focus on one campus", "Change the topic completely", "Use interviews instead"],
        answer: 1,
        explain: "教授认为对比两个校区太费时间，建议专注一个校区并做细数据。"
      }
    ]
  },
  {
    id: "lis-09",
    title: "Lecture: The Greenhouse Effect",
    level: 2,
    scene: "学术场景",
    intro: "教授讲解温室效应与全球变暖的基础知识",
    lines: [
      { speaker: "Professor", en: "Good morning, everyone. Today we'll talk about the greenhouse effect.", zh: "同学们早上好，今天我们来讲温室效应。" },
      { speaker: "Professor", en: "The greenhouse effect is natural. Gases in the air, such as carbon dioxide, keep the Earth warm by trapping heat from the sun.", zh: "温室效应是自然现象。空气中的二氧化碳等气体通过截留太阳的热量使地球保持温暖。" },
      { speaker: "Professor", en: "Without this effect, the Earth would be about thirty degrees colder, and life as we know it could not exist.", zh: "如果没有温室效应，地球会比现在低约三十度，我们所知的生命将无法存在。" },
      { speaker: "Professor", en: "However, human activities are producing too much carbon dioxide. Burning coal, oil, and gas adds huge amounts of this gas to the air.", zh: "然而，人类活动排放了过多的二氧化碳。燃烧煤炭、石油和天然气会向空气中释放大量这种气体。" },
      { speaker: "Professor", en: "As a result, the Earth is getting warmer faster than before. Scientists call this global warming.", zh: "结果，地球升温的速度比以前更快。科学家称之为全球变暖。" },
      { speaker: "Professor", en: "Global warming causes many problems. Ice at the North and South Poles is melting, and sea levels are rising.", zh: "全球变暖带来许多问题：南北两极的冰在融化，海平面在上升。" },
      { speaker: "Professor", en: "Extreme weather, such as heavy storms and long dry periods, is also becoming more common.", zh: "强风暴、长期干旱等极端天气也变得越来越常见。" },
      { speaker: "Professor", en: "For Friday's class, please read Chapter Five and prepare one example of extreme weather in your own country.", zh: "周五上课前，请阅读第五章，并准备一个你们自己国家极端天气的例子。" }
    ],
    keyPhrases: [
      { en: "greenhouse effect", zh: "温室效应" },
      { en: "carbon dioxide", zh: "二氧化碳" },
      { en: "global warming", zh: "全球变暖" },
      { en: "sea levels rise", zh: "海平面上升" },
      { en: "extreme weather", zh: "极端天气" }
    ],
    questions: [
      {
        q: "What keeps the Earth warm naturally?",
        options: ["Clouds in the sky", "Greenhouse gases trapping heat", "Ocean currents", "Sunlight on ice"],
        answer: 1,
        explain: "讲座提到二氧化碳等温室气体通过截留太阳热量使地球保持温暖。"
      },
      {
        q: "Which human activity adds carbon dioxide to the air?",
        options: ["Planting trees", "Burning coal, oil, and gas", "Building houses", "Farming fish"],
        answer: 1,
        explain: "原文说燃烧煤炭、石油和天然气（burning coal, oil, and gas）会排放大量二氧化碳。"
      },
      {
        q: "What should students prepare for Friday's class?",
        options: ["Chapter Five and an example of extreme weather", "A presentation about the ocean", "A list of greenhouse gases", "Questions about the exam"],
        answer: 0,
        explain: "作业是阅读第五章，并准备一个本国极端天气的例子。"
      }
    ]
  },
  {
    id: "lis-10",
    title: "News Report: City Plans an All-Electric Bus Fleet",
    level: 2,
    scene: "新闻播报",
    intro: "关于格林伍德市全面更换电动公交的新闻报道",
    lines: [
      { speaker: "News", en: "Good morning. I'm Linda Parker with the national technology report.", zh: "早上好，我是琳达·帕克，为您带来全国科技报道。" },
      { speaker: "News", en: "The city of Greenwood announced plans to replace all of its diesel buses with electric ones by 2030.", zh: "格林伍德市宣布，计划在 2030 年前将全部柴油公交车更换为电动车。" },
      { speaker: "News", en: "According to the city government, one hundred and twenty new electric buses will arrive next spring.", zh: "据市政府介绍，一百二十辆新电动公交车将于明年春天到位。" },
      { speaker: "News", en: "The project will cost about fifty million dollars, half of which comes from the national green transport fund.", zh: "该项目预计耗资约五千万美元，其中一半来自国家绿色交通基金。" },
      { speaker: "News", en: "City officials say electric buses are quieter and produce no pollution in the streets.", zh: "市政官员表示，电动公交车噪音更小，且不会在街道上产生尾气污染。" },
      { speaker: "News", en: "However, some drivers worry that the buses cannot run a full day on one charge.", zh: "不过，一些司机担心这些车充电一次跑不了一整天。" },
      { speaker: "News", en: "The transport department answered that fast charging stations will be built at four main bus stops.", zh: "交通部门回应称，将在四个主要公交站修建快速充电站。" },
      { speaker: "News", en: "The first electric buses are expected to carry passengers in April next year.", zh: "首批电动公交车预计将于明年四月载客运营。" }
    ],
    keyPhrases: [
      { en: "replace... with...", zh: "用……替换……" },
      { en: "diesel bus", zh: "柴油公交车" },
      { en: "green transport fund", zh: "绿色交通基金" },
      { en: "fast charging station", zh: "快速充电站" },
      { en: "carry passengers", zh: "载客运营" }
    ],
    questions: [
      {
        q: "What will Greenwood do by 2030?",
        options: ["Build new roads", "Replace diesel buses with electric ones", "Close the bus company", "Reduce ticket prices"],
        answer: 1,
        explain: "新闻提到该市计划 2030 年前用电动车替换全部柴油公交车。"
      },
      {
        q: "Where does half of the money come from?",
        options: ["Ticket sales", "The national green transport fund", "Bus drivers", "A foreign company"],
        answer: 1,
        explain: "项目资金的一半来自国家绿色交通基金（the national green transport fund）。"
      },
      {
        q: "Why do some drivers worry about the new buses?",
        options: ["They are too expensive.", "They are too noisy.", "The battery may not last a full day.", "They are too slow."],
        answer: 2,
        explain: "司机们担心 \"cannot run a full day on one charge\"，即充电一次跑不了一整天。"
      }
    ]
  },
  {
    id: "lis-11",
    title: "Discussing a Job Offer on the Phone",
    level: 3,
    scene: "日常对话",
    intro: "候选人与招聘经理电话协商录用待遇",
    lines: [
      { speaker: "Manager", en: "Thanks for joining the call, Ms. Chen. As you know, we'd like to offer you the position of project coordinator.", zh: "谢谢陈女士参加这次电话会议。如你所知，我们想录用你担任项目协调员。" },
      { speaker: "Candidate", en: "Thank you — I'm delighted to receive the offer. Before accepting, I'd like to discuss a couple of details.", zh: "谢谢，我很高兴收到这份录用通知。在接受之前，我想商讨几个细节。" },
      { speaker: "Manager", en: "Of course. What would you like to go over?", zh: "当然可以，你想谈哪些方面？" },
      { speaker: "Candidate", en: "The starting salary. Considering my five years of experience and the responsibilities involved, I was expecting something closer to sixty thousand.", zh: "是起薪。考虑到我五年的经验和这个职位要承担的职责，我期望的数字更接近六万。" },
      { speaker: "Manager", en: "I understand. The budgeted range caps at fifty-eight thousand, but I can authorize an additional performance review after six months.", zh: "我理解。预算范围的上限是五万八，但我可以批准在入职六个月后追加一次绩效评估。" },
      { speaker: "Candidate", en: "That sounds reasonable. Could that review lead to a formal adjustment in writing?", zh: "听起来合理。那次评估能否带来书面的正式调薪？" },
      { speaker: "Manager", en: "Absolutely. If your targets are met, the review would trigger a raise of up to ten percent.", zh: "完全可以。如果你达成目标，评估将触发最高百分之十的加薪。" },
      { speaker: "Candidate", en: "In that case, I'm happy to accept the offer as it stands.", zh: "那样的话，我乐意按现有条件接受这份工作。" },
      { speaker: "Manager", en: "Wonderful. I'll email the revised terms this afternoon, and we look forward to having you on board in January.", zh: "太好了。今天下午我会把修订后的条款发邮件给你，我们期待你一月份加入团队。" }
    ],
    keyPhrases: [
      { en: "job offer", zh: "录用通知" },
      { en: "starting salary", zh: "起薪" },
      { en: "performance review", zh: "绩效评估" },
      { en: "trigger a raise", zh: "触发加薪" },
      { en: "on board", zh: "入职、加入团队" }
    ],
    questions: [
      {
        q: "What position is the candidate offered?",
        options: ["Marketing manager", "Project coordinator", "Sales director", "Office assistant"],
        answer: 1,
        explain: "经理开场就说明录用职位是 \"project coordinator\"（项目协调员）。"
      },
      {
        q: "What salary does the candidate initially expect?",
        options: ["Fifty thousand", "Fifty-eight thousand", "Sixty thousand", "Sixty-six thousand"],
        answer: 2,
        explain: "候选人基于五年经验，期望薪资接近六万（closer to sixty thousand）。"
      },
      {
        q: "What could the six-month review lead to?",
        options: ["A new office", "An extra week of holiday", "A raise of up to ten percent", "A promotion to manager"],
        answer: 2,
        explain: "经理承诺若达成目标，评估将触发最高百分之十的加薪。"
      }
    ]
  },
  {
    id: "lis-12",
    title: "Complaint Call About a Delayed Delivery",
    level: 3,
    scene: "日常对话",
    intro: "顾客就延迟送达的包裹致电客服投诉并获赔偿",
    lines: [
      { speaker: "Agent", en: "Customer service, this is Daniel speaking. How may I help you?", zh: "客服中心，我是丹尼尔，有什么可以帮您？" },
      { speaker: "Customer", en: "Hello. I'm calling about order number 4826. It was supposed to arrive last Tuesday, but it still hasn't shown up.", zh: "你好，我打电话是关于 4826 号订单。它本应上周二送达，但到现在还没到。" },
      { speaker: "Agent", en: "I do apologize for the inconvenience. Let me pull up your order... I can see it left our warehouse on time, so the delay seems to have occurred during shipping.", zh: "给您带来不便我深表歉意。我调出您的订单……可以看到它按时离开了仓库，延误似乎发生在运输环节。" },
      { speaker: "Customer", en: "That's what the tracking page says, but no one has given me a clear answer about where the package actually is.", zh: "物流页面上也是这么写的，但一直没有人明确告诉我包裹现在到底在哪。" },
      { speaker: "Agent", en: "I completely understand your frustration. I've contacted the courier, and apparently the package was misrouted to another distribution center.", zh: "我完全理解您的沮丧。我已经联系了快递公司，显然包裹被错分到了另一个配送中心。" },
      { speaker: "Customer", en: "So when will it actually get here?", zh: "那它到底什么时候能送到？" },
      { speaker: "Agent", en: "The courier has confirmed it should reach you by this Friday, and as an apology, we'd like to offer you a fifteen-percent refund on the order.", zh: "快递公司确认本周五前会送达。作为歉意，我们愿意按订单金额向您退款百分之十五。" },
      { speaker: "Customer", en: "A partial refund is something, but I'd appreciate priority handling in future orders as well.", zh: "部分退款算是种补偿，不过我也希望以后的订单能优先处理。" },
      { speaker: "Agent", en: "Noted — I've added a priority flag to your account, and you'll receive an email confirming the refund within 24 hours.", zh: "已记录——我已在您的账户中添加优先标记，24 小时内您会收到确认退款的邮件。" }
    ],
    keyPhrases: [
      { en: "apologize for the inconvenience", zh: "为不便致歉" },
      { en: "misrouted", zh: "被错分的、送错路的" },
      { en: "partial refund", zh: "部分退款" },
      { en: "priority handling", zh: "优先处理" }
    ],
    questions: [
      {
        q: "What is the customer's problem?",
        options: ["A broken product", "A delayed delivery", "A wrong item", "A double charge"],
        answer: 1,
        explain: "顾客的订单本应上周二送达却迟迟未到，问题是配送延迟。"
      },
      {
        q: "Why was the package delayed according to the courier?",
        options: ["It was damaged in the warehouse.", "The address was unreadable.", "It was sent to the wrong distribution center.", "The weather was bad."],
        answer: 2,
        explain: "客服转述快递公司的说法：包裹被错分到了另一个配送中心（misrouted）。"
      },
      {
        q: "What compensation does the customer receive?",
        options: ["A full refund", "A fifteen-percent refund and a priority flag on the account", "A free replacement product", "A discount coupon only"],
        answer: 1,
        explain: "客服提供订单金额 15% 的退款，并在账户中添加优先处理标记。"
      }
    ]
  },
  {
    id: "lis-13",
    title: "Seminar: Should City Centres Restrict Private Cars?",
    level: 3,
    scene: "学术场景",
    intro: "研讨课上师生辩论市中心是否应限制私家车",
    lines: [
      { speaker: "Professor", en: "This week's seminar examines whether cities should restrict private cars in their centres. Any initial positions?", zh: "本周研讨课讨论城市是否应限制市中心的私家车。有初步观点吗？" },
      { speaker: "Student A", en: "I'd argue restrictions are justified. Congestion costs the economy billions annually, and public transport simply can't move freely when roads are jammed.", zh: "我认为限制是有道理的。拥堵每年给经济造成数十亿损失，而道路一堵，公共交通根本无法顺畅运行。" },
      { speaker: "Professor", en: "That's an economic argument. Can you support it with evidence?", zh: "这是一个经济学论证，你能用证据来支撑吗？" },
      { speaker: "Student A", en: "A study of London's congestion charge found traffic in the charging zone fell by roughly fifteen percent in its first year.", zh: "一项针对伦敦拥堵费的研究发现，收费区内的交通流量在第一年下降了大约百分之十五。" },
      { speaker: "Student B", en: "I take a different view. Restrictions may protect the environment, but they risk pushing lower-income workers out of city jobs, since they often can't afford housing downtown.", zh: "我持不同看法。限制或许能保护环境，却可能把低收入劳动者挤出城市岗位，因为他们往往负担不起市中心的住房。" },
      { speaker: "Professor", en: "An interesting equity concern. Student A, how would you respond to that?", zh: "这是一个很有意思的公平性问题。学生 A，你如何回应？" },
      { speaker: "Student A", en: "Perhaps the revenue from charges could fund cheaper bus routes connecting outer areas with the centre.", zh: "或许可以用收费收入来资助更便宜的公交线路，连接外围地区和市中心。" },
      { speaker: "Student B", en: "That could help, but only if the transport links are reliable; otherwise workers just trade traffic jams for long, unpredictable commutes.", zh: "这可能有用，但前提是交通衔接可靠；否则劳动者只是把堵车换成了漫长而不可预测的通勤。" },
      { speaker: "Professor", en: "Good exchange — you've identified both the efficiency gains and the distributional costs. Next week, bring one example from another city.", zh: "讨论得很好——你们既看到了效率收益，也看到了分配成本。下周请各自带一个其他城市的案例来。" }
    ],
    keyPhrases: [
      { en: "congestion charge", zh: "拥堵费" },
      { en: "take a different view", zh: "持不同观点" },
      { en: "equity concern", zh: "公平性问题" },
      { en: "distributional costs", zh: "分配成本" },
      { en: "unpredictable commute", zh: "不可预测的通勤" }
    ],
    questions: [
      {
        q: "What evidence does Student A give?",
        options: ["A survey of car owners", "London's traffic falling after a congestion charge", "A report on air quality", "Statistics on bus tickets"],
        answer: 1,
        explain: "学生 A 引用伦敦拥堵费案例：收费区内交通流量第一年下降约百分之十五。"
      },
      {
        q: "What is Student B's main concern?",
        options: ["Traffic noise", "The cost of public transport", "Lower-income workers being pushed out of city jobs", "Pollution from buses"],
        answer: 2,
        explain: "学生 B 担心限制措施会把负担不起市中心住房的低收入劳动者挤出城市岗位。"
      },
      {
        q: "According to Student B, when could the proposed solution work?",
        options: ["If the charges are reduced", "Only if the transport links are reliable", "If parking becomes free", "Only if all restrictions end"],
        answer: 1,
        explain: "学生 B 认为用收费收入改善公交只有在线路可靠时才有效，否则只是换一种糟糕的通勤。"
      }
    ]
  },
  {
    id: "lis-14",
    title: "Lecture: The Psychology of Decision-Making",
    level: 3,
    scene: "学术场景",
    intro: "心理学讲座讲解损失厌恶与框架效应",
    lines: [
      { speaker: "Professor", en: "Good morning. Today's lecture explores why human decision-making is far less rational than we tend to assume.", zh: "早上好。今天的讲座要探讨：为什么人类的决策远比我们以为的更不理性。" },
      { speaker: "Professor", en: "Consider a well-documented phenomenon called loss aversion: losing a hundred pounds feels roughly twice as painful as gaining a hundred pounds feels pleasurable.", zh: "想一想一个被充分记录的现象——损失厌恶：损失一百英镑的痛苦感，大约是获得一百英镑的快乐感的两倍。" },
      { speaker: "Professor", en: "This asymmetry, first described by Kahneman and Tversky, explains why investors hold on to failing shares far longer than pure logic would suggest.", zh: "这种不对称性由卡尼曼和特沃斯基首先提出，它解释了为什么投资者持有亏损股票的时间远超纯粹逻辑所建议的程度。" },
      { speaker: "Professor", en: "A second pattern is framing. When a medical treatment is described as having a ninety percent survival rate, patients approve of it far more readily than when it is described as having a ten percent death rate, although the two statements are identical in meaning.", zh: "第二种模式是框架效应。当一种疗法的存活率被表述为百分之九十时，患者对它的接受度远高于被表述为死亡率百分之十的时候——尽管两种说法含义完全相同。" },
      { speaker: "Professor", en: "Framing matters because it demonstrates that our judgements depend heavily on how information is presented, rather than on the information itself.", zh: "框架效应之所以重要，是因为它表明我们的判断在很大程度上取决于信息的呈现方式，而非信息本身。" },
      { speaker: "Professor", en: "These biases appear everywhere, from supermarket pricing to government policy, which is why understanding them is essential for critical thinking.", zh: "这类偏差无处不在，从超市定价到政府政策都有体现，因此理解它们对批判性思维至关重要。" },
      { speaker: "Professor", en: "So what are the practical implications? First, stay alert to how choices are framed in advertising and political debates. Second, when a decision truly matters, restate the problem in more than one way before you commit.", zh: "那么现实启示是什么？第一，警惕广告和政治辩论中选项被包装的方式；第二，当决策真正重要时，先换几种说法重新表述问题再做决定。" },
      { speaker: "Professor", en: "For your assignment, identify one real advertising campaign that clearly exploits framing, and analyse how it works in no more than five hundred words.", zh: "课后作业：找出一个明显利用框架效应的真实广告案例，并用不超过五百字分析它是如何起作用的。" }
    ],
    keyPhrases: [
      { en: "loss aversion", zh: "损失厌恶" },
      { en: "approve of", zh: "认可、接受" },
      { en: "identical in meaning", zh: "含义完全相同" },
      { en: "critical thinking", zh: "批判性思维" },
      { en: "practical implications", zh: "现实启示" }
    ],
    questions: [
      {
        q: "What is loss aversion?",
        options: ["Always avoiding any risk", "Feeling losses more strongly than gains", "Making decisions too quickly", "Ignoring expert advice"],
        answer: 1,
        explain: "讲座定义损失厌恶为：损失一百英镑的痛苦约为获得一百英镑快乐的两倍，即对损失感受更强烈。"
      },
      {
        q: "Why does the survival-rate example matter?",
        options: ["Doctors often make mistakes.", "The same facts feel different depending on wording.", "Patients never understand statistics.", "Treatments are always risky."],
        answer: 1,
        explain: "两种表述含义相同，患者态度却不同，说明判断受措辞（框架）影响，而非事实本身。"
      },
      {
        q: "What is the students' assignment?",
        options: ["Interview an investor", "Analyse an ad campaign that exploits framing", "Compare two medical treatments", "Design an experiment on losses"],
        answer: 1,
        explain: "作业要求找一个明显利用框架效应的真实广告案例，并在五百字以内分析。"
      }
    ]
  },
  {
    id: "lis-15",
    title: "News: Global Climate Agreement Reached in Geneva",
    level: 3,
    scene: "新闻播报",
    intro: "关于日内瓦气候峰会达成国际协定的新闻报道",
    lines: [
      { speaker: "News", en: "Good evening. I'm David Morris with today's international report.", zh: "晚上好，我是大卫·莫里斯，为您带来今日国际报道。" },
      { speaker: "News", en: "Delegates from more than one hundred and ninety countries concluded a two-week climate summit in Geneva on Friday with what observers are calling a modest but significant agreement.", zh: "来自一百九十多个国家的代表于周五在日内瓦结束了为期两周的气候峰会，达成了一项被观察人士称为温和但意义重大的协议。" },
      { speaker: "News", en: "Under the terms of the deal, participating nations have committed to reducing carbon emissions by forty percent compared with 2015 levels within the next twelve years.", zh: "根据协议条款，参与国承诺在未来十二年内，将碳排放量在 2015 年水平基础上削减百分之四十。" },
      { speaker: "News", en: "The agreement also establishes a fund, financed largely by industrialised nations, to assist developing countries in adapting to rising sea levels and extreme weather.", zh: "协议还设立了一个主要由工业化国家出资的基金，用于帮助发展中国家适应海平面上升和极端天气。" },
      { speaker: "News", en: "However, critics point out that the targets are not legally binding, and that a similar deal signed a decade ago failed to meet its goals.", zh: "然而，批评者指出这些目标不具有法律约束力，而且十年前签署的一份类似协议也未能实现其目标。" },
      { speaker: "News", en: "Speaking to reporters, the summit's chair acknowledged the challenges ahead, saying that implementation, not intention, will determine whether the agreement succeeds.", zh: "峰会主席在回答记者提问时承认前方挑战重重，并表示决定协议成败的是执行而非意愿。" },
      { speaker: "News", en: "A follow-up conference is scheduled to take place in Nairobi next autumn, where governments will be expected to present detailed national plans.", zh: "后续会议定于明年秋季在内罗毕举行，届时各国政府需提交详细的国家方案。" },
      { speaker: "News", en: "Analysts note that financial markets reacted calmly to the announcement, suggesting investors had largely anticipated the outcome.", zh: "分析人士注意到金融市场对这一消息反应平静，表明投资者基本上已预料到这一结果。" }
    ],
    keyPhrases: [
      { en: "delegate", zh: "与会代表" },
      { en: "carbon emissions", zh: "碳排放" },
      { en: "legally binding", zh: "具有法律约束力" },
      { en: "industrialised nations", zh: "工业化国家" },
      { en: "implementation", zh: "执行、落实" }
    ],
    questions: [
      {
        q: "What have the participating nations committed to?",
        options: ["Ending all carbon emissions immediately", "Cutting emissions by forty percent versus 2015 within twelve years", "Building sea walls in every city", "Banning all cars in cities"],
        answer: 1,
        explain: "协议条款写明：未来十二年内将碳排放比 2015 年水平削减百分之四十。"
      },
      {
        q: "Why do critics doubt the agreement?",
        options: ["The targets are not legally binding.", "Too few countries signed it.", "The fund is far too large.", "The summit ended too early."],
        answer: 0,
        explain: "批评者指出目标不具法律约束力，且十年前的类似协议也未达标。"
      },
      {
        q: "What is expected of governments at the Nairobi conference?",
        options: ["A new agreement text", "Detailed national plans", "A list of financial donors", "The chair's resignation"],
        answer: 1,
        explain: "新闻说各国政府预计将在内罗毕会议上提交详细的国家方案（detailed national plans）。"
      }
    ]
  }
  ,
  {
    id: "lis-16",
    title: "Checking In at a Hotel",
    level: 1,
    scene: "日常对话",
    intro: "客人在酒店前台办理入住",
    lines: [
      { speaker: "Receptionist", en: "Good evening! Welcome to the Seaview Hotel. Do you have a reservation?", zh: "晚上好！欢迎光临海景酒店。您有预订吗？" },
      { speaker: "Guest", en: "Yes, I booked a double room for two nights. The name is Carter.", zh: "是的，我订了两晚的双人房，订房人姓卡特。" },
      { speaker: "Receptionist", en: "Let me check... Yes, here it is. A double room with a sea view, from Tuesday to Thursday.", zh: "我查一下……有了。带海景的双人房，周二入住，周四退房。" },
      { speaker: "Guest", en: "That's right. What time is breakfast tomorrow morning?", zh: "没错。明天早上早餐几点开始？" },
      { speaker: "Receptionist", en: "Breakfast is from seven to ten, in the dining room on the first floor.", zh: "早餐时间是七点到十点，在一楼餐厅。" },
      { speaker: "Guest", en: "Great. Is the Wi-Fi free in the rooms?", zh: "太好了。房间里的无线网络是免费的吗？" },
      { speaker: "Receptionist", en: "Yes, it's free. The password is on the card next to the phone.", zh: "是的，免费。密码就在电话旁边的卡片上。" },
      { speaker: "Receptionist", en: "Here's your key card. Room 508, on the fifth floor. The lift is just around the corner.", zh: "这是您的房卡。508 房，在五楼。电梯就在拐角处。" },
      { speaker: "Guest", en: "Thank you. Oh, could I also have a wake-up call at six thirty?", zh: "谢谢。哦，我还可以预约六点半的叫醒服务吗？" },
      { speaker: "Receptionist", en: "Of course. Enjoy your stay!", zh: "当然可以。祝您入住愉快！" }
    ],
    keyPhrases: [
      { en: "make a reservation", zh: "预订" },
      { en: "double room", zh: "双人房" },
      { en: "key card", zh: "房卡" },
      { en: "wake-up call", zh: "叫醒服务" }
    ],
    questions: [
      {
        q: "How many nights will the guest stay?",
        options: ["One night", "Two nights", "Three nights", "Four nights"],
        answer: 1,
        explain: "客人订了 \"a double room for two nights\"，共两晚（周二入住、周四退房）。"
      },
      {
        q: "Where is the dining room?",
        options: ["On the fifth floor", "Next to the lift", "On the first floor", "In room 508"],
        answer: 2,
        explain: "前台说早餐在 \"the dining room on the first floor\"，餐厅在一楼。"
      },
      {
        q: "What extra service does the guest ask for?",
        options: ["A sea-view room", "A wake-up call at 6:30", "Free breakfast", "A larger room"],
        answer: 1,
        explain: "客人最后请求 \"a wake-up call at six thirty\"，即六点半的叫醒服务。"
      }
    ]
  },
  {
    id: "lis-17",
    title: "Buying Tickets at the Cinema",
    level: 1,
    scene: "日常对话",
    intro: "顾客在电影院售票处购票",
    lines: [
      { speaker: "Clerk", en: "Good evening! Which film would you like to see tonight?", zh: "晚上好！您今晚想看哪部电影？" },
      { speaker: "Customer", en: "We'd like two tickets for Space Journey, please. Is the seven o'clock showing still on?", zh: "我们要买两张《太空之旅》的票。七点那场还在放映吗？" },
      { speaker: "Clerk", en: "It is, but it's almost full. Only the front rows are left.", zh: "还在放映，但座位几乎满了，只剩下最前排。" },
      { speaker: "Customer", en: "Oh. What about a later showing?", zh: "哦，那晚一点的场次呢？" },
      { speaker: "Clerk", en: "There's one at nine fifteen, and we still have good seats in the middle.", zh: "九点十五有一场，中间还有不错的座位。" },
      { speaker: "Customer", en: "That works. Two tickets for the nine fifteen showing, please.", zh: "可以，就买两张九点十五那场的票。" },
      { speaker: "Clerk", en: "Would you like popcorn or drinks with that? There's a set price this week — cheaper than buying them separately.", zh: "要配点爆米花或饮料吗？本周有套餐价，比单买便宜。" },
      { speaker: "Customer", en: "Good idea. One large popcorn and two lemonades, please.", zh: "好主意，那就来一大份爆米花和两杯柠檬水。" },
      { speaker: "Clerk", en: "That comes to twenty-four dollars in total. Screen Four is upstairs on the left.", zh: "一共二十四美元。四号放映厅在楼上左侧。" },
      { speaker: "Customer", en: "Thanks a lot! We'll be back at nine.", zh: "非常感谢！我们九点过来。" }
    ],
    keyPhrases: [
      { en: "showing", zh: "（电影的）场次" },
      { en: "almost full", zh: "几乎满座" },
      { en: "set price", zh: "套餐价" },
      { en: "come to", zh: "合计（金额）" }
    ],
    questions: [
      {
        q: "Why don't they watch the seven o'clock showing?",
        options: ["It has stopped showing", "Only front-row seats are left", "The tickets are too expensive", "The film is not suitable for children"],
        answer: 1,
        explain: "售票员说七点场次 \"almost full. Only the front rows are left\"，只剩最前排座位。"
      },
      {
        q: "What time is their chosen showing?",
        options: ["7:00", "8:45", "9:15", "9:50"],
        answer: 2,
        explain: "他们最终买了九点十五（nine fifteen）那场的两张票。"
      },
      {
        q: "What do they buy to eat and drink?",
        options: ["One large popcorn and two lemonades", "Two popcorns and one lemonade", "One small popcorn and two colas", "Nothing at all"],
        answer: 0,
        explain: "顾客点了 \"One large popcorn and two lemonades\"，即一大份爆米花和两杯柠檬水。"
      }
    ]
  },
  {
    id: "lis-18",
    title: "Explaining a Missed Class to the Teacher",
    level: 1,
    scene: "学术场景",
    intro: "学生因病缺课后向老师询问补课安排",
    lines: [
      { speaker: "Student", en: "Excuse me, Ms. Reed. Do you have a minute? I was absent on Tuesday.", zh: "打扰一下，里德老师。您有空吗？我周二缺课了。" },
      { speaker: "Teacher", en: "Oh yes, Tom. Were you ill?", zh: "哦，是的，汤姆。你生病了吗？" },
      { speaker: "Student", en: "I had a bad stomachache, so I stayed at home. Could you tell me what we did in class?", zh: "我胃疼得厉害，所以待在家里。您能告诉我课上讲了什么吗？" },
      { speaker: "Teacher", en: "We finished Unit Four and started the writing task. I also handed out a worksheet with the instructions.", zh: "我们讲完了第四单元，并布置了写作任务。我还发了一张写有要求的练习纸。" },
      { speaker: "Student", en: "I see. Could I copy the notes from a classmate?", zh: "明白了。我可以找同学抄一下笔记吗？" },
      { speaker: "Teacher", en: "Of course. Maria's notes are usually very clear. You can also watch the class recording online.", zh: "当然可以。玛丽亚的笔记通常很清楚。你也可以在网上看课堂录像。" },
      { speaker: "Student", en: "I forgot about the recording. That's really helpful.", zh: "我都忘了还有课堂录像，这可太有用了。" },
      { speaker: "Teacher", en: "The writing task is due next Monday, so you still have time. But don't leave it until Sunday night.", zh: "写作任务下周一截止，所以你还有时间，但别拖到周日晚上才动笔。" },
      { speaker: "Student", en: "I won't. One more question — is Friday's quiz still on?", zh: "不会的。还有一个问题——周五的小测验照常进行吗？" },
      { speaker: "Teacher", en: "Yes, it does. It covers Units Three and Four. Come and see me if anything is unclear.", zh: "是的，照常进行。范围是第三和第四单元。有不明白的地方随时来问我。" }
    ],
    keyPhrases: [
      { en: "be absent", zh: "缺席" },
      { en: "hand out", zh: "分发" },
      { en: "be due", zh: "（作业）截止" },
      { en: "cover Units Three and Four", zh: "考查第三、四单元内容" }
    ],
    questions: [
      {
        q: "Why did the student miss the class?",
        options: ["He was ill", "He visited his grandparents", "He overslept", "He had a football match"],
        answer: 0,
        explain: "学生说自己 \"had a bad stomachache\"，因胃疼请假在家。"
      },
      {
        q: "Which two ways of catching up does the teacher mention?",
        options: ["Extra lessons and a new textbook", "Maria's notes and the class recording", "A study group and the library", "The school website and a video call"],
        answer: 1,
        explain: "老师建议抄玛丽亚的笔记，并观看网上的课堂录像。"
      },
      {
        q: "What does Friday's quiz cover?",
        options: ["Unit Four only", "Units Three and Four", "Units Two and Three", "All the previous units"],
        answer: 1,
        explain: "老师说测验 \"covers Units Three and Four\"，范围为第三、四单元。"
      }
    ]
  },
  {
    id: "lis-19",
    title: "Planning a Group Presentation",
    level: 1,
    scene: "学术场景",
    intro: "三名同学讨论小组展示的分工与排练",
    lines: [
      { speaker: "Mia", en: "OK, our presentation is next Wednesday. Have we decided who does what?", zh: "好了，我们下周三就要做小组展示。分工定了吗？" },
      { speaker: "Jack", en: "Not yet. Our topic is recycling in our city, right? Why don't we split it into three parts?", zh: "还没呢。我们的主题是本市的回收利用，对吧？要不分成三部分？" },
      { speaker: "Mia", en: "Good idea. I'd like to do the introduction and explain why recycling matters.", zh: "好主意。我来负责引言，讲讲回收为什么重要。" },
      { speaker: "Jack", en: "Then I can talk about what the city is doing now — the new bins and the collection days.", zh: "那我来介绍本市目前的做法——新垃圾桶和回收日。" },
      { speaker: "Sara", en: "And I'll finish with some suggestions for students. I have some good photos for the slides, too.", zh: "那我最后给同学们提几点建议。我还有一些不错的照片可以放进幻灯片。" },
      { speaker: "Mia", en: "Perfect. The teacher said eight minutes in total, so how long should each part be?", zh: "太好了。老师说总共八分钟，那每人讲多久？" },
      { speaker: "Sara", en: "About two or three minutes each. We should practice together so we don't go over time.", zh: "每人两三分钟左右。我们应该一起排练，免得超时。" },
      { speaker: "Jack", en: "Can we meet at lunch on Monday? There are free study rooms in the library.", zh: "周一午饭时间见怎么样？图书馆有免费的自习室。" },
      { speaker: "Mia", en: "Works for me. Jack, could you also make the title slide tonight?", zh: "我没问题。杰克，你今晚能顺便把标题页做出来吗？" },
      { speaker: "Jack", en: "Sure. I'll send the slides to our group chat so you can both check them.", zh: "没问题。我把幻灯片发到群里，你们俩都可以看看。" }
    ],
    keyPhrases: [
      { en: "split... into three parts", zh: "把……分成三部分" },
      { en: "go over time", zh: "超时" },
      { en: "study room", zh: "自习室" },
      { en: "slide", zh: "幻灯片" }
    ],
    questions: [
      {
        q: "What is the group's presentation topic?",
        options: ["Air pollution in the city", "Recycling in our city", "Saving water at school", "Traffic safety"],
        answer: 1,
        explain: "杰克确认主题是 \"recycling in our city\"（本市的回收利用）。"
      },
      {
        q: "Which part will Jack prepare?",
        options: ["The introduction", "What the city is doing now", "Suggestions for students", "The conclusion"],
        answer: 1,
        explain: "杰克负责介绍 \"what the city is doing now\"，即本市目前的做法。"
      },
      {
        q: "When and where will the group practice?",
        options: ["After school on Wednesday", "At lunch on Monday in the library", "On Friday evening at Jack's home", "Before class on Tuesday"],
        answer: 1,
        explain: "三人约好周一午饭时间在图书馆的自习室排练。"
      }
    ]
  },
  {
    id: "lis-20",
    title: "Local News: A School Wins a Green Award",
    level: 1,
    scene: "新闻播报",
    intro: "关于山丘小学回收项目获奖的本地新闻",
    lines: [
      { speaker: "News", en: "Good afternoon. Here is some good news from our local schools.", zh: "下午好，下面是一条来自我们本地学校的好消息。" },
      { speaker: "News", en: "Hillside Primary School has won this year's Green School Award for its recycling project.", zh: "山丘小学凭借其回收项目获得了今年的\"绿色学校奖\"。" },
      { speaker: "News", en: "Students started the project two years ago with just four recycling bins.", zh: "学生们两年前发起了这个项目，当时只有四个回收箱。" },
      { speaker: "News", en: "Now every classroom recycles paper, plastic, and food waste.", zh: "现在每间教室都分类回收纸张、塑料和厨余垃圾。" },
      { speaker: "News", en: "The students also collect old pens and batteries, and turn empty bottles into plant pots for the school garden.", zh: "学生们还收集旧笔和旧电池，并把空瓶子改造成学校花园里的花盆。" },
      { speaker: "News", en: "Last year the school cut its waste by more than half.", zh: "去年，这所学校的垃圾总量减少了一半以上。" },
      { speaker: "News", en: "The school will receive five thousand dollars, and students have voted to spend it on a new vegetable garden.", zh: "学校将获得五千美元奖金，学生们投票决定用它建一个新菜园。" },
      { speaker: "News", en: "The award ceremony will take place at the city hall next Friday, and everyone is welcome.", zh: "颁奖典礼将于下周五在市政厅举行，欢迎大家参加。" }
    ],
    keyPhrases: [
      { en: "win an award", zh: "获奖" },
      { en: "food waste", zh: "厨余垃圾" },
      { en: "cut... by more than half", zh: "把……减少一半以上" },
      { en: "award ceremony", zh: "颁奖典礼" }
    ],
    questions: [
      {
        q: "Why did the school win the award?",
        options: ["For its recycling project", "For a new vegetable garden", "For a science competition", "For planting five hundred trees"],
        answer: 0,
        explain: "新闻说学校因 \"its recycling project\"（回收项目）获得绿色学校奖。"
      },
      {
        q: "How much did the school cut its waste last year?",
        options: ["By a quarter", "By a third", "By more than half", "By ninety percent"],
        answer: 2,
        explain: "原文说 \"cut its waste by more than half\"，垃圾总量减少了一半以上。"
      },
      {
        q: "What will the prize money be used for?",
        options: ["More recycling bins", "A new vegetable garden", "A school trip", "New computers"],
        answer: 1,
        explain: "学生们投票决定把奖金用于 \"a new vegetable garden\"（新建菜园）。"
      }
    ]
  }
  ,
  {
    id: "lis-21",
    title: "Booking a Table for Someone with a Nut Allergy",
    level: 2,
    scene: "日常对话",
    intro: "顾客电话订位并告知同伴坚果过敏",
    lines: [
      { speaker: "Host", en: "Good evening, Bella Italia. How can I help you?", zh: "晚上好，这里是 Bella Italia 餐厅，有什么可以帮您？" },
      { speaker: "Caller", en: "Hi, I'd like to book a table for six this Saturday at seven. Is that possible?", zh: "你好，我想订本周六七点、六个人的桌位，可以吗？" },
      { speaker: "Host", en: "Let me check our book... Seven o'clock is busy on Saturday, but I have a table for six at seven thirty. Would that suit you?", zh: "我查一下登记簿……周六七点订得很满，但七点半有一张六人桌，您看合适吗？" },
      { speaker: "Caller", en: "Seven thirty is fine. Actually, one of my friends is allergic to nuts. Do many of your dishes contain nuts?", zh: "七点半可以。对了，我有一位朋友对坚果过敏。你们很多菜里含坚果吗？" },
      { speaker: "Host", en: "A few of our desserts do, but the kitchen can prepare most dishes without nuts. Just remind your waiter when you order.", zh: "有几道甜点含坚果，但厨房做大多数菜时都可以不放坚果。点餐时提醒服务员一声就行。" },
      { speaker: "Caller", en: "That's good to know. Could you make a note of the allergy on our booking, please?", zh: "知道这个太好了。麻烦在订单上备注一下过敏信息好吗？" },
      { speaker: "Host", en: "Done. I've written 'nut allergy' on your reservation. May I have a name for the table?", zh: "已记下。我在您的预订上注明了\"坚果过敏\"。请问订位用什么名字？" },
      { speaker: "Caller", en: "Under Mr. Liu — L-I-U.", zh: "用刘先生的名字，L-I-U。" },
      { speaker: "Host", en: "Perfect. We'll hold the table for fifteen minutes, so please try to arrive on time.", zh: "好的。我们会保留桌位十五分钟，请尽量准时到店。" },
      { speaker: "Caller", en: "No problem. Thank you very much!", zh: "没问题，非常感谢！" }
    ],
    keyPhrases: [
      { en: "book a table", zh: "预订餐位" },
      { en: "be allergic to", zh: "对……过敏" },
      { en: "make a note of", zh: "记下，备注" },
      { en: "hold the table", zh: "保留桌位" }
    ],
    questions: [
      {
        q: "What time is the table booked for?",
        options: ["7:00", "7:30", "8:00", "8:30"],
        answer: 1,
        explain: "周六七点已订满，最终订的是七点半（seven thirty）的六人桌。"
      },
      {
        q: "What is the friend allergic to?",
        options: ["Milk", "Seafood", "Nuts", "Eggs"],
        answer: 2,
        explain: "顾客说明朋友 \"is allergic to nuts\"（对坚果过敏）。"
      },
      {
        q: "Why should the group arrive on time?",
        options: ["The kitchen closes at nine", "The restaurant is far away", "The table is only held for fifteen minutes", "The waiter needs to leave early"],
        answer: 2,
        explain: "服务员说只保留桌位十五分钟（\"hold the table for fifteen minutes\"），所以要准时。"
      }
    ]
  },
  {
    id: "lis-22",
    title: "Office Hours: Feedback on an Essay Draft",
    level: 2,
    scene: "学术场景",
    intro: "教授就论文草稿向学生反馈修改意见",
    lines: [
      { speaker: "Student", en: "Professor Blake, thank you for seeing me. I got my essay draft back, but I'm not sure what to fix.", zh: "布莱克教授，谢谢您抽时间见我。我的论文草稿发回来了，但我不太清楚该改什么。" },
      { speaker: "Professor", en: "Of course. Overall, your argument is clear, and that's a real strength. The problem is your evidence.", zh: "没问题。总体来看，你的论点清晰，这是真正的优点，问题出在论据上。" },
      { speaker: "Student", en: "You mean the middle section?", zh: "您是指中间那部分吗？" },
      { speaker: "Professor", en: "Yes. You make three claims there, but two of them aren't properly supported. Where did your numbers on smartphone use come from?", zh: "是的。你在那一部分提出了三个论断，其中两个缺乏充分的支撑。关于智能手机使用的数据来自哪里？" },
      { speaker: "Student", en: "From a blog post, I think. I couldn't find the original study.", zh: "我记得来自一篇博客文章，我没找到原始研究。" },
      { speaker: "Professor", en: "That's exactly the issue. In academic writing, always go back to the source. A blog is fine for ideas, never for data.", zh: "问题正在于此。学术写作一定要追溯到原始出处。博客可以帮你找思路，但绝不能当作数据来源。" },
      { speaker: "Student", en: "I see. Do I need to change the conclusion as well?", zh: "我明白了。结论部分也需要修改吗？" },
      { speaker: "Professor", en: "The conclusion follows the evidence, so it will need a small adjustment. And please check the referencing style — I asked for APA format.", zh: "结论要跟着论据走，所以需要小幅调整。另外请检查引用格式——我要求的是 APA 格式。" },
      { speaker: "Student", en: "APA, got it. When is the final version due?", zh: "APA 格式，明白了。终稿什么时候交？" },
      { speaker: "Professor", en: "A week from Friday. If you send me the revised draft by Tuesday, I'll take one more look at it.", zh: "下周五交。如果你在周二前把修改稿发给我，我可以再看一遍。" }
    ],
    keyPhrases: [
      { en: "essay draft", zh: "论文草稿" },
      { en: "claim", zh: "论断，主张" },
      { en: "go back to the source", zh: "追溯原始出处" },
      { en: "referencing style", zh: "引用格式" }
    ],
    questions: [
      {
        q: "What does the professor praise about the essay?",
        options: ["Its clear argument", "Its long reference list", "Its neat formatting", "Its original data"],
        answer: 0,
        explain: "教授说 \"your argument is clear\"，论点清晰是文章的真正优点。"
      },
      {
        q: "What is wrong with the middle section?",
        options: ["It is too short", "Two claims lack proper support", "It repeats the introduction", "It uses the wrong language"],
        answer: 1,
        explain: "教授指出中间部分三个论断中有两个 \"aren't properly supported\"，缺乏充分支撑。"
      },
      {
        q: "What will the professor do if the revised draft arrives by Tuesday?",
        options: ["Extend the deadline", "Review it once more", "Grade it early", "Check only the references"],
        answer: 1,
        explain: "教授承诺周二前收到修改稿的话 \"I'll take one more look\"，会再看一遍。"
      }
    ]
  },
  {
    id: "lis-23",
    title: "Lecture: Coral Reefs Under Threat",
    level: 2,
    scene: "学术场景",
    intro: "教授讲解珊瑚礁的价值与白化威胁",
    lines: [
      { speaker: "Professor", en: "Last week we studied open-ocean ecosystems; today we turn to one of the richest habitats on Earth — coral reefs.", zh: "上周我们学习了开阔海域的生态系统；今天我们来看地球上最富饶的栖息地之一——珊瑚礁。" },
      { speaker: "Professor", en: "Although reefs cover less than one percent of the ocean floor, they support about a quarter of all marine species.", zh: "虽然珊瑚礁覆盖的海床不足百分之一，却支撑着约四分之一的海洋物种。" },
      { speaker: "Professor", en: "Corals themselves are animals, not rocks or plants. They live together with tiny algae that provide them with food — and with their famous colors.", zh: "珊瑚本身是动物，既不是岩石也不是植物。它们与微小的藻类共生，藻类为它们提供食物，也带来那标志性的色彩。" },
      { speaker: "Professor", en: "When water temperatures rise, corals expel these algae, and the reef turns white — an event known as bleaching.", zh: "当水温升高时，珊瑚会排出这些藻类，礁体随之变白，这一现象被称为白化。" },
      { speaker: "Professor", en: "Bleached corals are not dead, but they are starving. If high temperatures last for weeks, large areas of reef can die.", zh: "白化的珊瑚并未死亡，却处于饥饿状态。如果高温持续数周，大片珊瑚礁可能死亡。" },
      { speaker: "Professor", en: "Australia's Great Barrier Reef, for example, has suffered several mass bleaching events in the past decade.", zh: "例如澳大利亚的大堡礁，过去十年间已多次发生大规模白化。" },
      { speaker: "Professor", en: "Beyond warming water, reefs also face ocean acidification, destructive fishing methods, and pollution from the land.", zh: "除了海水变暖，珊瑚礁还面临海洋酸化、破坏性捕捞方式以及陆地污染的威胁。" },
      { speaker: "Professor", en: "Your task this week: choose one reef protection program, research it, and present its methods in our next session.", zh: "本周任务：选择一个珊瑚礁保护项目进行研究，下次课上介绍它的具体做法。" }
    ],
    keyPhrases: [
      { en: "coral reef", zh: "珊瑚礁" },
      { en: "marine species", zh: "海洋物种" },
      { en: "bleaching", zh: "（珊瑚）白化" },
      { en: "ocean acidification", zh: "海洋酸化" }
    ],
    questions: [
      {
        q: "How much of the ocean floor do coral reefs cover?",
        options: ["Less than one percent", "About a quarter", "About half", "Nearly all of it"],
        answer: 0,
        explain: "讲座说珊瑚礁覆盖海床 \"less than one percent\"，不足百分之一。"
      },
      {
        q: "Why does a bleached coral turn white?",
        options: ["It loses the algae that give it color", "It is covered by white sand", "It produces a new white shell", "It absorbs too much sunlight"],
        answer: 0,
        explain: "水温升高时珊瑚排出共生的藻类，而其颜色正来自这些藻类，因此变白。"
      },
      {
        q: "What are students asked to do this week?",
        options: ["Write an essay about the Great Barrier Reef", "Draw a map of the world's reefs", "Research and present one reef protection program", "Visit a local aquarium"],
        answer: 2,
        explain: "本周任务是选择一个珊瑚礁保护项目进行研究，并在下次课介绍其方法。"
      }
    ]
  },
  {
    id: "lis-24",
    title: "News: Robot Helpers Are Tested in Care Homes",
    level: 2,
    scene: "新闻播报",
    intro: "关于养老院试用助理机器人的科技新闻",
    lines: [
      { speaker: "News", en: "Good evening. I'm Sarah Kim with our weekly technology report.", zh: "晚上好，我是莎拉·金，为您带来每周科技报道。" },
      { speaker: "News", en: "Care homes in three northern cities have started testing small helper robots with their residents.", zh: "北部三个城市的养老院已开始请住户试用小型助理机器人。" },
      { speaker: "News", en: "The robots, each about the height of a young child, can remind people to take their medicine and call for help in an emergency.", zh: "这种机器人大约有一个小孩那么高，能提醒住户按时吃药，还能在紧急情况下呼救。" },
      { speaker: "News", en: "They can also play music, read the news aloud, and make video calls to family members.", zh: "它们还能播放音乐、朗读新闻，并与住户的家人进行视频通话。" },
      { speaker: "News", en: "The eighteen-month project is run by the national health service together with a university engineering team.", zh: "这个为期十八个月的项目由国家医疗服务系统与一所大学的工程团队共同开展。" },
      { speaker: "News", en: "Early feedback is mixed but hopeful: most residents said the robots made them feel safer at night.", zh: "早期反馈喜忧参半，但令人充满希望：大多数住户表示，机器人在夜里让他们更有安全感。" },
      { speaker: "News", en: "Some staff, however, worry that the robots may reduce human contact rather than increase it.", zh: "不过，一些工作人员担心，机器人可能会减少而不是增加人与人之间的接触。" },
      { speaker: "News", en: "Project leaders stress that the robots are designed to support nurses, not to replace them, and a full report is expected next year.", zh: "项目负责人强调，机器人的定位是协助护士而非取代护士，完整评估报告预计明年发布。" }
    ],
    keyPhrases: [
      { en: "care home", zh: "养老院" },
      { en: "in an emergency", zh: "在紧急情况下" },
      { en: "video call", zh: "视频通话" },
      { en: "human contact", zh: "人与人之间的接触" }
    ],
    questions: [
      {
        q: "What can the robots do, according to the report?",
        options: ["Cook meals and clean rooms", "Remind residents to take medicine and call for help", "Drive residents to the hospital", "Give injections like nurses"],
        answer: 1,
        explain: "机器人能提醒吃药并在紧急情况下呼救，还能播放音乐、朗读新闻和视频通话。"
      },
      {
        q: "How long will the project last?",
        options: ["Six months", "One year", "Eighteen months", "Two years"],
        answer: 2,
        explain: "报道说这是 \"the eighteen-month project\"，为期十八个月。"
      },
      {
        q: "Why are some staff worried?",
        options: ["The robots are too expensive", "The robots may reduce human contact", "The robots often break down", "The robots speak too loudly"],
        answer: 1,
        explain: "一些员工担心机器人 \"may reduce human contact\"，会减少人际接触。"
      }
    ]
  },
  {
    id: "lis-25",
    title: "News: A New Night Train Links Four Capitals",
    level: 2,
    scene: "新闻播报",
    intro: "关于连接四国首都夜间列车的旅游新闻",
    lines: [
      { speaker: "News", en: "Good morning. I'm James Holt with today's travel news.", zh: "早上好，我是詹姆斯·霍尔特，为您带来今日旅游新闻。" },
      { speaker: "News", en: "A new overnight train service linking four European capitals will begin running next month.", zh: "一条连接四个欧洲国家首都的夜间列车新线路将于下个月开通。" },
      { speaker: "News", en: "The train will leave Paris at seven in the evening and arrive in Vienna just after eight the next morning, with stops in Munich and Prague.", zh: "列车晚七点从巴黎发车，次日早八点刚过抵达维也纳，途中停靠慕尼黑和布拉格。" },
      { speaker: "News", en: "Passengers can choose between ordinary seats, private sleeping cabins, and shared compartments with four beds.", zh: "旅客可以选择普通座位、独立卧铺包厢，或四床位共享包厢。" },
      { speaker: "News", en: "A seat costs from thirty-nine euros, while a private cabin for two starts at one hundred and twenty euros.", zh: "座位票三十九欧元起，双人独立包厢一百二十欧元起。" },
      { speaker: "News", en: "The operator expects the service to attract travelers who want to avoid short flights and long airport waits.", zh: "运营方预计这项服务将吸引那些想避开短途航班和漫长机场候机时间的旅客。" },
      { speaker: "News", en: "Environmental groups welcomed the news, noting that the train journey produces about one-fifth of the carbon emissions of the equivalent flight.", zh: "环保组织对这一消息表示欢迎，并指出乘坐这趟列车的碳排放约为同等行程航班的五分之一。" },
      { speaker: "News", en: "Tickets go on sale this Friday on the operator's website, and the first trains are expected to sell out quickly.", zh: "车票本周五起在运营方官网开售，预计首发车次将很快售罄。" }
    ],
    keyPhrases: [
      { en: "overnight train", zh: "夜间列车" },
      { en: "sleeping cabin", zh: "卧铺包厢" },
      { en: "carbon emissions", zh: "碳排放" },
      { en: "go on sale", zh: "开始发售" },
      { en: "sell out", zh: "售罄" }
    ],
    questions: [
      {
        q: "Which cities does the new night train connect?",
        options: ["Paris, Munich, Prague and Vienna", "Paris, Berlin, Prague and Vienna", "Paris, Vienna and Rome", "Munich, Prague and Budapest"],
        answer: 0,
        explain: "列车从巴黎出发，经停慕尼黑、布拉格，终点维也纳，连接四座首都城市。"
      },
      {
        q: "How much does an ordinary seat cost?",
        options: ["From 19 euros", "From 39 euros", "From 90 euros", "From 120 euros"],
        answer: 1,
        explain: "普通座位 \"costs from thirty-nine euros\"，三十九欧元起。"
      },
      {
        q: "Why do environmental groups welcome the new service?",
        options: ["It will reduce car traffic in Paris", "Its carbon emissions are far lower than flying", "It runs completely on solar power", "It is cheaper than traveling by bus"],
        answer: 1,
        explain: "环保组织指出列车出行的碳排放约为同等航班的五分之一，远低于飞行。"
      }
    ]
  }
  ,
  {
    id: "lis-26",
    title: "Asking Your Manager for Flexible Working",
    level: 3,
    scene: "日常对话",
    intro: "员工向经理申请每周两天居家办公",
    lines: [
      { speaker: "Employee", en: "Do you have ten minutes? I'd like to talk about my working arrangement.", zh: "您有十分钟吗？我想和您谈谈我的工作安排。" },
      { speaker: "Manager", en: "Sure, come in. What's on your mind?", zh: "当然，请进。说说你的想法？" },
      { speaker: "Employee", en: "I'd like to request two days of working from home each week, ideally Tuesdays and Thursdays. My mother now needs more care, and the commute takes me nearly three hours a day.", zh: "我想申请每周两天居家办公，最好是周二和周四。我母亲现在需要更多照顾，而通勤每天要花掉我将近三个小时。" },
      { speaker: "Manager", en: "I appreciate you being open about this. What about the weekly planning meeting? It's on Tuesday mornings.", zh: "谢谢你这么坦诚。那每周的计划会怎么办？会议在周二上午。" },
      { speaker: "Employee", en: "I'd attend that by video, and I'd come into the office for any meeting that needs face-to-face discussion.", zh: "那种会我可以视频参加，需要面对面讨论的会议我会到办公室来。" },
      { speaker: "Manager", en: "And your team? Two of them are new and ask you a lot of questions.", zh: "那你的团队呢？有两个新人经常要请教你问题。" },
      { speaker: "Employee", en: "I've thought about that. I'd keep a fixed online hour every afternoon, and on office days they would have my full attention.", zh: "这一点我想过了。我每天下午会固定留出一个在线答疑时间，在办公室的日子则全心支持他们。" },
      { speaker: "Manager", en: "All right. Put the proposal in writing — the days, the hours, and how you'll measure your output — and I'll take it to HR this week.", zh: "好吧。把方案写成书面材料——包括工作日、工时，以及你将如何衡量产出——我本周提交给人力资源部。" },
      { speaker: "Employee", en: "Thank you. I'll have it on your desk tomorrow morning.", zh: "谢谢您。我明早就把方案放到您桌上。" }
    ],
    keyPhrases: [
      { en: "working arrangement", zh: "工作安排" },
      { en: "commute", zh: "通勤" },
      { en: "face-to-face", zh: "面对面的" },
      { en: "put... in writing", zh: "将……落成书面" },
      { en: "measure one's output", zh: "衡量工作产出" }
    ],
    questions: [
      {
        q: "Why does the employee want to work from home?",
        options: ["To save money on lunches", "To care for her mother and cut a long commute", "To study for a degree", "To avoid her team members"],
        answer: 1,
        explain: "员工说明母亲需要更多照顾，且每天通勤近三小时，因此申请居家办公。"
      },
      {
        q: "How will the employee handle the Tuesday meeting?",
        options: ["Move it to Thursday", "Attend it by video", "Send written notes instead", "Skip it when busy"],
        answer: 1,
        explain: "她表示周二例会 \"attend that by video\"，将通过视频参加。"
      },
      {
        q: "What does the manager ask her to do next?",
        options: ["Start home working immediately", "Transfer to another team", "Submit a written proposal including how her output will be measured", "Contact HR directly herself"],
        answer: 2,
        explain: "经理要求她把方案写成书面材料，说明工作日、工时和产出衡量方式，本周由他提交人力资源部。"
      }
    ]
  },
  {
    id: "lis-27",
    title: "Calling the Airline About a Canceled Flight",
    level: 3,
    scene: "日常对话",
    intro: "乘客就被取消的航班致电航空公司改签",
    lines: [
      { speaker: "Agent", en: "Airline customer service, Alicia speaking. How can I help?", zh: "航空公司客服，我是艾丽西娅，有什么可以帮您？" },
      { speaker: "Passenger", en: "Hi. My flight to Lisbon tomorrow morning, flight 742, has just been canceled, and the app only offers a flight on Friday. I need to travel tomorrow.", zh: "你好。我明天上午飞里斯本的 742 航班刚被取消，应用里只提供周五的航班，但我明天就必须出发。" },
      { speaker: "Agent", en: "I'm sorry about that. Let me look at your booking... I can see it. There is one seat left on tomorrow afternoon's flight at three, though it's in a higher fare class.", zh: "非常抱歉。我查一下您的预订……看到了。明天下午三点的航班还剩一个座位，不过舱位等级较高。" },
      { speaker: "Passenger", en: "Would I have to pay the difference? The cancellation wasn't my fault.", zh: "差价要我承担吗？航班取消又不是我的过错。" },
      { speaker: "Agent", en: "In cases like this, rebooking is free. I can move you to the three o'clock flight at no charge.", zh: "这种情况改签是免费的，我可以免费为您改到下午三点的航班。" },
      { speaker: "Passenger", en: "Please do. And what about my checked luggage? I had already paid for an extra bag.", zh: "那就麻烦您了。我的托运行李呢？我已经付了一件额外行李的费用。" },
      { speaker: "Agent", en: "Your baggage allowance transfers automatically. And since the cancellation was ours, you're also entitled to a meal voucher — and if the delay exceeds four hours, compensation under air passenger rights.", zh: "您的行李额度会自动转移。另外，由于取消是我方原因，您还有权获得一份餐券；如果延误超过四小时，还可依据航空乘客权益获得赔偿。" },
      { speaker: "Passenger", en: "Good to know. I'll probably just make the three o'clock, but that's useful information.", zh: "明白了。我多半能赶上三点的航班，不过这些信息很有用。" },
      { speaker: "Agent", en: "You're all set — your new boarding pass is in the app. Is there anything else I can do for you?", zh: "都为您办好了——新的登机牌已在应用里。还有其他需要帮忙的吗？" }
    ],
    keyPhrases: [
      { en: "canceled flight", zh: "被取消的航班" },
      { en: "fare class", zh: "舱位等级" },
      { en: "pay the difference", zh: "支付差价" },
      { en: "baggage allowance", zh: "行李额度" },
      { en: "be entitled to", zh: "有权获得" }
    ],
    questions: [
      {
        q: "What is the passenger's problem?",
        options: ["His flight was overbooked", "His flight to Lisbon was canceled", "His luggage was lost", "He missed his boarding time"],
        answer: 1,
        explain: "乘客的 742 航班（飞里斯本）被取消，而应用里只有周五的航班，他明天必须出发。"
      },
      {
        q: "How does the agent solve the rebooking problem?",
        options: ["She offers him a free flight on Friday", "She moves him to the three o'clock flight free of charge", "She asks him to pay the difference", "She refunds the ticket completely"],
        answer: 1,
        explain: "客服表示这种情况改签免费，将他免费改到下午三点的航班。"
      },
      {
        q: "What extra compensation is the passenger entitled to?",
        options: ["A hotel room and taxi fare", "A meal voucher and possible compensation for a long delay", "A free return ticket", "Extra loyalty points only"],
        answer: 1,
        explain: "客服说明他有权获得餐券；若延误超过四小时，还可依乘客权益获得赔偿。"
      }
    ]
  },
  {
    id: "lis-28",
    title: "Seminar: Who Is Responsible When AI Causes Harm?",
    level: 3,
    scene: "学术场景",
    intro: "研讨课讨论人工智能致害的责任归属",
    lines: [
      { speaker: "Professor", en: "Today's seminar tackles a question that courts and companies are grappling with: who is responsible when an AI system causes harm?", zh: "今天的研讨课要探讨一个法庭与企业都在努力应对的问题：当人工智能系统造成损害时，责任由谁承担？" },
      { speaker: "Student A", en: "Surely the company that deploys the system should bear the responsibility. It profits from the technology, and it chose to use it.", zh: "部署系统的公司当然应该承担责任。它从这项技术中获利，也是它自己选择使用该技术。" },
      { speaker: "Professor", en: "A straightforward answer. But consider a medical AI that follows all of its training and still misreads a scan. Is the developer liable instead?", zh: "这个回答很直接。但请设想一个医学 AI：它完全按照训练运行，却依然误读了一张扫描片。那是否应由开发方担责？" },
      { speaker: "Student A", en: "Then perhaps liability should be shared — developers answer for the design, and users answer for the deployment.", zh: "那么责任或许应当分担——设计问题由开发方负责，使用问题由使用方负责。" },
      { speaker: "Student B", en: "I'd add a third party: the data. If a hiring algorithm discriminates because it learned from biased records, punishing the company alone won't fix the root cause.", zh: "我想加上第三方：数据。如果招聘算法因学习了带有偏见的记录而歧视人，只惩罚公司解决不了根本问题。" },
      { speaker: "Professor", en: "Interesting — you are describing what lawyers call the accountability gap: harm occurs, but no single actor seems fully responsible.", zh: "很有意思——你们所描述的正是法律界所说的\"问责真空\"：损害发生了，却没有哪一方看起来负全部责任。" },
      { speaker: "Student B", en: "Some scholars propose mandatory insurance, like car insurance, so that victims are compensated whoever is at fault.", zh: "一些学者提议实行强制保险，类似汽车保险，这样无论谁有过错，受害者都能获得赔偿。" },
      { speaker: "Student A", en: "That solves compensation but not prevention. We would still lack incentives to test systems properly before release.", zh: "这解决了赔偿问题，却没有解决预防问题。系统发布前的充分测试依然缺乏激励。" },
      { speaker: "Professor", en: "Exactly — and that tension is your essay question this week: can a single framework deliver both fair compensation and safer design?", zh: "完全正确——这种矛盾正是你们本周的论文题：单一的框架能否同时实现公平赔偿与更安全的设计？" }
    ],
    keyPhrases: [
      { en: "bear the responsibility", zh: "承担责任" },
      { en: "liable", zh: "负法律责任的" },
      { en: "accountability gap", zh: "问责真空" },
      { en: "at fault", zh: "有过错" },
      { en: "incentive", zh: "激励" }
    ],
    questions: [
      {
        q: "What is the central question of the seminar?",
        options: ["Whether AI should be banned", "Who is responsible when an AI system causes harm", "How AI systems are trained", "Whether AI can think like humans"],
        answer: 1,
        explain: "研讨课的核心问题是 AI 系统造成损害时的责任归属。"
      },
      {
        q: "What point does Student B make about biased data?",
        options: ["It is the users' problem only", "Punishing companies alone will not fix the root cause", "Data bias no longer exists", "Developers should collect no data at all"],
        answer: 1,
        explain: "学生 B 认为算法歧视的根源在于有偏见的数据，只惩罚公司无法解决根本问题。"
      },
      {
        q: "What is this week's essay question about?",
        options: ["Insurance prices for cars", "Whether one framework can achieve both compensation and prevention", "The history of AI law", "How to build a medical AI"],
        answer: 1,
        explain: "论文题探讨单一框架能否同时实现公平赔偿与更安全的设计（即赔偿与预防）。"
      }
    ]
  },
  {
    id: "lis-29",
    title: "News: Solar Power Hits a Record High",
    level: 3,
    scene: "新闻播报",
    intro: "关于太阳能发电创纪录的财经与环境新闻",
    lines: [
      { speaker: "News", en: "Good evening. I'm Maria Santos with the business and environment report.", zh: "晚上好，我是玛丽亚·桑托斯，为您带来财经与环境报道。" },
      { speaker: "News", en: "Solar energy generated a record twelve percent of the nation's electricity last year, according to figures published on Monday.", zh: "周一公布的数据显示，去年太阳能发电占全国总发电量的百分之十二，创下历史纪录。" },
      { speaker: "News", en: "The figure has doubled in four years, driven mainly by falling prices: solar panels now cost less than half as much as they did in 2020.", zh: "这一数字四年间翻了一番，主要驱动力是价格下降：太阳能电池板现在的成本不到 2020 年的一半。" },
      { speaker: "News", en: "For the first time, the energy agency said, building a new solar farm is cheaper than running an existing coal plant.", zh: "能源署表示，新建太阳能电站的成本首次低于维持一座现有燃煤电厂运行的成本。" },
      { speaker: "News", en: "Growth is fastest in rural areas, where farmers earn a second income by renting field space to solar companies.", zh: "农村地区增长最快，那里的农民把田地租给太阳能公司，从而获得第二份收入。" },
      { speaker: "News", en: "However, the report warns that the grid cannot yet store enough energy for windless, cloudy winter days.", zh: "不过，报告警告说，电网在无风多云的冬日尚未能储备足够的电能。" },
      { speaker: "News", en: "The government has promised new investment in battery storage and says no region will face power shortages this winter.", zh: "政府已承诺对电池储能进行新的投资，并表示今年冬天任何地区都不会面临电力短缺。" },
      { speaker: "News", en: "Analysts remain divided, however, on whether the 2030 target of thirty percent solar power is realistic.", zh: "不过，对于 2030 年太阳能占比达到百分之三十的目标是否现实，分析人士仍有分歧。" }
    ],
    keyPhrases: [
      { en: "generate electricity", zh: "发电" },
      { en: "solar panel", zh: "太阳能电池板" },
      { en: "battery storage", zh: "电池储能" },
      { en: "power shortage", zh: "电力短缺" }
    ],
    questions: [
      {
        q: "What percentage of the nation's electricity came from solar power last year?",
        options: ["Six percent", "Twelve percent", "Twenty percent", "Thirty percent"],
        answer: 1,
        explain: "数据显示去年太阳能发电占比为百分之十二，创历史纪录。"
      },
      {
        q: "Why is solar energy growing so quickly?",
        options: ["Because of new government taxes", "Because panel prices have fallen sharply", "Because coal plants closed overnight", "Because last winter was unusually warm"],
        answer: 1,
        explain: "报道说增长主要由价格下降驱动，电池板成本不到 2020 年的一半。"
      },
      {
        q: "What problem does the report warn about?",
        options: ["Solar panels are hard to recycle", "The grid cannot store enough energy for cloudy winter days", "Farmers refuse to rent their fields", "There are not enough trained engineers"],
        answer: 1,
        explain: "报告警告电网在无风多云的冬天无法储备足够电能。"
      }
    ]
  },
  {
    id: "lis-30",
    title: "News: Ancient Shipwreck Found Off the Southern Coast",
    level: 3,
    scene: "新闻播报",
    intro: "关于发现两千多年前古代沉船的文化新闻",
    lines: [
      { speaker: "News", en: "Good evening. I'm Peter Nolan with today's culture report.", zh: "晚上好，我是彼得·诺兰，为您带来今日文化报道。" },
      { speaker: "News", en: "Fishermen off the southern coast discovered an ancient shipwreck last month, and archaeologists have now confirmed its age.", zh: "南部海岸的渔民上个月发现了一艘古代沉船，考古学家现已确认其年代。" },
      { speaker: "News", en: "Carbon dating shows that the merchant ship sank about two thousand three hundred years ago, making it the oldest wreck ever found in these waters.", zh: "碳测年显示，这艘商船约沉没于两千三百年前，是这片海域迄今发现的最古老沉船。" },
      { speaker: "News", en: "Divers have recovered more than two hundred objects, including pottery jars, bronze coins, and tools used for trading.", zh: "潜水员已打捞出二百多件物品，包括陶罐、青铜钱币和用于贸易的工具。" },
      { speaker: "News", en: "The most surprising find was a collection of seeds, perfectly preserved in the mud, from a plant previously unknown in this region.", zh: "最令人惊讶的发现是一批在淤泥中保存完好的种子，属于一种此前在该地区从未见过的植物。" },
      { speaker: "News", en: "Dr. Elena Reyes, who leads the excavation, said the wreck proves that ancient traders sailed much farther than historians once believed.", zh: "主持此次发掘的埃莱娜·雷耶斯博士表示，这艘沉船证明古代商人的航行距离远超历史学家以往的想象。" },
      { speaker: "News", en: "The objects will go on display at the National Museum in March, alongside a full-sized model of the ship.", zh: "这些文物将于三月起在国家博物馆展出，同时展出的还有一艘原尺寸的船只模型。" },
      { speaker: "News", en: "The site itself will remain underwater and will be protected as an underwater heritage area, officials said.", zh: "官员表示，沉船遗址本身将留在水下，并作为水下遗产区加以保护。" }
    ],
    keyPhrases: [
      { en: "shipwreck", zh: "沉船" },
      { en: "carbon dating", zh: "碳测年" },
      { en: "excavation", zh: "考古发掘" },
      { en: "preserved", zh: "被保存完好的" },
      { en: "heritage area", zh: "遗产区" }
    ],
    questions: [
      {
        q: "How was the shipwreck first discovered?",
        options: ["By a research submarine", "By fishermen", "By museum divers", "By satellite images"],
        answer: 1,
        explain: "是南部海岸的渔民（fishermen）最先发现了这艘古代沉船。"
      },
      {
        q: "According to Dr. Reyes, what does the wreck prove?",
        options: ["Ancient ships were very small", "Ancient traders sailed much farther than historians once believed", "This region once had no trade", "The seeds came from a nearby island"],
        answer: 1,
        explain: "雷耶斯博士认为沉船证明古代商人的航行距离远超以往的历史认知。"
      },
      {
        q: "What will happen to the site itself?",
        options: ["It will be drained and dug up", "It will be moved into the museum", "It will stay underwater as a protected heritage area", "It will open for tourist diving next year"],
        answer: 2,
        explain: "遗址将留在水下，并作为水下遗产区受到保护。"
      }
    ]
  }
];
window.LISTENING_BANK_READY = true;
