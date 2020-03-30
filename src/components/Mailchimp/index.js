import React, { Component } from 'react';

class Mailchimp extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.id = 'mcjs';
    script.src =
      'https://chimpstatic.com/mcjs-connected/js/users/6d2cf372e89cc2d8f4fbadda8/e1ed7dcea42f13dceef0f5f6e.js';
    // For head
    document.head.appendChild(script);
  }

  render() {
    return (
      <div className="Mailchimp">
        <script />
      </div>
    );
  }
}
export default Mailchimp;
