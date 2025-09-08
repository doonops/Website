import React from "react";

/* Country calling codes (truncated but broad coverage) */
const COUNTRY_CODES = [
  { name: "India", code: "+91" },
  { name: "United States / Canada", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Netherlands", code: "+31" },
  { name: "Singapore", code: "+65" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  // ... (baaki list same as before - keep the rest you already had)
];

/* Services list */
const SERVICES = [
  "DevSecOps Solutions",
  "Cloud Migration",
  "Release Engineering",
  "Cloud Infra Consulting",
  "Security & Compliance",
  "Database Management",
  "Infrastructure as Code",
  "Managed Kubernetes",
  "Automated Testing",
  "E-commerce Platforms",
  "AI Bots & Automation",
  "Business Applications",
];

export default function WelcomePopup({
  delayMs = 600,
  showOncePerSession = true,
  storageKey = "welcomePopupShown"
}) {
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    service: "",
    dialCode: "+91",
    phone: "",
  });

  // Open once on first load (unless session flag exists)
  React.useEffect(() => {
    const already = showOncePerSession && sessionStorage.getItem(storageKey) === "1";
    if (!already) {
      const t = setTimeout(() => setOpen(true), delayMs);
      return () => clearTimeout(t);
    }
  }, [delayMs, showOncePerSession, storageKey]);

  // 🔔 NEW: allow programmatic open/close via window events
  React.useEffect(() => {
    const openHandler = (e) => {
      // optional prefill: window.dispatchEvent(new CustomEvent('open-welcome-popup', { detail: { prefill: {...} } }))
      if (e?.detail?.prefill) {
        setForm((f) => ({ ...f, ...e.detail.prefill }));
      }
      setOpen(true);
      setSubmitted(false);
    };
    const closeHandler = () => setOpen(false);
    window.addEventListener("open-welcome-popup", openHandler);
    window.addEventListener("close-welcome-popup", closeHandler);
    return () => {
      window.removeEventListener("open-welcome-popup", openHandler);
      window.removeEventListener("close-welcome-popup", closeHandler);
    };
  }, []);

  const close = () => setOpen(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.phone) {
      alert("Please fill Name, Email, Service and Contact No.");
      return;
    }
    setSubmitting(true);

    const payload = {
      ...form,
      phoneInternational: `${form.dialCode} ${form.phone}`.trim(),
    };

    // TODO: send to backend
    // await fetch('/api/lead', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (showOncePerSession) sessionStorage.setItem(storageKey, "1");
      setTimeout(() => setOpen(false), 2500);
    }, 700);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Quick Contact"
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1050, padding: "16px"
      }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        style={{
          width: "100%", maxWidth: 560, background: "#fff", borderRadius: 12,
          boxShadow: "0 1.25rem 2.5rem rgba(0,0,0,.18)", overflow: "hidden",
          transform: "translateY(0)", animation: "popIn .18s ease-out"
        }}
      >
        {/* header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", borderBottom: "1px solid #eef2f7"
        }}>
          <h5 style={{ margin: 0 }}>Quick Contact</h5>
          <button onClick={close} aria-label="Close"
            style={{ border: 0, background: "transparent", fontSize: 22, lineHeight: 1, cursor: "pointer", color: "#6b7280" }}>
            ×
          </button>
        </div>

        {/* body */}
        <div style={{ padding: 18 }}>
          {!submitted ? (
            <form onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Name<span className="text-danger">*</span></label>
                  <input type="text" name="name" value={form.name} onChange={onChange} className="form-control" placeholder="Your full name" required />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Company</label>
                  <input type="text" name="company" value={form.company} onChange={onChange} className="form-control" placeholder="Company name" />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Email<span className="text-danger">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={onChange} className="form-control" placeholder="you@example.com" required />
                </div>

                {/* Country code + Phone */}
                <div className="col-12 col-md-6">
                  <label className="form-label">Contact No.<span className="text-danger">*</span></label>
                  <div className="row g-2">
                    <div className="col-5">
                      <select name="dialCode" value={form.dialCode} onChange={onChange} className="form-select" aria-label="Country code">
                        {COUNTRY_CODES.map(({ name, code }) => (
                          <option key={`${name}-${code}`} value={code}>{name} ({code})</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-7">
                      <input
                        type="tel" name="phone" value={form.phone} onChange={onChange}
                        className="form-control" placeholder="98XXXXXXXX" inputMode="tel"
                        pattern="[0-9\\s\\-()+]{6,}" required aria-label="Phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label">Service<span className="text-danger">*</span></label>
                  <select name="service" value={form.service} onChange={onChange} className="form-select" required>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (<option value={s} key={s}>{s}</option>))}
                  </select>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2 mt-4">
                <button type="button" className="btn btn-light" onClick={close}>Not now</button>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-2" style={{ fontSize: 28 }}>🎉</div>
              <h5>Thanks!</h5>
              <p className="mb-0">We will get in touch with you soon.</p>
            </div>
          )}
        </div>
      </div>

      {/* tiny scoped animation */}
      <style>{`
        @keyframes popIn { from { opacity: .6; transform: translateY(6px); } to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
}
