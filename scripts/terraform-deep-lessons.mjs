/**
 * Rich layman + technical explanations for every Terraform lesson.
 * Merged into LESSON_CONTENT at generate time (overrides thin templates).
 */

const wrap = (html) => `<div class="lesson-prose lesson-deep">${html}</div>`

/** @param {object} o */
function L(o) {
  const base = {
    steps: o.steps?.en
      ? o.steps
      : {
          en: o.stepsEn || ['Read simple section', 'Read analogy + diagram', 'Copy project files', 'Do local lab'],
          hi: o.stepsHi || ['आसान भाषा पढ़ें', 'उदाहरण देखें', 'फ़ाइलें कॉपी करें', 'लैब करें'],
          hinglish: o.stepsHinglish || ['Simple padho', 'Diagram dekho', 'Files copy', 'Lab karo'],
        },
  }
  return {
    en: {
      goal: o.goalEn,
      plain: o.plainEn,
      technical: o.techEn,
      analogy: o.analogyEn,
      steps: base.steps.en,
      concept: wrap(o.conceptEn),
      hcl: o.hcl,
      localLab: o.localLabEn,
      practice: o.practiceEn,
    },
    hi: {
      goal: o.goalHi || o.goalEn,
      plain: o.plainHi || o.plainEn,
      technical: o.techHi || o.techEn,
      analogy: o.analogyHi || o.analogyEn,
      steps: base.steps.hi,
      concept: wrap(o.conceptHi || o.conceptEn),
      hcl: o.hcl,
      localLab: o.localLabHi || o.localLabEn,
      practice: o.practiceHi || o.practiceEn,
    },
    hinglish: {
      goal: o.goalHinglish || o.goalEn,
      plain: o.plainHinglish || o.plainEn,
      technical: o.techHinglish || o.techEn,
      analogy: o.analogyHinglish || o.analogyEn,
      steps: base.steps.hinglish,
      concept: wrap(o.conceptHinglish || o.conceptHi || o.conceptEn),
      hcl: o.hcl,
      localLab: o.localLabHinglish || o.localLabHi || o.localLabEn,
      practice: o.practiceHinglish || o.practiceHi || o.practiceEn,
    },
  }
}

export const DEEP_LESSONS = {
  'iac-fundamentals--terraform-vs-others': L({
    goalEn: 'Understand why Terraform beats manual console work — in words you can explain to a friend.',
    plainEn:
      'ClickOps = clicking AWS buttons every time. Terraform = writing a recipe once and re-running it. Same recipe gives same kitchen (cloud) result.',
    techEn: 'Declarative IaC with plan/apply; multi-provider; state tracks mapping. CloudFormation is AWS-only; Terraform workflow is portable.',
    analogyEn: 'Ordering food by phone call every day (ClickOps) vs using the same written order form (Terraform).',
    conceptEn: `
<h3>In simple words</h3>
<p><strong>ClickOps</strong> = manual changes in AWS console. Fast for one fix, terrible for teams: no history, hard to repeat, easy to forget a step.</p>
<p><strong>Terraform</strong> = you describe what should exist; tool calculates diff and applies. Git stores who changed what.</p>
<h3>When teams pick Terraform</h3>
<ul>
<li>Same staging and production shape</li>
<li>Code review before infra change</li>
<li>Works with AWS today, other clouds tomorrow</li>
</ul>
<p class="layman-highlight">You are not "learning AWS less" — you learn AWS <em>better</em> because you see resources as connected building blocks.</p>`,
    hcl: 'terraform {\n  required_providers {\n    aws = { source = "hashicorp/aws", version = "~> 5.0" }\n  }\n}',
    localLabEn: { title: 'Compare on paper', steps: ['Write 5 steps to create a VPC in console', 'Write same 5 steps as .tf blocks', 'Which is easier to repeat next week?'] },
    practiceEn: { title: 'Check', tasks: ['Explain ClickOps in one sentence', 'One benefit of Git + Terraform'] },
  }),

  'setup-cli--install-tools': L({
    goalEn: 'Install Terraform and verify AWS CLI — after AWS account lesson if you do cloud labs.',
    plainEn: 'Two programs on your laptop: Terraform (reads .tf files) and AWS CLI (talks to Amazon with your keys).',
    techEn: 'Terraform 1.9+; AWS CLI v2; credentials via aws configure; provider uses same chain.',
    analogyEn: 'Terraform = chef following recipe. AWS CLI = phone line to the supplier (AWS).',
    conceptEn: `
<h3>Install order</h3>
<ol>
<li><strong>AWS setup lesson</strong> (if Module 6+ planned) — account + aws configure</li>
<li><strong>Terraform</strong> — brew install terraform or official installer</li>
<li><strong>Editor</strong> — VS Code + HashiCorp Terraform extension (syntax highlight)</li>
</ol>
<pre class="course-diagram">terraform version    → must show 1.9+
aws --version        → must show aws-cli/2.x
aws sts get-caller-identity  → JSON with Account (after configure)</pre>`,
    hcl: '# versions.tf\nterraform {\n  required_version = ">= 1.9.0"\n}',
    practiceEn: { title: 'Check', tasks: ['terraform version OK', 'get-caller-identity OK if AWS labs planned'] },
  }),

  'setup-cli--project-layout': L({
    goalEn: 'Learn which file holds what — so projects do not become one giant messy file.',
    plainEn: 'Split recipe into small notebooks: versions, cloud login, settings (variables), main dishes (resources), results (outputs).',
    techEn: 'Separation of concerns: versions.tf, providers.tf, variables.tf, main.tf, outputs.tf; .gitignore for state and secrets.',
    analogyEn: 'Kitchen drawers: spices (variables), appliances (providers), cooking steps (main), plated food photo (outputs).',
    conceptEn: `
<h3>Each file — layman meaning</h3>
<ul>
<li><code>versions.tf</code> — minimum Terraform version (which app version)</li>
<li><code>providers.tf</code> — which cloud + region (which shop you order from)</li>
<li><code>variables.tf</code> — adjustable knobs (size, name, environment)</li>
<li><code>main.tf</code> — actual servers, networks, databases</li>
<li><code>outputs.tf</code> — print useful results after apply (IP, URL)</li>
<li><code>.gitignore</code> — never upload secrets or state to GitHub</li>
</ul>
<pre class="course-diagram">your-project/
  versions.tf
  providers.tf
  variables.tf
  main.tf
  outputs.tf
  .gitignore</pre>`,
    hcl: '# .gitignore\n.terraform/\n*.tfstate*\n*.pem\n.terraform.lock.hcl',
    practiceEn: { title: 'Check', tasks: ['Name 4 file types and purpose', '.gitignore why needed'] },
  }),

  'hcl-core--hcl-syntax': L({
    goalEn: 'Read and write basic HCL blocks without fear.',
    plainEn: 'HCL is not Python. It is a list of labeled boxes: resource "type" "name" { settings inside }.',
    techEn: 'Blocks: resource, data, variable, output, module, provider. Attributes key = value; types string, number, bool, list, map.',
    analogyEn: 'Filling a government form: section title (resource), your name (resource name), fields inside { }.',
    conceptEn: `
<h3>One resource — explained like a form</h3>
<pre class="course-diagram">resource "aws_instance" "doonops_app" {
       │              │            │
       │              │            └── your nickname for this server (only in Terraform)
       │              └── AWS product type (EC2 instance)
       └── keyword: we are CREATING something

  ami           = "ami-xxx"      ← which OS image (like Windows vs Linux DVD)
  instance_type = "t3.micro"     ← size (small / medium machine)
  tags = { Name = "doonops-app" } ← labels for humans
}</pre>
<h3>Data types (simple)</h3>
<ul>
<li><strong>String</strong> — text in quotes: <code>"ap-south-1"</code></li>
<li><strong>Number</strong> — no quotes: <code>3</code></li>
<li><strong>List</strong> — [ ] multiple values: subnets list</li>
<li><strong>Map</strong> — { } key-value tags</li>
</ul>
<p class="layman-highlight">Terraform HCL mein Python jaisa <code>for i in range()</code> loop resource block ke andar usually <strong>nahi</strong> likhte — uske liye <code>count</code> / <code>for_each</code> use hota hai (next modules).</p>`,
    hcl: 'resource "aws_instance" "doonops_app" {\n  ami           = data.aws_ami.amazon_linux.id\n  instance_type = "t3.micro"\n  tags = { Name = "doonops-app" }\n}',
    practiceEn: { title: 'Check', tasks: ['What does resource "aws_instance" "app" mean?', 'String vs number example'] },
  }),

  'hcl-core--workflow-init-plan-apply': L({
    goalEn: 'Master the 3 commands you will use every day: init, plan, apply.',
    plainEn: 'init = download tools. plan = rehearsal (what will change). apply = actually do it.',
    techEn: 'init installs providers/backends; plan builds graph and diff; apply executes API calls; destroy removes resources.',
    analogyEn: 'init = buy ingredients. plan = read recipe aloud to family. apply = cook. destroy = clean kitchen after party.',
    conceptEn: `
<h3>Command flow (diagram)</h3>
<pre class="course-diagram">Write .tf files
      ↓
 terraform init     ← first time / after new provider
      ↓
 terraform plan     ← ALWAYS read this ( + create, ~ change, - destroy )
      ↓
 terraform apply    ← type yes (or -auto-approve only in labs)
      ↓
 terraform destroy  ← when lab finished (save money)</pre>
<h3>Symbols in plan output</h3>
<ul>
<li><code>+</code> green — will <strong>create</strong> new</li>
<li><code>~</code> yellow — will <strong>change</strong></li>
<li><code>-</code> red — will <strong>destroy</strong></li>
</ul>
<p class="layman-highlight">Beginners skip plan and get surprises. Treat plan like checking your exam answer sheet before submit.</p>`,
    hcl: '# terraform init\n# terraform plan\n# terraform apply\n# terraform destroy',
    practiceEn: { title: 'Check', tasks: ['Order init/plan/apply', 'What + means in plan'] },
  }),

  'variables-state--input-output-vars': L({
    goalEn: 'Variables and outputs — the #1 beginner topic. Learn like form fields, not magic.',
    plainEn:
      'variable = question on a form ("What size server?"). var.name = read the answer. output = result you show after work ("Here is the website URL").',
    techEn: 'Input variables with type, default, validation; var. reference; output values exposed after apply; tfvars files per environment; sensitive flag.',
    analogyEn:
      'Pizza order form: variable = crust size choice. tfvars = your saved usual order. output = receipt with order number.',
    conceptEn: `
<h3>Variable — simplest definition</h3>
<p>A <strong>variable</strong> is an <em>empty slot you fill in later</em> so one code works for dev and prod without editing main.tf every time.</p>
<pre class="course-diagram">variable "environment" {
  type    = string
  default = "dev"        ← if nobody passes a value, use "dev"
}

resource "aws_instance" "app" {
  tags = { Env = var.environment }   ← var. = read the variable
}</pre>
<p><strong>Layman:</strong> <code>var.environment</code> means "whatever word the user chose for environment".</p>

<h3>Where values come from (3 ways)</h3>
<ol>
<li><strong>default</strong> in variables.tf — automatic</li>
<li><strong>terraform.tfvars</strong> file — your saved answers per project</li>
<li><strong>command line</strong> — <code>terraform apply -var="environment=staging"</code></li>
</ol>

<h3>Output — simplest definition</h3>
<p>After apply, Terraform can <strong>print/share</strong> useful values.</p>
<pre class="course-diagram">output "instance_id" {
  value = aws_instance.app.id    ← pipe result out to human or other code
}</pre>
<p><strong>Layman:</strong> Output = "show me the answer" after cooking — IP address, load balancer DNS, etc.</p>

<h3>Types (beginner table)</h3>
<table class="tf-error-table">
<tr><th>Type</th><th>Meaning</th><th>Example value</th></tr>
<tr><td>string</td><td>Text</td><td>"ap-south-1"</td></tr>
<tr><td>number</td><td>Count</td><td>3</td></tr>
<tr><td>bool</td><td>Yes/no</td><td>true</td></tr>
<tr><td>list(...)</td><td>List of items</td><td>["a","b"]</td></tr>
<tr><td>map(...)</td><td>Dictionary</td><td>{ size = "t3.micro" }</td></tr>
</table>

<h3>Common beginner mistakes</h3>
<ul>
<li>Writing <code>environment</code> instead of <code>var.environment</code> inside resources</li>
<li>Putting secrets in tfvars and pushing to GitHub — use env vars or AWS Secrets Manager later</li>
<li>Expecting output to exist before apply — outputs appear after resources exist</li>
</ul>`,
    goalHi: 'Variables aur outputs — form fields jaisa samjho, magic nahi.',
    plainHi: 'variable = form ka sawal. var.name = jawab padhna. output = kaam ke baad result dikhana (URL, IP).',
    conceptHi: `
<h3>Variable kya hai?</h3>
<p><strong>खाली जगह</strong> — एक code dev और prod दोनों के लिए; हर बार main.tf नहीं बदलते।</p>
<pre class="course-diagram">variable "environment" { default = "dev" }
tags = { Env = var.environment }  ← var. zaroori hai</pre>
<h3>Value kahan se?</h3>
<ol><li>default</li><li>terraform.tfvars file</li><li>-var="..." command</li></ol>
<h3>Output kya hai?</h3>
<p>Apply ke baad useful cheez print — instance id, DNS.</p>
<h3>Galatiyan</h3>
<ul><li>var. bhool jana</li><li>password Git mein dalna</li></ul>`,
    hcl: 'variable "environment" {\n  type    = string\n  default = "dev"\n}\n\noutput "env_label" {\n  value = var.environment\n}',
    practiceEn: { title: 'Check', tasks: ['var. kyun lagta hai', 'tfvars vs default', 'output kab milta hai'] },
  }),

  'variables-state--state-basics': L({
    goalEn: 'Understand state file — Terraform\'s memory of what it created.',
    plainEn: 'State = notebook where Terraform writes "I created server i-abc123". Without it, Terraform forgets and tries duplicate.',
    techEn: 'terraform.tfstate JSON maps address to real IDs; state mv/rm; remote backend S3; locking DynamoDB.',
    analogyEn: 'Sticker on each box in warehouse — Terraform scans stickers next time instead of buying new boxes.',
    conceptEn: `
<h3>Why state exists</h3>
<p>Cloud has real IDs (i-0abc...). Your .tf files only have logical names (<code>aws_instance.app</code>). State connects them.</p>
<pre class="course-diagram">main.tf says: aws_instance.app
state says:  aws_instance.app = i-0abc123 in ap-south-1
AWS has:       real running server i-0abc123</pre>
<h3>Rules</h3>
<ul>
<li>Do not edit .tfstate by hand unless expert</li>
<li>Do not commit state to public Git (has secrets sometimes)</li>
<li>Team uses remote state (later module)</li>
</ul>
<h3>Useful commands</h3>
<pre class="course-diagram">terraform state list
terraform show
terraform state show aws_instance.app</pre>`,
    hcl: '# terraform state list\n# terraform show',
    practiceEn: { title: 'Check', tasks: ['Why state needed', 'Why not commit state to GitHub'] },
  }),

  'meta-arguments--count-foreach': L({
    goalEn: 'count vs for_each vs "for" — stop confusing them with Python loops.',
    plainEn:
      'Terraform is NOT Python. To make many similar resources you use count (numbered copies) or for_each (named copies from a map/set).',
    techEn: 'Meta-arguments count and for_each on modules/resources; for expressions in attributes; dynamic blocks; lifecycle ignore_changes.',
    analogyEn:
      'count = photocopy 3 identical flyers (page 0,1,2). for_each = print one flyer per city name from a list (Mumbai, Delhi).',
    conceptEn: `
<h3>First: Terraform "for loop" confusion</h3>
<p class="layman-highlight">Beginners search "for loop in Terraform" because they know Python. In Terraform you usually mean one of these:</p>
<table class="tf-error-table">
<tr><th>You want</th><th>Use</th><th>Layman</th></tr>
<tr><td>3 identical servers</td><td><code>count = 3</code></td><td>3 photocopies</td></tr>
<tr><td>1 server per name in a list</td><td><code>for_each = toset(...)</code></td><td>1 per label</td></tr>
<tr><td>Transform a list inside one field</td><td><code>for =</code> expression in attribute</td><td>Excel formula inside one cell</td></tr>
</table>

<h3>count — numbered copies (0, 1, 2…)</h3>
<pre class="course-diagram">resource "aws_subnet" "private" {
  count = 2                    ← make 2 subnets

  cidr_block = var.cidrs[count.index]   ← index 0 then 1
}</pre>
<p><strong>Simple:</strong> count = "how many clones". <code>count.index</code> = clone number starting 0.</p>
<p><strong>Downside:</strong> remove item from middle of list → Terraform may destroy/recreate wrong one (index shift). Exam loves this trap.</p>

<h3>for_each — one resource per map key (stable names)</h3>
<pre class="course-diagram">variable "subnets" {
  default = {
    app = "10.0.1.0/24"
    db  = "10.0.2.0/24"
  }
}

resource "aws_subnet" "this" {
  for_each = var.subnets     ← key = app, db

  cidr_block = each.value    ← CIDR for that key
  tags       = { Name = each.key }
}</pre>
<p><strong>Simple:</strong> <code>each.key</code> = name (app, db). <code>each.value</code> = value (CIDR).</p>
<p><strong>When better:</strong> named environments, stable keys, exam answer "use for_each when keys matter".</p>

<h3>for expression (inside one attribute — not same as count)</h3>
<pre class="course-diagram">tags = { for k, v in var.extra_tags : k => v if v != "" }</pre>
<p>This builds a map — does NOT create 5 resources by itself.</p>

<h3>Quick pick guide</h3>
<ul>
<li>Need <strong>N copies</strong> of same thing → <code>count</code></li>
<li>Need <strong>named</strong> items from map/set → <code>for_each</code></li>
<li>Need to tweak one field from list → <code>for</code> expression</li>
</ul>`,
    goalHi: 'count vs for_each — Python loop nahi; photocopy vs naam wale copies.',
    plainHi: 'count = 0,1,2 numbered clones. for_each = har naam ke liye alag copy (app, db). for expression = ek field andar transform.',
    conceptHi: `
<h3>Python loop nahi!</h3>
<p>Terraform mein zyada tar <code>count</code> ya <code>for_each</code> use hota hai.</p>
<h3>count</h3>
<p>2 subnet = count = 2, count.index se CIDR lo.</p>
<h3>for_each</h3>
<p>Map keys: app, db — each.key naam, each.value CIDR.</p>
<h3>Exam tip</h3>
<p>Stable names chahiye → for_each. Sirf number chahiye → count.</p>`,
    hcl: `variable "subnets" {
  type = map(string)
  default = {
    app = "10.0.1.0/24"
    db  = "10.0.2.0/24"
  }
}

resource "aws_subnet" "named" {
  for_each   = var.subnets
  vpc_id     = var.vpc_id
  cidr_block = each.value
  tags       = { Name = each.key }
}`,
    practiceEn: { title: 'Check', tasks: ['count vs for_each one line each', 'what each.key is', 'Python for loop same? (no)'] },
  }),
}

// Append remaining AWS/advanced topics with same depth pattern
const awsTopics = {
  'aws-vpc--vpc-design': {
    goalEn: 'Draw 3-tier network in your head before writing HCL.',
    plainEn: 'VPC = your private colony. Public road (IGW), private houses (app), locked vault street (database). NAT = back gate to internet for private houses.',
    conceptEn: `
<pre class="course-diagram">Internet
   ↓
[ Internet Gateway ]
   ↓
 PUBLIC subnets  → ALB lives here (users can reach)
   ↓
 PRIVATE app subnets → EC2 (no direct internet)
   ↓
 PRIVATE DB subnets → RDS (only app can talk)</pre>
<p><strong>NAT Gateway</strong> lets private servers download updates outbound — costs money; use one NAT in labs.</p>`,
  },
  'aws-vpc--vpc-terraform': {
    goalEn: 'Build VPC using official module — do not hand-write 20 subnet resources on day one.',
    plainEn: 'Module = pre-built LEGO kit for VPC. You pass cidr, azs, subnet lists — module builds IGW, routes, NAT.',
    conceptEn: `<p>Module <code>terraform-aws-modules/vpc/aws</code> saves time. Pin version <code>~> 5.0</code>.</p>
<p class="layman-highlight">Hand-writing every subnet is exam knowledge; modules are real job skill.</p>`,
    hcl: 'module "vpc" {\n  source  = "terraform-aws-modules/vpc/aws"\n  version = "~> 5.0"\n  name = "doonops-vpc"\n  cidr = "10.1.0.0/16"\n  azs  = ["ap-south-1a"]\n  public_subnets  = ["10.1.1.0/24"]\n  private_subnets = ["10.1.2.0/24"]\n}',
  },
  'aws-compute--ec2-and-sg': {
    goalEn: 'EC2 = virtual computer. Security Group = firewall jacket around it.',
    plainEn: 'EC2 in private subnet = laptop in bedroom (not on street). SG = rules: who can knock on port 80, 443, 22.',
    conceptEn: `<p><strong>Security group</strong> stateful: return traffic allowed if inbound allowed.</p>
<p>Pattern: ALB SG allows 80 from world; App SG allows 80 only from ALB SG (not from 0.0.0.0/0).</p>`,
  },
  'aws-compute--user-data': {
    goalEn: 'Bootstrap script that runs when server boots first time.',
    plainEn: 'user_data = sticky note on new server: "install nginx, show hello page". templatefile() fills name dynamically.',
    conceptEn: `<p>Runs as root/cloud-init at boot — great for demos; for production consider Ansible/SSM later.</p>`,
  },
  'aws-alb--alb-intro': {
    goalEn: 'ALB spreads website visitors across multiple servers.',
    plainEn: 'One front door (DNS → ALB) → many waiters (EC2 targets) in kitchen.',
    conceptEn: `<p>Layer 7 = understands HTTP (paths, headers). Target group = group of servers. Health check = ALB pings /health.</p>`,
  },
  'aws-routing--path-host-routing': {
    goalEn: 'Send /api to API servers and / to web servers — same ALB.',
    plainEn: 'Receptionist reads URL path: /api → backend team, / → frontend team.',
    conceptEn: `<p>Listener rules have <strong>priority</strong> — lower number wins first. Conflicts = exam trap.</p>`,
  },
  'aws-routing--https-acm': {
    goalEn: 'HTTPS = lock on browser bar. ACM gives free cert if you prove domain ownership.',
    plainEn: 'Certificate = padlock on https://yoursite.com. Attach cert to ALB listener 443.',
    conceptEn: `<p>DNS validation in Route53 easiest on AWS. HTTP still on 80 can redirect to 443.</p>`,
  },
  'aws-three-tier--route53-rds-stack': {
    goalEn: 'Full app: DNS name → ALB → EC2 → database.',
    plainEn: 'User types domain → Route53 phonebook → ALB door → EC2 waiter → RDS storage room.',
    conceptEn: `<p>DB passwords never plain in Git. RDS in DB subnets — no public IP.</p>
<p class="layman-highlight">Expensive lab — destroy same day.</p>`,
  },
  'aws-scaling--launch-templates-asg': {
    goalEn: 'Auto Scaling = hire/fire servers automatically based on load.',
    plainEn: 'Launch template = employee ID badge design. ASG = HR that keeps 2–10 servers alive.',
    conceptEn: `<p>desired_capacity = how many now. max = ceiling. min = floor.</p>`,
  },
  'aws-observability--cloudwatch-alarms': {
    goalEn: 'Alarm = smoke detector on metrics (CPU high, 5xx errors).',
    plainEn: 'If errors &gt; 10 in 5 min → send email/SMS via SNS.',
    conceptEn: `<p>Define metric, threshold, period, action.</p>`,
  },
  'aws-observability--nlb-tcp': {
    goalEn: 'NLB when you need TCP speed, not HTTP routing.',
    plainEn: 'ALB = smart HTTP receptionist. NLB = fast forklift for raw TCP.',
    conceptEn: `<p>Games, TLS pass-through, static IPs — NLB use cases.</p>`,
  },
  'terraform-modules--registry-modules': {
    goalEn: 'Use community tested modules instead of reinventing VPC.',
    plainEn: 'Registry = app store for Terraform LEGO kits. Always pin version number.',
    conceptEn: `<p>registry.terraform.io — read Inputs/Outputs tabs like product manual.</p>`,
  },
  'terraform-modules--build-local-module': {
    goalEn: 'Wrap your own pattern as module — call from root.',
    plainEn: 'modules/s3-site/ = reusable recipe card. Root module = head chef calling it.',
    conceptEn: `<pre class="course-diagram">root main.tf → module "site" { source = "./modules/doonops-static-site" }</pre>`,
  },
  'remote-state--s3-dynamodb-backend': {
    goalEn: 'Team shares one state file in S3 — with lock so two people do not apply together.',
    plainEn: 'State in cloud drawer (S3). DynamoDB lock = "occupied" sign on drawer.',
    conceptEn: `<p>bootstrap bucket+table once. init -migrate-state moves local state up.</p>`,
  },
  'remote-state--remote-state-datasource': {
    goalEn: 'Read another project\'s outputs — VPC team → App team.',
    plainEn: 'Network team publishes vpc_id. App team imports it like phone number from directory.',
    conceptEn: `<p>data.terraform_remote_state — no duplicate VPC.</p>`,
  },
  'iac-devops--pipeline-overview': {
    goalEn: 'Run terraform plan in GitHub/CodeBuild before human approves apply.',
    plainEn: 'Every Git push → robot runs plan → human reads → approve apply.',
    conceptEn: `<p>Never long-lived AWS keys in repo — OIDC/IR role preferred in real companies.</p>`,
  },
}

for (const [id, t] of Object.entries(awsTopics)) {
  DEEP_LESSONS[id] = L({
    goalEn: t.goalEn,
    plainEn: t.plainEn,
    techEn: t.techEn || t.plainEn,
    analogyEn: t.analogyEn || t.plainEn,
    conceptEn: t.conceptEn,
    hcl: t.hcl || '# see project files',
    practiceEn: { title: 'Quick check', tasks: ['Explain topic to a friend in 2 sentences', 'Did local lab steps'] },
  })
}
