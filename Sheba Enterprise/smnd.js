const message = "You are being redirected to Facebook...";
const link = "https://www.facebook.com/MB.SMND/";

// Create and populate the container element
const container = document.createElement("div");
container.innerHTML = `
  <h1 class="redirect-message">${message}</h1>
  <p class="redirect-text">Please wait a moment, or click the link below to go directly to the Facebook page.</p>
  <a class="redirect-link" href="${link}">Visit Facebook Page</a>
`;

// Add the container to the body
document.body.appendChild(container);

// Schedule the redirect after a delay (optional)
setTimeout(() => {
  window.location.href = link;
}, 2000); // 2 seconds delay

// (Optional) Add styling for the elements
const styles = document.createElement("style");
styles.innerHTML = `
  .redirect-message {
    color: #ff0000;
    font-weight: bold;
  }
  .redirect-text {
    margin-bottom: 10px;
  }
  .redirect-link {
    color: #0000ff;
  }
`;
document.head.appendChild(styles);

// (Optional) Add custom logic based on user interaction (e.g., clicking the link)

// Note: You can adjust the content, styles, and behavior as needed to match your specific requirements.
