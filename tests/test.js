import axios from 'axios';

test('checks if React app is working on gh-pages', async () => {
  render(<MyComponent />);
  const uniqueElement = screen.getByText('Unique Text on Your App');
  expect(uniqueElement).toBeInTheDocument();
  const response = await axios.get('http://thugpigeon653.github.io/react-portfolio');
  expect(response.status).toBe(200); 
});