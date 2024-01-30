function redirectTo(userType) {
    switch (userType) {
        case 'customer':
            window.location.href = 'customer.html';
            break;
        case 'admin':
            window.location.href = 'admin.html';
            break;
        case 'seller':
            window.location.href = 'seller.html';
            break;
        default:
            alert('Invalid user type');
    }
}