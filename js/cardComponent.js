class CardComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const title = this.getAttribute('card-title');
        const subtitle = this.getAttribute('card-subtitle');
        const imgSource = this.getAttribute('card-imgsrc');

        const wrapper = document.createElement('article');
        wrapper.innerHTML = `
            <h2>${title}</h2>
            <p>${subtitle}</p>
            <img src="${imgSource}" loading="lazy" alt="..." />
        `;
        wrapper.className = 'card';

        const style = document.createElement('style');
        style.textContent = `
        .card {
            background-color: white;
            border-radius: .5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            cursor: pointer;
        }

        .card h2 {
            font-size: 1rem;
            margin-bottom: .5rem;
        }

        .card p {
            font-size: .8rem;
        }

        .card img {
            width: 100%;
            height: 10rem;
            margin-top: .5rem;
            object-fit: fill;
            border-radius: .5rem;
        }
        `;

        shadow.appendChild(wrapper);
        shadow.appendChild(style);
    }
}

customElements.define('card-component', CardComponent);