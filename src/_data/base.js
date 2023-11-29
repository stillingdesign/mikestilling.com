module.exports = {
    url: process.env.URL || "http://localhost:8080",
    domain: "https://www.mikestilling.com",
    name: "Mike Stilling",

    twitterHandle: "@mikestilling",
    twitterLink: "https://twitter.com/mikestilling",
    githubLink: "https://github.com/acme",
    linkedinLink: "https://www.linkedin.com/company/acme/",

    salesLink: "/request-demo/",
    salesText: "Get a demo",

    signupLink: "/signup/",
    signupText: "Try for free",

    loginLink: "/login/",
    loginText: "Login",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};