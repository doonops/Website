/**
 * Full Hindi (Devanagari) + Hinglish (Roman) lesson text.
 * Applied before buildLessonBlocks so intro + concept are correct per locale.
 */

const wrap = (html) => html // buildLessonBlocks wraps with lesson-prose

/** @type {Record<string, { hi?: object, hinglish?: object }>} */
export const LESSON_I18N = {
  'iac-fundamentals--what-is-iac': {
    hi: {
      goal: 'Infrastructure as Code और Terraform क्यों ज़रूरी है — पूरी तरह समझें।',
      plain:
        'हर बार AWS console में क्लिक करने की बजाय आप एक रेसिपी फ़ाइल लिखते हैं। Terraform उसे पढ़कर servers, network, database बनाता या अपडेट करता है — हर बार एक जैसा।',
      technical:
        'IaC = infrastructure को Git में versioned फ़ाइलों में रखना। Terraform declarative है: desired state लिखो, plan/apply करे। AWS provider 5.x, Terraform 1.9+ standard है।',
      analogy: 'आर्किटेक्ट का नक्शा — एक बार ड्रॉ, बिल्डर (Terraform + AWS) असल इमारत उसी के मुताबिक बनाते हैं।',
      concept: wrap(`
<h3>आसान भाषा में</h3>
<p><strong>IaC</strong> का मतलब: servers, network, load balancer — सब <code>.tf</code> फ़ाइलों में, Git में, code की तरह review।</p>
<p><strong>Terraform</strong> HCL भाषा use करता है; AWS के लिए <code>hashicorp/aws</code> provider।</p>
<h3>क्यों चुनते हैं</h3>
<ul>
<li>staging और production एक जैसे</li>
<li><code>terraform plan</code> से पहले पता चलता है क्या बदलेगा</li>
<li>टीम Git में मिलकर काम करती है</li>
</ul>`),
      localLab: {
        title: 'अपने कंप्यूटर पर',
        prerequisites: ['टर्मिनल', 'अभी AWS account ज़रूरी नहीं'],
        steps: [
          'फ़ोल्डर बनाएँ: ~/doonops-terraform/lab01',
          'main.tf में ऊपर वाला HCL लिखें',
          'Terraform install करें',
          'terraform version — 1.9+',
          'terraform init && terraform validate',
        ],
      },
      practice: { title: 'जाँच', tasks: ['Terraform एक वाक्य में समझाएँ', 'validate सफल'] },
    },
    hinglish: {
      goal: 'IaC aur Terraform kyun chahiye — clear samjho.',
      plain: 'Console click ki jagah recipe file (.tf). Terraform padh ke AWS par resources banata hai — har baar same.',
      technical: 'IaC = infra files + Git. Terraform declarative, plan then apply. Provider 5.x.',
      analogy: 'Blueprint jaisa — ek baar draw, baar baar same building.',
      concept: wrap(`
<h3>Simple words</h3>
<p><strong>IaC</strong> = servers/network files mein, Git mein store.</p>
<p><strong>Terraform</strong> + AWS provider — industry standard tool.</p>
<ul>
<li>repeatable infra</li>
<li>plan se pehle diff dikhe</li>
<li>team Git par review</li>
</ul>`),
      localLab: {
        title: 'Local machine',
        prerequisites: ['Terminal', 'AWS abhi nahi'],
        steps: ['lab01 folder', 'main.tf banao', 'terraform install', 'init + validate'],
      },
      practice: { title: 'Check', tasks: ['one line mein Terraform', 'validate OK'] },
    },
  },

  'iac-fundamentals--terraform-vs-others': {
    hi: {
      goal: 'Terraform manual console (ClickOps) से बेहतर क्यों है — दोस्त को समझाने लायक।',
      plain: 'ClickOps = हर बार AWS buttons दबाना। Terraform = एक बार रेसिपी, बार-बार same परिणाम।',
      technical: 'Declarative IaC, plan/apply, multi-cloud workflow; CloudFormation सिर्फ AWS।',
      analogy: 'हर दिन फ़ोन से अलग-अलग ऑर्डर (ClickOps) vs लिखित ऑर्डर फ़ॉर्म (Terraform)।',
      concept: wrap(`
<h3>आसान भाषा</h3>
<p><strong>ClickOps</strong> = console में हाथ से बदलाव — टीम में history कम, दोहराना मुश्किल।</p>
<p><strong>Terraform</strong> = फ़ाइल में लिखो, Git में review, plan से diff देखो।</p>
<p class="layman-highlight">AWS कम नहीं सीखते — resources को जोड़कर बेहतर समझते हैं।</p>`),
      practice: { title: 'जाँच', tasks: ['ClickOps एक वाक्य', 'Git + Terraform का एक फ़ायदा'] },
    },
    hinglish: {
      goal: 'Terraform vs manual console — kyun better?',
      plain: 'ClickOps = har baar buttons. Terraform = ek recipe file, repeatable.',
      analogy: 'Roz phone order vs written order form.',
      concept: wrap(`
<p><strong>ClickOps</strong> = manual console, team ke liye mushkil.</p>
<p><strong>Terraform</strong> = files + Git + plan.</p>`),
      practice: { title: 'Check', tasks: ['ClickOps meaning', 'one benefit Git'] },
    },
  },

  'setup-cli--aws-account-setup': {
    hi: {
      goal: 'AWS Free Tier खाता, सुरक्षित IAM user, और laptop पर AWS CLI सेटअप — cloud labs से पहले।',
      plain:
        'AWS = internet पर किराए के computers। पहले account (Free Tier), फिर IAM keys, फिर <code>aws configure</code> — Terraform इन्हीं keys use करता है।',
      technical: 'IAM programmatic user; PowerUserAccess सिर्फ learning; region ap-south-1; Terraform same credential chain।',
      analogy: 'Account = सोसाइटी membership। IAM = staff badge। configure = badge laptop पर set।',
      concept: wrap(`
<h2>पूरे course के लिए AWS?</h2>
<p><strong>Module 0–5: नहीं</strong> — सिर्फ laptop।</p>
<p><strong>Module 6 से: हाँ</strong> — VPC, EC2 असल में बनेंगे।</p>
<p class="layman-highlight"><strong>Module 6 से पहले यह पाठ पूरा करें।</strong></p>
<h2>चरण 1 — Account (Free Tier)</h2>
<ol>
<li>aws.amazon.com/free → खाता बनाएँ</li>
<li>ईमेल, पासवर्ड, फ़ोन OTP</li>
<li>कार्ड सिर्फ verify — कई services Free Tier में</li>
<li>Support: Basic (मुफ़्त)</li>
<li>Region: <strong>ap-south-1</strong> (Mumbai)</li>
</ol>
<h2>चरण 2 — IAM user (root मत)</h2>
<ol>
<li>IAM → Users → <code>doonops-terraform-lab</code></li>
<li>Programmatic access + PowerUserAccess (सीखने के लिए)</li>
<li>CSV से keys — एक बार; Git में कभी नहीं</li>
</ol>
<h2>चरण 3 — CLI install</h2>
<p>Mac: <code>brew install awscli</code> · Windows: AWS CLI v2 MSI</p>
<h2>चरण 4 — Local configure</h2>
<pre class="course-diagram">aws configure
# Access Key, Secret, ap-south-1, json
aws sts get-caller-identity</pre>
<h2>चरण 5 — Bill से बचाव</h2>
<ul>
<li>हर lab के बाद <code>terraform destroy</code></li>
<li>Billing में $5 alert</li>
</ul>`),
      localLab: {
        title: 'कंप्यूटर पर — AWS checklist',
        prerequisites: ['फ़ोन', 'कार्ड verify', 'टर्मिनल'],
        steps: [
          'Account + region ap-south-1',
          'IAM user + keys सुरक्षित रखें',
          'aws configure',
          'get-caller-identity सफल',
        ],
      },
      practice: { title: 'जाँच', tasks: ['identity command OK', 'keys Git में नहीं'] },
    },
    hinglish: {
      goal: 'AWS account, Free Tier, IAM, aws configure — Module 6 se pehle.',
      plain: 'AWS = cloud servers. Pehle account, phir IAM keys, phir laptop par aws configure.',
      analogy: 'Account = membership, IAM = badge, configure = PC par badge lagana.',
      concept: wrap(`
<h2>AWS kab?</h2>
<p><strong>Module 0-5: No.</strong> <strong>Module 6+: Yes.</strong></p>
<h2>Steps</h2>
<ol>
<li>aws.amazon.com/free — account</li>
<li>IAM user doonops-terraform-lab — root mat</li>
<li>brew install awscli (Mac)</li>
<li>aws configure + get-caller-identity</li>
<li>lab ke baad destroy, $5 budget alert</li>
</ol>`),
      localLab: {
        title: 'Local checklist',
        steps: ['account', 'IAM keys safe', 'configure OK'],
      },
      practice: { title: 'Check', tasks: ['get-caller-identity', 'keys not in Git'] },
    },
  },

  'setup-cli--install-tools': {
    hi: {
      goal: 'Terraform और AWS CLI install — cloud labs से पहले AWS setup पाठ पूरा करें।',
      plain: 'Do tools: Terraform (.tf पढ़ता है) और AWS CLI (Amazon से बात)।',
      technical: 'Terraform 1.9+; AWS CLI v2; VS Code HashiCorp extension।',
      analogy: 'Terraform = शेफ। AWS CLI = supplier का फ़ोन।',
      concept: wrap(`
<h3>क्रम</h3>
<ol>
<li>AWS setup पाठ (Module 6+ के लिए)</li>
<li><code>terraform version</code> — 1.9+</li>
<li><code>aws sts get-caller-identity</code> — JSON आए</li>
</ol>`),
      practice: { title: 'जाँच', tasks: ['terraform version', 'AWS test agar labs hain'] },
    },
    hinglish: {
      goal: 'Terraform + AWS CLI install karo.',
      plain: 'Do tools laptop par — Terraform aur AWS CLI.',
      concept: wrap(`<ol><li>AWS setup lesson pehle</li><li>terraform version</li><li>aws identity check</li></ol>`),
      practice: { title: 'Check', tasks: ['version OK'] },
    },
  },

  'setup-cli--project-layout': {
    hi: {
      goal: 'कौन सी फ़ाइल में क्या रखें — project गंदा न हो।',
      plain: 'अलग-अलग notebooks: versions, provider, variables, main resources, outputs।',
      analogy: 'रसोई के अलग दराज — मसाले, बर्तन, रेसिपी, परोसने की प्लेट।',
      concept: wrap(`
<ul>
<li><code>versions.tf</code> — Terraform version</li>
<li><code>providers.tf</code> — cloud + region</li>
<li><code>variables.tf</code> — बदलने वाली settings</li>
<li><code>main.tf</code> — servers, VPC</li>
<li><code>outputs.tf</code> — बाद में दिखाने वाले results</li>
<li><code>.gitignore</code> — state/secrets Git में नहीं</li>
</ul>`),
      practice: { title: 'जाँच', tasks: ['4 files का नाम और काम', '.gitignore क्यों'] },
    },
    hinglish: {
      goal: 'Project files ka layout samjho.',
      plain: 'versions, providers, variables, main, outputs — alag files.',
      concept: wrap(`<p>Har file ka apna kaam. .gitignore state/keys ke liye.</p>`),
      practice: { title: 'Check', tasks: ['main.tf mein kya'] },
    },
  },

  'hcl-core--hcl-syntax': {
    hi: {
      goal: 'HCL blocks पढ़ना और लिखना — Python नहीं है।',
      plain: 'HCL = labeled boxes: resource "type" "name" { settings }',
      analogy: 'सरकारी फ़ॉर्म — section, naam, fields।',
      concept: wrap(`
<p><code>resource "aws_instance" "app"</code> — AWS par ek server बनाओ, nickname "app"।</p>
<p class="layman-highlight">Python जैसा <code>for loop</code> यहाँ आमतौर पर नहीं — <code>count</code> / <code>for_each</code> अलग पाठ में।</p>`),
      practice: { title: 'जाँच', tasks: ['resource line ka matlab'] },
    },
    hinglish: {
      goal: 'HCL syntax — blocks samjho.',
      plain: 'resource "aws_instance" "name" { } — form jaisa.',
      concept: wrap(`<p>Python for loop yahan nahi — count/for_each baad mein.</p>`),
      practice: { title: 'Check', tasks: ['resource matlab'] },
    },
  },

  'hcl-core--workflow-init-plan-apply': {
    hi: {
      goal: 'तीन commands: init, plan, apply — रोज़ काम आएँगी।',
      plain: 'init = tools download। plan = rehearsal। apply = असल में बनाओ।',
      analogy: 'सामान लाओ → रेसिपी पढ़ो → खाना बनाओ → बाद में सफ़ाई (destroy)।',
      concept: wrap(`
<pre class="course-diagram">init → plan (+ create, ~ change, - delete) → apply → destroy (lab end)</pre>
<p>plan skip mat karo — surprises aati hain.</p>`),
      practice: { title: 'जाँच', tasks: ['init/plan/apply order', '+ ka matlab'] },
    },
    hinglish: {
      goal: 'init, plan, apply — daily workflow.',
      plain: 'init download, plan preview, apply real change.',
      concept: wrap(`<p>plan pehle. + = create, ~ = change, - = delete.</p>`),
      practice: { title: 'Check', tasks: ['plan before apply'] },
    },
  },

  'variables-state--input-output-vars': {
    hi: {
      goal: 'Variables और outputs — फ़ॉर्म के फ़ील्ड जैसे; कोई जादू नहीं।',
      plain:
        'variable = फ़ॉर्म का सवाल ("server कितना बड़ा?"). var.name = जवाब पढ़ना। output = काम के बाद परिणाम (URL, IP)।',
      technical: 'Types: string, number, bool, list, map; tfvars; sensitive flag।',
      analogy: 'Pizza form: size choose, receipt par order number — output।',
      concept: wrap(`
<h3>Variable — खाली जगह जहाँ value बाद में भरें</h3>
<p><strong>variable</strong> = एक ही code dev/prod दोनों के लिए; हर बार main.tf नहीं बदलते।</p>
<pre class="course-diagram">variable "environment" { default = "dev" }
tags = { Env = var.environment }  ← var. zaroori</pre>
<h3>Value kahan se?</h3>
<ol><li>default</li><li>terraform.tfvars</li><li>-var="..." command</li></ol>
<h3>Output</h3>
<p>apply ke baad IP, DNS print — <code>output "id" { value = ... }</code></p>
<h3>गलतियाँ</h3>
<ul><li><code>environment</code> likhna, <code>var.environment</code> nahi</li><li>password Git mein</li></ul>`),
      practice: { title: 'जाँच', tasks: ['var. kyun', 'output kab milta'] },
    },
    hinglish: {
      goal: 'Variables + outputs — form aur receipt jaisa.',
      plain: 'variable = sawal. var.x = answer padhna. output = result dikhana.',
      concept: wrap(`
<p><strong>variable</strong> = khali field jahan value baad mein aati hai (placeholder word mat socho — bas empty slot).</p>
<pre class="course-diagram">var.environment — dot zaroori</pre>
<p>values: default, tfvars, -var flag</p>
<p>output = apply ke baad URL/IP</p>`),
      practice: { title: 'Check', tasks: ['var. dot', 'tfvars kya'] },
    },
  },

  'variables-state--state-basics': {
    hi: {
      goal: 'State file — Terraform ki diary jisme likha hota hai kya banaya।',
      plain: 'State = notebook: "maine server i-abc123 banaya". Bina iske Terraform bhool jata hai।',
      analogy: 'Warehouse mein har box par sticker — agli baar sticker padh kar kaam।',
      concept: wrap(`
<p>.tf = logical naam, state = real AWS ID, AWS = asli server.</p>
<ul><li>state haath se mat edit</li><li>public Git par mat daalo</li></ul>`),
      practice: { title: 'जाँच', tasks: ['state kyun', 'Git par kyun nahi'] },
    },
    hinglish: {
      goal: 'State file kya hai?',
      plain: 'Terraform ki diary — kaunsa real resource kis naam se linked hai.',
      concept: wrap(`<p>state list, state show commands. Git par mat commit.</p>`),
      practice: { title: 'Check', tasks: ['state purpose'] },
    },
  },

  'meta-arguments--count-foreach': {
    hi: {
      goal: 'count बनाम for_each — Python loop नहीं; फ़ोटोकॉपी बनाम नाम वाली कॉपी।',
      plain:
        'Terraform Python नहीं है। ज़्यादा resources: count (0,1,2…) या for_each (हर key पर अलग)।',
      analogy: 'count = 3 same photocopy. for_each = har sheher ka alag poster (Mumbai, Delhi)।',
      concept: wrap(`
<h3>Python का for loop यहाँ नहीं</h3>
<table class="tf-error-table">
<tr><td>3 same cheez</td><td>count = 3</td></tr>
<tr><td>naam se alag</td><td>for_each map</td></tr>
</table>
<p><code>each.key</code> naam, <code>each.value</code> value. Exam: stable names → for_each.</p>`),
      practice: { title: 'जाँच', tasks: ['count vs for_each', 'each.key'] },
    },
    hinglish: {
      goal: 'count vs for_each clear karo.',
      plain: 'Python loop nahi. count = numbered copies. for_each = map keys se.',
      concept: wrap(`
<p>count.index 0,1,2. for_each: each.key, each.value.</p>
<p>list se beech item delete → count risky, for_each better.</p>`),
      practice: { title: 'Check', tasks: ['Python for same? No'] },
    },
  },
}

// AWS + advanced lessons — full hi/hinglish blocks
const awsI18n = {
  'aws-vpc--vpc-design': {
    hi: {
      goal: '3-tier network dimag mein picture banao, phir HCL।',
      plain: 'VPC = colony. Public road (IGW), private ghar (app), vault street (DB)।',
      concept: wrap(`<p>Internet → IGW → public (ALB) → private (EC2) → DB subnets (RDS)। NAT = private se internet update.</p>`),
    },
    hinglish: { goal: 'VPC design samjho pehle.', plain: 'Public ALB, private EC2, DB subnets.', concept: wrap(`<p>IGW, NAT, subnets — diagram padho.</p>`) },
  },
  'aws-vpc--vpc-terraform': {
    hi: {
      goal: 'VPC module से बनाएँ — 20 subnets हाथ से लिखने की ज़रूरत नहीं।',
      plain: 'Module = तैयार VPC kit; आप CIDR और AZ list देंगे।',
      concept: wrap(`<p><code>terraform-aws-modules/vpc/aws</code> version ~> 5.0 pin karo।</p>`),
    },
    hinglish: { goal: 'VPC terraform module.', plain: 'Registry module use — time bachta hai.', concept: wrap(`<p>vpc module — version pin zaroori.</p>`) },
  },
  'aws-compute--ec2-and-sg': {
    hi: {
      goal: 'EC2 = virtual computer; Security Group = firewall jacket।',
      plain: 'Private subnet = bedroom; SG = kaun port knock kar sakta hai।',
      concept: wrap(`<p>ALB se hi app par traffic — 0.0.0.0/0 seedha app par mat.</p>`),
    },
    hinglish: { goal: 'EC2 + security group.', plain: 'SG rules samjho — ALB se app.', concept: wrap(`<p>stateful firewall pattern.</p>`) },
  },
  'aws-compute--user-data': {
    hi: {
      goal: 'Server boot par script — nginx install etc।',
      plain: 'user_data = naye server par chitthi: "ye install karo"।',
      concept: wrap(`<p>templatefile() se dynamic script।</p>`),
    },
    hinglish: { goal: 'User data bootstrap.', plain: 'Boot par script chalti hai.', concept: wrap(`<p>bootstrap.sh + templatefile.</p>`) },
  },
  'aws-alb--alb-intro': {
    hi: {
      goal: 'ALB visitors ko kai servers par baant ta hai।',
      plain: 'Ek gate (ALB) — andar kai waiters (EC2)।',
      concept: wrap(`<p>Layer 7 HTTP, target group, health check।</p>`),
    },
    hinglish: { goal: 'ALB intro.', plain: 'Load balancer = traffic share.', concept: wrap(`<p>HTTP routing, targets.</p>`) },
  },
  'aws-routing--path-host-routing': {
    hi: {
      goal: '/api alag server, / alag — same ALB।',
      plain: 'Receptionist URL path padh kar bhejta hai।',
      concept: wrap(`<p>Listener rule priority — chhota number pehle।</p>`),
    },
    hinglish: { goal: 'Path routing.', plain: '/api vs / rules.', concept: wrap(`<p>priority matter karti hai.</p>`) },
  },
  'aws-routing--https-acm': {
    hi: {
      goal: 'HTTPS lock — ACM certificate।',
      plain: 'Certificate = padlock; ALB par 443 listener।',
      concept: wrap(`<p>Route53 DNS validation aasaan।</p>`),
    },
    hinglish: { goal: 'HTTPS ACM.', plain: 'Free cert domain prove karke.', concept: wrap(`<p>443 listener + cert ARN.</p>`) },
  },
  'aws-three-tier--route53-rds-stack': {
    hi: {
      goal: 'Poora app: DNS → ALB → EC2 → database।',
      plain: 'User domain type kare → phonebook → door → waiter → storage।',
      concept: wrap(`<p>पासवर्ड plain Git में नहीं। उसी दिन destroy — महंगा lab।</p>`),
    },
    hinglish: { goal: '3-tier full stack.', plain: 'Route53 + ALB + RDS.', concept: wrap(`<p>secrets safe rakho. destroy zaroori.</p>`) },
  },
  'aws-scaling--launch-templates-asg': {
    hi: {
      goal: 'Auto Scaling — load par servers badhao/ghatao।',
      plain: 'Template = badge design; ASG = HR jo 2-10 servers rakhe।',
      concept: wrap(`<p>min, max, desired_capacity numbers।</p>`),
    },
    hinglish: { goal: 'ASG scaling.', plain: 'Auto add/remove servers.', concept: wrap(`<p>desired/min/max.</p>`) },
  },
  'aws-observability--cloudwatch-alarms': {
    hi: {
      goal: 'Alarm = smoke detector metrics par।',
      plain: '5xx zyada → email SNS se।',
      concept: wrap(`<p>metric, threshold, period set karo।</p>`),
    },
    hinglish: { goal: 'CloudWatch alarms.', plain: 'Error zyada → alert.', concept: wrap(`<p>ALB 5xx alarm example.</p>`) },
  },
  'aws-observability--nlb-tcp': {
    hi: {
      goal: 'NLB = TCP fast path; ALB = HTTP smart।',
      plain: 'Games/raw TCP → NLB; websites → ALB।',
      concept: wrap(`<p>Layer 4 vs Layer 7 farq।</p>`),
    },
    hinglish: { goal: 'NLB vs ALB.', plain: 'TCP = NLB, HTTP = ALB.', concept: wrap(`<p>use case choose.</p>`) },
  },
  'terraform-modules--registry-modules': {
    hi: {
      goal: 'Registry se tested modules — khud VPC mat likho pehle din।',
      plain: 'Terraform का app store; version number ज़रूर pin करें।',
      concept: wrap(`<p>registry.terraform.io — Inputs/Outputs padho।</p>`),
    },
    hinglish: { goal: 'Public modules.', plain: 'Registry = app store for Terraform.', concept: wrap(`<p>version pin + README.</p>`) },
  },
  'terraform-modules--build-local-module': {
    hi: {
      goal: 'Apna module folder — root se call।',
      plain: 'modules/site/ = reusable recipe; main.tf head chef।',
      concept: wrap(`<p>source = "./modules/..."</p>`),
    },
    hinglish: { goal: 'Local module banao.', plain: './modules/name call karo.', concept: wrap(`<p>reuse across projects.</p>`) },
  },
  'remote-state--s3-dynamodb-backend': {
    hi: {
      goal: 'State S3 par — team share; DynamoDB lock।',
      plain: 'Drawer cloud par; lock = occupied sign।',
      concept: wrap(`<p>bootstrap bucket; init -migrate-state।</p>`),
    },
    hinglish: { goal: 'Remote state S3.', plain: 'Team ek state share. DynamoDB lock.', concept: wrap(`<p>migrate-state step.</p>`) },
  },
  'remote-state--remote-state-datasource': {
    hi: {
      goal: 'Doosre project ka output padho — VPC team → App team।',
      plain: 'Phone directory se vpc_id import।',
      concept: wrap(`<p>data.terraform_remote_state</p>`),
    },
    hinglish: { goal: 'Remote state data source.', plain: 'VPC output app mein use.', concept: wrap(`<p>no duplicate VPC.</p>`) },
  },
  'iac-devops--pipeline-overview': {
    hi: {
      goal: 'Git push par plan — human approve phir apply।',
      plain: 'Robot plan chalata hai; aadmi OK karta hai।',
      concept: wrap(`<p>keys repo mein mat — OIDC/IR role real jobs mein।</p>`),
    },
    hinglish: { goal: 'CI/CD terraform.', plain: 'Pipeline: plan then apply.', concept: wrap(`<p>buildspec.yml example.</p>`) },
  },
  'troubleshooting--common-errors': {
    hi: {
      goal: 'Common errors samjho aur fix — credential, lock, AMI।',
      plain: 'Error neeche se padho; zyada tar keys, region, permission, lock।',
      concept: wrap(`
<table class="tf-error-table">
<tr><td>credentials नहीं</td><td>aws configure</td></tr>
<tr><td>AccessDenied</td><td>IAM policy</td></tr>
<tr><td>state lock</td><td>doosra terminal band</td></tr>
</table>`),
      localLab: { title: 'Abhyas', steps: ['bina configure plan — error dekho', 'fix karke plan OK'] },
      practice: { title: 'Yaad', tasks: ['plan pehle', 'destroy baad'] },
    },
    hinglish: {
      goal: 'Errors fix karna seekho.',
      plain: 'Credential, lock, AMI — table follow karo.',
      concept: wrap(`<p>No credentials → aws configure. Lock → wait/force-unlock carefully.</p>`),
      practice: { title: 'Check', tasks: ['plan before apply'] },
    },
  },
  'capstone--three-tier-full-stack': {
    hi: {
      goal: 'Sab jodna — VPC se ALB tak ek project।',
      plain: 'Capstone = final exam; layer by layer plan, end destroy।',
      concept: wrap(`<p>User → ALB → EC2 → RDS. Stuck → Troubleshooting module।</p>`),
      localLab: { title: 'Capstone lab', steps: ['25-capstone folder', 'vpc plan', 'full plan', 'destroy'] },
      practice: { title: 'Complete', tasks: ['flow explain', 'destroy OK'] },
    },
    hinglish: {
      goal: 'Capstone end-to-end.',
      plain: 'Poora stack ek folder — plan har layer, destroy end.',
      concept: wrap(`<p>cert prep se pehle capstone khatam karo.</p>`),
      practice: { title: 'Done', tasks: ['3-tier flow samjha'] },
    },
  },
}

Object.assign(LESSON_I18N, awsI18n)

/** Merge hi/hinglish patches; rebuild fields used in intro */
export function applyLessonI18n(content, lessonId) {
  const patch = LESSON_I18N[lessonId]
  if (!patch) return content
  for (const loc of ['hi', 'hinglish']) {
    if (!patch[loc]) continue
    Object.assign(content[loc], patch[loc])
  }
  return content
}

/** Richer template when no DEEP_LESSON */
export function templateI18n(lessonKey, title, metaConcept) {
  const t = title
  return {
    hi: {
      goal: `${t} — Terraform AWS course में इस topic को आसान भाषा में सीखें।`,
      plain: `${t} का मतलब और lab steps नीचे दिए हैं — पहले "Deep explanation" पढ़ें, फिर project files copy करें।`,
      technical: 'AWS provider ~> 5.0, Terraform 1.9+, हमेशा plan फिर apply।',
      analogy: 'हर lesson एक मंज़िल — नीचे उतरने से पहले ऊपर की मंज़िल पूरी करें।',
      steps: ['विस्तार पढ़ें', 'Project files कॉपी', 'Local lab', 'Module check'],
      concept: metaConcept?.hi || metaConcept?.en || `<p>${t} — विस्तार इस पाठ में।</p>`,
    },
    hinglish: {
      goal: `${t} — is lesson mein seekho (Hinglish).`,
      plain: `${t} ko simple words mein + project files + local lab — step follow karo.`,
      technical: 'Provider 5.x, plan pehle apply baad, destroy after AWS lab.',
      analogy: 'Ek floor ek floor — jaldi mat bhaago.',
      steps: ['Deep section padho', 'Files copy', 'Lab karo', 'Quiz try'],
      concept: metaConcept?.hinglish || metaConcept?.hi || metaConcept?.en || `<p>${t} — detail neeche.</p>`,
    },
  }
}
