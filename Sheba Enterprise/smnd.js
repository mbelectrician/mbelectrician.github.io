const message = "You are being redirected to Facebook...";
const link = "https://www.facebook.com/MB.SMND/";

const container = document.createElement("div");
container.innerHTML = `<h1>${message}</h1><p>Please wait a moment, or click the link below to go directly to the Facebook page.</p><a href="${link}">Visit Facebook Page</a>`;

document.body.appendChild(container);

// Schedule the redirect after a delay (optional)
setTimeout(() => {
  window.location.href = link;
}, 2000); // 2 seconds delay
