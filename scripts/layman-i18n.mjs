/**
 * Hindi & Hinglish text for lessons (English stays in layman-content.mjs).
 */

import {
  translateGlossary,
  translatePhrase,
  translateSteps,
} from './glossary-i18n.mjs'

export const MODULE_I18N = {
  'python-basics': {
    hi: {
      moduleIntro:
        'यहाँ से शुरू करें अगर आपने कभी कोड नहीं लिखा। रोज़मर्रा के उदाहरण — बिना समझाए जargon नहीं।',
      fallbackAnalogy: 'Python एक सहायक की तरह है जो आपके लिखे कदम बिल्कुल वैसे ही निभाता है।',
    },
    hinglish: {
      moduleIntro:
        'Yahan se shuru karo agar kabhi code nahi likha. Daily life examples — bina samjhaye jargon nahi.',
      fallbackAnalogy: 'Python ek helper jaisa hai jo tumhare steps bilkul waise follow karta hai.',
    },
  },
  'control-flow': {
    hi: {
      moduleIntro: 'प्रोग्राम को फैसला और दोहराव सिखाएँ — जैसे रोज़ की आदतें।',
      fallbackAnalogy: 'मौसम देखकर छाता या धूप का चश्मा — code भी ऐसे रास्ता चुनता है।',
    },
    hinglish: {
      moduleIntro: 'Program ko decision aur repeat sikhate hain — daily habits jaisa.',
      fallbackAnalogy: 'Weather dekh ke umbrella ya sunglasses — code bhi path choose karta hai.',
    },
  },
  'data-structures': {
    hi: {
      moduleIntro: 'कई values एक साथ रखने के तरीके — सूची, contacts, unique items।',
      fallbackAnalogy: 'लेबल वाले डिब्बे, नंबर वाली अलमारी, और थैले।',
    },
    hinglish: {
      moduleIntro: 'Kaafi values ek saath store karna — list, contacts, unique cheezein.',
      fallbackAnalogy: 'Label wale boxes, numbered shelves, aur bags.',
    },
  },
  functions: {
    hi: {
      moduleIntro: 'एक बार recipe लिखो, बार-बार इस्तेमाल — functions दोहराव बचाते हैं।',
      fallbackAnalogy: 'Pizza order button — har baar same steps।',
    },
    hinglish: {
      moduleIntro: 'Ek baar recipe likho, baar baar use — functions repetition bachate hain.',
      fallbackAnalogy: 'Pizza button — har baar same steps.',
    },
  },
  modules: {
    hi: {
      moduleIntro: 'दूसरों का code इस्तेमाल — जैसे phone apps जो आपने नहीं बनाईं।',
      fallbackAnalogy: 'Shared toolbox से tool उधार।',
    },
    hinglish: {
      moduleIntro: 'Dusron ka code use karo — jaise phone apps jo tumne nahi banayi.',
      fallbackAnalogy: 'Shared toolbox se tool borrow.',
    },
  },
  'file-handling': {
    hi: {
      moduleIntro: 'फ़ाइल में notes save/read — बाद में काम आता है; यहाँ छोटे examples।',
      fallbackAnalogy: 'डायरी में लिखकर बाद में पढ़ना।',
    },
    hinglish: {
      moduleIntro: 'File mein notes save/read — baad mein kaam aata hai; yahan chhote examples.',
      fallbackAnalogy: 'Diary mein likh ke baad mein padhna.',
    },
  },
  'exception-handling': {
    hi: {
      moduleIntro: 'गलती हो तो शांति से संभालें — crash नहीं।',
      fallbackAnalogy: 'Plan B — "यह fail हो तो वह करो"।',
    },
    hinglish: {
      moduleIntro: 'Galti ho to calmly handle — crash nahi.',
      fallbackAnalogy: 'Plan B — "ye fail ho to woh karo".',
    },
  },
  'class-and-objects': {
    hi: {
      moduleIntro: 'Data और actions एक साथ — बड़े apps में; धीरे-धीरे, examples से।',
      fallbackAnalogy: 'Contact card: naam, phone, call button।',
    },
    hinglish: {
      moduleIntro: 'Data aur actions ek saath — bade apps mein; slow, examples se.',
      fallbackAnalogy: 'Contact card: name, phone, call button.',
    },
  },
  'advance-python-concepts': {
    hi: {
      moduleIntro: 'बाद के power tools — iterators, generators, decorators।',
      fallbackAnalogy: 'Advanced kitchen gadgets — pehle simple khana seekho।',
    },
    hinglish: {
      moduleIntro: 'Baad ke power tools — iterators, generators, decorators.',
      fallbackAnalogy: 'Advanced kitchen gadgets — pehle simple cooking.',
    },
  },
  'data-analysis-with-python': {
    hi: {
      moduleIntro: 'Excel जैसा काम code से — data jobs के लिए।',
      fallbackAnalogy: 'Excel on steroids — tables sort/chart।',
    },
    hinglish: {
      moduleIntro: 'Excel jaisa kaam code se — data jobs ke liye.',
      fallbackAnalogy: 'Excel on steroids — tables sort/chart.',
    },
  },
  'working-with-databases': {
    hi: {
      moduleIntro: 'Data tables में organized — digital filing cabinet।',
      fallbackAnalogy: 'School register: har student ek row।',
    },
    hinglish: {
      moduleIntro: 'Data tables mein organized — digital filing cabinet.',
      fallbackAnalogy: 'School register: har student ek row.',
    },
  },
  'logging-in-python': {
    hi: {
      moduleIntro: 'Program chalते समय notes — bugs ढूँढने में मदद।',
      fallbackAnalogy: 'Diary: started, finished, error yahan।',
    },
    hinglish: {
      moduleIntro: 'Program chalte waqt notes — bugs dhundhne mein help.',
      fallbackAnalogy: 'Diary: started, finished, error yahan.',
    },
  },
  flask: {
    hi: {
      moduleIntro: 'Python से websites — overview; full app PC पर बाद में।',
      fallbackAnalogy: 'Waiter: order (request) → page (response)।',
    },
    hinglish: {
      moduleIntro: 'Python se websites — overview; full app PC par baad mein.',
      fallbackAnalogy: 'Waiter: order (request) → page (response).',
    },
  },
  streamlit: {
    hi: {
      moduleIntro: 'जल्दी dashboards — बिना HTML/CSS।',
      fallbackAnalogy: 'Sirf Python scripts se mini app builder।',
    },
    hinglish: {
      moduleIntro: 'Jaldi dashboards — bina HTML/CSS.',
      fallbackAnalogy: 'Sirf Python scripts se mini app builder.',
    },
  },
  'memory-management': {
    hi: {
      moduleIntro: 'Python memory कैसे use करता है — day one पर ज़रूरी नहीं।',
      fallbackAnalogy: 'Desk saaf karke nayi jagah।',
    },
    hinglish: {
      moduleIntro: 'Python memory ka use — day one par zaroori nahi.',
      fallbackAnalogy: 'Desk clean karke nayi jagah.',
    },
  },
  'multithreading-and-multiprocessing': {
    hi: {
      moduleIntro: 'एक साथ कई tasks — advanced; पहले idea, code local।',
      fallbackAnalogy: 'Ek kitchen mein kai chefs vs ek chef।',
    },
    hinglish: {
      moduleIntro: 'Ek saath kai tasks — advanced; pehle idea, code local.',
      fallbackAnalogy: 'Ek kitchen mein kai chefs vs ek chef.',
    },
  },
}

/** Per-lesson overrides: { hi: {...}, hinglish: {...} } — partial fields merge over generic */
export const LESSON_I18N = {
  'python-basics--1-0-basic': {
    hi: {
      goal: 'पहली Python lines चलाएँ और तुरंत output देखें — अनुभव की जरूरत नहीं।',
      plain:
        'Program निर्देशों की सूची है। Python ऊपर से नीचे पढ़ता है। `print` screen पर text दिखाता है — खुद को message भेजने जैसा।',
      analogy: 'दोस्त को voice notes: पहला hello, दूसरा naam।',
      steps: ['नीचे Run दबाएँ', 'quotes के अंदर text बदलें', 'फिर Run — output बदलेगा'],
      glossary: [
        { term: 'print()', def: 'Screen पर text दिखाता है' },
        { term: 'Program', def: 'कंप्यूटर के लिए निर्देशों की सूची' },
      ],
    },
    hinglish: {
      goal: 'Pehli Python lines chalao aur turant output dekho — experience ki zaroorat nahi.',
      plain:
        'Program instructions ki list hai. Python upar se neeche padhta hai. `print` screen par text dikhata hai — khud ko message bhejne jaisa.',
      analogy: 'Dost ko voice notes: pehla hello, doosra naam.',
      steps: ['Neeche Run dabao', 'quotes ke andar text badlo', 'phir Run — output badlega'],
      glossary: [
        { term: 'print()', def: 'Screen par text dikhata hai' },
        { term: 'Program', def: 'Computer ke liye instructions ki list' },
      ],
    },
  },
  'python-basics--1-1-variables': {
    hi: {
      goal: 'नाम वाले box (variables) में जानकारी रखें और बाद में use करें।',
      plain: 'Variable एक label है। अंदर naam, number या ha/na — बाद में label से use।',
      analogy: 'Sticky note: `age = 25` — baar baar 25 mat likho।',
      steps: ['Example Run karo', 'naam/umar badlo', 'dono print karo'],
      glossary: [
        { term: 'Variable', def: 'Value रखने की जगह' },
        { term: '=', def: 'Value box mein daalna' },
      ],
    },
    hinglish: {
      goal: 'Naam wale box (variables) mein info rakho aur baad mein use karo.',
      plain: 'Variable ek label hai. Andar naam, number ya ha/na — baad mein label se use.',
      analogy: 'Sticky note: `age = 25` — baar baar 25 mat likho.',
      steps: ['Example Run karo', 'name/age badlo', 'dono print karo'],
      glossary: [
        { term: 'Variable', def: 'Value rakhne ki jagah' },
        { term: '=', def: 'Value box mein daalna' },
      ],
    },
  },
  'python-basics--1-2-datatypes': {
    hi: {
      goal: 'Data ke main types: text, पूर्ण संख्या, decimal, सही/गलत।',
      plain: 'Text quotes में। पूर्ण संख्या गिनती। Decimal माप। True/False हाँ/ना।',
      analogy: 'Form: naam (text), quantity (number), paid? (yes/no)।',
      glossary: [
        { term: 'str', def: 'Text — hamesha quotes' },
        { term: 'int / float', def: 'संख्या — decimal ke saath ya bina' },
        { term: 'bool', def: 'Sirf True ya False' },
      ],
    },
    hinglish: {
      goal: 'Data ke main types: text, whole number, decimal, true/false.',
      plain: 'Text quotes mein. Whole number counting. Decimal measure. True/False haan/na.',
      analogy: 'Form: naam (text), quantity (number), paid? (yes/no).',
      glossary: [
        { term: 'str', def: 'Text — hamesha quotes' },
        { term: 'int / float', def: 'Number — decimal ke saath ya bina' },
        { term: 'bool', def: 'Sirf True ya False' },
      ],
    },
  },
  'python-basics--1-3-operators': {
    hi: {
      goal: 'गणित और तुलना — बड़ा, बराबर, आदि।',
      plain: '+ - * / जैसे कैलकुलेटर। == से बराबर? > < से तुलना।',
      analogy: 'खरीदारी: कुल राशि, बजट से ज़्यादा?, ठीक 400?',
      glossary: [
        { term: '== (बराबर?)', def: 'दोनों पक्ष बराबर हैं या नहीं' },
        { term: '> (बड़ा?)', def: 'बाईं संख्या दाईं से बड़ी है या नहीं' },
      ],
    },
    hinglish: {
      goal: 'Math aur compare — bada, barabar, etc.',
      plain: '+ - * / calculator jaisa. == se barabar? > < se compare.',
      analogy: 'Shopping: total, budget se zyada?, exactly 400?',
      glossary: [
        { term: '== (barabar?)', def: 'Dono side barabar hain ya nahi' },
        { term: '> (bada?)', def: 'Left number right se badi hai ya nahi' },
      ],
    },
  },
  'control-flow--conditionalstatements': {
    hi: {
      goal: 'शर्त सच हो तो अलग कोड — if/else।',
      plain: '`if` तब चले जब जाँच सच हो। `else` वैकल्पिक रास्ता। अंदर की लाइनें हाशिये (indent) से।',
      analogy: 'बारिश हो तो छाता, नहीं तो धूप का चश्मा।',
      steps: ['चलाएँ दबाएँ', 'अंक 45 करके देखें', 'फिर दोबारा चलाएँ'],
      glossary: [
        { term: 'if / else', def: 'सच हो तो एक काम, नहीं तो दूसरा' },
        { term: 'इंडेंट', def: 'लाइन की शुरुआत के spaces — ब्लॉक दिखाते हैं' },
      ],
    },
    hinglish: {
      goal: 'Condition sach ho to alag code — if/else.',
      plain: '`if` tab chale jab check sach ho. `else` backup raasta. Andar ki lines indent se.',
      analogy: 'Baarish ho to umbrella, warna sunglasses.',
      steps: ['Run dabao', 'marks 45 karke dekho', 'phir dubara Run'],
      glossary: [
        { term: 'if / else', def: 'Sach ho to ek kaam, warna doosra' },
        { term: 'Indent', def: 'Line start ke spaces — block dikhate hain' },
      ],
    },
  },
  'control-flow--loops': {
    hi: {
      goal: 'Ek hi kaam baar-baar — copy-paste ki zaroorat nahi।',
      plain: '`for` list ke har item par. `range(5)` → 0,1,2,3,4।',
      analogy: 'Attendance sheet par har naam ek-ek karke।',
    },
    hinglish: {
      goal: 'Same kaam baar-baar — copy paste ki zaroorat nahi.',
      plain: '`for` list ke har item par. `range(5)` → 0,1,2,3,4.',
      analogy: 'Attendance sheet par har naam ek ek karke.',
    },
  },
}

export function getModuleIntroI18n(moduleId, locale) {
  const mod = MODULE_I18N[moduleId]
  if (!mod) return null
  return locale === 'hi' ? mod.hi?.moduleIntro : locale === 'hinglish' ? mod.hinglish?.moduleIntro : null
}

export function getFallbackAnalogyI18n(moduleId, locale) {
  const mod = MODULE_I18N[moduleId]
  if (!mod) return null
  return locale === 'hi' ? mod.hi?.fallbackAnalogy : locale === 'hinglish' ? mod.hinglish?.fallbackAnalogy : null
}

function localizedTitle(title, locale) {
  const T = {
    Basic: { hi: 'बुनियाद', hinglish: 'Basics' },
    Variables: { hi: 'वेरिएबल', hinglish: 'Variables' },
    Datatypes: { hi: 'डेटा के प्रकार', hinglish: 'Data types' },
    Operators: { hi: 'ऑपरेटर', hinglish: 'Operators' },
    Lists: { hi: 'सूची (Lists)', hinglish: 'Lists' },
    Functions: { hi: 'फ़ंक्शन', hinglish: 'Functions' },
    Loops: { hi: 'लूप', hinglish: 'Loops' },
  }
  return T[title]?.[locale] || title
}

export function mergeLocaleText(en, locale, lessonId, moduleId, title) {
  if (locale === 'en') {
    return {
      goal: en.goal,
      plain: en.plain,
      analogy: en.analogy,
      steps: en.steps,
      glossary: en.glossary,
    }
  }

  const override = LESSON_I18N[lessonId]?.[locale] || {}
  const modAnalogy = getFallbackAnalogyI18n(moduleId, locale)
  const tTitle = localizedTitle(title, locale)

  const goal =
    override.goal ||
    translatePhrase(en.goal, locale) ||
    (locale === 'hi'
      ? `${tTitle} — आसान भाषा में समझें।`
      : `${tTitle} — simple words mein seekho.`)

  const plain =
    override.plain ||
    translatePhrase(en.plain, locale) ||
    (locale === 'hi'
      ? `इस पाठ में ${tTitle} सिखाया गया है। पहले छोटा उदाहरण चलाएँ, फिर नीचे विस्तृत नोट्स पढ़ें।`
      : `Is lesson mein ${tTitle} cover hoga. Pehle chhota example Run karo, phir niche detail notes padho.`)

  const analogy =
    override.analogy || translatePhrase(en.analogy, locale) || modAnalogy ||
    (locale === 'hi'
      ? 'रोज़मर्रा की आदत जैसे — पहले सरल, फिर गहरा।'
      : 'Daily life jaisa — pehle simple, phir deep.')

  const steps =
    override.steps ||
    translateSteps(en.steps, locale) ||
    (locale === 'hi'
      ? ['ऊपर पढ़ें', 'आसान उदाहरण चलाएँ', 'नीचे संदर्भ नोट्स (वैकल्पिक)']
      : ['Upar padho', 'Aasan example Run karo', 'Niche reference notes (optional)'])

  const glossary = translateGlossary(override.glossary ?? en.glossary, locale)

  return { goal, plain, analogy, steps, glossary }
}

export function genericSteps(locale) {
  if (locale === 'hi')
    return ['ऊपर पढ़ें', 'आसान example Run करें', 'नीचे reference notes (वैकल्पिक)']
  if (locale === 'hinglish')
    return ['Upar padho', 'Easy example Run karo', 'Niche reference notes (optional)']
  return ['Read explanation', 'Run easy example', 'Skim reference notes if curious']
}
