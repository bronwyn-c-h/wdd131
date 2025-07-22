const wardrobe = [
    // Tops
    {
        image: "img/whiteshirt.jpg",
        description: "white t-shirt",
        tags: ['white', 't-shirt', 'tops'],
        category: "top"
    },
    {
        image: "img/bluesweater.png",
        description: "blue sweater",
        tags: ['blue', 'sweater', 'tops'],
        category: "top"
    },
    {
        image: "img/stripedshirt.png",
        description: "black and white striped shirt",
        tags: ['black', 'white', 'striped', 'shirt', 'tops'],
        category: "top"
    },
    {
        image: "img/graphictee.png",
        description: "black graphic tee",
        tags: ['black', 'tee', 'tops'],
        category: "top"
    },
    {
        image: "img/blueshirt.png",
        description: "blue fitted shirt",
        tags: ['blue', 'shirt', 'tops'],
        category: "top"
    },
    // Bottoms
    {
        image: "img/blackshorts.png",
        description: "black biker shorts",
        tags: ['black', 'shorts', 'bottoms'],
        category: "bottom"
    },
    {
        image: "img/jeanskirt.png",
        description: "jean skirt",
        tags: ['jean', 'skirt', 'bottoms'],
        category: "bottom"
    },
    {
        image: "img/linenpants.png",
        description: "beige linen pants",
        tags: ['beige', 'pants', 'bottoms'],
        category: "bottom"
    },
    {
        image: "img/leggings.png",
        description: "black leggings",
        tags: ['black', 'leggings', 'bottoms'],
        category: "bottom"
    },
    // Shoes
    {
        image: "img/whitesandals.png",
        description: "white sandals",
        tags: ['white', 'sandals', 'shoes'],
        category: "shoe"
    },
    {
        image: "img/redvans.png",
        description: "red vans",
        tags: ['red', 'vans', 'sneakers', 'shoes'],
        category: "shoe"
    },
    {
        image: "img/nudeheels.png",
        description: "nude heels",
        tags: ['nude', 'heels', 'shoes'],
        category: "shoe"
    },
    {
        image: "img/whitesneakers.png",
        description: "white sneakers",
        tags: ['white', 'sneakers', 'shoes'],
        category: "shoe"
    },
    {
        image: "img/blackvans.png",
        description: "black vans",
        tags: ['black', 'vans', 'shoes', 'sneakers'],
        category: "shoe"
    }
];

function renderCloset(items) {
    const categories = ["top", "bottom", "shoe"];
    const categoryNames = {
        top: "Tops",
        bottom: "Bottoms",
        shoe: "Shoes"
    };
    const container = document.querySelector('.clothing-category');
    container.innerHTML = categories.map(category => {
        const filtered = items.filter(item => item.category === category);
        if (filtered.length === 0) return '';
        return `
            <div class="closet-group">
                <h3>${categoryNames[category]}</h3>
                <div class="closet-items">
                    ${filtered.map(item => `
                        <div class="closet-item">
                            <img src="${item.image}" alt="image of ${item.description}">
                            <p>${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

//renderCloset(wardrobe);

function itemTemplate(tops, bottoms, shoes) {
	return `<figure class="clothing-category">
    <div>
	<img src="${tops.image}" alt="image of ${tops.description}" />
    </div>
    <div>
	<img src="${bottoms.image}" alt="image of ${bottoms.description}" />
    </div>
    <div>
	<img src="${shoes.image}" alt="image of ${shoes.description}" />
    </div>
</figure>`;
}

function getByCategory(arr, category) {
    return arr.filter(item => item.category === category);
}

function suggestOutfit(wardrobe) {
    const tops = getByCategory(wardrobe, "top");
    const bottoms = getByCategory(wardrobe, "bottom");
    const shoes = getByCategory(wardrobe, "shoe");

    const top = tops[Math.floor(Math.random() * tops.length)];
    const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    const shoe = shoes[Math.floor(Math.random() * shoes.length)];

    const outfitHTML = itemTemplate(top, bottom, shoe);
    document.querySelector('.suggestfit').innerHTML = outfitHTML;
}

//suggestOutfit(wardrobe);

function filterItems(query) {
    query = query.toLowerCase();
    return wardrobe.filter( top=> {
        // Check name, description, tags, and ingredients
        const description = top.description.toLowerCase();
        const tags = top.tags.join(' ').toLowerCase();
        return (
            description.includes(query) ||
            tags.includes(query)
        );
    }).sort((a, b) => a.description.localeCompare(b.name));
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = event.target.query.value.toLowerCase();
    const filtered = filterItems(query);
    renderCloset(filtered);
});

