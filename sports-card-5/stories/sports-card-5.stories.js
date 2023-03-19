import { html } from 'lit';
import '../src/sports-card-5.js';

export default {
  title: 'SportsCard5',
  component: 'sports-card-5',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <sports-card-5
      style="--sports-card-5-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </sports-card-5>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
