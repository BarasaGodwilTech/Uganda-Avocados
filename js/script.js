// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SMOOTH SCROLLING FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. ADD HOVER EFFECT TO SOCIAL LINKS
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 3. DYNAMIC COPYRIGHT YEAR
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} Uganda Avocados. All rights reserved.`;
    }

    // 4. OPTIONAL: REDIRECT COUNTDOWN (Commented by default)
    /*
    let seconds = 10;
    const redirectMessage = document.createElement('div');
    redirectMessage.className = 'redirect-message';
    redirectMessage.innerHTML = `You will be redirected to the conference site in ${seconds} seconds...`;
    document.querySelector('.content-wrapper').prepend(redirectMessage);
    
    const countdown = setInterval(() => {
        seconds--;
        if (seconds > 0) {
            redirectMessage.innerHTML = `You will be redirected to the conference site in ${seconds} seconds...`;
        } else {
            clearInterval(countdown);
            window.location.href = 'https://conference.ugandaavocados.org';
        }
    }, 1000);
    */

    // 5. LAUNCH CHECK - Show different message based on time to conference
    const conferenceDate = new Date('May 26, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const daysUntilConference = Math.ceil((conferenceDate - now) / (1000 * 60 * 60 * 24));
    
    if (daysUntilConference > 0 && daysUntilConference < 30) {
        // Less than 30 days to conference - show urgency
        const urgencyBadge = document.createElement('div');
        urgencyBadge.className = 'status-badge urgency';
        urgencyBadge.innerHTML = `
            <span class="pulse"></span>
            Conference starts in ${daysUntilConference} days!
        `;
        document.querySelector('.status-badge').after(urgencyBadge);
    }
});