// ==========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// Vedant Acharya Portfolio
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const hash = this.getAttribute("href");

            // Skip empty/placeholder hashes like href="#" to avoid an
            // invalid selector error from document.querySelector("#").
            if (!hash || hash.length < 2) {

                return;

            }

            const target = document.querySelector(hash);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Auto-close the mobile navbar collapse after navigating.
                const navCollapse = document.getElementById("navbarNav");

                if (navCollapse && navCollapse.classList.contains("show")) {

                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse)
                        || new bootstrap.Collapse(navCollapse, { toggle: false });

                    bsCollapse.hide();

                }

            }

        });

    });

    // ==========================================
    // ACTIVE NAVBAR LINK
    // ==========================================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .nav-link");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);
    activeMenu();

    // ==========================================
    // HEADER EFFECT
    // ==========================================

    const navbar = document.querySelector(".custom-navbar");

    function navbarEffect() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(5,8,22,.95)";
            navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(5,8,22,.75)";
            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarEffect);
    navbarEffect();

    // ==========================================
    // TYPEWRITER
    // ==========================================

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const roles = [

            "AI / ML Engineer",
            "Python Developer",
            "GenAI Developer",
            "FastAPI Developer",
            "Machine Learning Enthusiast"

        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typing() {

            const current = roles[roleIndex];

            if (!deleting) {

                typingElement.textContent =
                    current.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === current.length) {

                    deleting = true;

                    setTimeout(typing, 1800);

                    return;

                }

            } else {

                typingElement.textContent =
                    current.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    roleIndex++;

                    if (roleIndex >= roles.length) {

                        roleIndex = 0;

                    }

                }

            }

            setTimeout(typing, deleting ? 50 : 100);

        }

        typing();

    }

    // ==========================================
    // REVEAL ANIMATION
    // ==========================================

    const revealItems = document.querySelectorAll(

        ".glass-card, .skill-card, .project-card, .education-card"

    );

    function reveal() {

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    // ==========================================
    // SCROLL TOP BUTTON
    // ==========================================

    const scrollBtn = document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                scrollBtn.style.display = "block";

            } else {

                scrollBtn.style.display = "none";

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    // ==========================================
    // HERO IMAGE EFFECT
    // ==========================================

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {

        document.addEventListener("mousemove", e => {

            const x = (window.innerWidth / 2 - e.clientX) / 70;
            const y = (window.innerHeight / 2 - e.clientY) / 70;

            heroImage.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }

    // ==========================================
    // RESUME BUTTON GLOW
    // ==========================================

    const resumeBtn = document.querySelector(".resume-btn");

    if (resumeBtn) {

        setInterval(() => {

            resumeBtn.style.boxShadow =
                "0 0 25px #8b5cf6";

            setTimeout(() => {

                resumeBtn.style.boxShadow = "none";

            }, 1200);

        }, 4500);

    }

    // ==========================================
    // PRELOADER
    // ==========================================

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        if (preloader) {

            preloader.classList.add("hide");

            setTimeout(() => preloader.remove(), 700);

        }

    });

    // Safety net: never let the preloader block the page for more
    // than 2.5s even if the load event is delayed by a slow asset.
    setTimeout(() => {

        if (preloader && !preloader.classList.contains("hide")) {

            preloader.classList.add("hide");

            setTimeout(() => preloader.remove(), 700);

        }

    }, 2500);

    // ==========================================
    // SCROLL PROGRESS BAR
    // ==========================================

    const scrollProgress = document.getElementById("scrollProgress");

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        scrollProgress.style.width = percent + "%";

    }

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    updateScrollProgress();

    // ==========================================
    // FOOTER YEAR
    // ==========================================

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    // ==========================================
    // CURSOR SPOTLIGHT GLOW
    // ==========================================

    const cursorGlow = document.getElementById("cursorGlow");

    if (cursorGlow && window.matchMedia("(hover: hover)").matches) {

        window.addEventListener("mousemove", e => {

            cursorGlow.style.transform =
                `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

        });

    }

    // ==========================================
    // 3D TILT ON GLASS CARDS
    // ==========================================

    if (window.matchMedia("(hover: hover)").matches) {

        const tiltCards = document.querySelectorAll(
            ".skill-card, .project-card, .education-card"
        );

        tiltCards.forEach(card => {

            card.addEventListener("mousemove", e => {

                const rect = card.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = ((y / rect.height) - 0.5) * -10;
                const rotateY = ((x / rect.width) - 0.5) * 10;

                card.style.transform =
                    `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = "";

            });

        });

    }

    // ==========================================
    // BUTTON RIPPLE EFFECT
    // ==========================================

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("click", function (e) {

            const rect = this.getBoundingClientRect();

            const ripple = document.createElement("span");

            const size = Math.max(rect.width, rect.height);

            ripple.className = "ripple";
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            this.appendChild(ripple);

            ripple.addEventListener("animationend", () => ripple.remove());

        });

    });

    // ==========================================
    // HERO PARTICLE CANVAS
    // ==========================================

    const particleCanvas = document.getElementById("particles-canvas");

    if (particleCanvas) {

        const ctx = particleCanvas.getContext("2d");
        const heroSection = particleCanvas.closest(".hero-section");

        let particles = [];

        function resizeCanvas() {

            particleCanvas.width = heroSection.offsetWidth;
            particleCanvas.height = heroSection.offsetHeight;

        }

        function createParticles() {

            const count = Math.floor(
                (particleCanvas.width * particleCanvas.height) / 18000
            );

            particles = Array.from({ length: count }, () => ({

                x: Math.random() * particleCanvas.width,
                y: Math.random() * particleCanvas.height,
                r: Math.random() * 2 + 0.6,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3

            }));

        }

        function drawParticles() {

            ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

            ctx.fillStyle = "rgba(196, 132, 252, 0.55)";

            particles.forEach(p => {

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

            });

            requestAnimationFrame(drawParticles);

        }

        resizeCanvas();
        createParticles();
        drawParticles();

        window.addEventListener("resize", () => {

            resizeCanvas();
            createParticles();

        });

    }

});