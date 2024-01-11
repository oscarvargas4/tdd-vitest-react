import { beforeEach, describe, expect, it } from 'vitest';
import Accordion from './Accordion';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My content</h3>
        <p>Some content</p>
      </Accordion>
    );
  });

  it('should show the title all the time', () => {
    expect(screen.getByText('hello')).toBeDefined();
  });

  it('should not show the content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  it('should show the content when title is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryAllByText(/content/i)).toBeDefined();
  })

  it('should hide the content when title is clicked', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  })
});
