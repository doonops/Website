/**
 * Lesson 0 — Course welcome: what Terraform is, industry demand, career scope, cert path.
 * Original Doonops content with HTML/CSS diagrams (no third-party copy).
 */

const diagramFlowEn = `
<div class="tf-diagram" aria-label="How Terraform works">
  <div class="tf-diagram-title">How Terraform works (big picture)</div>
  <div class="tf-flow-row">
    <div class="tf-box tf-box-you"><span>1</span> You write<br/><strong>.tf files</strong><br/><small>(recipe in Git)</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-tool"><span>2</span> Terraform CLI<br/><strong>plan</strong><br/><small>shows diff</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-cloud"><span>3</span> Cloud API<br/><strong>AWS / Azure / GCP</strong><br/><small>creates real servers</small></div>
  </div>
  <p class="tf-diagram-caption">You describe <em>what you want</em>; Terraform figures out <em>how to change</em> the cloud safely.</p>
</div>`

const diagramFlowHi = `
<div class="tf-diagram" aria-label="Terraform ka flow">
  <div class="tf-diagram-title">Terraform ka flow (simple)</div>
  <div class="tf-flow-row">
    <div class="tf-box tf-box-you"><span>1</span> Aap likhte ho<br/><strong>.tf files</strong><br/><small>(recipe Git mein)</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-tool"><span>2</span> Terraform<br/><strong>plan</strong><br/><small>diff dikhata hai</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-cloud"><span>3</span> Cloud<br/><strong>AWS / Azure</strong><br/><small>asli servers</small></div>
  </div>
  <p class="tf-diagram-caption">Aap <em>desired state</em> likhte ho; Terraform cloud ko safely update karta hai.</p>
</div>`

const diagramCertEn = `
<div class="tf-diagram tf-diagram-cert">
  <div class="tf-diagram-title">Your path in this course → certification</div>
  <div class="tf-flow-col">
    <div class="tf-box tf-box-step">Modules 1–5<br/><small>Basics: HCL, state, variables</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-step">Modules 6–12<br/><small>AWS hands-on: VPC, EC2, ALB, RDS…</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-step">Modules 13–15<br/><small>Modules, remote state, CI/CD</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-cert">Module 16 — Exam prep<br/><strong>Terraform Associate</strong><br/><small>sample MCQs + domains</small></div>
  </div>
</div>`

const diagramCertHi = `
<div class="tf-diagram tf-diagram-cert">
  <div class="tf-diagram-title">Course path → certification</div>
  <div class="tf-flow-col">
    <div class="tf-box tf-box-step">Module 1–5<br/><small>HCL, state, variables</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-step">Module 6–12<br/><small>AWS: VPC, EC2, ALB…</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-step">Module 13–15<br/><small>Modules, remote state</small></div>
    <div class="tf-arrow-down">↓</div>
    <div class="tf-box tf-box-cert">Module 16<br/><strong>Associate exam prep</strong></div>
  </div>
</div>`

const asciiClickOpsEn = `<pre class="course-diagram" aria-label="Manual vs Terraform">
BEFORE (ClickOps)                 AFTER (Terraform + IaC)
─────────────────                 ─────────────────────────
👤 Engineer clicks AWS console    📝 Team reviews .tf in Git (like code)
   ↓ many clicks, easy mistakes      ↓ terraform plan (preview changes)
🖥️  Server "kind of" documented     ↓ terraform apply (same result every time)
❓ "Who changed port 443?"         ✅ History + repeatability + teamwork
</pre>`

const asciiClickOpsHi = `<pre class="course-diagram" aria-label="Manual vs Terraform Hindi">
पहले (Manual console)            बाद में (Terraform)
────────────────────            ───────────────────
👤 हर बार console click          📝 .tf files Git में (code जैसा)
   गलती आसान, दस्तावेज़ कम          plan → apply, हर बार same result
❓ "port किसने बदला?"             ✅ history + team review
</pre>`

const asciiCareerEn = `<pre class="course-diagram" aria-label="Career scope">
After this course you can aim for roles like:
┌────────────────────┬──────────────────────────────────────────┐
│ Role               │ What you do with Terraform               │
├────────────────────┼──────────────────────────────────────────┤
│ Cloud Engineer     │ Build VPC, servers, load balancers on AWS │
│ DevOps Engineer    │ Automate infra + CI/CD pipelines        │
│ Platform / SRE     │ Standard modules, remote state for teams  │
│ Solutions Architect│ Design repeatable landing zones           │
└────────────────────┴──────────────────────────────────────────┘
     + Optional badge: HashiCorp Terraform Associate (exam)
</pre>`

const asciiCareerHi = `<pre class="course-diagram" aria-label="Career scope Hindi">
Course ke baad typical roles:
┌──────────────────┬────────────────────────────────┐
│ Cloud Engineer   │ AWS par VPC, EC2, ALB banana   │
│ DevOps Engineer  │ Infra + pipeline automate      │
│ SRE / Platform   │ Modules + remote state teams   │
└──────────────────┴────────────────────────────────┘
     + Certification: Terraform Associate (optional exam)
</pre>`

export const INTRO_LESSON_CONTENT = {
  en: {
    goal: 'Before writing any HCL, understand what Terraform is, why companies hire for it, what you will achieve, and how this course leads to certification.',
    plain:
      'Terraform is a free tool that reads simple text files and builds or updates your cloud (AWS servers, networks, databases) the same way every time — like a recipe instead of clicking hundreds of buttons in a website console.',
    technical:
      'Terraform is an open-source IaC engine (HCL language, providers for AWS/Azure/GCP). It maintains state, computes a dependency graph, and runs plan/apply cycles. Industry standard alongside CI/CD and GitOps.',
    analogy:
      'Imagine moving house: ClickOps is calling random movers each time with verbal instructions. Terraform is a written checklist + floor plan everyone follows — fewer surprises, easy to repeat.',
    steps: [
      'Read this entire welcome lesson (diagrams help visual learners).',
      'Continue to Module 1 — install tools and run your first validate on your laptop.',
      'Finish all modules + certification prep before booking the Associate exam.',
    ],
    concept: `
<h2>What is Terraform?</h2>
<p><strong>In one sentence:</strong> Terraform is software that turns your infrastructure wishes into real cloud resources — safely and repeatedly.</p>
<p>Companies run apps on <strong>cloud</strong> (Amazon AWS, Microsoft Azure, Google GCP). That cloud has virtual servers, networks, firewalls, databases. Terraform lets you describe all of that in files ending in <code>.tf</code> instead of clicking in a browser.</p>
${diagramFlowEn}

<h2>Why is it used?</h2>
<ul>
<li><strong>Repeatability</strong> — Staging and production look the same; no “it worked on my laptop” for servers.</li>
<li><strong>Speed</strong> — One command can create 20 resources; faster than manual clicks.</li>
<li><strong>Safety</strong> — <code>terraform plan</code> shows what will change before anything breaks.</li>
<li><strong>Teamwork</strong> — Files live in Git; reviewers comment like normal code.</li>
<li><strong>Multi-cloud</strong> — Same workflow for AWS and other clouds (with different providers).</li>
</ul>
${asciiClickOpsEn}

<h2>Why is demand high in the industry?</h2>
<p>Almost every mid-size and large company moved (or is moving) to cloud. They need people who can automate infrastructure — not only developers who write app code.</p>
<ul>
<li>Job posts often list <strong>Terraform</strong>, <strong>AWS</strong>, <strong>DevOps</strong>, <strong>IaC</strong> together.</li>
<li>Regulated industries (banking, health) require <strong>audit trails</strong> — Git + Terraform history helps.</li>
<li>Startups scale fast — Terraform modules let one engineer support many environments.</li>
</ul>
<p class="layman-highlight">Layman view: Cloud is the new electricity; Terraform is the standard way to wire the building without hand-wiring every room each time.</p>

<h2>What do you achieve with Terraform skills?</h2>
<ul>
<li>Build a full <strong>3-tier app on AWS</strong> (network → servers → load balancer → database).</li>
<li>Share <strong>reusable modules</strong> so your team does not reinvent VPC every project.</li>
<li>Store <strong>remote state</strong> so many people collaborate without overwriting each other.</li>
<li>Plug Terraform into <strong>CI/CD</strong> so deploys happen after automated tests.</li>
</ul>

<h2>After learning — scope in IT (career)</h2>
<p>You do not need to be a math genius or 10-year coder. Logical thinking + practice labs in this course are enough to start.</p>
${asciiCareerEn}
<p>Salaries vary by country and experience; Terraform is a <strong>skill multiplier</strong> on top of cloud knowledge — often required for DevOps and cloud roles worldwide.</p>

<h2>Does this course prepare you for certification?</h2>
<p><strong>Yes — in plain words:</strong> This course is designed so that if you complete every lesson, local lab, and the final <strong>Certification Prep</strong> module, you will understand the topics HashiCorp tests in the <strong>Terraform Associate</strong> exam (multiple-choice, ~60 minutes).</p>
<p>We do not replace official HashiCorp practice — but we cover IaC concepts, workflow commands, state, modules, and AWS patterns that appear on the exam. The last module has sample questions in English, Hindi, and Hinglish.</p>
${diagramCertEn}
<p><strong>Exam in simple terms:</strong> You read scenarios (“team needs remote state…”) and pick the best Terraform approach. No live coding during the standard Associate exam — concepts and configuration knowledge matter.</p>

<h2>How to use this course</h2>
<ol>
<li>Switch language (English / Hinglish / Hindi) at the top — explanations change; HCL examples stay in English.</li>
<li><strong>Module 2 first lesson</strong> — AWS account + Free Tier + <code>aws configure</code> (required before Module 6).</li>
<li>Every hands-on lesson has <strong>Project files</strong> — copy full folder, then <strong>local lab</strong> steps.</li>
<li>End of each module: <strong>Module check</strong> quiz (2–3 questions).</li>
<li>Before certification: <strong>Troubleshooting</strong> + <strong>Capstone</strong> modules.</li>
<li>Use AWS free tier carefully — always run <code>plan</code> before <code>apply</code>.</li>
</ol>`,
    localLab: {
      title: 'Your first step (no install yet)',
      prerequisites: ['10–15 minutes quiet reading time', 'Notebook optional'],
      steps: [
        'Read all sections and diagrams on this page.',
        'Write down one reason your future team might want Terraform (repeatability, speed, or jobs).',
        'Open the next lesson: Install Terraform & AWS CLI — that is where hands-on starts.',
      ],
    },
    practice: {
      title: 'Self-check before Module 1',
      tasks: [
        'Can explain Terraform to a friend in one sentence',
        'Know difference between console clicking and IaC files',
        'Know this course ends with Associate exam prep module',
      ],
    },
  },
  hi: {
    goal: 'कोई HCL लिखने से पहले समझें — Terraform क्या है, industry में demand क्यों है, क्या हासिल करेंगे, और यह course certification की तैयारी कैसे करता है।',
    plain:
      'Terraform एक मुफ़्त टूल है जो सादी टेक्स्ट फ़ाइलें पढ़कर AWS जैसे cloud पर servers, network, database बनाता या अपडेट करता है — हर बार एक जैसा, console में सैकड़ों क्लिक की जगह।',
    technical:
      'Terraform open-source IaC engine है (HCL, providers). State, dependency graph, plan/apply — industry में CI/CD और GitOps के साथ standard।',
    analogy:
      'घर बदलना: हर बार मुहँ से अलग निर्देश = ClickOps। लिखित चेकलिस्ट + नक्शा = Terraform।',
    steps: [
      'पूरा welcome पाठ और diagrams पढ़ें।',
      'Module 1 — tools install और पहला validate।',
      'सभी modules + certification prep के बाद exam book करें।',
    ],
    concept: `
<h2>Terraform क्या है?</h2>
<p><strong>एक वाक्य में:</strong> Terraform वह सॉफ़्टवेयर है जो आपकी cloud ज़रूरतों को असली resources में बदलता है — सुरक्षित और बार-बार एक जैसा।</p>
<p>कंपनियाँ <strong>cloud</strong> (AWS, Azure, GCP) पर apps चलाती हैं। Terraform browser click की जगह <code>.tf</code> फ़ाइलों में सब लिखने देता है।</p>
${diagramFlowHi}

<h2>क्यों इस्तेमाल होता है?</h2>
<ul>
<li><strong>दोहराव</strong> — staging और production एक जैसे।</li>
<li><strong>गति</strong> — एक command से कई resources।</li>
<li><strong>सुरक्षा</strong> — plan से पहले पता चलता है क्या बदलेगा।</li>
<li><strong>टीम</strong> — Git में review, code जैसा।</li>
<li><strong>कई cloud</strong> — same workflow, अलग providers।</li>
</ul>
${asciiClickOpsHi}

<h2>Industry में demand क्यों है?</h2>
<p>बड़ी-मध्यम कंपनियाँ cloud पर हैं। उन्हें <strong>automate infrastructure</strong> वाले लोग चाहिए — सिर्फ app developers नहीं।</p>
<ul>
<li>Jobs में अक्सर <strong>Terraform, AWS, DevOps, IaC</strong> साथ लिखा होता है।</li>
<li>Banking/health को <strong>audit trail</strong> चाहिए — Git + Terraform history मदद करती है।</li>
<li>Startups तेज़ बढ़ते हैं — modules से एक engineer कई environments संभालता है।</li>
</ul>
<p class="layman-highlight">आसान भाषा: Cloud नई बिजली जैसी; Terraform इमारत की wiring का standard तरीका।</p>

<h2>Terraform से क्या achieve होता है?</h2>
<ul>
<li>AWS पर पूरा <strong>3-tier app</strong> (network → servers → LB → database)।</li>
<li><strong>Modules</strong> share — हर project में VPC दोबारा नहीं।</li>
<li><strong>Remote state</strong> — टीम साथ काम, overwrite नहीं।</li>
<li><strong>CI/CD</strong> में Terraform — tests के बाद deploy।</li>
</ul>

<h2>सीखने के बाद IT में scope</h2>
<p>10 साल का coder होना ज़रूरी नहीं। सोच + इस course की local labs से शुरुआत हो सकती है।</p>
${asciiCareerHi}
<p>Terraform <strong>cloud skill का multiplier</strong> है — DevOps / cloud roles में worldwide माँग।</p>

<h2>क्या यह course certification की तैयारी कराता है?</h2>
<p><strong>हाँ — सीधे शब्दों में:</strong> अगर आप हर lesson, local lab, और अंतिम <strong>Certification Prep</strong> module पूरा करें, तो <strong>Terraform Associate</strong> exam के topics समझ आएँगे (MCQ, ~60 मिनट)।</p>
<p>HashiCorp official practice की जगह नहीं — लेकिन IaC, commands, state, modules, AWS patterns cover हैं। अंतिम module में English / Hindi / Hinglish sample questions।</p>
${diagramCertHi}
<p><strong>Exam आसान भाषा:</strong> scenario पढ़कर सही Terraform approach चुनना — standard Associate में live coding नहीं, concepts ज़्यादा।</p>

<h2>Course कैसे use करें</h2>
<ol>
<li>ऊपर भाषा चुनें — व्याख्या बदलेगी; HCL English।</li>
<li><strong>Module 2 पहला पाठ</strong> — AWS account, Free Tier, <code>aws configure</code> (Module 6 से पहले)।</li>
<li><strong>Project files</strong> + <strong>local lab</strong> हर practical lesson में।</li>
<li>हर module के अंत में <strong>Module check</strong> quiz।</li>
<li>Certification से पहले <strong>Troubleshooting</strong> + <strong>Capstone</strong>।</li>
</ol>`,
    localLab: {
      title: 'आपका पहला कदम (अभी install नहीं)',
      prerequisites: ['10–15 मिनट शांत पढ़ाई', 'नोटबुक वैकल्पिक'],
      steps: [
        'इस पृष्ठ के सभी खंड और diagrams पढ़ें।',
        'एक कारण लिखें — आपकी टीम को Terraform क्यों चाहिए।',
        'अगला पाठ: Terraform और AWS CLI इंस्टॉल — वहाँ से hands-on शुरू।',
      ],
    },
    practice: {
      title: 'Module 1 से पहले जाँच',
      tasks: [
        'एक वाक्य में Terraform समझा सकते हैं',
        'Console click और IaC फ़ाइलों का अंतर पता है',
        'कोर्स के अंत में cert prep module है — पता है',
      ],
    },
  },
  hinglish: {
      goal: 'HCL se pehle samjho — Terraform kya hai, demand kyun, kya achieve karoge, aur course certification tak kaise le jata hai.',
      plain:
        'Terraform free tool hai jo text files padh ke cloud (AWS servers, network, DB) banata/update karta hai — har baar same result, console mein 100 clicks ki jagah.',
      technical:
        'Open-source IaC: HCL, providers, state, plan/apply. Industry mein CI/CD + GitOps ke sath standard.',
      analogy:
        'Ghar shift: har baar verbal instructions = ClickOps. Written checklist = Terraform.',
      steps: [
        'Poora welcome + diagrams padho.',
        'Module 1 — install + pehla validate.',
        'Saare modules + cert prep, phir exam book karo.',
      ],
    concept: `
<h2>Terraform kya hai?</h2>
<p><strong>One line:</strong> Terraform = cloud ki wish list ko real servers/network mein badalne wala tool, safe aur repeatable.</p>
${diagramFlowHi}

<h2>Kyun use hota hai?</h2>
<ul>
<li><strong>Repeat</strong> — staging = prod jaisa feel.</li>
<li><strong>Fast</strong> — ek command, kai resources.</li>
<li><strong>Safe</strong> — plan pehle dikhata hai kya change hoga.</li>
<li><strong>Team</strong> — Git review, code jaisa.</li>
</ul>
${asciiClickOpsHi}

<h2>Industry demand kyun high?</h2>
<p>Sab cloud par ja rahe hain. <strong>Terraform + AWS + DevOps</strong> jobs mein common. Audit ke liye Git history chahiye banks ko. Startups modules se scale karte hain.</p>
<p class="layman-highlight">Simple: Cloud = nayi bijli; Terraform = wiring ka standard tareeka.</p>

<h2>Kya achieve karoge?</h2>
<ul>
<li>Full <strong>3-tier on AWS</strong></li>
<li><strong>Modules</strong> share across team</li>
<li><strong>Remote state</strong> + <strong>CI/CD</strong></li>
</ul>

<h2>Padhne ke baad IT scope</h2>
${asciiCareerHi}
<p>Terraform = cloud skill ka <strong>multiplier</strong>; DevOps roles worldwide.</p>

<h2>Course certification prepare karega?</h2>
<p><strong>Haan.</strong> Saari lessons + last <strong>Certification Prep</strong> module = <strong>Terraform Associate</strong> topics (MCQ exam). Sample questions EN/HI/Hinglish.</p>
${diagramCertHi}
<p>Exam simple: scenarios padh ke best option choose — live coding nahi usually Associate mein.</p>

<h2>Course use kaise karein</h2>
<ol>
<li>Language switch — samjhauta badlega, HCL English.</li>
<li><strong>Module 2 pehla lesson</strong> — AWS account + Free Tier + aws configure (Module 6 se pehle).</li>
<li><strong>Project files</strong> + <strong>local lab</strong> har practical lesson.</li>
<li>Module end par <strong>Module check</strong> quiz.</li>
<li>Cert se pehle <strong>Troubleshooting</strong> + <strong>Capstone</strong>.</li>
</ol>`,
    localLab: {
      title: 'Pehla step (abhi install nahi)',
      prerequisites: ['15 min padhne ka time'],
      steps: [
        'Poora page + diagrams padho.',
        'Ek reason likho — team ko Terraform kyun chahiye.',
        'Next lesson: Install tools — wahan se hands-on.',
      ],
    },
    practice: {
      title: 'Check before Module 1',
      tasks: [
        'Ek sentence mein Terraform explain kar sakte ho',
        'ClickOps vs IaC farq pata hai',
        'Course end mein cert prep module hai — pata hai',
      ],
    },
  },
}

export const INTRO_LESSON_META = {
  id: 'course-intro--welcome-to-terraform',
  moduleId: 'course-intro',
  titles: {
    en: 'Welcome — What is Terraform & Why This Course?',
    hi: 'परिचय — Terraform क्या है और यह कोर्स क्यों?',
    hinglish: 'Welcome — Terraform kya hai & course kyun?',
  },
}
