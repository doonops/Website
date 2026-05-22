/** End-to-end capstone — wire VPC + app + ALB + optional RDS */

export const CAPSTONE_CONTENT = {
  en: {
    goal: 'Connect everything: one project folder that builds VPC, app servers, load balancer — the same story as a real 3-tier deploy, step by step.',
    plain: 'Capstone = final exam project. You do not learn new tools — you combine modules you already studied. Build in layers, plan after each layer, destroy when finished.',
    technical:
      'Recommended order: network (VPC module) → security groups → EC2/ASG → ALB listeners → RDS in DB subnets. Use outputs to pass IDs between .tf files. Single state or remote state for team.',
    analogy: 'Like cooking a full meal: prep (VPC), main dish (EC2), serving tray (ALB), storage jar (RDS) — each step tasted (plan) before serving (apply).',
    steps: [
      'Use capstone project files folder 25-capstone',
      'Layer 1: vpc.tf only → init, plan',
      'Layer 2: add SG + EC2 → plan',
      'Layer 3: add ALB → plan',
      'Layer 4: optional RDS → plan → apply only when ready',
      'destroy when done',
    ],
    concept: `
<h2>Capstone architecture</h2>
<pre class="course-diagram">Internet
   │
   ▼
[ ALB — public subnets ]
   │
   ▼
[ EC2 / ASG — private subnets ]
   │
   ▼
[ RDS — database subnets ]</pre>
<h2>Rules</h2>
<ul>
<li>One change at a time → <code>terraform plan</code></li>
<li>Never skip AWS setup lesson (credentials)</li>
<li>Budget: destroy entire capstone stack same day</li>
<li>If stuck → Troubleshooting module</li>
</ul>
<p>After capstone you are ready for <strong>Certification Prep</strong> module sample questions.</p>`,
    localLab: {
      title: 'Capstone lab (2–4 hours)',
      prerequisites: ['AWS configured', 'Modules 6–12 completed or understood', 'Project files copied'],
      steps: [
        'mkdir -p ~/doonops-terraform/25-capstone && copy all capstone files',
        'terraform init',
        'Comment out all but vpc.tf → plan → fix errors',
        'Uncomment compute + alb → plan',
        'Optional RDS: plan review cost → apply',
        'Test ALB URL in browser if applied',
        'terraform destroy -auto-approve',
      ],
    },
    practice: {
      title: 'Capstone done when',
      tasks: ['You planned each layer without blind apply', 'destroy ran successfully', 'You can explain data flow user → ALB → EC2'],
    },
  },
  hi: {
    goal: 'Sab kuch ek project mein jodna — VPC se ALB tak.',
    plain: 'Capstone = final project. Naya tool nahi — purane modules combine. Har layer ke baad plan, end mein destroy.',
    steps: ['25-capstone folder', 'layer by layer plan', 'destroy'],
    concept: `<pre class="course-diagram">User → ALB → EC2 → RDS</pre><p>Har step par plan. Stuck → Troubleshooting module.</p>`,
    localLab: {
      title: 'Capstone lab',
      prerequisites: ['AWS setup done'],
      steps: ['files copy', 'init', 'vpc plan', 'full plan', 'optional apply', 'destroy'],
    },
    practice: { title: 'Complete', tasks: ['layer-wise plan', 'destroy OK', 'flow explain kar sakte ho'] },
  },
  hinglish: {
    goal: 'End-to-end capstone — VPC + ALB + EC2 connect.',
    plain: 'Final project — layers mein banao, har layer plan, end destroy.',
    steps: ['25-capstone copy', 'plan each layer', 'destroy'],
    concept: `<p>User → ALB → EC2 → RDS. Plan har step. Phir cert prep.</p>`,
    localLab: { title: 'Capstone', steps: ['init', 'vpc plan', 'full stack plan', 'destroy'] },
    practice: { title: 'Done', tasks: ['plan samjha', 'destroy', 'flow explain'] },
  },
}

export const CAPSTONE_META = {
  titles: {
    en: 'Capstone — End-to-End 3-Tier Lab',
    hi: 'कैपस्टोन — पूरा 3-Tier प्रोजेक्ट',
    hinglish: 'Capstone — full 3-tier lab',
  },
}
