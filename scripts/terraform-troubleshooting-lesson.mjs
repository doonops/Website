/** Troubleshooting common Terraform + AWS errors */

export const TROUBLESHOOTING_CONTENT = {
  en: {
    goal: 'Fix the errors you will actually see in labs — credentials, permissions, state lock, wrong region, and failed apply.',
    plain: 'When Terraform fails, read the red error from bottom to top. Most beginner issues are: wrong AWS keys, wrong region, missing IAM permission, or state locked by another terminal.',
    technical:
      'Use TF_LOG=DEBUG sparingly. terraform validate / fmt before plan. State lock via DynamoDB. Provider region must match resource region. IAM policy must allow service API calls.',
    steps: ['Read error message', 'Match to table below', 'Fix one thing', 'terraform plan again'],
    concept: `
<h2>Error cheat sheet (layman + fix)</h2>
<table class="tf-error-table">
<thead><tr><th>Error / symptom</th><th>Likely cause</th><th>What to do</th></tr></thead>
<tbody>
<tr><td><code>No valid credential sources</code></td><td>AWS CLI not configured</td><td>Run <code>aws configure</code> → test <code>aws sts get-caller-identity</code></td></tr>
<tr><td><code>AccessDenied</code> / <code>not authorized</code></td><td>IAM user missing permission</td><td>Add policy (lab: PowerUserAccess) or ask admin</td></tr>
<tr><td><code>Error acquiring the state lock</code></td><td>Another apply running or crashed</td><td>Wait; close other terminal; only then <code>terraform force-unlock ID</code></td></tr>
<tr><td><code>InvalidAMIID.NotFound</code></td><td>AMI ID wrong for region</td><td>Use data source aws_ami or pick AMI in same region as provider</td></tr>
<tr><td><code>BucketAlreadyExists</code></td><td>S3 bucket name global unique</td><td>Change bucket name suffix in variables</td></tr>
<tr><td><code>Unsupported attribute</code></td><td>Provider version / wrong output name</td><td>Run <code>terraform init -upgrade</code>, check module docs</td></tr>
<tr><td>Unexpected bill</td><td>Forgot destroy</td><td><code>terraform destroy</code> in lab folder; check AWS Billing dashboard</td></tr>
</tbody>
</table>
<h2>Safe debug order</h2>
<ol>
<li><code>terraform fmt -check</code></li>
<li><code>terraform validate</code></li>
<li><code>terraform plan</code> (read carefully)</li>
<li>Only then <code>apply</code></li>
</ol>
<pre class="course-diagram"># Extra logs (short time only)
export TF_LOG=ERROR
terraform plan</pre>`,
    localLab: {
      title: 'Practice fixing (optional)',
      prerequisites: ['Completed at least one AWS lab'],
      steps: [
        'Intentionally run terraform plan without aws configure — read credential error.',
        'Fix with aws configure — plan should work.',
        'Run plan in two terminals at once on same state — see lock message (then stop one).',
      ],
    },
    practice: {
      title: 'Remember',
      tasks: ['Know where credentials live (aws configure, not in Git)', 'plan before apply', 'destroy after labs'],
    },
  },
  hi: {
    goal: 'Common Terraform/AWS errors samjho aur fix karo.',
    plain: 'Error aaye to neeche se padho. Zyada tar: galat AWS keys, region, IAM permission, ya state lock.',
    technical: 'TF_LOG=DEBUG. validate/fmt. force-unlock carefully.',
    steps: ['Error padho', 'Table match', 'Ek fix', 'phir plan'],
    concept: `
<h2>Error table</h2>
<table class="tf-error-table">
<tr><td>No valid credential sources</td><td>aws configure nahi</td><td>aws configure + get-caller-identity</td></tr>
<tr><td>AccessDenied</td><td>IAM permission kam</td><td>Policy add / admin</td></tr>
<tr><td>state lock</td><td>Doosra apply</td><td>Wait / force-unlock carefully</td></tr>
<tr><td>AMI not found</td><td>Galat region AMI</td><td>data aws_ami same region</td></tr>
<tr><td>Bill zyada</td><td>destroy bhool gaye</td><td>terraform destroy</td></tr>
</table>`,
    localLab: {
      title: 'Optional practice',
      steps: ['Bina configure plan — error dekho', 'Configure karke fix', 'Lock error experiment'],
    },
    practice: { title: 'Yaad rakho', tasks: ['keys Git mein nahi', 'plan pehle', 'destroy baad mein'] },
  },
  hinglish: {
    goal: 'Common errors fix karna seekho.',
    plain: 'Error bottom-up padho. Keys, region, IAM, state lock — usual suspects.',
    steps: ['Error read', 'Table se match', 'Fix', 'plan'],
    concept: `<h2>Cheat sheet</h2>
<table class="tf-error-table">
<tr><td>No credentials</td><td>aws configure karo</td></tr>
<tr><td>AccessDenied</td><td>IAM policy</td></tr>
<tr><td>state lock</td><td>doosra terminal band</td></tr>
</table>`,
    localLab: { title: 'Practice', steps: ['configure miss → error', 'fix → plan OK'] },
    practice: { title: 'Check', tasks: ['plan before apply'] },
  },
}

export const TROUBLESHOOTING_META = {
  titles: {
    en: 'Troubleshooting Common Errors',
    hi: 'आम त्रुटियाँ और समाधान',
    hinglish: 'Common errors troubleshoot',
  },
}
