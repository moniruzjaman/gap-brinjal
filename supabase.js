// Supabase Configuration
// Replace these with your actual Supabase project URL and Anon Key
const SUPABASE_URL = 'https://dpgsiiapjdrxszrbiyxl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_secret_S5UxlOp2KtstC02PLjDqtw_QavuhQf9';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Test Supabase connection
async function testSupabaseConnection() {
    try {
        const { data, error } = await supabase.from('completed_lessons').select('count').limit(1);
        if (error && error.code !== 'PGRST116') { // PGRST116 is no rows, which is expected
            console.error('Supabase connection error:', error);
            return false;
        }
        console.log('Supabase connection successful');
        return true;
    } catch (err) {
        console.error('Supabase test failed:', err);
        return false;
    }
}

// Database persistence helpers
const db = {
    async saveCompletedLesson(lessonId) {
        if (!currentUser) return;
        const { error } = await supabase
            .from('completed_lessons')
            .upsert({ user_id: currentUser.id, lesson_id: lessonId, completed_at: new Date() });
        if (error) console.error('Error saving lesson:', error);
    },

    async removeCompletedLesson(lessonId) {
        if (!currentUser) return;
        const { error } = await supabase
            .from('completed_lessons')
            .delete()
            .match({ user_id: currentUser.id, lesson_id: lessonId });
        if (error) console.error('Error removing lesson:', error);
    },

    async getCompletedLessons() {
        if (!currentUser) return [];
        const { data, error } = await supabase
            .from('completed_lessons')
            .select('lesson_id')
            .eq('user_id', currentUser.id);
        if (error) {
            console.error('Error fetching lessons:', error);
            return [];
        }
        return data.map(item => item.lesson_id);
    },

    async saveFarmRecord(record) {
        if (!currentUser) return;
        const { error } = await supabase
            .from('farm_records')
            .insert({
                user_id: currentUser.id,
                date: record.date,
                category: record.category,
                description: record.desc
            });
        if (error) console.error('Error saving record:', error);
    },

    async getFarmRecords() {
        if (!currentUser) return [];
        const { data, error } = await supabase
            .from('farm_records')
            .select('*')
            .eq('user_id', currentUser.id)
            .order('date', { ascending: false });
        if (error) {
            console.error('Error fetching records:', error);
            return [];
        }
        return data.map(r => ({
            id: r.id,
            date: r.date,
            category: r.category,
            desc: r.description
        }));
    }
};
