/**
 * End-of-lesson practice challenges — validated by expected stdout in browser.
 */

const CHALLENGE_I18N = {
  en: {
    sectionTitle: 'Practice test — try yourself',
    sectionSub: 'Write code, press Check. Wrong answer shows the correct code to copy & run.',
    check: 'Check answer',
    checking: 'Checking…',
    correct: 'Correct! Well done.',
    wrong: 'Not quite right. See the correct answer below, copy it, run again.',
    solutionTitle: 'Correct answer (copy & run)',
    copy: 'Copy code',
    copied: 'Copied!',
    yourOutput: 'Your output',
    noOutput: '(no output)',
    hintLabel: 'Hint',
    pasteInEditor: 'Paste in editor',
  },
  hi: {
    sectionTitle: 'अभ्यास प्रश्न — खुद करके देखें',
    sectionSub: 'कोड लिखें, जाँचें दबाएँ। गलत होने पर सही कोड नीचे मिलेगा — कॉपी करके चलाएँ।',
    check: 'जवाब जाँचें',
    checking: 'जाँच हो रही है…',
    correct: 'सही! बहुत अच्छे।',
    wrong: 'अभी सही नहीं। नीचे सही कोड है — कॉपी करके दोबारा चलाएँ।',
    solutionTitle: 'सही जवाब (कॉपी करके चलाएँ)',
    copy: 'कोड कॉपी करें',
    copied: 'कॉपी हो गया!',
    yourOutput: 'आपका परिणाम',
    noOutput: '(कोई परिणाम नहीं)',
    hintLabel: 'संकेत',
    pasteInEditor: 'एडिटर में पेस्ट करें',
  },
  hinglish: {
    sectionTitle: 'Practice test — khud try karo',
    sectionSub: 'Code likho, Check dabao. Galat hua to sahi code niche milega — copy karke chalao.',
    check: 'Answer check karo',
    checking: 'Check ho raha hai…',
    correct: 'Sahi! Bahut badhiya.',
    wrong: 'Abhi sahi nahi. Niche correct code hai — copy karke dubara chalao.',
    solutionTitle: 'Correct answer (copy & run)',
    copy: 'Code copy karo',
    copied: 'Copy ho gaya!',
    yourOutput: 'Tumhara output',
    noOutput: '(koi output nahi)',
    hintLabel: 'Hint',
    pasteInEditor: 'Editor mein paste karo',
  },
}

/** @type {Record<string, { en: object; hi?: object; hinglish?: object }>} */
export const CHALLENGES = {
  'python-basics--1-0-basic': {
    en: {
      question: 'Print exactly two lines:\n1) Hello, Python!\n2) I am learning to code',
      hint: 'Use two print() statements.',
      starterCode: '# Write your code here\n',
      solution: 'print("Hello, Python!")\nprint("I am learning to code")',
      expectedOutput: 'Hello, Python!\nI am learning to code',
    },
    hi: {
      question: 'ठीक दो lines print करें:\n1) Hello, Python!\n2) I am learning to code',
      hint: 'दो print() statements लिखें।',
    },
    hinglish: {
      question: 'Exactly do lines print karo:\n1) Hello, Python!\n2) I am learning to code',
      hint: 'Do print() statements likho.',
    },
  },
  'python-basics--1-1-variables': {
    en: {
      question: 'Create name = "Anshul" and age = 22, then print: Name: Anshul and Age: 22 (use your variables).',
      hint: 'print("Name:", name)',
      starterCode: 'name = \nage = \n# print below\n',
      solution: 'name = "Anshul"\nage = 22\nprint("Name:", name)\nprint("Age:", age)',
      expectedOutput: 'Name: Anshul\nAge: 22',
    },
    hi: {
      question: 'name = "Anshul" और age = 22 बनाएँ, फिर print करें: Name: Anshul और Age: 22',
      hint: 'print("Name:", name) इस्तेमाल करें',
    },
    hinglish: {
      question: 'name = "Anshul" aur age = 22 banao, phir print: Name: Anshul aur Age: 22',
      hint: 'print("Name:", name) use karo',
    },
  },
  'python-basics--1-2-datatypes': {
    en: {
      question: 'item = "Pen", qty = 2, price = 25. Print one line: Pen x 2 = 50',
      hint: 'Use qty * price for total.',
      starterCode: 'item = \nqty = \nprice = \n',
      solution: 'item = "Pen"\nqty = 2\nprice = 25\nprint(item, "x", qty, "=", qty * price)',
      expectedOutput: 'Pen x 2 = 50',
    },
    hi: { question: 'item="Pen", qty=2, price=25. एक line print: Pen x 2 = 50', hint: 'total = qty * price' },
    hinglish: { question: 'item="Pen", qty=2, price=25. Ek line print: Pen x 2 = 50', hint: 'total = qty * price' },
  },
  'python-basics--1-3-operators': {
    en: {
      question: 'a=15, b=4. Print sum and product on separate lines (Sum: 19, Product: 60).',
      starterCode: 'a = 15\nb = 4\n',
      solution: 'a = 15\nb = 4\nprint("Sum:", a + b)\nprint("Product:", a * b)',
      expectedOutput: 'Sum: 19\nProduct: 60',
    },
    hi: { question: 'a=15, b=4. जोड़ और गुणा अलग lines पर print करें' },
    hinglish: { question: 'a=15, b=4. Sum aur product alag lines par print karo' },
  },
  'control-flow--conditionalstatements': {
    en: {
      question: 'marks = 55. If marks >= 50 print Pass, else print Fail.',
      starterCode: 'marks = 55\n',
      solution: 'marks = 55\nif marks >= 50:\n    print("Pass")\nelse:\n    print("Fail")',
      expectedOutput: 'Pass',
    },
    hi: { question: 'marks = 55. अगर >= 50 तो Pass, नहीं तो Fail print करें' },
    hinglish: { question: 'marks = 55. Agar >= 50 to Pass, warna Fail print karo' },
  },
  'control-flow--loops': {
    en: {
      question: 'Print numbers 1 to 3, each on its own line (use a for loop).',
      starterCode: '# for loop here\n',
      solution: 'for i in range(1, 4):\n    print(i)',
      expectedOutput: '1\n2\n3',
    },
    hi: { question: '1 से 3 तक हर संख्या अलग line पर print (for loop)' },
    hinglish: { question: '1 se 3 tak har number alag line par print (for loop)' },
  },
  'data-structures--3-1-lists': {
    en: {
      question: 'Create list colors = ["red","green","blue"]. Print the first color.',
      starterCode: 'colors = \n',
      solution: 'colors = ["red", "green", "blue"]\nprint(colors[0])',
      expectedOutput: 'red',
    },
    hi: { question: 'colors = ["red","green","blue"] बनाएँ। पहला रंग print करें' },
    hinglish: { question: 'colors list banao. Pehla color print karo' },
  },
  'data-structures--3-4-dictionaries': {
    en: {
      question: 'student = {"name":"Anshul","city":"Dehradun"}. Print the city.',
      starterCode: 'student = {"name": "Anshul", "city": "Dehradun"}\n',
      solution: 'student = {"name": "Anshul", "city": "Dehradun"}\nprint(student["city"])',
      expectedOutput: 'Dehradun',
    },
    hi: { question: 'student dict से city print करें' },
    hinglish: { question: 'student dict se city print karo' },
  },
  'functions--4-1-functions': {
    en: {
      question: 'Write function greet(name) that prints Hello, <name>! Then call greet("Rish").',
      starterCode: 'def greet(name):\n    \n\n',
      solution: 'def greet(name):\n    print("Hello,", name + "!")\n\ngreet("Rish")',
      expectedOutput: 'Hello, Rish!',
    },
    hi: { question: 'greet(name) function बनाएँ, greet("Rish") चलाएँ' },
    hinglish: { question: 'greet(name) function banao, greet("Rish") call karo' },
  },
  'data-structures--3-2-tuples': {
    en: {
      question: 't = ("Python", 3). Print the first item of the tuple.',
      starterCode: 't = ("Python", 3)\n',
      solution: 't = ("Python", 3)\nprint(t[0])',
      expectedOutput: 'Python',
    },
    hi: { question: 'tuple t ka pehla item print karo' },
    hinglish: { question: 'tuple t ka pehla item print karo' },
  },
  'data-structures--3-3-sets': {
    en: {
      question: 's = {1, 2, 2, 3}. Print len(s) — should be 3 unique items.',
      starterCode: 's = {1, 2, 2, 3}\n',
      solution: 's = {1, 2, 2, 3}\nprint(len(s))',
      expectedOutput: '3',
    },
    hi: { question: 'set ki length print karo (unique count)' },
    hinglish: { question: 'set ki length print karo' },
  },
  'functions--4-3-lambda': {
    en: {
      question: 'Use lambda to double 7 and print the result (should print 14).',
      starterCode: 'double = lambda x: \n',
      solution: 'double = lambda x: x * 2\nprint(double(7))',
      expectedOutput: '14',
    },
    hi: { question: 'lambda se 7 ko double karke print karo (14)' },
    hinglish: { question: 'lambda se 7 double karke print (14)' },
  },
  'exception-handling--7-1-exception': {
    en: {
      question: 'Try to divide 10 by 0. In except, print Cannot divide.',
      starterCode: 'try:\n    \nexcept ZeroDivisionError:\n    ',
      solution: 'try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print("Cannot divide")',
      expectedOutput: 'Cannot divide',
    },
    hi: { question: '10/0 try karo, except mein Cannot divide print' },
    hinglish: { question: '10/0 try karo, except mein Cannot divide print' },
  },
  'class-and-objects--8-1-oops': {
    en: {
      question: 'Class Dog with speak() printing Woof!. Create Dog() and call speak().',
      starterCode: 'class Dog:\n    def speak(self):\n        \n\n',
      solution: 'class Dog:\n    def speak(self):\n        print("Woof!")\n\nDog().speak()',
      expectedOutput: 'Woof!',
    },
    hi: { question: 'Dog class speak() -> Woof! print' },
    hinglish: { question: 'Dog class speak() -> Woof! print' },
  },
}

function mergeChallenge(locale, id, title) {
  const base = CHALLENGES[id]?.en
  const loc = CHALLENGES[id]?.[locale]
  const ui = CHALLENGE_I18N[locale]

  if (base) {
    return {
      ...ui,
      question: loc?.question || base.question,
      hint: loc?.hint || base.hint,
      starterCode: base.starterCode,
      solution: base.solution,
      expectedOutput: base.expectedOutput,
    }
  }

  // Generic fallback per lesson
  const safe = title.replace(/"/g, '')
  if (locale === 'hi') {
    return {
      ...ui,
      question: `"${safe}" सीखा — print() से यह दिखाएँ: Done: ${safe}`,
      hint: 'print("Done: ...") इस्तेमाल करें',
      starterCode: '# अपना कोड यहाँ\n',
      solution: `print("Done: ${safe}")`,
      expectedOutput: `Done: ${safe}`,
    }
  }
  if (locale === 'hinglish') {
    return {
      ...ui,
      question: `"${safe}" seekha — print() se dikhao: Done: ${safe}`,
      hint: 'print("Done: ...") use karo',
      starterCode: '# Apna code yahan\n',
      solution: `print("Done: ${safe}")`,
      expectedOutput: `Done: ${safe}`,
    }
  }
  return {
    ...ui,
    question: `You learned "${safe}". Use print() to show: Done: ${safe}`,
    hint: 'Use one print() with the exact text.',
    starterCode: '# Your code here\n',
    solution: `print("Done: ${safe}")`,
    expectedOutput: `Done: ${safe}`,
  }
}

export function buildChallengeBlock(lessonId, title) {
  const translations = {}
  for (const locale of ['en', 'hi', 'hinglish']) {
    translations[locale] = mergeChallenge(locale, lessonId, title)
  }
  return { type: 'challenge', translations }
}
