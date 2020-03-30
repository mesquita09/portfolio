/* class Mailchimp extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://chimpstatic.com/mcjs-connected/js/users/6d2cf372e89cc2d8f4fbadda8/f2c2c863e21fcc20de2385bd8.js';
    // For head
    document.head.appendChild(script);
  }
} */

const Mailchimp = callback => {
  const existingScript = document.getElementById('mcjs');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src =
      'https://chimpstatic.com/mcjs-connected/js/users/6d2cf372e89cc2d8f4fbadda8/e1ed7dcea42f13dceef0f5f6e.js';
    script.id = 'mcjs';
    document.head.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};

export default Mailchimp;
