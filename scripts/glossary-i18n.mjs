/**
 * Hindi / Hinglish glossary terms & definition translations.
 */

/** @type {Record<string, { hi?: { term: string; def: string }; hinglish?: { term: string; def: string } }>} */
export const GLOSSARY_DB = {
  'print()': {
    hi: { term: 'print() — प्रिंट', def: 'स्क्रीन पर टेक्स्ट दिखाता है' },
    hinglish: { term: 'print()', def: 'Screen par text dikhata hai' },
  },
  Program: {
    hi: { term: 'प्रोग्राम', def: 'कंप्यूटर के लिए निर्देशों की सूची' },
    hinglish: { term: 'Program', def: 'Computer ke liye instructions ki list' },
  },
  Variable: {
    hi: { term: 'वेरिएबल (चर)', def: 'मान रखने की नाम वाली जगह' },
    hinglish: { term: 'Variable', def: 'Value rakhne ki naam wali jagah' },
  },
  '=': {
    hi: { term: '= (बराबर का चिन्ह)', def: 'दाएँ का मान बाएँ वाले नाम में रखता है' },
    hinglish: { term: '= sign', def: 'Right side ki value left naam mein daalta hai' },
  },
  str: {
    hi: { term: 'str — टेक्स्ट', def: 'हमेशा quotes में लिखा जाता है' },
    hinglish: { term: 'str — text', def: 'Hamesha quotes mein likhte hain' },
  },
  'int / float': {
    hi: { term: 'int / float — संख्या', def: 'पूर्ण या दशमलव संख्या' },
    hinglish: { term: 'int / float — number', def: 'Whole ya decimal number' },
  },
  bool: {
    hi: { term: 'bool — सही/गलत', def: 'सिर्फ True या False' },
    hinglish: { term: 'bool — true/false', def: 'Sirf True ya False' },
  },
  '==': {
    hi: { term: '== (बराबर?)', def: 'दोनों तरफ की values बराबर हैं या नहीं' },
    hinglish: { term: '== (barabar?)', def: 'Dono side ki values barabar hain ya nahi' },
  },
  '>': {
    hi: { term: '> (बड़ा?)', def: 'बाएँ की value दाएँ से बड़ी है या नहीं' },
    hinglish: { term: '> (bada?)', def: 'Left value right se badi hai ya nahi' },
  },
  list: {
    hi: { term: 'सूची (list)', def: 'क्रम वाली चीज़ों का समूह, [] में' },
    hinglish: { term: 'List', def: 'Order wali cheezon ka group, [] mein' },
  },
  append: {
    hi: { term: 'append', def: 'सूची के अंत में नई चीज़ जोड़ता है' },
    hinglish: { term: 'append', def: 'List ke end mein nayi cheez jodta hai' },
  },
  tuple: {
    hi: { term: 'टपल (tuple)', def: 'बदले न जाने वाला क्रम, () में' },
    hinglish: { term: 'Tuple', def: 'Change na hone wala order, () mein' },
  },
  dict: {
    hi: { term: 'डिक्शनरी (dict)', def: 'नाम से value ढूँढने का तरीका, {} में' },
    hinglish: { term: 'Dictionary (dict)', def: 'Naam se value dhundhne ka tareeka, {} mein' },
  },
  key: {
    hi: { term: 'कुंजी (key)', def: 'जिस नाम से value मिलती है' },
    hinglish: { term: 'Key', def: 'Jis naam se value milti hai' },
  },
  def: {
    hi: { term: 'def', def: 'नया फ़ंक्शन बनाने की शुरुआत' },
    hinglish: { term: 'def', def: 'Naya function banane ki shuruaat' },
  },
  return: {
    hi: { term: 'return', def: 'फ़ंक्शन का जवाब वापस भेजता है' },
    hinglish: { term: 'return', def: 'Function ka jawab wapas bhejta hai' },
  },
  'if / else': {
    hi: { term: 'if / else', def: 'शर्त सच हो तो एक रास्ता, नहीं तो दूसरा' },
    hinglish: { term: 'if / else', def: 'Condition sach ho to ek raasta, warna doosra' },
  },
  Indent: {
    hi: { term: 'इंडेंट (हाशिया)', def: 'लाइन की शुरुआत में spaces — ब्लॉक दिखाते हैं' },
    hinglish: { term: 'Indent (spaces)', def: 'Line start mein spaces — block dikhate hain' },
  },
  'for loop': {
    hi: { term: 'for लूप', def: 'सूची की हर चीज़ पर एक-एक बार चलता है' },
    hinglish: { term: 'for loop', def: 'List ki har cheez par ek ek baar chalta hai' },
  },
  'range()': {
    hi: { term: 'range()', def: 'संख्याओं की श्रृंखला बनाता है' },
    hinglish: { term: 'range()', def: 'Numbers ki series banata hai' },
  },
}

/** English definition → localized */
const DEF_PHRASES = [
  ['Shows text on the screen', 'स्क्रीन पर टेक्स्ट दिखाता है', 'Screen par text dikhata hai'],
  ['A saved list of instructions for the computer', 'कंप्यूटर के लिए निर्देशों की सूची', 'Computer ke liye instructions ki list'],
  ['A named place to store a value', 'मान रखने की नाम वाली जगह', 'Value rakhne ki naam wali jagah'],
  ['Puts a value into the variable (not math "equals" here)', 'मान को variable में रखता है (यहाँ गणित का = नहीं)', 'Value variable mein rakhta hai (yahan math wala = nahi)'],
  ['Text — always in quotes', 'टेक्स्ट — हमेशा quotes में', 'Text — hamesha quotes mein'],
  ['Numbers — with or without decimal point', 'संख्या — दशमलव के साथ या बिना', 'Number — decimal ke saath ya bina'],
  ['True or False only', 'सिर्फ सही या गलत', 'Sirf True ya False'],
  ['Checks if two values are equal', 'दो values बराबर हैं या नहीं', 'Do values barabar hain ya nahi'],
  ['Checks if left side is bigger', 'बाईं value बड़ी है या नहीं', 'Left value badi hai ya nahi'],
]

function normalizeTerm(term) {
  return term?.trim().replace(/\s+/g, ' ') || ''
}

export function translateGlossary(glossary, locale) {
  if (!glossary?.length || locale === 'en') return glossary

  return glossary.map((item) => {
    const key = normalizeTerm(item.term)
    const hit =
      GLOSSARY_DB[key] ||
      GLOSSARY_DB[key.replace(/\s*\(.*\)$/, '')] ||
      Object.entries(GLOSSARY_DB).find(([k]) => key.toLowerCase().includes(k.toLowerCase()))?.[1]

    if (hit?.[locale]) {
      return { term: hit[locale].term, def: hit[locale].def }
    }

    let def = item.def
    for (const [en, hi, hing] of DEF_PHRASES) {
      if (def === en) {
        def = locale === 'hi' ? hi : hing
        break
      }
    }

    const term =
      locale === 'hi'
        ? localizeTermHi(key)
        : locale === 'hinglish'
          ? localizeTermHinglish(key)
          : key

    return { term, def }
  })
}

function localizeTermHi(term) {
  const map = {
    'print()': 'print() — प्रिंट',
    Variable: 'वेरिएबल',
    Program: 'प्रोग्राम',
    'int / float': 'संख्या (int/float)',
    bool: 'सही/गलत (bool)',
    list: 'सूची (list)',
    tuple: 'टपल',
    dict: 'डिक्शनरी',
    key: 'कुंजी',
  }
  return map[term] || term
}

function localizeTermHinglish(term) {
  const map = {
    'print()': 'print()',
    Variable: 'Variable',
    Program: 'Program',
    list: 'List',
    tuple: 'Tuple',
    dict: 'Dictionary',
  }
  return map[term] || term
}

/** Translate common English goal/plain snippets when no override */
const TEXT_PHRASES = new Map([
  [
    'Run your first Python lines and see instant output — zero experience needed.',
    {
      hi: 'पहली Python लाइनें चलाएँ और तुरंत परिणाम देखें — अनुभव की जरूरत नहीं।',
      hinglish: 'Pehli Python lines chalao aur turant result dekho — experience ki zaroorat nahi.',
    },
  ],
  [
    'Store information in named boxes (variables) and use them later.',
    {
      hi: 'नाम वाले डिब्बों (variables) में जानकारी रखें और बाद में इस्तेमाल करें।',
      hinglish: 'Naam wale boxes (variables) mein info rakho aur baad mein use karo.',
    },
  ],
  [
    'A program is a list of instructions. Python reads from top to bottom. `print` simply shows text on screen — like sending a message to yourself.',
    {
      hi: 'प्रोग्राम निर्देशों की सूची है। Python ऊपर से नीचे पढ़ता है। `print` स्क्रीन पर टेक्स्ट दिखाता है — खुद को संदेश भेजने जैसा।',
      hinglish:
        'Program instructions ki list hai. Python upar se neeche padhta hai. `print` screen par text dikhata hai — khud ko message bhejne jaisa.',
    },
  ],
])

export function translatePhrase(text, locale) {
  if (!text || locale === 'en') return text
  const hit = TEXT_PHRASES.get(text.trim())
  if (hit) return hit[locale] || text
  return text
}

export function translateSteps(steps, locale) {
  if (!steps?.length || locale === 'en') return steps
  const STEP_MAP = {
    'Press Run on the easy example': {
      hi: 'नीचे Run दबाएँ',
      hinglish: 'Neeche Run dabao',
    },
    'Change the text inside quotes': {
      hi: 'quotes के अंदर लिखावट बदलें',
      hinglish: 'Quotes ke andar text badlo',
    },
    'Run again and watch output change': {
      hi: 'फिर Run करें — output बदलेगा',
      hinglish: 'Phir Run karo — output badlega',
    },
    'Run the example': { hi: 'उदाहरण Run करें', hinglish: 'Example Run karo' },
    'Change name and age': { hi: 'नाम और उम्र बदलें', hinglish: 'Naam aur age badlo' },
    'Add a third print combining both': {
      hi: 'दोनों को मिलाकर तीसरा print लिखें',
      hinglish: 'Dono ko mila ke teesra print likho',
    },
    'Read the plain explanation': {
      hi: 'ऊपर की सरल व्याख्या पढ़ें',
      hinglish: 'Upar ki simple explanation padho',
    },
    'Run the easy example': {
      hi: 'आसान उदाहरण Run करें',
      hinglish: 'Aasan example Run karo',
    },
    'Skim reference notes if curious': {
      hi: 'जिज्ञासा हो तो नीचे संदर्भ नोट्स देखें',
      hinglish: 'Mann ho to niche reference notes dekho',
    },
  }
  return steps.map((s) => STEP_MAP[s]?.[locale] || s)
}

/** Localize # comments in starter code */
export function localizeStarterCode(code, locale) {
  if (!code || locale === 'en') return code
  const COMMENT_MAP = {
    hi: [
      [/Step 1: Run this/i, 'चरण 1: यह चलाएँ'],
      [/Step 2: Change/i, 'चरण 2: बदलें'],
      [/Your first Python/i, 'आपकी पहली Python'],
      [/text \(str\)/i, 'टेक्स्ट (str)'],
      [/whole number \(int\)/i, 'पूर्ण संख्या (int)'],
      [/decimal \(float\)/i, 'दशमलव (float)'],
      [/yes\/no \(bool\)/i, 'हाँ/ना (bool)'],
      [/Try: change marks/i, 'आज़माएँ: marks बदलें'],
    ],
    hinglish: [
      [/Step 1: Run this/i, 'Step 1: Ye chalao'],
      [/Step 2: Change/i, 'Step 2: Badlo'],
      [/Your first Python/i, 'Tumhari pehli Python'],
      [/text \(str\)/i, 'text (str)'],
      [/whole number \(int\)/i, 'poori number (int)'],
      [/decimal \(float\)/i, 'decimal (float)'],
      [/yes\/no \(bool\)/i, 'haan/na (bool)'],
      [/Try: change marks/i, 'Try karo: marks badlo'],
    ],
  }
  let out = code
  for (const [re, rep] of COMMENT_MAP[locale] || []) {
    out = out.replace(re, rep)
  }
  return out
}
