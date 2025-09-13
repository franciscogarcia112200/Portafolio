interface ConceptSectionProps {
  title: string;
  subtitle: string;
  description: string;
  children?: React.ReactNode;
}

export default function ConceptSection({ title, subtitle, description, children }: ConceptSectionProps) {
  return (
    <section className="concept-section">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      {children}
    </section>
  );
}