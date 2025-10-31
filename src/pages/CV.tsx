export default function CV() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Curriculum Vitae</h1>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <object
          data="/Faris-Nasser-CV.pdf"
          type="application/pdf"
          className="w-full h-[85vh]"
        >
          <div className="p-6 text-center">
            <p className="text-muted-foreground mb-4">
              Your browser doesn't support embedded PDFs.
            </p>
            <a href="/Faris-Nasser-CV.pdf" className="text-accent hover:underline">
              Download the CV (PDF)
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
