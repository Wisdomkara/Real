const properties = {
    sale: [
        {
            id: 1,
            title: "Modern Villa with Ocean View",
            price: "$1,250,000",
            address: "123 Coastal Drive, Malibu, CA",
            beds: 4,
            baths: 3,
            sqft: 3200,
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 2,
            title: "Downtown Luxury Condo",
            price: "$750,000",
            address: "456 City Center, Los Angeles, CA",
            beds: 2,
            baths: 2,
            sqft: 1800,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            title: "Suburban Family Home",
            price: "$850,000",
            address: "789 Oak Avenue, Pasadena, CA",
            beds: 5,
            baths: 3,
            sqft: 2800,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 4,
            title: "Contemporary Townhouse",
            price: "$650,000",
            address: "321 Urban Lane, Beverly Hills, CA",
            beds: 3,
            baths: 2,
            sqft: 2200,
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
        },
        {
            id: 5,
            title: "Luxury Penthouse",
            price: "$2,100,000",
            address: "555 Sky Tower, Downtown LA, CA",
            beds: 4,
            baths: 4,
            sqft: 3800,
            image: "https://images.unsplash.com/photo-1540518614846-7eded102d7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1157&q=80"
        },
        {
            id: 6,
            title: "Garden Estate",
            price: "$1,800,000",
            address: "777 Garden Road, Santa Barbara, CA",
            beds: 6,
            baths: 5,
            sqft: 4500,
            image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ],
    rent: [
        {
            id: 7,
            title: "Luxury Apartment in Downtown",
            price: "$3,500/month",
            address: "101 Skyline Blvd, Los Angeles, CA",
            beds: 2,
            baths: 2,
            sqft: 1200,
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 8,
            title: "Beachfront Condo",
            price: "$4,200/month",
            address: "202 Ocean Drive, Santa Monica, CA",
            beds: 3,
            baths: 2,
            sqft: 1600,
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        },
        {
            id: 9,
            title: "Modern Studio in Arts District",
            price: "$2,800/month",
            address: "303 Gallery Street, Los Angeles, CA",
            beds: 1,
            baths: 1,
            sqft: 800,
            image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
        },
        {
            id: 10,
            title: "Family Townhouse",
            price: "$3,800/month",
            address: "404 Maple Street, Glendale, CA",
            beds: 3,
            baths: 2,
            sqft: 1800,
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 11,
            title: "Executive Loft",
            price: "$4,500/month",
            address: "505 Loft Avenue, Hollywood, CA",
            beds: 2,
            baths: 2,
            sqft: 1400,
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        },
        {
            id: 12,
            title: "Suburban Duplex",
            price: "$3,200/month",
            address: "606 Pine Road, Burbank, CA",
            beds: 4,
            baths: 3,
            sqft: 2200,
            image: "https://images.unsplash.com/photo-1575517111836-7e4f4e7b9b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sectionTitle = document.getElementById('section-title');
    const propertiesContainer = document.getElementById('properties-container');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const exploreBtn = document.getElementById('explore-btn');
    const contactForm = document.getElementById('contactForm');

    if (propertiesContainer) {
        displayProperties('sale');
    }

    if (navItems) {
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.querySelector('a') && item.querySelector('a').getAttribute('data-section')) {
                    e.preventDefault();
                    const section = item.querySelector('a').getAttribute('data-section');
                    
                    navItems.forEach(nav => nav.classList.remove('active'));
                    item.classList.add('active');
                    
                    displayProperties(section);
                    
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                }
            });
        });
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.listings').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    const footerLinks = document.querySelectorAll('.footer-links a[data-section]');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
                displayProperties(section);
                document.querySelector('.listings').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            } else {
                window.location.href = `index.html#${section}`;
            }
        });
    });
});

function displayProperties(section) {
    const sectionTitle = document.getElementById('section-title');
    const propertiesContainer = document.getElementById('properties-container');
    
    if (!sectionTitle || !propertiesContainer) return;

    sectionTitle.textContent = `Properties For ${section === 'sale' ? 'Sale' : 'Rent'}`;
    
    propertiesContainer.innerHTML = '';
    
    properties[section].forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="property-details">
                <div class="property-price">${property.price}</div>
                <h3>${property.title}</h3>
                <div class="property-address">${property.address}</div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i> ${property.beds} Beds
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i> ${property.baths} Baths
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i> ${property.sqft} sqft
                    </div>
                </div>
                <a href="contact.html" class="btn btn-outline">View Details</a>
            </div>
        `;
        propertiesContainer.appendChild(propertyCard);
    });
    
    setTimeout(() => {
        const cards = document.querySelectorAll('.property-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 150);
        });
    }, 100);
    
    observeCards();
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

function observeCards() {
    const cards = document.querySelectorAll('.property-card:not(.animate)');
    cards.forEach(card => {
        observer.observe(card);
    });
}

observeCards();