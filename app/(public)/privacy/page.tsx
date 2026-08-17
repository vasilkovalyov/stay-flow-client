export default function Privacy() {
  return (
    <section className="pt-[64px] pb-0">
      <div className="container-md">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: December 1, 2024</p>
        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly (name, email, payment info) and
              automatically (usage data, cookies) to provide and improve our services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to process bookings, communicate with you, improve our
              platform, prevent fraud, and comply with legal obligations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We share data with hosts when you book, payment processors to handle transactions, and
              service providers who help us operate. We never sell your personal data.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, delete, or export your personal data at any
              time from your account settings.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential cookies for platform functionality and analytics cookies to
              understand usage. You can manage cookie preferences in your browser settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
