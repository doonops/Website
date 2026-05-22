/**
 * End-of-module quick checks (2–3 MCQs per module).
 */

const Q = (en, hi, hinglish, options, answer, explain) => ({
  en: { q: en, options, answer, explain },
  hi: { q: hi, options, answer, explain: explain.hi ?? explain.en },
  hinglish: { q: hinglish, options, answer, explain: explain.hinglish ?? explain.en },
})

function buildQuiz(moduleId, title, questions) {
  const mk = (loc) => ({
    title: title[loc],
    subtitle:
      loc === 'hi'
        ? 'Module khatam — 2 minute check'
        : loc === 'hinglish'
          ? 'Module end quick check'
          : 'Quick check — did this module stick?',
    questions: questions.map((q) => q[loc]),
  })
  return { en: mk('en'), hi: mk('hi'), hinglish: mk('hinglish') }
}

const quizzes = {
  'course-intro': buildQuiz(
    'course-intro',
    { en: 'Intro — quick check', hi: 'परिचय — जाँच', hinglish: 'Intro check' },
    [
      Q(
        'What is Terraform in one line?',
        'Terraform एक पंक्ति में?',
        'Terraform one line?',
        ['A database', 'Tool that builds cloud from .tf files', 'Only for Docker', 'A programming language like Python'],
        'Tool that builds cloud from .tf files',
        { en: 'Terraform reads HCL and changes cloud resources to match your files.' }
      ),
      Q(
        'When do you need an AWS account in this course?',
        'AWS account kab chahiye?',
        'AWS account kab?',
        ['Lesson 1', 'Before Module 6 (AWS VPC)', 'Never', 'Only for certification'],
        'Before Module 6 (AWS VPC)',
        { en: 'Modules 0–5 run locally without AWS.' }
      ),
    ]
  ),
  'iac-fundamentals': buildQuiz(
    'iac-fundamentals',
    { en: 'IaC basics — quick check', hi: 'IaC — जाँच', hinglish: 'IaC check' },
    [
      Q(
        'IaC mainly helps with…',
        'IaC mainly kis cheez mein help karta hai?',
        'IaC mainly?',
        ['Faster gaming', 'Repeatable, versioned infrastructure', 'Only backups', 'Replacing developers'],
        'Repeatable, versioned infrastructure',
        { en: 'Infrastructure defined in files in Git, reviewed like code.' }
      ),
      Q(
        'ClickOps means…',
        'ClickOps ka matlab?',
        'ClickOps?',
        ['Using Terraform Cloud only', 'Manual changes in cloud console', 'Writing Python', 'Using Kubernetes'],
        'Manual changes in cloud console',
        { en: 'Clicking in AWS console is hard to audit and repeat.' }
      ),
    ]
  ),
  'setup-cli': buildQuiz(
    'setup-cli',
    { en: 'Setup — quick check', hi: 'सेटअप — जाँच', hinglish: 'Setup check' },
    [
      Q(
        'Why create an IAM user instead of using root?',
        'Root ki jagah IAM user kyun?',
        'IAM user kyun?',
        ['Root is faster', 'Safer — limited permissions, rotatable keys', 'Terraform requires root', 'IAM is deprecated'],
        'Safer — limited permissions, rotatable keys',
        { en: 'Never put root keys on your laptop.' }
      ),
      Q(
        'Command to verify AWS CLI works locally?',
        'AWS CLI test command?',
        'CLI test?',
        ['terraform apply', 'aws sts get-caller-identity', 'git push', 'docker run'],
        'aws sts get-caller-identity',
        { en: 'Returns your account ARN if credentials are correct.' }
      ),
    ]
  ),
  'hcl-core': buildQuiz(
    'hcl-core',
    { en: 'HCL & workflow — quick check', hi: 'HCL — जाँच', hinglish: 'HCL check' },
    [
      Q(
        'Which command shows changes BEFORE applying?',
        'Apply se pehle changes kaun dikhata hai?',
        'Pehle changes?',
        ['terraform destroy', 'terraform plan', 'terraform fmt', 'git status'],
        'terraform plan',
        { en: 'Always plan first in production and labs.' }
      ),
      Q(
        'First command in a new Terraform folder?',
        'Naye folder mein pehla command?',
        'Pehla command?',
        ['terraform apply', 'terraform init', 'terraform destroy', 'aws configure'],
        'terraform init',
        { en: 'init downloads providers and sets up backend.' }
      ),
    ]
  ),
  'variables-state': buildQuiz(
    'variables-state',
    { en: 'Variables & state — quick check', hi: 'Variables & state', hinglish: 'Vars & state check' },
    [
      Q(
        'Where should terraform.tfstate live in a team?',
        'Team mein state kahan?',
        'State team mein?',
        ['Email attachment', 'Remote backend (e.g. S3)', 'Public website', 'Only on one laptop forever'],
        'Remote backend (e.g. S3)',
        { en: 'Remote state + locking prevents two people overwriting.' }
      ),
      Q(
        'Outputs are used to…',
        'Outputs kiske liye?',
        'Outputs?',
        ['Hide secrets', 'Expose values after apply (IDs, URLs)', 'Delete resources', 'Skip plan'],
        'Expose values after apply (IDs, URLs)',
        { en: 'Other modules/stacks can consume outputs.' }
      ),
    ]
  ),
  'meta-arguments': buildQuiz(
    'meta-arguments',
    { en: 'Meta-args — quick check', hi: 'Meta-args', hinglish: 'Meta-args check' },
    [
      Q(
        'for_each is best when…',
        'for_each kab best?',
        'for_each?',
        ['You need identical numbered resources only', 'You iterate over a set/map of named items', 'You never use modules', 'You replace state'],
        'You iterate over a set/map of named items',
        { en: 'count uses integer index; for_each uses keys.' }
      ),
    ]
  ),
  'aws-vpc': buildQuiz(
    'aws-vpc',
    { en: 'VPC — quick check', hi: 'VPC — जाँच', hinglish: 'VPC check' },
    [
      Q(
        'A VPC is…',
        'VPC kya hai?',
        'VPC?',
        ['A single EC2 instance', 'Your private network boundary in AWS', 'Only a database', 'A DNS name'],
        'Your private network boundary in AWS',
        { en: 'Subnets live inside a VPC.' }
      ),
    ]
  ),
  'aws-compute': buildQuiz(
    'aws-compute',
    { en: 'EC2 — quick check', hi: 'EC2 — जाँच', hinglish: 'EC2 check' },
    [
      Q(
        'Security group rules control…',
        'Security group?',
        'SG?',
        ['CPU speed', 'Network traffic in/out of instances', 'S3 bucket names', 'Terraform version'],
        'Network traffic in/out of instances',
        { en: 'Stateful firewall attached to ENIs/instances.' }
      ),
    ]
  ),
  'aws-alb': buildQuiz(
    'aws-alb',
    { en: 'ALB — quick check', hi: 'ALB', hinglish: 'ALB check' },
    [
      Q(
        'Application Load Balancer works at…',
        'ALB kis layer par?',
        'ALB layer?',
        ['Layer 3 only', 'Layer 7 (HTTP/HTTPS)', 'Database layer', 'IAM layer'],
        'Layer 7 (HTTP/HTTPS)',
        { en: 'ALB routes HTTP paths/hosts; NLB is Layer 4.' }
      ),
    ]
  ),
  'aws-routing': buildQuiz(
    'aws-routing',
    { en: 'Routing & TLS — quick check', hi: 'Routing', hinglish: 'Routing check' },
    [
      Q(
        'ACM certificate is used for…',
        'ACM kiske liye?',
        'ACM?',
        ['SSH to EC2', 'HTTPS on load balancer', 'S3 encryption only', 'Terraform state'],
        'HTTPS on load balancer',
        { en: 'TLS terminates at ALB with certificate_arn.' }
      ),
    ]
  ),
  'aws-three-tier': buildQuiz(
    'aws-three-tier',
    { en: '3-tier — quick check', hi: '3-tier', hinglish: '3-tier check' },
    [
      Q(
        'Classic 3-tier web app layers are…',
        '3-tier layers?',
        '3-tier?',
        ['S3, Lambda, CloudFront only', 'Web (ALB) → App (EC2) → Database (RDS)', 'IAM, KMS, SSO', 'Git, GitHub, GitLab'],
        'Web (ALB) → App (EC2) → Database (RDS)',
        { en: 'Terraform wires all three with separate subnets/SGs.' }
      ),
    ]
  ),
  'aws-scaling': buildQuiz(
    'aws-scaling',
    { en: 'ASG — quick check', hi: 'ASG', hinglish: 'ASG check' },
    [
      Q(
        'Auto Scaling Group automatically…',
        'ASG kya karta hai?',
        'ASG?',
        ['Deletes your AWS account', 'Adds/removes instances based on policy/load', 'Only backups RDS', 'Replaces VPC'],
        'Adds/removes instances based on policy/load',
        { en: 'Uses launch template + health checks.' }
      ),
    ]
  ),
  'aws-observability': buildQuiz(
    'aws-observability',
    { en: 'Observability — quick check', hi: 'CloudWatch', hinglish: 'Observability check' },
    [
      Q(
        'CloudWatch alarm triggers when…',
        'Alarm kab?',
        'Alarm?',
        ['You run git push', 'A metric crosses a threshold you set', 'Terraform init fails', 'Free tier ends'],
        'A metric crosses a threshold you set',
        { en: 'Example: ALB 5xx count too high.' }
      ),
    ]
  ),
  'terraform-modules': buildQuiz(
    'terraform-modules',
    { en: 'Modules — quick check', hi: 'Modules', hinglish: 'Modules check' },
    [
      Q(
        'Terraform module is…',
        'Module kya hai?',
        'Module?',
        ['A single S3 object', 'Reusable package of Terraform resources', 'Only a CI tool', 'AWS billing report'],
        'Reusable package of Terraform resources',
        { en: 'Call modules with module "name" { source = "..." }.' }
      ),
    ]
  ),
  'remote-state': buildQuiz(
    'remote-state',
    { en: 'Remote state — quick check', hi: 'Remote state', hinglish: 'State check' },
    [
      Q(
        'DynamoDB table with S3 backend is for…',
        'DynamoDB + S3?',
        'DynamoDB?',
        ['Storing Docker images', 'State locking so two applies do not clash', 'User passwords', 'ALB logs only'],
        'State locking so two applies do not clash',
        { en: 'Lock prevents concurrent write corruption.' }
      ),
    ]
  ),
  'iac-devops': buildQuiz(
    'iac-devops',
    { en: 'CI/CD — quick check', hi: 'CI/CD', hinglish: 'CI/CD check' },
    [
      Q(
        'In CI/CD, terraform plan in pipeline helps…',
        'Pipeline mein plan?',
        'Plan in CI?',
        ['Skip all tests', 'Review infra changes before apply', 'Delete remote state', 'Remove IAM'],
        'Review infra changes before apply',
        { en: 'Human or policy gate approves apply stage.' }
      ),
    ]
  ),
  troubleshooting: buildQuiz(
    'troubleshooting',
    { en: 'Troubleshooting — quick check', hi: 'समस्या निवारण', hinglish: 'Troubleshooting check' },
    [
      Q(
        'Error "Error acquiring the state lock" — first step?',
        'State lock error?',
        'Lock error?',
        ['Delete S3 bucket', 'Wait / identify who is running apply / force-unlock only if sure', 'Reinstall Windows', 'Change region'],
        'Wait / identify who is running apply / force-unlock only if sure',
        { en: 'terraform force-unlock LOCK_ID only when no other apply is running.' }
      ),
    ]
  ),
  capstone: buildQuiz(
    'capstone',
    { en: 'Capstone — quick check', hi: 'कैपस्टोन', hinglish: 'Capstone check' },
    [
      Q(
        'Capstone lab order should be…',
        'Capstone order?',
        'Order?',
        ['Apply RDS before VPC exists', 'VPC → compute → ALB → DB, plan between steps', 'Only one giant apply with no plan', 'Skip destroy'],
        'VPC → compute → ALB → DB, plan between steps',
        { en: 'Build in layers; destroy when done to save cost.' }
      ),
    ]
  ),
}

export function getModuleQuiz(moduleId) {
  return quizzes[moduleId] ?? null
}
