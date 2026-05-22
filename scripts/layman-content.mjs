/**
 * Beginner-friendly layer for each lesson — plain language + easy runnable examples.
 * Bootcamp notebooks stay below as optional reference.
 * Supports en / hi / hinglish via layman-i18n.mjs
 */

import {
  getModuleIntroI18n,
  mergeLocaleText,
} from './layman-i18n.mjs'
import { sanitizeNames } from './sanitize-names.mjs'
import { localizeStarterCode } from './glossary-i18n.mjs'
import { buildChallengeBlock } from './challenges.mjs'

const LOCALES = ['en', 'hi', 'hinglish']

const MODULE_DEFAULTS = {
  'python-basics': {
    moduleIntro:
      'Start here if you have never coded. We use everyday examples — no jargon without explanation.',
    fallbackAnalogy: 'Python is like a helpful assistant that follows your written steps exactly.',
  },
  'control-flow': {
    moduleIntro: 'Learn how programs make decisions and repeat tasks — like daily habits.',
    fallbackAnalogy: 'Code can choose paths, like deciding umbrella or sunglasses based on weather.',
  },
  'data-structures': {
    moduleIntro: 'Ways to store many values together — shopping lists, contacts, unique items.',
    fallbackAnalogy: 'Think of labeled boxes, numbered shelves, and bags that hold groups of things.',
  },
  functions: {
    moduleIntro: 'Write a recipe once, use it many times — functions save repetition.',
    fallbackAnalogy: 'Like a pizza order button: same steps every time you press it.',
  },
  modules: {
    moduleIntro: 'Reuse code others wrote — like apps on your phone you did not build yourself.',
    fallbackAnalogy: 'Borrowing tools from a shared toolbox instead of making every tool from scratch.',
  },
  'file-handling': {
    moduleIntro: 'Save and read notes in files — useful later; we keep examples tiny here.',
    fallbackAnalogy: 'Like writing in a diary and reading it back later.',
  },
  'exception-handling': {
    moduleIntro: 'When something goes wrong, handle it calmly instead of crashing.',
    fallbackAnalogy: 'Like a backup plan when plans change — "if this fails, do that instead".',
  },
  'class-and-objects': {
    moduleIntro: 'Group data and actions together — used in bigger apps; go slow, use analogies.',
    fallbackAnalogy: 'A contact card: name, phone, and buttons to call or message.',
  },
  'advance-python-concepts': {
    moduleIntro: 'Power tools for later — iterators, generators, decorators. Skim if new; revisit anytime.',
    fallbackAnalogy: 'Advanced kitchen gadgets — nice once you already cook simple meals.',
  },
  'data-analysis-with-python': {
    moduleIntro: 'Spreadsheet-style work with code — for data jobs. Beginners: read concepts, run small examples.',
    fallbackAnalogy: 'Excel on steroids — tables of numbers you can sort and chart.',
  },
  'working-with-databases': {
    moduleIntro: 'Store data in organized tables — like a digital filing cabinet.',
    fallbackAnalogy: 'Rows in a school register: each student is one row, columns are name, class, marks.',
  },
  'logging-in-python': {
    moduleIntro: 'Leave notes while programs run — helps find bugs in real projects.',
    fallbackAnalogy: 'A diary your program writes: "started", "finished", "error here".',
  },
  flask: {
    moduleIntro: 'Build websites with Python — read for overview; run full apps on your computer later.',
    fallbackAnalogy: 'A waiter taking orders (requests) and bringing pages (responses).',
  },
  streamlit: {
    moduleIntro: 'Quick dashboards and demos — great for showing data without HTML/CSS.',
    fallbackAnalogy: 'Drag-and-drop style app builder using only Python scripts.',
  },
  'memory-management': {
    moduleIntro: 'How Python uses computer memory — conceptual; not needed on day one.',
    fallbackAnalogy: 'Cleaning your desk so you have space for new work.',
  },
  'multithreading-and-multiprocessing': {
    moduleIntro: 'Do many tasks at once — advanced; understand ideas first, code locally later.',
    fallbackAnalogy: 'Several chefs in one kitchen vs one chef doing everything alone.',
  },
}

/** @type {Record<string, object>} */
export const LESSON_LAYMAN = {
  'python-basics--1-0-basic': {
    goal: 'Run your first Python lines and see instant output — zero experience needed.',
    plain:
      'A program is a list of instructions. Python reads from top to bottom. `print` simply shows text on screen — like sending a message to yourself.',
    analogy: 'Like voice notes to a friend: first note says hello, second says your name.',
    steps: ['Press Run on the easy example', 'Change the text inside quotes', 'Run again and watch output change'],
    starterCode: `# Step 1: Run this (green Run button)\nprint("Hello! I am new to coding")\nprint("Python is just instructions, line by line")\n\n# Step 2: Change the words above, then Run again`,
    glossary: [
      { term: 'print()', def: 'Shows text on the screen' },
      { term: 'Program', def: 'A saved list of instructions for the computer' },
    ],
  },
  'python-basics--1-1-variables': {
    goal: 'Store information in named boxes (variables) and use them later.',
    plain:
      'A variable is a label on a box. You put a value inside — a name, number, or yes/no — and reuse it by the label name.',
    analogy: 'Sticky notes: one says `age = 25`, later you read the note instead of rewriting 25 everywhere.',
    steps: ['Run the example', 'Change name and age', 'Add a third print combining both'],
    starterCode: `name = "Asha"\nage = 22\nis_student = True\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Student?", is_student)`,
    glossary: [
      { term: 'Variable', def: 'A named place to store a value' },
      { term: '=', def: 'Puts a value into the variable (not math "equals" here)' },
    ],
  },
  'python-basics--1-2-datatypes': {
    goal: 'Know the main kinds of data: text, whole numbers, decimals, and true/false.',
    plain:
      'Text uses quotes. Whole numbers count things. Decimals measure things. True/False answer yes-or-no questions.',
    analogy: 'Form fields: name (text), quantity (number), paid? (yes/no).',
    starterCode: `item = "Notebook"      # text (str)\nqty = 3                # whole number (int)\nprice = 49.5           # decimal (float)\nin_stock = True        # yes/no (bool)\n\nprint(item, "x", qty, "=", qty * price, "rupees")`,
    glossary: [
      { term: 'str', def: 'Text — always in quotes' },
      { term: 'int / float', def: 'Numbers — with or without decimal point' },
      { term: 'bool', def: 'True or False only' },
    ],
  },
  'python-basics--1-3-operators': {
    goal: 'Do math and compare values — greater than, equal to, etc.',
    plain:
      'Use + - * / like a calculator. Use == to check equality and > < to compare. Result is often True or False.',
    analogy: 'Shopping: total price, "is total over budget?", "is discount exactly 10?"',
    starterCode: `budget = 500\ntotal = 320 + 80\n\nprint("Total:", total)\nprint("Under budget?", total < budget)\nprint("Exactly 400?", total == 400)`,
    glossary: [
      { term: '==', def: 'Checks if two values are equal' },
      { term: '>', def: 'Checks if left side is bigger' },
    ],
  },
  'control-flow--conditionalstatements': {
    goal: 'Make the computer choose different actions based on a condition.',
    plain:
      '`if` runs code only when a test is true. `else` is the backup when it is false. Indentation (spaces) shows what belongs inside.',
    analogy: 'If rain → take umbrella, else → take sunglasses.',
    starterCode: `marks = 72\n\nif marks >= 60:\n    print("Pass — well done!")\nelse:\n    print("Need more practice")\n\n# Try: change marks to 45 and Run again`,
    glossary: [
      { term: 'if / else', def: 'Two paths — one runs when test is true, other when false' },
      { term: 'Indent', def: 'Spaces at start of line — shows code inside if/else' },
    ],
  },
  'control-flow--loops': {
    goal: 'Repeat actions without copying the same lines many times.',
    plain:
      '`for` repeats for each item in a list. `range(5)` gives 0,1,2,3,4 — useful for "do this 5 times".',
    analogy: 'Checking off each name on an attendance sheet one by one.',
    starterCode: `fruits = ["apple", "banana", "mango"]\n\nfor fruit in fruits:\n    print("I like", fruit)\n\nprint("---")\nfor i in range(3):\n    print("Repeat number", i)`,
    glossary: [
      { term: 'for loop', def: 'Runs once per item in a collection' },
      { term: 'range()', def: 'Generates a sequence of numbers' },
    ],
  },
  'data-structures--3-1-lists': {
    goal: 'Store many values in one ordered list — add, remove, change items.',
    plain: 'A list keeps order: first item, second item… Use square brackets `[]`. Index 0 is the first item.',
    analogy: 'A numbered shopping list you can edit — add at end, cross one off, change item 2.',
    starterCode: `tasks = ["Wake up", "Study Python", "Walk"]\nprint("First task:", tasks[0])\ntasks.append("Sleep")\nprint("All tasks:", tasks)`,
    glossary: [
      { term: 'list', def: 'Ordered collection in square brackets' },
      { term: 'append', def: 'Adds item at the end' },
    ],
  },
  'data-structures--3-1-1-listexamples': {
    goal: 'See real-life uses of lists — scores, names, prices.',
    plain: 'Lists shine when you have many similar things: exam scores, product prices, guest names.',
    analogy: 'Class test marks written in a column — average, highest, lowest are easy to loop over.',
    starterCode: `scores = [88, 92, 75, 90]\ntotal = 0\nfor s in scores:\n    total = total + s\nprint("Scores:", scores)\nprint("Average:", total / len(scores))`,
  },
  'data-structures--3-2-tuples': {
    goal: 'Use fixed pairs or records that should not change accidentally.',
    plain: 'Tuples use `()` and are like sealed lists — good for coordinates, (name, age) pairs.',
    analogy: 'A printed ID card: name and roll number fixed for the term.',
    starterCode: `student = ("Ravi", 21, "BSc")\nname, age, course = student\nprint(name, "is", age, "years old, studying", course)`,
    glossary: [{ term: 'tuple', def: 'Ordered, unchangeable group in parentheses' }],
  },
  'data-structures--3-3-sets': {
    goal: 'Keep unique items only — no duplicates.',
    plain: 'Sets drop duplicates automatically. Great for unique tags, unique visitors.',
    analogy: 'Guest list where same person signing twice still counts once.',
    starterCode: `tags = {"python", "beginner", "python", "free"}\nprint("Unique tags:", tags)\nprint("How many?", len(tags))`,
  },
  'data-structures--3-4-dictionaries': {
    goal: 'Look up values by a name (key) — like a phone contact book.',
    plain: 'Dictionary `{key: value}` — find phone by name, price by product code.',
    analogy: 'Contacts app: name → phone number.',
    starterCode: `contact = {"name": "Meera", "phone": "9876543210", "city": "Dehradun"}\nprint(contact["name"], "lives in", contact["city"])\ncontact["email"] = "meera@example.com"\nprint(contact)`,
    glossary: [
      { term: 'dict', def: 'Key → value pairs in curly braces' },
      { term: 'key', def: 'The label you look up' },
    ],
  },
  'functions--4-1-functions': {
    goal: 'Bundle steps into one reusable block with a name.',
    plain: 'Define with `def name():`, call with `name()`. Pass inputs in parentheses if needed.',
    analogy: 'Coffee machine button: same steps every morning, you only press "espresso".',
    starterCode: `def greet(person):\n    print("Hello,", person, "— welcome!")\n\ngreet("Student")\ngreet("Teacher")`,
    glossary: [
      { term: 'def', def: 'Starts a new function' },
      { term: 'return', def: 'Sends a result back to whoever called the function' },
    ],
  },
  'functions--4-2-examplesfunctions': {
    goal: 'Practice small useful functions — area, discount, grade.',
    plain: 'Functions keep logic tidy. Change inputs, same recipe runs again.',
    starterCode: `def discount(price, percent):\n    off = price * percent / 100\n    return price - off\n\nfinal = discount(1000, 10)\nprint("You pay:", final, "rupees")`,
  },
  'functions--4-3-lambda': {
    goal: 'One-line mini-functions for quick jobs.',
    plain: 'Lambda is shorthand when the logic fits in one expression — optional until comfortable with `def`.',
    analogy: 'Sticky note function instead of a full recipe card.',
    starterCode: `double = lambda x: x * 2\nprint(double(5))\nprint(double(10))`,
  },
  'functions--4-4-mapsfunction': {
    goal: 'Apply the same change to every item in a list.',
    plain: '`map` runs a function on each element — like converting every price to include tax.',
    starterCode: `prices = [100, 200, 50]\nwith_tax = list(map(lambda p: p * 1.18, prices))\nprint("With 18% tax:", with_tax)`,
  },
  'functions--4-5-filterfunction': {
    goal: 'Keep only items that pass a test.',
    plain: '`filter` keeps elements where your function returns True — like passing students only.',
    starterCode: `marks = [45, 78, 92, 33, 88]\npassed = list(filter(lambda m: m >= 60, marks))\nprint("Passed:", passed)`,
  },
  'modules--5-1-import': {
    goal: 'Use built-in or your own code files without rewriting.',
    plain: '`import math` brings ready-made tools. You call `math.sqrt(16)` instead of writing square root yourself.',
    starterCode: `import math\nprint("Square root of 16:", math.sqrt(16))\nprint("Pi is about:", round(math.pi, 2))`,
  },
  'modules--5-2-standardlibrary': {
    goal: 'Discover helpful built-in tools — random, dates, etc.',
    plain: 'Python ships with many libraries. You import only what you need.',
    starterCode: `import random\nprint("Random dice roll:", random.randint(1, 6))\nprint("Pick fruit:", random.choice(["apple", "banana"]))`,
  },
  'file-handling--6-1-fileoperation': {
    goal: 'Understand read/write files conceptually — full file demos need your computer.',
    plain: 'Programs can save text to a file and read it back. Paths and permissions matter on real disks.',
    analogy: 'Saving a note in Notes app and opening it tomorrow.',
    starterCode: `# Browser cannot access your disk — practice the idea:\nnote = "My study log for today"\nprint("Would save to file:", note)\nprint("On your PC you will use: open('diary.txt', 'w')")`,
    starterRunnable: true,
  },
  'file-handling--6-2-filepath': {
    goal: 'Know why folder paths matter when opening files.',
    plain: 'A path tells Python which folder and filename to use — like an address.',
    starterCode: `folder = "homework"\nfile = "essay.txt"\nfull_path = folder + "/" + file\nprint("Full path example:", full_path)`,
  },
  'exception-handling--7-1-exception': {
    goal: 'Handle mistakes gracefully with try / except.',
    plain: 'Sometimes code fails (divide by zero, bad input). `try` attempts work; `except` runs a safe backup.',
    analogy: 'Try to pay by card; if it fails, pay cash instead.',
    starterCode: `try:\n    a = 10\n    b = 0\n    print(a / b)\nexcept ZeroDivisionError:\n    print("Cannot divide by zero — use another number")`,
  },
  'class-and-objects--8-1-oops': {
    goal: 'Intro to classes — templates for objects with data + behavior.',
    plain: 'A class is a blueprint. An object is one real thing built from it — one student, one bank account.',
    analogy: 'Cookie cutter (class) vs each cookie (object).',
    starterCode: `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        print(self.name, "says Woof!")\n\npet = Dog("Bruno")\npet.speak()`,
  },
  'class-and-objects--8-2-inheritance': {
    goal: 'Reuse a parent class and extend it for special cases.',
    plain: 'Child class gets parent features plus new ones — `Animal` → `Dog` with extra bark.',
    starterCode: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        print(self.name, "barks")\n\nd = Dog("Max")\nd.speak()`,
  },
  'class-and-objects--8-3-polymorphism': {
    goal: 'Same action, different behavior per type.',
    plain: 'Different classes can share method names like `speak()` but do different things.',
    starterCode: `class Cat:\n    def speak(self):\n        print("Meow")\nclass Dog:\n    def speak(self):\n        print("Woof")\n\nfor animal in [Cat(), Dog()]:\n    animal.speak()`,
  },
  'class-and-objects--8-4-encapsulation': {
    goal: 'Hide internal details — expose only what is safe.',
    plain: 'Private-ish fields (leading `_`) mean "do not touch from outside unless through methods".',
    starterCode: `class BankAccount:\n    def __init__(self):\n        self._balance = 0\n    def deposit(self, amount):\n        self._balance += amount\n    def show(self):\n        print("Balance:", self._balance)\n\nacc = BankAccount()\nacc.deposit(100)\nacc.show()`,
  },
  'class-and-objects--8-5-abstraction': {
    goal: 'Focus on what something does, not every inner step.',
    plain: 'You press "Start" on a microwave without knowing all electronics inside.',
    starterCode: `class CoffeeMachine:\n    def make_coffee(self):\n        self._heat_water()\n        print("Coffee ready!")\n    def _heat_water(self):\n        print("(heating water...)")\n\nCoffeeMachine().make_coffee()`,
  },
  'class-and-objects--8-6-magicmethods': {
    goal: 'Special double-underscore methods — Python hooks.',
    plain: 'Methods like `__str__` control how printing looks — advanced but useful later.',
    starterCode: `class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return "Book: " + self.title\n\nprint(Book("Python for Everyone"))`,
  },
  'class-and-objects--8-7-operatoroverloading': {
    goal: 'Teach operators like + what to do for your own types.',
    plain: 'Rare for beginners — skim now; revisit when building custom math types.',
    starterCode: `class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n\np = Point(1, 2) + Point(3, 4)\nprint("New point:", p.x, p.y)`,
  },
  'advance-python-concepts--9-1-iterators': {
    goal: 'Loop through data one piece at a time — memory friendly.',
    plain: 'Iterator gives next item on demand — like peeling one fruit at a time from a bag.',
    starterCode: `nums = [10, 20, 30]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\nprint(next(it))`,
  },
  'advance-python-concepts--9-2-generators': {
    goal: 'Create lazy sequences with `yield` — efficient loops.',
    plain: 'Generator produces values one by one instead of building a huge list in memory.',
    starterCode: `def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor x in count_up_to(5):\n    print(x)`,
  },
  'advance-python-concepts--9-3-decorators': {
    goal: 'Wrap functions to add extra behavior — intermediate topic.',
    plain: 'Decorator modifies or logs a function without rewriting its core logic.',
    starterCode: `def loud(f):\n    def wrapper():\n        print("Starting...")\n        f()\n    return wrapper\n\n@loud\ndef hello():\n    print("Hello!")\n\nhello()`,
  },
  'data-analysis-with-python--10-1-numpy': {
    goal: 'Fast number arrays — foundation for data science.',
    plain: 'NumPy stores numbers in grids — think Excel cells but faster for math.',
    starterCode: `# Small demo — full NumPy loads slower in browser\nnumbers = [1, 2, 3, 4, 5]\nprint("Sum:", sum(numbers))\nprint("Average:", sum(numbers)/len(numbers))`,
  },
  'data-analysis-with-python--10-2-pandas': {
    goal: 'Tables with rows and columns — like spreadsheets in code.',
    plain: 'Pandas `DataFrame` is a table you can filter, sort, and analyze.',
    starterCode: `print("Pandas = tables in code (rows & columns)")\nprint("Example columns: Name, Marks, City")`,
    starterRunnable: true,
  },
  'data-analysis-with-python--10-3-datamanipulation': {
    goal: 'Clean and reshape data — filter rows, fill missing values.',
    plain: 'Real data is messy. Manipulation means fix, filter, and combine tables.',
    starterCode: `rows = [{"name": "A", "score": 90}, {"name": "B", "score": None}]\nfixed = [{**r, "score": r["score"] or 0} for r in rows]\nprint(fixed)`,
  },
  'data-analysis-with-python--10-4-readdata': {
    goal: 'Load CSV/Excel into Python — on your machine with real files.',
    plain: 'In projects you read files from disk. Browser lessons show the idea only.',
    starterCode: `csv_line = "name,marks\\nRavi,88\\nAnita,92"\nprint("Raw CSV text:")\nprint(csv_line)`,
  },
  'data-analysis-with-python--10-5-matplotlib': {
    goal: 'Draw charts from numbers — lines, bars, scatter.',
    plain: 'Charts help you see trends faster than reading hundreds of numbers.',
    starterCode: `print("Chart idea: marks [70,85,90] → bar heights")\nmarks = [70, 85, 90]\nfor i, m in enumerate(marks):\n    print("Test", i+1, ":" + "#" * (m // 10))`,
  },
  'data-analysis-with-python--10-6-seaborn': {
    goal: 'Prettier statistical charts built on matplotlib.',
    plain: 'Seaborn makes beautiful plots with less code — use after pandas basics.',
    starterCode: `print("Seaborn builds on matplotlib for statistical plots")`,
    starterRunnable: true,
  },
  'working-with-databases--11-1-sqlite': {
    goal: 'Store data in SQL tables — query with SELECT.',
    plain: 'Database = permanent table. SQL language asks questions: "give all students with marks > 80".',
    starterCode: `print("SQL example (run on PC):")\nprint("SELECT name FROM students WHERE marks > 80;")`,
    starterRunnable: true,
  },
  'logging-in-python--12-1-logging': {
    goal: 'Record what your program did — for debugging real apps.',
    plain: 'Instead of random prints, logging levels (info, error) keep production apps understandable.',
    starterCode: `level = "INFO"\nmessage = "User logged in"\nprint(f"[{level}] {message}")`,
  },
  'logging-in-python--12-2-multiplelogger': {
    goal: 'Separate log streams for different parts of an app.',
    plain: 'Like different notebooks: one for payments, one for login errors.',
    starterCode: `print("[auth] login ok")\nprint("[payment] charge failed")`,
    starterRunnable: true,
  },
  'flask--main': {
    goal: 'See how a small web server starts — run full Flask on your laptop later.',
    plain: 'Flask listens for browser requests and returns HTML or JSON.',
    starterCode: `print("Flask = Python website toolkit")\nprint("You will write: app = Flask(__name__)")`,
    starterRunnable: true,
  },
  'flask--app': {
    goal: 'Routes map URLs to Python functions.',
    plain: 'Visiting `/hello` runs a function that returns "Hello".',
    starterCode: `routes = {"/": "home page", "/about": "about page"}\nfor path, desc in routes.items():\n    print(path, "→", desc)`,
  },
  'flask--jinja': {
    goal: 'HTML templates with placeholders for dynamic data.',
    plain: 'Like a letter template: Dear {{name}}, your order is ready.',
    starterCode: `name = "Student"\ntemplate = "Hello {{name}}, welcome!"\nprint(template.replace("{{name}}", name))`,
  },
  'flask--getpost': {
    goal: 'GET reads data from URL; POST sends form data securely.',
    plain: 'Search uses GET. Login forms often use POST.',
    starterCode: `print("GET:  /search?q=python")\nprint("POST: form submit with password")`,
    starterRunnable: true,
  },
  'flask--api': {
    goal: 'Return JSON for mobile apps and frontends.',
    plain: 'API = machine-readable answers instead of pretty HTML pages.',
    starterCode: `import json\nprint(json.dumps({"course": "Python", "price": 0, "free": True}))`,
  },
  'streamlit--streamlit': {
    goal: 'Build simple data apps in pure Python — no HTML needed.',
    plain: 'Streamlit turns scripts into shareable web dashboards quickly.',
    starterCode: `print("Streamlit idea: slider + chart + table in ~20 lines")`,
    starterRunnable: true,
  },
  'streamlit--widgets': {
    goal: 'Buttons, sliders, and inputs for interactive demos.',
    plain: 'Widgets collect user input and refresh the view.',
    starterCode: `choice = "Beginner"\nprint("Selected level:", choice)`,
    starterRunnable: true,
  },
  'streamlit--app': {
    goal: 'Put charts and text on one scrollable page.',
    plain: 'One Python file becomes a mini website for demos.',
    starterCode: `print("st.title('My App')  →  big heading on page")`,
    starterRunnable: true,
  },
  'streamlit--classification': {
    goal: 'Example ML demo — predict categories from data.',
    plain: 'Advanced demo: train a model, show results in Streamlit — try locally when ready.',
    starterCode: `print("ML demo: features in → label out (e.g. spam / not spam)")`,
    starterRunnable: true,
  },
  'memory-management--memory-manage': {
    goal: 'Big-picture: Python frees unused memory automatically.',
    plain: 'You rarely manage memory by hand. Know that variables reference objects; delete when done in huge apps.',
    starterCode: `a = [1, 2, 3]\nprint("List lives in memory:", a)\ndel a\nprint("Reference removed — Python can clean up")`,
  },
  'multithreading-and-multiprocessing--multi-threading': {
    goal: 'Concept: multiple tasks interleaved on one CPU — feels parallel.',
    plain: 'Like chatting while music plays — switches fast between tasks.',
    starterCode: `print("Thread 1: download file")\nprint("Thread 2: show progress bar")\nprint("(Real threads need local Python)")`,
    starterRunnable: true,
  },
  'multithreading-and-multiprocessing--advance-multi-threading': {
    goal: 'Safer patterns with locks when threads share data.',
    plain: 'Without locks, two threads editing same variable can clash — like two people editing one doc.',
    starterCode: `print("Lock = only one thread edits shared data at a time")`,
    starterRunnable: true,
  },
  'multithreading-and-multiprocessing--webscrapping-multi-threading': {
    goal: 'Fetch many web pages faster with threads — ethical use only.',
    plain: 'Scraping means reading public web data. Always respect site rules and laws.',
    starterCode: `urls = ["page1", "page2", "page3"]\nfor u in urls:\n    print("Would fetch:", u)`,
  },
  'multithreading-and-multiprocessing--multi-processing': {
    goal: 'True parallel CPU work using multiple processes.',
    plain: 'Heavier than threads but uses all CPU cores for heavy math.',
    starterCode: `print("Process = separate Python program running in parallel")`,
    starterRunnable: true,
  },
  'multithreading-and-multiprocessing--factorial-multi-processing': {
    goal: 'Split heavy math across cores — example: factorial chunks.',
    plain: 'Divide work, each process computes part, combine results.',
    starterCode: `import math\nprint("5! =", math.factorial(5))`,
  },
  'multithreading-and-multiprocessing--advance-multi-processing': {
    goal: 'Pools and queues for production-style parallel jobs.',
    plain: 'Job queues — like a ticket counter with several agents.',
    starterCode: `jobs = ["email", "report", "backup"]\nfor j in jobs:\n    print("Worker could run:", j)`,
  },
}

export function getLayman(lessonId, moduleId, title) {
  if (LESSON_LAYMAN[lessonId]) return { ...LESSON_LAYMAN[lessonId] }
  const mod = MODULE_DEFAULTS[moduleId] || {}
  return {
    goal: `Understand ${title} in simple, practical terms.`,
    plain: `This lesson covers ${title}. We explain the idea first with a small example you can run. Detailed bootcamp notes are below for reference.`,
    analogy: mod.fallbackAnalogy || 'Learning step by step — like following a simple recipe before a chef book.',
    steps: ['Read the plain explanation', 'Run the easy example', 'Skim reference notes if curious'],
    starterCode: `print("Lesson: ${title}")\nprint("Change this message and press Run!")`,
    starterRunnable: true,
  }
}

export function getModuleIntro(moduleId, locale = 'en') {
  const i18n = getModuleIntroI18n(moduleId, locale)
  if (i18n) return i18n
  return (
    MODULE_DEFAULTS[moduleId]?.moduleIntro ||
    (locale === 'hi'
      ? 'धीरे-धीरे आगे बढ़ें — हर आसान example पहले चलाएँ।'
      : locale === 'hinglish'
        ? 'Dheere dheere aage badho — har easy example pehle chalao.'
        : 'Build skills gradually — run each easy example before moving on.')
  )
}

const INTRO_LABELS = {
  en: {
    tag: 'Start here — no coding background needed',
    whatLearn: 'What you will learn',
    simpleWords: 'In simple words',
    thinkLike: 'Think of it like this',
    howToUse: 'How to use this lesson',
    wordsToKnow: 'Words to know',
  },
  hi: {
    tag: 'यहाँ से शुरू करें — कोडिंग की जरूरत नहीं',
    whatLearn: 'आप क्या सीखेंगे',
    simpleWords: 'आसान भाषा में',
    thinkLike: 'ऐसे समझें जैसे',
    howToUse: 'इस पाठ का उपयोग कैसे करें',
    wordsToKnow: 'जानने वाले शब्द',
  },
  hinglish: {
    tag: 'Yahan se shuru — coding ki zaroorat nahi',
    whatLearn: 'Kya seekhoge',
    simpleWords: 'Seedhe simple shabdon mein',
    thinkLike: 'Aise samjho jaise',
    howToUse: 'Is lesson ko kaise use karein',
    wordsToKnow: 'Ye words yaad rakho',
  },
}

function buildIntroHtml(locale, content, moduleId) {
  const L = INTRO_LABELS[locale]
  const stepsHtml = content.steps?.length
    ? `<ol>${content.steps.map((s) => `<li>${s}</li>`).join('')}</ol>`
    : ''
  const glossaryHtml = content.glossary?.length
    ? `<p><strong>${L.wordsToKnow}:</strong></p><ul>${content.glossary
        .map((g) => `<li><strong>${g.term}</strong> — ${g.def}</li>`)
        .join('')}</ul>`
    : ''
  return `
<div class="layman-intro-inner">
  <p class="layman-tag">${L.tag}</p>
  <h3>${L.whatLearn}</h3>
  <p>${content.goal}</p>
  <h3>${L.simpleWords}</h3>
  <p>${content.plain}</p>
  ${content.analogy ? `<h3>${L.thinkLike}</h3><p>${content.analogy}</p>` : ''}
  ${stepsHtml ? `<h3>${L.howToUse}</h3>${stepsHtml}` : ''}
  ${glossaryHtml}
  <p class="layman-module-note">${getModuleIntro(moduleId, locale)}</p>
</div>`
}

export function buildIntroBlock(laymanEn, moduleId, lessonId, title) {
  const translations = {}
  for (const locale of LOCALES) {
    const merged = mergeLocaleText(laymanEn, locale, lessonId, moduleId, title)
    translations[locale] = {
      goal: merged.goal,
      plain: merged.plain,
      analogy: merged.analogy,
      steps: merged.steps,
      glossary: merged.glossary,
      html: buildIntroHtml(locale, merged, moduleId),
    }
  }
  return { type: 'intro', translations }
}

const SECTION_I18N = {
  en: {
    title: 'Reference notes (from full bootcamp)',
    subtitle: 'Optional — deeper detail for when you are ready',
  },
  hi: {
    title: 'संदर्भ नोट्स (पूरा बूटकैंप)',
    subtitle: 'वैकल्पिक — तैयार होने पर पढ़ें (अधिकतर अंग्रेज़ी)',
  },
  hinglish: {
    title: 'Reference notes (poora bootcamp)',
    subtitle: 'Optional — ready ho to padho (zyada tar English)',
  },
}

export function applyLaymanToLesson(lesson) {
  const layman = getLayman(lesson.id, lesson.moduleId, lesson.title)
  const blocks = []

  blocks.push(buildIntroBlock(layman, lesson.moduleId, lesson.id, lesson.title))

  if (layman.starterCode) {
    const baseCode = sanitizeNames(layman.starterCode)
    blocks.push({
      type: 'code',
      code: baseCode,
      codeByLocale: {
        en: baseCode,
        hi: localizeStarterCode(baseCode, 'hi'),
        hinglish: localizeStarterCode(baseCode, 'hinglish'),
      },
      runnable: layman.starterRunnable !== false,
      label: 'starter',
      noteKey: 'starterNote',
    })
  }

  blocks.push({
    type: 'section',
    translations: SECTION_I18N,
  })

  for (const b of lesson.blocks) {
    if (b.type === 'code') {
      blocks.push({
        ...b,
        label: 'reference',
        noteKey: b.noteKey || (b.note && !b.runnable ? 'browserPracticeNote' : undefined),
        note: b.noteKey ? undefined : b.note,
      })
    } else {
      blocks.push(b)
    }
  }

  blocks.push(buildChallengeBlock(lesson.id, lesson.title))

  return { ...lesson, blocks, beginnerFriendly: true }
}
