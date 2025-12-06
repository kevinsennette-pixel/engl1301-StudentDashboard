// Navigation between sections
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSection = btn.dataset.section;
        
        // Remove active class from all buttons and sections
        navBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked button and target section
        btn.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
    });
});

// Toggle between before/after enrollment views
const toggleBtns = document.querySelectorAll('.toggle-btn');
const enrollmentViews = document.querySelectorAll('.enrollment-view');

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        
        // Remove active class from all toggle buttons
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide enrollment views
        enrollmentViews.forEach(view => {
            if (view.id === `${mode}-view`) {
                view.classList.add('active');
            } else {
                view.classList.remove('active');
            }
        });
    });
});

// Zone selection
const zoneBtns = document.querySelectorAll('.zone-btn');
const zoneDetails = document.getElementById('zone-details');
const zoneTitle = document.getElementById('zone-title');
const newSchool = document.getElementById('new-school');

const zoneData = {
    zone1: {
        title: 'Zone 1 Impact',
        school: 'Tomas HS'
    },
    zone2: {
        title: 'Zone 2 Impact',
        school: 'Foster HS (no change)'
    },
    zone3: {
        title: 'Zone 3 Impact',
        school: 'Tomas HS'
    }
};

zoneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const zone = btn.dataset.zone;
        
        // Remove active class from all zone buttons
        zoneBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update and show zone details
        const data = zoneData[zone];
        zoneTitle.textContent = data.title;
        newSchool.textContent = data.school;
        zoneDetails.style.display = 'block';
    });
});

// Expand/collapse attachments in Student Voices quote cards
const quoteCards = document.querySelectorAll('.quote-card');

quoteCards.forEach(card => {
    // Ensure keyboard focus
    card.addEventListener('click', (e) => {
        // don't toggle when clicking an actual link inside the attachments
        if (e.target.closest('a')) return;

        const isExpanded = card.classList.toggle('expanded');
        card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const attachments = card.querySelector('.attachments');
        if (attachments) attachments.setAttribute('aria-hidden', isExpanded ? 'false' : 'true');
    });

    // Allow Enter and Space to toggle
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
});