function generateRandomFortune(type, userData) {
  try {
    const fortuneTypes = {
      zodiac: [
        "你天生具有领导才能，未来将在事业上取得重大突破。",
        "近期将有贵人相助，事业发展将迎来转机。",
        "你的创造力正处于高峰期，是开展新项目的最佳时机。",
        "最近的决定将影响你未来五年的发展方向，请慎重考虑。",
        "你的人际关系网将为你带来意想不到的机遇。"
      ],
      tarot: [
        "正义牌显示你即将迎来公平的结果，坚持做正确的事。",
        "命运之轮预示着重大变化即将到来，保持开放的心态。",
        "力量牌表明你内心的勇气将帮助你克服困难。",
        "星星牌意味着希望和灵感，继续追寻你的梦想。",
        "太阳牌预示着成功和富足，你的努力将得到回报。"
      ],
      palmistry: [
        "你的生命线显示强健的体魄和长寿的命运。",
        "智慧线表明你具有出色的分析能力和创造性思维。",
        "感情线显示你在感情上非常专一，将拥有稳定的感情生活。",
        "命运线表明你的事业将经历重大转变，但最终取得成功。",
        "太阳线预示着名声和认可，你的才能将得到赏识。"
      ],
      numerology: [
        "你的命运数字是7，象征智慧和内省，适合从事研究或教育工作。",
        "生命路径数字3表明你天生具有创造力和表达能力，艺术领域将带给你成功。",
        "数字9代表完成和智慧，你有能力帮助他人实现目标。",
        "你的命运数字1显示领导能力和独立性，创业将是理想选择。",
        "数字5代表变化和自由，你将体验丰富多彩的人生经历。"
      ],
      iChing: [
        "乾卦：表示创造和领导，你将开创新局面。",
        "坤卦：代表包容和滋养，是发展人际关系的好时机。",
        "震卦：意味着行动和变化，准备迎接新的开始。",
        "艮卦：象征稳定和停止，现在是反思和调整的时候。",
        "坎卦：代表危险中的机遇，保持警觉并把握时机。"
      ]
    };

    // Get current date for personalization
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    
    // Use user data to "personalize" the fortune
    let name = userData?.name || "贵客";
    let birthYear = userData?.birthYear || (now.getFullYear() - 30);
    let age = now.getFullYear() - birthYear;
    
    // Select fortune based on type
    let fortuneArray = fortuneTypes[type] || fortuneTypes.zodiac;
    let fortune = fortuneArray[Math.floor(Math.random() * fortuneArray.length)];
    
    // Add personalization
    fortune = `尊敬的${name}${age ? `(${age}岁)` : ""}，${fortune}`;
    
    // Add time element
    const timeFrames = ["近期", "未来三个月", "今年", "明年", "未来五年"];
    const timeFrame = timeFrames[Math.floor(Math.random() * timeFrames.length)];
    
    // Add specific advice
    const advices = [
      "建议多关注健康，适当运动能提升运势。",
      "财运方面，谨慎投资将带来稳定收益。",
      "感情上需要更多耐心和沟通，才能获得圆满。",
      "工作中展现你的创意，将获得上级的赏识。",
      "人际关系将是提升运势的关键，多参与社交活动。"
    ];
    const advice = advices[Math.floor(Math.random() * advices.length)];
    
    // Combine everything
    const fullFortune = `${fortune} ${timeFrame}${advice}`;
    
    return {
      fortune: fullFortune,
      luckyNumbers: generateLuckyNumbers(),
      luckyColors: generateLuckyColors(),
      luckyDirections: generateLuckyDirections()
    };
  } catch (error) {
    console.error("Fortune generation error:", error);
    reportError(error);
    return {
      fortune: "命运之门暂时关闭，请稍后再试...",
      luckyNumbers: [7, 9],
      luckyColors: ["紫色", "金色"],
      luckyDirections: "东南"
    };
  }
}

function generateLuckyNumbers() {
  try {
    const numbers = [];
    while (numbers.length < 3) {
      const num = Math.floor(Math.random() * 99) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  } catch (error) {
    console.error("Lucky numbers generation error:", error);
    reportError(error);
    return [7, 8, 9];
  }
}

function generateLuckyColors() {
  try {
    const allColors = ["红色", "蓝色", "绿色", "紫色", "金色", "银色", "黄色", "白色", "黑色"];
    const selectedColors = [];
    while (selectedColors.length < 2) {
      const color = allColors[Math.floor(Math.random() * allColors.length)];
      if (!selectedColors.includes(color)) {
        selectedColors.push(color);
      }
    }
    return selectedColors;
  } catch (error) {
    console.error("Lucky colors generation error:", error);
    reportError(error);
    return ["紫色", "金色"];
  }
}

function generateLuckyDirections() {
  try {
    const directions = ["东", "南", "西", "北", "东南", "东北", "西南", "西北"];
    return directions[Math.floor(Math.random() * directions.length)];
  } catch (error) {
    console.error("Lucky directions generation error:", error);
    reportError(error);
    return "东南";
  }
}

function calculateZodiacSign(month, day) {
  try {
    const signs = [
      { name: "水瓶座", start: [1, 20], end: [2, 18] },
      { name: "双鱼座", start: [2, 19], end: [3, 20] },
      { name: "白羊座", start: [3, 21], end: [4, 19] },
      { name: "金牛座", start: [4, 20], end: [5, 20] },
      { name: "双子座", start: [5, 21], end: [6, 21] },
      { name: "巨蟹座", start: [6, 22], end: [7, 22] },
      { name: "狮子座", start: [7, 23], end: [8, 22] },
      { name: "处女座", start: [8, 23], end: [9, 22] },
      { name: "天秤座", start: [9, 23], end: [10, 23] },
      { name: "天蝎座", start: [10, 24], end: [11, 21] },
      { name: "射手座", start: [11, 22], end: [12, 21] },
      { name: "摩羯座", start: [12, 22], end: [1, 19] }
    ];
    
    for (let sign of signs) {
      // Handle special case for Capricorn (spans December to January)
      if (sign.name === "摩羯座") {
        if ((month === 12 && day >= sign.start[1]) || (month === 1 && day <= sign.end[1])) {
          return sign.name;
        }
      } 
      // Normal case
      else if ((month === sign.start[0] && day >= sign.start[1]) || 
               (month === sign.end[0] && day <= sign.end[1])) {
        return sign.name;
      }
    }
    return "未知星座";
  } catch (error) {
    console.error("Zodiac calculation error:", error);
    reportError(error);
    return "未知星座";
  }
}

function calculateChineseZodiac(year) {
  try {
    const animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    const startYear = 1900; // Year of the Rat
    return animals[(year - startYear) % 12];
  } catch (error) {
    console.error("Chinese zodiac calculation error:", error);
    reportError(error);
    return "未知生肖";
  }
}

function calculateLifePathNumber(year, month, day) {
  try {
    // Add all digits together
    const dateString = `${year}${month}${day}`;
    let sum = 0;
    
    for (let i = 0; i < dateString.length; i++) {
      sum += parseInt(dateString[i]);
    }
    
    // Reduce to a single digit (unless it's 11, 22, or 33 which are master numbers)
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      let tempSum = 0;
      sum.toString().split('').forEach(digit => {
        tempSum += parseInt(digit);
      });
      sum = tempSum;
    }
    
    return sum;
  } catch (error) {
    console.error("Life path number calculation error:", error);
    reportError(error);
    return 7;
  }
}

function generateRandomTarotCard() {
  try {
    const tarotCards = [
      { name: "愚者", meaning: "新的开始，冒险，无忧无虑" },
      { name: "魔术师", meaning: "创造力，技能，能力，自信" },
      { name: "女祭司", meaning: "直觉，潜意识，神秘，内在声音" },
      { name: "皇后", meaning: "丰饶，母性，创造，自然" },
      { name: "皇帝", meaning: "权威，结构，控制，父性" },
      { name: "教皇", meaning: "信仰，传统，教育，智慧" },
      { name: "恋人", meaning: "爱情，关系，价值观，选择" },
      { name: "战车", meaning: "决心，意志力，胜利，控制" },
      { name: "力量", meaning: "勇气，耐心，控制，慈悲" },
      { name: "隐士", meaning: "内省，寻求真理，独处，指导" },
      { name: "命运之轮", meaning: "命运，转变，周期，因果" },
      { name: "正义", meaning: "公平，真理，法律，因果" },
      { name: "悬吊者", meaning: "牺牲，视角，洞察，暂停" },
      { name: "死神", meaning: "结束，变化，转变，过渡" },
      { name: "节制", meaning: "平衡，适度，耐心，目的" },
      { name: "恶魔", meaning: "束缚，物质主义，欲望，阴影" },
      { name: "塔", meaning: "突变，混乱，启示，觉醒" },
      { name: "星星", meaning: "希望，信心，目的，灵感" },
      { name: "月亮", meaning: "幻觉，恐惧，焦虑，潜意识" },
      { name: "太阳", meaning: "快乐，成功，活力，自信" },
      { name: "审判", meaning: "反思，重生，内在召唤，救赎" },
      { name: "世界", meaning: "完成，整合，成就，旅程" }
    ];
    
    return tarotCards[Math.floor(Math.random() * tarotCards.length)];
  } catch (error) {
    console.error("Tarot card generation error:", error);
    reportError(error);
    return { name: "命运之轮", meaning: "命运，转变，周期，因果" };
  }
}

function getFortunePrompt(type) {
  try {
    const prompts = {
      zodiac: "请输入您的出生年月日，我们将为您解读星座运势。",
      tarot: "请在心中默想一个问题，然后点击抽取塔罗牌。",
      palmistry: "请上传您的手掌照片，我们将为您解读手相。",
      numerology: "请输入您的全名和出生日期，我们将计算您的命运数字。",
      iChing: "请集中精神，想着您的问题，然后点击抛出六枚铜钱。"
    };
    
    return prompts[type] || "请填写您的个人信息，我们将为您解读命运。";
  } catch (error) {
    console.error("Fortune prompt error:", error);
    reportError(error);
    return "请填写您的个人信息，我们将为您解读命运。";
  }
}

function generateDetailedFortune(userData) {
  try {
    // This would call the AI agent in a real implementation
    // For now, we'll simulate a delayed response
    return new Promise((resolve) => {
      setTimeout(() => {
        const detailedFortune = {
          overview: `尊敬的${userData.name || '贵客'}，您的命盘显示您天生具有非凡的${userData.gender === '女' ? '直觉和洞察力' : '领导能力和创造力'}。`,
          career: "事业方面，您适合从事需要创造力和独立思考的工作。近期有升职或加薪的机会，但需要主动把握。",
          love: `感情方面，${userData.gender === '女' ? '您将遇到一位能够理解和支持您的伴侣' : '您需要更多地表达自己的感情，以维系和加深与伴侣的关系'}。单身的您可能在社交场合遇到有缘人。`,
          health: "健康方面，注意保护${userData.gender === '女' ? '肝脏和消化系统' : '心脏和呼吸系统'}。建议增加有氧运动，保持良好的作息习惯。",
          wealth: "财运方面，近期适合稳健投资，不宜冒险。可能有意外收入，但也要注意避免不必要的开支。",
          advice: "建议在重大决策前多听取他人意见，同时相信自己的直觉。定期放松心情，保持积极心态将帮助您度过困难时期。"
        };
        resolve(detailedFortune);
      }, 2000);
    });
  } catch (error) {
    console.error("Detailed fortune generation error:", error);
    reportError(error);
    return Promise.resolve({
      overview: "命运之门暂时关闭，请稍后再试...",
      career: "暂无数据",
      love: "暂无数据",
      health: "暂无数据",
      wealth: "暂无数据",
      advice: "暂无数据"
    });
  }
}
