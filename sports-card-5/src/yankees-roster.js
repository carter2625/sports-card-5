import { LitElement, html, css } from 'lit';
import "./sports-card-5.js";

export class YankeesRoster extends LitElement {
    static get tag() {
        return 'yankees-roster';
    }
    static get properties() {
        return {
          players: { type: Array },
          team: { type: String },
        }
    }

    constructor() {
        super();
        this.players = [];
        this.team = 'New York Yankees';
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../api/roster', import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.players = data;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.team}</h2>
        <div class="wrapper">
            ${this.players.map(player => html`
            <div class="item">
                <sports-card-5 name="${player.name}" top="${player.top}" info="${player.info}" image="${player.image}"></sports-card-5>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(YankeesRoster.tag, YankeesRoster);