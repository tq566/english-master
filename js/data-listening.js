// 听力素材库：3 档难度 × 日常/学术/新闻场景，共 15 篇
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
];
window.LISTENING_BANK_READY = true;
