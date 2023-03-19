import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";



export class SportsCard5 extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
        reflect: true
      },
      
      top: {
        type: String,
        reflect: true
      },
      opened: {
        type: Boolean,
        reflect: true
      },
      accentColor: {
        type: String,
        reflect: true,
        attribute: 'accent-color'
      }
    }
  }

  static get styles() {
    return css`
.card {
  display: inline-block;
  flex-direction: row;
  position: relative;
  height: 300px;
  width: 200px;
  border: 15px #003087 solid;
}
.card:before, .card:after {
  content: '';
}
.card:before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8;
  border-top: 60px #003087 solid;
  border-right: 60px solid transparent;
}
.card:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  border-top: 62px solid black;
  border-right: 62px solid transparent;
}
.card .team_logo {
  position: absolute;
  z-index: 15;
  top: 10px;
  left: 10px;
  max-width: 60px;
  max-height: 32px;
}
.card .player {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 296px;
  width: 196px;
  border: 2px black solid;
}
.card figcaption {
  position: absolute;
  bottom: -10px;
  right: 0;
  width: 66%;
  height: 30px;
  text-align: center;
  font-size: 100%;
  background: white;
  border: 2px #e4002c solid;
  z-index: 10;
}
.card figcaption:before, .card figcaption:after {
  content: '';
}
.card figcaption:before {
  position: absolute;
  bottom: 32px;
  right: -2px;
  z-index: 18;
  border-bottom: 15px #003087 solid;
  border-left: 15px solid transparent;
}
.card figcaption:after {
  position: absolute;
  bottom: 32px;
  right: -2px;
  z-index: 15;
  border-bottom: 17px solid black;
  border-left: 17px solid transparent;
}

.details{
  margin: 2px;
  border: 2px #003087 solid;
  padding: 5px;
  width: 15%;
  text-align: center;
  
}






.flip-card {
  background-color: transparent;
  width: 230px;
  height: 330px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; 
}


.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: #003087;
  color: red;
  transform: rotateY(180deg);
}



`;
  }
    

  

  constructor() {
    super();
    this.name = "Don Mattingly";
    this.info = "Information:"
    this.top = "Don";
    this.image = "https://static01.nyt.com/images/2015/01/04/sports/DOG-mattingly/DOG-mattingly-superJumbo.jpg?quality=75&auto=webp"
    this.accentColor = null;
    this.opened = false;
  
  }

  toggleEvent(e){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true:false;
    this.opened = state;
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened'){
        this.dispatchEvent(new CustomEvent('open-changed', 
        {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail: 
          {value: this[propName] }
        }));
      }
  
    });
  }
        

  

  render() {
    return html`

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <div class="card">
  <img class="team_logo" src="https://cdn.freebiesupply.com/images/large/2x/new-york-yankees-logo-transparent.png"/>
  <meme-maker image-url="${this.image}"
            top-text="${this.top}"
            font-size="28px"></meme-maker>

  <figcaption class="name">${this.name}</figcaption>
 </div>
      </div>
      <div class="flip-card-back">
      <div class="stats-nameHeader">Player Name: </div>
          <slot></slot>
      </div>
    </div>
</div>
</div>



<details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}">
          <summary>${this.info}</summary>
          <div>
          <slot name="info"></slot>
          </div>
      </details>
</div>



  




    `;
  }
}
customElements.define('sports-card-5', SportsCard5);