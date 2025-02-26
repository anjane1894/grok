// 多语言支持
const translations = {
    'zh-CN': {
        title: '仙风道骨算命',
        header: '仙風道骨命理推演',
        nameLabel: '姓名:',
        yearLabel: '生年:',
        monthLabel: '生月:',
        dayLabel: '生日:',
        timeLabel: '出生时间:',
        yearPlaceholder: '选择年份',
        monthPlaceholder: '选择月份',
        dayPlaceholder: '选择日期',
        submitBtn: '推演命理',
        resultHeader: '之命理推演',
        basicInfo: '命盘概要',
        baziInfo: '八字命盘',
        fiveElements: '五行剖析',
        fateTrait: '命理特征',
        fortune: '近运预测',
        nameMonth: '姓名与生月',
        lifeAdvice: '生活仙导',
        summary: '仙师总论',
        summaryPlain: '通俗解释',
        calculating: '正在推演中...'
    },
    'zh-TW': {
        title: '仙風道骨算命',
        header: '仙風道骨命理推演',
        nameLabel: '姓名:',
        yearLabel: '生年:',
        monthLabel: '生月:',
        dayLabel: '生日:',
        timeLabel: '出生時間:',
        yearPlaceholder: '選擇年份',
        monthPlaceholder: '選擇月份',
        dayPlaceholder: '選擇日期',
        submitBtn: '推演命理',
        resultHeader: '之命理推演',
        basicInfo: '命盤概要',
        baziInfo: '八字命盤',
        fiveElements: '五行剖析',
        fateTrait: '命理特徵',
        fortune: '近運預測',
        nameMonth: '姓名與生月',
        lifeAdvice: '生活仙導',
        summary: '仙師總論',
        summaryPlain: '通俗解釋',
        calculating: '正在推演中...'
    },
    'en': {
        title: 'Immortal Fortune Telling',
        header: 'Immortal Style Fortune Prediction',
        nameLabel: 'Name:',
        yearLabel: 'Birth Year:',
        monthLabel: 'Birth Month:',
        dayLabel: 'Birth Day:',
        timeLabel: 'Birth Time:',
        yearPlaceholder: 'Select Year',
        monthPlaceholder: 'Select Month',
        dayPlaceholder: 'Select Day',
        submitBtn: 'Predict Fate',
        resultHeader: "'s Fate Prediction",
        basicInfo: 'Basic Fate Profile',
        baziInfo: 'Eight Characters (Bazi)',
        fiveElements: 'Five Elements Analysis',
        fateTrait: 'Fate Characteristics',
        fortune: 'Recent Fortune',
        nameMonth: 'Name and Birth Month',
        lifeAdvice: 'Life Guidance',
        summary: 'Immortal Master’s Conclusion',
        summaryPlain: 'Plain Explanation',
        calculating: 'Calculating fate...'
    },
    'ja': {
        title: '仙風道骨占い',
        header: '仙風道骨命理推演',
        nameLabel: '名前:',
        yearLabel: '生まれ年:',
        monthLabel: '生まれ月:',
        dayLabel: '生まれ日:',
        timeLabel: '生まれ時間:',
        yearPlaceholder: '年を選択',
        monthPlaceholder: '月を選択',
        dayPlaceholder: '日を選択',
        submitBtn: '運命推演',
        resultHeader: 'の運命推演',
        basicInfo: '命盤概要',
        baziInfo: '八字命盤',
        fiveElements: '五行分析',
        fateTrait: '命理特徴',
        fortune: '近運予測',
        nameMonth: '名前と誕生月',
        lifeAdvice: '生活指導',
        summary: '仙師総論',
        summaryPlain: '分かりやすい説明',
        calculating: '運命を推演中...'
    }
};

// 数据定义
const zodiacs = {
    'zh-CN': ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
    'zh-TW': ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'],
    'en': ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
    'ja': ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
};
const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const elements = ['金', '木', '水', '火', '土'];
const hourBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 五行强弱解读
const elementStrengths = {
    'zh-CN': {
        '金': { strong: '性情刚毅果断', weak: '易固执己见' },
        '木': { strong: '创意充沛', weak: '时缺耐心' },
        '水': { strong: '适应力强', weak: '情绪易波动' },
        '火': { strong: '热情奔放', weak: '急躁易怒' },
        '土': { strong: '稳重可靠', weak: '过于保守' }
    },
    'zh-TW': {
        '金': { strong: '性情剛毅果斷', weak: '易固執己見' },
        '木': { strong: '創意充沛', weak: '時缺耐心' },
        '水': { strong: '適應力強', weak: '情緒易波動' },
        '火': { strong: '熱情奔放', weak: '急躁易怒' },
        '土': { strong: '穩重可靠', weak: '過於保守' }
    },
    'en': {
        '金': { strong: 'Resolute and decisive', weak: 'Easily stubborn' },
        '木': { strong: 'Highly creative', weak: 'Sometimes impatient' },
        '水': { strong: 'Highly adaptable', weak: 'Emotionally fluctuating' },
        '火': { strong: 'Passionate and bold', weak: 'Quick-tempered' },
        '土': { strong: 'Stable and reliable', weak: 'Overly conservative' }
    },
    'ja': {
        '金': { strong: '性格が毅然としている', weak: '頑固になりやすい' },
        '木': { strong: '創造力に富む', weak: '時に我慢が足りない' },
        '水': { strong: '適応力が高い', weak: '感情が不安定' },
        '火': { strong: '情熱的で大胆', weak: '怒りっぽい' },
        '土': { strong: '安定して信頼できる', weak: '過度に保守的' }
    }
};

// 命理特征
const fateTraits = {
    'zh-CN': [
        { term: '命宫带禄', plain: '天生福气，生活顺遂', advice: '保持积极心态，福运绵长' },
        { term: '七杀入命', plain: '性情刚强，喜挑战', advice: '调和心绪，避免争执' },
        { term: '财星高照', plain: '财运亨通，聚财有道', advice: '妥善理财，切勿挥霍' },
        { term: '伤官配印', plain: '才华横溢，宜文艺术', advice: '展露才情，机遇自来' }
    ],
    'zh-TW': [
        { term: '命宮帶祿', plain: '天生福氣，生活順遂', advice: '保持積極心態，福運綿長' },
        { term: '七殺入命', plain: '性情剛強，喜挑戰', advice: '調和心緒，避免爭執' },
        { term: '財星高照', plain: '財運亨通，聚財有道', advice: '妥善理財，切勿揮霍' },
        { term: '傷官配印', plain: '才華橫溢，宜文藝術', advice: '展露才情，機遇自來' }
    ],
    'en': [
        { term: 'Blessed Fate Palace', plain: 'Born lucky, life goes smoothly', advice: 'Stay positive, luck will last' },
        { term: 'Seven Killings in Fate', plain: 'Strong-willed, loves challenges', advice: 'Calm your mind, avoid conflicts' },
        { term: 'Wealth Star Shines', plain: 'Good fortune, skilled at gathering wealth', advice: 'Manage finances well, avoid waste' },
        { term: 'Injury Officer with Seal', plain: 'Talented, suited for arts', advice: 'Showcase your skills, opportunities will come' }
    ],
    'ja': [
        { term: '命宮に禄', plain: '生まれつき幸運で人生が順調', advice: '前向きな気持ちを保つと幸運が続く' },
        { term: '七殺入命', plain: '意志が強く挑戦が好き', advice: '心を穏やかにし争いを避ける' },
        { term: '財星高照', plain: '財運が良くお金を集める才能がある', advice: 'しっかり管理し浪費を避ける' },
        { term: '傷官配印', plain: '才能にあふれ芸術に適している', advice: '才能を発揮すればチャンスが来る' }
    ]
};

// 运势预测
const fortunes = {
    'zh-CN': [
        { term: '流年犯太岁', plain: '运势起伏不定', advice: '谨慎行事，保重身体' },
        { term: '正官临身', plain: '事业有成之象', advice: '勤勉耕耘，收获颇丰' },
        { term: '食神制杀', plain: '人缘和顺', advice: '广结善缘，拓展人脉' },
        { term: '偏财得地', plain: '意外之财可期', advice: '小试投资，谨慎为上' }
    ],
    'zh-TW': [
        { term: '流年犯太歲', plain: '運勢起伏不定', advice: '謹慎行事，保重身體' },
        { term: '正官臨身', plain: '事業有成之象', advice: '勤勉耕耘，收穫頗豐' },
        { term: '食神制殺', plain: '人緣和順', advice: '廣結善緣，拓展人脈' },
        { term: '偏財得地', plain: '意外之財可期', advice: '小試投資，謹慎為上' }
    ],
    'en': [
        { term: 'Clash with Tai Sui', plain: 'Unstable fortune', advice: 'Act cautiously, take care of health' },
        { term: 'Official Star Arrives', plain: 'Signs of career success', advice: 'Work hard, reap rewards' },
        { term: 'Food God Controls Killing', plain: 'Harmonious relationships', advice: 'Build connections, expand network' },
        { term: 'Partial Wealth in Place', plain: 'Chance of unexpected gains', advice: 'Try small investments, stay cautious' }
    ],
    'ja': [
        { term: '流年太歳', plain: '運勢が不安定', advice: '慎重に行動し健康に注意' },
        { term: '正官臨身', plain: '仕事で成功の兆し', advice: '努力すれば大きな成果' },
        { term: '食神制殺', plain: '人間関係が良好', advice: '縁を広げ人脈を増やす' },
        { term: '偏財得地', plain: '予想外の収入が期待できる', advice: '少し投資を試み慎重に' }
    ]
};

// 生活建议
const lifeAdvice = {
    clothing: {
        'zh-CN': { '金': '宜著白金之色，显仙风气质', '木': '宜著青绿之衣，增生机盎然', '水': '宜著蓝黑之装，添灵动之气', '火': '宜著红紫之服，激发热情', '土': '宜著黄褐之袍，稳固根基' },
        'zh-TW': { '金': '宜著白金之色，顯仙風氣質', '木': '宜著青綠之衣，增生機盎然', '水': '宜著藍黑之裝，添靈動之氣', '火': '宜著紅紫之服，激發熱情', '土': '宜著黃褐之袍，穩固根基' },
        'en': { '金': 'Wear white or gold to show elegance', '木': 'Wear green for vitality', '水': 'Wear blue or black for agility', '火': 'Wear red or purple to ignite passion', '土': 'Wear yellow or brown for stability' },
        'ja': { '金': '白や金を着て気品を出す', '木': '緑を着て活力を増す', '水': '青や黒を着て軽やかさを', '火': '赤や紫を着て情熱を', '土': '黄や褐色を着て安定を' }
    },
    accessory: {
        'zh-CN': { '金': '佩金银之饰，提升锐气', '木': '戴木质翡翠，平衡气场', '水': '佩水晶珍珠，增灵动感', '火': '佩红宝玛瑙，添活力', '土': '佩玉石琥珀，固运势' },
        'zh-TW': { '金': '佩金銀之飾，提升銳氣', '木': '戴木質翡翠，平衡氣場', '水': '佩水晶珍珠，增靈動感', '火': '佩紅寶瑪瑙，添活力', '土': '佩玉石琥珀，固運勢' },
        'en': { '金': 'Wear gold/silver to boost sharpness', '木': 'Wear wood/jade for balance', '水': 'Wear crystal/pearl for agility', '火': 'Wear ruby/agate for energy', '土': 'Wear jade/amber for stability' },
        'ja': { '金': '金銀の飾りで鋭さを', '木': '木や翡翠で調和を', '水': '水晶や真珠で軽やかさを', '火': 'ルビーや瑪瑙で活力を', '土': '玉や琥珀で安定を' }
    },
    travel: {
        'zh-CN': { '金': '宜往西方，利财运', '木': '宜往东方，启灵感', '水': '宜往北方，旺人缘', '火': '宜往南方，增活力', '土': '宜留本地，稳运势' },
        'zh-TW': { '金': '宜往西方，利財運', '木': '宜往東方，啟靈感', '水': '宜往北方，旺人緣', '火': '宜往南方，增活力', '土': '宜留本地，穩運勢' },
        'en': { '金': 'Travel west for wealth', '木': 'Travel east for inspiration', '水': 'Travel north for connections', '火': 'Travel south for energy', '土': 'Stay local for stability' },
        'ja': { '金': '西へ行くと財運が', '木': '東へ行くとインスピレーションが', '水': '北へ行くと人縁が', '火': '南へ行くと活力が', '土': '地元に留まると安定が' }
    },
    diet: {
        'zh-CN': { '金': '多食白色之物（如米饭、乳品），养肺气', '木': '多食青蔬（如菠菜），养肝气', '水': '多饮水汤，滋肾气', '火': '多食红色之食（如番茄），补心气', '土': '多食黄色之物（如玉米），健脾胃' },
        'zh-TW': { '金': '多食白色之物（如米飯、乳品），養肺氣', '木': '多食青蔬（如菠菜），養肝氣', '水': '多飲水湯，滋腎氣', '火': '多食紅色之食（如番茄），補心氣', '土': '多食黃色之物（如玉米），健脾胃' },
        'en': { '金': 'Eat white foods (e.g., rice, milk) to nourish lungs', '木': 'Eat greens (e.g., spinach) to support liver', '水': 'Drink water/soup to nourish kidneys', '火': 'Eat red foods (e.g., tomatoes) to boost heart', '土': 'Eat yellow foods (e.g., corn) to strengthen spleen' },
        'ja': { '金': '白い食べ物（米、乳製品）を多く摂り肺を養う', '木': '緑の野菜（ほうれん草）を多く摂り肝を養う', '水': '水やスープを多く摂り腎を養う', '火': '赤い食べ物（トマト）を多く摂り心を補う', '土': '黄色い食べ物（トウモロコシ）を多く摂り脾を強く' }
    },
    work: {
        'zh-CN': { '金': '宜从事金铁术业，展精准之才', '木': '宜投身文教创作，显才华', '水': '宜涉足商贸行旅，灵活应变', '火': '宜从事演说销售，释热情', '土': '宜掌管基建之事，稳扎稳打' },
        'zh-TW': { '金': '宜從事金鐵術業，展精準之才', '木': '宜投身文教創作，顯才華', '水': '宜涉足商貿行旅，靈活應變', '火': '宜從事演說銷售，釋熱情', '土': '宜掌管基建之事，穩紮穩打' },
        'en': { '金': 'Suited for finance/tech, showing precision', '木': 'Suited for education/arts, showcasing talent', '水': 'Suited for trade/travel, adapting well', '火': 'Suited for sales/speaking, releasing passion', '土': 'Suited for management/construction, steady work' },
        'ja': { '金': '金融や技術で正確さを発揮', '木': '教育や創作で才能を披露', '水': '貿易や旅行で柔軟に', '火': '販売や演説で情熱を', '土': '管理や建築で着実に' }
    }
};

// 初始化表单
let currentLang = 'zh-CN';
document.addEventListener('DOMContentLoaded', () => {
    const birthYear = document.getElementById('birthYear');
    const birthDay = document.getElementById('birthDay');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        birthYear.appendChild(option);
    }
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        birthDay.appendChild(option);
    }
    updateLanguage('zh-CN');
});

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    updateLanguage(lang);
}

function updateLanguage(lang) {
    document.getElementById('pageTitle').textContent = translations[lang].title;
    document.getElementById('title').textContent = translations[lang].header;
    document.getElementById('nameLabel').textContent = translations[lang].nameLabel;
    document.getElementById('yearLabel').textContent = translations[lang].yearLabel;
    document.getElementById('monthLabel').textContent = translations[lang].monthLabel;
    document.getElementById('dayLabel').textContent = translations[lang].dayLabel;
    document.getElementById('timeLabel').textContent = translations[lang].timeLabel;
    document.getElementById('yearPlaceholder').textContent = translations[lang].yearPlaceholder;
    document.getElementById('monthPlaceholder').textContent = translations[lang].monthPlaceholder;
    document.getElementById('dayPlaceholder').textContent = translations[lang].dayPlaceholder;
    document.getElementById('submitBtn').textContent = translations[lang].submitBtn;
    const months = translations[lang].months;
    for (let i = 1; i <= 12; i++) {
        document.getElementById(`month${i}`).textContent = months[i - 1];
    }
}

// 计算八字
function calculateBazi(year, month, day, hour) {
    const yearStem = heavenlyStems[(year - 4) % 10];
    const yearBranch = earthlyBranches[(year - 4) % 12];
    const monthBranch = earthlyBranches[(month - 1) % 12];
    const monthStemBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9][(year - 4) % 10];
    const monthStem = heavenlyStems[(monthStemBase + Math.floor((month - 1) / 2)) % 10];
    const dayStem = heavenlyStems[(Math.floor((year * 365.25 + month * 30.5 + day - 720000) % 60)) % 10];
    const dayBranch = earthlyBranches[(Math.floor((year * 365.25 + month * 30.5 + day - 720000) % 60)) % 12];
    const hourIndex = Math.floor(hour / 2) % 12;
    const hourBranch = hourBranches[hourIndex];
    const hourStemBase = [0, 2, 4, 6, 8][heavenlyStems.indexOf(dayStem) % 5];
    const hourStem = heavenlyStems[(hourStemBase + hourIndex) % 10];

    return {
        yearPillar: `${yearStem}${yearBranch}`,
        monthPillar: `${monthStem}${monthBranch}`,
        dayPillar: `${dayStem}${dayBranch}`,
        hourPillar: `${hourStem}${hourBranch}`
    };
}

// 生成命理结果
function generateResult(name, birthYear, birthMonth, birthDay, birthTime, lang) {
    const timeParts = birthTime.split(':');
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);
    const second = parseInt(timeParts[2]);
    const bazi = calculateBazi(birthYear, birthMonth, birthDay, hour);

    const zodiacIndex = (birthYear - 4) % 12;
    const zodiac = zodiacs[lang][zodiacIndex >= 0 ? zodiacIndex : zodiacIndex + 12];
    
    const primaryElement = elements[Math.floor(Math.random() * elements.length)];
    const secondaryElement = elements[Math.floor(Math.random() * elements.length)];
    const elementBalance = Math.random() > 0.5 ? 'strong' : 'weak';
    const elementInsight = elementStrengths[lang][primaryElement][elementBalance];
    
    const fateTrait = fateTraits[lang][Math.floor(Math.random() * fateTraits[lang].length)];
    const fortune = fortunes[lang][Math.floor(Math.random() * fortunes[lang].length)];
    
    const nameInfluence = name.length % 2 === 0 ? 
        (lang === 'en' ? 'Name strokes are even, suggesting harmony' : lang === 'ja' ? '名前の画数が偶数で調和を示す' : '姓名笔画为偶，性主和顺') : 
        (lang === 'en' ? 'Name strokes are odd, suggesting dynamism' : lang === 'ja' ? '名前の画数が奇数で活発さを示す' : '姓名笔画为奇，性主灵动');
    const monthInfluence = birthMonth <= 6 ? 
        (lang === 'en' ? 'Born in first half of year, smoother early life' : lang === 'ja' ? '上半年生まれで前半生が順調' : '上半年生，前途顺达') : 
        (lang === 'en' ? 'Born in second half of year, greater later potential' : lang === 'ja' ? '下半年生まれで後半生に可能性' : '下半年生，后福绵长');
    
    const clothing = lifeAdvice.clothing[lang][primaryElement];
    const accessory = lifeAdvice.accessory[lang][primaryElement];
    const travel = lifeAdvice.travel[lang][primaryElement];
    const diet = lifeAdvice.diet[lang][primaryElement];
    const work = lifeAdvice.work[lang][primaryElement];
    
    const plainSummary = lang === 'en' ? 
        `In simple terms, focus on balancing your ${primaryElement} energy. Use your ${fateTrait.plain.split(',')[0]} strength to seize the ${fortune.plain.split(',')[0]} opportunity, and follow the advice for a better year!` :
        lang === 'ja' ? 
        `簡単に言うと、${primaryElement}のエネルギーを整えることに集中してね。${fateTrait.plain.split('、')[0]}の強みを活かして、${fortune.plain.split('、')[0]}のチャンスをつかみ、アドバイスに従えば良い年になるよ！` :
        `简单来说，就是要平衡你的${primaryElement}能量，发挥${fateTrait.plain.split('，')[0]}的优势，抓住${fortune.plain.split('，')[0]}的机会，按建议做，今年会更好哦！`;
    
    return `
        <h2>${name}${translations[lang].resultHeader}</h2>
        <p><strong>${translations[lang].basicInfo}</strong></p>
        <p>${lang === 'en' ? 'Zodiac' : lang === 'ja' ? '十二支' : '生肖'}：${zodiac}</p>
        <p>${lang === 'en' ? 'Birth Time' : lang === 'ja' ? '出生時間' : '出生时间'}：${birthYear}-${birthMonth}-${birthDay} ${hour}:${minute}:${second}</p>
        <p><strong>${translations[lang].baziInfo}</strong></p>
        <p>${lang === 'en' ? 'Year Pillar' : lang === 'ja' ? '年柱' : '年柱'}：${bazi.yearPillar} | ${lang === 'en' ? 'Month Pillar' : lang === 'ja' ? '月柱' : '月柱'}：${bazi.monthPillar} | ${lang === 'en' ? 'Day Pillar' : lang === 'ja' ? '日柱' : '日柱'}：${bazi.dayPillar} | ${lang === 'en' ? 'Hour Pillar' : lang === 'ja' ? '時柱' : '时柱'}：${bazi.hourPillar}</p>
        <p>${lang === 'en' ? 'Bazi Insight' : lang === 'ja' ? '八字洞見' : '八字简析'}：${lang === 'en' ? 'Your fate is shaped by these pillars, reflecting your life’s foundation.' : lang === 'ja' ? 'これらの柱があなたの運命を形作り、人生の基盤を示しています。' : '此八字为你的命盘基础，反映人生根基。'}</p>
        <p><strong>${translations[lang].fiveElements}</strong></p>
        <p>${lang === 'en' ? 'Primary Element' : lang === 'ja' ? '主五行' : '主五行'}：${primaryElement} | ${lang === 'en' ? 'Secondary Element' : lang === 'ja' ? '副五行' : '辅五行'}：${secondaryElement}</p>
        <p>${lang === 'en' ? 'Element Strength' : lang === 'ja' ? '五行強弱' : '五行强弱'}：${elementBalance === 'strong' ? (lang === 'en' ? 'Strong' : lang === 'ja' ? '強い' : '旺') : (lang === 'en' ? 'Weak' : lang === 'ja' ? '弱い' : '弱')} - ${elementInsight}。${lang === 'en' ? `Your fate is dominated by ${primaryElement}, complemented by ${secondaryElement}, showing a unique energy balance.` : lang === 'ja' ? `あなたの命は${primaryElement}が主で、${secondaryElement}が補い、独特なエネルギーバランスを示している。` : `君之命格以${primaryElement}为主，辅以${secondaryElement}，气场独特。`}</p>
        <p><strong>${translations[lang].fateTrait}</strong></p>
        <p>${fateTrait.term} - ${fateTrait.plain}。<br>${lang === 'en' ? 'Advice' : lang === 'ja' ? '助言' : '仙师建议'}：${fateTrait.advice}。</p>
        <p><strong>${translations[lang].fortune}</strong></p>
        <p>${fortune.term} - ${fortune.plain}。<br>${lang === 'en' ? 'Advice' : lang === 'ja' ? '助言' : '仙师建议'}：${fortune.advice}。</p>
        <p><strong>${translations[lang].nameMonth}</strong></p>
        <p>${nameInfluence}。<br>${monthInfluence}。</p>
        <p><strong>${translations[lang].lifeAdvice}</strong></p>
        <p>${lang === 'en' ? 'Clothing' : lang === 'ja' ? '服装' : '衣着'}：${clothing}${lang === 'en' ? ', enhancing your aura.' : lang === 'ja' ? '、気を高める。' : '，助显仙气。'}</p>
        <p>${lang === 'en' ? 'Accessories' : lang === 'ja' ? '装飾品' : '饰品'}：${accessory}${lang === 'en' ? ', boosting your fortune.' : lang === 'ja' ? '、運を上げる。' : '，增运势。'}</p>
        <p>${lang === 'en' ? 'Travel' : lang === 'ja' ? '出行' : '出行'}：${travel}${lang === 'en' ? ', aligning with timing.' : lang === 'ja' ? '、時勢に合う。' : '，顺天时。'}</p>
        <p>${lang === 'en' ? 'Diet' : lang === 'ja' ? '食事' : '饮食'}：${diet}${lang === 'en' ? ', balancing your body.' : lang === 'ja' ? '、体を整える。' : '，调五脏。'}</p>
        <p>${lang === 'en' ? 'Work' : lang === 'ja' ? '仕事' : '事业'}：${work}${lang === 'en' ? ', showcasing your talents.' : lang === 'ja' ? '、才能を発揮する。' : '，展天赋。'}</p>
        <p><strong>${translations[lang].summary}</strong></p>
        <p>${lang === 'en' ? `Based on your fate, the Immortal Master suggests balancing ${primaryElement}'s power, leveraging your ${fateTrait.plain.split(',')[0]} nature, seizing the ${fortune.plain.split(',')[0]} chance, and following the guidance for better fortune.` : lang === 'ja' ? `あなたの命盤に基づき、仙師は${primaryElement}の力を調整し、${fateTrait.plain.split('、')[0]}な性質を活かし、${fortune.plain.split('、')[0]}の機会をつかみ、指導に従って運勢を上げることを提案します。` : `依君之命盘，仙师推演，未来一年宜调${primaryElement}之力，依${fateTrait.plain.split('，')[0]}之性，抓${fortune.plain.split('，')[0]}之机，依仙导行事，运势必升。`}</p>
        <p><strong>${translations[lang].summaryPlain}</strong></p>
        <p>${plainSummary}</p>
    `;
}

// 处理表单提交并逐步显示结果
document.getElementById('fortuneForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthTime = document.getElementById('birthTime').value;
    const lang = currentLang;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${translations[lang].calculating}</p>`;
    resultDiv.classList.remove('show');
    resultDiv.style.display = 'block';
    
    const fullResult = generateResult(name, birthYear, birthMonth, birthDay, birthTime, lang);
    const sections = fullResult.split('<p><strong>').map((section, index) => 
        index === 0 ? section : `<p><strong>${section}`
    );
    
    let currentSection = 0;
    resultDiv.innerHTML = sections[0];
    resultDiv.classList.add('show');
    
    const interval = setInterval(() => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            resultDiv.innerHTML += sections[currentSection];
            resultDiv.scrollTop = resultDiv.scrollHeight;
        } else {
            clearInterval(interval);
        }
    }, 700);
});