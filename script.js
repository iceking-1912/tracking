function trackOrder(trackingNumber) {
    // Simulate an API call to get tracking details
    const trackingDetails = getTrackingDetailsFromAPI(trackingNumber);

    // Display the tracking details on the page
    const trackingResults = document.getElementById("trackingResults");
    trackingResults.innerHTML = `
        <h2>Tracking Details for Order #12345</h2>
        <p>Status: ${trackingDetails.status}</p>
        <p>Location: ${trackingDetails.location}</p>
        <p>Estimated Delivery Date: ${trackingDetails.estimatedDelivery}</p>
    `;
}

// Simulated API call to get tracking details
function getTrackingDetailsFromAPI(trackingNumber) {
    // In a real scenario, you would make an AJAX or fetch request to your server or a third-party API.
    // For simplicity, here we simulate the data.
    return {
        status: "In Transit",
        location: "Pune, India",
        estimatedDelivery: "January 24, 2024"
    };
}
