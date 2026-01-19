// Auth Management for GAP Brinjal App
let currentUser = null;

// Auth Modal Elements
const authModal = document.getElementById('auth-modal');
const authForm = document.getElementById('auth-form');
const authBtn = document.getElementById('auth-btn');
const authBtnText = document.getElementById('auth-btn-text');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authModalTitle = document.getElementById('auth-modal-title');

// Initialize Auth
async function initAuth() {
    // Test Supabase connection if configured
    if (SUPABASE_URL !== 'https://dpgsiiapjdrxszrbiyxl.supabase.co') {
        await testSupabaseConnection();
    }

    // Check for existing session
    const { data: { session }, error } = await supabase.auth.getSession();
    if (session) {
        currentUser = session.user;
        updateUIForAuth();
        loadUserData();
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN') {
            currentUser = session.user;
            updateUIForAuth();
            loadUserData();
            authModal.classList.remove('active');
            showToast('Welcome back!');
        } else if (event === 'SIGNED_OUT') {
            currentUser = null;
            updateUIForAuth();
            clearUserData();
            showToast('Logged out successfully');
        }
    });
}

// Update UI based on auth state
function updateUIForAuth() {
    if (currentUser) {
        authBtnText.textContent = 'Logout';
        authBtn.onclick = handleLogout;
        authBtn.innerHTML = `<i data-lucide="log-out"></i><span id="auth-btn-text">Logout</span>`;
        document.getElementById('user-meta').innerHTML = `
            <div class="badge">${currentUser.email}</div>
            <div class="badge">Session Active</div>
        `;
    } else {
        authBtnText.textContent = 'Login';
        authBtn.onclick = () => authModal.classList.add('active');
        authBtn.innerHTML = `<i data-lucide="log-in"></i><span id="auth-btn-text">Login</span>`;
        document.getElementById('user-meta').innerHTML = `
            <div class="badge">Session Inactive</div>
        `;
    }
    lucide.createIcons();
}

// No toggle needed for magic link, always the same

// Handle form submission
authForm.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;

    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (error) throw error;
        showToast('Check your email for the magic link!');
        authModal.classList.remove('active');
    } catch (error) {
        showToast(`Error: ${error.message}`);
    }
};

// Logout
async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) showToast(`Logout error: ${error.message}`);
}

// Load user-specific data
async function loadUserData() {
    if (!currentUser) return;

    completedLessons = await db.getCompletedLessons(currentUser.id);
    farmRecords = await db.getFarmRecords(currentUser.id);

    updateDashboardStats();
    updateProgressBar();
    renderModules();
    renderLogs();
}

// Clear data on logout
function clearUserData() {
    completedLessons = [];
    farmRecords = [];
    updateDashboardStats();
    updateProgressBar();
    renderModules();
    renderLogs();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initAuth);