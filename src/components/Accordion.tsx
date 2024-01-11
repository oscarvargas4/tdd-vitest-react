type AccordionProps = {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <p>{children}</p>
      </div>
    </div>
  )
}
