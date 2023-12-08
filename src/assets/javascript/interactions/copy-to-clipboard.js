export const copyToClipboard = function (){
    const buttons = document.querySelectorAll('[data-copy-to-clipboard]');
    // Function
    function copyURL(el) {
        // copy the current URL to the clipboard
        const confirm = el.querySelector("[data-confirm]");
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        el.classList.add("clicked");
        setTimeout(function(){ el.classList.remove("clicked"); }, 3000);
    }
    // Add click event listener
    buttons.forEach(button => {
        button.addEventListener("click", function(event) { copyURL(this) });
    });
}