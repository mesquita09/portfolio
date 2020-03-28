import { Component } from 'react';

class Mailchimp extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://chimpstatic.com/mcjs-connected/js/users/6d2cf372e89cc2d8f4fbadda8/f2c2c863e21fcc20de2385bd8.js';
    // For head
    document.head.appendChild(script);
  }
}

export default Mailchimp;
