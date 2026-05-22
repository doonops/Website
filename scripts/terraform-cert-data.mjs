/** HashiCorp Terraform Associate (003) — exam prep content (multi-language) */

export const CERT_LESSON = {
  id: 'certification--terraform-associate-prep',
  moduleId: 'certification',
  title: 'Terraform Associate Exam Guide',
  order: 1,
  sourceFile: 'doonops-curriculum/certification.md',
  blocks: [
    {
      type: 'intro',
      translations: {
        en: {
          goal: 'Prepare for HashiCorp Certified: Terraform Associate — format, domains, and practice-style questions.',
          plain: 'The exam is multiple-choice, online proctored, ~1 hour. You need Terraform workflow, HCL, state, modules, and cloud basics — not every AWS service.',
          html: '',
        },
        hi: {
          goal: 'HashiCorp Terraform Associate exam — format, domains, practice questions.',
          plain: 'Exam multiple-choice, online. Terraform workflow, HCL, state, modules chahiye.',
          html: '',
        },
        hinglish: {
          goal: 'Terraform Associate exam prep — format, domains, sample questions.',
          plain: 'MCQ exam, online. Terraform + state + modules focus.',
          html: '',
        },
      },
    },
    {
      type: 'certPrep',
      translations: {
        en: {
          examName: 'HashiCorp Certified: Terraform Associate (TA-003)',
          duration: '~60 minutes',
          format: 'Multiple choice — single answer, multiple answer, text match (platform dependent)',
          passingNote: 'Passing score set by HashiCorp — check official exam page before booking.',
          domains: [
            { name: 'Terraform basics & workflow', weight: '~20%', topics: ['init', 'plan', 'apply', 'destroy', 'fmt', 'validate', 'workspace basics'] },
            { name: 'Interact with Terraform configuration', weight: '~45%', topics: ['providers', 'resources', 'variables', 'outputs', 'data sources', 'depends_on', 'count', 'for_each', 'lifecycle'] },
            { name: 'Interact with Terraform modules', weight: '~20%', topics: ['module source', 'inputs/outputs', 'public registry', 'version constraints'] },
            { name: 'Navigate Terraform workflow', weight: '~15%', topics: ['state purpose', 'remote backend', 'sensitive values', 'import', 'taint (legacy concepts)'] },
          ],
          questionTypes: [
            { type: 'Single select', desc: 'One correct answer — most common' },
            { type: 'Multi select', desc: 'Choose 2–3 correct options — read "choose two" carefully' },
            { type: 'Scenario', desc: 'Given HCL snippet — what happens after plan/apply?' },
          ],
          samples: [
            {
              q: 'Which command creates an execution plan without changing infrastructure?',
              options: ['terraform apply', 'terraform plan', 'terraform init', 'terraform refresh'],
              answer: 'terraform plan',
              explain: 'plan shows proposed changes; apply makes them.',
            },
            {
              q: 'What does terraform init do? (choose two)',
              options: ['Downloads provider plugins', 'Formats HCL files', 'Initializes backend', 'Deletes state'],
              answer: 'Downloads provider plugins + Initializes backend',
              explain: 'init prepares working directory — providers and backend config.',
            },
            {
              q: 'Which block declares the AWS region for all resources in a module?',
              options: ['resource "aws_region"', 'provider "aws"', 'variable "region"', 'terraform'],
              answer: 'provider "aws"',
              explain: 'Provider configuration sets region, credentials scope.',
            },
            {
              q: 'When should you use for_each instead of count?',
              options: [
                'When resources are identical',
                'When each instance needs a distinct key/map entry',
                'When state is remote',
                'Never',
              ],
              answer: 'When each instance needs a distinct key/map entry',
              explain: 'for_each uses a map/set — stable addresses; count uses index.',
            },
            {
              q: 'Where should team state be stored for collaboration?',
              options: ['Local terraform.tfstate on laptop', 'Remote backend (e.g. S3 + lock)', 'README.md', '.gitignore'],
              answer: 'Remote backend (e.g. S3 + lock)',
              explain: 'Remote state + locking prevents concurrent apply conflicts.',
            },
          ],
          tips: [
            'Practice terraform plan output — know create/update/destroy symbols (+ ~ -)',
            'Memorize difference: variable vs local vs output vs data source',
            'Understand when resource is recreated (name change, force replacement)',
            'Official: developer.hashicorp.com/terraform/tutorials/certification-associate',
          ],
        },
        hi: {
          examName: 'HashiCorp Certified: Terraform Associate (TA-003)',
          duration: '~60 मिनट',
          format: 'बहुविकल्प — एक/Uneक उत्तर',
          passingNote: 'Passing score HashiCorp site par dekhen.',
          domains: [
            { name: 'Terraform बुनियाद', weight: '~20%', topics: ['init', 'plan', 'apply', 'destroy', 'fmt', 'validate'] },
            { name: 'Configuration', weight: '~45%', topics: ['provider', 'resource', 'variable', 'output', 'data', 'count', 'for_each'] },
            { name: 'Modules', weight: '~20%', topics: ['module source', 'registry', 'version'] },
            { name: 'Workflow & state', weight: '~15%', topics: ['remote state', 'backend', 'import'] },
          ],
          questionTypes: [
            { type: 'एक सही', desc: 'Single select' },
            { type: 'कई सही', desc: 'Multi select' },
            { type: 'परिदृश्य', desc: 'HCL snippet — plan/apply के बाद क्या?' },
          ],
          samples: [
            {
              q: 'बिना बदलाव के execution plan कौन-सा command बनाता है?',
              options: ['terraform apply', 'terraform plan', 'terraform init', 'terraform refresh'],
              answer: 'terraform plan',
              explain: 'plan सुझाव दिखाता है; apply लागू करता है।',
            },
            {
              q: 'terraform init क्या करता है?',
              options: ['Provider plugins डाउनलोड', 'HCL format', 'Backend initialize', 'State हटाना'],
              answer: 'Provider plugins डाउनलोड',
              explain: 'init directory तैयार करता है।',
            },
            {
              q: 'AWS region किस block में?',
              options: ['resource', 'provider "aws"', 'variable', 'terraform'],
              answer: 'provider "aws"',
              explain: 'Provider region सेट करता है।',
            },
            {
              q: 'Team state कहाँ store करें?',
              options: ['Laptop par local', 'Remote S3 + lock', 'README', 'Email'],
              answer: 'Remote S3 + lock',
              explain: 'Remote + lock collaboration ke liye।',
            },
          ],
          tips: [
            'plan output symbols yaad karein (+ ~ -)',
            'variable / output / data source difference',
            'Official HashiCorp certification tutorials padhen',
          ],
        },
        hinglish: {
          examName: 'Terraform Associate (TA-003)',
          duration: '~60 min',
          format: 'MCQ — single / multiple answer',
          passingNote: 'Passing score official site par check karo.',
          domains: [
            { name: 'Terraform basics', weight: '~20%', topics: ['init', 'plan', 'apply', 'destroy'] },
            { name: 'HCL config', weight: '~45%', topics: ['provider', 'resource', 'vars', 'for_each'] },
            { name: 'Modules', weight: '~20%', topics: ['registry', 'module I/O'] },
            { name: 'State & workflow', weight: '~15%', topics: ['remote backend', 'import'] },
          ],
          questionTypes: [
            { type: 'Single', desc: 'Ek sahi answer' },
            { type: 'Multi', desc: '2-3 sahi choose karo' },
            { type: 'Scenario', desc: 'HCL snippet analyse' },
          ],
          samples: [
            {
              q: 'Bina change ke plan kaun sa command?',
              options: ['apply', 'plan', 'init', 'refresh'],
              answer: 'plan',
              explain: 'plan dikhata hai, apply karta hai.',
            },
            {
              q: 'init kya karta hai?',
              options: ['Plugins download', 'Format', 'Backend init', 'Delete'],
              answer: 'Plugins download',
              explain: 'init setup karta hai.',
            },
            {
              q: 'AWS region kis block mein?',
              options: ['resource', 'provider aws', 'variable', 'terraform'],
              answer: 'provider aws',
              explain: 'provider config.',
            },
            {
              q: 'Team state kahan?',
              options: ['Local laptop', 'Remote S3+lock', 'Word file', 'None'],
              answer: 'Remote S3+lock',
              explain: 'collab ke liye remote.',
            },
          ],
          tips: ['plan symbols + ~ -', 'var vs output vs data', 'official HashiCorp docs'],
        },
      },
    },
  ],
}
