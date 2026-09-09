/* =====================================================
   SUPABASE
   BIBLIOTECA VIRTUAL GONÇALVES DIAS
===================================================== */

const SUPABASE_URL = "COLE_AQUI_A_URL_DO_SEU_PROJETO";

const SUPABASE_KEY = "COLE_AQUI_SUA_PUBLISHABLE_KEY";


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
