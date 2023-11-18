        // Your existing scripts

        // Scroll-to-top button script
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            var scrollToTopButton = document.getElementById("scroll-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        }

        function scrollToTop() {
            // Smooth scrolling to the top
            document.documentElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }