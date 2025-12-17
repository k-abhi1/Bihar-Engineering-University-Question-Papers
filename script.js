
        // All branches from your image
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

        // Sample data for papers (simplified for demonstration)
        const papersData = {
            "CIVIL": {
                "1": [
                    { code: "BTECH-CIVIL-1-SEM-ENGINEERING-MATHEMATICS-1-201101-2023", subject: "Mathematics", year: "2023", pages: 45, size: "2.4 MB" },
                    { code: "BTECH-CIVIL-1-SEM-ENGINEERING-PHYSICS-201102-2023", subject: "Physics", year: "2023", pages: 32, size: "1.8 MB" }
                ],
                "4": [
                    { code: "BTECH-CIVIL-4-SEM-STRUCTURAL-ANALYSIS-201401-2023", subject: "Structural Analysis", year: "2023", pages: 48, size: "2.6 MB" },
                    { code: "BTECH-CIVIL-4-SEM-FLUID-MECHANICS-201402-2023", subject: "Fluid Mechanics", year: "2023", pages: 52, size: "2.8 MB" }
                ],
                "7": [
                    { code: "BTECH-CIVIL-7-SEM-ENVIRONMENTAL-ENGINEERING-201701-2023", subject: "Environmental Engg", year: "2023", pages: 55, size: "3.0 MB" }
                ]
            },
            "CSE (All Specialization) 3d-Anim.Graphic.": {
                "3": [
                    { code: "BTECH-CSE-3-SEM-DATA-STRUCTURES-101301-2023", subject: "Data Structures", year: "2023", pages: 38, size: "2.1 MB" },
                    { code: "BTECH-CSE-3-SEM-DBMS-101302-2023", subject: "DBMS", year: "2023", pages: 42, size: "2.3 MB" }
                ],
                "4": [
                    { code: "BTECH-CSE-4-SEM-ALGORITHMS-101401-2023", subject: "Algorithms", year: "2023", pages: 45, size: "2.4 MB" }
                ]
            },
            "Mechanical/ Mechatronics": {
                "2": [
                    { code: "BTECH-MECH-2-SEM-ENGINEERING-MECHANICS-301201-2023", subject: "Engineering Mechanics", year: "2023", pages: 40, size: "2.2 MB" }
                ],
                "5": [
                    { code: "BTECH-MECH-5-SEM-THERMAL-ENGINEERING-301501-2023", subject: "Thermal Engineering", year: "2023", pages: 50, size: "2.7 MB" }
                ]
            }
        };

        // Current state
        let currentBranch = null;
        let currentSemester = null;

        // DOM Elements
        const mobileToggle = document.getElementById('mobileToggle');
        const sidebar = document.getElementById('sidebar');
        const branchGrid = document.getElementById('branchGrid');
        const semesterSection = document.getElementById('semesterSection');
        const papersSection = document.getElementById('papersSection');
        const semesterGrid = document.getElementById('semesterGrid');
        const papersList = document.getElementById('papersList');
        const selectedBranchTitle = document.getElementById('selectedBranchTitle');
        const branchNameSpan = document.getElementById('branchName');
        const papersSectionTitle = document.getElementById('papersSectionTitle');
        const selectedBranchSpan = document.getElementById('selectedBranch');
        const selectedSemesterSpan = document.getElementById('selectedSemester');
        const quickAccessList = document.getElementById('quickAccess');
        const searchInput = document.getElementById('searchInput');
        const navDashboard = document.getElementById('navDashboard');

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Generate branch cards
            generateBranchCards();
            
            // Generate quick access links in sidebar
            generateQuickAccess();
            
            // Set up event listeners
            setupEventListeners();
            
            // Show notification
            showNotification("Welcome to BEU ADDA! Select a branch to view question papers.");
            
            // Add device detection info for debugging
            detectDevice();
        });

        // Generate branch cards
        function generateBranchCards() {
            allBranches.forEach(branch => {
                const branchCard = document.createElement('div');
                branchCard.className = 'branch-card';
                branchCard.setAttribute('data-branch', branch.name);
                
                branchCard.innerHTML = `
                    <div class="branch-icon">
                        <i class="${branch.icon}"></i>
                    </div>
                    <div class="branch-name">${branch.name}</div>
                `;
                
                branchCard.addEventListener('click', function() {
                    selectBranch(branch.name);
                });
                
                branchGrid.appendChild(branchCard);
            });
        }

        // Generate quick access links in sidebar
        function generateQuickAccess() {
            for (let i = 1; i <= 8; i++) {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" data-semester="${i}"><i class="fas fa-layer-group"></i> Semester ${i}</a>`;
                quickAccessList.appendChild(li);
            }
            
            // Add event listeners to quick access links
            quickAccessList.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const semester = this.getAttribute('data-semester');
                    
                    // If no branch selected, show error
                    if (!currentBranch) {
                        showNotification("Please select a branch first");
                        return;
                    }
                    
                    // Select the semester
                    selectSemester(semester);
                    
                    // Scroll to papers section
                    papersSection.scrollIntoView({ behavior: 'smooth' });
                });
            });
        }

        // Set up event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            mobileToggle.addEventListener('click', function() {
                sidebar.classList.toggle('active');
                const icon = this.querySelector('i');
                if (sidebar.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });

            // Close sidebar when clicking outside on mobile
            document.addEventListener('click', function(event) {
                if (window.innerWidth <= 1023) {
                    const isClickInsideSidebar = sidebar.contains(event.target);
                    const isClickOnToggle = mobileToggle.contains(event.target);
                    
                    if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
                        sidebar.classList.remove('active');
                        mobileToggle.querySelector('i').className = 'fas fa-bars';
                    }
                }
            });

            // Dashboard navigation
            navDashboard.addEventListener('click', function(e) {
                e.preventDefault();
                resetToDashboard();
            });

            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const paperItems = document.querySelectorAll('.paper-item');
                
                paperItems.forEach(item => {
                    const paperCode = item.querySelector('.paper-code').textContent.toLowerCase();
                    if (paperCode.includes(searchTerm) || searchTerm === '') {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });

            // Other navigation links
            document.querySelectorAll('#navSearch, #navPopular, #navRecent, #navDownloads').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const section = this.id.replace('nav', '');
                    showNotification(`${section} section - Coming soon!`);
                });
            });

            // Handle window resize
            let resizeTimer;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    // Close sidebar on resize to mobile
                    if (window.innerWidth <= 1023) {
                        sidebar.classList.remove('active');
                        mobileToggle.querySelector('i').className = 'fas fa-bars';
                    }
                    detectDevice();
                }, 250);
            });
        }

        // Select branch function
        function selectBranch(branch) {
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 1023) {
                sidebar.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Remove active class from all branch cards
            document.querySelectorAll('.branch-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to selected branch
            const selectedCard = document.querySelector(`.branch-card[data-branch="${branch}"]`);
            if (selectedCard) {
                selectedCard.classList.add('active');
            }
            
            // Update current branch
            currentBranch = branch;
            currentSemester = null; // Reset semester
            
            // Update UI
            branchNameSpan.textContent = branch;
            selectedBranchTitle.innerHTML = `B.TECH <span id="branchName">${branch}</span>`;
            
            // Generate semesters for this branch
            generateSemesters(branch);
            
            // Show semester section
            semesterSection.classList.add('show');
            
            // Hide papers section
            papersSection.classList.remove('show');
            
            // Scroll to semester section
            semesterSection.scrollIntoView({ behavior: 'smooth' });
            
            // Show notification
            showNotification(`Selected ${branch}. Now select a semester.`);
        }

        // Generate semesters for selected branch
        function generateSemesters(branch) {
            semesterGrid.innerHTML = '';
            
            // Check if branch has papers
            const hasPapers = papersData.hasOwnProperty(branch);
            
            for (let i = 1; i <= 8; i++) {
                const semesterCard = document.createElement('div');
                semesterCard.className = 'semester-card';
                semesterCard.setAttribute('data-semester', i);
                
                // Check if this semester has papers
                const hasSemesterPapers = hasPapers && papersData[branch].hasOwnProperty(i.toString());
                const isDisabled = !hasSemesterPapers;
                
                if (isDisabled) {
                    semesterCard.style.opacity = '0.6';
                    semesterCard.style.cursor = 'not-allowed';
                    semesterCard.style.filter = 'grayscale(0.5)';
                }
                
                semesterCard.innerHTML = `
                    <div class="semester-number">${i}</div>
                    <div class="semester-text">SEMESTER</div>
                    ${!hasSemesterPapers ? '<div style="font-size: 0.7rem; color: var(--gray); margin-top: 0.25rem;">No papers</div>' : ''}
                `;
                
                // Add click event only if semester has papers
                if (hasSemesterPapers) {
                    semesterCard.addEventListener('click', function() {
                        const semester = this.getAttribute('data-semester');
                        selectSemester(semester);
                    });
                } else {
                    semesterCard.addEventListener('click', function() {
                        showNotification(`No papers available for ${branch} Semester ${i}`);
                    });
                }
                
                semesterGrid.appendChild(semesterCard);
            }
        }

        // Select semester function
        function selectSemester(semester) {
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 1023) {
                sidebar.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Remove active class from all semester cards
            document.querySelectorAll('.semester-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Add active class to selected semester
            const selectedCard = document.querySelector(`.semester-card[data-semester="${semester}"]`);
            if (selectedCard) {
                selectedCard.classList.add('active');
            }
            
            // Update current semester
            currentSemester = semester;
            
            // Load papers for this branch and semester
            loadPapers(currentBranch, semester);
            
            // Update UI
            selectedBranchSpan.textContent = currentBranch;
            selectedSemesterSpan.textContent = semester;
            papersSectionTitle.innerHTML = `Papers for <span id="selectedBranch">${currentBranch}</span> - Semester <span id="selectedSemester">${semester}</span>`;
            
            // Show papers section
            papersSection.classList.add('show');
            
            // Scroll to papers section
            papersSection.scrollIntoView({ behavior: 'smooth' });
            
            // Show notification
            showNotification(`Loaded papers for ${currentBranch} Semester ${semester}`);
        }

        // Load papers function
        function loadPapers(branch, semester) {
            papersList.innerHTML = '';
            
            // Check if papers exist for this branch and semester
            if (!papersData[branch] || !papersData[branch][semester]) {
                papersList.innerHTML = `
                    <div class="empty-state" style="text-align: center; padding: 3rem; color: var(--gray);">
                        <i class="fas fa-file-search" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <h3>No Papers Available</h3>
                        <p>No question papers found for ${branch} Semester ${semester}</p>
                        <p style="font-size: 0.875rem; margin-top: 0.5rem;">Check other semesters or branches</p>
                    </div>
                `;
                return;
            }
            
            // Get papers for this branch and semester
            const papers = papersData[branch][semester];
            
            // Display each paper
            papers.forEach(paper => {
                const paperItem = document.createElement('div');
                paperItem.className = 'paper-item';
                
                paperItem.innerHTML = `
                    <div class="paper-info">
                        <div class="paper-code">${paper.code}</div>
                        <div class="paper-details">
                            <span><i class="fas fa-book"></i> ${paper.subject}</span>
                            <span><i class="fas fa-calendar"></i> ${paper.year}</span>
                            <span><i class="fas fa-file-pdf"></i> PDF</span>
                            <span><i class="fas fa-file"></i> ${paper.pages} pages</span>
                            <span><i class="fas fa-hdd"></i> ${paper.size}</span>
                        </div>
                    </div>
                    <div class="paper-actions">
                        <button class="btn btn-primary view-btn">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="btn btn-outline download-btn">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                `;
                
                // Add event listeners to buttons
                const viewBtn = paperItem.querySelector('.view-btn');
                const downloadBtn = paperItem.querySelector('.download-btn');
                
                viewBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showNotification(`Opening PDF: ${paper.code}`);
                    // In real implementation, this would open the PDF viewer
                });
                
                downloadBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showNotification(`Downloading: ${paper.code}`);
                    // In real implementation, this would trigger download
                });
                
                // Add click event to entire paper item
                paperItem.addEventListener('click', function(e) {
                    if (!e.target.closest('.paper-actions')) {
                        showNotification(`Selected: ${paper.code}`);
                    }
                });
                
                papersList.appendChild(paperItem);
            });
        }

        // Reset to dashboard
        function resetToDashboard() {
            // Close sidebar on mobile
            if (window.innerWidth <= 1023) {
                sidebar.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fas fa-bars';
            }
            
            // Reset selections
            currentBranch = null;
            currentSemester = null;
            
            // Remove active classes
            document.querySelectorAll('.branch-card').forEach(card => {
                card.classList.remove('active');
            });
            
            document.querySelectorAll('.semester-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Hide sections
            semesterSection.classList.remove('show');
            papersSection.classList.remove('show');
            
            // Clear search
            searchInput.value = '';
            
            // Show notification
            showNotification("Back to dashboard. Select a branch to begin.");
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Notification function
        function showNotification(message) {
            // Create notification element
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
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateY(0)';
                notification.style.opacity = '1';
            }, 10);
            
            // Remove after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateY(100px)';
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Device detection function
        function detectDevice() {
            const width = window.innerWidth;
            let deviceType = '';
            
            if (width >= 1440) deviceType = 'Large Desktop';
            else if (width >= 1024) deviceType = 'Desktop';
            else if (width >= 768) deviceType = 'Tablet (Landscape)';
            else if (width >= 600) deviceType = 'Tablet (Portrait)';
            else if (width >= 480) deviceType = 'Smartphone (Landscape)';
            else if (width >= 320) deviceType = 'Smartphone (Portrait)';
            else deviceType = 'Very Small Device';
            
            console.log(`Device: ${deviceType}, Width: ${width}px`);
            
            // For debugging: show device type in console
            return deviceType;
        }
