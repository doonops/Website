/**
 * Translate bootcamp reference markdown (English) → Hindi / Hinglish at build time.
 */

const LOCALES = ['en', 'hi', 'hinglish']

/** Full paragraph exact match (trimmed) */
const EXACT = {
  'Syntax refers to the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a language. In simpler terms, syntax is about the correct arrangement of words and symbols in a code.\n\nSemantics refers to the meaning or the interpretation of the symbols, characters, and commands in a language. It is about what the code is supposed to do when it runs.': {
    hi: 'वाक्य-रचना (Syntax) वे नियम हैं जो बताते हैं कि कोड में चिन्ह और शब्द कैसे सही क्रम में लगें। सरल शब्दों में — code में शब्दों और चिन्हों की सही व्यवस्था।\n\nअर्थ (Semantics) का मतलब है — code के चिन्हों और आदेशों का क्या मतलब है। यानी चलने पर code क्या करेगा।',
    hinglish:
      'Syntax wo rules hain jo batate hain code mein symbols aur words sahi order mein kaise lagenge. Simple words mein — code mein words aur symbols ki sahi arrangement.\n\nSemantics ka matlab hai — code ke symbols aur commands ka kya meaning hai. Yaani chalne par code kya karega.',
  },
  'Indentation in Python is used to define the structure and hierarchy of the code. Unlike many other programming languages that use braces {} to delimit blocks of code, Python uses indentation to determine the grouping of statements. This means that all the statements within a block must be indented at the same level.': {
    hi: 'Python में हाशिया (indentation) code की संरचना और क्रम तय करता है। कई भाषाओं में {} से code के हिस्से अलग होते हैं, Python में statements का समूह हाशिए से तय होता है। इसका मतलब — एक block की सभी lines का हाशिया एक ही स्तर पर होना चाहिए।',
    hinglish:
      'Python mein indentation (spaces) code ki structure aur hierarchy set karta hai. Kai languages mein {} se code blocks alag hote hain, Python mein statements ka group indentation se decide hota hai. Iska matlab — ek block ki saari lines ka indent same level par hona chahiye.',
  },
  'Understanding the syntax and semantics of Python is crucial for writing correct and meaningful programs. Syntax ensures the code is properly structured, while semantics ensures the code behaves as expected. Mastering these concepts will help in writing efficient and error-free Python code.': {
    hi: 'Python की वाक्य-रचना और अर्थ समझना सही program लिखने के लिए ज़रूरी है। Syntax से code की बनावट सही रहती है, semantics से code वैसा ही चलता है जैसा चाहिए। इन्हें अच्छी तरह सीखने से कुशल और कम-गलती वाला Python code लिखना आसान होता है।',
    hinglish:
      'Python ki syntax aur semantics samajhna sahi program likhne ke liye zaroori hai. Syntax se code ki structure sahi rehti hai, semantics se code waise hi chalta hai jaise chahiye. Inhe achhe se seekhne se efficient aur kam-galti wala Python code likhna easy hota hai.',
  },
}

/** Longest-first phrase replacements inside paragraphs */
const PHRASES = [
  [
    'Indentation in Python is used to define the structure and hierarchy of the code.',
    {
      hi: 'Python में हाशिया code की संरचना और क्रम तय करता है।',
      hinglish: 'Python mein indentation code ki structure aur hierarchy set karta hai.',
    },
  ],
  [
    'Unlike many other programming languages that use braces {} to delimit blocks of code, Python uses indentation to determine the grouping of statements.',
    {
      hi: 'कई भाषाओं में {} से blocks अलग होते हैं; Python statements का समूह हाशिए से तय करता है।',
      hinglish: 'Kai languages mein {} se blocks alag hote hain; Python statements ka group indentation se decide karta hai.',
    },
  ],
  [
    'This means that all the statements within a block must be indented at the same level.',
    {
      hi: 'एक block की सभी statements का हाशिया एक ही स्तर पर होना चाहिए।',
      hinglish: 'Ek block ki saari statements ka indent same level par hona chahiye.',
    },
  ],
  [
    'Syntax refers to the set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a language.',
    {
      hi: 'वाक्य-रचना वे नियम हैं जो बताते हैं कि चिन्ह और शब्द सही क्रम में कैसे लगें।',
      hinglish: 'Syntax wo rules hain jo batate hain symbols aur words sahi order mein kaise lagenge.',
    },
  ],
  [
    'In simpler terms, syntax is about the correct arrangement of words and symbols in a code.',
    {
      hi: 'सरल शब्दों में — code में शब्दों और चिन्हों की सही व्यवस्था।',
      hinglish: 'Simple words mein — code mein words aur symbols ki sahi arrangement.',
    },
  ],
  [
    'Semantics refers to the meaning or the interpretation of the symbols, characters, and commands in a language.',
    {
      hi: 'अर्थ का मतलब है — भाषा में चिन्हों और आदेशों की व्याख्या।',
      hinglish: 'Semantics ka matlab hai — language mein symbols aur commands ki interpretation.',
    },
  ],
  [
    'It is about what the code is supposed to do when it runs.',
    {
      hi: 'यानी code चलने पर क्या करेगा।',
      hinglish: 'Yaani code chalne par kya karega.',
    },
  ],
  [
    'Lists are one of the most commonly used data structures in Python',
    {
      hi: 'सूची (list) Python में सबसे ज़्यादा इस्तेमाल होने वाली data structures में से एक है',
      hinglish: 'List Python mein sabse zyada use hone wali data structures mein se ek hai',
    },
  ],
  [
    'thanks to their versatility and ease of use',
    {
      hi: 'ये लचीली और आसान होने के कारण',
      hinglish: 'ye flexible aur easy hone ke karan',
    },
  ],
  [
    'A variable is a name given to a memory location',
    {
      hi: 'वेरिएबल memory की जगह का नाम है',
      hinglish: 'Variable memory ki location ka naam hai',
    },
  ],
  [
    'Variables are used to store data in memory',
    {
      hi: 'डेटा memory में रखने के लिए variables इस्तेमाल होते हैं',
      hinglish: 'Data memory mein rakhne ke liye variables use hote hain',
    },
  ],
  [
    'The filter() function is a powerful tool',
    {
      hi: 'filter() फ़ंक्शन एक शक्तिशाली उपकरण है',
      hinglish: 'filter() function ek powerful tool hai',
    },
  ],
  [
    'is used to create iterators',
    {
      hi: 'iterators बनाने के लिए इस्तेमाल होता है',
      hinglish: 'iterators banane ke liye use hota hai',
    },
  ],
  [
    'based on a function',
    {
      hi: 'एक function के आधार पर',
      hinglish: 'ek function ke basis par',
    },
  ],
  [
    'commonly used for data cleaning',
    {
      hi: 'डेटा साफ़ करने में अक्सर इस्तेमाल',
      hinglish: 'data cleaning mein aksar use',
    },
  ],
  [
    'removing unwanted elements',
    {
      hi: 'अनचाही चीज़ें हटाना',
      hinglish: 'unwanted cheezein hatana',
    },
  ],
  [
    'Video Outline:',
    { hi: 'वीडियो में क्या-cover होगा:', hinglish: 'Video mein kya cover hoga:' },
  ],
  [
    'Single line Comments and multiline comments',
    { hi: 'एक-पंक्ति और कई-पंक्ति की टिप्पणी', hinglish: 'Single line aur multiline comments' },
  ],
  [
    'Definition of Syntax and Semantics',
    { hi: 'वाक्य-रचना और अर्थ की परिभाषा', hinglish: 'Syntax aur semantics ki definition' },
  ],
  [
    'Basic Syntax Rules in Python',
    { hi: 'Python के बुनियादी नियम', hinglish: 'Python ke basic syntax rules' },
  ],
  [
    'Understanding Semantics in Python',
    { hi: 'Python में अर्थ को समझना', hinglish: 'Python mein semantics samajhna' },
  ],
  [
    'Common Syntax Errors and How to Avoid Them',
    { hi: 'आम गलतियाँ और बचाव', hinglish: 'Common syntax errors aur kaise bachna' },
  ],
  [
    'Practical Code Examples',
    { hi: 'व्यावहारिक कोड उदाहरण', hinglish: 'Practical code examples' },
  ],
  [
    'Case sensitivity',
    { hi: 'बड़े-छोटे अक्षर का फ़र्क', hinglish: 'Capital/small letter ka farq' },
  ],
  [
    'Python is case sensitive',
    { hi: 'Python बड़े-छोटे अक्षर में sensitive है', hinglish: 'Python capital/small letter mein sensitive hai' },
  ],
  [
    'for example',
    { hi: 'उदाहरण के लिए', hinglish: 'jaise' },
  ],
  [
    'in other words',
    { hi: 'दूसरे शब्दों में', hinglish: 'doosre words mein' },
  ],
  [
    'In this notebook',
    { hi: 'इस नोटबुक में', hinglish: 'Is notebook mein' },
  ],
  [
    'we will learn',
    { hi: 'हम सीखेंगे', hinglish: 'hum seekhenge' },
  ],
  [
    'we will discuss',
    { hi: 'हम चर्चा करेंगे', hinglish: 'hum discuss karenge' },
  ],
  [
    'let us',
    { hi: 'आइए', hinglish: 'chalo' },
  ],
  [
    'Let us',
    { hi: 'आइए', hinglish: 'Chalo' },
  ],
  [
    'programming language',
    { hi: 'प्रोग्रामिंग भाषा', hinglish: 'programming language' },
  ],
  [
    'data structure',
    { hi: 'डेटा संरचना', hinglish: 'data structure' },
  ],
  [
    'data structures',
    { hi: 'डेटा संरचनाएँ', hinglish: 'data structures' },
  ],
  [
    'real-world',
    { hi: 'वास्तविक जीवन', hinglish: 'real life' },
  ],
  [
    'Real-World',
    { hi: 'वास्तविक जीवन', hinglish: 'Real life' },
  ],
  [
    'Conclusion:',
    { hi: 'निष्कर्ष:', hinglish: 'Conclusion:' },
  ],
  [
    'Conclusion',
    { hi: 'निष्कर्ष', hinglish: 'Conclusion' },
  ],
  [
    'Summary',
    { hi: 'सारांश', hinglish: 'Summary' },
  ],
  [
    'Introduction',
    { hi: 'परिचय', hinglish: 'Introduction' },
  ],
  [
    'Example',
    { hi: 'उदाहरण', hinglish: 'Example' },
  ],
  [
    'Examples',
    { hi: 'उदाहरण', hinglish: 'Examples' },
  ],
  [
    'Note:',
    { hi: 'ध्यान दें:', hinglish: 'Note:' },
  ],
  [
    'Important:',
    { hi: 'ज़रूरी:', hinglish: 'Important:' },
  ],
  [
    'Key points',
    { hi: 'मुख्य बातें', hinglish: 'Key points' },
  ],
  [
    'Key Points',
    { hi: 'मुख्य बातें', hinglish: 'Key Points' },
  ],
  [
    'Output:',
    { hi: 'परिणाम:', hinglish: 'Output:' },
  ],
  [
    'Input:',
    { hi: 'इनपुट:', hinglish: 'Input:' },
  ],
  [
    'function',
    { hi: 'फ़ंक्शन', hinglish: 'function' },
  ],
  [
    'Function',
    { hi: 'फ़ंक्शन', hinglish: 'Function' },
  ],
  [
    'variable',
    { hi: 'वेरिएबल', hinglish: 'variable' },
  ],
  [
    'Variable',
    { hi: 'वेरिएबल', hinglish: 'Variable' },
  ],
  [
    'loop',
    { hi: 'लूप', hinglish: 'loop' },
  ],
  [
    'Loop',
    { hi: 'लूप', hinglish: 'Loop' },
  ],
  [
    'dictionary',
    { hi: 'डिक्शनरी', hinglish: 'dictionary' },
  ],
  [
    'tuple',
    { hi: 'टपल', hinglish: 'tuple' },
  ],
  [
    'list',
    { hi: 'सूची', hinglish: 'list' },
  ],
  [
    'set',
    { hi: 'सेट', hinglish: 'set' },
  ],
  [
    'string',
    { hi: 'टेक्स्ट (string)', hinglish: 'text (string)' },
  ],
  [
    'integer',
    { hi: 'पूर्ण संख्या', hinglish: 'whole number' },
  ],
  [
    'float',
    { hi: 'दशमलव संख्या', hinglish: 'decimal number' },
  ],
  [
    'boolean',
    { hi: 'सही/गलत (boolean)', hinglish: 'true/false (boolean)' },
  ],
  [
    'indentation',
    { hi: 'हाशिया', hinglish: 'indentation' },
  ],
  [
    'Indentation',
    { hi: 'हाशिया', hinglish: 'Indentation' },
  ],
  [
    'statements',
    { hi: 'statements (आदेश)', hinglish: 'statements' },
  ],
  [
    'block of code',
    { hi: 'code का block', hinglish: 'code ka block' },
  ],
  [
    'blocks of code',
    { hi: 'code के blocks', hinglish: 'code ke blocks' },
  ],
]

function normalize(s) {
  return s.replace(/\r\n/g, '\n').replace(/\s+/g, ' ').trim()
}

function translateLine(line, locale) {
  if (!line.trim() || locale === 'en') return line
  const exact = EXACT[normalize(line)]
  if (exact?.[locale]) return exact[locale]

  let out = line
  for (const [en, tr] of PHRASES) {
    if (out.includes(en)) out = out.split(en).join(tr[locale])
  }
  return out
}

/** Translate markdown source before HTML conversion */
export function translateMarkdown(md, locale) {
  if (!md || locale === 'en') return md

  const norm = md.replace(/\r\n/g, '\n').trim()
  const exactBlock = EXACT[norm]
  if (exactBlock?.[locale]) return exactBlock[locale]

  const lines = md.replace(/\r\n/g, '\n').split('\n')
  return lines.map((line) => translateLine(line, locale)).join('\n')
}

export { LOCALES as REF_LOCALES }
