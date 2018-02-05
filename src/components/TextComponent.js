import React, { Component } from 'react';
import './TextComponent.css';

class TextComponent extends Component {
  render() {
    return (
        <section className="text-section">
            
            <h1>Text Section</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue. Praesent non sapien et lectus fermentum vulputate. Fusce sit amet massa sed lorem condimentum porta sed at turpis. Maecenas in lorem scelerisque, pretium metus et, accumsan felis. Nunc cursus, nulla ac luctus cursus, orci nulla cursus nulla, vitae dapibus metus dolor sit amet metus. Aliquam tincidunt commodo nulla sit amet faucibus. Sed a placerat lacus, vel faucibus erat. Ut turpis urna, blandit ac mauris ac, porta tempor leo. Pellentesque vitae egestas tellus, quis aliquam purus.</p>
            
        </section>     
      
    );
  }
}

export default TextComponent;

