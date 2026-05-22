/**
 * AWS account + Free Tier + local CLI configure — before Terraform AWS labs.
 */

const diagramAwsEn = `
<div class="tf-diagram">
  <div class="tf-diagram-title">What you need on your laptop (simple)</div>
  <div class="tf-flow-row">
    <div class="tf-box tf-box-you"><span>1</span> AWS account<br/><small>(free tier)</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-tool"><span>2</span> IAM user + keys<br/><small>(not root password)</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-cloud"><span>3</span> aws configure<br/><small>on your PC</small></div>
  </div>
  <p class="tf-diagram-caption">From Module 6 onward this course creates real resources in AWS — small instances usually stay in free tier if you destroy after labs.</p>
</div>`

const diagramAwsHi = `
<div class="tf-diagram">
  <div class="tf-diagram-title">Laptop par kya chahiye</div>
  <div class="tf-flow-row">
    <div class="tf-box tf-box-you"><span>1</span> AWS account<br/><small>(free tier)</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-tool"><span>2</span> IAM user<br/><small>keys</small></div>
    <div class="tf-arrow">→</div>
    <div class="tf-box tf-box-cloud"><span>3</span> aws configure</div>
  </div>
  <p class="tf-diagram-caption">Module 6 se real AWS resources banenge — lab ke baad destroy karo taaki bill na aaye.</p>
</div>`

export const AWS_SETUP_CONTENT = {
  en: {
    goal: 'Create an AWS account (Free Tier), set up a safe IAM user, and connect AWS CLI on your computer — before any cloud Terraform labs.',
    plain:
      'Think of AWS as a rented computer park on the internet. You need an account (often free for 12 months for small servers), then a "login for programs" (IAM access keys), then one command on your PC: aws configure.',
    technical:
      'Use IAM Identity Center or an IAM user with programmatic access. Attach least-privilege policy for labs (e.g. PowerUserAccess for learning only). Configure AWS CLI v2; Terraform uses the same credential chain via the AWS provider.',
    analogy:
      'AWS account = building membership. IAM user = staff badge. aws configure = telling Terraform which badge to use on your laptop.',
    steps: [
      'Create AWS account (credit card for verification only — many services still free tier).',
      'Create IAM user + access keys — never share or commit keys.',
      'Run aws configure and aws sts get-caller-identity.',
      'Then continue to Install Terraform lesson.',
    ],
    concept: `
<h2>Do you need AWS for this whole course?</h2>
<p><strong>No for Modules 0–5</strong> — only your laptop (Terraform validate, no cloud bill).</p>
<p><strong>Yes from Module 6 (AWS VPC)</strong> onward — you will run <code>terraform apply</code> and create real VPC, EC2, etc.</p>
<p class="layman-highlight"><strong>Do this lesson now</strong> if you plan to finish AWS modules within a few weeks. You can read earlier modules first, but complete this before Module 6.</p>

${diagramAwsEn}

<h2>Step 1 — Create AWS account (Free Tier)</h2>
<ol>
<li>Open <a href="https://aws.amazon.com/free/" target="_blank" rel="noopener">aws.amazon.com/free</a> → <strong>Create a Free Account</strong>.</li>
<li>Email, password, account name (e.g. <code>doonops-learning</code>).</li>
<li>Choose <strong>Personal</strong> if learning (not company).</li>
<li>Enter phone OTP — verify.</li>
<li>Add payment method — AWS uses it for identity check; <strong>Free Tier</strong> still applies to eligible services (12 months for new accounts on many offers).</li>
<li>Select support plan: <strong>Basic (free)</strong>.</li>
<li>Sign in to <strong>AWS Management Console</strong> — home region top-right (pick <strong>Asia Pacific (Mumbai) ap-south-1</strong> if you are in India — same as our labs).</li>
</ol>
<p><strong>Layman:</strong> Free Tier = AWS lets you try small servers/databases cheap or free for learning — but always run <code>terraform destroy</code> after labs.</p>

<h2>Step 2 — Create IAM user (do NOT use root for Terraform)</h2>
<ol>
<li>Console search → <strong>IAM</strong> → <strong>Users</strong> → <strong>Create user</strong>.</li>
<li>Name: <code>doonops-terraform-lab</code></li>
<li>Access type: <strong>Programmatic access</strong> (Access key — CLI).</li>
<li>Permissions: for learning attach <strong>PowerUserAccess</strong> (or ask your company admin for a lab OU). Production uses custom least-privilege policies.</li>
<li>Finish → download <strong>.csv</strong> with Access key ID + Secret access key — <strong>one time only</strong>. Store in password manager, not Git.</li>
</ol>

<h2>Step 3 — Install AWS CLI on your computer</h2>
<ul>
<li><strong>Mac:</strong> <code>brew install awscli</code></li>
<li><strong>Windows:</strong> MSI installer from AWS docs — "AWS CLI v2"</li>
<li><strong>Linux:</strong> <code>sudo apt install awscli</code> or official bundle</li>
</ul>
<p>Check: <code>aws --version</code> → should show aws-cli/2.x</p>

<h2>Step 4 — Configure CLI locally (easy)</h2>
<pre class="course-diagram">aws configure

AWS Access Key ID:     paste from CSV
AWS Secret Access Key: paste from CSV
Default region name:   ap-south-1
Default output format: json</pre>
<p>Test connection:</p>
<pre class="course-diagram">aws sts get-caller-identity</pre>
<p>You should see JSON with <code>Account</code> and <code>Arn</code> — means your laptop can talk to AWS.</p>

<h2>Step 5 — Cost safety habits (important)</h2>
<ul>
<li>After every lab: <code>terraform destroy</code> in that lab folder.</li>
<li>Enable <strong>Billing alerts</strong> in AWS Billing → Budgets → e.g. alert at $5.</li>
<li>Never commit <code>.csv</code> keys or <code>terraform.tfvars</code> with secrets to Git.</li>
<li>Use <code>t3.micro</code> / small RDS only for labs.</li>
</ul>

<h2>What Terraform uses</h2>
<p>Once <code>aws configure</code> works, Terraform AWS provider automatically uses the same credentials — no extra login in HCL.</p>`,
    localLab: {
      title: 'On your computer — AWS setup checklist',
      prerequisites: ['Government ID / phone for AWS signup', 'Credit/debit card for verification', 'Terminal'],
      steps: [
        'Create AWS account + pick region ap-south-1 in console.',
        'Create IAM user doonops-terraform-lab with programmatic access + PowerUserAccess (learning).',
        'Save Access Key ID + Secret in password manager (not Git).',
        'Install AWS CLI v2 — run: aws --version',
        'Run: aws configure (paste keys, region ap-south-1, json)',
        'Run: aws sts get-caller-identity — must return JSON without error.',
        'Optional: AWS Billing → create budget alert $5.',
      ],
    },
    practice: {
      title: 'Before moving on',
      tasks: [
        'aws sts get-caller-identity works',
        'You know which region you chose (ap-south-1 recommended)',
        'IAM keys are NOT in any Git repo',
      ],
    },
  },
  hi: {
    goal: 'AWS Free Tier खाता, सुरक्षित IAM user, और laptop पर AWS CLI — cloud labs से पहले।',
    plain:
      'AWS internet पर किराए के computers जैसा है। पहले account (Free Tier), फिर IAM keys, फिर laptop पर aws configure।',
    technical:
      'IAM user with programmatic access. Lab ke liye PowerUserAccess (learning). Terraform same credentials use karta hai.',
    analogy: 'Account = membership. IAM = staff badge. aws configure = badge laptop par set.',
    steps: [
      'AWS account + Free Tier',
      'IAM user + keys',
      'aws configure + test',
      'Phir Terraform install lesson',
    ],
    concept: `
<h2>Poora course ke liye AWS zaroori?</h2>
<p><strong>Module 0–5: Nahi</strong> — sirf laptop.</p>
<p><strong>Module 6 se: Haan</strong> — VPC, EC2 real banenge.</p>
<p class="layman-highlight"><strong>Module 6 se pehle ye lesson complete karo.</strong></p>
${diagramAwsHi}
<h2>Step 1 — AWS account (Free Tier)</h2>
<ol>
<li><a href="https://aws.amazon.com/free/" target="_blank" rel="noopener">aws.amazon.com/free</a> → Create account</li>
<li>Email, password, phone OTP</li>
<li>Card verification — Free Tier phir bhi apply hota hai eligible services par</li>
<li>Support: Basic (free)</li>
<li>Region: <strong>ap-south-1</strong> (Mumbai) select karo console mein</li>
</ol>
<h2>Step 2 — IAM user (root mat use karo)</h2>
<ol>
<li>IAM → Users → Create → <code>doonops-terraform-lab</code></li>
<li>Programmatic access + PowerUserAccess (learning)</li>
<li>CSV download — keys ek baar dikhti hain, safe jagah rakho</li>
</ol>
<h2>Step 3 — AWS CLI install</h2>
<p>Mac: <code>brew install awscli</code> · Windows: MSI v2</p>
<h2>Step 4 — Local configure</h2>
<pre class="course-diagram">aws configure
# Access Key, Secret, ap-south-1, json
aws sts get-caller-identity</pre>
<h2>Step 5 — Bill se bachne ke tips</h2>
<ul>
<li>Har lab ke baad terraform destroy</li>
<li>Billing alert $5 set karo</li>
<li>Keys Git mein kabhi nahi</li>
</ul>`,
    localLab: {
      title: 'Computer par — AWS setup',
      prerequisites: ['Phone', 'Card verification', 'Terminal'],
      steps: [
        'AWS account + ap-south-1 region',
        'IAM user + keys save (Git nahi)',
        'aws configure',
        'aws sts get-caller-identity OK',
        'Budget alert optional',
      ],
    },
    practice: {
      title: 'Check',
      tasks: ['get-caller-identity chalta hai', 'Region pata hai', 'Keys Git mein nahi'],
    },
  },
  hinglish: {
    goal: 'AWS account Free Tier, IAM user, aws configure — Module 6 se pehle.',
    plain: 'AWS = cloud par servers. Account banao, IAM keys, laptop par aws configure. Module 6 se real resources.',
    technical: 'IAM programmatic user. Terraform same creds use karta hai.',
    analogy: 'Account = membership, IAM = badge, configure = badge set on PC.',
    steps: ['AWS account', 'IAM user', 'aws configure', 'Next: Terraform install'],
    concept: `
<h2>AWS kab chahiye?</h2>
<p><strong>Module 0-5: No.</strong> <strong>Module 6+: Yes.</strong> Is lesson ko Module 6 se pehle khatam karo.</p>
${diagramAwsHi}
<h2>Free Tier account</h2>
<ol>
<li>aws.amazon.com/free → account banao</li>
<li>Card verify — learning ke liye free tier offers</li>
<li>Region <strong>ap-south-1</strong></li>
</ol>
<h2>IAM user</h2>
<p><code>doonops-terraform-lab</code> + keys — root mat use karo</p>
<h2>Local setup</h2>
<pre class="course-diagram">brew install awscli   # Mac
aws configure
aws sts get-caller-identity</pre>
<h2>Bill tips</h2>
<p>terraform destroy after lab · $5 budget alert</p>`,
    localLab: {
      title: 'Local AWS checklist',
      prerequisites: ['Phone', 'Card', 'Terminal'],
      steps: [
        'Account + ap-south-1',
        'IAM keys safe',
        'aws configure + test OK',
      ],
    },
    practice: { title: 'Check', tasks: ['identity command OK', 'keys not in Git'] },
  },
}

export const AWS_SETUP_META = {
  titles: {
    en: 'AWS Account, Free Tier & Local Setup',
    hi: 'AWS खाता, Free Tier और लोकल सेटअप',
    hinglish: 'AWS account, Free Tier & local setup',
  },
}
