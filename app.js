// --- GOOGLE SHEETS SYNC CONFIGURATION ---
// Please configure your deployed Google Apps Script Web App URL here
const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwpzFTAXhnjCPUVp1HFj-_gwrd5sH3nmvLpinOjQLTaae82koAiq6FoJYxsYlzce_xy/exec";

// --- MOCK DATABASE SEED DATA (សាលារដ្ឋ) ---
const DEFAULT_ADMINS = [
    { username: "admin", name: "គណៈគ្រប់គ្រងសាលា", password: "admin" }
];

const DEFAULT_CLASSES = ["១២ក", "១២ខ", "១១ក", "១០ក"];

const DEFAULT_STUDENTS = [
    { id: "STD1001", nameKh: "សុខ ពិសិដ្ឋ", nameLat: "SOK PISETH", gender: "ប្រុស", dob: "2008-05-12", address: "ភ្នំពេញ", parentName: "សុខ គឹមហុង", parentPhone: "012 345 678", class: "១២ក", photo: "", fatherName: "សុខ គឹមហុង", motherName: "គឹម សុម៉ាលី", parentOccupation: "អាជីវករ", password: "123" },
    { id: "STD1002", nameKh: "ចាន់ សុភា", nameLat: "CHAN SOPHEA", gender: "ស្រី", dob: "2008-09-20", address: "ភ្នំពេញ", parentName: "ចាន់ វាសនា", parentPhone: "098 765 432", class: "១២ក", photo: "", fatherName: "ចាន់ វាសនា", motherName: "ស៊ន ស្រីអូន", parentOccupation: "គ្រូបង្រៀន", password: "123" },
    { id: "STD1003", nameKh: "គង់ រតនា", nameLat: "KONG RATANA", gender: "ប្រុស", dob: "2008-11-05", address: "កណ្តាល", parentName: "គង់ វីរៈ", parentPhone: "015 888 999", class: "១២ក", photo: "", fatherName: "គង់ វីរៈ", motherName: "គង់ ផល្លា", parentOccupation: "កសិករ", password: "123" },
    { id: "STD1004", nameKh: "ម៉ៅ បុប្ផា", nameLat: "MAO BOPHA", gender: "ស្រី", dob: "2008-02-14", address: "ភ្នំពេញ", parentName: "ម៉ៅ សុខា", parentPhone: "088 123 456", class: "១២ខ", photo: "", fatherName: "ម៉ៅ សុខា", motherName: "ម៉ៅ ចាន់ធី", parentOccupation: "មន្ត្រីរាជការ", password: "123" },
    { id: "STD1005", nameKh: "សេង ចាន់ត្រា", nameLat: "SENG CHANTREA", gender: "ប្រុស", dob: "2009-07-28", address: "កំពង់ចាម", parentName: "សេង ដារ៉ា", parentPhone: "077 222 333", class: "១១ក", photo: "", fatherName: "សេង ដារ៉ា", motherName: "សេង ស្រីលីស", parentOccupation: "បុគ្គលិកក្រុមហ៊ុន", password: "123" },
    { id: "STD1006", nameKh: "ណុប កុសល", nameLat: "NOP KOSAL", gender: "ប្រុស", dob: "2010-03-03", address: "ភ្នំពេញ", parentName: "ណុប សំបូរ", parentPhone: "097 555 666", class: "១០ក", photo: "", fatherName: "ណុប សំបូរ", motherName: "ចាន់ សុខា", parentOccupation: "អាជីវករ", password: "123" },
];

const DEFAULT_TEACHERS = [
    { id: "TCH2001", name: "លី សុជាតា", gender: "ស្រី", specialization: "គណិតវិទ្យា", phone: "088 888 888", salary: 70, password: "123", assignedClass: "១២ក" },
    { id: "TCH2002", name: "ហេង វាសនា", gender: "ប្រុស", specialization: "រូបវិទ្យា", phone: "012 999 999", salary: 65, password: "123", assignedClass: "១២ខ" },
    { id: "TCH2003", name: "ស៊ន ស្រីណែត", gender: "ស្រី", specialization: "អង់គ្លេស", phone: "097 777 777", salary: 60, password: "123", assignedClass: "១១ក" },
    { id: "TCH2004", name: "កែវ សុខា", gender: "ប្រុស", specialization: "ភាសាខ្មែរ", phone: "015 666 666", salary: 60, password: "123", assignedClass: "" },
];

const DEFAULT_SUBJECTS = [
    { code: "KHM", name: "ភាសាខ្មែរ", icon: "book", maxScore: 100 },
    { code: "MTH", name: "គណិតវិទ្យា", icon: "calculator", maxScore: 100 },
    { code: "PHY", name: "រូបវិទ្យា", icon: "zap", maxScore: 75 },
    { code: "CHM", name: "គីមីវិទ្យា", icon: "flask-conical", maxScore: 75 },
    { code: "BIO", name: "ជីវវិទ្យា", icon: "dna", maxScore: 75 },
    { code: "HIS", name: "ប្រវត្តិវិទ្យា", icon: "landmark", maxScore: 50 },
    { code: "GEO", name: "ភូមិវិទ្យា", icon: "globe", maxScore: 50 },
    { code: "CIV", name: "សីលធម៌-ពលរដ្ឋវិជ្ជា", icon: "heart", maxScore: 50 },
    { code: "EAR", name: "ផែនដី និងបរិស្ថានវិទ្យា", icon: "mountain", maxScore: 50 },
    { code: "ENG", name: "អង់គ្លេស", icon: "languages", maxScore: 100 }
];

const DEFAULT_TIMETABLES = {
    "១២ក": [
        { time: "07:00 - 08:30 (ព្រឹក)", Mon: "គណិតវិទ្យា", Tue: "រូបវិទ្យា", Wed: "គណិតវិទ្យា", Thu: "ភាសាខ្មែរ", Fri: "គីមីវិទ្យា" },
        { time: "08:45 - 10:15 (ព្រឹក)", Mon: "អង់គ្លេស", Tue: "គីមីវិទ្យា", Wed: "អង់គ្លេស", Thu: "ជីវវិទ្យា", Fri: "រូបវិទ្យា" },
        { time: "10:30 - 12:00 (ព្រឹក)", Mon: "ប្រវត្តិវិទ្យា", Tue: "ផែនដី និងបរិស្ថានវិទ្យា", Wed: "ភូមិវិទ្យា", Thu: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Fri: "ប្រវត្តិវិទ្យា" },
        { time: "13:00 - 14:30 (រសៀល)", Mon: "គណិតវិទ្យា", Tue: "អង់គ្លេស", Wed: "រូបវិទ្យា", Thu: "គីមីវិទ្យា", Fri: "ភាសាខ្មែរ" },
        { time: "14:45 - 16:15 (រសៀល)", Mon: "រូបវិទ្យា", Tue: "ភាសាខ្មែរ", Wed: "ជីវវិទ្យា", Thu: "ភូមិវិទ្យា", Fri: "អង់គ្លេស" },
        { time: "16:30 - 18:00 (ល្ងាច)", Mon: "គីមីវិទ្យា", Tue: "គណិតវិទ្យា", Wed: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Thu: "ប្រវត្តិវិទ្យា", Fri: "ផែនដី និងបរិស្ថានវិទ្យា" }
    ],
    "១២ខ": [
        { time: "07:00 - 08:30 (ព្រឹក)", Mon: "រូបវិទ្យា", Tue: "គណិតវិទ្យា", Wed: "ភាសាខ្មែរ", Thu: "គីមីវិទ្យា", Fri: "អង់គ្លេស" },
        { time: "08:45 - 10:15 (ព្រឹក)", Mon: "គីមីវិទ្យា", Tue: "អង់គ្លេស", Wed: "ជីវវិទ្យា", Thu: "រូបវិទ្យា", Fri: "គណិតវិទ្យា" },
        { time: "10:30 - 12:00 (ព្រឹក)", Mon: "ផែនដី និងបរិស្ថានវិទ្យា", Tue: "ប្រវត្តិវិទ្យា", Wed: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Thu: "ភូមិវិទ្យា", Fri: "ផែនដី និងបរិស្ថានវិទ្យា" },
        { time: "13:00 - 14:30 (រសៀល)", Mon: "ភាសាខ្មែរ", Tue: "គណិតវិទ្យា", Wed: "អង់គ្លេស", Thu: "រូបវិទ្យា", Fri: "គីមីវិទ្យា" },
        { time: "14:45 - 16:15 (រសៀល)", Mon: "គណិតវិទ្យា", Tue: "រូបវិទ្យា", Wed: "គីមីវិទ្យា", Thu: "ភាសាខ្មែរ", Fri: "អង់គ្លេស" },
        { time: "16:30 - 18:00 (ល្ងាច)", Mon: "អង់គ្លេស", Tue: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Wed: "ប្រវត្តិវិទ្យា", Thu: "ជីវវិទ្យា", Fri: "ភូមិវិទ្យា" }
    ],
    "១១ក": [
        { time: "07:00 - 08:30 (ព្រឹក)", Mon: "គណិតវិទ្យា", Tue: "ភាសាខ្មែរ", Wed: "រូបវិទ្យា", Thu: "គីមីវិទ្យា", Fri: "គណិតវិទ្យា" },
        { time: "08:45 - 10:15 (ព្រឹក)", Mon: "អង់គ្លេស", Tue: "គីមីវិទ្យា", Wed: "ជីវវិទ្យា", Thu: "អង់គ្លេស", Fri: "រូបវិទ្យា" },
        { time: "10:30 - 12:00 (ព្រឹក)", Mon: "ប្រវត្តិវិទ្យា", Tue: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Wed: "ផែនដី និងបរិស្ថានវិទ្យា", Thu: "ភូមិវិទ្យា", Fri: "ប្រវត្តិវិទ្យា" },
        { time: "13:00 - 14:30 (រសៀល)", Mon: "រូបវិទ្យា", Tue: "គណិតវិទ្យា", Wed: "ភាសាខ្មែរ", Thu: "គីមីវិទ្យា", Fri: "អង់គ្លេស" },
        { time: "14:45 - 16:15 (រសៀល)", Mon: "គីមីវិទ្យា", Tue: "អង់គ្លេស", Wed: "ជីវវិទ្យា", Thu: "រូបវិទ្យា", Fri: "គណិតវិទ្យា" },
        { time: "16:30 - 18:00 (ល្ងាច)", Mon: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Tue: "ភាសាខ្មែរ", Wed: "ប្រវត្តិវិទ្យា", Thu: "ភូមិវិទ្យា", Fri: "ផែនដី និងបរិស្ថានវិទ្យា" }
    ],
    "១០ក": [
        { time: "07:00 - 08:30 (ព្រឹក)", Mon: "ភាសាខ្មែរ", Tue: "គណិតវិទ្យា", Wed: "គីមីវិទ្យា", Thu: "រូបវិទ្យា", Fri: "ភាសាខ្មែរ" },
        { time: "08:45 - 10:15 (ព្រឹក)", Mon: "គណិតវិទ្យា", Tue: "រូបវិទ្យា", Wed: "អង់គ្លេស", Thu: "ជីវវិទ្យា", Fri: "គីមីវិទ្យា" },
        { time: "10:30 - 12:00 (ព្រឹក)", Mon: "ភូមិវិទ្យា", Tue: "ផែនដី និងបរិស្ថានវិទ្យា", Wed: "ប្រវត្តិវិទ្យា", Thu: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Fri: "អង់គ្លេស" },
        { time: "13:00 - 14:30 (រសៀល)", Mon: "គណិតវិទ្យា", Tue: "ភាសាខ្មែរ", Wed: "រូបវិទ្យា", Thu: "គីមីវិទ្យា", Fri: "គណិតវិទ្យា" },
        { time: "14:45 - 16:15 (រសៀល)", Mon: "អង់គ្លេស", Tue: "គីមីវិទ្យា", Wed: "ជីវវិទ្យា", Thu: "អង់គ្លេស", Fri: "រូបវិទ្យា" },
        { time: "16:30 - 18:00 (ល្ងាច)", Mon: "ប្រវត្តិវិទ្យា", Tue: "សីលធម៌-ពលរដ្ឋវិជ្ជា", Wed: "ផែនដី និងបរិស្ថានវិទ្យា", Thu: "ភូមិវិទ្យា", Fri: "ប្រវត្តិវិទ្យា" }
    ]
};

const DEFAULT_ATTENDANCE = [
    { id: 1, studentId: "STD1001", date: "2026-07-09", status: "P", recordedBy: "គ្រូ កែវ សុខា" },
    { id: 2, studentId: "STD1002", date: "2026-07-09", status: "P", recordedBy: "គ្រូ កែវ សុខា" },
    { id: 3, studentId: "STD1003", date: "2026-07-09", status: "E", recordedBy: "គ្រូ កែវ សុខា" },
    { id: 4, studentId: "STD1004", date: "2026-07-09", status: "P", recordedBy: "គ្រូ ហេង វាសនា" },
    { id: 5, studentId: "STD1001", date: "2026-07-10", status: "P", recordedBy: "គ្រូ កែវ សុខា" },
    { id: 6, studentId: "STD1002", date: "2026-07-10", status: "P", recordedBy: "គ្រូ កែវ សុខា" },
    { id: 7, studentId: "STD1003", date: "2026-07-10", status: "P", recordedBy: "គ្រូ កែវ សុខា" }
];

const DEFAULT_GRADES = [
    // Sok Piseth (STD1001) - ១២ក - Math
    { studentId: "STD1001", subject: "គណិតវិទ្យា", month: "10", attendance: 9.5, quiz: 27, exam: 52 },
    { studentId: "STD1001", subject: "គណិតវិទ្យា", month: "11", attendance: 10, quiz: 28, exam: 54 },
    { studentId: "STD1001", subject: "គណិតវិទ្យា", month: "12", attendance: 9, quiz: 26, exam: 48 },
    { studentId: "STD1001", subject: "គណិតវិទ្យា", month: "1", attendance: 10, quiz: 29, exam: 56 },
    // Sok Piseth - ១២ក - Physics
    { studentId: "STD1001", subject: "រូបវិទ្យា", month: "10", attendance: 9, quiz: 25, exam: 45 },
    { studentId: "STD1001", subject: "រូបវិទ្យា", month: "11", attendance: 10, quiz: 27, exam: 50 },
    // Chan Sophea (STD1002) - ១២ក - Math
    { studentId: "STD1002", subject: "គណិតវិទ្យា", month: "10", attendance: 10, quiz: 29, exam: 58 },
    { studentId: "STD1002", subject: "គណិតវិទ្យា", month: "11", attendance: 10, quiz: 30, exam: 59 },
    // Kong Ratana (STD1003) - ១២ក - Math
    { studentId: "STD1003", subject: "គណិតវិទ្យា", month: "10", attendance: 8, quiz: 22, exam: 40 },
    { studentId: "STD1003", subject: "គណិតវិទ្យា", month: "11", attendance: 8.5, quiz: 24, exam: 42 }
];

// Finance structure representing Cambodian public funds (State Budget allotments + Parent association support)
const DEFAULT_INVOICES = [
    { number: "PB-2026-0001", studentId: "STATE_BUDGET", amount: 4500, status: "Paid", paidDate: "2026-05-01" }, // Govt Allocation Inflow
    { number: "REC-2026-0001", studentId: "STD1001", amount: 15, status: "Paid", paidDate: "2026-06-05" },   // Parent Contribution
    { number: "REC-2026-0002", studentId: "STD1002", amount: 15, status: "Paid", paidDate: "2026-06-06" },   // Parent Contribution
    { number: "REC-2026-0003", studentId: "STD1003", amount: 15, status: "Pending", paidDate: "" },         // Parent Contribution
    { number: "REC-2026-0004", studentId: "STD1004", amount: 15, status: "Paid", paidDate: "2026-06-05" },   // Parent Contribution
    { number: "REC-2026-0005", studentId: "STD1005", amount: 15, status: "Pending", paidDate: "" },         // Parent Contribution
    { number: "REC-2026-0006", studentId: "STD1006", amount: 15, status: "Paid", paidDate: "2026-06-10" }    // Parent Contribution
];

// Public expenses categorized by State Chapters (ជំពូក)
const DEFAULT_EXPENSES = [
    { description: "ទូទាត់ថ្លៃអគ្គិសនី និងទឹកស្អាតសាលា (ជំពូក ៦០)", amount: 280, date: "2026-06-25", chapter: "ជំពូក ៦០" },
    { description: "ទិញក្រដាសប្រឡង និងសម្ភារៈរដ្ឋបាល (ជំពូក ៦១)", amount: 150, date: "2026-06-28", chapter: "ជំពូក ៦១" },
    { description: "ជួសជុលដំបូលអគារសិក្សា ក និងលាបថ្នាំ (ជំពូក ៦២)", amount: 620, date: "2026-07-02", chapter: "ជំពូក ៦២" }
];

const DEFAULT_LOGS = [
    { text: "ប្រព័ន្ធគ្រប់គ្រងសាលារដ្ឋត្រូវបានចាប់ផ្តើមជោគជ័យ។", time: "2026-07-10 08:00" },
    { text: "បានកំណត់ថវិកាដំណើរការសាលាដំបូង (PB) និងគំរូសៀវភៅតាមដានសាលារដ្ឋ។", time: "2026-07-10 08:05" }
];

// --- DATABASE STATE MANAGER ---
class SchoolDatabase {
    constructor() {
        this.classes = this.load("classes", DEFAULT_CLASSES);
        this.timetables = this.load("timetables", DEFAULT_TIMETABLES);
        this.students = this.load("students", DEFAULT_STUDENTS);
        this.teachers = this.load("teachers", DEFAULT_TEACHERS);
        this.subjects = this.load("subjects", DEFAULT_SUBJECTS);
        this.attendance = this.load("attendance", DEFAULT_ATTENDANCE);
        this.grades = this.load("grades", DEFAULT_GRADES);
        this.invoices = this.load("invoices", DEFAULT_INVOICES);
        this.expenses = this.load("expenses", DEFAULT_EXPENSES);
        this.logs = this.load("logs", DEFAULT_LOGS);
        this.reportCardSettings = this.load("reportCardSettings", {});
        this.admins = this.load("admins", DEFAULT_ADMINS);

        // Ensure all loaded subjects have maxScore (retrofitted for legacy database)
        let modified = false;
        this.subjects.forEach(sub => {
            if (typeof sub.maxScore === 'undefined') {
                const defSub = DEFAULT_SUBJECTS.find(d => d.code === sub.code);
                sub.maxScore = defSub ? (defSub.maxScore || 100) : 100;
                modified = true;
            }
        });

        // Retrofit teachers
        this.teachers.forEach(tch => {
            if (typeof tch.assignedClass === 'undefined') {
                const defTch = DEFAULT_TEACHERS.find(t => t.id === tch.id);
                tch.assignedClass = defTch ? (defTch.assignedClass || "") : "";
                modified = true;
            }
            if (typeof tch.password === 'undefined') {
                tch.password = "123";
                modified = true;
            }
        });

        // Retrofit students
        this.students.forEach(std => {
            if (typeof std.password === 'undefined') {
                std.password = "123";
                modified = true;
            }
        });

        if (modified) {
            this.save();
        }
    }

    load(key, fallback) {
        const data = localStorage.getItem(`sms_state_db_${key}`);
        return data ? JSON.parse(data) : fallback;
    }

    saveLocalOnly() {
        localStorage.setItem("sms_state_db_classes", JSON.stringify(this.classes));
        localStorage.setItem("sms_state_db_timetables", JSON.stringify(this.timetables));
        localStorage.setItem("sms_state_db_students", JSON.stringify(this.students));
        localStorage.setItem("sms_state_db_teachers", JSON.stringify(this.teachers));
        localStorage.setItem("sms_state_db_subjects", JSON.stringify(this.subjects));
        localStorage.setItem("sms_state_db_attendance", JSON.stringify(this.attendance));
        localStorage.setItem("sms_state_db_grades", JSON.stringify(this.grades));
        localStorage.setItem("sms_state_db_invoices", JSON.stringify(this.invoices));
        localStorage.setItem("sms_state_db_expenses", JSON.stringify(this.expenses));
        localStorage.setItem("sms_state_db_logs", JSON.stringify(this.logs));
        localStorage.setItem("sms_state_db_reportCardSettings", JSON.stringify(this.reportCardSettings));
        localStorage.setItem("sms_state_db_admins", JSON.stringify(this.admins));
    }

    save() {
        this.saveLocalOnly();
        if (typeof syncToGoogleSheets === "function") {
            syncToGoogleSheets(true);
        }
    }

    addLog(text) {
        const now = new Date();
        const dateStr = now.getFullYear() + "-" +
            String(now.getMonth() + 1).padStart(2, '0') + "-" +
            String(now.getDate()).padStart(2, '0') + " " +
            String(now.getHours()).padStart(2, '0') + ":" +
            String(now.getMinutes()).padStart(2, '0');
        this.logs.unshift({ text, time: dateStr });
        if (this.logs.length > 30) this.logs.pop();
        this.save();
    }
}

// Instantiate Database
const db = new SchoolDatabase();

// --- STATE VARIABLES ---
let currentRole = "admin"; // admin, teacher, student
let selectedStudentPortalId = "STD1001";
let statsChart = null;
let isEditingTimetable = false;
let currentSelectedPhotoBase64 = "";

// --- APPLICATION INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    populateClassSelectors();
    initNavigation();
    initModalControls();
    initSearchFilters();
    initForms();
    initAuth(); // Initialize login screen and sessions

    setupFinanceTabs(); // Bind finance tab button clicks
    initGoogleSyncConfig(); // Initialize Google Sync modal forms and buttons
    updateDateDisplay();

    if (GOOGLE_SHEET_WEBAPP_URL) {
        fetchFromGoogleSheets(true);
    }

    lucide.createIcons();
});

// --- NAVIGATION SYSTEM ---
function initNavigation() {
    const navItems = document.querySelectorAll(".nav-item");
    const mobileClose = document.getElementById("mobileCloseBtn");
    const menuToggle = document.getElementById("menuToggleBtn");
    const sidebar = document.getElementById("appSidebar");

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = item.getAttribute("data-target");
            if (currentRole === "student" && targetId !== "portal-section") return;
            if (currentRole === "teacher" && targetId === "finance-section") {
                alert("លោកគ្រូ-អ្នកគ្រូ គ្មានសិទ្ធិចូលមើលគណនេយ្យថវិកាសាលាទេ!");
                return;
            }

            navItems.forEach(n => n.classList.remove("active"));
            item.classList.add("active");

            document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            const khmerText = item.querySelector("span").textContent.split(" (")[0];
            document.getElementById("pageHeaderTitle").textContent = khmerText;

            sidebar.classList.remove("active");
            loadSectionData(targetId);
        });
    });

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => sidebar.classList.add("active"));
    }
    if (mobileClose && sidebar) {
        mobileClose.addEventListener("click", () => sidebar.classList.remove("active"));
    }
}

function loadSectionData(sectionId) {
    switch (sectionId) {
        case "dashboard-section":
            renderDashboard();
            break;
        case "students-section":
            renderStudentsTable();
            break;
        case "teachers-section":
            renderTeachersTable();
            break;
        case "classes-section":
            renderClassesAndSubjects();
            break;
        case "attendance-section":
            const dateInput = document.getElementById("attendanceDateInput");
            if (!dateInput.value) {
                dateInput.value = new Date().toISOString().split('T')[0];
            }
            break;
        case "grades-section":
            initGradesSelectors();
            break;
        case "finance-section":
            renderFinanceSummary();
            renderInvoicesTable();
            renderExpensesTable();
            break;
        case "portal-section":
            renderStudentPortal(selectedStudentPortalId);
            break;
        case "users-section":
            renderUsersSection();
            break;
    }
    lucide.createIcons();
}

function switchRole(role) {
    currentRole = role;
    isEditingTimetable = false;
    const editTtBtn = document.getElementById("editTimetableBtn");
    if (editTtBtn) {
        editTtBtn.className = "btn btn-secondary role-admin-only";
        editTtBtn.innerHTML = `<i data-lucide="edit"></i> <span>កែប្រែ</span>`;
    }
    const addTtRowBtn = document.getElementById("addTimetableRowBtn");
    if (addTtRowBtn) {
        addTtRowBtn.classList.add("hidden");
    }

    document.body.className = `role-${role}`;

    const sidebarAvatar = document.getElementById("sidebarAvatar");
    const sidebarName = document.getElementById("sidebarUserName");
    const sidebarRole = document.getElementById("sidebarUserRole");
    const welcomeName = document.getElementById("welcomeUserName");

    const navDashboard = document.getElementById("nav-dashboard");
    const navStudents = document.getElementById("nav-students");
    const navTeachers = document.getElementById("nav-teachers");
    const navClasses = document.getElementById("nav-classes");
    const navAttendance = document.getElementById("nav-attendance");
    const navGrades = document.getElementById("nav-grades");
    const navFinance = document.getElementById("nav-finance");
    const navUsers = document.getElementById("nav-users");

    const allNavs = [navDashboard, navStudents, navTeachers, navClasses, navAttendance, navGrades, navFinance, navUsers];
    allNavs.forEach(nav => { if (nav) nav.style.display = "flex"; });

    if (role === "admin") {
        const loggedInUser = sessionStorage.getItem("sms_session_user_id") || "admin";
        const adminAccount = (db.admins || []).find(a => a.username.toLowerCase() === loggedInUser.toLowerCase()) || { name: "គណៈគ្រប់គ្រងសាលា" };
        
        sidebarAvatar.textContent = adminAccount.name ? adminAccount.name.charAt(0) : "គ";
        sidebarAvatar.style.background = "linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%)";
        sidebarName.textContent = adminAccount.name;
        sidebarRole.textContent = "សិទ្ធិ: នាយកសាលា";
        welcomeName.textContent = adminAccount.name;

        // Re-enable dropdown selectors
        const attSelect = document.getElementById("attendanceClassSelect");
        const grSelect = document.getElementById("gradesClassSelect");
        if (attSelect) attSelect.disabled = false;
        if (grSelect) grSelect.disabled = false;

        navDashboard.click();
        document.querySelectorAll(".role-admin-only").forEach(el => el.classList.remove("hidden"));
    }
    else if (role === "teacher") {
        const teacherId = sessionStorage.getItem("sms_session_user_id") || "TCH2001";
        const teacher = db.teachers.find(t => t.id === teacherId) || { name: "វាសនា", gender: "ប្រុស", specialization: "រូបវិទ្យា" };
        const titlePrefix = teacher.gender === "ស្រី" ? "អ្នកគ្រូ" : "លោកគ្រូ";

        sidebarAvatar.textContent = teacher.name ? teacher.name.charAt(0) : "គ";
        sidebarAvatar.style.background = "linear-gradient(135deg, var(--warning-color) 0%, var(--warning-hover) 100%)";
        sidebarName.textContent = `${titlePrefix} ${teacher.name}`;
        sidebarRole.textContent = `សិទ្ធិ: គ្រូឯកទេស (${teacher.specialization})` + (teacher.assignedClass ? ` / ថ្នាក់ដឹកនាំ: ${teacher.assignedClass}` : "");
        welcomeName.textContent = `${titlePrefix} ${teacher.name}`;

        if (navFinance) navFinance.style.display = "none";
        if (navUsers) navUsers.style.display = "none";

        navDashboard.click();
        document.querySelectorAll(".role-admin-only").forEach(el => el.classList.add("hidden"));

        // Restrict dropdown selectors to advisor's class
        const attSelect = document.getElementById("attendanceClassSelect");
        const grSelect = document.getElementById("gradesClassSelect");

        if (teacher.assignedClass) {
            if (attSelect) {
                attSelect.value = teacher.assignedClass;
                attSelect.disabled = true;
                attSelect.dispatchEvent(new Event("change"));
            }
            if (grSelect) {
                grSelect.value = teacher.assignedClass;
                grSelect.disabled = true;
                grSelect.dispatchEvent(new Event("change"));
            }
        } else {
            if (attSelect) attSelect.disabled = false;
            if (grSelect) grSelect.disabled = false;
        }
    }
    else if (role === "student") {
        const studentId = sessionStorage.getItem("sms_session_user_id") || "STD1001";
        const student = db.students.find(s => s.id === studentId);

        if (student) {
            sidebarAvatar.innerHTML = student.photo
                ? `<img src="${student.photo}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`
                : (student.nameKh ? student.nameKh.charAt(0) : "ស");
            sidebarAvatar.style.background = "linear-gradient(135deg, var(--success-color) 0%, var(--success-hover) 100%)";
            sidebarName.textContent = student.nameKh;
            sidebarRole.textContent = `សិស្ស / ${student.class}`;

            allNavs.forEach(nav => { if (nav) nav.style.display = "none"; });

            selectedStudentPortalId = studentId;
            renderStudentPortal(studentId);

            document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
            document.getElementById("portal-section").classList.add("active");
            document.getElementById("pageHeaderTitle").textContent = "គណនីផ្ទាល់ខ្លួនសិស្ស";
        } else {
            sidebarAvatar.textContent = "ស";
            sidebarAvatar.style.background = "linear-gradient(135deg, var(--success-color) 0%, var(--success-hover) 100%)";
            showPortalStudentSelector();
        }
    }
}

function showPortalStudentSelector() {
    const options = db.students.map(s => `<option value="${s.id}">${s.nameKh} (${s.class})</option>`).join("");

    const selectorOverlay = document.createElement("div");
    selectorOverlay.id = "portalStudentSelectorOverlay";
    selectorOverlay.className = "modal-overlay active";
    selectorOverlay.innerHTML = `
        <div class="modal-container" style="max-width: 400px; padding: 24px;">
            <h3 style="margin-bottom: 12px; font-weight:700;">ជ្រើសរើសសិស្ស/អាណាព្យាបាល</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 16px;">
                សូមជ្រើសរើសគណនីសិស្សានុសិស្ស ដើម្បីចូលមើលលទ្ធផលសិក្សាក្នុងសៀវភៅតាមដាន វត្តមាន និងថវិកាសមាគម។
            </p>
            <div class="form-group">
                <label>ឈ្មោះសិស្ស</label>
                <select id="portalStudentIdSelect" style="width: 100%; padding: 10px; border-radius: var(--border-radius-sm); border: 1px solid #cbd5e1;">
                    ${options}
                </select>
            </div>
            <div style="display:flex; justify-content:flex-end; gap:12px; margin-top: 20px;">
                <button class="btn btn-secondary" id="portalSelectCancel">បោះបង់</button>
                <button class="btn btn-primary" id="portalSelectConfirm">ចូលទៅកាន់ Portal</button>
            </div>
        </div>
    `;
    document.body.appendChild(selectorOverlay);

    document.getElementById("portalSelectCancel").addEventListener("click", () => {
        document.getElementById("roleSwitcher").value = "admin";
        switchRole("admin");
        selectorOverlay.remove();
    });

    document.getElementById("portalSelectConfirm").addEventListener("click", () => {
        const selectedId = document.getElementById("portalStudentIdSelect").value;
        selectedStudentPortalId = selectedId;

        const student = db.students.find(s => s.id === selectedId);

        document.getElementById("sidebarUserName").textContent = student.nameKh;
        document.getElementById("sidebarUserRole").textContent = `សិស្ស / ${student.class}`;

        const allNavs = [navDashboard, navStudents, navTeachers, navClasses, navAttendance, navGrades, navFinance];
        allNavs.forEach(nav => { if (nav) nav.style.display = "none"; });

        renderStudentPortal(selectedId);

        document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
        document.getElementById("portal-section").classList.add("active");
        document.getElementById("pageHeaderTitle").textContent = "គណនីផ្ទាល់ខ្លួនសិស្ស";

        selectorOverlay.remove();
        lucide.createIcons();
    });
}

// --- STATS & DASHBOARD ---
function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('km-KH', options);
    const dateDisp = document.getElementById("currentDateDisplay");
    if (dateDisp) dateDisp.textContent = dateStr;
}

function renderDashboard() {
    const totalStudents = db.students.length;
    const totalTeachers = db.teachers.length;
    const activeClasses = new Set(db.students.map(s => s.class)).size;

    // Inflow sum (State Budget allocation + Parent Contributions)
    const paidFunds = db.invoices.filter(inv => inv.status === "Paid");
    const totalInflow = paidFunds.reduce((sum, inv) => sum + inv.amount, 0);

    document.getElementById("statTotalStudents").textContent = totalStudents + " នាក់";
    document.getElementById("statTotalTeachers").textContent = totalTeachers + " នាក់";
    document.getElementById("statTotalClasses").textContent = activeClasses + " ថ្នាក់";
    document.getElementById("statTotalRevenue").textContent = "$" + totalInflow.toFixed(2);

    const revCard = document.getElementById("statRevenueCard");
    if (revCard) {
        revCard.style.display = currentRole === "teacher" ? "none" : "flex";
    }

    const logList = document.getElementById("recentActivitiesList");
    if (logList) {
        if (db.logs.length === 0) {
            logList.innerHTML = `<li class="activity-item" style="color:var(--text-secondary); font-size:0.85rem;">គ្មានកំណត់ត្រាសកម្មភាព</li>`;
        } else {
            logList.innerHTML = db.logs.map(log => {
                let dotColor = "blue";
                if (log.text.includes("លុប") || log.text.includes("ចំណាយ")) dotColor = "red";
                if (log.text.includes("បន្ថែម") || log.text.includes("បង់") || log.text.includes("រក្សាទុក")) dotColor = "green";
                if (log.text.includes("កែប្រែ") || log.text.includes("វត្តមាន")) dotColor = "orange";

                return `
                    <li class="activity-item">
                        <span class="act-dot ${dotColor}"></span>
                        <div class="act-content">
                            <span class="act-text">${log.text}</span>
                            <span class="act-time">${log.time}</span>
                        </div>
                    </li>
                `;
            }).join("");
        }
    }

    renderDashboardCharts();
}

function renderDashboardCharts() {
    const chartCanvas = document.getElementById("dashboardStatsChart");
    if (!chartCanvas) return;

    if (statsChart) statsChart.destroy();

    const months = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា"];
    const inflowData = [4500, 30, 45, 60, 90, 15, 30]; // Heavy govt seeding in Jan
    const attendanceRate = [98, 97, 96, 95, 96, 95, 96];

    const ctx = chartCanvas.getContext('2d');
    statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'ថវិកាសរុបទទួលបាន ($)',
                    data: inflowData,
                    backgroundColor: 'rgba(16, 185, 129, 0.75)', // Green for inflows
                    borderColor: 'rgb(16, 185, 129)',
                    borderWidth: 1,
                    yAxisID: 'y'
                },
                {
                    label: 'វត្តមានសិស្សានុសិស្ស (%)',
                    data: attendanceRate,
                    type: 'line',
                    fill: false,
                    borderColor: 'rgb(59, 130, 246)',
                    tension: 0.15,
                    borderWidth: 3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { font: { family: 'Kantumruy Pro' } }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 80,
                    max: 100,
                    grid: { drawOnChartArea: false },
                    ticks: { font: { family: 'Kantumruy Pro' } }
                },
                x: {
                    ticks: { font: { family: 'Kantumruy Pro' } }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { family: 'Kantumruy Pro', size: 11 } }
                }
            }
        }
    });
}

// --- STUDENT MANAGEMENT ---
function renderStudentsTable() {
    const searchVal = document.getElementById("studentSearch").value.toLowerCase();
    const classFilter = document.getElementById("studentClassFilter").value;
    const tbody = document.getElementById("studentsTableBody");
    if (!tbody) return;

    const filtered = db.students.filter(student => {
        const matchesSearch = student.id.toLowerCase().includes(searchVal) ||
            student.nameKh.toLowerCase().includes(searchVal) ||
            student.nameLat.toLowerCase().includes(searchVal) ||
            student.parentPhone.includes(searchVal);
        const matchesClass = classFilter === "" || student.class === classFilter;
        return matchesSearch && matchesClass;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:var(--text-secondary);">រកមិនឃើញទិន្នន័យសិស្សឡើយ (No students found)</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(student => {
        const actionButtons = currentRole === "admin"
            ? `
                <div class="action-btn-group">
                    <button class="icon-action-btn view" onclick="viewStudentDetails('${student.id}')" title="ព័ត៌មានលម្អិត">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="icon-action-btn edit" onclick="openEditStudentModal('${student.id}')" title="កែប្រែ">
                        <i data-lucide="edit-2"></i>
                    </button>
                    <button class="icon-action-btn delete" onclick="deleteStudent('${student.id}')" title="លុប">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            `
            : `
                <button class="btn btn-secondary" onclick="viewStudentDetails('${student.id}')">
                    <i data-lucide="eye"></i> មើល
                </button>
            `;

        const photoHtml = student.photo
            ? `<img src="${student.photo}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--border-color); flex-shrink: 0;">`
            : `<div class="avatar-small" style="width: 32px; height: 32px; border-radius: 50%; background-color: var(--primary-light); color: var(--primary-color); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; border: 1.5px solid var(--border-color); flex-shrink: 0;">${student.nameKh ? student.nameKh.charAt(0) : 'ស'}</div>`;

        return `
            <tr>
                <td><strong>${student.id}</strong></td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        ${photoHtml}
                        <span style="font-weight: 600;">${student.nameKh}</span>
                    </div>
                </td>
                <td style="font-family: var(--font-latin);">${student.nameLat}</td>
                <td>${student.gender}</td>
                <td>${student.dob}</td>
                <td><span class="status-badge paid" style="font-weight:700;">${student.class}</span></td>
                <td>${student.parentName}</td>
                <td>${student.parentPhone}</td>
                <td class="actions-column">${actionButtons}</td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

function openEditStudentModal(id) {
    const student = db.students.find(s => s.id === id);
    if (!student) return;

    document.getElementById("studentModalTitle").textContent = "កែប្រែព័ត៌មានសិស្ស";
    document.getElementById("studentEditIndex").value = student.id;
    document.getElementById("studID").value = student.id;
    document.getElementById("studID").disabled = true;
    document.getElementById("studClass").value = student.class;
    document.getElementById("studNameKh").value = student.nameKh;
    document.getElementById("studNameLat").value = student.nameLat;
    document.getElementById("studGender").value = student.gender;
    document.getElementById("studDob").value = student.dob;
    document.getElementById("studAddress").value = student.address;
    document.getElementById("studParent").value = student.parentName;
    document.getElementById("studPhone").value = student.parentPhone;

    // Populate extension fields
    document.getElementById("studFatherName").value = student.fatherName || "";
    document.getElementById("studMotherName").value = student.motherName || "";
    document.getElementById("studOccupation").value = student.parentOccupation || "";
    document.getElementById("studPassword").value = student.password || "123";

    // Populate Photo preview
    const preview = document.getElementById("studPhotoPreview");
    const placeholder = document.getElementById("studPhotoPlaceholder");
    const removeBtn = document.getElementById("removePhotoBtn");

    if (student.photo) {
        currentSelectedPhotoBase64 = student.photo;
        if (preview) {
            preview.src = student.photo;
            preview.style.display = "block";
        }
        if (placeholder) placeholder.style.display = "none";
        if (removeBtn) removeBtn.style.display = "inline-block";
    } else {
        currentSelectedPhotoBase64 = "";
        if (preview) {
            preview.src = "";
            preview.style.display = "none";
        }
        if (placeholder) placeholder.style.display = "block";
        if (removeBtn) removeBtn.style.display = "none";
    }

    document.getElementById("studentModal").classList.add("active");
}

function deleteStudent(id) {
    const student = db.students.find(s => s.id === id);
    if (!student) return;

    if (confirm(`តើអ្នកពិតជាចង់លុបសិស្សឈ្មោះ "${student.nameKh}" ចេញពីប្រព័ន្ធមែនទេ?`)) {
        db.students = db.students.filter(s => s.id !== id);
        db.grades = db.grades.filter(g => g.studentId !== id);
        db.invoices = db.invoices.filter(i => i.studentId !== id);

        db.addLog(`បានលុបគណនីសិស្សសាលារដ្ឋ៖ ${student.nameKh} (${student.id})`);
        db.save();
        renderStudentsTable();
    }
}

function viewStudentDetails(studentId) {
    selectedStudentPortalId = studentId;

    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));

    document.getElementById("portal-section").classList.add("active");
    document.getElementById("pageHeaderTitle").textContent = "ព័ត៌មានលម្អិតសិស្ស";

    renderStudentPortal(studentId);
    lucide.createIcons();
}

// --- TEACHER MANAGEMENT ---
function renderTeachersTable() {
    const searchVal = document.getElementById("teacherSearch").value.toLowerCase();
    const tbody = document.getElementById("teachersTableBody");
    if (!tbody) return;

    const filtered = db.teachers.filter(t => {
        return t.id.toLowerCase().includes(searchVal) ||
            t.name.toLowerCase().includes(searchVal) ||
            t.specialization.toLowerCase().includes(searchVal);
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-secondary);">រកមិនឃើញទិន្នន័យគ្រូបង្រៀនឡើយ (No teachers found)</td></tr>`;
        return;
    }

    const showSalary = currentRole === "admin";
    const headerSalary = document.querySelector("#teachersTable th:nth-child(6)");
    if (headerSalary) headerSalary.style.display = showSalary ? "table-cell" : "none";

    tbody.innerHTML = filtered.map(t => {
        const actionButtons = currentRole === "admin"
            ? `
                <div class="action-btn-group">
                    <button class="icon-action-btn edit" onclick="openEditTeacherModal('${t.id}')" title="កែប្រែ">
                        <i data-lucide="edit-2"></i>
                    </button>
                    <button class="icon-action-btn delete" onclick="deleteTeacher('${t.id}')" title="លុប">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            `
            : `<span style="font-size:0.8rem; color:var(--text-secondary);">គ្មានសិទ្ធិ</span>`;

        const salaryCell = showSalary ? `<td><strong>$${t.salary.toFixed(2)}</strong></td>` : "";

        return `
            <tr>
                <td><strong>${t.id}</strong></td>
                <td>${t.name}</td>
                <td>${t.gender}</td>
                <td><span class="status-badge paid" style="font-weight:700;">${t.specialization}</span></td>
                <td>${t.phone}</td>
                ${salaryCell}
                <td class="actions-column">${actionButtons}</td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

function openEditTeacherModal(id) {
    const teacher = db.teachers.find(t => t.id === id);
    if (!teacher) return;

    document.getElementById("teacherModalTitle").textContent = "កែប្រែព័ត៌មានគ្រូបង្រៀន";
    document.getElementById("teacherEditIndex").value = teacher.id;
    document.getElementById("teachID").value = teacher.id;
    document.getElementById("teachID").disabled = true;
    document.getElementById("teachGender").value = teacher.gender;
    document.getElementById("teachName").value = teacher.name;
    document.getElementById("teachSkill").value = teacher.specialization;
    document.getElementById("teachPhone").value = teacher.phone;
    document.getElementById("teachSalary").value = teacher.salary;
    document.getElementById("teachClass").value = teacher.assignedClass || "";
    document.getElementById("teachPassword").value = teacher.password || "123";

    document.getElementById("teacherModal").classList.add("active");
}

function deleteTeacher(id) {
    const teacher = db.teachers.find(t => t.id === id);
    if (!teacher) return;

    if (confirm(`តើអ្នកពិតជាចង់លុបគ្រូឈ្មោះ "${teacher.name}" ចេញពីប្រព័ន្ធមែនទេ?`)) {
        db.teachers = db.teachers.filter(t => t.id !== id);
        db.addLog(`បានលុបបុគ្គលិកគ្រូបង្រៀន៖ ${teacher.name} (${teacher.id})`);
        db.save();
        renderTeachersTable();
    }
}

// --- CLASSES & SUBJECTS ---
function renderClassesAndSubjects() {
    const tagsContainer = document.getElementById("subjectTagsContainer");
    if (tagsContainer) {
        tagsContainer.innerHTML = db.subjects.map(s => {
            return `
                <div class="subject-tag">
                    <i data-lucide="${s.icon || 'book'}"></i>
                    <span>${s.name} (${s.code})</span>
                </div>
            `;
        }).join("");
    }

    const pillsContainer = document.getElementById("classesPillsContainer");
    if (pillsContainer) {
        const classStats = {};
        db.students.forEach(s => {
            classStats[s.class] = (classStats[s.class] || 0) + 1;
        });

        const classNames = db.classes;
        pillsContainer.innerHTML = classNames.map(cName => {
            const count = classStats[cName] || 0;
            return `
                <div class="class-pill">
                    <span class="class-pill-name">ថ្នាក់រៀន ${cName}</span>
                    <span class="class-pill-meta">${count} នាក់ (សិស្សរដ្ឋសរុប)</span>
                </div>
            `;
        }).join("");
    }

    renderTimetableGrid();
}

function renderTimetableGrid() {
    const classSelector = document.getElementById("timetableClassSelector");
    const tbody = document.getElementById("timetableBody");
    if (!tbody || !classSelector) return;

    const className = classSelector.value;
    const schedule = db.timetables[className] || [];

    if (schedule.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6">គ្មានកាលវិភាគសម្រាប់ថ្នាក់នេះទេ</td></tr>`;
        return;
    }

    const subjectsList = db.subjects.map(s => s.name);

    tbody.innerHTML = schedule.map((row, rowIndex) => {
        const renderTimeCell = () => {
            if (isEditingTimetable && currentRole === "admin") {
                return `
                    <td>
                        <input type="text" class="timetable-time-input" data-row="${rowIndex}" value="${row.time}" style="width:100%; padding:6px; border-radius:4px; border:1px solid #cbd5e1; font-weight:600; font-family:inherit; font-size:0.9rem;">
                    </td>
                `;
            } else {
                return `<td><div class="slot-time" style="font-weight:600;">${row.time}</div></td>`;
            }
        };

        const renderCell = (dayKey, currentSubj) => {
            if (isEditingTimetable && currentRole === "admin") {
                const options = `<option value="">--</option>` + subjectsList.map(subj => {
                    const selectedAttr = (subj === currentSubj) ? "selected" : "";
                    return `<option value="${subj}" ${selectedAttr}>${subj}</option>`;
                }).join("");
                return `
                    <td>
                        <select class="timetable-cell-select" data-row="${rowIndex}" data-day="${dayKey}" style="width:100%; padding:4px; border-radius:4px; border:1px solid #cbd5e1; font-family:inherit;">
                            ${options}
                        </select>
                    </td>
                `;
            } else {
                if (!currentSubj) return `<td><div class="timetable-slot">--</div></td>`;
                const teacherObj = db.teachers.find(t => t.specialization === currentSubj) || { name: "គ្រូក្របខណ្ឌរដ្ឋ" };
                return `
                    <td>
                        <div class="timetable-slot filled">
                            <div class="slot-subject">${currentSubj}</div>
                            <div class="slot-teacher">${teacherObj.name}</div>
                        </div>
                    </td>
                `;
            }
        };

        return `
            <tr>
                ${renderTimeCell()}
                ${renderCell("Mon", row.Mon)}
                ${renderCell("Tue", row.Tue)}
                ${renderCell("Wed", row.Wed)}
                ${renderCell("Thu", row.Thu)}
                ${renderCell("Fri", row.Fri)}
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

// --- ATTENDANCE MANAGEMENT ---
function initAttendanceForm() {
    const loadBtn = document.getElementById("loadAttendanceBtn");
    if (loadBtn) {
        loadBtn.addEventListener("click", () => {
            const className = document.getElementById("attendanceClassSelect").value;
            const dateStr = document.getElementById("attendanceDateInput").value;
            if (!dateStr) {
                alert("សូមជ្រើសរើសកាលបរិច្ឆេទ!");
                return;
            }
            loadStudentAttendanceRecords(className, dateStr);
        });
    }

    const saveBtn = document.getElementById("saveAttendanceBtn");
    if (saveBtn) saveBtn.addEventListener("click", saveAttendanceData);
}

function loadStudentAttendanceRecords(className, dateStr) {
    const tbody = document.getElementById("attendanceTableBody");
    const container = document.getElementById("attendanceTableContainer");

    const classStudents = db.students.filter(s => s.class === className);
    if (classStudents.length === 0) {
        alert(`គ្មានសិស្សនៅក្នុងថ្នាក់ ${className} ទេ!`);
        container.classList.add("hidden");
        return;
    }

    document.getElementById("attendanceTableHeader").textContent = `បញ្ជីស្រង់អវត្តមានសិស្សថ្នាក់ទី ${className} (${dateStr})`;

    const recorderInput = document.getElementById("attendanceRecordedBy");
    if (!recorderInput.value) {
        recorderInput.value = currentRole === "teacher" ? "លោកគ្រូ វាសនា" : "គណៈគ្រប់គ្រង";
    }

    container.classList.remove("hidden");

    const dateLogs = db.attendance.filter(a => a.date === dateStr);
    const logMap = {};
    dateLogs.forEach(l => {
        logMap[l.studentId] = l.status;
        if (l.recordedBy) recorderInput.value = l.recordedBy;
    });

    tbody.innerHTML = classStudents.map(student => {
        const activeStatus = logMap[student.id] || "P";

        return `
            <tr data-student-id="${student.id}">
                <td><strong>${student.id}</strong></td>
                <td>${student.nameKh}</td>
                <td>${student.gender}</td>
                <td class="attendance-radio-cell p">
                    <input type="radio" name="att_${student.id}" value="P" ${activeStatus === 'P' ? 'checked' : ''}>
                </td>
                <td class="attendance-radio-cell e">
                    <input type="radio" name="att_${student.id}" value="E" ${activeStatus === 'E' ? 'checked' : ''}>
                </td>
                <td class="attendance-radio-cell a">
                    <input type="radio" name="att_${student.id}" value="A" ${activeStatus === 'A' ? 'checked' : ''}>
                </td>
            </tr>
        `;
    }).join("");

    updateAttendanceStats();
    tbody.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.addEventListener("change", updateAttendanceStats);
    });
}

function updateAttendanceStats() {
    const tbody = document.getElementById("attendanceTableBody");
    const summary = document.getElementById("attendanceStatsSummary");
    if (!tbody || !summary) return;

    let present = 0; let excused = 0; let absent = 0;

    tbody.querySelectorAll("tr").forEach(row => {
        const selected = row.querySelector("input[type='radio']:checked").value;
        if (selected === "P") present++;
        else if (selected === "E") excused++;
        else if (selected === "A") absent++;
    });

    summary.innerHTML = `
        <span class="att-summary-pill p">វត្តមាន៖ ${present} នាក់</span>
        <span class="att-summary-pill e">មានច្បាប់៖ ${excused} នាក់</span>
        <span class="att-summary-pill a">អត់ច្បាប់៖ ${absent} នាក់</span>
    `;
}

function saveAttendanceData() {
    const dateStr = document.getElementById("attendanceDateInput").value;
    const className = document.getElementById("attendanceClassSelect").value;
    const recorder = document.getElementById("attendanceRecordedBy").value || "ប្រព័ន្ធសាលារដ្ឋ";
    const tbody = document.getElementById("attendanceTableBody");

    if (!tbody || tbody.children.length === 0) return;

    if (currentRole === "student") {
        alert("គណនីសិស្សគ្មានសិទ្ធិស្រង់វត្តមានសាលារដ្ឋទេ!");
        return;
    }

    const classStudentsIds = db.students.filter(s => s.class === className).map(s => s.id);
    db.attendance = db.attendance.filter(a => !(a.date === dateStr && classStudentsIds.includes(a.studentId)));

    let newEntriesCount = 0;
    tbody.querySelectorAll("tr").forEach(row => {
        const studentId = row.getAttribute("data-student-id");
        const status = row.querySelector("input[type='radio']:checked").value;

        db.attendance.push({
            id: Date.now() + newEntriesCount++,
            studentId,
            date: dateStr,
            status,
            recordedBy: recorder
        });
    });

    db.addLog(`បានរក្សាទុកវត្តមានថ្នាក់ ${className} កាលបរិច្ឆេទ ${dateStr}`);
    db.save();

    alert("ទិន្នន័យអវត្តមានត្រូវបានរក្សាទុកក្នុងសៀវភៅតាមដានរួចរាល់!");
}

// --- GRADING & EXAMS ---
function initGradesSelectors() {
    const subjSelect = document.getElementById("gradesSubjectSelect");
    if (subjSelect) {
        subjSelect.innerHTML = db.subjects.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
    }
    const loadBtn = document.getElementById("loadGradesBtn");
    if (loadBtn) loadBtn.addEventListener("click", loadClassScoresTable);
}

function renderGradesTableHeader() {
    const thead = document.querySelector("#gradesTable thead");
    if (!thead) return;

    const subjectHeaders = db.subjects.map(s => `<th>${s.name} (${s.maxScore || 100})</th>`).join("");

    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>ឈ្មោះសិស្ស</th>
            <th>ភេទ</th>
            ${subjectHeaders}
            <th>មធ្យមភាគ (១០០)</th>
            <th>ចំណាត់ថ្នាក់</th>
            <th class="actions-column">សកម្មភាព</th>
        </tr>
    `;
}

function calculateClassRoster(studentList, month) {
    const roster = studentList.map(s => {
        const subjectScores = {};
        let totalScore = 0;
        let totalMaxScore = 0;

        db.subjects.forEach(sub => {
            let scoreVal = 0;
            if (month === "S1" || month === "S2" || month === "YEAR") {
                let targetMonths = ["10", "11", "12", "1"];
                if (month === "S2") targetMonths = ["2", "3", "4", "5", "6", "7", "8", "9"];
                if (month === "YEAR") targetMonths = ["10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

                const entries = db.grades.filter(g => g.studentId === s.id && g.subject === sub.name && targetMonths.includes(g.month));
                if (entries.length > 0) {
                    const totalSum = entries.reduce((sum, g) => {
                        const sVal = typeof g.score !== 'undefined' ? g.score : ((g.attendance || 0) + (g.quiz || 0) + (g.exam || 0));
                        return sum + sVal;
                    }, 0);
                    scoreVal = totalSum / entries.length;
                }
            } else {
                const entry = db.grades.find(g => g.studentId === s.id && g.subject === sub.name && g.month === month);
                if (entry) {
                    scoreVal = typeof entry.score !== 'undefined' ? entry.score : ((entry.attendance || 0) + (entry.quiz || 0) + (entry.exam || 0));
                }
            }
            subjectScores[sub.name] = scoreVal;
            totalScore += scoreVal;
            totalMaxScore += (sub.maxScore || 100);
        });

        const average = totalMaxScore > 0 ? (totalScore / totalMaxScore * 100) : 0;

        return {
            studentId: s.id,
            studentName: s.nameKh,
            gender: s.gender,
            subjectScores,
            average
        };
    });

    // Sort by average descending to determine rank
    roster.sort((a, b) => b.average - a.average);

    let curRank = 1;
    for (let i = 0; i < roster.length; i++) {
        if (i > 0 && roster[i].average < roster[i - 1].average) {
            curRank = i + 1;
        }
        roster[i].rank = curRank;
    }

    return roster;
}

function loadClassScoresTable() {
    const className = document.getElementById("gradesClassSelect").value;
    const month = document.getElementById("gradesMonthSelect").value;
    const tbody = document.getElementById("gradesTableBody");
    const container = document.getElementById("gradesTableContainer");

    if (!tbody) return;

    const classStudents = db.students.filter(s => s.class === className);
    if (classStudents.length === 0) {
        alert(`គ្មានសិស្សនៅក្នុងថ្នាក់ ${className} ទេ!`);
        container.classList.add("hidden");
        return;
    }

    document.getElementById("gradesTableHeader").textContent = `សៀវភៅបញ្ជីពិន្ទុរួមថ្នាក់ទី ${className} - (${getPeriodLabel(month)})`;
    container.classList.remove("hidden");

    renderGradesTableHeader();

    const roster = calculateClassRoster(classStudents, month);

    tbody.innerHTML = roster.map((studentRow) => {
        const actionButton = (currentRole === "admin" || currentRole === "teacher")
            ? `<button class="btn btn-secondary" onclick="openInputScoreModal('${studentRow.studentId}', '', '${month}')">
                    <i data-lucide="edit-3"></i> បញ្ចូលពិន្ទុ
               </button>`
            : `<button class="btn btn-secondary" onclick="viewPrintReportCard('${studentRow.studentId}', '${month}')">
                    <i data-lucide="printer"></i> បោះពុម្ភពិន្ទុ
               </button>`;

        const subjectCells = db.subjects.map(sub => {
            const score = studentRow.subjectScores[sub.name] || 0;
            return `<td>${score > 0 ? score.toFixed(1) : "--"}</td>`;
        }).join("");

        return `
            <tr>
                <td><strong>${studentRow.studentId}</strong></td>
                <td>${studentRow.studentName}</td>
                <td>${studentRow.gender}</td>
                ${subjectCells}
                <td><strong style="color:var(--primary-hover); font-size: 0.95rem;">${studentRow.average > 0 ? studentRow.average.toFixed(2) : "--"}</strong></td>
                <td><span class="status-badge paid" style="font-weight:700;">លេខ ${studentRow.rank}</span></td>
                <td class="actions-column">
                    <div style="display:flex; justify-content:flex-end; gap:8px;">
                        ${actionButton}
                        <button class="icon-action-btn view" onclick="viewPrintReportCard('${studentRow.studentId}', '${month}')" title="បោះពុម្ភព្រឹត្តិបត្រ">
                            <i data-lucide="printer"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

function getPeriodLabel(mVal) {
    if (mVal === "S1") return "ឆមាសទី ១";
    if (mVal === "S2") return "ឆមាសទី ២";
    if (mVal === "YEAR") return "ប្រចាំឆ្នាំសិក្សា";

    const monthNames = {
        "1": "មករា", "2": "កុម្ភៈ", "3": "មីនា", "4": "មេសា", "5": "ឧសភា", "6": "មិថុនា",
        "7": "កក្កដា", "8": "សីហា", "9": "កញ្ញា", "10": "តុលា", "11": "វិច្ឆិកា", "12": "ធ្នូ"
    };
    return "ប្រចាំខែ " + (monthNames[mVal] || mVal);
}

function calculateGradesAndRanks(studentList, subject, month) {
    const list = studentList.map(s => {
        let scoreVal = 0;

        if (month === "S1" || month === "S2" || month === "YEAR") {
            let targetMonths = ["10", "11", "12", "1"];
            if (month === "S2") targetMonths = ["2", "3", "4", "5", "6", "7", "8", "9"];
            if (month === "YEAR") targetMonths = ["10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

            const entries = db.grades.filter(g => g.studentId === s.id && g.subject === subject && targetMonths.includes(g.month));

            if (entries.length > 0) {
                const totalSum = entries.reduce((sum, g) => {
                    const sVal = typeof g.score !== 'undefined' ? g.score : ((g.attendance || 0) + (g.quiz || 0) + (g.exam || 0));
                    return sum + sVal;
                }, 0);
                scoreVal = totalSum / entries.length;
            }
        } else {
            const entry = db.grades.find(g => g.studentId === s.id && g.subject === subject && g.month === month);
            if (entry) {
                scoreVal = typeof entry.score !== 'undefined' ? entry.score : ((entry.attendance || 0) + (entry.quiz || 0) + (entry.exam || 0));
            }
        }

        return {
            studentId: s.id,
            studentName: s.nameKh,
            gender: s.gender,
            score: scoreVal.toFixed(1)
        };
    });

    list.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    let curRank = 1;
    for (let i = 0; i < list.length; i++) {
        if (i > 0 && parseFloat(list[i].score) < parseFloat(list[i - 1].score)) {
            curRank = i + 1;
        }
        list[i].rank = curRank;
    }

    return list;
}

function openInputScoreModal(studentId, subject, month) {
    const student = db.students.find(s => s.id === studentId);
    if (!student) return;

    document.getElementById("scoreStudentName").textContent = `${student.nameKh} (ថ្នាក់៖ ${student.class})`;
    document.getElementById("scoreMonthName").textContent = getPeriodLabel(month);

    const form = document.getElementById("scoreForm");
    form.setAttribute("data-student-id", studentId);
    form.setAttribute("data-month", month);

    const container = document.getElementById("scoreSubjectsContainer");
    if (container) {
        container.innerHTML = db.subjects.map(sub => {
            const entry = db.grades.find(g => g.studentId === studentId && g.subject === sub.name && g.month === month);
            let scoreVal = "";
            if (entry) {
                scoreVal = typeof entry.score !== 'undefined' ? entry.score : ((entry.attendance || 0) + (entry.quiz || 0) + (entry.exam || 0));
            }
            const maxVal = sub.maxScore || 100;
            return `
                <div class="form-group" style="margin-bottom: 8px;">
                    <label style="font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; display: block;">${sub.name} (0-${maxVal})</label>
                    <input type="number" class="subject-score-input" data-subject-name="${sub.name}" min="0" max="${maxVal}" step="0.1" value="${scoreVal}" placeholder="បញ្ចូលពិន្ទុ..." style="width: 100%; padding: 8px; border-radius: var(--border-radius-sm); border: 1px solid #cbd5e1;">
                </div>
            `;
        }).join("");
    }

    document.getElementById("scoreModal").classList.add("active");
}

// --- FINANCE MODULE ---
function renderFinanceSummary() {
    const totalReceivedVal = document.getElementById("finTotalReceived");
    const totalPendingVal = document.getElementById("finTotalPending");
    const totalExpensesVal = document.getElementById("finTotalExpenses");
    if (!totalReceivedVal) return;

    // Govt Allocation Inflows (indicated by PB prefix)
    const stateAllocations = db.invoices.filter(i => i.status === "Paid" && i.number.startsWith("PB"));
    const totalStatePB = stateAllocations.reduce((sum, i) => sum + i.amount, 0);

    // Parent association Contributions
    const paidContributions = db.invoices.filter(i => i.status === "Paid" && i.number.startsWith("REC"));
    const totalParentPaid = paidContributions.reduce((sum, i) => sum + i.amount, 0);

    const pendingContributions = db.invoices.filter(i => i.status === "Pending");
    const totalParentPending = pendingContributions.reduce((sum, i) => sum + i.amount, 0);

    const totalExpense = db.expenses.reduce((sum, e) => sum + e.amount, 0);

    totalReceivedVal.textContent = `$${totalStatePB.toFixed(2)}`;
    totalPendingVal.textContent = `$${totalParentPaid.toFixed(2)}`; // Show parent contribution paid
    totalExpensesVal.textContent = `$${totalExpense.toFixed(2)}`;

    document.getElementById("finPaidCount").textContent = `${stateAllocations.length} ការបែងចែកថវិការដ្ឋ`;
    document.getElementById("finPendingCount").textContent = `$${totalParentPending.toFixed(2)} រង់ចាំការរួមចំណែក`;
}

function renderInvoicesTable() {
    const searchVal = document.getElementById("invoiceSearch").value.toLowerCase();
    const filterStatus = document.getElementById("invoiceStatusFilter").value;
    const tbody = document.getElementById("invoicesTableBody");
    if (!tbody) return;

    const filtered = db.invoices.filter(inv => {
        let studentName = "";
        let studentClass = "--";

        if (inv.studentId === "STATE_BUDGET") {
            studentName = "ក្រសួងអប់រំ (ថវិកា PB)";
            studentClass = "រដ្ឋបាល";
        } else {
            const student = db.students.find(s => s.id === inv.studentId);
            if (student) {
                studentName = student.nameKh;
                studentClass = student.class;
            }
        }

        const matchesSearch = inv.number.toLowerCase().includes(searchVal) ||
            inv.studentId.toLowerCase().includes(searchVal) ||
            studentName.toLowerCase().includes(searchVal);
        const matchesStatus = filterStatus === "" || inv.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-secondary);">រកមិនឃើញទិន្នន័យហិរញ្ញវត្ថុឡើយ</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(inv => {
        let studentName = "ក្រសួងអប់រំ (ថវិកា PB)";
        let studentClass = "រដ្ឋបាល";

        if (inv.studentId !== "STATE_BUDGET") {
            const student = db.students.find(s => s.id === inv.studentId);
            if (student) {
                studentName = student.nameKh;
                studentClass = student.class;
            } else {
                studentName = "គណនីសិស្សដែលបានលុប";
            }
        }

        const isGov = inv.number.startsWith("PB");
        const statusClass = inv.status === "Paid" ? "paid" : "pending";
        const statusText = isGov ? "ថវិការដ្ឋ (Received)" : (inv.status === "Paid" ? "បង់រួច (Paid)" : "មិនទាន់រួមចំណែក (Pending)");

        let actionBtn = "";
        if (currentRole === "admin") {
            let payBtn = "";
            if (inv.status === "Pending") {
                payBtn = `
                    <button class="btn btn-success" onclick="markInvoiceAsPaid('${inv.number}')" style="padding: 4px 8px; font-size: 0.75rem; margin-right: 4px;">
                        <i data-lucide="check"></i> ទទួលថវិកា
                    </button>
                `;
            }
            actionBtn = `
                <div style="display: flex; gap: 4px; justify-content: flex-end; align-items: center;">
                    ${payBtn}
                    <button class="btn btn-secondary" onclick="openEditInvoiceModal('${inv.number}')" style="padding: 4px 8px; font-size: 0.75rem; background-color: var(--primary-color); border-color: var(--primary-hover); color: white; display: flex; align-items: center; gap: 4px;">
                        <i data-lucide="edit" style="width: 12px; height: 12px;"></i> កែសម្រួល
                    </button>
                    <button class="btn btn-danger" onclick="deleteInvoice('${inv.number}')" style="padding: 4px 8px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;">
                        <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i> លុប
                    </button>
                </div>
            `;
        } else {
            actionBtn = inv.status === "Paid"
                ? `<span style="font-size:0.85rem; color:var(--text-secondary);"><i data-lucide="check-circle" style="width:14px;color:var(--success-color);"></i> រួចរាល់</span>`
                : `<span style="font-size:0.85rem; color:var(--text-secondary);">រង់ចាំ</span>`;
        }

        return `
            <tr>
                <td><strong>${inv.number}</strong></td>
                <td>${inv.studentId}</td>
                <td>${studentName}</td>
                <td><span class="status-badge paid" style="font-weight:700;">${studentClass}</span></td>
                <td><strong>$${inv.amount.toFixed(2)}</strong></td>
                <td>${inv.paidDate || "--"}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td class="actions-column">${actionBtn}</td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

// --- EDIT/DELETE INVOICES ---
function openEditInvoiceModal(number) {
    const inv = db.invoices.find(i => i.number === number);
    if (!inv) return;

    const titleEl = document.getElementById("invoiceModalTitle");
    if (titleEl) titleEl.textContent = "កែសម្រួលព័ត៌មានថវិកា/វិក្កយបត្រ";

    document.getElementById("invoiceEditIndex").value = inv.number;

    const studIdInput = document.getElementById("invStudentID");
    const helperText = document.getElementById("invStudentNameLabel");

    studIdInput.value = inv.studentId;
    studIdInput.disabled = (inv.studentId === "STATE_BUDGET");

    if (inv.studentId === "STATE_BUDGET") {
        helperText.textContent = "ក្រសួងអប់រំ (ថវិកា PB)";
        helperText.style.color = "var(--success-color)";
    } else {
        const student = db.students.find(s => s.id === inv.studentId);
        if (student) {
            helperText.textContent = `ឈ្មោះសិស្ស៖ ${student.nameKh} (ថ្នាក់៖ ${student.class})`;
            helperText.style.color = "var(--success-color)";
        } else {
            helperText.textContent = "រកមិនឃើញគណនីសិស្ស!";
            helperText.style.color = "var(--danger-color)";
        }
    }

    document.getElementById("invNumber").value = inv.number;
    document.getElementById("invNumber").disabled = true;

    document.getElementById("invAmount").value = inv.amount;
    document.getElementById("invStatus").value = inv.status;
    document.getElementById("invDate").value = inv.paidDate || "";

    document.getElementById("invoiceModal").classList.add("active");
}

function deleteInvoice(number) {
    if (confirm(`តើអ្នកពិតជាចង់លុបព័ត៌មានថវិកា/វិក្កយបត្រ ${number} នេះមែនទេ?`)) {
        const idx = db.invoices.findIndex(i => i.number === number);
        if (idx !== -1) {
            db.invoices.splice(idx, 1);
            db.addLog(`បានលុបព័ត៌មានថវិកា៖ ${number}`);
            db.save();
            renderFinanceSummary();
            renderInvoicesTable();
        }
    }
}

// --- SCHOOL EXPENSES TABLE RENDERING ---
function renderExpensesTable() {
    const searchVal = document.getElementById("expenseSearch").value.toLowerCase();
    const filterChapter = document.getElementById("expenseChapterFilter").value;
    const tbody = document.getElementById("expensesTableBody");
    if (!tbody) return;

    const filtered = db.expenses.filter(exp => {
        const matchesSearch = exp.description.toLowerCase().includes(searchVal) ||
            exp.chapter.toLowerCase().includes(searchVal);
        const matchesChapter = filterChapter === "" || exp.chapter === filterChapter;
        return matchesSearch && matchesChapter;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-secondary);">រកមិនឃើញទិន្នន័យចំណាយឡើយ</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map(exp => {
        const actualIndex = db.expenses.indexOf(exp);

        let actionButtons = "";
        if (currentRole === "admin") {
            actionButtons = `
                <div style="display: flex; gap: 4px; justify-content: flex-end; align-items: center;">
                    <button class="btn btn-secondary" onclick="openEditExpenseModal(${actualIndex})" style="padding: 4px 8px; font-size: 0.75rem; background-color: var(--primary-color); border-color: var(--primary-hover); color: white; display: flex; align-items: center; gap: 4px;">
                        <i data-lucide="edit" style="width: 12px; height: 12px;"></i> កែសម្រួល
                    </button>
                    <button class="btn btn-danger" onclick="deleteExpense(${actualIndex})" style="padding: 4px 8px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px;">
                        <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i> លុប
                    </button>
                </div>
            `;
        }

        return `
            <tr>
                <td>${exp.date}</td>
                <td><span class="status-badge pending" style="font-weight:700;">${exp.chapter}</span></td>
                <td>${exp.description}</td>
                <td><strong>$${exp.amount.toFixed(2)}</strong></td>
                <td class="actions-column">${actionButtons}</td>
            </tr>
        `;
    }).join("");

    lucide.createIcons();
}

// --- EDIT/DELETE EXPENSES ---
function openEditExpenseModal(index) {
    const exp = db.expenses[index];
    if (!exp) return;

    const titleEl = document.getElementById("expenseModalTitle");
    if (titleEl) titleEl.textContent = "កែសម្រួលការចំណាយសាលា";

    document.getElementById("expenseEditIndex").value = index;

    document.getElementById("expDescription").value = exp.description;
    document.getElementById("expChapter").value = exp.chapter;
    document.getElementById("expAmount").value = exp.amount;
    document.getElementById("expDate").value = exp.date;

    document.getElementById("expenseModal").classList.add("active");
}

function deleteExpense(index) {
    if (confirm("តើអ្នកពិតជាចង់លុបការចំណាយនេះមែនទេ?")) {
        if (index >= 0 && index < db.expenses.length) {
            const exp = db.expenses[index];
            db.expenses.splice(index, 1);
            db.addLog(`បានលុបការចំណាយ៖ ${exp.description}`);
            db.save();
            renderFinanceSummary();
            renderExpensesTable();
        }
    }
}

// --- FINANCE TAB NAVIGATION CONTROLLER ---
function setupFinanceTabs() {
    const tabInvoicesBtn = document.getElementById("tabInvoicesBtn");
    const tabExpensesBtn = document.getElementById("tabExpensesBtn");
    const financeInvoicesTabContent = document.getElementById("financeInvoicesTabContent");
    const financeExpensesTabContent = document.getElementById("financeExpensesTabContent");

    if (tabInvoicesBtn && tabExpensesBtn && financeInvoicesTabContent && financeExpensesTabContent) {
        tabInvoicesBtn.addEventListener("click", () => {
            tabInvoicesBtn.style.color = "var(--primary-color)";
            tabInvoicesBtn.style.borderBottomColor = "var(--primary-color)";
            tabExpensesBtn.style.color = "var(--text-secondary)";
            tabExpensesBtn.style.borderBottomColor = "transparent";

            financeInvoicesTabContent.classList.remove("hidden");
            financeExpensesTabContent.classList.add("hidden");

            renderInvoicesTable();
        });

        tabExpensesBtn.addEventListener("click", () => {
            tabExpensesBtn.style.color = "var(--primary-color)";
            tabExpensesBtn.style.borderBottomColor = "var(--primary-color)";
            tabInvoicesBtn.style.color = "var(--text-secondary)";
            tabInvoicesBtn.style.borderBottomColor = "transparent";

            financeExpensesTabContent.classList.remove("hidden");
            financeInvoicesTabContent.classList.add("hidden");

            renderExpensesTable();
        });
    }
}

function markInvoiceAsPaid(invoiceNum) {
    const invoice = db.invoices.find(i => i.number === invoiceNum);
    if (!invoice) return;

    if (confirm(`តើអ្នកពិតជាចង់កត់ត្រាការរួមចំណែកថវិកា $${invoice.amount} សម្រាប់វិក្កយបត្រ ${invoiceNum} មែនទេ?`)) {
        invoice.status = "Paid";
        const today = new Date();
        invoice.paidDate = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0');

        const student = db.students.find(s => s.id === invoice.studentId) || { nameKh: "សមាគមមាតាបិតា" };
        db.addLog(`បានទទួលថវិការួមចំណែកសមាគមពី៖ ${student.nameKh} ចំនួន $${invoice.amount}`);
        db.save();

        renderFinanceSummary();
        renderInvoicesTable();
    }
}

// --- STUDENT PORTAL ---
function renderStudentPortal(studentId) {
    const student = db.students.find(s => s.id === studentId);
    if (!student) return;

    const portalAvatar = document.getElementById("portalAvatar");
    if (portalAvatar) {
        if (student.photo) {
            portalAvatar.innerHTML = `<img src="${student.photo}" style="width: 100%; height: 100%; object-fit: cover;">`;
        } else {
            portalAvatar.innerHTML = student.nameKh ? student.nameKh.charAt(0) : 'ស';
        }
    }

    document.getElementById("portalStudentName").textContent = student.nameKh;
    document.getElementById("portalStudentClass").textContent = `ថ្នាក់៖ ${student.class}`;
    document.getElementById("portalStudentID").textContent = student.id;
    document.getElementById("portalParentName").textContent = student.parentName;
    document.getElementById("portalParentPhone").textContent = student.parentPhone;

    // Populate extension fields in portal details
    document.getElementById("portalFatherName").textContent = student.fatherName || "--";
    document.getElementById("portalMotherName").textContent = student.motherName || "--";
    document.getElementById("portalParentOccupation").textContent = student.parentOccupation || "--";

    const gradesBody = document.getElementById("portalGradesTableBody");
    if (gradesBody) {
        gradesBody.innerHTML = db.subjects.map(sub => {
            const s1Obj = calculateGradesAndRanks([student], sub.name, "S1")[0];
            const s2Obj = calculateGradesAndRanks([student], sub.name, "S2")[0];

            const s1Avg = parseFloat(s1Obj.average) || 0;
            const s2Avg = parseFloat(s2Obj.average) || 0;
            const yearly = s1Avg > 0 && s2Avg > 0 ? ((s1Avg + s2Avg) / 2).toFixed(2) : (s1Avg || s2Avg || 0).toFixed(2);

            return `
                <tr>
                    <td><strong>${sub.name}</strong></td>
                    <td>${s1Avg > 0 ? s1Avg.toFixed(2) : '--'}</td>
                    <td>${s2Avg > 0 ? s2Avg.toFixed(2) : '--'}</td>
                    <td><strong style="color:var(--primary-hover);">${parseFloat(yearly) > 0 ? yearly : '--'}</strong></td>
                </tr>
            `;
        }).join("");
    }

    const studentAttendance = db.attendance.filter(a => a.studentId === studentId);
    const pCount = studentAttendance.filter(a => a.status === "P").length;
    const eCount = studentAttendance.filter(a => a.status === "E").length;
    const aCount = studentAttendance.filter(a => a.status === "A").length;

    document.getElementById("portalAttendancePresent").textContent = pCount;
    document.getElementById("portalAttendanceExcused").textContent = eCount;
    document.getElementById("portalAttendanceAbsent").textContent = aCount;

    const attList = document.getElementById("portalAttendanceTableBody");
    if (attList) {
        if (studentAttendance.length === 0) {
            attList.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-secondary);">គ្មានកំណត់ត្រាវត្តមានចូលរៀន</td></tr>`;
        } else {
            const sortedAtt = [...studentAttendance].sort((a, b) => new Date(b.date) - new Date(a.date));
            attList.innerHTML = sortedAtt.map(att => {
                let statusClass = "present"; let statusText = "វត្តមាន (P)";
                if (att.status === "E") { statusClass = "excused"; statusText = "មានច្បាប់ (E)"; }
                else if (att.status === "A") { statusClass = "អវត្តមាន (A)"; statusText = "អត់ច្បាប់ (A)"; }

                return `
                    <tr>
                        <td>${att.date}</td>
                        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                        <td>លោកគ្រូ-អ្នកគ្រូ៖ ${att.recordedBy}</td>
                    </tr>
                `;
            }).join("");
        }
    }

    const studentInvoices = db.invoices.filter(i => i.studentId === studentId);
    const invList = document.getElementById("portalInvoiceTableBody");
    if (invList) {
        if (studentInvoices.length === 0) {
            invList.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-secondary);">គ្មានវិក្កយបត្រការរួមចំណែកឡើយ</td></tr>`;
        } else {
            invList.innerHTML = studentInvoices.map(inv => {
                const statusClass = inv.status === "Paid" ? "paid" : "pending";
                const statusText = inv.status === "Paid" ? "រួមចំណែករួច (Paid)" : "រង់ចាំការបង់ (Pending)";
                return `
                    <tr>
                        <td><strong>${inv.number}</strong></td>
                        <td><strong>$${inv.amount.toFixed(2)}</strong></td>
                        <td>${inv.paidDate || "--"}</td>
                        <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    </tr>
                `;
            }).join("");
        }
    }

    // Render initial monthly grades breakdown
    const portalMonthSelect = document.getElementById("portalMonthSelector");
    const currentMonth = portalMonthSelect ? portalMonthSelect.value : "10";
    renderStudentMonthlyPortalGrades(studentId, currentMonth);
}

// --- RENDER MONTHLY GRADES IN STUDENT PORTAL ---
function renderStudentMonthlyPortalGrades(studentId, selectedMonth) {
    const student = db.students.find(s => s.id === studentId);
    if (!student) return;

    const tbody = document.getElementById("portalMonthlyGradesTableBody");
    if (!tbody) return;

    const classStudents = db.students.filter(s => s.class === student.class);

    tbody.innerHTML = db.subjects.map(sub => {
        let scoreVal = 0, rank = "--";

        const stats = calculateGradesAndRanks(classStudents, sub.name, selectedMonth);
        const stObj = stats.find(item => item.studentId === studentId);

        if (stObj) {
            scoreVal = parseFloat(stObj.score) || 0;
            rank = `លេខ ${stObj.rank}`;
        }

        const maxScore = sub.maxScore || 100;
        const percentage = maxScore > 0 ? (scoreVal / maxScore * 100) : 0;

        let gradeResult = "--";
        if (scoreVal > 0) {
            if (percentage >= 90) gradeResult = "A (ល្អប្រសើរ)";
            else if (percentage >= 80) gradeResult = "B (ល្អណាស់)";
            else if (percentage >= 70) gradeResult = "C (ល្អ)";
            else if (percentage >= 60) gradeResult = "D (មធ្យម)";
            else if (percentage >= 50) gradeResult = "E (ខ្សោយ)";
            else gradeResult = "F (ធ្លាក់)";
        }

        const displayVal = (val) => val > 0 ? val.toFixed(1) : "--";

        return `
            <tr>
                <td><strong>${sub.name} (${maxScore})</strong></td>
                <td><strong style="color:var(--primary-hover);">${displayVal(scoreVal)}</strong></td>
                <td><span class="status-badge paid" style="font-weight:700;">${rank}</span></td>
                <td><strong>${gradeResult}</strong></td>
            </tr>
        `;
    }).join("");
}

// --- PRINT REPORT CARD ---
// --- KHMER DATE & GRADING HELPER FUNCTIONS ---
function toKhmerDigits(num) {
    const khDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return String(num).split("").map(d => {
        return isNaN(parseInt(d)) ? d : khDigits[parseInt(d)];
    }).join("");
}

function getKhmerLunarDateString(solarDate) {
    const daysOfWeek = ["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"];
    const khmerMonths = ["មិគសិរ", "បុស្ស", "មាឃ", "ផល្គុន", "ចេត្រ", "ពិសាខ", "ជេស្ឋ", "អាសាឍ", "ស្រាពណ៍", "ភទ្របទ", "អស្សុជ", "កត្តិក"];

    const dayOfWeek = daysOfWeek[solarDate.getDay()];
    const lunarMonth = khmerMonths[solarDate.getMonth()];

    const dayOfMonth = solarDate.getDate();
    const isKert = dayOfMonth % 2 !== 0;
    const lunarDay = Math.ceil(dayOfMonth / 2);
    const dayType = isKert ? "កើត" : "រនោច";

    const animals = ["ជូត", "ឆ្លូវ", "ខាល", "ថោះ", "រោង", "ម្សាញ់", "មមី", "មមែ", "វក", "រកា", "ចរ", "កុរ"];
    const animal = animals[(solarDate.getFullYear() - 4) % 12];
    // Buddhist Era
    const beYear = solarDate.getFullYear() + 544;
    return `ថ្ងៃ${dayOfWeek} ${toKhmerDigits(lunarDay)}${dayType} ខែ${lunarMonth} ឆ្នាំ${animal} អដ្ឋស័ក ព.ស.${toKhmerDigits(beYear)}`;
}

function getKhmerSolarDateString(solarDate) {
    const months = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
    const day = solarDate.getDate();
    const month = months[solarDate.getMonth()];
    const year = solarDate.getFullYear();
    return `វិ.ព្រះនរោត្តមសីហមុនី ត្រូវនឹងថ្ងៃទី${toKhmerDigits(day)} ខែ${month} ឆ្នាំ${toKhmerDigits(year)}`;
}

function getKhmerGradeLetter(percentage) {
    if (percentage >= 85) return "ល្អប្រសើរ";
    if (percentage >= 75) return "ល្អ";
    if (percentage >= 65) return "ល្អបង្គួរ";
    if (percentage >= 50) return "មធ្យម";
    if (percentage >= 35) return "ខ្សោយ";
    return "ធ្លាក់";
}

function viewPrintReportCard(studentId, month) {
    const student = db.students.find(s => s.id === studentId);
    if (!student) return;

    // Update Month Highlight
    document.getElementById("printReportMonth").textContent = getPeriodLabel(month);

    // Clean and convert Student ID to Khmer Digits
    const cleanId = student.id.replace(/\D/g, "");
    document.getElementById("printStudentID").textContent = toKhmerDigits(cleanId || student.id);
    document.getElementById("printStudentNameKh").textContent = student.nameKh;
    document.getElementById("printStudentGender").textContent = student.gender;
    document.getElementById("printStudentDob").textContent = toKhmerDigits(student.dob);
    document.getElementById("printStudentPob").textContent = student.address || "ភ្នំពេញ";
    document.getElementById("printStudentAddress").textContent = student.address || "ភ្នំពេញ";

    // Father's details
    document.getElementById("printStudentFatherName").textContent = student.fatherName || "សុខ គឹមហុង";
    document.getElementById("printStudentFatherOccupation").textContent = student.parentOccupation || "អាជីវករ";

    // Mother's details
    document.getElementById("printStudentMotherName").textContent = student.motherName || "គឹម សុម៉ាលី";
    document.getElementById("printStudentMotherOccupation").textContent = student.parentOccupation || "អាជីវករ";

    // Phone
    document.getElementById("printStudentPhone").textContent = student.parentPhone ? toKhmerDigits(student.parentPhone) : "";

    // Base64 Student Photo Check
    const printPhotoImg = document.getElementById("printStudentPhoto");
    const printPhotoPlaceholder = document.getElementById("printStudentPhotoPlaceholder");
    if (student.photo) {
        printPhotoImg.src = student.photo;
        printPhotoImg.style.display = "block";
        if (printPhotoPlaceholder) printPhotoPlaceholder.style.display = "none";
    } else {
        printPhotoImg.src = "";
        printPhotoImg.style.display = "none";
        if (printPhotoPlaceholder) printPhotoPlaceholder.style.display = "block";
    }

    // Attendance statistics
    const studentAttendance = db.attendance.filter(a => a.studentId === studentId);
    const excusedCount = studentAttendance.filter(a => a.status === "E").length;
    const absentCount = studentAttendance.filter(a => a.status === "A").length;
    const totalAbsences = excusedCount + absentCount;

    document.getElementById("printAttTotal").textContent = toKhmerDigits(totalAbsences);
    document.getElementById("printAttExcused").textContent = toKhmerDigits(excusedCount);
    document.getElementById("printAttAbsent").textContent = toKhmerDigits(absentCount);

    // Format dynamic dates
    const classSettings = db.reportCardSettings ? db.reportCardSettings[student.class] : null;
    const currentDate = new Date();
    const khmerLunar = (classSettings && classSettings.khmerDate) ? classSettings.khmerDate : getKhmerLunarDateString(currentDate);
    const khmerSolar = (classSettings && classSettings.solarDate) ? classSettings.solarDate : getKhmerSolarDateString(currentDate);

    document.getElementById("printDateKhmerLeft").textContent = khmerLunar;
    document.getElementById("printDateSolarLeft").textContent = khmerSolar;
    document.getElementById("printDateKhmerRight").textContent = khmerLunar;
    document.getElementById("printDateSolarRight").textContent = khmerSolar;

    // Subject Grades Table
    const classStudents = db.students.filter(s => s.class === student.class);
    const tbody = document.getElementById("printReportTableBody");
    let totalScoreSum = 0;
    let totalMaxScoreSum = 0;

    let tableHtml = db.subjects.map((sub, index) => {
        let scoreVal = 0;
        const stats = calculateGradesAndRanks(classStudents, sub.name, month);
        const stObj = stats.find(item => item.studentId === studentId);
        if (stObj) {
            scoreVal = parseFloat(stObj.score) || 0;
            totalScoreSum += scoreVal;
        }

        const maxScore = sub.maxScore || 100;
        totalMaxScoreSum += maxScore;
        const percentage = maxScore > 0 ? (scoreVal / maxScore * 100) : 0;
        const gradeResult = scoreVal > 0 ? getKhmerGradeLetter(percentage) : "--";

        return `
            <tr>
                <td><strong>${index + 1}</strong></td>
                <td class="subject-name-cell">${sub.name}</td>
                <td class="max-score-cell"><strong>${maxScore}</strong></td>
                <td class="bold-blue"><strong>${scoreVal > 0 ? scoreVal.toFixed(1) : ''}</strong></td>
                <td class="bold-blue"><strong>${gradeResult}</strong></td>
                <td></td>
            </tr>
        `;
    }).join("");

    // Pad to exactly 17 rows
    const targetRowCount = 17;
    for (let index = db.subjects.length; index < targetRowCount; index++) {
        tableHtml += `
            <tr>
                <td><strong>${index + 1}</strong></td>
                <td></td>
                <td class="max-score-cell"></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
    }

    tbody.innerHTML = tableHtml;

    // Calculate final scaled average
    const average = totalMaxScoreSum > 0 ? (totalScoreSum / totalMaxScoreSum * 100) : 0;

    document.getElementById("printTotalScore").textContent = totalScoreSum.toFixed(1);
    document.getElementById("printAverageScore").textContent = average.toFixed(2);
    document.getElementById("printStudentOverallGrade").textContent = getKhmerGradeLetter(average);

    // Ranks
    const classAverages = classStudents.map(s => {
        let sum = 0; let totalMax = 0;
        db.subjects.forEach(sub => {
            const stats = calculateGradesAndRanks(classStudents, sub.name, month);
            const stObj = stats.find(item => item.studentId === s.id);
            if (stObj) {
                sum += parseFloat(stObj.score) || 0;
            }
            totalMax += (sub.maxScore || 100);
        });
        return { studentId: s.id, average: totalMax > 0 ? (sum / totalMax * 100) : 0 };
    });

    classAverages.sort((a, b) => b.average - a.average);
    let classRank = 1;
    for (let i = 0; i < classAverages.length; i++) {
        if (i > 0 && classAverages[i].average < classAverages[i - 1].average) classRank = i + 1;
        if (classAverages[i].studentId === studentId) break;
    }

    document.getElementById("printStudentRank").textContent = toKhmerDigits(classRank);

    // Advisor Details
    let teacherName = "";
    let teacherPhone = "";
    if (classSettings && classSettings.teacherName) {
        teacherName = classSettings.teacherName;
        teacherPhone = classSettings.teacherPhone || "";
    } else {
        const classTeacher = db.teachers.find(t => t.assignedClass === student.class);
        if (classTeacher) {
            teacherName = classTeacher.name;
            teacherPhone = classTeacher.phone || "";
        } else {
            const fallbackTeacher = db.teachers.find(t => t.specialization === "គណិតវិទ្យា") || { name: "ជុំ សុជាតិ", phone: "0967788122" };
            teacherName = fallbackTeacher.name;
            teacherPhone = fallbackTeacher.phone || "";
        }
    }
    document.getElementById("printTeacherName").textContent = `${teacherName} ${teacherPhone ? toKhmerDigits(teacherPhone) : ""}`;

    document.getElementById("reportCardModal").classList.add("active");
    lucide.createIcons();
}

// --- PRINT GRADES ROSTER SHEET ---
function viewPrintGradesRoster(className, subject, month) {
    const classStudents = db.students.filter(s => s.class === className);
    if (classStudents.length === 0) {
        alert("គ្មានសិស្សនៅក្នុងថ្នាក់នេះដើម្បីបោះពុម្ភទេ!");
        return;
    }

    document.getElementById("printRosterSemester").textContent = getPeriodLabel(month);
    document.getElementById("printRosterClass").textContent = `ថ្នាក់ទី ${className}`;
    document.getElementById("printRosterSubject").textContent = "គ្រប់មុខវិជ្ជា (All Subjects)";

    const classSettings = db.reportCardSettings ? db.reportCardSettings[className] : null;
    let teacherName = "គ្រូបន្ទុកថ្នាក់";
    if (classSettings && classSettings.teacherName) {
        teacherName = classSettings.teacherName;
    } else {
        const classTeacher = db.teachers.find(t => t.assignedClass === className);
        if (classTeacher) {
            teacherName = classTeacher.name;
        }
    }
    document.getElementById("printRosterTeacher").textContent = teacherName;

    let dateStr = "";
    if (classSettings && classSettings.solarDate) {
        dateStr = classSettings.solarDate;
    } else {
        const today = new Date();
        dateStr = today.toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    document.getElementById("printRosterDate").textContent = dateStr;

    // Set print table headers dynamically
    const tableHeaderRow = document.querySelector("#gradesRosterPrintModal table thead");
    if (tableHeaderRow) {
        const subjectHeaders = db.subjects.map(s => `<th>${s.name}</th>`).join("");
        tableHeaderRow.innerHTML = `
            <tr>
                <th>ល.រ</th>
                <th>អត្តសញ្ញាណ (ID)</th>
                <th>នាមត្រកូល និងនាមខ្លួន</th>
                <th>ភេទ</th>
                ${subjectHeaders}
                <th>មធ្យមភាគ</th>
                <th>ចំណាត់ថ្នាក់</th>
            </tr>
        `;
    }

    const roster = calculateClassRoster(classStudents, month);
    const tbody = document.getElementById("printRosterTableBody");

    tbody.innerHTML = roster.map((studentRow, index) => {
        const subjectCells = db.subjects.map(sub => {
            const score = studentRow.subjectScores[sub.name] || 0;
            return `<td>${score > 0 ? score.toFixed(1) : "--"}</td>`;
        }).join("");

        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${studentRow.studentId}</strong></td>
                <td>${studentRow.studentName}</td>
                <td>${studentRow.gender}</td>
                ${subjectCells}
                <td><strong>${studentRow.average > 0 ? studentRow.average.toFixed(2) : "--"}</strong></td>
                <td><strong>លេខ ${studentRow.rank}</strong></td>
            </tr>
        `;
    }).join("");

    document.getElementById("gradesRosterPrintModal").classList.add("active");
}

// --- FORMS SUBMISSIONS CONTROL ---
function initForms() {
    const studForm = document.getElementById("studentForm");
    if (studForm) {
        studForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = document.getElementById("studentEditIndex").value;
            const newStudent = {
                id: document.getElementById("studID").value.trim(),
                class: document.getElementById("studClass").value,
                nameKh: document.getElementById("studNameKh").value.trim(),
                nameLat: document.getElementById("studNameLat").value.trim().toUpperCase(),
                gender: document.getElementById("studGender").value,
                dob: document.getElementById("studDob").value,
                address: document.getElementById("studAddress").value.trim(),
                parentName: document.getElementById("studParent").value.trim(),
                parentPhone: document.getElementById("studPhone").value.trim(),
                photo: currentSelectedPhotoBase64,
                fatherName: document.getElementById("studFatherName").value.trim(),
                motherName: document.getElementById("studMotherName").value.trim(),
                parentOccupation: document.getElementById("studOccupation").value.trim(),
                password: document.getElementById("studPassword").value.trim()
            };

            if (editId) {
                const idx = db.students.findIndex(s => s.id === editId);
                if (idx !== -1) {
                    db.students[idx] = newStudent;
                    db.addLog(`បានកែប្រែព័ត៌មានសិស្ស៖ ${newStudent.nameKh} (${newStudent.id})`);
                }
            } else {
                const exists = db.students.some(s => s.id === newStudent.id);
                if (exists) {
                    alert("អត្តសញ្ញាណប័ណ្ណសិស្សនេះមានរួចហើយ!");
                    return;
                }
                db.students.push(newStudent);
                db.addLog(`បានបញ្ចូលគណនីសិស្សថ្មី៖ ${newStudent.nameKh} (${newStudent.id})`);
            }
            db.save();
            document.getElementById("studentModal").classList.remove("active");
            renderStudentsTable();
        });
    }

    const teachForm = document.getElementById("teacherForm");
    if (teachForm) {
        teachForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const editId = document.getElementById("teacherEditIndex").value;
            const newTeacher = {
                id: document.getElementById("teachID").value.trim(),
                name: document.getElementById("teachName").value.trim(),
                gender: document.getElementById("teachGender").value,
                specialization: document.getElementById("teachSkill").value.trim(),
                phone: document.getElementById("teachPhone").value.trim(),
                salary: parseFloat(document.getElementById("teachSalary").value),
                assignedClass: document.getElementById("teachClass").value,
                password: document.getElementById("teachPassword").value.trim()
            };

            if (editId) {
                const idx = db.teachers.findIndex(t => t.id === editId);
                if (idx !== -1) {
                    db.teachers[idx] = newTeacher;
                    db.addLog(`បានកែប្រែព័ត៌មានគ្រូ៖ ${newTeacher.name}`);
                }
            } else {
                const exists = db.teachers.some(t => t.id === newTeacher.id);
                if (exists) {
                    alert("អត្តសញ្ញាណគ្រូនេះមានរួចហើយ!");
                    return;
                }
                db.teachers.push(newTeacher);
                db.addLog(`បានបញ្ចូលគណនីគ្រូថ្មី៖ ${newTeacher.name}`);
            }
            db.save();
            document.getElementById("teacherModal").classList.remove("active");
            renderTeachersTable();
        });
    }

    const editPermForm = document.getElementById("editPermissionForm");
    if (editPermForm) {
        editPermForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const role = document.getElementById("editPermissionRole").value;
            const userId = document.getElementById("editPermissionUserId").value;
            const newPassword = document.getElementById("editPermissionPassword").value.trim();

            if (role === "teacher") {
                const assignedClass = document.getElementById("editPermissionClass").value;
                const teacher = db.teachers.find(t => t.id === userId);
                if (teacher) {
                    teacher.password = newPassword;
                    teacher.assignedClass = assignedClass;
                    db.addLog(`បានកំណត់សិទ្ធិ និងលេខសម្ងាត់សម្រាប់គ្រូ៖ ${teacher.name} (${teacher.id})`);
                }
            } else if (role === "student") {
                const student = db.students.find(s => s.id === userId);
                if (student) {
                    student.password = newPassword;
                    db.addLog(`បានកំណត់លេខសម្ងាត់សម្រាប់សិស្ស៖ ${student.nameKh} (${student.id})`);
                }
            }

            db.save();
            document.getElementById("editPermissionModal").classList.remove("active");
            renderUsersSection();
        });
    }

    const scoreForm = document.getElementById("scoreForm");
    if (scoreForm) {
        scoreForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const studentId = scoreForm.getAttribute("data-student-id");
            const month = scoreForm.getAttribute("data-month");

            const inputs = scoreForm.querySelectorAll(".subject-score-input");
            let hasError = false;
            const errors = [];
            const newGrades = [];

            inputs.forEach(input => {
                const subjectName = input.getAttribute("data-subject-name");
                const valStr = input.value.trim();
                if (valStr === "") return;

                const scoreVal = parseFloat(valStr);
                const sub = db.subjects.find(s => s.name === subjectName);
                const maxScore = sub ? (sub.maxScore || 100) : 100;

                if (isNaN(scoreVal) || scoreVal < 0 || scoreVal > maxScore) {
                    hasError = true;
                    errors.push(`ពិន្ទុសម្រាប់មុខវិជ្ជា "${subjectName}" ត្រូវតែជាលេខចន្លោះពី 0 ដល់ ${maxScore}!`);
                } else {
                    newGrades.push({ subjectName, scoreVal });
                }
            });

            if (hasError) {
                alert(errors.join("\n"));
                return;
            }

            // Save valid grades
            newGrades.forEach(item => {
                const idx = db.grades.findIndex(g => g.studentId === studentId && g.subject === item.subjectName && g.month === month);
                if (idx !== -1) {
                    db.grades[idx] = { studentId, subject: item.subjectName, month, score: item.scoreVal };
                } else {
                    db.grades.push({ studentId, subject: item.subjectName, month, score: item.scoreVal });
                }
            });

            const student = db.students.find(s => s.id === studentId) || { nameKh: "" };
            db.addLog(`បានធ្វើបច្ចុប្បន្នភាពពិន្ទុគ្រប់មុខវិជ្ជា៖ ${student.nameKh} - ${getPeriodLabel(month)}`);
            db.save();

            document.getElementById("scoreModal").classList.remove("active");
            loadClassScoresTable();
        });
    }

    const invoiceForm = document.getElementById("invoiceForm");
    if (invoiceForm) {
        const studIdInput = document.getElementById("invStudentID");
        const helperText = document.getElementById("invStudentNameLabel");

        studIdInput.addEventListener("input", () => {
            const student = db.students.find(s => s.id === studIdInput.value.trim());
            if (student) {
                helperText.textContent = `ឈ្មោះសិស្ស៖ ${student.nameKh} (ថ្នាក់៖ ${student.class})`;
                helperText.style.color = "var(--success-color)";
            } else {
                helperText.textContent = "រកមិនឃើញគណនីសិស្ស!";
                helperText.style.color = "var(--danger-color)";
            }
        });

        invoiceForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const studentId = studIdInput.value.trim();

            let student = null;
            if (studentId !== "STATE_BUDGET") {
                student = db.students.find(s => s.id === studentId);
                if (!student) {
                    alert("រកមិនឃើញគណនីសិស្ស! សូមផ្ទៀងផ្ទាត់ឡើងវិញ។");
                    return;
                }
            }

            const invNumber = document.getElementById("invNumber").value.trim();
            const amount = parseFloat(document.getElementById("invAmount").value) || 0;
            const status = document.getElementById("invStatus").value;
            const paidDate = document.getElementById("invDate").value;

            const editId = document.getElementById("invoiceEditIndex").value;

            if (editId) {
                const idx = db.invoices.findIndex(i => i.number === editId);
                if (idx !== -1) {
                    db.invoices[idx] = { number: invNumber, studentId, amount, status, paidDate };
                    db.addLog(`បានកែសម្រួលព័ត៌មានថវិកា៖ ${invNumber}`);
                }
            } else {
                const exists = db.invoices.some(i => i.number === invNumber);
                if (exists) {
                    alert("លេខវិក្កយបត្រនេះមានរួចហើយ!");
                    return;
                }
                db.invoices.push({ number: invNumber, studentId, amount, status, paidDate });
                db.addLog(`បានកត់ត្រាថវិការួមចំណែកសមាគម ${invNumber} ពីសិស្ស ${student ? student.nameKh : "សមាគម"}`);
            }
            db.save();

            document.getElementById("invoiceModal").classList.remove("active");
            renderFinanceSummary();
            renderInvoicesTable();
        });
    }

    const expenseForm = document.getElementById("expenseForm");
    if (expenseForm) {
        expenseForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const description = document.getElementById("expDescription").value.trim();
            const amount = parseFloat(document.getElementById("expAmount").value) || 0;
            const date = document.getElementById("expDate").value;
            const chapter = document.getElementById("expChapter").value;

            const editIdx = document.getElementById("expenseEditIndex").value;

            let cleanDesc = description;
            cleanDesc = cleanDesc.replace(/\s*\(ជំពូក\s*[\d\w]+\)/g, "").trim();
            const finalDesc = `${cleanDesc} (${chapter})`;

            if (editIdx !== "") {
                const idx = parseInt(editIdx);
                if (idx >= 0 && idx < db.expenses.length) {
                    db.expenses[idx] = { description: finalDesc, amount, date, chapter };
                    db.addLog(`បានកែសម្រួលការចំណាយ៖ ${cleanDesc}`);
                }
            } else {
                db.expenses.push({ description: finalDesc, amount, date, chapter });
                db.addLog(`បានកត់ត្រាការចំណាយសាលារដ្ឋ៖ ${cleanDesc} [${chapter}] ចំនួន $${amount}`);
            }
            db.save();

            document.getElementById("expenseModal").classList.remove("active");
            renderFinanceSummary();
            renderInvoicesTable();
            renderExpensesTable();
        });
    }

    const classForm = document.getElementById("classForm");
    if (classForm) {
        classForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newClassName = document.getElementById("newClassName").value.trim();
            if (!newClassName) return;

            const exists = db.classes.includes(newClassName);
            if (exists) {
                alert("ថ្នាក់រៀននេះមានរួចហើយ! Class name already exists.");
                return;
            }

            db.classes.push(newClassName);

            // Seed a default blank timetable for this new class
            db.timetables[newClassName] = [
                { time: "07:00 - 08:30 (ព្រឹក)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" },
                { time: "08:45 - 10:15 (ព្រឹក)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" },
                { time: "10:30 - 12:00 (ព្រឹក)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" },
                { time: "13:00 - 14:30 (រសៀល)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" },
                { time: "14:45 - 16:15 (រសៀល)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" },
                { time: "16:30 - 18:00 (ល្ងាច)", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "" }
            ];

            db.addLog(`បានបង្កើតថ្នាក់សិក្សាថ្មី៖ ថ្នាក់ទី ${newClassName}`);
            db.save();

            document.getElementById("classModal").classList.remove("active");

            populateClassSelectors();
            renderClassesAndSubjects();

            alert(`បានបង្កើតថ្នាក់ទី ${newClassName} ដោយជោគជ័យ!`);
        });
    }

    const subjectForm = document.getElementById("subjectForm");
    if (subjectForm) {
        subjectForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("newSubjectName").value.trim();
            const code = document.getElementById("newSubjectCode").value.trim().toUpperCase();
            if (!name || !code) return;

            const exists = db.subjects.some(s => s.code === code || s.name === name);
            if (exists) {
                alert("មុខវិជ្ជា ឬកូដមុខវិជ្ជាសិក្សានេះមានរួចហើយ! (Subject or code already exists)");
                return;
            }

            // Choose an icon based on name matching
            const iconMap = {
                "គណិត": "calculator", "រូប": "atom", "គីមី": "flask", "ជីវ": "dna",
                "ប្រវត្តិ": "landmark", "ពលរដ្ឋ": "award", "ខ្មែរ": "book", "អង់គ្លេស": "globe",
                "កុំព្យូទ័រ": "monitor", "ព័ត៌មាន": "monitor"
            };
            let chosenIcon = "book";
            for (const key in iconMap) {
                if (name.includes(key)) {
                    chosenIcon = iconMap[key];
                    break;
                }
            }

            const maxScoreVal = parseFloat(document.getElementById("newSubjectMaxScore").value) || 100;
            db.subjects.push({ code, name, icon: chosenIcon, maxScore: maxScoreVal });
            db.addLog(`បានបង្កើតមុខវិជ្ជាថ្មី៖ ${name} (${code}) - របបពិន្ទុពេញ៖ ${maxScoreVal}`);
            db.save();

            document.getElementById("subjectModal").classList.remove("active");

            // Update UI
            initGradesSelectors(); // Refresh subject lists in grading dropdown
            renderClassesAndSubjects(); // Update the subjects list tags on classes section

            alert(`បានបង្កើតមុខវិជ្ជា ${name} (${code}) ដោយជោគជ័យ!`);
        });
    }

    const gradesConfigForm = document.getElementById("gradesConfigForm");
    if (gradesConfigForm) {
        gradesConfigForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = gradesConfigForm.querySelectorAll(".config-subject-max-score");
            inputs.forEach(input => {
                const code = input.getAttribute("data-subject-code");
                const maxVal = parseFloat(input.value) || 100;
                const sub = db.subjects.find(s => s.code === code);
                if (sub) {
                    sub.maxScore = maxVal;
                }
            });
            db.save();
            document.getElementById("gradesConfigModal").classList.remove("active");
            loadClassScoresTable();
            alert("បានរក្សាទុករបបពិន្ទុជោគជ័យ! (Subject score scales configured successfully)");
        });
    }

    const reportCardConfigForm = document.getElementById("reportCardConfigForm");
    if (reportCardConfigForm) {
        reportCardConfigForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const className = document.getElementById("reportCardConfigClassSelect").value;
            const teacherName = document.getElementById("reportCardConfigTeacherName").value.trim();
            const teacherPhone = document.getElementById("reportCardConfigTeacherPhone").value.trim();
            const khmerDate = document.getElementById("reportCardConfigKhmerDate").value.trim();
            const solarDate = document.getElementById("reportCardConfigSolarDate").value.trim();

            if (!db.reportCardSettings) {
                db.reportCardSettings = {};
            }

            db.reportCardSettings[className] = {
                teacherName,
                teacherPhone,
                khmerDate,
                solarDate
            };

            db.save();
            db.addLog(`បានធ្វើបច្ចុប្បន្នភាពការកំណត់ហត្ថលេខា & ថ្ងៃខែសម្រាប់ថ្នាក់៖ ${className}`);

            document.getElementById("reportCardConfigModal").classList.remove("active");

            if (typeof loadClassScoresTable === 'function') {
                loadClassScoresTable();
            }

            alert("រក្សាទុកការកំណត់បានជោគជ័យ!");
        });
    }

    const adminForm = document.getElementById("adminForm");
    if (adminForm) {
        adminForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const editUsername = document.getElementById("adminEditIndex").value.trim();
            const username = document.getElementById("adminUsername").value.trim();
            const fullName = document.getElementById("adminFullName").value.trim();
            const password = document.getElementById("adminPassword").value.trim();

            const newAdmin = {
                username: username,
                name: fullName,
                password: password
            };

            if (editUsername) {
                const idx = db.admins.findIndex(a => a.username.toLowerCase() === editUsername.toLowerCase());
                if (idx !== -1) {
                    db.admins[idx] = newAdmin;
                    db.addLog(`បានកែប្រែគណនី Admin៖ ${newAdmin.name} (${newAdmin.username})`);
                }
            } else {
                const exists = db.admins.some(a => a.username.toLowerCase() === username.toLowerCase());
                if (exists) {
                    alert("ឈ្មោះគណនី Admin នេះមានរួចហើយ! (Username already exists)");
                    return;
                }
                db.admins.push(newAdmin);
                db.addLog(`បានបង្កើតគណនី Admin ថ្មី៖ ${newAdmin.name} (${newAdmin.username})`);
            }

            db.save();
            document.getElementById("adminModal").classList.remove("active");
            renderUsersSection();
        });
    }
}

// --- MODALS OPEN/CLOSE ---
function initModalControls() {
    const studentModal = document.getElementById("studentModal");
    const teacherModal = document.getElementById("teacherModal");
    const invoiceModal = document.getElementById("invoiceModal");
    const expenseModal = document.getElementById("expenseModal");

    // Photo Upload Event Listeners
    const photoInput = document.getElementById("studPhotoInput");
    const photoPreview = document.getElementById("studPhotoPreview");
    const photoPlaceholder = document.getElementById("studPhotoPlaceholder");
    const removePhotoBtn = document.getElementById("removePhotoBtn");

    if (photoInput) {
        photoInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 2 * 1024 * 1024) {
                    alert("ទំហំរូបថតត្រូវតែតូចជាង 2MB!");
                    photoInput.value = "";
                    return;
                }
                const reader = new FileReader();
                reader.onload = (event) => {
                    currentSelectedPhotoBase64 = event.target.result;
                    if (photoPreview) {
                        photoPreview.src = currentSelectedPhotoBase64;
                        photoPreview.style.display = "block";
                    }
                    if (photoPlaceholder) photoPlaceholder.style.display = "none";
                    if (removePhotoBtn) removePhotoBtn.style.display = "inline-block";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (removePhotoBtn) {
        removePhotoBtn.addEventListener("click", () => {
            currentSelectedPhotoBase64 = "";
            if (photoPreview) {
                photoPreview.src = "";
                photoPreview.style.display = "none";
            }
            if (photoPlaceholder) photoPlaceholder.style.display = "block";
            removePhotoBtn.style.display = "none";
            if (photoInput) photoInput.value = "";
        });
    }

    const addStudentBtn = document.getElementById("addNewStudentBtn");
    if (addStudentBtn) {
        addStudentBtn.addEventListener("click", () => {
            document.getElementById("studentForm").reset();
            document.getElementById("studentEditIndex").value = "";
            document.getElementById("studID").disabled = false;
            document.getElementById("studentModalTitle").textContent = "បន្ថែមសិស្សថ្មី";

            // Reset photo fields
            currentSelectedPhotoBase64 = "";
            if (photoPreview) {
                photoPreview.src = "";
                photoPreview.style.display = "none";
            }
            if (photoPlaceholder) photoPlaceholder.style.display = "block";
            if (removePhotoBtn) removePhotoBtn.style.display = "none";
            if (photoInput) photoInput.value = "";

            studentModal.classList.add("active");
        });
    }

    const addTeacherBtn = document.getElementById("addNewTeacherBtn");
    if (addTeacherBtn) {
        addTeacherBtn.addEventListener("click", () => {
            document.getElementById("teacherForm").reset();
            document.getElementById("teacherEditIndex").value = "";
            document.getElementById("teachID").disabled = false;
            document.getElementById("teacherModalTitle").textContent = "បន្ថែមគ្រូបង្រៀនក្របខណ្ឌថ្មី";
            teacherModal.classList.add("active");
        });
    }

    const addInvoiceBtn = document.getElementById("createInvoiceBtn");
    if (addInvoiceBtn) {
        addInvoiceBtn.addEventListener("click", () => {
            const titleEl = document.getElementById("invoiceModalTitle");
            if (titleEl) titleEl.textContent = "កត់ត្រាការរួមចំណែកសមាគមមាតាបិតា";
            document.getElementById("invoiceEditIndex").value = "";
            document.getElementById("invoiceForm").reset();
            document.getElementById("invStudentID").disabled = false;
            document.getElementById("invNumber").disabled = false;
            const count = db.invoices.filter(i => i.number.startsWith("REC")).length + 1;
            document.getElementById("invNumber").value = `REC-2026-${String(count).padStart(4, '0')}`;
            document.getElementById("invStudentNameLabel").textContent = "";
            invoiceModal.classList.add("active");
        });
    }

    const addExpenseBtn = document.getElementById("addExpenseBtn");
    if (addExpenseBtn) {
        addExpenseBtn.addEventListener("click", () => {
            const titleEl = document.getElementById("expenseModalTitle");
            if (titleEl) titleEl.textContent = "កត់ត្រាការចំណាយសាលា (តាមជំពូកគណនេយ្យរដ្ឋ)";
            document.getElementById("expenseEditIndex").value = "";
            document.getElementById("expenseForm").reset();
            document.getElementById("expDate").value = new Date().toISOString().split('T')[0];
            expenseModal.classList.add("active");
        });
    }

    const registerCloseHandler = (closeId, cancelId, modalOverlay) => {
        const closeBtn = document.getElementById(closeId);
        const cancelBtn = document.getElementById(cancelId);
        if (closeBtn) closeBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
        if (cancelBtn) cancelBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
    };

    registerCloseHandler("closeStudentModalBtn", "cancelStudentModalBtn", studentModal);
    registerCloseHandler("closeTeacherModalBtn", "cancelTeacherModalBtn", teacherModal);
    registerCloseHandler("closeScoreModalBtn", "cancelScoreModalBtn", document.getElementById("scoreModal"));
    registerCloseHandler("closeInvoiceModalBtn", "cancelInvoiceModalBtn", invoiceModal);
    registerCloseHandler("closeExpenseModalBtn", "cancelExpenseModalBtn", expenseModal);

    // Admin Modal triggers
    const addAdminBtn = document.getElementById("addNewAdminBtn");
    const adminModal = document.getElementById("adminModal");
    if (addAdminBtn && adminModal) {
        addAdminBtn.addEventListener("click", () => {
            document.getElementById("adminForm").reset();
            document.getElementById("adminEditIndex").value = "";
            document.getElementById("adminUsername").disabled = false;
            document.getElementById("adminModalTitle").textContent = "បង្កើតគណនី Admin ថ្មី";
            document.getElementById("adminFormSubmitBtn").textContent = "បង្កើតគណនី";
            adminModal.classList.add("active");
        });
    }
    registerCloseHandler("closeAdminModalBtn", "cancelAdminModalBtn", adminModal);

    const rcCloser = document.getElementById("closeReportCardModalBtn");
    if (rcCloser) {
        rcCloser.addEventListener("click", () => document.getElementById("reportCardModal").classList.remove("active"));
    }

    registerCloseHandler("closeEditPermissionModalBtn", "cancelEditPermissionModalBtn", document.getElementById("editPermissionModal"));

    const rcRosterCloser = document.getElementById("closeGradesRosterPrintModalBtn");
    if (rcRosterCloser) {
        rcRosterCloser.addEventListener("click", () => document.getElementById("gradesRosterPrintModal").classList.remove("active"));
    }

    const createClassBtn = document.getElementById("createClassBtn");
    const classModal = document.getElementById("classModal");
    if (createClassBtn && classModal) {
        createClassBtn.addEventListener("click", () => {
            document.getElementById("classForm").reset();
            classModal.classList.add("active");
        });
    }

    registerCloseHandler("closeClassModalBtn", "cancelClassModalBtn", classModal);

    const createSubjectBtn = document.getElementById("createSubjectBtn");
    const subjectModal = document.getElementById("subjectModal");
    if (createSubjectBtn && subjectModal) {
        createSubjectBtn.addEventListener("click", () => {
            document.getElementById("subjectForm").reset();
            subjectModal.classList.add("active");
        });
    }

    registerCloseHandler("closeSubjectModalBtn", "cancelSubjectModalBtn", subjectModal);

    const gradesConfigBtn = document.getElementById("gradesConfigBtn");
    const gradesConfigModal = document.getElementById("gradesConfigModal");
    if (gradesConfigBtn && gradesConfigModal) {
        gradesConfigBtn.addEventListener("click", () => {
            const container = document.getElementById("gradesConfigSubjectsList");
            if (container) {
                container.innerHTML = db.subjects.map(sub => {
                    return `
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <i data-lucide="${sub.icon || 'book'}" style="width: 16px; height: 16px; color: var(--primary-color);"></i>
                                <span style="font-weight: 600; font-size: 0.9rem;">${sub.name} (${sub.code})</span>
                            </div>
                            <div style="width: 100px;">
                                <input type="number" class="config-subject-max-score" data-subject-code="${sub.code}" min="10" max="200" value="${sub.maxScore || 100}" style="width: 100%; padding: 6px 10px; border-radius: var(--border-radius-sm); border: 1px solid #cbd5e1; font-weight: bold; text-align: center;">
                            </div>
                        </div>
                    `;
                }).join("");
                lucide.createIcons();
            }
            gradesConfigModal.classList.add("active");
        });
    }

    registerCloseHandler("closeGradesConfigModalBtn", "cancelGradesConfigModalBtn", gradesConfigModal);

    const reportCardConfigBtn = document.getElementById("reportCardConfigBtn");
    const reportCardConfigModal = document.getElementById("reportCardConfigModal");
    if (reportCardConfigBtn && reportCardConfigModal) {
        reportCardConfigBtn.addEventListener("click", () => {
            initReportCardConfigForm();
            reportCardConfigModal.classList.add("active");
        });
    }
    registerCloseHandler("closeReportCardConfigModalBtn", "cancelReportCardConfigModalBtn", reportCardConfigModal);

    const googleSyncBtn = document.getElementById("googleSyncBtn");
    const googleSyncModal = document.getElementById("googleSyncModal");
    if (googleSyncBtn && googleSyncModal) {
        googleSyncBtn.addEventListener("click", () => {
            document.getElementById("googleSyncAppUrl").value = GOOGLE_SHEET_WEBAPP_URL || "[មិនទាន់កំណត់ - សូមបំពេញតម្លៃក្នុងកូដ app.js (បន្ទាត់ទី 5)]";
            googleSyncModal.classList.add("active");
        });
    }
    registerCloseHandler("closeGoogleSyncModalBtn", "cancelGoogleSyncModalBtn", googleSyncModal);

    const clearLogs = document.getElementById("clearLogsBtn");
    if (clearLogs) {
        clearLogs.addEventListener("click", () => {
            if (confirm("តើអ្នកពិតជាចង់សម្អាតបញ្ជីសកម្មភាពទាំងអស់មែនទេ?")) {
                db.logs = [];
                db.save();
                renderDashboard();
            }
        });
    }
}

// --- SEARCH & FILTER ---
function initSearchFilters() {
    const stdSearch = document.getElementById("studentSearch");
    if (stdSearch) stdSearch.addEventListener("input", renderStudentsTable);

    const stdClass = document.getElementById("studentClassFilter");
    if (stdClass) stdClass.addEventListener("change", renderStudentsTable);

    const teachSearch = document.getElementById("teacherSearch");
    if (teachSearch) teachSearch.addEventListener("input", renderTeachersTable);

    const globalSearch = document.getElementById("globalSearchInput");
    if (globalSearch) {
        globalSearch.addEventListener("input", (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query) return;

            const activeSec = document.querySelector(".content-section.active");
            if (activeSec.id === "students-section") {
                document.getElementById("studentSearch").value = query;
                renderStudentsTable();
            }
            else if (activeSec.id === "teachers-section") {
                document.getElementById("teacherSearch").value = query;
                renderTeachersTable();
            }
            else if (activeSec.id === "finance-section") {
                const isExpensesActive = !document.getElementById("financeExpensesTabContent").classList.contains("hidden");
                if (isExpensesActive) {
                    const expSearchInput = document.getElementById("expenseSearch");
                    if (expSearchInput) {
                        expSearchInput.value = query;
                        renderExpensesTable();
                    }
                } else {
                    document.getElementById("invoiceSearch").value = query;
                    renderInvoicesTable();
                }
            }
        });
    }

    const scheduleClass = document.getElementById("timetableClassSelector");
    if (scheduleClass) {
        scheduleClass.addEventListener("change", () => {
            isEditingTimetable = false;
            const btn = document.getElementById("editTimetableBtn");
            if (btn) {
                btn.className = "btn btn-secondary role-admin-only";
                btn.innerHTML = `<i data-lucide="edit"></i> <span>កែប្រែ</span>`;
            }
            const addBtn = document.getElementById("addTimetableRowBtn");
            if (addBtn) {
                addBtn.classList.add("hidden");
            }
            renderTimetableGrid();
        });
    }

    const editTimetableBtn = document.getElementById("editTimetableBtn");
    if (editTimetableBtn) {
        editTimetableBtn.addEventListener("click", () => {
            if (currentRole !== "admin") {
                alert("គណនីរបស់អ្នកគ្មានសិទ្ធិកែប្រែកាលវិភាគសិក្សាទេ!");
                return;
            }

            const className = document.getElementById("timetableClassSelector").value;
            const addBtn = document.getElementById("addTimetableRowBtn");

            if (isEditingTimetable) {
                // Save Mode: read time inputs and save to database
                const timeElements = document.querySelectorAll(".timetable-time-input");
                timeElements.forEach(input => {
                    const rowIdx = parseInt(input.getAttribute("data-row"));
                    const value = input.value.trim();
                    if (db.timetables[className] && db.timetables[className][rowIdx] && value) {
                        db.timetables[className][rowIdx].time = value;
                    }
                });

                // Save subjects
                const selectElements = document.querySelectorAll(".timetable-cell-select");
                selectElements.forEach(select => {
                    const rowIdx = parseInt(select.getAttribute("data-row"));
                    const dayKey = select.getAttribute("data-day");
                    const value = select.value;

                    if (db.timetables[className] && db.timetables[className][rowIdx]) {
                        db.timetables[className][rowIdx][dayKey] = value;
                    }
                });

                db.addLog(`បានកែប្រែកាលវិភាគសិក្សាថ្នាក់៖ ថ្នាក់ទី ${className}`);
                db.save();

                isEditingTimetable = false;
                editTimetableBtn.className = "btn btn-secondary role-admin-only";
                editTimetableBtn.innerHTML = `<i data-lucide="edit"></i> <span>កែប្រែ</span>`;
                if (addBtn) addBtn.classList.add("hidden");

                renderTimetableGrid();
                alert(`បានរក្សាទុកកាលវិភាគថ្នាក់ទី ${className} ដោយជោគជ័យ!`);
            } else {
                // Edit Mode: toggle inputs
                isEditingTimetable = true;
                editTimetableBtn.className = "btn btn-success role-admin-only";
                editTimetableBtn.innerHTML = `<i data-lucide="save"></i> <span>រក្សាទុក</span>`;
                if (addBtn) addBtn.classList.remove("hidden");

                renderTimetableGrid();
            }
            lucide.createIcons();
        });
    }

    const addTimetableRowBtn = document.getElementById("addTimetableRowBtn");
    if (addTimetableRowBtn) {
        addTimetableRowBtn.addEventListener("click", () => {
            const className = document.getElementById("timetableClassSelector").value;
            if (!db.timetables[className]) {
                db.timetables[className] = [];
            }

            const currentSlotsCount = db.timetables[className].length;
            let defaultTimeStr = "18:15 - 19:45 (ល្ងាច)";
            if (currentSlotsCount >= 6) {
                defaultTimeStr = `20:00 - 21:30 (យប់)`;
            }

            db.timetables[className].push({
                time: defaultTimeStr,
                Mon: "",
                Tue: "",
                Wed: "",
                Thu: "",
                Fri: ""
            });

            renderTimetableGrid();
            lucide.createIcons();
        });
    }


    const invSearch = document.getElementById("invoiceSearch");
    if (invSearch) invSearch.addEventListener("input", renderInvoicesTable);

    const invStatus = document.getElementById("invoiceStatusFilter");
    if (invStatus) invStatus.addEventListener("change", renderInvoicesTable);

    const expSearch = document.getElementById("expenseSearch");
    if (expSearch) expSearch.addEventListener("input", renderExpensesTable);

    const expChapterFilter = document.getElementById("expenseChapterFilter");
    if (expChapterFilter) expChapterFilter.addEventListener("change", renderExpensesTable);

    const exportStudents = document.getElementById("exportStudentsBtn");
    if (exportStudents) exportStudents.addEventListener("click", () => exportToCSV(db.students, "students_list.csv"));

    const exportTeachers = document.getElementById("exportTeachersBtn");
    if (exportTeachers) exportTeachers.addEventListener("click", () => exportToCSV(db.teachers, "teachers_list.csv"));

    const exportGrades = document.getElementById("exportGradesBtn");
    if (exportGrades) {
        exportGrades.addEventListener("click", () => {
            const className = document.getElementById("gradesClassSelect").value;
            const month = document.getElementById("gradesMonthSelect").value;
            const classStudents = db.students.filter(s => s.class === className);
            const roster = calculateClassRoster(classStudents, month);

            const exportData = roster.map(row => {
                const formatted = {
                    "អត្តសញ្ញាណ (ID)": row.studentId,
                    "ឈ្មោះសិស្ស": row.studentName,
                    "ភេទ": row.gender
                };
                db.subjects.forEach(sub => {
                    formatted[sub.name] = row.subjectScores[sub.name] || 0;
                });
                formatted["មធ្យមភាគ"] = row.average > 0 ? row.average.toFixed(2) : "0.00";
                formatted["ចំណាត់ថ្នាក់"] = `លេខ ${row.rank}`;
                return formatted;
            });

            exportToCSV(exportData, `grades_${className}_all_subjects_${month}.csv`);
        });
    }

    const printGradesRoster = document.getElementById("printGradesRosterBtn");
    if (printGradesRoster) {
        printGradesRoster.addEventListener("click", () => {
            const className = document.getElementById("gradesClassSelect").value;
            const month = document.getElementById("gradesMonthSelect").value;
            viewPrintGradesRoster(className, "", month);
        });
    }

    initAttendanceForm();

    // Student Portal Month Selector Listener
    const portalMonthSelect = document.getElementById("portalMonthSelector");
    if (portalMonthSelect) {
        portalMonthSelect.addEventListener("change", () => {
            const studentId = selectedStudentPortalId;
            const month = portalMonthSelect.value;
            renderStudentMonthlyPortalGrades(studentId, month);
        });
    }

    // Import Students Excel/CSV File Listener
    const importStudentsInput = document.getElementById("importStudentsInput");
    if (importStudentsInput) {
        importStudentsInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                importStudentsFromCSV(file);
                importStudentsInput.value = ""; // clear input
            }
        });
    }

    // Import Grades Excel/CSV File Listener
    const importGradesBtn = document.getElementById("importGradesBtn");
    const gradesCsvFileInput = document.getElementById("gradesCsvFileInput");
    if (importGradesBtn && gradesCsvFileInput) {
        importGradesBtn.addEventListener("click", () => {
            gradesCsvFileInput.click();
        });

        gradesCsvFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                importGradesFromCSV(file);
                gradesCsvFileInput.value = ""; // clear input
            }
        });
    }
}

function exportToCSV(dataArray, filename) {
    if (!dataArray || dataArray.length === 0) {
        alert("គ្មានទិន្នន័យដើម្បីទាញចេញទេ!");
        return;
    }
    const headers = Object.keys(dataArray[0]);
    const csvRows = [headers.join(",")];
    for (const row of dataArray) {
        const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
    }
    const csvContent = "\ufeff" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// --- IMPORT STUDENTS FROM CSV/EXCEL ---
function importStudentsFromCSV(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const lines = parseCSVText(text);
        if (lines.length <= 1) {
            alert("ទិន្នន័យក្នុងឯកសារទទេ ឬមិនត្រឹមត្រូវឡើយ! (File is empty or invalid)");
            return;
        }

        // Find headers
        const headers = lines[0].map(h => h.trim().toLowerCase());

        // Map headers to properties (looks for English or Khmer matching terms)
        const fieldMap = {
            id: headers.findIndex(h => h.includes("id") || h.includes("អត្តសញ្ញាណ") || h.includes("កូដ")),
            nameKh: headers.findIndex(h => h.includes("namekh") || h.includes("ឈ្មោះខ្មែរ") || h.includes("ឈ្មោះ") || h.includes("នាមត្រកូល")),
            nameLat: headers.findIndex(h => h.includes("namelat") || h.includes("ឡាតាំង") || h.includes("ឡាតិន") || h.includes("english")),
            gender: headers.findIndex(h => h.includes("gender") || h.includes("ភេទ")),
            dob: headers.findIndex(h => h.includes("dob") || h.includes("កំណើត")),
            address: headers.findIndex(h => h.includes("address") || h.includes("អាសយដ្ឋាន")),
            parentName: headers.findIndex(h => h.includes("parentname") || h.includes("អាណាព្យាបាល")),
            parentPhone: headers.findIndex(h => h.includes("parentphone") || h.includes("ទូរស័ព្ទ")),
            fatherName: headers.findIndex(h => h.includes("fathername") || h.includes("ឪពុក")),
            motherName: headers.findIndex(h => h.includes("mothername") || h.includes("ម្តាយ")),
            parentOccupation: headers.findIndex(h => h.includes("parentoccupation") || h.includes("មុខរបរ")),
            password: headers.findIndex(h => h.includes("password") || h.includes("សម្ងាត់"))
        };

        let importCount = 0;
        let updateCount = 0;

        // If we couldn't match headers, fallback to index-based matching (standard export columns layout)
        const isHeaderMatched = fieldMap.id !== -1 || fieldMap.nameKh !== -1;

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i];
            if (row.length === 0 || (row.length === 1 && row[0] === "")) continue;

            let id = "", nameKh = "", nameLat = "", gender = "", dob = "", address = "";
            let parentName = "", parentPhone = "", photo = "", fatherName = "", motherName = "", parentOccupation = "", password = "123";

            if (isHeaderMatched) {
                if (fieldMap.id !== -1) id = row[fieldMap.id];
                if (fieldMap.nameKh !== -1) nameKh = row[fieldMap.nameKh];
                if (fieldMap.nameLat !== -1) nameLat = row[fieldMap.nameLat];
                if (fieldMap.gender !== -1) gender = row[fieldMap.gender];
                if (fieldMap.dob !== -1) dob = row[fieldMap.dob];
                if (fieldMap.address !== -1) address = row[fieldMap.address];
                if (fieldMap.parentName !== -1) parentName = row[fieldMap.parentName];
                if (fieldMap.parentPhone !== -1) parentPhone = row[fieldMap.parentPhone];
                if (fieldMap.fatherName !== -1) fatherName = row[fieldMap.fatherName];
                if (fieldMap.motherName !== -1) motherName = row[fieldMap.motherName];
                if (fieldMap.parentOccupation !== -1) parentOccupation = row[fieldMap.parentOccupation];
                if (fieldMap.password !== -1 && row[fieldMap.password]) password = row[fieldMap.password];
            } else {
                // Fallback to absolute indices if no matching headers found (e.g. export layout)
                id = row[0] || "";
                nameKh = row[1] || "";
                nameLat = row[2] || "";
                gender = row[3] || "";
                dob = row[4] || "";
                address = row[5] || "";
                parentName = row[6] || "";
                parentPhone = row[7] || "";
                fatherName = row[8] || "";
                motherName = row[9] || "";
                parentOccupation = row[10] || "";
                password = row[11] || "123";
            }

            // Clean up values
            id = id.trim();
            nameKh = nameKh.trim();
            if (!id || !nameKh) continue; // Skip invalid rows

            let classVal = "១២ក"; // default fallback class
            const classIdx = isHeaderMatched ? headers.findIndex(h => h.includes("class") || h.includes("ថ្នាក់")) : 8;
            if (classIdx !== -1 && row[classIdx]) {
                classVal = row[classIdx].trim();
            }

            const studentObj = {
                id,
                nameKh,
                nameLat: nameLat.trim().toUpperCase(),
                gender: gender.trim(),
                dob: dob.trim(),
                address: address.trim(),
                parentName: parentName.trim(),
                parentPhone: parentPhone.trim(),
                class: classVal,
                photo: "",
                fatherName: fatherName.trim(),
                motherName: motherName.trim(),
                parentOccupation: parentOccupation.trim(),
                password: password.trim()
            };

            const existingIdx = db.students.findIndex(s => s.id === id);
            if (existingIdx !== -1) {
                // Preserving photo if student already exists
                studentObj.photo = db.students[existingIdx].photo || "";
                db.students[existingIdx] = studentObj;
                updateCount++;
            } else {
                db.students.push(studentObj);
                importCount++;
            }
        }

        db.save();
        renderStudentsTable();
        db.addLog(`បាននាំចូលសិស្សពី Excel/CSV៖ ជោគជ័យ ${importCount} នាក់, កែប្រែ ${updateCount} នាក់`);
        alert(`នាំចូលទិន្នន័យសិស្សជោគជ័យ៖\n- បន្ថែមថ្មី៖ ${importCount} នាក់\n- ធ្វើបច្ចុប្បន្នភាព៖ ${updateCount} នាក់`);
    };
    reader.readAsText(file, 'UTF-8');
}

// --- IMPORT GRADES FROM CSV/EXCEL ---
function importGradesFromCSV(file) {
    const className = document.getElementById("gradesClassSelect").value;
    const month = document.getElementById("gradesMonthSelect").value;

    if (month === "S1" || month === "S2" || month === "YEAR") {
        alert("អ្នកអាចនាំចូលពិន្ទុសម្រាប់តែខែនីមួយៗប៉ុណ្ណោះ មិនអាចនាំចូលសម្រាប់មធ្យមភាគឆមាស ឬប្រចាំឆ្នាំផ្ទាល់ឡើយ! (You can only import scores for monthly periods)");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        const lines = parseCSVText(text);
        if (lines.length <= 1) {
            alert("ទិន្នន័យក្នុងឯកសារទទេ ឬមិនត្រឹមត្រូវឡើយ! (File is empty or invalid)");
            return;
        }

        // Find headers
        const headers = lines[0].map(h => h.trim().toLowerCase());

        // Map headers to properties (looks for English or Khmer matching terms)
        const idIdx = headers.findIndex(h => h.includes("id") || h.includes("student id") || h.includes("អត្តសញ្ញាណ") || h.includes("កូដ"));

        // Map all subject columns that match our db.subjects
        const subjectColumnMappings = [];
        db.subjects.forEach(sub => {
            const idx = headers.findIndex(h => h === sub.name.toLowerCase() || h.includes(sub.name.toLowerCase()) || sub.name.toLowerCase().includes(h));
            if (idx !== -1) {
                subjectColumnMappings.push({ subjectName: sub.name, colIndex: idx });
            }
        });

        const isHeaderMatched = idIdx !== -1 && subjectColumnMappings.length > 0;

        let importCount = 0;
        let skipCount = 0;

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i];
            if (row.length === 0 || (row.length === 1 && row[0] === "")) continue;

            let id = "";

            if (isHeaderMatched) {
                id = row[idIdx].trim();

                // Verify student exists and belongs to the selected class
                const student = db.students.find(s => s.id === id);
                if (!student || student.class !== className) {
                    skipCount++;
                    continue;
                }

                let studentImportedAny = false;

                subjectColumnMappings.forEach(mapping => {
                    const scoreStr = row[mapping.colIndex];
                    if (scoreStr && scoreStr.trim() !== "") {
                        const scoreVal = parseFloat(scoreStr.trim());
                        const sub = db.subjects.find(s => s.name === mapping.subjectName);
                        const maxScore = sub ? (sub.maxScore || 100) : 100;
                        if (!isNaN(scoreVal) && scoreVal >= 0 && scoreVal <= maxScore) {
                            const idx = db.grades.findIndex(g => g.studentId === id && g.subject === mapping.subjectName && g.month === month);
                            if (idx !== -1) {
                                db.grades[idx] = { studentId: id, subject: mapping.subjectName, month, score: scoreVal };
                            } else {
                                db.grades.push({ studentId: id, subject: mapping.subjectName, month, score: scoreVal });
                            }
                            studentImportedAny = true;
                        }
                    }
                });

                if (studentImportedAny) {
                    importCount++;
                } else {
                    skipCount++;
                }
            } else {
                // Fallback to legacy index-based single subject mapper using the first subject in the database
                id = row[0] || "";
                id = id.trim();
                const scoreStr = row[3] || "";
                const scoreVal = parseFloat(scoreStr.trim());

                const student = db.students.find(s => s.id === id);
                const fallbackSub = db.subjects[0];
                const fallbackSubName = fallbackSub ? fallbackSub.name : "គណិតវិទ្យា";
                const maxScore = fallbackSub ? (fallbackSub.maxScore || 100) : 100;

                if (!student || student.class !== className || isNaN(scoreVal) || scoreVal < 0 || scoreVal > maxScore) {
                    skipCount++;
                    continue;
                }

                const idx = db.grades.findIndex(g => g.studentId === id && g.subject === fallbackSubName && g.month === month);
                if (idx !== -1) {
                    db.grades[idx] = { studentId: id, subject: fallbackSubName, month, score: scoreVal };
                } else {
                    db.grades.push({ studentId: id, subject: fallbackSubName, month, score: scoreVal });
                }
                importCount++;
            }
        }

        db.save();
        loadClassScoresTable();
        db.addLog(`បាននាំចូលពិន្ទុគ្រប់មុខវិជ្ជា៖ ជោគជ័យ ${importCount} នាក់, រំលង/មិនត្រឹមត្រូវ ${skipCount} នាក់`);
        alert(`នាំចូលពិន្ទុសិស្សថ្នាក់ទី ${className} ជោគជ័យ៖\n- រក្សាទុក/ធ្វើបច្ចុប្បន្នភាព៖ ${importCount} នាក់\n- រំលង (សិស្សមិនស្ថិតក្នុងថ្នាក់នេះ ឬទិន្នន័យខុស)៖ ${skipCount} នាក់`);
    };
    reader.readAsText(file, 'UTF-8');
}

// Robust CSV Line Parser to handle quotes and comma values correctly (RFC-4180)
function parseCSVText(text) {
    const lines = [];
    let row = [""];
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];

        if (c === '"') {
            if (inQuotes && next === '"') {
                row[row.length - 1] += '"';
                i++; // skip next quote
            } else {
                inQuotes = !inQuotes;
            }
        } else if (c === ',' && !inQuotes) {
            row.push("");
        } else if ((c === '\r' || c === '\n') && !inQuotes) {
            if (c === '\r' && next === '\n') i++; // skip LF
            lines.push(row);
            row = [""];
        } else {
            row[row.length - 1] += c;
        }
    }
    if (row.length > 1 || row[0] !== "") {
        lines.push(row);
    }
    return lines;
}

// --- POPULATE CLASS SELECTORS ---
function populateClassSelectors() {
    const classes = db.classes || DEFAULT_CLASSES;

    // 1. studentClassFilter
    const stdFilter = document.getElementById("studentClassFilter");
    if (stdFilter) {
        stdFilter.innerHTML = `<option value="">គ្រប់ថ្នាក់</option>` +
            classes.map(c => `<option value="${c}">ថ្នាក់ទី ${c}</option>`).join("");
    }

    // 2. studClass (Student form selector)
    const studClassSelect = document.getElementById("studClass");
    if (studClassSelect) {
        studClassSelect.innerHTML = classes.map(c => `<option value="${c}">${c}</option>`).join("");
    }

    // 3. timetableClassSelector
    const ttSelect = document.getElementById("timetableClassSelector");
    if (ttSelect) {
        ttSelect.innerHTML = classes.map(c => `<option value="${c}">ថ្នាក់ទី ${c}</option>`).join("");
    }

    // 4. attendanceClassSelect
    const attSelect = document.getElementById("attendanceClassSelect");
    if (attSelect) {
        attSelect.innerHTML = classes.map(c => `<option value="${c}">ថ្នាក់ទី ${c}</option>`).join("");
    }

    // 5. gradesClassSelect
    const grSelect = document.getElementById("gradesClassSelect");
    if (grSelect) {
        grSelect.innerHTML = classes.map(c => `<option value="${c}">ថ្នាក់ទី ${c}</option>`).join("");
    }

    // 6. teachClass (Teacher form advisor selector)
    const teachClassSelect = document.getElementById("teachClass");
    if (teachClassSelect) {
        teachClassSelect.innerHTML = `<option value="">គ្មាន (None)</option>` +
            classes.map(c => `<option value="${c}">${c}</option>`).join("");
    }

    // 7. editPermissionClass (Permissions modal selector)
    const permClassSelect = document.getElementById("editPermissionClass");
    if (permClassSelect) {
        permClassSelect.innerHTML = `<option value="">គ្មាន (None)</option>` +
            classes.map(c => `<option value="${c}">${c}</option>`).join("");
    }
}

// --- ROLE-BASED LOGIN & AUTHENTICATION SYSTEM ---
function initAuth() {
    const loginForm = document.getElementById("loginForm");
    const loginWrapper = document.getElementById("loginWrapper");
    const loginRole = document.getElementById("loginRole");
    const usernameLabel = document.getElementById("loginUsernameLabel");
    const usernameInput = document.getElementById("loginUsername");
    const toggleDemo = document.getElementById("toggleDemoAccounts");
    const demoList = document.getElementById("demoAccountsList");
    const logoutBtn = document.getElementById("logoutBtn");

    // Toggle demo accounts display
    if (toggleDemo && demoList) {
        toggleDemo.addEventListener("click", () => {
            demoList.classList.toggle("hidden");
        });
    }

    // Auto-fill credentials when clicking a demo account item
    const demoItems = document.querySelectorAll(".demo-account-item");
    demoItems.forEach(item => {
        item.addEventListener("click", () => {
            const role = item.getAttribute("data-role");
            const user = item.getAttribute("data-username");
            const pass = item.getAttribute("data-password");

            if (loginRole) {
                loginRole.value = role;
                // Trigger change to update labels
                loginRole.dispatchEvent(new Event('change'));
            }
            if (usernameInput) usernameInput.value = user;
            const passInput = document.getElementById("loginPassword");
            if (passInput) passInput.value = pass;
        });
    });

    // Update inputs dynamically based on selected role
    if (loginRole && usernameLabel && usernameInput) {
        loginRole.addEventListener("change", () => {
            const val = loginRole.value;
            if (val === "admin") {
                usernameLabel.textContent = "ឈ្មោះអ្នកប្រើប្រាស់ (Username)";
                usernameInput.placeholder = "បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់ (admin)";
            } else if (val === "teacher") {
                usernameLabel.textContent = "អត្តសញ្ញាណប័ណ្ណគ្រូ (Teacher ID)";
                usernameInput.placeholder = "បញ្ចូលអត្តសញ្ញាណគ្រូ (TCH2001)";
            } else if (val === "student") {
                usernameLabel.textContent = "អត្តសញ្ញាណប័ណ្ណសិស្ស (Student ID)";
                usernameInput.placeholder = "បញ្ចូលអត្តសញ្ញាណសិស្ស (STD1001)";
            }
        });
    }

    // Handle login submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const role = loginRole.value;
            const user = usernameInput.value.trim();
            const pass = document.getElementById("loginPassword").value;

            let success = false;
            let loggedInUser = user;

            if (role === "admin") {
                const adminAccount = db.admins.find(a => a.username.toLowerCase() === user.toLowerCase());
                if (adminAccount && adminAccount.password === pass) {
                    success = true;
                    loggedInUser = adminAccount.username;
                }
            } else if (role === "teacher") {
                const teacher = db.teachers.find(t => t.id === user || t.name === user);
                if (teacher) {
                    const expectedPass = teacher.password || "123";
                    if (pass === expectedPass) {
                        success = true;
                        loggedInUser = teacher.id;
                    }
                } else if (user === "TCH2001" && pass === "123") {
                    success = true;
                    loggedInUser = "TCH2001";
                }
            } else if (role === "student") {
                const student = db.students.find(s => s.id === user || s.nameKh === user);
                if (student) {
                    const expectedPass = student.password || "123";
                    if (pass === expectedPass) {
                        success = true;
                        loggedInUser = student.id;
                    }
                } else if (user === "STD1001" && pass === "123") {
                    success = true;
                    loggedInUser = "STD1001";
                }
            }

            if (success) {
                sessionStorage.setItem("sms_session_role", role);
                sessionStorage.setItem("sms_session_user_id", loggedInUser);

                currentRole = role;
                if (role === "student") {
                    selectedStudentPortalId = loggedInUser;
                }

                if (loginWrapper) {
                    loginWrapper.style.display = "none";
                }

                switchRole(role);
                db.addLog(`គណនី ${loggedInUser} បានចូលប្រើប្រាស់ប្រព័ន្ធ [សិទ្ធិ: ${role}]`);

                if (GOOGLE_SHEET_WEBAPP_URL) {
                    fetchFromGoogleSheets(true);
                }

                lucide.createIcons();
            } else {
                alert("ព័ត៌មានគណនី ឬលេខសម្ងាត់មិនត្រឹមត្រូវឡើយ! (Invalid credentials)");
            }
        });
    }

    // Handle Logout click
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("តើអ្នកពិតជាចង់ចាកចេញពីប្រព័ន្ធមែនទេ?")) {
                db.addLog(`គណនី ${sessionStorage.getItem("sms_session_user_id") || currentRole} បានចាកចេញពីប្រព័ន្ធ`);
                sessionStorage.removeItem("sms_session_role");
                sessionStorage.removeItem("sms_session_user_id");

                if (loginWrapper) {
                    loginWrapper.style.display = "flex";
                }

                if (loginForm) {
                    loginForm.reset();
                    if (loginRole) {
                        loginRole.value = "admin";
                        loginRole.dispatchEvent(new Event('change'));
                    }
                }
            }
        });
    }

    // Initial check for active session on load
    const sessionRole = sessionStorage.getItem("sms_session_role");
    const sessionUserId = sessionStorage.getItem("sms_session_user_id");

    if (sessionRole && sessionUserId) {
        currentRole = sessionRole;
        selectedStudentPortalId = sessionUserId;
        if (loginWrapper) {
            loginWrapper.style.display = "none";
        }
        switchRole(currentRole);
    } else {
        if (loginWrapper) {
            loginWrapper.style.display = "flex";
        }
    }
}

// --- USER PERMISSIONS & ROLES MANAGEMENT SECTION ---
function renderUsersSection() {
    const adminTbody = document.getElementById("userAdminsTableBody");
    const teacherTbody = document.getElementById("userTeachersTableBody");
    const studentTbody = document.getElementById("userStudentsTableBody");

    if (adminTbody) {
        adminTbody.innerHTML = (db.admins || []).map((admin, index) => {
            const isMasterAdmin = admin.username.toLowerCase() === "admin";
            const deleteBtn = isMasterAdmin 
                ? `<span style="font-size:0.8rem; color:var(--text-secondary);">គណនីគោល (Master)</span>`
                : `<button class="btn btn-secondary" onclick="deleteAdmin('${admin.username}')" style="padding: 4px 8px; font-size: 0.75rem; height: auto; background-color: var(--danger-color); border-color: var(--danger-color); color: white; margin-left: 6px;">
                       <i data-lucide="trash-2" style="width: 12px; height: 12px; vertical-align: middle;"></i> លុប
                   </button>`;
            
            return `
                <tr>
                    <td><strong>${admin.username}</strong></td>
                    <td>${admin.name}</td>
                    <td><code>${admin.password}</code></td>
                    <td>
                        <button class="btn btn-secondary" onclick="openEditAdminModal('${admin.username}')" style="padding: 4px 8px; font-size: 0.75rem; height: auto;">
                            <i data-lucide="edit" style="width: 12px; height: 12px; vertical-align: middle;"></i> កែប្រែ
                        </button>
                        ${deleteBtn}
                    </td>
                </tr>
            `;
        }).join("");
    }

    if (teacherTbody) {
        teacherTbody.innerHTML = db.teachers.map((tch, index) => {
            const assignedText = tch.assignedClass ? `ថ្នាក់ទី ${tch.assignedClass}` : "គ្មាន";
            const pwd = tch.password || "123";
            return `
                <tr>
                    <td><strong>${tch.id}</strong></td>
                    <td>${tch.name}</td>
                    <td>${tch.specialization}</td>
                    <td><span class="badge ${tch.assignedClass ? 'badge-success' : 'badge-secondary'}">${assignedText}</span></td>
                    <td><code>${pwd}</code></td>
                    <td>
                        <button class="btn btn-secondary" onclick="openEditPermissionModal('teacher', '${tch.id}')" style="padding: 4px 8px; font-size: 0.75rem; height: auto;">
                            <i data-lucide="key" style="width: 12px; height: 12px; vertical-align: middle;"></i> កែប្រែសិទ្ធិ
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    if (studentTbody) {
        studentTbody.innerHTML = db.students.map((std, index) => {
            const pwd = std.password || "123";
            return `
                <tr>
                    <td><strong>${std.id}</strong></td>
                    <td>${std.nameKh}</td>
                    <td>${std.gender}</td>
                    <td><strong>${std.class}</strong></td>
                    <td><code>${pwd}</code></td>
                    <td>
                        <button class="btn btn-secondary" onclick="openEditPermissionModal('student', '${std.id}')" style="padding: 4px 8px; font-size: 0.75rem; height: auto;">
                            <i data-lucide="key" style="width: 12px; height: 12px; vertical-align: middle;"></i> កែប្រែសិទ្ធិ
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }
    lucide.createIcons();
}

function openEditAdminModal(username) {
    const admin = db.admins.find(a => a.username === username);
    if (!admin) return;

    document.getElementById("adminModalTitle").textContent = "កែប្រែគណនី Admin";
    document.getElementById("adminFormSubmitBtn").textContent = "រក្សាទុកការកែប្រែ";
    document.getElementById("adminEditIndex").value = admin.username;

    const usernameInput = document.getElementById("adminUsername");
    usernameInput.value = admin.username;
    usernameInput.disabled = (admin.username.toLowerCase() === "admin");

    document.getElementById("adminFullName").value = admin.name;
    document.getElementById("adminPassword").value = admin.password;

    document.getElementById("adminModal").classList.add("active");
}

function deleteAdmin(username) {
    if (username.toLowerCase() === "admin") {
        alert("មិនអាចលុបគណនី Admin គោលបានទេ!");
        return;
    }
    const admin = db.admins.find(a => a.username === username);
    if (!admin) return;

    if (confirm(`តើអ្នកពិតជាចង់លុបគណនី Admin ឈ្មោះ "${admin.name}" (${admin.username}) មែនទេ?`)) {
        db.admins = db.admins.filter(a => a.username !== username);
        db.addLog(`បានលុបគណនី Admin៖ ${admin.name} (${admin.username})`);
        db.save();
        renderUsersSection();
    }
}

function openEditPermissionModal(role, id) {
    const roleInput = document.getElementById("editPermissionRole");
    const userIdInput = document.getElementById("editPermissionUserId");
    const userDisplay = document.getElementById("editPermissionUserDisplay");
    const classGroup = document.getElementById("editPermissionClassGroup");
    const classSelect = document.getElementById("editPermissionClass");
    const passwordInput = document.getElementById("editPermissionPassword");

    if (!roleInput || !userIdInput || !userDisplay) return;

    roleInput.value = role;
    userIdInput.value = id;
    userDisplay.value = id;

    if (role === "teacher") {
        if (classGroup) classGroup.style.display = "block";
        const teacher = db.teachers.find(t => t.id === id);
        if (teacher) {
            if (classSelect) classSelect.value = teacher.assignedClass || "";
            if (passwordInput) passwordInput.value = teacher.password || "123";
        }
    } else {
        if (classGroup) classGroup.style.display = "none";
        const student = db.students.find(s => s.id === id);
        if (student) {
            if (passwordInput) passwordInput.value = student.password || "123";
        }
    }

    const modal = document.getElementById("editPermissionModal");
    if (modal) modal.classList.add("active");
}

// --- REPORT CARD SIGNATURE & DATE CONFIGURATION BY CLASS ---
function initReportCardConfigForm() {
    const classSelect = document.getElementById("reportCardConfigClassSelect");
    const teacherSelect = document.getElementById("reportCardConfigTeacherSelect");
    const nameInput = document.getElementById("reportCardConfigTeacherName");
    const phoneInput = document.getElementById("reportCardConfigTeacherPhone");
    const khmerDateInput = document.getElementById("reportCardConfigKhmerDate");
    const solarDateInput = document.getElementById("reportCardConfigSolarDate");

    if (!classSelect || !teacherSelect || !nameInput || !phoneInput || !khmerDateInput || !solarDateInput) return;

    // Populate classes dropdown based on db.classes
    classSelect.innerHTML = db.classes.map(cls => `<option value="${cls}">ថ្នាក់ទី ${cls}</option>`).join("");

    // Populate teachers dropdown
    teacherSelect.innerHTML = '<option value="">-- ជ្រើសរើសគ្រូ ឬវាយបញ្ចូលខាងក្រោម --</option>' +
        db.teachers.map(tch => `<option value="${tch.id}">${tch.name} (${tch.specialization})</option>`).join("");

    // Define load settings function
    const loadClassSettings = (className) => {
        if (!db.reportCardSettings) {
            db.reportCardSettings = {};
        }
        const settings = db.reportCardSettings[className];
        if (settings) {
            nameInput.value = settings.teacherName || "";
            phoneInput.value = settings.teacherPhone || "";
            khmerDateInput.value = settings.khmerDate || "";
            solarDateInput.value = settings.solarDate || "";

            // Set teacherSelect match if any
            const matchedTch = db.teachers.find(t => t.name === settings.teacherName);
            teacherSelect.value = matchedTch ? matchedTch.id : "";
        } else {
            // Find teacher assigned to this class
            const assignedTch = db.teachers.find(t => t.assignedClass === className);
            if (assignedTch) {
                nameInput.value = assignedTch.name;
                phoneInput.value = assignedTch.phone || "";
                teacherSelect.value = assignedTch.id;
            } else {
                nameInput.value = "";
                phoneInput.value = "";
                teacherSelect.value = "";
            }
            khmerDateInput.value = "";
            solarDateInput.value = "";
        }
    };

    // Initial load for first class
    if (classSelect.value) {
        loadClassSettings(classSelect.value);
    }

    // Listen for class changes
    classSelect.onchange = () => {
        loadClassSettings(classSelect.value);
    };

    // Listen for teacher selection changes
    teacherSelect.onchange = () => {
        const val = teacherSelect.value;
        if (val) {
            const tch = db.teachers.find(t => t.id === val);
            if (tch) {
                nameInput.value = tch.name;
                phoneInput.value = tch.phone || "";
            }
        }
    };

    // Autofill date helpers
    const btnFillKhmer = document.getElementById("btnFillCurrentKhmerDate");
    if (btnFillKhmer) {
        btnFillKhmer.onclick = () => {
            khmerDateInput.value = getKhmerLunarDateString(new Date());
        };
    }

    const btnFillSolar = document.getElementById("btnFillCurrentSolarDate");
    if (btnFillSolar) {
        btnFillSolar.onclick = () => {
            solarDateInput.value = getKhmerSolarDateString(new Date());
        };
    }
}

// --- GOOGLE SHEETS INTEGRATION SYSTEM ---

// Status bar indicator controller
function updateGoogleSyncStatus(state, message = "") {
    const syncBtn = document.getElementById("googleSyncBtn");
    if (!syncBtn) return;
    
    if (state === "syncing") {
        syncBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> <span>កំពុងសមកាលកម្ម...</span>`;
        syncBtn.style.backgroundColor = "var(--warning-color)";
        syncBtn.style.borderColor = "var(--warning-color)";
        syncBtn.style.color = "white";
    } else if (state === "success") {
        syncBtn.innerHTML = `<i data-lucide="check-circle"></i> <span>បានសមកាលកម្ម</span>`;
        syncBtn.style.backgroundColor = "#0f9d58";
        syncBtn.style.borderColor = "#0f9d58";
        syncBtn.style.color = "white";
    } else if (state === "error") {
        syncBtn.innerHTML = `<i data-lucide="cloud-off"></i> <span>សមកាលកម្មបរាជ័យ</span>`;
        syncBtn.style.backgroundColor = "var(--danger-color)";
        syncBtn.style.borderColor = "var(--danger-color)";
        syncBtn.style.color = "white";
    } else {
        syncBtn.innerHTML = `<i data-lucide="sheet"></i> <span>ភ្ជាប់ Google Sheet</span>`;
        syncBtn.style.backgroundColor = "#0f9d58";
        syncBtn.style.borderColor = "#0f9d58";
        syncBtn.style.color = "white";
    }
    if (window.lucide) {
        lucide.createIcons();
    }
}

// 1. Sync data to Google Sheets (POST Request)
function syncToGoogleSheets(isSilent = false) {
    if (!GOOGLE_SHEET_WEBAPP_URL) {
        if (!isSilent) alert("សូមកំណត់ Web App URL នៅក្នុងកូដ app.js (បន្ទាត់ទី 5) ជាមុនសិន!");
        updateGoogleSyncStatus("error", "No URL configured");
        return Promise.reject("No URL");
    }

    updateGoogleSyncStatus("syncing");

    const payload = {
        classes: db.classes,
        timetables: db.timetables,
        students: db.students,
        teachers: db.teachers,
        subjects: db.subjects,
        attendance: db.attendance,
        grades: db.grades,
        invoices: db.invoices,
        expenses: db.expenses,
        logs: db.logs,
        reportCardSettings: db.reportCardSettings,
        admins: db.admins
    };

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
    };
    if (isSilent) {
        fetchOptions.keepalive = true;
    }

    return fetch(GOOGLE_SHEET_WEBAPP_URL, fetchOptions)
        .then(() => {
            updateGoogleSyncStatus("success");
            if (!isSilent) alert("រក្សាទុក និងបញ្ជូនទិន្នន័យទៅ Google Sheets បានជោគជ័យ!");
        })
        .catch(err => {
            updateGoogleSyncStatus("error", err.toString());
            console.error("Sync to Google Sheets error:", err);
            if (!isSilent) alert("ការរក្សាទុកទៅ Google Sheets បរាជ័យ៖ " + err.toString());
        });
}

// 2. Fetch data from Google Sheets (GET Request)
function fetchFromGoogleSheets(isSilent = false) {
    if (!GOOGLE_SHEET_WEBAPP_URL) {
        if (!isSilent) alert("សូមកំណត់ Web App URL នៅក្នុងកូដ app.js (បន្ទាត់ទី 5) ជាមុនសិន!");
        updateGoogleSyncStatus("error", "No URL configured");
        return Promise.reject("No URL");
    }

    updateGoogleSyncStatus("syncing");

    return fetch(GOOGLE_SHEET_WEBAPP_URL)
        .then(response => response.json())
        .then(res => {
            if (res.status === "success" && res.data && Object.keys(res.data).length > 0) {
                const data = res.data;
                const keys = ["classes", "timetables", "students", "teachers", "subjects", "attendance", "grades", "invoices", "expenses", "logs", "reportCardSettings", "admins"];

                let updated = false;
                keys.forEach(key => {
                    if (data[key]) {
                        db[key] = data[key];
                        updated = true;
                    }
                });

                if (updated) {
                    db.saveLocalOnly();
                    refreshAllUI();
                    updateGoogleSyncStatus("success");
                    if (!isSilent) alert("ទាញយកទិន្នន័យពី Google Sheets បានជោគជ័យ និងធ្វើបច្ចុប្បន្នភាព UI!");
                } else {
                    updateGoogleSyncStatus("success");
                    if (!isSilent) alert("គ្មានទិន្នន័យត្រឹមត្រូវនៅលើ Google Sheets ឡើយ។");
                }
            } else {
                updateGoogleSyncStatus("error", "Invalid format");
                if (!isSilent) alert("ការទាញយកបរាជ័យ៖ ទិន្នន័យទទេ ឬខុសទម្រង់!");
            }
        })
        .catch(err => {
            updateGoogleSyncStatus("error", err.toString());
            console.error("Fetch from Google Sheets error:", err);
            if (!isSilent) alert("ការតភ្ជាប់ទៅ Google Sheets បរាជ័យ៖ " + err.toString());
        });
}

// 3. UI Refresh helper after data pull
function refreshAllUI() {
    const activeSec = document.querySelector(".content-section.active");
    if (activeSec) {
        loadSectionData(activeSec.id);
    }
    populateClassSelectors();
}

// 4. Initialize Google Sync Config Form & Action listeners
function initGoogleSyncConfig() {
    const btnTest = document.getElementById("btnTestGoogleConnection");
    if (btnTest) {
        btnTest.addEventListener("click", () => {
            if (!GOOGLE_SHEET_WEBAPP_URL) {
                alert("សូមកំណត់ Web App URL នៅក្នុងកូដ app.js (បន្ទាត់ទី 5) ជាមុនសិន!");
                return;
            }
            btnTest.disabled = true;
            btnTest.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> កំពុងភ្ជាប់...`;
            lucide.createIcons();

            fetch(GOOGLE_SHEET_WEBAPP_URL)
                .then(response => response.json())
                .then(res => {
                    if (res.status === "success") {
                        alert("ការសាកល្បងជោគជ័យ! ការតភ្ជាប់ទៅ Google Sheets ដំណើរការធម្មតា។");
                    } else {
                        alert("ការតភ្ជាប់ទទួលបានជោគជ័យ ប៉ុន្តែការឆ្លើយតបខុសទម្រង់៖ " + JSON.stringify(res));
                    }
                })
                .catch(err => {
                    alert("ការតភ្ជាប់បរាជ័យ៖ " + err.toString());
                })
                .finally(() => {
                    btnTest.disabled = false;
                    btnTest.innerHTML = `<i data-lucide="link"></i> សាកល្បងតភ្ជាប់`;
                    lucide.createIcons();
                });
        });
    }

    const btnSync = document.getElementById("btnSyncToGoogleSheets");
    if (btnSync) {
        btnSync.addEventListener("click", () => {
            if (!GOOGLE_SHEET_WEBAPP_URL) {
                alert("សូមកំណត់ Web App URL នៅក្នុងកូដ app.js (បន្ទាត់ទី 5) ជាមុនសិន!");
                return;
            }
            btnSync.disabled = true;
            btnSync.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> កំពុងបញ្ជូន...`;
            lucide.createIcons();

            syncToGoogleSheets(false)
                .finally(() => {
                    btnSync.disabled = false;
                    btnSync.innerHTML = `<i data-lucide="upload-cloud"></i> បញ្ជូនទៅ Sheets`;
                    lucide.createIcons();
                });
        });
    }

    const btnFetch = document.getElementById("btnFetchFromGoogleSheets");
    if (btnFetch) {
        btnFetch.addEventListener("click", () => {
            if (!GOOGLE_SHEET_WEBAPP_URL) {
                alert("សូមកំណត់ Web App URL នៅក្នុងកូដ app.js (បន្ទាត់ទី 5) ជាមុនសិន!");
                return;
            }
            btnFetch.disabled = true;
            btnFetch.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> កំពុងទាញយក...`;
            lucide.createIcons();

            fetchFromGoogleSheets(false)
                .finally(() => {
                    btnFetch.disabled = false;
                    btnFetch.innerHTML = `<i data-lucide="download-cloud"></i> ទាញពី Sheets`;
                    lucide.createIcons();
                });
        });
    }

    const btnCopy = document.getElementById("btnCopyGasCode");
    if (btnCopy) {
        btnCopy.addEventListener("click", () => {
            const code = document.getElementById("gasCodeTemplate").textContent;
            navigator.clipboard.writeText(code)
                .then(() => {
                    const originalText = btnCopy.textContent;
                    btnCopy.textContent = "ចម្លងរួចរាល់ (Copied!)";
                    btnCopy.style.backgroundColor = "var(--success-color)";
                    btnCopy.style.color = "white";
                    setTimeout(() => {
                        btnCopy.textContent = originalText;
                        btnCopy.style.backgroundColor = "";
                        btnCopy.style.color = "";
                    }, 2000);
                })
                .catch(err => {
                    alert("មិនអាចចម្លងកូដស្វ័យប្រវត្តបានឡើយ៖ " + err.toString());
                });
        });
    }
}

// --- PWA SERVICE WORKER REGISTRATION ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered successfully:', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}
