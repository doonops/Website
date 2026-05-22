/**
 * Original Doonops Terraform on AWS curriculum — not copied from reference repo.
 * Terraform 1.9+ / AWS provider 5.x conventions.
 */

const L = (en, hi, hinglish) => ({ en, hi, hinglish })

export const TERRAFORM_MODULES = [
  { id: 'course-intro', title: L('Course Introduction', 'कोर्स परिचय', 'Course Introduction'), order: 0 },
  { id: 'iac-fundamentals', title: L('IaC Fundamentals', 'IaC की बुनियाद', 'IaC Fundamentals'), order: 1 },
  { id: 'setup-cli', title: L('Setup & CLI', 'सेटअप और CLI', 'Setup & CLI'), order: 2 },
  { id: 'hcl-core', title: L('HCL & Core Workflow', 'HCL और वर्कफ़्लो', 'HCL & Core Workflow'), order: 3 },
  { id: 'variables-state', title: L('Variables & State', 'Variables और State', 'Variables aur State'), order: 4 },
  { id: 'meta-arguments', title: L('Loops & Meta-Arguments', 'Loops और Meta-Arguments', 'Loops & meta-args'), order: 5 },
  { id: 'aws-vpc', title: L('AWS VPC', 'AWS VPC', 'AWS VPC'), order: 6 },
  { id: 'aws-compute', title: L('EC2 & Security', 'EC2 और Security', 'EC2 & Security'), order: 7 },
  { id: 'aws-alb', title: L('Application Load Balancer', 'Application Load Balancer', 'ALB'), order: 8 },
  { id: 'aws-routing', title: L('ALB Routing & TLS', 'ALB Routing और TLS', 'ALB routing'), order: 9 },
  { id: 'aws-three-tier', title: L('3-Tier on AWS', 'AWS पर 3-Tier', '3-Tier on AWS'), order: 10 },
  { id: 'aws-scaling', title: L('Auto Scaling', 'Auto Scaling', 'Auto Scaling'), order: 11 },
  { id: 'aws-observability', title: L('CloudWatch & NLB', 'CloudWatch और NLB', 'CloudWatch & NLB'), order: 12 },
  { id: 'terraform-modules', title: L('Terraform Modules', 'Terraform Modules', 'Modules'), order: 13 },
  { id: 'remote-state', title: L('Remote State & Teams', 'Remote State', 'Remote state'), order: 14 },
  { id: 'iac-devops', title: L('IaC with CI/CD', 'CI/CD के साथ IaC', 'IaC with CI/CD'), order: 15 },
  { id: 'troubleshooting', title: L('Troubleshooting', 'समस्या निवारण', 'Troubleshooting'), order: 16 },
  { id: 'capstone', title: L('Capstone Project', 'कैपस्टोन प्रोजेक्ट', 'Capstone project'), order: 17 },
  { id: 'certification', title: L('Certification Prep', 'प्रमाणन की तैयारी', 'Certification prep'), order: 18 },
]

export function introHtml(locale, c, labels) {
  const steps = c.steps?.length ? `<ol>${c.steps.map((s) => `<li>${s}</li>`).join('')}</ol>` : ''
  return `<div class="layman-intro-inner">
<p class="layman-tag">${labels.tag}</p>
<h3>${labels.what}</h3><p>${c.goal}</p>
<h3>${labels.simple}</h3><p>${c.plain}</p>
${c.technical ? `<h3>${labels.tech}</h3><p>${c.technical}</p>` : ''}
${c.analogy ? `<h3>${labels.think}</h3><p>${c.analogy}</p>` : ''}
${steps ? `<h3>${labels.how}</h3>${steps}` : ''}
</div>`
}

export const LABELS = {
  en: { tag: 'Doonops lesson', what: 'Goal', simple: 'Simple explanation', tech: 'Technical view', think: 'Think of it like', how: 'Steps' },
  hi: { tag: 'Doonops पाठ', what: 'लक्ष्य', simple: 'आसान भाषा', tech: 'तकनीकी नज़रिया', think: 'ऐसे समझें', how: 'कदम' },
  hinglish: { tag: 'Doonops lesson', what: 'Goal', simple: 'Simple words', tech: 'Technical view', think: 'Aise samjho', how: 'Steps' },
}

export function buildLessonBlocks(content) {
  const blocks = []
  blocks.push({
    type: 'intro',
    translations: {
      en: { goal: content.en.goal, plain: content.en.plain, html: introHtml('en', content.en, LABELS.en) },
      hi: { goal: content.hi.goal, plain: content.hi.plain, html: introHtml('hi', content.hi, LABELS.hi) },
      hinglish: { goal: content.hinglish.goal, plain: content.hinglish.plain, html: introHtml('hinglish', content.hinglish, LABELS.hinglish) },
    },
  })
  if (content.en.concept) {
    blocks.push({
      type: 'section',
      translations: {
        en: { title: 'Deep explanation', subtitle: 'Layman words first, then technical detail — read slowly' },
        hi: { title: 'विस्तार से समझाएँ', subtitle: 'पहले आसान भाषा, फिर तकनीकी बातें' },
        hinglish: { title: 'Deep explanation', subtitle: 'Pehle simple, phir technical' },
      },
    })
    blocks.push({
      type: 'markdown',
      translations: {
        en: { html: `<div class="lesson-prose">${content.en.concept}</div>` },
        hi: { html: `<div class="lesson-prose">${content.hi.concept}</div>` },
        hinglish: { html: `<div class="lesson-prose">${content.hinglish.concept}</div>` },
      },
    })
  }
  if (content.en.hcl) {
    blocks.push({
      type: 'section',
      translations: {
        en: { title: 'Example (Doonops)', subtitle: 'Modern HCL — names are examples, not from any third-party course' },
        hi: { title: 'उदाहरण (Doonops)', subtitle: 'आधुनिक HCL' },
        hinglish: { title: 'Example (Doonops)', subtitle: 'Modern HCL' },
      },
    })
    blocks.push({
      type: 'code',
      code: content.en.hcl,
      runnable: false,
      label: 'starter',
      noteKey: 'hclLocalNote',
    })
  }
  if (content.en.localLab) {
    blocks.push({
      type: 'localLab',
      translations: {
        en: content.en.localLab,
        hi: content.hi.localLab,
        hinglish: content.hinglish.localLab,
      },
    })
  }
  if (content.en.practice) {
    blocks.push({
      type: 'practice',
      translations: {
        en: content.en.practice,
        hi: content.hi.practice,
        hinglish: content.hinglish.practice,
      },
    })
  }
  return blocks
}

export function appendQuizBlock(blocks, quiz) {
  if (!quiz) return blocks
  const section = {
    type: 'section',
    translations: {
      en: { title: 'Module check — did you get it?', subtitle: '2–3 quick questions before the next module' },
      hi: { title: 'मॉड्यूल जाँच', subtitle: 'अगले मॉड्यूल से पहले तुरंत प्रश्न' },
      hinglish: { title: 'Module check', subtitle: 'Agle module se pehle quick questions' },
    },
  }
  const qb = {
    type: 'quiz',
    translations: {
      en: quiz.en,
      hi: quiz.hi,
      hinglish: quiz.hinglish,
    },
  }
  return [...blocks, section, qb]
}

/** @type {Record<string, object>} */
export const LESSON_CONTENT = {
  'iac-fundamentals--what-is-iac': {
    en: {
      goal: 'Understand Infrastructure as Code and why teams use Terraform.',
      plain: 'Instead of clicking AWS console for every server, you write a recipe file. Terraform reads it and creates/updates cloud resources to match.',
      technical: 'IaC treats infrastructure as versioned configuration. Terraform is declarative: you describe desired state; the tool plans and applies changes with a dependency graph.',
      analogy: 'Like an architect blueprint — you draw once, builders (Terraform + AWS) make reality match the drawing.',
      steps: ['Read simple + technical sections', 'Follow local lab on your laptop', 'Run terraform validate'],
      concept: '<p><strong>Infrastructure as Code (IaC)</strong> means networks, servers, and load balancers are defined in files stored in Git — reviewed like application code.</p><p><strong>Terraform</strong> (by HashiCorp, now IBM) uses HCL language and supports AWS via the <code>hashicorp/aws</code> provider. Current practice: Terraform CLI 1.9+, AWS provider 5.x, remote state in S3 with DynamoDB locking.</p>',
      hcl: '# doonops-sample.tf — first look at HCL\nterraform {\n  required_version = ">= 1.9.0"\n}\n\n# We will add provider and resources in later lessons',
      localLab: {
        title: 'On your computer (this module)',
        prerequisites: ['Terminal (Mac/Linux) or PowerShell (Windows)', 'No AWS account needed yet'],
        steps: [
          'Create folder: mkdir -p ~/doonops-terraform/lab01 && cd ~/doonops-terraform/lab01',
          'Create file main.tf with the HCL example above (use any text editor).',
          'Install Terraform: brew install terraform (Mac) or download from developer.hashicorp.com/terraform/downloads',
          'Run: terraform version — you should see 1.9.x or newer',
          'Run: terraform init — creates .terraform folder (no cloud yet)',
          'Run: terraform validate — should say Success',
        ],
      },
      practice: {
        title: 'Quick check',
        tasks: ['terraform version shows >= 1.9', 'terraform validate passes in lab01 folder'],
      },
    },
    hi: {
      goal: 'Infrastructure as Code और Terraform क्यों इस्तेमाल होता है — समझें।',
      plain: 'Har server ke liye AWS console click karne ki bajay aap ek recipe file likhte ho. Terraform use padh kar cloud resources banata/update karta hai.',
      technical: 'IaC mein infrastructure versioned config hoti hai. Terraform declarative hai: desired state likho, tool plan/apply kare.',
      analogy: 'Architect ka blueprint jaisa — ek baar draw, Terraform + AWS reality match kare.',
      concept: '<p><strong>IaC</strong> ka matlab servers/networks files mein define, Git mein store. <strong>Terraform</strong> HCL use karta hai; AWS ke liye <code>hashicorp/aws</code> provider. Aaj kal: Terraform 1.9+, provider 5.x, state S3 + DynamoDB lock.</p>',
      localLab: {
        title: 'Apne computer par (is module)',
        prerequisites: ['Terminal', 'Abhi AWS account zaroori nahi'],
        steps: [
          'Folder: mkdir -p ~/doonops-terraform/lab01 && cd ~/doonops-terraform/lab01',
          'main.tf file banao (upar wala HCL).',
          'Terraform install: brew install terraform (Mac) ya official download',
          'terraform version — 1.9+ dikhe',
          'terraform init',
          'terraform validate — Success',
        ],
      },
      practice: { title: 'जाँच', tasks: ['terraform version >= 1.9', 'validate pass'] },
    },
    hinglish: {
      goal: 'IaC aur Terraform kyun use hota hai — samjho.',
      plain: 'Console click ki jagah recipe file. Terraform padh ke AWS par resources banata hai.',
      technical: 'IaC = infra as versioned files. Terraform declarative — desired state likho, plan/apply.',
      analogy: 'Blueprint jaisa — draw once, build match kare.',
      concept: '<p><strong>IaC</strong> — infra files + Git. <strong>Terraform</strong> + AWS provider. Standard: 1.9+, provider 5.x, remote state S3.</p>',
      localLab: {
        title: 'Local machine par',
        prerequisites: ['Terminal', 'AWS account abhi nahi'],
        steps: [
          'mkdir -p ~/doonops-terraform/lab01 && cd ~/doonops-terraform/lab01',
          'main.tf banao',
          'terraform install karo',
          'terraform version',
          'terraform init',
          'terraform validate',
        ],
      },
      practice: { title: 'Check', tasks: ['version 1.9+', 'validate ok'] },
    },
  },
}
