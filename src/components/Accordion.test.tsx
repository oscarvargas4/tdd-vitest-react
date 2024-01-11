import { describe, expect, it } from 'vitest';
import Accordion from './Accordion';
import { render, screen } from '@testing-library/react';

describe('Accordion', () => {
  it('should render component', () => {
    render(
      <Accordion title="hello">
        <h3>My content</h3>
        <p>Some content</p>
      </Accordion>
    );
    expect(screen.getByText('hello')).toBeDefined();
  });
});
