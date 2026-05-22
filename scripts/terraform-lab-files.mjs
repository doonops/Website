/**
 * Complete per-lesson project files (like reference course folders).
 * User copies entire folder to ~/doonops-terraform/<lab-folder>/ and runs terraform.
 */

const GITIGNORE = `.terraform/
.terraform.lock.hcl
*.tfstate
*.tfstate.*
*.tfvars
!*.tfvars.example
crash.log
override.tf
*.pem
.DS_Store
`

const VERSIONS = `terraform {
  required_version = ">= 1.9.0"
}
`

function awsProvider(region = 'ap-south-1') {
  return `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "doonops-lab"
      ManagedBy   = "terraform"
      Environment = var.environment
    }
  }
}

variable "aws_region" {
  type    = string
  default = "${region}"
}

variable "environment" {
  type    = string
  default = "dev"
}
`
}

/** @param {string} folder @param {{path:string,content:string,desc?:string}[]} files */
function pack(folder, files, desc = {}) {
  const meta = {
    en: {
      title: 'Lab project files (full folder)',
      subtitle: 'Copy every file below into one folder — same as a real repo module. Then run the local lab steps.',
      folderHint: `Suggested path: ~/doonops-terraform/${folder}/`,
    },
    hi: {
      title: 'लैब प्रोजेक्ट फ़ाइलें (पूरा फ़ोल्डर)',
      subtitle: 'नीचे की हर फ़ाइल एक फ़ोल्डर में कॉपी करें — फिर local lab steps चलाएँ।',
      folderHint: `पथ: ~/doonops-terraform/${folder}/`,
    },
    hinglish: {
      title: 'Lab project files (poora folder)',
      subtitle: 'Saari files ek folder mein copy karo — repo jaisa. Phir local lab steps.',
      folderHint: `Path: ~/doonops-terraform/${folder}/`,
    },
  }
  const descFallback = {
    hi: 'इस फ़ाइल का उद्देश्य नीचे कोड में देखें',
    hinglish: 'Is file ka kaam code mein dekho',
    en: 'See file purpose in the code below',
  }
  for (const loc of ['en', 'hi', 'hinglish']) {
    meta[loc].files = files.map((f) => ({
      path: f.path,
      content: f.content,
      description:
        (typeof f.desc === 'object' ? f.desc[loc] : null) ||
        (typeof f.desc === 'object' ? f.desc.en : null) ||
        (typeof f.desc === 'string' ? f.desc : null) ||
        descFallback[loc],
    }))
  }
  return meta
}

/** lessonId -> pack */
export const LAB_PROJECTS = {
  'course-intro--welcome-to-terraform': pack('00-welcome', [
    { path: 'versions.tf', content: VERSIONS, desc: { en: 'Terraform version pin' } },
    {
      path: 'main.tf',
      content: '# Read welcome lesson first — add resources in next modules\n',
      desc: {
        en: 'Empty until Module 1',
        hi: 'Module 1 तक खाली',
        hinglish: 'Module 1 tak khali file',
      },
    },
    { path: 'README.md', content: `# Doonops Lab 00 — Welcome\n\n1. Read the course intro lesson\n2. Next folder: 01-iac-basics\n`, desc: { en: 'Lab notes' } },
  ]),

  'iac-fundamentals--what-is-iac': pack('01-iac-basics', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'main.tf', content: `# First IaC file — no AWS yet\nterraform {\n  required_version = ">= 1.9.0"\n}\n` },
    { path: 'README.md', content: '# Lab 01\n\nterraform init\nterraform validate\n', desc: { en: 'Commands' } },
  ]),

  'iac-fundamentals--terraform-vs-others': pack('01b-providers', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'main.tf', content: '# Provider only — no resources (no cost)\n# terraform init && terraform validate\n' },
  ]),

  'setup-cli--aws-account-setup': pack('02-aws-setup', [
    {
      path: 'README.md',
      content: `# AWS setup checklist (Doonops)

## 1. Account
- https://aws.amazon.com/free/ → Create account
- Region: ap-south-1 (Mumbai)

## 2. IAM user (not root)
- Name: doonops-terraform-lab
- Programmatic access + PowerUserAccess (learning only)
- Save Access Key ID + Secret (CSV) — never commit to Git

## 3. Local CLI
\`\`\`bash
brew install awscli          # Mac
aws --version
aws configure                # paste keys, region ap-south-1, json
aws sts get-caller-identity  # must succeed
\`\`\`

## 4. Billing safety
- Budget alert at $5 in AWS Billing
- After every lab: terraform destroy
`,
      desc: { en: 'Full AWS setup steps' },
    },
    { path: '.gitignore', content: 'credentials.csv\n*.pem\n.env\n', desc: { en: 'Never commit keys' } },
  ]),

  'setup-cli--install-tools': pack('03-install-tools', [
    {
      path: 'README.md',
      content: `# Lab 02 — Install tools\n\n## Terraform\n- macOS: brew install terraform\n- Windows: choco install terraform / MSI from hashicorp.com\n\n## AWS CLI\n- aws configure\n- aws sts get-caller-identity\n\nVerify:\n\`\`\`bash\nterraform version\naws --version\n\`\`\`\n`,
    },
  ]),

  'setup-cli--project-layout': pack('04-layout', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'variables.tf', content: 'variable "project_name" {\n  type    = string\n  default = "doonops"\n}\n' },
    { path: 'main.tf', content: '# Core resources go here\n' },
    { path: 'outputs.tf', content: '# output "example" { value = "hello" }\n' },
    { path: '.gitignore', content: GITIGNORE },
    { path: 'README.md', content: '# Standard layout\n\nversions.tf providers.tf variables.tf main.tf outputs.tf\n' },
  ]),

  'hcl-core--hcl-syntax': pack('04-hcl-ec2', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

resource "aws_instance" "doonops_app" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t3.micro"
  tags = { Name = "doonops-app" }
}
`,
    },
    { path: 'outputs.tf', content: 'output "instance_id" {\n  value = aws_instance.doonops_app.id\n}\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'hcl-core--workflow-init-plan-apply': pack('05-workflow', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `resource "aws_s3_bucket" "workflow_demo" {
  bucket = "doonops-workflow-demo-\${var.suffix}"
  tags   = { Name = "doonops-workflow-demo" }
}

resource "aws_s3_bucket_versioning" "workflow_demo" {
  bucket = aws_s3_bucket.workflow_demo.id
  versioning_configuration { status = "Enabled" }
}
`,
    },
    { path: 'variables.tf', content: 'variable "suffix" {\n  type = string\n  # unique per student: your initials + numbers\n}\n' },
    { path: 'terraform.tfvars.example', content: 'suffix = "abc12345"\n' },
    { path: '.gitignore', content: GITIGNORE },
    { path: 'README.md', content: '# Workflow\n\nterraform init\nterraform plan\nterraform apply\nterraform destroy\n' },
  ]),

  'variables-state--input-output-vars': pack('06-variables', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'variables.tf',
      content: `variable "environment" {
  type    = string
  default = "dev"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}
`,
    },
    {
      path: 'main.tf',
      content: `locals {
  name_prefix = "\${var.environment}-doonops"
}

resource "aws_instance" "app" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type
  tags          = { Name = "\${local.name_prefix}-app" }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter { name = "name" values = ["al2023-ami-*-x86_64"] }
}
`,
    },
    { path: 'outputs.tf', content: 'output "env_label" { value = var.environment }\noutput "instance_id" { value = aws_instance.app.id }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'variables-state--state-basics': pack('07-state', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'main.tf', content: 'resource "aws_s3_bucket" "state_lab" {\n  bucket = "doonops-state-lab-${var.suffix}"\n}\n' },
    { path: 'variables.tf', content: 'variable "suffix" { type = string }\n' },
    { path: 'README.md', content: '# State lab\n\nterraform state list\nterraform show\n# Never commit terraform.tfstate to Git\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'meta-arguments--count-foreach': pack('08-meta-args', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'variables.tf',
      content: `variable "subnet_cidrs" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "app_ports" {
  type    = set(number)
  default = [80, 443]
}
`,
    },
    {
      path: 'main.tf',
      content: `resource "aws_security_group" "per_port" {
  for_each = var.app_ports
  name     = "doonops-port-\${each.key}"
  vpc_id   = module.vpc.vpc_id

  ingress {
    from_port   = each.key
    to_port     = each.key
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  name = "doonops-meta-vpc"
  cidr = "10.0.0.0/16"
  azs  = slice(data.aws_availability_zones.available.names, 0, 2)
  private_subnets = var.subnet_cidrs
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
}

data "aws_availability_zones" "available" {}
`,
    },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-vpc--vpc-design': pack('09-vpc-design', [
    {
      path: 'ARCHITECTURE.md',
      content: `# 3-tier VPC design (Doonops)\n\n\`\`\`\nInternet → IGW → Public subnets (ALB)\n              → Private subnets (EC2)\n              → DB subnets (RDS)\n\`\`\`\n\nNext lab: 10-vpc-terraform implements this.\n`,
    },
    { path: 'variables.tf', content: 'variable "vpc_cidr" { default = "10.1.0.0/16" }\n' },
  ]),

  'aws-vpc--vpc-terraform': pack('10-vpc-terraform', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"

  name = "doonops-vpc"
  cidr = var.vpc_cidr

  azs             = var.azs
  public_subnets  = var.public_subnets
  private_subnets = var.private_subnets
  database_subnets = var.database_subnets

  enable_nat_gateway = true
  single_nat_gateway = true
}

data "aws_availability_zones" "available" {}
`,
    },
    {
      path: 'variables.tf',
      content: `variable "vpc_cidr" { default = "10.1.0.0/16" }
variable "azs" { default = ["ap-south-1a", "ap-south-1b"] }
variable "public_subnets" { default = ["10.1.1.0/24", "10.1.2.0/24"] }
variable "private_subnets" { default = ["10.1.11.0/24", "10.1.12.0/24"] }
variable "database_subnets" { default = ["10.1.21.0/24", "10.1.22.0/24"] }
`,
    },
    { path: 'outputs.tf', content: 'output "vpc_id" { value = module.vpc.vpc_id }\noutput "private_subnets" { value = module.vpc.private_subnets }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-compute--ec2-and-sg': pack('11-ec2-sg', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'vpc.tf', content: 'module "vpc" { source = "terraform-aws-modules/vpc/aws" version = "~> 5.0" name = "doonops-ec2" cidr = "10.2.0.0/16" azs = ["ap-south-1a"] public_subnets = ["10.2.1.0/24"] private_subnets = ["10.2.2.0/24"] }\n' },
    {
      path: 'main.tf',
      content: `resource "aws_security_group" "app" {
  name_prefix = "doonops-app-"
  vpc_id      = module.vpc.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.admin_cidr]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "app" {
  ami                    = data.aws_ami.amazon_linux.id
  instance_type          = "t3.micro"
  subnet_id              = module.vpc.private_subnets[0]
  vpc_security_group_ids = [aws_security_group.app.id]
  tags = { Name = "doonops-ec2-app" }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter { name = "name" values = ["al2023-ami-*-x86_64"] }
}
`,
    },
    { path: 'variables.tf', content: 'variable "admin_cidr" { default = "0.0.0.0/0" # restrict to your IP in production }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-compute--user-data': pack('12-user-data', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'bootstrap.sh',
      content: `#!/bin/bash
yum update -y
yum install -y httpd
echo "<h1>Doonops \${app_name}</h1>" > /var/www/html/index.html
systemctl start httpd
systemctl enable httpd
`,
    },
    {
      path: 'main.tf',
      content: `resource "aws_instance" "web" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t3.micro"
  user_data = templatefile("\${path.module}/bootstrap.sh", { app_name = var.app_name })
  tags = { Name = "doonops-userdata-web" }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter { name = "name" values = ["al2023-ami-*-x86_64"] }
}
`,
    },
    { path: 'variables.tf', content: 'variable "app_name" { default = "lab" }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-alb--alb-intro': pack('13-alb', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `module "alb" {
  source  = "terraform-aws-modules/alb/aws"
  version = "~> 9.0"

  name               = "doonops-alb"
  load_balancer_type = "application"
  vpc_id             = module.vpc.vpc_id
  subnets            = module.vpc.public_subnets

  security_group_ingress_rules = {
    all_http = {
      from_port   = 80
      to_port     = 80
      ip_protocol = "tcp"
      cidr_ipv4   = "0.0.0.0/0"
    }
  }

  listeners = {
    http = {
      port     = 80
      protocol = "HTTP"
      forward = { target_group_key = "app" }
    }
  }

  target_groups = {
    app = {
      name_prefix = "app"
      protocol    = "HTTP"
      port        = 80
      target_type = "instance"
      targets = { ec2 = { target_id = aws_instance.app.id } }
    }
  }
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  name = "doonops-alb-vpc"
  cidr = "10.3.0.0/16"
  azs = ["ap-south-1a", "ap-south-1b"]
  public_subnets  = ["10.3.1.0/24", "10.3.2.0/24"]
  private_subnets = ["10.3.11.0/24", "10.3.12.0/24"]
}

resource "aws_instance" "app" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = "t3.micro"
  subnet_id     = module.vpc.private_subnets[0]
  tags = { Name = "doonops-alb-target" }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter { name = "name" values = ["al2023-ami-*-x86_64"] }
}
`,
    },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-routing--path-host-routing': pack('14-alb-routing', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'listener_rules.tf',
      content: `# Add to module.alb listeners / rules — path /api/* vs /\n# priority = 10 for api, default for web\n`,
    },
    { path: 'README.md', content: '# Path & host routing\n\nExtend ALB module with listener_rule blocks.\n' },
  ]),

  'aws-routing--https-acm': pack('15-https-acm', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'acm.tf',
      content: `resource "aws_acm_certificate" "site" {
  domain_name       = var.domain_name
  validation_method = "DNS"
  tags = { Name = "doonops-cert" }
}

# After cert: attach certificate_arn to HTTPS listener on ALB module
`,
    },
    { path: 'variables.tf', content: 'variable "domain_name" { type = string }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-three-tier--route53-rds-stack': pack('16-three-tier', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'vpc.tf', content: 'module "vpc" { source = "terraform-aws-modules/vpc/aws" version = "~> 5.0" name = "doonops-3tier" cidr = "10.4.0.0/16" azs = ["ap-south-1a","ap-south-1b"] public_subnets = ["10.4.1.0/24","10.4.2.0/24"] private_subnets = ["10.4.11.0/24","10.4.12.0/24"] database_subnets = ["10.4.21.0/24","10.4.22.0/24"] enable_nat_gateway = true }\n' },
    {
      path: 'rds.tf',
      content: `module "rds" {
  source  = "terraform-aws-modules/rds/aws"
  version = "~> 6.0"

  identifier = "doonops-db"
  engine     = "mysql"
  engine_version = "8.0"
  instance_class = "db.t3.micro"
  allocated_storage = 20

  db_name  = "doonops"
  username = "admin"
  port     = 3306

  vpc_security_group_ids = [aws_security_group.rds.id]
  subnet_ids             = module.vpc.database_subnets
  create_db_subnet_group = true
}

resource "aws_security_group" "rds" {
  name_prefix = "doonops-rds-"
  vpc_id      = module.vpc.vpc_id
  ingress {
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [var.app_sg_id]
  }
}
`,
    },
    {
      path: 'route53.tf',
      content: `data "aws_route53_zone" "main" {
  name         = var.zone_name
  private_zone = false
}

resource "aws_route53_record" "app" {
  zone_id = data.aws_route53_zone.main.zone_id
  name    = var.record_name
  type    = "A"
  alias {
    name                   = var.alb_dns_name
    zone_id                = var.alb_zone_id
    evaluate_target_health = true
  }
}
`,
    },
    { path: 'variables.tf', content: 'variable "zone_name" { type = string }\nvariable "record_name" { type = string }\nvariable "alb_dns_name" { type = string }\nvariable "alb_zone_id" { type = string }\nvariable "app_sg_id" { type = string }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-scaling--launch-templates-asg': pack('17-asg', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'asg.tf',
      content: `resource "aws_launch_template" "app" {
  name_prefix   = "doonops-"
  image_id      = data.aws_ami.amazon_linux.id
  instance_type = "t3.micro"
}

resource "aws_autoscaling_group" "app" {
  name                = "doonops-asg"
  vpc_zone_identifier = var.private_subnet_ids
  min_size            = 1
  max_size            = 3
  desired_capacity    = 2
  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }
}

data "aws_ami" "amazon_linux" {
  most_recent = true
  owners      = ["amazon"]
  filter { name = "name" values = ["al2023-ami-*-x86_64"] }
}
`,
    },
    { path: 'variables.tf', content: 'variable "private_subnet_ids" { type = list(string) }\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'aws-observability--cloudwatch-alarms': pack('18-cloudwatch', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'alarms.tf',
      content: `resource "aws_cloudwatch_metric_alarm" "alb_5xx" {
  alarm_name          = "doonops-alb-5xx"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "HTTPCode_Target_5XX_Count"
  namespace           = "AWS/ApplicationELB"
  period              = 60
  statistic           = "Sum"
  threshold           = 10
  alarm_description   = "ALB 5xx spike"
  dimensions = {
    LoadBalancer = var.alb_arn_suffix
  }
}
`,
    },
    { path: 'variables.tf', content: 'variable "alb_arn_suffix" { type = string }\n' },
  ]),

  'aws-observability--nlb-tcp': pack('19-nlb', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `module "nlb" {
  source  = "terraform-aws-modules/alb/aws"
  version = "~> 9.0"
  name = "doonops-nlb"
  load_balancer_type = "network"
  vpc_id  = var.vpc_id
  subnets = var.public_subnet_ids
  listeners = {
    tcp = {
      port     = 80
      protocol = "TCP"
      forward  = { target_group_key = "tcp" }
    }
  }
  target_groups = {
    tcp = {
      name_prefix = "tcp"
      protocol    = "TCP"
      port        = 80
      target_type = "instance"
    }
  }
}
`,
    },
    { path: 'variables.tf', content: 'variable "vpc_id" { type = string }\nvariable "public_subnet_ids" { type = list(string) }\n' },
  ]),

  'terraform-modules--registry-modules': pack('20-registry-module', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  name = "doonops-registry"
  cidr = "10.5.0.0/16"
  azs  = ["ap-south-1a"]
  public_subnets  = ["10.5.1.0/24"]
  private_subnets = ["10.5.2.0/24"]
}
`,
    },
    { path: '.terraform.lock.hcl.example', content: '# Run terraform init — lock file generated automatically\n' },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'terraform-modules--build-local-module': pack('21-local-module', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'main.tf',
      content: `module "static_site" {
  source      = "./modules/doonops-static-site"
  bucket_name = "doonops-lab-\${var.suffix}"
  tags        = { Environment = var.environment }
}
`,
    },
    { path: 'variables.tf', content: 'variable "suffix" { type = string }\nvariable "environment" { default = "dev" }\n' },
    {
      path: 'modules/doonops-static-site/main.tf',
      content: `resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
  tags   = var.tags
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
`,
    },
    {
      path: 'modules/doonops-static-site/variables.tf',
      content: 'variable "bucket_name" { type = string }\nvariable "tags" { type = map(string) default = {} }\n',
    },
    {
      path: 'modules/doonops-static-site/outputs.tf',
      content: 'output "bucket_id" { value = aws_s3_bucket.site.id }\n',
    },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'remote-state--s3-dynamodb-backend': pack('22-remote-backend', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'backend.tf',
      content: `terraform {
  backend "s3" {
    bucket         = "doonops-tf-state-CHANGE_ME"
    key            = "prod/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "doonops-tf-lock"
    encrypt        = true
  }
}
`,
    },
    {
      path: 'bootstrap-backend.tf',
      content: `# Run ONCE locally (or separate bootstrap stack) to create state bucket + lock table
resource "aws_s3_bucket" "tf_state" {
  bucket = "doonops-tf-state-CHANGE_ME"
}
resource "aws_dynamodb_table" "tf_lock" {
  name         = "doonops-tf-lock"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  attribute { name = "LockID" type = "S" }
}
`,
    },
    { path: 'main.tf', content: '# App resources after backend configured\n' },
    { path: 'README.md', content: '# Remote state\n\n1. Create bucket + DynamoDB (bootstrap)\n2. Uncomment backend.tf bucket name\n3. terraform init -migrate-state\n' },
  ]),

  'remote-state--remote-state-datasource': pack('23-remote-state-data', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'data.tf',
      content: `data "terraform_remote_state" "vpc" {
  backend = "s3"
  config = {
    bucket = "doonops-tf-state-CHANGE_ME"
    key    = "network/terraform.tfstate"
    region = "ap-south-1"
  }
}

# Use: data.terraform_remote_state.vpc.outputs.vpc_id
`,
    },
    { path: 'main.tf', content: 'resource "aws_security_group" "from_remote" {\n  vpc_id = data.terraform_remote_state.vpc.outputs.vpc_id\n  name_prefix = "doonops-remote-"\n}\n' },
  ]),

  'troubleshooting--common-errors': pack('24-troubleshooting', [
    { path: 'README.md', content: '# Troubleshooting practice\n\n1. Run plan without aws configure — read error\n2. Fix configure\n3. See state lock with two terminals (optional)\n' },
    { path: 'debug.env.example', content: '# export TF_LOG=ERROR\n# terraform plan\n' },
  ]),

  'capstone--three-tier-full-stack': pack('25-capstone', [
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    {
      path: 'vpc.tf',
      content: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 5.0"
  name = "doonops-capstone"
  cidr = "10.10.0.0/16"
  azs  = ["ap-south-1a", "ap-south-1b"]
  public_subnets   = ["10.10.1.0/24", "10.10.2.0/24"]
  private_subnets  = ["10.10.11.0/24", "10.10.12.0/24"]
  database_subnets = ["10.10.21.0/24", "10.10.22.0/24"]
  enable_nat_gateway = true
  single_nat_gateway = true
}
`,
    },
    {
      path: 'compute.tf',
      content: `# Uncomment after vpc.tf plans cleanly
# resource "aws_instance" "app" { ... }
`,
    },
    {
      path: 'alb.tf',
      content: `# Add after compute — use terraform-aws-modules/alb/aws
`,
    },
    {
      path: 'rds.tf',
      content: `# Optional last layer — review plan cost before apply
`,
    },
    { path: 'variables.tf', content: 'variable "suffix" { type = string }\n' },
    { path: 'outputs.tf', content: 'output "vpc_id" { value = module.vpc.vpc_id }\n' },
    {
      path: 'README.md',
      content: '# Capstone\n\nOrder: vpc.tf → compute → alb → rds\nEach step: terraform plan\nEnd: terraform destroy\n',
    },
    { path: '.gitignore', content: GITIGNORE },
  ]),

  'iac-devops--pipeline-overview': pack('23-cicd', [
    {
      path: 'buildspec.yml',
      content: `version: 0.2
phases:
  install:
    commands:
      - terraform version
  pre_build:
    commands:
      - terraform init -input=false
  build:
    commands:
      - terraform validate
      - terraform plan -input=false -out=tfplan
  post_build:
    commands:
      - echo "Apply only from approved pipeline stage"
artifacts:
  files:
    - tfplan
`,
    },
    { path: 'README.md', content: '# CI/CD\n\nWire buildspec in CodeBuild / GitHub Actions.\nNever commit AWS keys — use OIDC or IAM role.\n' },
    { path: 'versions.tf', content: VERSIONS },
    { path: 'providers.tf', content: awsProvider() },
    { path: 'main.tf', content: '# Same root module as other labs\n' },
  ]),
}

export function getLabProject(lessonId) {
  return LAB_PROJECTS[lessonId] ?? null
}
