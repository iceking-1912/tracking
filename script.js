// script.js

function trackOrder(trackingNumber) {
    // Simulate tracking API call
    const trackingDetails = getTrackingDetails(trackingNumber);

    // Display tracking details
    displayTrackingResults(trackingDetails);
}

function getTrackingDetails(trackingNumber) {
    // Simulate tracking API response
    // In a real scenario, you would fetch the details from your server/database
    return {
        location: 'G13 Bvcoel pune',
        status: 'Out for Delivery',
        estimatedDelivery: 'January 24, 2024 by 9:30 AM IST',
    };
}

function displayTrackingResults(details) {
    const trackingResultsSection = document.getElementById('trackingResults');
    trackingResultsSection.innerHTML = `
        <h3>Tracking Details</h3>
        <p><strong>Status:</strong> ${details.status}</p>
        <p><strong>Location:</strong> ${details.location}</p>
        <p><strong>Estimated Delivery:</strong> ${details.estimatedDelivery}</p>
    `;
}
