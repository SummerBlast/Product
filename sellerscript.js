function showPanel(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll('.seller-panel');
    panels.forEach(panel => panel.style.display = 'none');

    // Show the selected panel
    const selectedPanel = document.getElementById(panelId);
    if (selectedPanel) {
        selectedPanel.style.display = 'block';
        // Dynamically generate and populate the list (you can use dummy data here)
        if (panelId === 'manageProducts') {
            generateProductList(selectedPanel, getProductDummyData());
        } else if (panelId === 'manageOrders') {
            generateOrderList(selectedPanel, getOrderDummyData());
        }
    }
}

function generateProductList(panel, data) {
    panel.innerHTML = '';

    const addButton = createButton('Add Product', () => {
        alert('Implement logic for adding products here');
    });
    panel.appendChild(addButton);

    data.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const image = document.createElement('img');
        image.src = product.image || 'placeholder.jpg';
        image.alt = `${product.name} Image`;

        const details = document.createElement('div');
        details.classList.add('list-item-details');

        const title = document.createElement('h3');
        title.textContent = `${product.name}`;

        const description = document.createElement('p');
        description.innerHTML = `ID: ${product.id}<br>
                                Assign Date: ${product.assignDate}<br>
                                Approved Date: ${product.approvedDate}<br>
                                Price: ${product.price}<br>
                                Category: ${product.category}`;

        const actionButtons = document.createElement('div');
        const editButton = createButton('Edit');
        const deleteButton = createButton('Delete');

        actionButtons.appendChild(editButton);
        actionButtons.appendChild(deleteButton);

        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(actionButtons);

        listItem.appendChild(image);
        listItem.appendChild(details);

        panel.appendChild(listItem);
    });
}

function generateOrderList(panel, data) {
    panel.innerHTML = '';

    data.forEach(order => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const details = document.createElement('div');
        details.classList.add('list-item-details');

        const title = document.createElement('h3');
        title.textContent = `Order ID: ${order.id}`;

        const description = document.createElement('p');
        description.innerHTML = `Product: ${order.product}<br>
                                Customer: ${order.customer}<br>
                                Order Date: ${order.orderDate}<br>
                                Status: ${order.status}<br>
                                Address: ${order.address}<br>
                                Phone Number: ${order.phoneNumber}<br>
                                Email: ${order.email}`;

        const deliverButton = createButton('Deliver Order', () => {
            alert(`Implement logic for delivering Order ID ${order.id} here`);
        });
        const trackOrderButton = createButton('Track Order', () => {
            alert(`Implement logic for tracking Order ID ${order.id} here`);
        });
        const viewDetailsButton = createButton('View Details', () => {
            alert(`Implement logic for viewing more details or managing Order ID ${order.id} here`);
        });

        details.appendChild(title);
        details.appendChild(description);
        details.appendChild(deliverButton);
        details.appendChild(viewDetailsButton);
        details.appendChild(trackOrderButton);

        listItem.appendChild(details);

        panel.appendChild(listItem);
    });
}

// Dummy data for testing purposes
function getProductDummyData() {
    return [
        
            { id: 1, name: 'Laptop 1', assignDate: '2023-01-01', approvedDate: '2023-01-05', price: 999.99, image: 'images/dell_xps_13.jpg', category: 'Electronics' },
            { id: 2, name: 'Smartphone 2', assignDate: '2023-02-01', approvedDate: '2023-02-05', price: 499.99, image: 'images/iphone_13_pro.jpg', category: 'Electronics' },
            { id: 3, name: 'Headphones 3', assignDate: '2023-03-01', approvedDate: '2023-03-05', price: 79.99, image: 'images/sony_wh1000xm4.jpg', category: 'Electronics' },
            { id: 4, name: 'Camera 4', assignDate: '2023-04-01', approvedDate: '2023-04-05', price: 599.99, image: 'images/canon_eos_r5.jpg', category: 'Electronics' },
            { id: 7, name: 'Book 7', assignDate: '2023-07-01', approvedDate: '2023-07-05', price: 14.99, image: 'images/harry_potter_book.jpg', category: 'Books' },
            { id: 5, name: 'Shirt 5', assignDate: '2023-05-01', approvedDate: '2023-05-05', price: 29.99, image: 'images/product5.jpg', category: 'Apparel' },
            { id: 6, name: 'Shoes 6', assignDate: '2023-06-01', approvedDate: '2023-06-05', price: 69.99, image: 'images/product6.jpg', category: 'Shoes' },
           
            { id: 8, name: 'Gadget 8', assignDate: '2023-08-01', approvedDate: '2023-08-05', price: 119.99, image: 'images/product8.jpg', category: 'Gadgets' },
            { id: 9, name: 'Home Decor 9', assignDate: '2023-09-01', approvedDate: '2023-09-05', price: 49.99, image: 'images/product9.jpg', category: 'Home Decor' },
            { id: 10, name: 'Fitness Equipment 10', assignDate: '2023-10-01', approvedDate: '2023-10-05', price: 199.99, image: 'images/product10.jpg', category: 'Fitness' }
            // Add more entries as needed
        
        
        // ... add more product items
    ];
}

function getOrderDummyData() {
    return [
        { id: 1, product: 'Laptop 1', customer: 'John Doe', orderDate: '2023-02-01', status: 'Pending', address: '123 Main St, Cityville, USA', phoneNumber: '+1 123-456-7890', email: 'john.doe@gmail.com' },
    { id: 2, product: 'Smartphone 2', customer: 'Jane Smith', orderDate: '2023-02-05', status: 'Shipped', address: '456 Oak St, Townsville, USA', phoneNumber: '+1 987-654-3210', email: 'jane.smith@gmail.com' },
    { id: 3, product: 'Headphones 3', customer: 'Michael Johnson', orderDate: '2023-02-10', status: 'Delivered', address: '789 Elm St, Villageton, USA', phoneNumber: '+1 555-123-4567', email: 'michael.j@gmail.com' },
    { id: 4, product: 'Camera 4', customer: 'Emily Davis', orderDate: '2023-03-01', status: 'Pending', address: '101 Pine St, Hamletville, USA', phoneNumber: '+1 333-987-6543', email: 'emily.d@gmail.com' },
    { id: 5, product: 'Shirt 5', customer: 'Christopher Brown', orderDate: '2023-03-05', status: 'Shipped', address: '202 Cedar St, Villageburg, USA', phoneNumber: '+1 777-555-1234', email: 'chris.brown@gmail.com' },
    { id: 6, product: 'Shoes 6', customer: 'Olivia Taylor', orderDate: '2023-03-10', status: 'Delivered', address: '303 Birch St, Citytown, USA', phoneNumber: '+1 111-222-3333', email: 'olivia.taylor@gmail.com' },
    { id: 7, product: 'Book 7', customer: 'Daniel Miller', orderDate: '2023-04-01', status: 'Pending', address: '404 Maple St, Hamletburg, USA', phoneNumber: '+1 999-111-2222', email: 'daniel.miller@gmail.com' },
    { id: 8, product: 'Gadget 8', customer: 'Sophia Wilson', orderDate: '2023-04-05', status: 'Shipped', address: '505 Walnut St, Townberg, USA', phoneNumber: '+1 222-333-4444', email: 'sophia.wilson@gmail.com' },
    { id: 9, product: 'Home Decor 9', customer: 'Matthew Anderson', orderDate: '2023-04-10', status: 'Delivered', address: '606 Spruce St, Villagetown, USA', phoneNumber: '+1 444-555-6666', email: 'matthew.a@gmail.com' },
    { id: 10, product: 'Fitness Equipment 10', customer: 'Isabella Garcia', orderDate: '2023-05-01', status: 'Pending', address: '707 Redwood St, Cityville, USA', phoneNumber: '+1 666-777-8888', email: 'isabella.g@gmail.com' }
    // Add more entries as needed
        // ... add more order items
    ];
}

// Helper function to create a button
function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('button');
    return button;
}

function signOut() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Show default panel on page load
showPanel('manageProducts');
