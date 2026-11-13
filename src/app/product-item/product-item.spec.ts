import { ProductItem } from './product-item';
import { render, screen } from '@testing-library/angular';

describe('ProductItem', () => {
  it('wyświetla napis sklep w headerze', async () => {
    await render(ProductItem);

    expect(screen.getByText(/sklep/i)).toBeTruthy();
  });
});
