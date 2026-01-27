// GAP Brinjal - Interactive Learning Portal
// Main Application Logic

let allLessons = [];
let completedLessons = [];
let farmRecords = [];

// Constants
const CATEGORIES = {
    "1": { bn: "সেসন ১: ভূমিকা ও GAP ধারণা", en: "Session 1: Introduction and GAP Concept" },
    "2": { bn: "সেসন ২: নিরাপদ খাদ্য ও পরিবেশ ব্যবস্থাপনা", en: "Session 2: Safe Food and Environmental Management" },
    "3": { bn: "সেসন ৩: শ্রমিক কল্যাণ ও পণ্যমান", en: "Session 3: Worker Welfare and Product Quality" },
    "4": { bn: "সেসন ৪: পরিকল্পনা ও ঝুঁকি ব্যবস্থাপনা", en: "Session 4: Planning and Risk Management" },
    "5": { bn: "সেসন ৫: ডকুমেন্টেশন ও সার্টিফিকেশন", en: "Session 5: Documentation and Certification" }
};

const TRANSLATIONS = {
    bn: {
        dashboard: "ড্যাশবোর্ড",
        modules: "মডিউল",
        plan: "চাষাবাদ পরিকল্পনা",
        logs: "ফার্ম লগ",
        assessment: "মূল্যায়ন",
        resources: "রিসোর্স",
        gallery: "গ্যালারি",
        welcome: "বেগুন চাষের উত্তম কৃষি চর্চা (GAP) পোর্টালে স্বাগতম",
        total_lessons: "মোট পাঠ",
        completed: "সম্পন্ন",
        records: "রেকর্ড",
        overall_progress: "সামগ্রিক অগ্রগতি",
        all: "সব",
        search_placeholder: "পাঠ খুঁজুন...",
        add_log: "ফার্ম লগ যুক্ত করুন",
        log_history: "লগ ইতিহাস",
        export: "এক্সপোর্ট",
        try_again: "আবার চেষ্টা করুন",
        start_quiz: "কুইজ শুরু করুন",
        mark_as_completed: "সম্পন্ন হিসেবে চিহ্নিত করুন",
        prev: "পূর্ববর্তী",
        next: "পরবর্তী",
        quiz_title: "GAP জ্ঞান যাচাই",
        quiz_description: "বেগুন চাষের উত্তম কৃষি চর্চা সম্পর্কে আপনার জ্ঞান যাচাই করুন।",
        hero_title: "বেগুন চাষের উত্তম কৃষি চর্চা (GAP)",
        hero_desc: "বেগুন উৎপাদনের প্রতিটি ধাপে বাংলাদেশ GAP প্রোটোকল অনুসরণ নিশ্চিত করুন এবং উন্নত মানসম্পন্ন উৎপাদন শিখুন।",
        quick_access: "দ্রুত অ্যাক্সেস",
        start_learning: "পড়া শুরু করুন",
        log_activity: "কার্যকলাপ লিখুন",
        date: "তারিখ",
        category: "বিভাগ",
        description: "বিবরণ",
        save_record: "রেকর্ড সংরক্ষণ করুন",
        official_docs: "অফিসিয়াল GAP ডকুমেন্টস",
        docs_desc: "বাংলাদেশের উত্তম কৃষি চর্চার অফিসিয়াল গাইডলাইন ও ডকুমেন্টস দেখুন এবং ডাউনলোড করুন।",
        search_hint: "পাঠ খুঁজুন (যেমন: পোকাসমূহ, Fertilizer, Harvesting)...",
        learn_title: "আপনি যা শিখবেন",
        guide_title: "ব্যবহারকারী নির্দেশিকা",
        learn_items: [
            "GAP প্রোটোকলের ভূমিকা ও প্রয়োজনীয়তা",
            "নিরাপদ খাদ্য ও পরিবেশ ব্যবস্থাপনা",
            "শ্রমিক কল্যাণ ও পণ্যমান নিশ্চিতকরণ",
            "পরিকল্পনা ও ঝুঁকি ব্যবস্থাপনা",
            "ডকুমেন্টেশন ও সার্টিফিকেশন প্রক্রিয়া"
        ],
        guide_items: [
            "মডিউল বিভাগ থেকে আপনার পছন্দের পাঠ নির্বাচন করুন",
            "পাঠ শেষে 'সম্পন্ন' হিসেবে চিহ্নিত করে অগ্রগতি যাচাই করুন",
            "ফার্ম লগ বিভাগে আপনার প্রাত্যহিক কার্যকলাপ লিখে রাখুন",
            "কুইজ বিভাগে অংশগ্রহণ করে নিজের জ্ঞান যাচাই করুন"
        ],
        dashboard_gallery_title: "ভিজ্যুয়াল গ্যালারি"
    },
    en: {
        dashboard: "Dashboard",
        modules: "Modules",
        plan: "Cultivation Plan",
        logs: "Farm Logs",
        assessment: "Assessment",
        resources: "Resources",
        gallery: "Visual Library",
        welcome: "Welcome to GAP Brinjal Training Portal!",
        total_lessons: "Total Lessons",
        completed: "Completed",
        records: "Farm Records",
        overall_progress: "Overall Progress",
        all: "All",
        search_placeholder: "Search lessons...",
        add_log: "Add Farm Log",
        log_history: "Log History",
        export: "Export Summary",
        try_again: "Try Again",
        start_quiz: "Start Quiz",
        mark_as_completed: "Mark as Completed",
        prev: "Previous",
        next: "Next",
        quiz_title: "GAP Knowledge Check",
        quiz_description: "Test your understanding of the Bangladesh Good Agricultural Practices for Brinjal.",
        hero_title: "GAP Brinjal Portal",
        hero_desc: "Master the Bangladesh GAP protocol for premium yield and export quality brinjal through interactive training.",
        quick_access: "Quick Access",
        start_learning: "Start Learning",
        log_activity: "Log Activity",
        date: "Date",
        category: "Category",
        description: "Description",
        save_record: "Save Record",
        official_docs: "Official GAP Documents",
        docs_desc: "Access and download official protocols and manuals for Good Agricultural Practices in Bangladesh.",
        search_hint: "Search lessons (e.g. Pest management, Fertilizer, Harvesting)...",
        learn_title: "What you will learn",
        guide_title: "User Guide",
        learn_items: [
            "Introduction and importance of GAP protocol",
            "Safe food and environmental management",
            "Worker welfare and product quality assurance",
            "Planning and risk management",
            "Documentation and certification process"
        ],
        guide_items: [
            "Select lessons from the Modules section",
            "Mark lessons as 'Completed' to track progress",
            "Record daily activities in the Farm Logs section",
            "Take quizzes to validate your GAP knowledge"
        ],
        dashboard_gallery_title: "Visual Gallery"
    }
};

// Debounce utility function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

let currentLanguage = localStorage.getItem('gap_lang') || 'bn';

// UI Elements
const moduleContainer = document.getElementById('module-container');
const categoryTabs = document.getElementById('category-tabs');
const searchInput = document.getElementById('lesson-search');
const modal = document.getElementById('lesson-modal');
const modalBody = document.getElementById('modal-body');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.getElementById('close-modal');
const markCompleteBtn = document.getElementById('mark-complete-btn');

let currentActiveCategory = 'All';
let currentSearchQuery = '';
let lessonPage = 0;
const itemsPerPage = 20;

const BN_TO_EN = { '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9', '০': '0' };

// Helper to clean and split text
function splitMultilingual(text) {
    if (!text) return { bn: "", en: "" };

    // More robust regex: matches "Bangla Part (English Part)" where English part contains latin chars
    // We look for parentheses that contain at least some English characters
    const match = text.match(/^(.*?)\s*\(\s*([A-Za-z0-9\s.,\-\/&]+)\s*\)\s*$/);
    if (match) {
        return {
            bn: match[1].trim(),
            en: match[2].trim()
        };
    }

    // Fallback: Look for the last set of parentheses with English characters
    const lastClose = text.lastIndexOf(')');
    const lastOpen = text.lastIndexOf('(', lastClose);

    if (lastOpen !== -1 && lastClose > lastOpen) {
        const before = text.substring(0, lastOpen).trim();
        const inside = text.substring(lastOpen + 1, lastClose).trim();
        const after = text.substring(lastClose + 1).trim();

        // If content inside looks like English
        if (/[A-Za-z]/.test(inside)) {
            return {
                bn: (before + " " + after).trim(),
                en: inside
            };
        }
    }

    return { bn: text.trim(), en: text.trim() };
}

// Load Data
async function init() {
    try {
        const rawLessons = typeof LESSONS_DATA !== 'undefined' ? LESSONS_DATA : [];

        allLessons = rawLessons
            .filter(l => l.body && l.body.trim().length > 3)
            .map((l, i) => {
                let titles = splitMultilingual(l.title);
                let bodies = splitMultilingual(l.body);

                // Handle cases where English spilled into body
                if (titles.bn === l.title && bodies.bn.startsWith('and ') && bodies.bn.includes(')')) {
                    const extraMatch = bodies.bn.match(/^(.*?)\)\s*(.*?)$/);
                    if (extraMatch) {
                        titles.en = (titles.en + " " + extraMatch[1]).trim();
                        bodies.bn = extraMatch[2].trim();
                        bodies.en = extraMatch[2].trim(); // Fallback for body
                    }
                }

                let titleParts = titles.bn.split('.');
                let mainCat = titleParts[0].trim();
                let subCat = titleParts[1] ? titleParts[1].trim() : '';

                let mappedCat;
                if (mainCat === '১' || mainCat === '২') {
                    mappedCat = '1'; // Session 1
                } else if (mainCat === '৩' && (subCat === '১' || subCat === '২')) {
                    mappedCat = '2'; // Session 2
                } else if (mainCat === '৩' && (subCat === '১২' || subCat === '১৩' || subCat === '১৪')) {
                    mappedCat = '3'; // Session 3
                } else if (mainCat === '৩' && (subCat >= '৩' && subCat <= '১১')) {
                    mappedCat = '4'; // Session 4
                } else if (mainCat === '৩' && (subCat >= '১৫' && subCat <= '২২') || mainCat === '৪' || mainCat === '৫' || mainCat === '৬') {
                    mappedCat = '5'; // Session 5
                } else {
                    mappedCat = '1'; // Default to session 1
                }

                return {
                    id: l.id || `lesson-${i}`,
                    title: titles,
                    body: bodies,
                    category: mappedCat
                };
            });

        renderTabs();
        renderModules();
        renderSchedule();
        renderLogs();
        renderQuiz();
        renderGallery();
        renderDashboardExtras();
        updateDashboardStats();
        updateProgressBar();
        renderFaqChips();
        translateUI();

        // Mobile Toggle Logic
        const mobileToggle = document.getElementById('mobile-toggle');
        const sidebar = document.querySelector('.sidebar');
        if (mobileToggle) {
            mobileToggle.onclick = () => sidebar.classList.toggle('active');
        }

        // Close sidebar on nav click (mobile)
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 992) sidebar.classList.remove('active');
            });
        });

        // Enable video autoplay and sound on user interaction
        const heroVideo = document.getElementById('hero-video');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const rewindBtn = document.getElementById('rewind-btn');
        const forwardBtn = document.getElementById('forward-btn');
        const volumeBtn = document.getElementById('volume-btn');
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const videoProgress = document.getElementById('video-progress');
        if (heroVideo && playPauseBtn) {
            // Function to update button icons
            const updatePlayPauseIcon = () => {
                const icon = playPauseBtn.querySelector('i');
                if (heroVideo.paused) {
                    icon.setAttribute('data-lucide', 'play');
                } else {
                    icon.setAttribute('data-lucide', 'pause');
                }
                lucide.createIcons();
            };

            const updateVolumeIcon = () => {
                const icon = volumeBtn.querySelector('i');
                if (heroVideo.muted || heroVideo.volume === 0) {
                    icon.setAttribute('data-lucide', 'volume-x');
                } else {
                    icon.setAttribute('data-lucide', 'volume-2');
                }
                lucide.createIcons();
            };

            const updateProgress = () => {
                if (heroVideo.duration) {
                    const percent = (heroVideo.currentTime / heroVideo.duration) * 100;
                    videoProgress.value = percent;
                }
            };

            // Delayed Autoplay (5s) or immediate on button click
            let autoplayTimeout = setTimeout(() => {
                console.log("Triggering delayed autoplay");
                heroVideo.muted = true; // Most browsers require mute for autoplay
                heroVideo.play().catch(e => console.log("Delayed autoplay failed:", e));
                updatePlayPauseIcon();
            }, 5000);

            // Handle clicking play button to cancel timeout
            playPauseBtn.addEventListener('click', () => {
                clearTimeout(autoplayTimeout);
            });

            updatePlayPauseIcon();
            updateVolumeIcon();
            updateProgress();

            // Play/pause button handler
            playPauseBtn.addEventListener('click', (e) => {
                console.log("Play/pause button clicked");
                e.stopPropagation();
                if (heroVideo.paused) {
                    heroVideo.play();
                } else {
                    heroVideo.pause();
                }
                updatePlayPauseIcon();
            });

            // Rewind button handler
            rewindBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                heroVideo.currentTime = Math.max(0, heroVideo.currentTime - 10);
            });

            // Forward button handler
            forwardBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                heroVideo.currentTime = Math.min(heroVideo.duration, heroVideo.currentTime + 10);
            });


            // Volume button handler
            volumeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                heroVideo.muted = !heroVideo.muted;
                updateVolumeIcon();
            });

            // Fullscreen button handler
            fullscreenBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (heroVideo.requestFullscreen) {
                    heroVideo.requestFullscreen();
                } else if (heroVideo.webkitRequestFullscreen) {
                    heroVideo.webkitRequestFullscreen();
                } else if (heroVideo.msRequestFullscreen) {
                    heroVideo.msRequestFullscreen();
                }
            });

            // Progress bar update
            heroVideo.addEventListener('timeupdate', updateProgress);
            heroVideo.addEventListener('loadedmetadata', updateProgress);

            // Progress bar seek
            videoProgress.addEventListener('input', (e) => {
                const seekTime = (e.target.value / 100) * heroVideo.duration;
                heroVideo.currentTime = seekTime;
            });

            // Update icon on video play/pause events
            heroVideo.addEventListener('play', updatePlayPauseIcon);
            heroVideo.addEventListener('pause', updatePlayPauseIcon);
            heroVideo.addEventListener('volumechange', updateVolumeIcon);
        }

        renderDashboardGallery();
        renderFlashCards();
        initAudioPlayer();
        showToast(TRANSLATIONS[currentLanguage].welcome);
        lucide.createIcons();
    } catch (err) {
        console.error("Failed to process lessons:", err);
    }
}

function translateUI() {
    console.time('translateUI');
    const t = TRANSLATIONS[currentLanguage];

    // Sidebar
    document.querySelector('[data-section="dashboard"] span').textContent = t.dashboard;
    document.querySelector('[data-section="training"] span').textContent = t.modules;
    document.querySelector('[data-section="schedule"] span').textContent = t.plan;
    document.querySelector('[data-section="records"] span').textContent = t.logs;
    document.querySelector('[data-section="quiz"] span').textContent = t.assessment;
    document.querySelector('[data-section="resources"] span').textContent = t.resources;
    document.querySelector('[data-section="gallery"] span').textContent = t.gallery;

    // Headings & Text Content
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const quickTitle = document.getElementById('quick-access-title');
    const startLearning = document.getElementById('start-learning-btn');
    const logActivity = document.getElementById('log-activity-btn');
    const addLogTitle = document.getElementById('add-log-title');
    const logHistoryTitle = document.getElementById('log-history-title');
    const labelDate = document.getElementById('label-date');
    const labelCat = document.getElementById('label-category');
    const labelDesc = document.getElementById('label-desc');
    const saveBtn = document.getElementById('save-record-btn');
    const quizTitle = document.getElementById('quiz-title');
    const quizDesc = document.getElementById('quiz-desc');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const resTitle = document.getElementById('resources-title');
    const resDesc = document.getElementById('resources-desc');
    const pageTitleEl = document.getElementById('page-title');

    if (heroTitle) heroTitle.textContent = t.hero_title;
    if (heroDesc) heroDesc.textContent = t.hero_desc;
    if (quickTitle) quickTitle.textContent = t.quick_access;
    if (startLearning) startLearning.textContent = t.start_learning;
    if (logActivity) logActivity.textContent = t.log_activity;
    if (addLogTitle) addLogTitle.textContent = t.add_log;
    if (logHistoryTitle) logHistoryTitle.textContent = t.log_history;
    if (labelDate) labelDate.textContent = t.date;
    if (labelCat) labelCat.textContent = t.category;
    if (labelDesc) labelDesc.textContent = t.description;
    if (saveBtn) saveBtn.textContent = t.save_record;
    if (quizTitle) quizTitle.textContent = t.quiz_title;
    if (quizDesc) quizDesc.textContent = t.quiz_description;
    if (startQuizBtn) startQuizBtn.textContent = t.start_quiz;
    if (resTitle) resTitle.textContent = t.official_docs;
    if (resDesc) resDesc.textContent = t.docs_desc;

    // Update Progress Sidebar
    const progLabel = document.querySelector('.progress-header span');
    if (progLabel) progLabel.textContent = t.overall_progress;

    // Stats labels
    const statLabels = document.querySelectorAll('.stat-card .stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.total_lessons;
    if (statLabels[1]) statLabels[1].textContent = t.completed;
    if (statLabels[2]) statLabels[2].textContent = t.records;

    // Search
    searchInput.placeholder = t.search_hint;

    // Buttons
    document.getElementById('lang-text').textContent = currentLanguage === 'bn' ? 'English' : 'বাংলা';

    // Page Title
    const activeNav = document.querySelector('.nav-item.active span');
    if (activeNav && pageTitleEl) pageTitleEl.textContent = activeNav.textContent;

    document.getElementById('learn-title').textContent = t.learn_title;
    document.getElementById('guide-title').textContent = t.guide_title;
    const dashGalleryTitle = document.getElementById('dashboard-gallery-title');
    if (dashGalleryTitle) dashGalleryTitle.textContent = t.dashboard_gallery_title;
    renderDashboardExtras();

    renderFaqChips();
    console.timeEnd('translateUI');
}

document.getElementById('lang-toggle').onclick = () => {
    console.time('lang-toggle-total');
    currentLanguage = currentLanguage === 'bn' ? 'en' : 'bn';
    localStorage.setItem('gap_lang', currentLanguage);
    translateUI();  // Immediate, as it updates visible UI
    renderTabs();
    // Defer heavy rendering to next tick
    const deferredCallback = () => {
        renderModules();
        updateDashboardStats();
        if (currentlyOpenLessonId) {
            openLesson(currentlyOpenLessonId);
        }
        console.timeEnd('lang-toggle-total');
    };
    if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(deferredCallback);
    } else {
        setTimeout(deferredCallback, 0);
    }
};

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i data-lucide="bell" style="width: 18px"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Render Category Tabs
function renderTabs() {
    const cats = ['All', ...Object.keys(CATEGORIES)];
    categoryTabs.innerHTML = cats.map(c => `
    <div class="tab ${currentActiveCategory === c ? 'active' : ''}" onclick="setCategory('${c}')">
      ${c === 'All' ? TRANSLATIONS[currentLanguage].all : CATEGORIES[c][currentLanguage]}
    </div>
  `).join('');
}

function setCategory(cat) {
    currentActiveCategory = cat;
    currentSearchQuery = '';
    searchInput.value = '';
    lessonPage = 0;
    renderTabs();
    renderModules();
}

// Search Logic
document.getElementById('search-btn').addEventListener('click', () => {
    currentSearchQuery = searchInput.value.toLowerCase();
    lessonPage = 0;
    if (currentSearchQuery) {
        activeFaqIndex = null;
        document.getElementById('faq-display').style.display = 'none';
        renderFaqChips();
    }
    renderModules();
});

// Render Modules
function renderModules() {
    console.time('renderModules');
    console.time('filter');
    let filtered = allLessons;

    if (currentActiveCategory !== 'All') {
        filtered = filtered.filter(l => l.category === currentActiveCategory);
    }

    if (currentSearchQuery) {
        filtered = filtered.filter(l =>
            l.title[currentLanguage].toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
            l.body[currentLanguage].toLowerCase().includes(currentSearchQuery.toLowerCase())
        );
    }
    console.timeEnd('filter');

    // Pagination
    console.time('pagination');
    const totalItems = filtered.length;
    const start = lessonPage * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedFiltered = filtered.slice(start, end);
    console.timeEnd('pagination');

    // Grouping Logic for Section Navigation
    const groups = {};
    paginatedFiltered.forEach(l => {
        const catObj = CATEGORIES[l.category];
        const catName = catObj ? catObj[currentLanguage] : `Section ${l.category}`;
        if (!groups[catName]) groups[catName] = [];
        groups[catName].push(l);
    });

    console.time('html-build');
    let html = '';
    for (const [section, lessons] of Object.entries(groups)) {
        html += `
            <div class="module-section">
                <div class="section-header">${section}</div>
                <div class="module-group-grid">
                    ${lessons.map(l => `
                        <div class="card module-card ${completedLessons.includes(l.id) ? 'completed' : ''}" onclick="openLesson('${l.id}')">
                          <div class="card-title"><i data-lucide="book" style="width:18px"></i> ${l.title[currentLanguage]}</div>
                          <p style="font-size: 0.85rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;" class="Bengali-text">
                            ${l.body[currentLanguage]}
                          </p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    console.timeEnd('html-build');

    // Pagination controls
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml = `
            <div style="display: flex; justify-content: center; align-items: center; margin-top: 1rem; gap: 0.5rem;">
                <button id="prev-page-btn" class="btn btn-secondary btn-sm" onclick="changePage(${lessonPage - 1})" ${lessonPage === 0 ? 'disabled' : ''}>Previous</button>
                <span>Page ${lessonPage + 1} of ${totalPages}</span>
                <button id="next-page-btn" class="btn btn-secondary btn-sm" onclick="changePage(${lessonPage + 1})" ${lessonPage >= totalPages - 1 ? 'disabled' : ''}>Next</button>
            </div>
        `;
    }

    console.time('innerHTML');
    moduleContainer.innerHTML = html + paginationHtml || `<p style="text-align:center; padding: 2rem; color: var(--text-muted);">${currentLanguage === 'bn' ? 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো পাঠ পাওয়া যায়নি।' : 'No lessons found matching your criteria.'}</p>`;
    console.timeEnd('innerHTML');
    // Defer SVG icon rendering to avoid blocking UI
    requestIdleCallback(() => {
        console.time('lucide-createIcons');
        lucide.createIcons();
        console.timeEnd('lucide-createIcons');
    }, { timeout: 50 });
    console.timeEnd('renderModules');
}

function changePage(page) {
    lessonPage = page;
    renderModules();
}

// Modal Logic
let currentlyOpenLessonId = null;

function openLesson(id) {
    console.time('openLesson');
    const lesson = allLessons.find(l => l.id === id);
    if (!lesson) return;

    // Stop TTS if moving to a different lesson
    window.speechSynthesis.cancel();

    currentlyOpenLessonId = id;
    modalTitle.textContent = lesson.title[currentLanguage];

    console.time('body-process');
    modalBody.innerHTML = lesson.body[currentLanguage].split('\n')
        .filter(p => p.trim())
        .map(p => `<p style="margin-bottom: 1rem;">${p.trim()}</p>`)
        .join('');
    console.timeEnd('body-process');

    modal.classList.add('active');

    // Update button states
    const t = TRANSLATIONS[currentLanguage];
    if (completedLessons.includes(id)) {
        markCompleteBtn.textContent = (currentLanguage === 'bn' ? 'সম্পন্ন' : 'Completed');
        markCompleteBtn.classList.remove('btn-primary');
        markCompleteBtn.classList.add('btn-secondary');
    } else {
        markCompleteBtn.textContent = t.mark_as_completed;
        markCompleteBtn.classList.add('btn-primary');
        markCompleteBtn.classList.remove('btn-secondary');
    }

    // Update Navigation Buttons Visibility/State
    const currentIndex = allLessons.findIndex(l => l.id === id);
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    const speakBtn = document.getElementById('speak-btn');

    const navContainer = document.querySelector('.modal-nav');
    if (navContainer) navContainer.style.display = 'flex';

    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        prevBtn.onclick = () => openLesson(allLessons[currentIndex - 1].id);
    }
    if (nextBtn) {
        nextBtn.disabled = currentIndex === allLessons.length - 1;
        nextBtn.onclick = () => openLesson(allLessons[currentIndex + 1].id);
    }

    // Read Aloud Logic (Proper Bangla Body Only)
    if (speakBtn) {
        speakBtn.onclick = () => {
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                speakBtn.innerHTML = '<i data-lucide="volume-2"></i>';
                lucide.createIcons();
                return;
            }

            // Using the current language body text for reading
            const bodyToRead = lesson.body[currentLanguage];
            const utterance = new SpeechSynthesisUtterance(bodyToRead);

            // Enhanced Voice Selection logic
            const voices = window.speechSynthesis.getVoices();

            if (currentLanguage === 'bn') {
                // Priority list for Bengali voices
                const bnVoice = voices.find(v => v.lang.startsWith('bn-') || v.lang === 'bn' || v.name.toLowerCase().includes('bengali') || v.name.toLowerCase().includes('bangla'));
                if (bnVoice) {
                    utterance.voice = bnVoice;
                    utterance.lang = bnVoice.lang;
                } else {
                    utterance.lang = 'bn-BD';
                }
            } else {
                // For English, find English voice
                const enVoice = voices.find(v => v.lang.startsWith('en-') || v.lang === 'en');
                if (enVoice) {
                    utterance.voice = enVoice;
                    utterance.lang = enVoice.lang;
                } else {
                    utterance.lang = 'en-US';
                }
            }

            utterance.rate = 0.85; // Slightly slower for better clarity
            utterance.pitch = 1.0;

            utterance.onstart = () => {
                speakBtn.innerHTML = '<i data-lucide="volume-x"></i>';
                lucide.createIcons();
            };

            utterance.onend = () => {
                speakBtn.innerHTML = '<i data-lucide="volume-2"></i>';
                lucide.createIcons();
            };

            utterance.onerror = (e) => {
                console.error("TTS Error:", e);
                speakBtn.innerHTML = '<i data-lucide="volume-2"></i>';
                lucide.createIcons();
            };

            window.speechSynthesis.speak(utterance);
        };
    }
    console.timeEnd('openLesson');
}

closeModal.onclick = () => {
    modal.classList.remove('active');
    window.speechSynthesis.cancel();
};
window.onclick = (e) => { if (e.target == modal) modal.classList.remove('active'); };

markCompleteBtn.onclick = async () => {
    if (!currentlyOpenLessonId) return;

    if (!currentUser) {
        showToast('Please login to save progress');
        return;
    }

    if (completedLessons.includes(currentlyOpenLessonId)) {
        completedLessons = completedLessons.filter(id => id !== currentlyOpenLessonId);
        await db.removeCompletedLesson(currentlyOpenLessonId);
    } else {
        completedLessons.push(currentlyOpenLessonId);
        await db.saveCompletedLesson(currentlyOpenLessonId);
    }

    updateProgressBar();
    updateDashboardStats();
    renderModules();
    modal.classList.remove('active');
};

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const pageTitle = document.getElementById('page-title');

function navigate(sectionId) {
    console.time('navigate-' + sectionId);
    sections.forEach(s => s.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    const targetNav = document.querySelector(`[data-section="${sectionId}"]`);

    targetSection.classList.add('active');
    targetNav.classList.add('active');
    pageTitle.textContent = targetNav.querySelector('span').textContent;

    // Toggle PDF viewing class for fixed controls
    if (sectionId === 'slideshow') {
        document.body.classList.add('pdf-viewing');
    } else {
        document.body.classList.remove('pdf-viewing');
    }

    // Call render functions for the section
    if (sectionId === 'training') {
        renderModules();
    } else if (sectionId === 'schedule') {
        renderSchedule();
    } else if (sectionId === 'records') {
        renderLogs();
        renderFaqChips();
    } else if (sectionId === 'quiz') {
        renderQuiz();
    } else if (sectionId === 'gallery') {
        renderGallery();
    } else if (sectionId === 'dashboard') {
        renderDashboardGallery();
    }
    console.timeEnd('navigate-' + sectionId);
}

navItems.forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.section));
});

// Stats & Progress
function updateDashboardStats() {
    document.getElementById('total-lessons-count').textContent = allLessons.length;
    document.getElementById('completed-lessons-count').textContent = completedLessons.length;
    document.getElementById('total-records-count').textContent = farmRecords.length;
}

function updateProgressBar() {
    if (allLessons.length === 0) return;
    const percent = Math.round((completedLessons.length / allLessons.length) * 100);
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-percent').textContent = percent + '%';
}

// Schedule (Enhanced from official GAP doc)
const scheduleData = [
    {
        day: { bn: "দিন -৭", en: "Day -7" },
        activity: { bn: "জমি তৈরি: শুকনো গোবর (১০০০ কেজি/হেক্টর) এবং বেস সার (TSP, জিপসাম, বোরিক অ্যাসিড) প্রয়োগ", en: "Land Prep: Applying cowdung (1000kg/ha) & base fertilizers (TSP, Gypsum, Boric Acid)" }
    },
    {
        day: { bn: "দিন ০", en: "Day 0" },
        activity: { bn: "সুস্থ চারা নির্বাচন (২৫-৩০ দিন বয়স, ৪-৫টি পাতা)", en: "Selection of Healthy Seedlings (25-30 days old, 4-5 leaves)" }
    },
    {
        day: { bn: "দিন ০", en: "Day 0" },
        activity: { bn: "চারা রোপণ: ১০০ সেমি x ৭০ সেমি দূরত্ব। বিকাল বেলা রোপণ করা উত্তম।", en: "Planting: 100cm x 70cm distance. Evening planting recommended." }
    },
    {
        day: { bn: "দিন ৩-৪", en: "Day 3-4" },
        activity: { bn: "হালকা সেচ এবং গ্যাপ ফিলিং (মরা চারার জায়গায় নতুন চারা)।", en: "Light irrigation and gap filling." }
    },
    {
        day: { bn: "দিন ২১", en: "Day 21" },
        activity: { bn: "প্রথম কিস্তির ইউরিয়া ও MoP সার উপরি প্রয়োগ এবং এবং বাঁশের খুঁটি দেওয়া।", en: "First Urea/MoP top dressing & Staking with bamboo sticks." }
    },
    {
        day: { bn: "দিন ৩০", en: "Day 30" },
        activity: { bn: "ডগা ও ফল ছিদ্রকারী পোকা দমনে সেক্স ফেরোমন ফাঁদ স্থাপন।", en: "Installing Pheromone Traps for Fruit & Shoot Borer." }
    },
    {
        day: { bn: "দিন ৪৫", en: "Day 45" },
        activity: { bn: "দ্বিতীয় কিস্তির সার প্রয়োগ এবং ব্যাকটেরিয়াল উইল্ট (X‡j cov) পর্যবেক্ষণ।", en: "Second Urea/MoP top dressing. Inspect for bacterial wilt." }
    },
    {
        day: { bn: "দিন ৬০", en: "Day 60" },
        activity: { bn: "জেসিড, সাদা মাছি ও জাব পোকা পর্যবেক্ষণ। প্রয়োজনে জৈবিক বালাইনাশক প্রয়োগ।", en: "Monitoring for Jassids, Whitefly & Aphids. Apply organic bio-pesticides if needed." }
    },
    {
        day: { bn: "দিন ৭৫+", en: "Day 75+" },
        activity: { bn: "ফসল সংগ্রহ শুরু। প্রতি ২-৩ দিন অন্তর ধারালো ছুরি ব্যবহার করে সংগ্রহ করুন।", en: "Harvesting begins. Every 2-3 days using sharp knives." }
    }
];

function renderSchedule() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = scheduleData.map(s => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div style="font-weight: 800; color: var(--secondary); font-size: 0.8rem;">${s.day[currentLanguage]}</div>
      <div style="font-weight: 600; margin-top: 0.2rem;">${s.activity[currentLanguage]}</div>
    </div>
  `).join('');
}

// Records
const recordForm = document.getElementById('record-form');
const logsList = document.getElementById('logs-list');

recordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentUser) {
        showToast('Please login to save records');
        return;
    }

    const newRecord = {
        date: document.getElementById('log-date').value,
        category: document.getElementById('log-category').value,
        desc: document.getElementById('log-desc').value
    };
    farmRecords.unshift({ id: Date.now(), ...newRecord });
    await db.saveFarmRecord(newRecord);
    renderLogs();
    updateDashboardStats();
    recordForm.reset();
});

function renderLogs() {
    if (farmRecords.length === 0) {
        logsList.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">${currentLanguage === 'bn' ? 'এখনো কোনো লগ রেকর্ড করা হয়নি।' : 'No logs recorded yet.'}</p>`;
        return;
    }
    logsList.innerHTML = farmRecords.map(r => `
    <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 12px; margin-bottom: 0.75rem; border-left: 3px solid var(--primary);">
      <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem;">
        <span style="color: var(--text-muted)">${r.date}</span>
        <span style="font-weight: 700; color: var(--secondary)">${r.category}</span>
      </div>
      <p style="font-size: 0.9rem;">${r.desc}</p>
    </div>
  `).join('');
}

document.getElementById('export-btn').onclick = () => {
    const dataStr = JSON.stringify(farmRecords, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'farm_records_brinjal.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
};

// FAQ Data
const FAQ_DATA = [
    {
        q: { bn: "মাটির পিএইচ (pH)", en: "Soil pH" },
        full_q: { bn: "বেগুন চাষের জন্য মাটির পিএইচ (pH) কত হওয়া উচিত?", en: "What is the optimum soil pH for brinjal cultivation?" },
        a: { bn: "বেগুন চাষের জন্য মাটির পিএইচ ৬.০ - ৭.০ হওয়া উচিত। মাটির পিএইচ ৬-এর নিচে হলে গাছ প্রয়োজনীয় পুষ্টি পায় না।", en: "The optimum soil pH for brinjal is 6.0 - 7.0. If pH is below 6, plants cannot absorb nutrients effectively." }
    },
    {
        q: { bn: "গোবর সার", en: "Cowdung" },
        full_q: { bn: "হেক্টর প্রতি কী পরিমাণ গোবর সার প্রয়োগ করতে হয়?", en: "How much cowdung is required per hectare?" },
        a: { bn: "হেক্টর প্রতি অন্তত ১০০০ কেজি শুকনো গোবর সার অথবা ২০০০ কেজি ভার্মিকম্পোস্ট জমি তৈরির সময় প্রয়োগ করা উচিত।", en: "At least 1000 kg dry cowdung or 2000 kg vermicompost should be applied per hectare during land preparation." }
    },
    {
        q: { bn: "রোপণের দূরত্ব", en: "Spacing" },
        full_q: { bn: "চারা রোপণের সঠিক দূরত্ব কত?", en: "What is the correct spacing for planting?" },
        a: { bn: "সারি থেকে সারির দূরত্ব ১০০ সেমি এবং চারা থেকে চারার দূরত্ব ৭০ সেমি রাখা উত্তম। এটি পোকা দমনেও সাহায্য করে।", en: "Ideal spacing is 100 cm row-to-row and 70 cm plant-to-plant. This also helps in pest management." }
    },
    {
        q: { bn: "ফল ছিদ্রকারী পোকা", en: "Fruit Borer" },
        full_q: { bn: "বেগুনের ডগা ও ফল ছিদ্রকারী পোকা দমনে প্রধান উপায় কী?", en: "What is the primary way to control Fruit & Shoot Borer?" },
        a: { bn: "সেক্স ফেরোমন ফাঁদ ব্যবহার করা সবচেয়ে কার্যকরী উপায়। আক্রান্ত ডগা ও ফল সংগ্রহ করে ধ্বংস (মাটির নিচে পুঁতে রাখা) করতে হবে।", en: "Using Sex Pheromone traps is the most effective way. Also, collect and bury infected shoots and fruits deep underground." }
    },
    {
        q: { bn: "চারা রোপণ সময়", en: "Planting Time" },
        full_q: { bn: "চারা রোপণের জন্য দিনের কোন সময়টি সবচেয়ে ভালো?", en: "What is the best time of day for planting?" },
        a: { bn: "বিকাল বেলা চারা রোপণ করা সবচেয়ে ভালো। এতে চারার ট্রান্সপ্লান্টিং শক কম হয় এবং চারা সহজে টিকে যায়।", en: "Evening is the best time for planting. It minimizes transplanting shock and ensures higher seedling survival rate." }
    },
    {
        q: { bn: "বাক্টেরিয়ার উইল্ট", en: "Bacterial Wilt" },
        full_q: { bn: "বেগুন গাছ পাতা সবুজ থাকতেই হঠাৎ ঝিমিয়ে পড়লে কী করতে হবে?", en: "What to do if brinjal plants suddenly wilt while leaves are still green?" },
        a: { bn: "এটি ব্যাকটেরিয়াল উইল্ট (X‡j cov) হতে পারে। আক্রান্ত গাছ শিকড়সহ উপড়ে পুড়িয়ে ফেলুন এবং সেখানে ব্লিচিং পাউডার প্রয়োগ করুন।", en: "This might be Bacterial Wilt. Uproot and burn the infected plant, and apply bleaching powder to the infected spot." }
    }
];

let activeFaqIndex = null;

function renderFaqChips() {
    const container = document.getElementById('quick-faq');
    if (!container) return;

    container.innerHTML = FAQ_DATA.map((faq, i) => `
        <div class="faq-chip ${activeFaqIndex === i ? 'active' : ''}" onclick="toggleFaq(${i})">
            ${faq.q[currentLanguage]}
        </div>
    `).join('');
}

function toggleFaq(index) {
    const display = document.getElementById('faq-display');
    const qEl = document.getElementById('faq-item-q');
    const aEl = document.getElementById('faq-item-a');

    if (activeFaqIndex === index) {
        activeFaqIndex = null;
        display.style.display = 'none';
    } else {
        activeFaqIndex = index;
        const faq = FAQ_DATA[index];
        qEl.textContent = faq.full_q[currentLanguage];
        aEl.textContent = faq.a[currentLanguage];
        display.style.display = 'block';
    }
    renderFaqChips();
}

function copyFaq() {
    if (activeFaqIndex === null) return;
    const faq = FAQ_DATA[activeFaqIndex];
    const label = currentLanguage === 'bn' ? 'উত্তর' : 'Answer';
    const textToCopy = `${faq.full_q[currentLanguage]}\n\n${label}: ${faq.a[currentLanguage]}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(currentLanguage === 'bn' ? 'উত্তর কপি করা হয়েছে!' : 'Answer copied to clipboard!');
    });
}

// Quiz Logic
const quizQuestions = [
    {
        q: { bn: "বেগুন চাষের জন্য মাটির সর্বোত্তম পিএইচ (pH) কত হওয়া উচিত?", en: "What is the optimum soil pH for brinjal cultivation?" },
        options: {
            bn: ["৪-৫", "৫-৬", "৬-৭", "৮-৯"],
            en: ["4-5", "5-6", "6-7", "8-9"]
        },
        correct: 2
    },
    {
        q: { bn: "বেগুন চারা রোপণের সঠিক দূরত্ব কত?", en: "What is the correct spacing for brinjal planting?" },
        options: {
            bn: ["৫০x৫০ সেমি", "১০০x৭০ সেমি", "৬০x৪০ সেমি", "৩০x৩০ সেমি"],
            en: ["50x50 cm", "100x70 cm", "60x40 cm", "30x30 cm"]
        },
        correct: 1
    },
    {
        q: { bn: "বেগুনের ডগা ও ফল ছিদ্রকারী পোকা দমনে কোনটি কার্যকর?", en: "Which one is effective in controlling Brinjal Fruit & Shoot Borer?" },
        options: {
            bn: ["ইউরিয়া সার", "সেক্স ফেরোমন ফাঁদ", "বেশি পানি সেচ", "মালচ পেপার"],
            en: ["Urea Fertilizer", "Sex Pheromone Trap", "Excess Irrigation", "Mulch Paper"]
        },
        correct: 1
    },
    {
        q: { bn: "চারা রোপণের কত দিন আগে গর্তে গোবর সার প্রয়োগ করা উচিত?", en: "How many days before planting should cowdung be applied?" },
        options: {
            bn: ["১ দিন", "৩ দিন", "৭ দিন", "১৫ দিন"],
            en: ["1 day", "3 days", "7 days", "15 days"]
        },
        correct: 2
    },
    {
        q: { bn: "বীজতলার চারা সাদা ঘন নেট দিয়ে ঢেকে রাখার প্রধান উদ্দেশ্য কি?", en: "What is the main purpose of covering seedlings with white net?" },
        options: {
            bn: ["রোদ থেকে সুরক্ষা", "বৃষ্টি থেকে সুরক্ষা", "পোকামাকড় প্রবেশ রোধ", "সৌন্দর্য বর্ধন"],
            en: ["Protection from sun", "Protection from rain", "Insects prevention", "Aesthetic value"]
        },
        correct: 2
    }
];

let currentQuestionIndex = 0;
let quizScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    document.getElementById('quiz-start-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'none';
    document.getElementById('quiz-question-view').style.display = 'block';
    document.getElementById('next-question-btn').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const t = TRANSLATIONS[currentLanguage];
    document.getElementById('quiz-progress').textContent = currentLanguage === 'bn' ? `প্রশ্ন ${currentQuestionIndex + 1} (${quizQuestions.length}-এর মধ্যে)` : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    document.getElementById('question-text').textContent = question.q[currentLanguage];

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = question.options[currentLanguage].map((opt, i) => `
        <button class="option-btn" onclick="checkAnswer(${i})">${opt}</button>
    `).join('');

    document.getElementById('next-question-btn').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === question.correct) {
        buttons[selectedIndex].classList.add('correct');
        quizScore++;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }

    const nextBtn = document.getElementById('next-question-btn');
    if (currentQuestionIndex + 1 < quizQuestions.length) {
        nextBtn.textContent = 'Next Question';
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            showQuestion();
            nextBtn.style.display = 'none';
        };
    } else {
        nextBtn.textContent = 'Finish Quiz';
        nextBtn.onclick = () => {
            showResult();
            nextBtn.style.display = 'none';
        };
    }
    nextBtn.style.display = 'block';
}

function showResult() {
    document.getElementById('quiz-question-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'block';
    document.getElementById('result-score').textContent = `${quizScore}/${quizQuestions.length}`;

    let message = "";
    if (currentLanguage === 'bn') {
        if (quizScore === quizQuestions.length) message = "চমৎকার! আপনি একজন GAP মাস্টার।";
        else if (quizScore >= quizQuestions.length / 2) message = "ভালো কাজ করেছেন! শিখতে থাকুন।";
        else message = "আপনার স্কোর উন্নত করতে মডিউলগুলো আরও অধ্যয়ণ করুন।";
    } else {
        if (quizScore === quizQuestions.length) message = "Excellent! You are a GAP Master.";
        else if (quizScore >= quizQuestions.length / 2) message = "Good job! Keep learning.";
        else message = "Keep studying the modules to improve your score.";
    }

    document.getElementById('result-text').textContent = message;
}

function resetQuiz() {
    document.getElementById('quiz-result-view').style.display = 'none';
    document.getElementById('quiz-start-view').style.display = 'block';
}

function renderQuiz() {
    // Already handled by startQuiz, but placeholder for any init logic
}

function renderDashboardExtras() {
    const t = TRANSLATIONS[currentLanguage];
    const learnContainer = document.getElementById('learn-container');
    const guideContainer = document.getElementById('guide-container');

    if (learnContainer) {
        learnContainer.innerHTML = t.learn_items.map((item, i) => `
            <div class="guide-step">
                <div class="step-num">${i + 1}</div>
                <p>${item}</p>
            </div>
        `).join('');
    }

    if (guideContainer) {
        guideContainer.innerHTML = t.guide_items.map((item, i) => `
            <div class="guide-step">
                <div class="step-num">${String.fromCharCode(65 + i)}</div>
                <p>${item}</p>
            </div>
        `).join('');
    }
}

const GALLERY_IMAGES = [
    "Brinjal_৯৭৮-৯৮৪-৩৬-০০৪১-৭_1.png",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 1 Col 1_37.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 1 Col 2_38.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 2 Col 1_39.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 2 Col 2_40.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 2 Col 3_41.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 3 Col 1_42.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 3 Col 2_43.jpeg",
    "Brinjal_Brinjal_ (ঘ)(ঙ)(চ) - Row 3 Col 3_44.jpeg",
    "Brinjal_Brinjal_ ৯৭৮-৯৮৪-৩৬-০০৪১-৭_1.png",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _10.jpeg",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _11.jpeg",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _12.jpeg",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _13.jpeg",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _14.jpeg",
    "Brinjal_Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি _15.jpeg",
    "Brinjal_Brinjal_ চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ_34.jpeg",
    "Brinjal_Brinjal_ চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ_35.jpeg",
    "Brinjal_Brinjal_ চিত্র_ কাটালে পোকা - Row 1 Col 1_22.jpeg",
    "Brinjal_Brinjal_ চিত্র_ কাটালে পোকা - Row 1 Col 2_23.jpeg",
    "Brinjal_Brinjal_ চিত্র_ কাটালে পোকা - Row 2 Col 1_24.jpeg",
    "Brinjal_Brinjal_ চিত্র_ ক্ষুদ্র পাতা_গুচ্ছ পাতা_তুলসি লাগা_36.jpeg",
    "Brinjal_Brinjal_ চিত্র_ ফোমোপসিস ব্লাইট_ফল ওকাÐ পঁচা রোগ_33.jpeg",
    "Brinjal_Brinjal_ চিত্র_ বেগুনের গোড়া পচা রোগের লক্ষণ_32.jpeg",
    "Brinjal_Brinjal_ চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ - Bot_30.jpeg",
    "Brinjal_Brinjal_ চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ - Top_29.jpeg",
    "Brinjal_Brinjal_ চিত্র_ শিকড় গিট রোগের লক্ষণ_31.jpeg",
    "Brinjal_Brinjal_ চিত্র-৪_ নমুনাসহ পলিথিন ব্যাগ_45.png",
    "Brinjal_Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো_25.jpeg",
    "Brinjal_Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো_26.jpeg",
    "Brinjal_Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো_27.jpeg",
    "Brinjal_Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো_28.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_16.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_17.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_18.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_19.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_20.jpeg",
    "Brinjal_Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (_21.jpeg",
    "Brinjal_red mite_25.jpeg",
    "Brinjal_red mitr_26.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_10.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_11.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_12.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_13.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_14.jpeg",
    "Brinjal_ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি ফলে ডিম প_15.jpeg",
    "Brinjal_চিত্র_ ক্ষুদ্র পাতা_গুচ্ছ পাতা_তুলসি লাগা রোগের ল_36.jpeg",
    "Brinjal_চিত্র_ ফোমোপসিস ব্লাইট_ফল ওকাÐ পঁচা রোগের লক্ষণ_33.jpeg",
    "Brinjal_চিত্র_ বেগুনের গোড়া পচা রোগের লক্ষণ_32.jpeg",
    "Brinjal_চিত্র_ শিকড় গিট রোগের লক্ষণ_31.jpeg",
    "Brinjal_চিত্র-৪_ নমুনাসহ পলিথিন ব্যাগ_45.png",
    "Brinjal_ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটোনিয়া, স্ক_27.jpeg",
    "Brinjal_ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটোনিয়া, স্ক_28.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_16.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_17.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_18.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_19.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_20.jpeg",
    "Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_21.jpeg",
    "Brinjal/Brinjal_header.jpeg",
    "Brinjal/Brinjal_safe.jpeg",
    "Brinjal_ GAP প্রশিক্ষণ/Brinjal_Brinjal_ GAP প্রশিক্ষণ_0.jpeg",
    "Brinjal_ GAP প্রশিক্ষণ/Brinjal_Brinjal_ GAP প্রশিক্ষণ_46.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_4.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_5.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_6.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_7.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_8.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ_9.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _4.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _5.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _6.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _7.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _8.jpeg",
    "Brinjal_ ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপ/Brinjal_ক্স আক্রান্ত বেগুনের পাতা কিনারা বরাবর উপরের দিকে _9.jpeg",
    "Brinjal_ ক্স পূর্ণাঙ্গ থি্রপস কচি পাতা, ফুল ও কচি/",
    "Brinjal_ ঘড় খধনবষ/",
    "Brinjal_ চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ/",
    "Brinjal_ চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ/Brinjal_চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ - Bottom_35.jpeg",
    "Brinjal_ চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ/Brinjal_চিত্র_ অলটারনারিয়া পাতায় দাগ রোগের লক্ষণ - Top_34.jpeg",
    "Brinjal_ চিত্র_ কাটালে পোকা/",
    "Brinjal_ চিত্র_ কাটালে পোকা/Brinjal_চিত্র_ কাটালে পোকা - Row 1 Col 1_22.jpeg",
    "Brinjal_ চিত্র_ কাটালে পোকা/Brinjal_চিত্র_ কাটালে পোকা - Row 1 Col 2_23.jpeg",
    "Brinjal_ চিত্র_ কাটালে পোকা/Brinjal_চিত্র_ কাটালে পোকা - Row 2 Col 1_24.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর/",
    "Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর/Brinjal_Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর_2.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর/Brinjal_Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর_3.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর/Brinjal_চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র_2.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর/Brinjal_চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র_3.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ/",
    "Brinjal_ চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ/Brinjal_চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ - Bottom_30.jpeg",
    "Brinjal_ চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ/Brinjal_চিত্র_ বেগুনের ঢলে পড়া রোগের লক্ষণ - Top_29.jpeg",
    "Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো/",
    "Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো/Brinjal_ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটোনিয়া, স্ক_27.jpeg",
    "Brinjal_ ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটো/Brinjal_ফাইটোপথোরা, পিথিয়াম, ফিউজারিয়াম, রাইজোকটোনিয়া, স্ক_28.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_16.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_17.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_18.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_19.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_20.jpeg",
    "Brinjal_ বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (/Brinjal_বেগুনের শোষক পোকাসমূহের দমন ব্যবস্থাপনা (গধহধমবসবহ_21.jpeg",
    "soil sample collection/",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 1 Col 1_37.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 1 Col 2_38.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 2 Col 1_39.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 2 Col 2_40.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 2 Col 3_41.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 3 Col 1_42.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 3 Col 2_43.jpeg",
    "soil sample collection/Brinjal_(ঘ)(ঙ)(চ) - Row 3 Col 3_44.jpeg",
    "চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র/",
    "চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র/Brinjal_চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র_2.jpeg",
    "চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র/Brinjal_চিত্র_ বেগুনের ডগা ও ফল ছিদ্রকারী পোকা কর্তৃক আক্র_3.jpeg"
];

function renderGallery() {
    const galleryContainer = document.getElementById('image-gallery');
    if (!galleryContainer) return;

    galleryContainer.innerHTML = GALLERY_IMAGES.map(img => {
        const label = img.split('/').pop().replace(/\.(jpeg|png|jpg)$/i, '').replace(/_/g, ' ');
        return `
            <div class="gallery-item" onclick="viewImage('extracted_assets/images/${img}')" title="${label}">
                <img src="extracted_assets/images/${img}" alt="GAP Visual Aid" loading="lazy">
                <div class="gallery-caption">${label}</div>
            </div>
        `;
    }).join('');
}

function renderDashboardGallery() {
    const container = document.getElementById('dashboard-gallery');
    if (!container) return;

    // Use ALL images instead of just a slice
    const allImages = GALLERY_IMAGES.filter(img => !img.endsWith('/'));

    container.innerHTML = allImages.map(img => {
        const label = img.split('/').pop().replace(/\.(jpeg|png|jpg)$/i, '').replace(/_/g, ' ');
        return `
            <div class="gallery-card" onclick="viewImage('extracted_assets/images/${img}')">
                <img src="extracted_assets/images/${img}" alt="Gallery image" loading="lazy">
                <div class="gallery-card-info">
                    <div class="gallery-card-title">${label}</div>
                </div>
            </div>
        `;
    }).join('');
}

const FLASHCARDS_DATA = [
    { q: { bn: "উত্তম কৃষি চর্চার (GAP) মূল লক্ষ্য কী?", en: "What is the main goal of GAP?" }, a: { bn: "নিরাপদ ও মানসম্মত খাদ্য উৎপাদন নিশ্চিত করা।", en: "Ensuring safe and quality food production." } },
    { q: { bn: "বেগুন চাষে কোন ধরনের সার ব্যবহার করা উচিত?", en: "What type of fertilizer should be used?" }, a: { bn: "সুষম সার এবং অনুমোদিত জৈব সার।", en: "Balanced fertilizer and approved organic manure." } },
    { q: { bn: "ফসল সংগ্রহের সময় কী ব্যবহার করা উচিত?", en: "What should be used during harvesting?" }, a: { bn: "পরিষ্কার এবং ধারালো সরঞ্জাম।", en: "Clean and sharp tools." } }
];

function renderFlashCards() {
    const container = document.getElementById('flashcard-display');
    if (!container) return;

    container.innerHTML = FLASHCARDS_DATA.map(card => `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-front">
                <p>${card.q[currentLanguage]}</p>
            </div>
            <div class="flashcard-back">
                <p>${card.a[currentLanguage]}</p>
            </div>
        </div>
    `).join('');
}

let bgAudio = null;
function initAudioPlayer() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;

    audioBtn.onclick = () => {
        if (!bgAudio) {
            // Placeholder: Replace with actual MP3 path provided by user later
            bgAudio = new Audio('extracted_assets/branding/background.mp3');
            bgAudio.loop = true;
        }

        if (bgAudio.paused) {
            bgAudio.play().then(() => {
                audioBtn.innerHTML = '<i data-lucide="music-2"></i>';
                showToast(currentLanguage === 'bn' ? 'অডিও চালু প্লে করা হচ্ছে' : 'Playing Audio');
            }).catch(e => {
                console.log("Audio playback failed:", e);
                showToast(currentLanguage === 'bn' ? 'অডিও ফাইল পাওয়া যায়নি' : 'Audio file not found');
            });
        } else {
            bgAudio.pause();
            audioBtn.innerHTML = '<i data-lucide="music"></i>';
        }
        lucide.createIcons();
    };
}

function viewImage(src) {
    modalTitle.textContent = currentLanguage === 'bn' ? "ভিজ্যুয়াল রেফারেন্স" : "Visual Reference";
    modalBody.innerHTML = `<img src="${src}" style="width:100%; border-radius:12px; margin-bottom:1rem;">`;
    modal.classList.add('active');
    markCompleteBtn.style.display = 'none';

    // Hide nav in image view
    const navContainer = document.querySelector('.modal-nav');
    if (navContainer) navContainer.style.display = 'none';
}

// Reset markCompleteBtn display on normal lesson open
const originalOpenLesson = openLesson;
openLesson = function (id) {
    markCompleteBtn.style.display = 'block';
    originalOpenLesson(id);
};

// PDF Viewer Variables
let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

// PDF Viewer Functions
async function loadPDF(url) {
    console.time('loadPDF');
    const loadingDiv = document.getElementById('pdf-loading');
    loadingDiv.style.display = 'block';
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        pdfDoc = await loadingTask.promise;
        totalPages = pdfDoc.numPages;
        currentPage = 1;
        // Defer heavy rendering to avoid blocking UI
        requestIdleCallback(() => {
            renderPage(currentPage);
            updatePageInfo();
            updateNavigationButtons();
            loadingDiv.style.display = 'none';
            console.timeEnd('loadPDF');
        }, { timeout: 100 });
    } catch (error) {
        console.error('Error loading PDF:', error);
        showToast(currentLanguage === 'bn' ? 'PDF লোড করতে ব্যর্থ হয়েছে' : 'Failed to load PDF');
        loadingDiv.style.display = 'none';
        console.timeEnd('loadPDF');
    }
}

async function renderPage(pageNum) {
    try {
        const page = await pdfDoc.getPage(pageNum);

        // Calculate scale to fit canvas width
        const viewport = page.getViewport({ scale: 1 });
        const containerWidth = canvas.parentElement.offsetWidth - 40; // Account for padding
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: scaledViewport
        };

        await page.render(renderContext).promise;
    } catch (error) {
        console.error('Error rendering page:', error);
        showToast(currentLanguage === 'bn' ? 'পৃষ্ঠা রেন্ডার করতে ব্যর্থ হয়েছে' : 'Failed to render page');
    }
}

function updatePageInfo() {
    const pageInfo = document.getElementById('page-info');
    if (pageInfo) {
        pageInfo.textContent = `${currentPage} / ${totalPages}`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (prevBtn) {
        prevBtn.disabled = currentPage <= 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage >= totalPages;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePageInfo();
        updateNavigationButtons();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updatePageInfo();
        updateNavigationButtons();
    }
}

function initPDFViewer() {
    const pdfSelect = document.getElementById('pdf-select');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (pdfSelect) {
        pdfSelect.addEventListener('change', (e) => {
            const selectedPdf = e.target.value;
            if (selectedPdf) {
                loadPDF(selectedPdf);
            }
        });
        // Load initial PDF on page load
        if (pdfSelect.value) {
            loadPDF(pdfSelect.value);
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevPage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextPage);
    }

    // PDF will load on user selection only
}

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// Initialize
init();
initPDFViewer();
