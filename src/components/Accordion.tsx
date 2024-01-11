import { useState } from 'react';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const openHandler = () => {
    return setOpen(!open);
  };

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={openHandler}>{open ? 'Close' : 'Open'}</button>
      {open && <div>{children}</div>}
    </div>
  );
}
