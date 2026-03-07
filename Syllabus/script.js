// Dashboard-specific JavaScript (adapted for syllabus)
const allBranches = [
    { name: "CIVIL", icon: "fas fa-hard-hat" },
    { name: "ECE", icon: "fas fa-microchip" },
    { name: "EEE", icon: "fas fa-bolt" },
    { name: "Electrical", icon: "fas fa-bolt" },
    { name: "CSE (All Specialization) 3d-Anim.Graphic.", icon: "fas fa-laptop-code" },
    { name: "Mechanical/ Mechatronics", icon: "fas fa-cogs" },
    { name: "Information Technology", icon: "fas fa-server" },
    { name: "Leather Technology", icon: "fas fa-tshirt" },
    { name: "Instrumentation Engineering", icon: "fas fa-tachometer-alt" },
    { name: "Chemical Engineering", icon: "fas fa-flask" },
    { name: "Mining Engineering", icon: "fas fa-mountain" },
    { name: "Food Processing & Preservation", icon: "fas fa-utensils" },
    { name: "Aeronautical Engineering", icon: "fas fa-plane" },
    { name: "Biomedical and Robotics", icon: "fas fa-robot" },
    { name: "Fire Tech. and Safety", icon: "fas fa-fire-extinguisher" },
    { name: "Civil engg. with computer app...", icon: "fas fa-desktop" }
];

// Sample syllabus data (renamed from papersData)
const syllabusData = {
    "CIVIL": {
        "1": [
                    { code: "BTECH-CIVIL-1-SEM", size: "2.4 MB", pdfUrl: "https://www.akubihar.com/papers/btech-1-sem-engineering-mathematics-1-100102-2024.pdf" },
        ],
        "2": [
            { code: "BTECH-CIVIL-2", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB", pdfUrl: "https://www.akubihar.com/papers/btech-2-sem-engineering-mathematics-2-100103-2024.pdf" },
        ],
        "3": [
            { code: "BTECH-CIVIL-3", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB", pdfUrl: "https://www.akubihar.com/papers/btech-3-sem-engineering-mathematics-3-100104-2024.pdf" },
        ],
        "4": [
            { code: "BTECH-CIVIL-4", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB", pdfUrl: "https://www.akubihar.com/papers/btech-4-sem-engineering-mathematics-4-100105-2024.pdf" },
        ],
        "5": [
            { code: "BTECH-CIVIL-5", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB", pdfUrl: "https://www.akubihar.com/papers/btech-5-sem-engineering-mathematics-5-100106-2024.pdf" },
        ],
        "6": [
            { code: "BTECH-CIVIL-6", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "7": [
            { code: "BTECH-CIVIL-7", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "8": [
            { code: "BTECH-CIVIL-8", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ]
    },
    "ECE": {
        "1": [
            { code: "BTECH-ECE-1", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "2": [
            { code: "BTECH-ECE-2", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "3": [
            { code: "BTECH-ECE-3", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "4": [
            { code: "BTECH-ECE-4", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "5": [
            { code: "BTECH-ECE-5", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "6": [
            { code: "BTECH-ECE-6", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "7": [
            { code: "BTECH-ECE-7", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "8": [
            { code: "BTECH-ECE-8", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ]
    },
    "EEE": {
        "1": [
            { code: "BTECH-EEE-1", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "2": [
            { code: "BTECH-EEE-2", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "3": [
            { code: "BTECH-EEE-3", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "4": [
            { code: "BTECH-EEE-4", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "5": [
            { code: "BTECH-EEE-5", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "6": [
            { code: "BTECH-EEE-6", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "7": [
            { code: "BTECH-EEE-7", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ],
        "8": [
            { code: "BTECH-EEE-8", topics: "Matrices, Calculus, Differential Equations", pages: 45, size: "2.4 MB" },
        ]
    },
    "CSE (All Specialization) 3d-Anim.Graphic.": {
        "1": [
            { code: "BTECH-CSE-1", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "2": [
            { code: "BTECH-CSE-2", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "3": [
            { code: "BTECH-CSE-3", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "4": [
            { code: "BTECH-CSE-4", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "5": [
            { code: "BTECH-CSE-5", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "6": [
            { code: "BTECH-CSE-6", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "7": [
            { code: "BTECH-CSE-7", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
        "8": [
            { code: "BTECH-CSE-8", topics: "Sorting, Searching, Dynamic Programming", pages: 45, size: "2.4 MB" }
        ],
    },
    "Mechanical/ Mechatronics": {
        "2": [
            { code: "BTECH-MECH-2-SEM-ENGINEERING-MECHANICS", subject: "Engineering Mechanics", topics: "Statics, Dynamics", pages: 40, size: "2.2 MB" }
        ],
        "5": [
            { code: "BTECH-MECH-5-SEM-THERMAL-ENGINEERING", subject: "Thermal Engineering", topics: "Thermodynamics, Heat Transfer", pages: 50, size: "2.7 MB" }
        ]
    }
};

let currentBranch = null;
let currentSemester = null;

// DOM Elements (updated IDs)
const branchGrid = document.getElementById('branchGrid');
const semesterSection = document.getElementById('semesterSection');
const syllabusSection = document.getElementById('syllabusSection');
const semesterGrid = document.getElementById('semesterGrid');
const syllabusList = document.getElementById('syllabusList');
const branchNameSpan = document.getElementById('branchName');
const syllabusSectionTitle = document.getElementById('syllabusSectionTitle');
const selectedBranchSpan = document.getElementById('selectedBranch');
const selectedSemesterSpan = document.getElementById('selectedSemester');
const quickAccessList = document.getElementById('quickAccess');
const searchInput = document.getElementById('searchInput');
const navDashboard = document.getElementById('navDashboard');
// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');

function generateBranchCards() {
    allBranches.forEach(branch => {
        const branchCard = document.createElement('div');
        branchCard.className = 'branch-card';
        branchCard.setAttribute('data-branch', branch.name);
        branchCard.innerHTML = `
                    <div class="branch-icon"><i class="${branch.icon}"></i></div>
                    <div class="branch-name">${branch.name}</div>
                `;
        branchCard.addEventListener('click', () => selectBranch(branch.name));
        branchGrid.appendChild(branchCard);
    });
}

function generateQuickAccess() {
    for (let i = 1; i <= 8; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" data-semester="${i}"><i class="fas fa-layer-group"></i> Semester ${i}</a>`;
        quickAccessList.appendChild(li);
    }
    quickAccessList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const semester = this.getAttribute('data-semester');
            if (!currentBranch) {
                showNotification("Please select a branch first");
                return;
            }
            selectSemester(semester);
            syllabusSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function selectBranch(branch) {
    if (window.innerWidth <= 1023) sidebar.classList.remove('active');
    document.querySelectorAll('.branch-card').forEach(c => c.classList.remove('active'));
    const selectedCard = document.querySelector(`.branch-card[data-branch="${branch}"]`);
    if (selectedCard) selectedCard.classList.add('active');
    currentBranch = branch;
    currentSemester = null;
    branchNameSpan.textContent = branch;
    generateSemesters(branch);
    semesterSection.classList.add('show');
    syllabusSection.classList.remove('show');
    semesterSection.scrollIntoView({ behavior: 'smooth' });
    showNotification(`Selected ${branch}. Now select a semester.`);
}

function generateSemesters(branch) {
    semesterGrid.innerHTML = '';
    const hasSyllabus = syllabusData.hasOwnProperty(branch);
    for (let i = 1; i <= 8; i++) {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card';
        semesterCard.setAttribute('data-semester', i);
        const hasSemesterSyllabus = hasSyllabus && syllabusData[branch].hasOwnProperty(i.toString());
        if (!hasSemesterSyllabus) {
            semesterCard.style.opacity = '0.6';
            semesterCard.style.cursor = 'not-allowed';
        }
        semesterCard.innerHTML = `
                    <div class="semester-number">${i}</div>
                    <div class="semester-text">SEMESTER</div>
                    ${!hasSemesterSyllabus ? '<div style="font-size:0.7rem; color:var(--gray);">No syllabus</div>' : ''}
                `;
        if (hasSemesterSyllabus) {
            semesterCard.addEventListener('click', () => selectSemester(i));
        } else {
            semesterCard.addEventListener('click', () => showNotification(`No syllabus available for ${branch} Semester ${i}`));
        }
        semesterGrid.appendChild(semesterCard);
    }
}

function selectSemester(semester) {
    if (window.innerWidth <= 1023) sidebar.classList.remove('active');
    document.querySelectorAll('.semester-card').forEach(c => c.classList.remove('active'));
    const selectedCard = document.querySelector(`.semester-card[data-semester="${semester}"]`);
    if (selectedCard) selectedCard.classList.add('active');
    currentSemester = semester;
    loadSyllabus(currentBranch, semester);
    selectedBranchSpan.textContent = currentBranch;
    selectedSemesterSpan.textContent = semester;
    syllabusSectionTitle.innerHTML = `Syllabus for <span id="selectedBranch">${currentBranch}</span> - Semester <span id="selectedSemester">${semester}</span>`;
    syllabusSection.classList.add('show');
    syllabusSection.scrollIntoView({ behavior: 'smooth' });
    showNotification(`Loaded syllabus for ${currentBranch} Semester ${semester}`);
}

function loadSyllabus(branch, semester) {
    syllabusList.innerHTML = '';
    if (!syllabusData[branch] || !syllabusData[branch][semester]) {
        syllabusList.innerHTML = `
                    <div style="text-align:center; padding:3rem; color:var(--gray);">
                        <i class="fas fa-book-open" style="font-size:3rem;"></i>
                        <h3>No Syllabus Available</h3>
                        <p>No syllabus found for ${branch} Semester ${semester}</p>
                    </div>
                `;
        return;
    }
    const syllabusItems = syllabusData[branch][semester];
    syllabusItems.forEach(item => {
        const syllabusItem = document.createElement('div');
        syllabusItem.className = 'paper-item'; // reuse same style
        syllabusItem.innerHTML = `
                    <div class="paper-info">
                        <div class="paper-code">${item.code}</div>
                        <div class="paper-details">
                            <span><i class="fas fa-book"></i> ${item.subject}</span>
                            <span><i class="fas fa-tags"></i> ${item.topics}</span>
                            <span><i class="fas fa-file"></i> ${item.pages} pages</span>
                            <span><i class="fas fa-hdd"></i> ${item.size}</span>
                        </div>
                    </div>
                    <div class="paper-actions">
                        <button class="btn btn-primary view-btn"><i class="fas fa-eye"></i> View</button>
                        <button class="btn btn-outline download-btn"><i class="fas fa-download"></i> Download</button>
                    </div>
                `;
        syllabusItem.querySelector('.view-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            showNotification(`Opening syllabus: ${item.code}`);
        });
        syllabusItem.querySelector('.download-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            showNotification(`Downloading syllabus: ${item.code}`);
        });
        syllabusList.appendChild(syllabusItem);
    });
}
mobileToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    const icon = this.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});
// Mobile menu toggle functionality (fix for phone)
if (mobileToggle) {
    mobileToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.classList.toggle('active');
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function (event) {
    if (window.innerWidth <= 1023) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = mobileToggle.contains(event.target);
        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    }
});

function resetToDashboard() {
    if (window.innerWidth <= 1023) sidebar.classList.remove('active');
    currentBranch = null;
    currentSemester = null;
    document.querySelectorAll('.branch-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.semester-card').forEach(c => c.classList.remove('active'));
    semesterSection.classList.remove('show');
    syllabusSection.classList.remove('show');
    searchInput.value = '';
    showNotification("Back to dashboard. Select a branch to view syllabus.");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.boxShadow = 'var(--shadow)';
    notification.style.zIndex = '1000';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.3s ease';
    notification.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function () {
    generateBranchCards();
    generateQuickAccess();
    // Dashboard-specific event listeners
    document.getElementById('navDashboard').addEventListener('click', function (e) {
        e.preventDefault();
        resetToDashboard();
    });
    document.querySelectorAll('#navSearch, #navPopular, #navRecent, #navDownloads, #navHoliday').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showNotification(`${this.textContent.trim()} section - Coming soon!`);
        });
    });
    showNotification("Welcome to BeuAdhyay! Select a branch to view syllabus.");
});
