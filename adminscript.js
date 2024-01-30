// Manually created data arrays
// Manually created data arrays
const productsData = [
    {
        id: 1,
        name: 'Dell XPS 13 Laptop',
        description: '13-inch laptop with InfinityEdge display, 11th Gen Intel Core processor, and stunning design.',
        price: 1299.99,
        assignDate: '2023-01-01T12:00:00Z',
        approvedDate: '2023-01-05T15:30:00Z',
        image: 'images/dell_xps_13.jpg',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        description: 'Pro-level smartphone with ProMotion display, A15 Bionic chip, and advanced camera system.',
        price: 1099.99,
        assignDate: '2023-01-02T14:45:00Z',
        approvedDate: '2023-01-08T10:15:00Z',
        image: 'images/iphone_13_pro.jpg',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Samsung QLED 4K Smart TV',
        description: '65-inch QLED TV with Quantum Dot technology, 4K UHD resolution, and smart TV features.',
        price: 1499.99,
        assignDate: '2023-01-03T11:30:00Z',
        approvedDate: '2023-01-06T18:45:00Z',
        image: 'images/samsung_qled_tv.jpg',
        category: 'Electronics'
    },
    {
        id: 4,
        name: 'Sony WH-1000XM4 Wireless Headphones',
        description: 'Industry-leading noise-canceling headphones with premium sound quality and long battery life.',
        price: 349.99,
        assignDate: '2023-01-04T10:15:00Z',
        approvedDate: '2023-01-07T14:00:00Z',
        image: 'images/sony_wh1000xm4.jpg',
        category: 'Electronics'
    },
    {
        id: 5,
        name: 'Canon EOS R5 Mirrorless Camera',
        description: 'High-performance mirrorless camera with 45MP sensor, 8K video recording, and advanced autofocus.',
        price: 3499.99,
        assignDate: '2023-01-05T15:00:00Z',
        approvedDate: '2023-01-09T08:30:00Z',
        image: 'images/canon_eos_r5.jpg',
        category: 'Electronics'
    },
    {
        id: 6,
        name: 'Nike Air Max 270 Sneakers',
        description: 'Comfortable and stylish sneakers with Air Max cushioning for all-day wear.',
        price: 99.99,
        assignDate: '2023-01-06T09:45:00Z',
        approvedDate: '2023-01-10T11:20:00Z',
        image: 'images/nike_air_max_270.jpg',
        category: 'Apparel'
    },
    {
        id: 7,
        name: 'Levi\'s 501 Original Fit Jeans',
        description: 'Classic and timeless jeans with a straight fit, perfect for casual and everyday wear.',
        price: 59.99,
        assignDate: '2023-01-07T14:30:00Z',
        approvedDate: '2023-01-11T13:45:00Z',
        image: 'images/levis_501_jeans.jpg',
        category: 'Apparel'
    },
    {
        id: 8,
        name: 'Fossil Gen 6 Smartwatch',
        description: 'Stylish and feature-packed smartwatch with heart rate monitoring, GPS, and customizable dials.',
        price: 249.99,
        assignDate: '2023-01-08T16:00:00Z',
        approvedDate: '2023-01-12T09:15:00Z',
        image: 'images/fossil_gen_6.jpg',
        category: 'Electronics'
    },
    {
        id: 9,
        name: 'Harry Potter and the Sorcerer\'s Stone',
        description: 'The first book in the Harry Potter series, introducing readers to the magical world of Hogwarts.',
        price: 14.99,
        assignDate: '2023-01-09T10:30:00Z',
        approvedDate: '2023-01-13T15:00:00Z',
        image: 'images/harry_potter_book.jpg',
        category: 'Books'
    },
    {
        id: 10,
        name: 'GoPro HERO9 Black Action Camera',
        description: 'Powerful action camera with 5K video, 20MP photos, and rugged design for capturing adventures.',
        price: 399.99,
        assignDate: '2023-01-10T11:45:00Z',
        approvedDate: '2023-01-14T12:30:00Z',
        image: 'images/gopro_hero9_black.jpg',
        category: 'Electronics'
    },
    {
        id: 11,
        name: 'Adidas Ultraboost Running Shoes',
        description: 'High-performance running shoes with responsive cushioning and adaptive knit upper.',
        price: 129.99,
        assignDate: '2023-01-11T13:00:00Z',
        approvedDate: '2023-01-15T14:45:00Z',
        image: 'images/adidas_ultraboost.jpg',
        category: 'Shoes'
    },
    {
        id: 12,
        name: 'Amazon Echo Dot (4th Gen)',
        description: 'Smart speaker with Alexa, compact design, and improved sound for voice-controlled entertainment.',
        price: 49.99,
        assignDate: '2023-01-12T14:15:00Z',
        approvedDate: '2023-01-16T11:00:00Z',
        image: 'amazon_echo_dot.jpg',
        category: 'Electronics'
    },
    {
        id: 13,
        name: 'Ray-Ban Classic Aviator Sunglasses',
        description: 'Iconic aviator sunglasses with timeless design, UV protection, and metal frame.',
        price: 149.99,
        assignDate: '2023-01-13T15:30:00Z',
        approvedDate: '2023-01-17T09:30:00Z',
        image: 'rayban_aviator_sunglasses.jpg',
        category: 'Apparel'
    },
    {
        id: 14,
        name: 'MacBook Air (M2, 2023)',
        description: 'Ultra-thin and lightweight laptop with Apple Silicon M2 chip, Retina display, and all-day battery life.',
        price: 1499.99,
        assignDate: '2023-01-14T10:00:00Z',
        approvedDate: '2023-01-18T13:45:00Z',
        image: 'macbook_air_m2.jpg',
        category: 'Electronics'
    },
    {
        id: 15,
        name: 'Fitbit Charge 5 Fitness Tracker',
        description: 'Advanced fitness tracker with built-in GPS, heart rate monitoring, and sleep tracking.',
        price: 179.99,
        assignDate: '2023-01-15T11:45:00Z',
        approvedDate: '2023-01-19T14:15:00Z',
        image: 'fitbit_charge_5.jpg',
        category: 'Electronics'
    },
];

// Manually created data arrays
const sellersData = [
    {
        id: 1,
        name: 'ElectroTech Store',
        location: 'City A, Country A',
        rating: 4.7,
        products: [1, 2, 3, 4, 5],
        image: 'images/shop/1.jpg'
    },
    {
        id: 2,
        name: 'FashionHub Outlet',
        location: 'City B, Country B',
        rating: 4.5,
        products: [6, 7, 8, 13],
        image: 'images/shop/2.jpg'
    },
    {
        id: 3,
        name: 'BookWorm Emporium',
        location: 'City C, Country C',
        rating: 4.8,
        products: [9],
        image: 'images/shop/3.jpg'
    },
    {
        id: 4,
        name: 'Outdoor Adventures Gear',
        location: 'City D, Country D',
        rating: 4.2,
        products: [10, 11],
        image: 'images/shop/4.jpg'
    },
    {
        id: 5,
        name: 'TechGizmo Haven',
        location: 'City E, Country E',
        rating: 4.9,
        products: [12, 14],
        image: 'images/shop/5.jpg'
    },
    {
        id: 6,
        name: 'FootComfort Zone',
        location: 'City F, Country F',
        rating: 4.6,
        products: [15, 19],
        image: 'images/shop/6.jpg'
    },
    {
        id: 7,
        name: 'Timepiece Trends',
        location: 'City G, Country G',
        rating: 4.4,
        products: [16],
        image: 'images/shop/7.jpg'
    },
    {
        id: 8,
        name: 'SecondChance Emporium',
        location: 'City H, Country H',
        rating: 4.3,
        products: [17],
        image: 'images/shop/8.jpg'
    },
    {
        id: 9,
        name: 'KitchenEssentials Mall',
        location: 'City I, Country I',
        rating: 4.7,
        products: [18],
        image: 'images/shop/9.jpg'
    },
    {
        id: 10,
        name: 'GamingGeeks Hub',
        location: 'City J, Country J',
        rating: 4.8,
        products: [20],
        image: 'images/shop/10.jpg'
    },
    {
        id: 11,
        name: 'SportsFanatic Store',
        location: 'City K, Country K',
        rating: 4.5,
        products: [21],
        image: 'seller_sportsfanatic.jpg'
    },
    {
        id: 12,
        name: 'PetParadise Boutique',
        location: 'City L, Country L',
        rating: 4.6,
        products: [22],
        image: 'seller_petparadise.jpg'
    },
    {
        id: 13,
        name: 'ArtisanCrafts Gallery',
        location: 'City M, Country M',
        rating: 4.9,
        products: [23],
        image: 'seller_artisancrafts.jpg'
    },
    {
        id: 14,
        name: 'HomeSweetHome Furnishings',
        location: 'City N, Country N',
        rating: 4.4,
        products: [24],
        image: 'seller_homesweethome.jpg'
    },
    {
        id: 15,
        name: 'MusicMania Instruments',
        location: 'City O, Country O',
        rating: 4.7,
        products: [25],
        image: 'seller_musicmania.jpg'
    },
];

// Output the sellersData array
console.log(sellersData);
// Manually created data arrays
const customersData = [
    {
        id: 1,
        name: 'Eva Johnson',
        address: '123 Tech Street, Gadget City',
        phone: '555-1234',
        email: 'eva.j@example.com',
        totalSpend: 500.25,
        image: 'images/persons/1.jpeg'
    },
    {
        id: 2,
        name: 'Alex Miller',
        address: '456 Fashion Avenue, Trendy Town',
        phone: '555-5678',
        email: 'alex.m@example.com',
        totalSpend: 320.50,
        image: 'images/persons/2.jpeg'
    },
    {
        id: 3,
        name: 'David Smith',
        address: '789 Book Lane, Literary Village',
        phone: '555-9012',
        email: 'david.s@example.com',
        totalSpend: 150.75,
        image: 'images/persons/3.jpeg'
    },
    {
        id: 4,
        name: 'Olivia White',
        address: '101 Outdoor Road, Adventure Hills',
        phone: '555-3456',
        email: 'olivia.w@example.com',
        totalSpend: 220.30,
        image: 'images/persons/4.jpeg'
    },
    {
        id: 5,
        name: 'Ryan Turner',
        address: '202 Tech Street, Gadget City',
        phone: '555-7890',
        email: 'ryan.t@example.com',
        totalSpend: 430.40,
        image: 'images/persons/5.jpeg'
    },
    {
        id: 6,
        name: 'Sophie Hall',
        address: '303 Fashion Avenue, Trendy Town',
        phone: '555-1235',
        email: 'sophie.h@example.com',
        totalSpend: 280.20,
        image: 'images/persons/6.jpeg'
    },
    {
        id: 7,
        name: 'Max Cooper',
        address: '404 Book Lane, Literary Village',
        phone: '555-5679',
        email: 'max.c@example.com',
        totalSpend: 180.90,
        image: 'customer_max.jpg'
    },
    {
        id: 8,
        name: 'Emily Harris',
        address: '505 Outdoor Road, Adventure Hills',
        phone: '555-9013',
        email: 'emily.h@example.com',
        totalSpend: 300.60,
        image: 'customer_emily.jpg'
    },
    {
        id: 9,
        name: 'Daniel Turner',
        address: '606 Tech Street, Gadget City',
        phone: '555-3457',
        email: 'daniel.t@example.com',
        totalSpend: 260.80,
        image: 'customer_daniel.jpg'
    },
    {
        id: 10,
        name: 'Ava Williams',
        address: '707 Fashion Avenue, Trendy Town',
        phone: '555-7891',
        email: 'ava.w@example.com',
        totalSpend: 350.45,
        image: 'customer_ava.jpg'
    },
];
// Manually created data arrays
// Manually created data arrays
const categoriesData = [
    { id: 1, name: 'Electronics', description: 'Explore the latest electronic gadgets and devices.', products: [1, 2], image: 'images/icons/1 (1).svg' },
    { id: 2, name: 'Apparel', description: 'Discover trendy and fashionable clothing styles.', products: [3, 4], image: 'images/icons/1 (2).svg' },
    { id: 3, name: 'Shoes', description: 'Step out in style with our collection of shoes for all occasions.', products: [5, 6], image: 'images/icons/1 (3).svg' },
    { id: 4, name: 'Cameras', description: 'Capture moments with high-quality cameras and photography equipment.', products: [7, 8], image: 'images/icons/1 (10).svg' },
    { id: 5, name: 'Secondhand Items', description: 'Find unique and affordable secondhand treasures.', products: [9, 10], image: 'images/icons/1 (5).svg' },
    { id: 6, name: 'Books', description: 'Immerse yourself in a world of literature with our diverse book collection.', products: [11, 12], image: 'images/icons/1 (6).svg' },
    { id: 7, name: 'Gadgets', description: 'Explore innovative and tech-savvy gadgets for everyday use.', products: [13, 14], image: 'images/icons/1 (7).svg' },
    { id: 8, name: 'Home Decor', description: 'Enhance your living space with stylish and unique home decor items.', products: [15, 16], image: 'images/icons/1 (8).svg' },
    { id: 9, name: 'Fitness', description: 'Achieve your fitness goals with our range of fitness equipment and accessories.', products: [17, 18], image: 'images/icons/1 (9).svg' },
    { id: 10, name: 'Kitchen Appliances', description: 'Upgrade your kitchen with our modern and efficient appliances.', products: [19, 20], image: 'images/icons/1 (10).svg' },
];

// Output the categoriesData array
console.log(categoriesData);

// Function to create and add a new entry
function addEntry(panel, data) {
    openAddEditPanel(); // Open the add/edit panel without pre-filled data
}

// Function to edit an existing entry
function editEntry(panel, data, itemId) {
    const selectedItem = data.find(item => item.id === itemId);
    openAddEditPanel(selectedItem); // Open the add/edit panel with pre-filled data
}

// Function to delete an existing entry
function deleteEntry(panel, data, itemId) {
    const updatedData = data.filter(item => item.id !== itemId);
    generateList(panel, updatedData);
}

// Function to create an entry based on a schema
function createEntry(schema, id) {
    const entry = { id };
    schema.forEach(field => {
        const { name, type, required } = field;
        if (required) {
            switch (type) {
                case 'int':
                    entry[name] = id;
                    break;
                case 'string':
                    entry[name] = `${name} ${id}`;
                    break;
                case 'number':
                    entry[name] = id * 10;
                    break;
                case 'date':
                    entry[name] = new Date().toISOString();
                    break;
                case 'array':
                    entry[name] = [];
                    break;
                default:
                    entry[name] = null;
            }
        }
    });
    return entry;
}

// Function to generate ten entries for a given schema
function generateEntries(schema) {
    const entries = [];
    for (let i = 1; i <= 10; i++) {
        entries.push(createEntry(schema, i));
    }
    return entries;
}

// Function to generate and populate the list
function generateList(panel, data) {
    panel.innerHTML = '';

    const addButton = createButton('Add', () => addEntry(panel, data));
    panel.appendChild(addButton);

    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const image = document.createElement('img');
        image.src = item.image || 'placeholder.jpg';
        image.alt = `${item.name} Image`;

        const details = document.createElement('div');
        details.classList.add('list-item-details');

        // Display name
        const title = document.createElement('h3');
        title.textContent = `${item.name}`;

        // Display additional details
        const idParagraph = document.createElement('p');
        idParagraph.textContent = `ID: ${item.id}`;
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${item.description || 'Not available'}`;
        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `Price: ${item.price || 'Not available'}`;
        const assignDateParagraph = document.createElement('p');
        assignDateParagraph.textContent = `Assign Date: ${item.assignDate || 'Not available'}`;
        const approvedDateParagraph = document.createElement('p');
        approvedDateParagraph.textContent = `Approved Date: ${item.approvedDate || 'Not available'}`;

        const actionButtons = document.createElement('div');
        const editButton = createButton('Edit', () => editEntry(panel, data, item.id));
        const deleteButton = createButton('Delete', () => deleteEntry(panel, data, item.id));

        actionButtons.appendChild(editButton);
        actionButtons.appendChild(deleteButton);

        details.appendChild(title);
        details.appendChild(idParagraph);
        details.appendChild(descriptionParagraph);
        details.appendChild(priceParagraph);
        details.appendChild(assignDateParagraph);
        details.appendChild(approvedDateParagraph);
        details.appendChild(actionButtons);

        listItem.appendChild(image);
        listItem.appendChild(details);

        panel.appendChild(listItem);
    });
}

// Helper function to create a button with a click handler
function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    button.addEventListener('click', onClick);
    return button;
}

// Function to show a specific panel
function showPanel(panelId) {
    const panels = document.querySelectorAll('.admin-panel');
    panels.forEach(panel => (panel.style.display = 'none'));

    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';

        switch (panelId) {
            case 'manageProducts':
                generateList(selectedPanel, productsData);
                break;
            case 'manageSellers':
                generateList(selectedPanel, sellersData);
                break;
            case 'manageCustomers':
                generateList(selectedPanel, customersData);
                break;
            case 'manageCategories':
                generateList(selectedPanel, categoriesData);
                break;
            default:
                // Handle unsupported panelId
                break;
        }
    }
}

// Function to sign out
function signOut() {
    window.location.href = 'index.html';
}

// Function to save an item (add or edit)
function saveItem() {
    const name = document.getElementById('itemName').value;
    const description = document.getElementById('itemDescription').value;
    const image = document.getElementById('itemImage').value;

    if (selectedItem) {
        // Editing an existing item
        selectedItem.name = name;
        selectedItem.description = description;
        selectedItem.image = image;
    } else {
        // Adding a new item
        const newItem = {
            id: categoriesData.length + 1,
            name: name,
            description: description,
            image: image
        };

        categoriesData.push(newItem);
    }

    generateList(document.getElementById('manageCategories'), categoriesData);
    closeAddEditPanel();
}


// Function to cancel the edit or add operation
function cancelEdit() {
    closeAddEditPanel();
}

// Function to open the add/edit panel
function openAddEditPanel(item = null) {
    selectedItem = item;
    const panel = document.getElementById('addEditPanel');
    panel.style.display = 'block';
    
    const addEditTitle = document.getElementById('addEditTitle');
    const itemForm = document.getElementById('itemForm');

    if (selectedItem) {
        // If editing, pre-fill the form with item details
        addEditTitle.textContent = 'Edit Item';
        document.getElementById('itemName').value = selectedItem.name;
        document.getElementById('itemDescription').value = selectedItem.description;
        document.getElementById('itemImage').value = selectedItem.image;
    } else {
        // If adding, clear the form
        addEditTitle.textContent = 'Add Item';
        document.getElementById('itemName').value = '';
        document.getElementById('itemDescription').value = '';
        document.getElementById('itemImage').value = '';
    }
}


// Function to close the add/edit panel
function closeAddEditPanel() {
    const panel = document.getElementById('addEditPanel');
    panel.style.display = 'none';
    selectedItem = null;
}
// Function to edit an existing entry
function addEntry(panel, data) {
    openAddEditPanel(); // Open the add/edit panel without pre-filled data
}

// Function to edit an existing entry
function editEntry(panel, data, itemId) {
    const selectedItem = data.find(item => item.id === itemId);
    openAddEditPanel(selectedItem); // Open the add/edit panel with pre-filled data
}

// Show default panel on page load
showPanel('manageCategories');