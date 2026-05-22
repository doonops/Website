/**
 * Generates data/terraform-aws.json — original Doonops Terraform course
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  TERRAFORM_MODULES,
  LESSON_CONTENT,
  buildLessonBlocks,
  introHtml,
  LABELS,
} from './terraform-course-data.mjs'
import { CERT_LESSON } from './terraform-cert-data.mjs'
import { INTRO_LESSON_CONTENT, INTRO_LESSON_META } from './terraform-intro-lesson.mjs'
import { getLabProject } from './terraform-lab-files.mjs'
import { AWS_SETUP_CONTENT, AWS_SETUP_META } from './terraform-aws-setup-lesson.mjs'
import { TROUBLESHOOTING_CONTENT, TROUBLESHOOTING_META } from './terraform-troubleshooting-lesson.mjs'
import { CAPSTONE_CONTENT, CAPSTONE_META } from './terraform-capstone-lesson.mjs'
import { getModuleQuiz } from './terraform-module-quizzes.mjs'
import { appendQuizBlock } from './terraform-course-data.mjs'
import { DEEP_LESSONS } from './terraform-deep-lessons.mjs'
import { applyLessonI18n, templateI18n } from './terraform-hi-hinglish.mjs'

LESSON_CONTENT['course-intro--welcome-to-terraform'] = INTRO_LESSON_CONTENT
Object.assign(LESSON_CONTENT, DEEP_LESSONS)
LESSON_CONTENT['setup-cli--aws-account-setup'] = AWS_SETUP_CONTENT
LESSON_CONTENT['troubleshooting--common-errors'] = TROUBLESHOOTING_CONTENT
LESSON_CONTENT['capstone--three-tier-full-stack'] = CAPSTONE_CONTENT

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '..', 'data', 'terraform-aws.json')

const LESSON_PLAN = [
  { moduleId: 'course-intro', lessons: [
    { id: 'welcome-to-terraform', title: INTRO_LESSON_META.titles },
  ]},
  { moduleId: 'iac-fundamentals', lessons: [
    { id: 'what-is-iac', title: { en: 'What is IaC?', hi: 'IaC क्या है?', hinglish: 'IaC kya hai?' } },
    { id: 'terraform-vs-others', title: { en: 'Terraform vs ClickOps', hi: 'Terraform vs Manual', hinglish: 'Terraform vs manual' } },
  ]},
  { moduleId: 'setup-cli', lessons: [
    { id: 'aws-account-setup', title: AWS_SETUP_META.titles },
    { id: 'install-tools', title: { en: 'Install Terraform & AWS CLI', hi: 'Terraform और AWS CLI', hinglish: 'Install tools' } },
    { id: 'project-layout', title: { en: 'Project Layout & Git', hi: 'Project structure', hinglish: 'Project layout' } },
  ]},
  { moduleId: 'hcl-core', lessons: [
    { id: 'hcl-syntax', title: { en: 'HCL Syntax', hi: 'HCL syntax', hinglish: 'HCL syntax' } },
    { id: 'workflow-init-plan-apply', title: { en: 'init, plan, apply', hi: 'init, plan, apply', hinglish: 'Workflow commands' } },
  ]},
  { moduleId: 'variables-state', lessons: [
    { id: 'input-output-vars', title: { en: 'Variables & Outputs', hi: 'Variables', hinglish: 'Variables outputs' } },
    { id: 'state-basics', title: { en: 'State File Basics', hi: 'State file', hinglish: 'State basics' } },
  ]},
  { moduleId: 'meta-arguments', lessons: [
    { id: 'count-foreach', title: { en: 'count & for_each', hi: 'count और for_each', hinglish: 'count for_each' } },
  ]},
  { moduleId: 'aws-vpc', lessons: [
    { id: 'vpc-design', title: { en: 'VPC Design (3-tier)', hi: 'VPC design', hinglish: 'VPC design' } },
    { id: 'vpc-terraform', title: { en: 'Build VPC with Terraform', hi: 'VPC Terraform', hinglish: 'VPC terraform' } },
  ]},
  { moduleId: 'aws-compute', lessons: [
    { id: 'ec2-and-sg', title: { en: 'EC2 & Security Groups', hi: 'EC2 और SG', hinglish: 'EC2 security groups' } },
    { id: 'user-data', title: { en: 'User Data & Bootstrap', hi: 'User data', hinglish: 'User data' } },
  ]},
  { moduleId: 'aws-alb', lessons: [
    { id: 'alb-intro', title: { en: 'ALB Basics', hi: 'ALB basics', hinglish: 'ALB intro' } },
  ]},
  { moduleId: 'aws-routing', lessons: [
    { id: 'path-host-routing', title: { en: 'Path & Host Routing', hi: 'Path routing', hinglish: 'Path host routing' } },
    { id: 'https-acm', title: { en: 'HTTPS with ACM', hi: 'HTTPS ACM', hinglish: 'HTTPS TLS' } },
  ]},
  { moduleId: 'aws-three-tier', lessons: [
    { id: 'route53-rds-stack', title: { en: 'Route53, ALB, RDS Stack', hi: '3-tier stack', hinglish: 'DNS RDS stack' } },
  ]},
  { moduleId: 'aws-scaling', lessons: [
    { id: 'launch-templates-asg', title: { en: 'Launch Templates & ASG', hi: 'Auto Scaling', hinglish: 'ASG templates' } },
  ]},
  { moduleId: 'aws-observability', lessons: [
    { id: 'cloudwatch-alarms', title: { en: 'CloudWatch Alarms', hi: 'CloudWatch', hinglish: 'CloudWatch' } },
    { id: 'nlb-tcp', title: { en: 'Network Load Balancer', hi: 'NLB', hinglish: 'NLB TCP' } },
  ]},
  { moduleId: 'terraform-modules', lessons: [
    { id: 'registry-modules', title: { en: 'Public Registry Modules', hi: 'Registry modules', hinglish: 'Registry modules' } },
    { id: 'build-local-module', title: { en: 'Build Your Own Module', hi: 'Local module', hinglish: 'Custom module' } },
  ]},
  { moduleId: 'remote-state', lessons: [
    { id: 's3-dynamodb-backend', title: { en: 'S3 + DynamoDB Backend', hi: 'Remote state', hinglish: 'S3 backend' } },
    { id: 'remote-state-datasource', title: { en: 'terraform_remote_state', hi: 'Remote state data', hinglish: 'Remote state data' } },
  ]},
  { moduleId: 'iac-devops', lessons: [
    { id: 'pipeline-overview', title: { en: 'Terraform in CI/CD', hi: 'CI/CD pipeline', hinglish: 'CodePipeline intro' } },
  ]},
  { moduleId: 'troubleshooting', lessons: [
    { id: 'common-errors', title: TROUBLESHOOTING_META.titles },
  ]},
  { moduleId: 'capstone', lessons: [
    { id: 'three-tier-full-stack', title: CAPSTONE_META.titles },
  ]},
]

const TOPIC_META = {
  'terraform-vs-others': {
    concept: { en: '<p>Manual console work does not scale. Terraform gives repeatable, reviewable changes. CloudFormation is AWS-only; Terraform is multi-cloud with one workflow.</p>', hi: '<p>Manual kaam scale nahi hota. Terraform repeatable changes deta hai.</p>', hinglish: '<p>Manual scale nahi. Terraform repeatable.</p>' },
    hcl: 'terraform {\n  required_providers {\n    aws = { source = "hashicorp/aws", version = "~> 5.0" }\n  }\n}',
    lab: 'Compare: write same VPC in console once vs terraform plan — note time and audit trail.',
  },
  'install-tools': {
    concept: {
      en: '<p><strong>Prerequisite:</strong> Complete the previous lesson <em>AWS Account, Free Tier & Local Setup</em> if you will run AWS labs (Module 6+).</p><p>Install <strong>Terraform 1.9+</strong>, <strong>AWS CLI v2</strong>, and VS Code + HashiCorp extension. Verify: <code>terraform version</code> and <code>aws sts get-caller-identity</code>.</p>',
      hi: '<p><strong>Pehle:</strong> AWS setup lesson complete karo (Module 6 ke liye).</p><p>Terraform 1.9+ aur AWS CLI install karo.</p>',
      hinglish: '<p>AWS setup lesson pehle karo agar cloud labs karoge.</p><p>terraform version + aws identity check.</p>',
    },
    hcl: '# versions.tf\nterraform {\n  required_version = ">= 1.9.0"\n}',
    lab: 'terraform version && aws sts get-caller-identity',
  },
  'project-layout': {
    concept: { en: '<p>Standard layout: <code>versions.tf</code>, <code>providers.tf</code>, <code>variables.tf</code>, <code>main.tf</code>, <code>outputs.tf</code>. Use Git; add <code>.gitignore</code> for .terraform/, *.tfstate, .pem keys.</p>', hi: '<p>versions.tf, providers.tf, variables.tf, main.tf, outputs.tf — Git + .gitignore.</p>', hinglish: '<p>Split files + gitignore state and keys.</p>' },
    hcl: '# .gitignore example\n.terraform/\n*.tfstate*\n*.pem\n.terraform.lock.hcl',
    lab: 'mkdir doonops-vpc-lab && git init && add .gitignore',
  },
  'hcl-syntax': {
    concept: { en: '<p>HCL uses blocks: <code>resource "aws_instance" "app"</code> { ... }. Arguments are key = value. Strings in quotes; lists in []; maps in {}.</p>', hi: '<p>Blocks aur arguments — resource, provider, variable.</p>', hinglish: '<p>Blocks: resource "type" "name" { }</p>' },
    hcl: 'resource "aws_instance" "doonops_app" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t3.micro"\n  tags = { Name = "doonops-app" }\n}',
    lab: 'terraform fmt  # auto-format HCL',
  },
  'workflow-init-plan-apply': {
    concept: { en: '<p><strong>init</strong> → downloads providers. <strong>plan</strong> → preview. <strong>apply</strong> → execute. Always plan before apply in production.</p>', hi: '<p>init → plan → apply. Production mein hamesha plan pehle.</p>', hinglish: '<p>init plan apply — plan pehle dekho.</p>' },
    hcl: '# After writing resources:\n# terraform init\n# terraform plan\n# terraform apply',
    lab: 'Create minimal aws_instance — run init, plan (read + ~ - symbols), apply with approval',
  },
  'input-output-vars': {
    concept: { en: '<p><code>variable</code> inputs; <code>output</code> exports values (IPs, ARNs). Use <code>terraform.tfvars</code> for environment-specific values. Mark secrets <code>sensitive = true</code>.</p>', hi: '<p>variable input, output export, tfvars for env.</p>', hinglish: '<p>variables in, outputs out, tfvars per env.</p>' },
    hcl: 'variable "environment" {\n  type    = string\n  default = "dev"\n}\n\noutput "env_label" {\n  value = var.environment\n}',
    lab: 'terraform apply -var="environment=staging"',
  },
  'state-basics': {
    concept: { en: '<p><code>terraform.tfstate</code> maps HCL to real resource IDs. Do not edit by hand. Do not commit to public Git. Later: remote S3 backend.</p>', hi: '<p>State file real IDs track karti hai — share mat karo publicly.</p>', hinglish: '<p>tfstate = mapping — private rakho.</p>' },
    hcl: '# terraform show  # inspect state\n# terraform state list',
    lab: 'After apply: terraform state list && terraform show',
  },
  'count-foreach': {
    concept: { en: '<p><code>count</code> for indexed copies; <code>for_each</code> for maps/sets (stable keys). Exam favorite: when to use which.</p>', hi: '<p>count index par; for_each map keys par — exam mein aata hai.</p>', hinglish: '<p>count vs for_each — stable keys ke liye for_each.</p>' },
    hcl: 'variable "subnet_cidrs" {\n  type = list(string)\n  default = ["10.0.1.0/24", "10.0.2.0/24"]\n}',
    lab: 'Create 2 subnets with for_each on a map — plan shows 2 resources',
  },
  'vpc-design': {
    concept: { en: '<p>3-tier: public subnets (ALB), private app subnets (EC2), private DB subnets (RDS). NAT Gateway for outbound from private. Internet Gateway for public.</p>', hi: '<p>Public ALB, private app, private DB — NAT outbound.</p>', hinglish: '<p>Public private subnets + NAT + IGW.</p>' },
    hcl: '# Use terraform-aws-modules/vpc/aws ~> 5.0\n# name = "doonops-vpc"',
    lab: 'Draw diagram on paper before writing HCL',
  },
  'vpc-terraform': {
    concept: { en: '<p>Module <code>terraform-aws-modules/vpc/aws</code> creates VPC, subnets, routes. Pin version in module block. Use one AZ for labs to save cost.</p>', hi: '<p>vpc module — version pin karein, lab mein 1 AZ.</p>', hinglish: '<p>vpc module use karo, 1 AZ for cost.</p>' },
    hcl: 'module "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 5.0"\n  name = "doonops-vpc"\n  cidr = "10.1.0.0/16"\n  azs  = ["ap-south-1a"]\n  public_subnets  = ["10.1.1.0/24"]\n  private_subnets = ["10.1.2.0/24"]\n}',
    lab: 'AWS account required: terraform apply — verify VPC in console — terraform destroy when done',
  },
  'ec2-and-sg': {
    concept: { en: '<p>EC2 in private subnet; security groups are stateful firewalls. ALB SG allows 80/443 from internet; app SG allows traffic only from ALB SG.</p>', hi: '<p>EC2 private subnet; SG rules ALB se app tak.</p>', hinglish: '<p>EC2 + SG — ALB to app only.</p>' },
    hcl: 'resource "aws_security_group" "app" {\n  name_prefix = "doonops-app-"\n  vpc_id      = module.vpc.vpc_id\n}',
    lab: 'Launch t3.micro in private subnet — SSH only via bastion or SSM (advanced)',
  },
  'user-data': {
    concept: { en: '<p><code>user_data</code> cloud-init script runs at boot — install nginx, pull config. Use templatefile() for dynamic scripts.</p>', hi: '<p>user_data boot par script — templatefile() use karein.</p>', hinglish: '<p>user_data = bootstrap script.</p>' },
    hcl: 'user_data = templatefile("${path.module}/bootstrap.sh", { app_name = "doonops" })',
    lab: 'curl instance private IP via bastion — see custom page',
  },
  'alb-intro': {
    concept: { en: '<p>ALB is Layer 7 — HTTP routing, health checks, target groups. Use <code>terraform-aws-modules/alb/aws</code> v9.x with AWS provider 5.x.</p>', hi: '<p>ALB HTTP load balancer — target groups.</p>', hinglish: '<p>ALB L7 — target groups.</p>' },
    hcl: 'module "alb" {\n  source  = "terraform-aws-modules/alb/aws"\n  version = "~> 9.0"\n  load_balancer_type = "application"\n}',
    lab: 'Hit ALB DNS — see default target response',
  },
  'path-host-routing': {
    concept: { en: '<p>Listener rules: path-pattern /api/* → API TG; host-header api.doonops.local → API. Rule priority matters (lower number = first).</p>', hi: '<p>Path aur host rules — priority order.</p>', hinglish: '<p>Listener rules priority.</p>' },
    hcl: '# listener_rule priority = 10 for /app1/*',
    lab: 'Add two target groups — test two URLs',
  },
  'https-acm': {
    concept: { en: '<p>ACM certificate + HTTPS listener on 443. Use DNS validation in Route53. Modern: TLS 1.2+ policies on listener.</p>', hi: '<p>ACM + HTTPS 443 listener.</p>', hinglish: '<p>ACM cert HTTPS listener.</p>' },
    hcl: '# aws_acm_certificate + listener certificate_arn',
    lab: 'Optional: needs domain in Route53 — skip if no domain',
  },
  'route53-rds-stack': {
    concept: { en: '<p>Full stack: Route53 alias to ALB, RDS in DB subnets, multi-AZ optional. Secrets in SSM Parameter Store or Secrets Manager — not in plain tfvars.</p>', hi: '<p>Route53 + ALB + RDS — passwords plain file mein nahi.</p>', hinglish: '<p>DNS + ALB + RDS — secrets manager.</p>' },
    hcl: '# module "rds" { engine = "mysql" ... }',
    lab: 'High cost lab — use destroy immediately; db skip for free tier practice',
  },
  'launch-templates-asg': {
    concept: { en: '<p>Launch Templates replace legacy Launch Configurations. ASG uses template version; combine with ALB target group for rolling capacity.</p>', hi: '<p>Launch Template + ASG — modern standard.</p>', hinglish: '<p>Launch template ASG not legacy LC.</p>' },
    hcl: 'resource "aws_launch_template" "app" {\n  name_prefix = "doonops-"\n  image_id      = var.ami_id\n  instance_type = "t3.micro"\n}',
    lab: 'Scale desired_capacity 1→2 — watch ASG in console',
  },
  'cloudwatch-alarms': {
    concept: { en: '<p>CloudWatch metric alarms on ALB 5xx, ASG CPU, unhealthy hosts. SNS topic for email alerts.</p>', hi: '<p>Alarms ALB/ASG — SNS email.</p>', hinglish: '<p>CloudWatch alarm SNS.</p>' },
    hcl: 'resource "aws_cloudwatch_metric_alarm" "alb_5xx" {\n  alarm_name = "doonops-alb-5xx"\n  threshold  = 10\n}',
    lab: 'terraform apply — confirm alarm exists in CloudWatch',
  },
  'nlb-tcp': {
    concept: { en: '<p>NLB is Layer 4 — TCP/UDP, static IPs, low latency. Use when need TCP pass-through not HTTP routing.</p>', hi: '<p>NLB TCP ke liye — ALB HTTP ke liye.</p>', hinglish: '<p>NLB TCP ALB HTTP.</p>' },
    hcl: 'load_balancer_type = "network"',
    lab: 'Compare ALB vs NLB use cases in notes',
  },
  'registry-modules': {
    concept: { en: '<p>Public registry: registry.terraform.io — pin versions. Read module README inputs/outputs.</p>', hi: '<p>Registry modules — version pin.</p>', hinglish: '<p>Terraform registry version pin.</p>' },
    hcl: 'module "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 5.0"\n}',
    lab: 'Browse registry — copy one module into lab',
  },
  'build-local-module': {
    concept: { en: '<p>Local module in <code>modules/s3-site</code> — reusable S3 static site pattern. Call from root with source = "./modules/s3-site".</p>', hi: '<p>Local module folder — reuse.</p>', hinglish: '<p>./modules/ own module.</p>' },
    hcl: 'module "site" {\n  source = "./modules/doonops-static-site"\n  bucket_name = "doonops-lab-unique-12345"\n}',
    lab: 'Create modules/ with main.tf outputs.tf — root calls module',
  },
  's3-dynamodb-backend': {
    concept: { en: '<p>Backend block: S3 bucket for state, DynamoDB table for lock ID. Team shares same backend config per env.</p>', hi: '<p>S3 state + DynamoDB lock.</p>', hinglish: '<p>remote backend S3 dynamodb lock.</p>' },
    hcl: 'terraform {\n  backend "s3" {\n    bucket         = "doonops-tf-state"\n    key            = "prod/terraform.tfstate"\n    region         = "ap-south-1"\n    dynamodb_table = "doonops-tf-lock"\n  }\n}',
    lab: 'Create bucket+table first (console or bootstrap) — migrate state: terraform init -migrate-state',
  },
  'remote-state-datasource': {
    concept: { en: '<p>data "terraform_remote_state" reads another stack outputs — VPC from networking, apps from compute.</p>', hi: '<p>remote state data source — stack link.</p>', hinglish: '<p>remote state data source.</p>' },
    hcl: 'data "terraform_remote_state" "vpc" {\n  backend = "s3"\n  config = { bucket = "doonops-tf-state", key = "network/terraform.tfstate", region = "ap-south-1" }\n}',
    lab: 'Two folders network/ and app/ — app reads vpc_id from remote state',
  },
  'pipeline-overview': {
    concept: { en: '<p>CI/CD: CodeBuild runs terraform plan/apply; CodePipeline stages dev→staging. Store AWS creds in pipeline secrets; use remote state.</p>', hi: '<p>CodePipeline + CodeBuild terraform.</p>', hinglish: '<p>CI/CD terraform plan apply pipeline.</p>' },
    hcl: '# buildspec.yml: terraform init && terraform plan',
    lab: 'Optional advanced — manual apply enough for associate exam',
  },
}

function templateContent(lessonKey, titles) {
  const meta = TOPIC_META[lessonKey] || {
    concept: {
      en: '<p>Study with Doonops — always <code>terraform plan</code> before <code>apply</code>.</p>',
      hi: '<p>हमेशा plan फिर apply — नीचे विस्तार और project files देखें।</p>',
      hinglish: '<p>plan pehle, apply baad — neeche detail + project files.</p>',
    },
    hcl: '# doonops-lab\nterraform {\n  required_version = ">= 1.9.0"\n}',
    lab: 'Follow project files + local lab steps.',
  }
  const t = titles
  const i18 = templateI18n(lessonKey, t.hi, meta.concept)
  const mkEn = () => ({
    goal: `Learn ${t.en} for Terraform on AWS.`,
    plain: `Hands-on topic with layman explanation, project files, and local lab.`,
    technical: 'AWS provider ~> 5.0; Terraform 1.9+; plan before apply.',
    analogy: 'Each lesson adds one floor to your cloud building.',
    steps: ['Read deep explanation', 'Copy project files', 'Run local lab', 'Try module check quiz'],
    concept: meta.concept.en,
    hcl: meta.hcl,
    localLab: {
      title: 'On your computer',
      prerequisites: ['Terraform 1.9+', 'AWS CLI for AWS modules', 'Terminal'],
      steps: [
        'Copy all files from Project files section into one folder',
        `mkdir -p ~/doonops-terraform/${lessonKey} && paste files`,
        'cd into folder',
        'terraform init && terraform validate',
        typeof meta.lab === 'string' ? meta.lab : 'terraform plan (review cost before apply)',
      ],
    },
    practice: {
      title: 'Practice',
      tasks: ['validate passes', 'can explain this topic in your own words'],
    },
  })
  const mkLoc = (loc, title, patch) => ({
    goal: patch.goal,
    plain: patch.plain,
    technical: patch.technical,
    analogy: patch.analogy,
    steps: patch.steps,
    concept: patch.concept || meta.concept[loc] || meta.concept.en,
    hcl: meta.hcl,
    localLab: {
      title: loc === 'hi' ? 'अपने कंप्यूटर पर' : 'Local machine par',
      prerequisites:
        loc === 'hi'
          ? ['Terraform 1.9+', 'AWS CLI (cloud labs)', 'टर्मिनल']
          : ['Terraform 1.9+', 'AWS CLI', 'Terminal'],
      steps: [
        loc === 'hi'
          ? '"Project files" से सारी फ़ाइलें एक फ़ोल्डर में कॉपी करें'
          : 'Project files section se saari files ek folder mein copy karo',
        loc === 'hi'
          ? `~/doonops-terraform/${lessonKey} फ़ोल्डर बनाएँ और फ़ाइलें paste करें`
          : `mkdir -p ~/doonops-terraform/${lessonKey} && paste karo`,
        loc === 'hi' ? 'उस फ़ोल्डर में cd करें' : 'cd us folder mein',
        'terraform init && terraform validate',
        typeof meta.lab === 'string'
          ? meta.lab
          : loc === 'hi'
            ? 'terraform plan (AWS: खर्च देखें) फिर apply'
            : 'terraform plan (cost dekho) phir apply',
      ],
    },
    practice: {
      title: loc === 'hi' ? 'अभ्यास' : 'Practice check',
      tasks:
        loc === 'hi'
          ? ['validate सफल', 'topic अपने शब्दों में समझा सकते हैं']
          : ['validate OK', 'topic apne words mein explain'],
    },
  })
  return {
    en: mkEn(),
    hi: mkLoc('hi', t.hi, i18.hi),
    hinglish: mkLoc('hinglish', t.hinglish, i18.hinglish),
  }
}

function appendProjectFiles(blocks, lessonId) {
  const lab = getLabProject(lessonId)
  if (!lab) return blocks
  const section = {
    type: 'section',
    translations: {
      en: { title: 'Project files for this lab', subtitle: 'Full implementation folder — copy all files, then run terraform commands' },
      hi: { title: 'इस लैब की प्रोजेक्ट फ़ाइलें', subtitle: 'पूरा फ़ोल्डर कॉपी करें, फिर terraform चलाएँ' },
      hinglish: { title: 'Is lab ki project files', subtitle: 'Poora folder copy karo, phir terraform run' },
    },
  }
  const pf = {
    type: 'projectFiles',
    translations: {
      en: { title: lab.en.title, subtitle: lab.en.subtitle, folderHint: lab.en.folderHint, files: lab.en.files },
      hi: { title: lab.hi.title, subtitle: lab.hi.subtitle, folderHint: lab.hi.folderHint, files: lab.hi.files },
      hinglish: {
        title: lab.hinglish.title,
        subtitle: lab.hinglish.subtitle,
        folderHint: lab.hinglish.folderHint,
        files: lab.hinglish.files,
      },
    },
  }
  const labIdx = blocks.findIndex((b) => b.type === 'localLab')
  const insertAt = labIdx >= 0 ? labIdx : blocks.length
  const out = [...blocks]
  out.splice(insertAt, 0, section, pf)
  return out
}

function buildLesson(moduleId, moduleTitle, lessonKey, titles, order, isLastInModule) {
  const id = `${moduleId}--${lessonKey}`
  const fullKey = id
  let content = LESSON_CONTENT[fullKey] || templateContent(lessonKey, titles)
  content = applyLessonI18n(content, fullKey)
  let blocks = buildLessonBlocks(content)
  blocks = appendProjectFiles(blocks, id)
  if (isLastInModule) {
    blocks = appendQuizBlock(blocks, getModuleQuiz(moduleId))
  }
  if (LESSON_CONTENT[fullKey]) {
    for (const loc of ['en', 'hi', 'hinglish']) {
      const intro = blocks.find((b) => b.type === 'intro')
      if (intro) {
        intro.translations[loc].html = introHtml(loc, content[loc], LABELS[loc])
        intro.translations[loc].goal = content[loc].goal
        intro.translations[loc].plain = content[loc].plain
      }
    }
  }
  return {
    id,
    moduleId,
    moduleTitle: moduleTitle.en,
    title: titles.en,
    order,
    sourceFile: `doonops-curriculum/${id}.md`,
    blocks,
    beginnerFriendly: true,
  }
}

const modules = []
const lessons = []

for (const mod of TERRAFORM_MODULES) {
  if (mod.id === 'certification') continue
  const plan = LESSON_PLAN.find((p) => p.moduleId === mod.id)
  const lessonIds = []
  let order = 0
  if (plan) {
    for (let li = 0; li < plan.lessons.length; li++) {
      const le = plan.lessons[li]
      order++
      const isLast = li === plan.lessons.length - 1
      const lesson = buildLesson(mod.id, mod.title, le.id, le.title, order, isLast)
      lessons.push(lesson)
      lessonIds.push(lesson.id)
    }
  }
  modules.push({
    id: mod.id,
    title: mod.title.en,
    order: mod.order,
    lessonIds,
  })
}

// Certification module
const certMod = TERRAFORM_MODULES.find((m) => m.id === 'certification')
modules.push({
  id: 'certification',
  title: certMod.title.en,
  order: certMod.order,
  lessonIds: [CERT_LESSON.id],
})

// Fix cert intro html
const certIntro = CERT_LESSON.blocks[0]
for (const loc of ['en', 'hi', 'hinglish']) {
  certIntro.translations[loc].html = introHtml(loc, certIntro.translations[loc], LABELS[loc])
}
lessons.push(CERT_LESSON)

const course = {
  id: 'terraform-aws',
  title: 'Terraform on AWS — Beginner to Certification',
  description:
    'Original Doonops course: IaC fundamentals to production AWS patterns, local hands-on labs every module, HashiCorp Terraform Associate prep.',
  level: 'Beginner → Associate ready',
  audience: 'No prior Terraform required — AWS account for cloud labs',
  lessonsCount: lessons.length,
  modules: modules.sort((a, b) => a.order - b.order),
  lessons,
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(course))
console.log(`Wrote ${lessons.length} lessons, ${modules.length} modules → ${OUT}`)
