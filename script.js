// script.js
document.addEventListener("DOMContentLoaded", function() {
    const data = window.siteContent;
    if (!data) {
        console.error("content.js ডাটা পাওয়া যায়নি!");
        return;
    }

    // AOS Initialize
    if (typeof AOS !== 'undefined') { AOS.init({ duration: 800, once: true }); }

    // ১. টেক্সট ও লোগো রেন্ডারিং
    document.getElementById('site-fresh-logo').src = data.logoUrl;
    document.getElementById('site-title-bn').innerText = data.siteTitleBn;
    document.getElementById('site-title-en').innerText = data.siteTitleEn;
    document.getElementById('class-time-badge').innerText = data.classTimeBadge;
    document.getElementById('edit-main-heading').innerText = data.mainHeading;
    document.getElementById('edit-sub-heading').innerText = data.subHeading;
    
    const heroBtn = document.getElementById('hero-admission-btn');
    heroBtn.innerText = data.admissionBtnText;
    heroBtn.href = data.admissionFormLink;

    document.getElementById('notice-label').innerText = data.noticeLabel;
    document.getElementById('edit-notice').innerText = data.noticeText;

    // আমাদের সম্পর্কে
    document.getElementById('about-section-title').innerText = data.aboutSectionTitle;
    document.getElementById('edit-about-text').innerText = data.aboutText;
    document.getElementById('about-sub-title').innerText = data.aboutSubTitle;
    
    const deptList = document.getElementById('about-dept-list');
    deptList.innerHTML = data.aboutDepts.map(dept => `<li>${dept}</li>`).join('');

    document.getElementById('founder-title').innerText = data.founderTitle;
    document.getElementById('edit-founder-speech').innerText = data.founderSpeech;
    document.getElementById('founder-name').innerText = data.founderName;

    // ২. মেনু জেনারেট করা (Desktop & Mobile)
    const navMenu = document.getElementById('nav-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    let menuHtml = '';
    let mobileMenuHtml = '';
    
    data.navMenus.forEach((menu, index) => {
        const zakatClass = menu.isZakat ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-300 hover:text-red-400';
        const icon = menu.isZakat ? '<i class="fas fa-hand-holding-usd mr-1"></i>' : '';
        
        menuHtml += `<a href="${menu.link}" class="${zakatClass} transition block py-2 md:py-0">${icon}${menu.text}</a>`;
        
        const borderClass = index === data.navMenus.length - 1 ? '' : 'border-b border-gray-900';
        mobileMenuHtml += `<a href="${menu.link}" class="${zakatClass} transition block py-2 ${borderClass}">${icon}${menu.text}</a>`;
    });
    
    navMenu.innerHTML = menuHtml;
    mobileMenu.innerHTML = mobileMenuHtml;

    // মোবাইল মেনু টগল লজিক
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // ৩. শিক্ষক জোন জেনারেট করা
    document.getElementById('teachers-section-title').innerText = data.teachersSectionTitle;
    document.getElementById('teachers-section-desc').innerText = data.teachersSectionDesc;
    const teachersGrid = document.getElementById('teachers-grid');
    
    teachersGrid.innerHTML = data.teachers.map(t => `
        <div onclick="handleTeacherClick('${t.id}')" class="bg-slate-900 p-6 rounded-xl text-center shadow-lg border border-gray-800 hover:border-sky-500 transition duration-300 cursor-pointer group">
            <div class="w-28 h-28 mx-auto mb-4 relative">
                <img src="${t.img}" alt="${t.name}" class="w-full h-full object-cover rounded-full border-2 border-sky-400 shadow-md group-hover:scale-105 transition" id="timg-${t.id.replace('t','')}" onerror="this.outerHTML='<div class=\\'w-full h-full bg-blue-950 rounded-full flex items-center justify-center text-sky-400 text-4xl\\'><i class=\\'fas fa-user-tie\\'></i></div>'">
            </div>
            <h4 class="font-bold text-lg text-white group-hover:text-sky-400 transition" id="${t.id}-name">${t.name}</h4>
            <p class="text-red-400 text-sm font-medium" id="${t.id}-desg">${t.desg}</p>
            <span id="${t.id}-phone" class="hidden">${t.phone}</span>
            <span id="${t.id}-email" class="hidden">${t.email}</span>
            <span id="${t.id}-edu" class="hidden">${t.edu}</span>
            <span id="${t.id}-exp" class="hidden">${t.exp}</span>
            <span class="text-xs text-gray-500 mt-2 block underline group-hover:text-gray-300">বিস্তারিত দেখুন</span>
        </div>
    `).join('');

    // ৪. গ্যালারি জেনারেট করা
    document.getElementById('gallery-title').innerText = data.galleryTitle;
    document.getElementById('gallery-desc').innerText = data.galleryDesc;
    const galleryGrid = document.getElementById('gallery-grid');
    
galleryGrid.innerHTML = data.galleryItems.map((item, index) => `
    <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-sky-500 transition duration-300 group">
        <div class="h-52 overflow-hidden bg-slate-950">
            <!-- ছবিতে ক্লিক করলে লাইটবক্স ওপেন করার জন্য ‘href’ ও ‘cursor-pointer’ যোগ করা হয়েছে -->
            <a href="#gallery-lightbox" onclick="openLightbox('${item.img}', '${item.title}')">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 id="gal-${index+1}" cursor-pointer" onerror="this.src='https://via.placeholder.com/600x400/1e293b/3b8df8?text=Photo+${index+1}'">
            </a>
        </div>
        <div class="p-4">
            <h4 class="font-bold text-white text-base">${item.title}</h4>
            <p class="text-gray-400 text-xs mt-1 leading-relaxed">${item.desc}</p>
        </div>
    </div>
`).join('');

    // ৫. ভর্তি জোন ও যাকাত লজিক রেন্ডার
    document.getElementById('admission-zone-title').innerText = data.admissionZoneTitle;
    document.getElementById('admission-zone-desc').innerText = data.admissionZoneDesc;
    document.getElementById('fees-calc-title').innerText = data.feesCalcTitle;
    document.getElementById('fees-calc-desc').innerText = data.feesCalcDesc;
    document.getElementById('lbl-select-class').innerText = data.lblSelectClass;
    
    // লেবেল টেক্সট ডায়নামিক অ্যাসাইনমেন্ট
    document.getElementById('lbl-adm-fee-text').innerText = data.lblAdmFeeText;
    document.getElementById('lbl-monthly-fee-text').innerText = data.lblMonthlyFeeText;
    document.getElementById('lbl-boarding-fee-text').innerText = data.lblBoardingFeeText;

    document.getElementById('reg-title').innerText = data.regTitle;
    document.getElementById('reg-desc').innerText = data.regDesc;
    
    const regFormBtn = document.getElementById('reg-form-btn');
    regFormBtn.innerHTML = `<i class="fas fa-external-link-alt mr-2"></i>${data.regFormBtnText}`;
    regFormBtn.href = data.admissionFormLink;

    // ড্রপডাউনে ক্লাসগুলোর অপশন ডায়নামিক লোড করা
    const calcDeptSelect = document.getElementById('calcDept');
    let selectOptionsHtml = '<option value="" disabled selected hidden>একটি ক্লাস নির্বাচন করুন</option>';
    for (const key in data.classFeesData) {
        selectOptionsHtml += `<option value="${key}" class="text-white bg-slate-900">${data.classFeesData[key].className}</option>`;
    }
    calcDeptSelect.innerHTML = selectOptionsHtml;

    document.getElementById('zakat-title').innerText = data.zakatTitle;
    document.getElementById('zakat-desc').innerText = data.zakatDesc;
    document.getElementById('zakat-box-title').innerText = data.zakatBoxTitle;
    document.getElementById('zakat-box-speech').innerText = data.zakatBoxSpeech;
    document.getElementById('zk-bkash').innerText = data.bkashNumber;
    document.getElementById('zk-nagad').innerText = data.nagadNumber;

    document.getElementById('result-title').innerText = data.resultTitle;
    document.getElementById('result-desc').innerText = data.resultDesc;

    document.getElementById('f-addr-title').innerText = data.fAddrTitle;
    document.getElementById('f-addr-text').innerHTML = `<i class="fas fa-map-marker-alt text-red-400 mr-2 inline-block"></i>${data.fAddrText}`;
    document.getElementById('f-phone-title').innerText = data.fPhoneTitle;
    document.getElementById('f-phone-1').innerHTML = `<i class="fas fa-phone-alt text-sky-400 mr-2"></i>${data.fPhone1}`;
    document.getElementById('f-phone-2').innerHTML = `<i class="fab fa-whatsapp text-green-400 mr-2"></i>${data.fPhone2}`;
    document.getElementById('f-email').innerHTML = `<i class="fas fa-envelope text-blue-400 mr-2"></i>${data.fEmail}`;
    document.getElementById('f-map-title').innerText = data.fMapTitle;
    document.getElementById('f-map-content').innerHTML = data.fMapEmbed;
    document.getElementById('f-copyright').innerText = data.fCopyright;
    // সোশ্যাল মিডিয়া লিংক ডাইনামিক অ্যাসাইনমেন্ট
    document.getElementById('f-facebook').href = data.facebookLink;
    document.getElementById('f-youtube').href = data.youtubeLink;
    document.getElementById('f-instagram').href = data.instagramLink;

    // ব্যাক টু টপ লজিক
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) backToTopBtn.classList.remove('hidden');
        else backToTopBtn.classList.add('hidden');
    });
    backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

// ডাইনামিক ফি ক্যালকুলেশন ফাংশন
function calculateFees() {
    const data = window.siteContent;
    const dept = document.getElementById('calcDept').value;
    const feeDisplayArea = document.getElementById('feeDisplayArea');
    const admission = document.getElementById('admissionFee');
    const monthly = document.getElementById('monthlyFee');
    const boarding = document.getElementById('boardingFee');

    if (!dept || !data.classFeesData[dept]) { 
        feeDisplayArea.classList.add('hidden'); 
        return; 
    }
    
    feeDisplayArea.classList.remove('hidden');

    admission.innerText = data.classFeesData[dept].admission;
    monthly.innerText = data.classFeesData[dept].monthly;
    boarding.innerText = data.classFeesData[dept].boarding;
}

function calculateLiveZakat() {
    const gold = parseFloat(document.getElementById('zkGold').value) || 0;
    const silver = parseFloat(document.getElementById('zkSilver').value) || 0;
    const cash = parseFloat(document.getElementById('zkCash').value) || 0;
    const business = parseFloat(document.getElementById('zkBusiness').value) || 0;
    const debt = parseFloat(document.getElementById('zkDebt').value) || 0;

    const totalAssets = (gold + silver + cash + business) - debt;
    const finalZakat = totalAssets > 0 ? (totalAssets * 0.025) : 0;

    document.getElementById('zkTotalAsset').innerText = (totalAssets > 0 ? totalAssets : 0) + " ৳";
    document.getElementById('zkFinalZakat').innerText = Math.round(finalZakat) + " ৳";
}

function handleTeacherClick(prefix) {
    const name = document.getElementById(`${prefix}-name`).innerText;
    const designation = document.getElementById(`${prefix}-desg`).innerText;
    const img = document.getElementById(`timg-${prefix.replace('t','')}`).src;
    const phone = document.getElementById(`${prefix}-phone`).innerText;
    const email = document.getElementById(`${prefix}-email`).innerText;
    const education = document.getElementById(`${prefix}-edu`).innerText;
    const experience = document.getElementById(`${prefix}-exp`).innerText;

    document.getElementById('modalTeacherName').innerText = name;
    document.getElementById('modalTeacherDesignation').innerText = designation;
    document.getElementById('modalTeacherImg').src = img;
    document.getElementById('modalTeacherPhone').innerText = phone;
    document.getElementById('modalTeacherEmail').innerText = email;
    document.getElementById('modalTeacherEdu').innerText = education;
    document.getElementById('modalTeacherExp').innerText = experience;
    
    document.getElementById('teacherModal').classList.remove('hidden');
}

function closeTeacherModal() { document.getElementById('teacherModal').classList.add('hidden'); }

const sheetCsvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvnlUilrzWLNrH32wDq41Spyd_hJygMOtQzhEEMYXrPApH0BwvmY84LpZV_7Wscm746t2IjfkaGqMX/pub?output=csv";

// বাংলা সংখ্যাকে ইংরেজি সংখ্যায় রূপান্তর করার ফাংশন
function banglaToEnglishNumber(str) {
    const banglaNumbers = {'০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4, '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9};
    return str.replace(/[০-৯]/g, function(w) {
        return banglaNumbers[w];
    });
}

async function searchOnlineResult() {
    let rollInput = document.getElementById('searchRoll').value.trim();
    const examInput = document.getElementById('searchExam').value;
    const yearInput = document.getElementById('searchYear').value;
    const resultCard = document.getElementById('resultCard');
    const searchBtn = document.getElementById('searchBtn');
    const marksTableBody = document.getElementById('marksTableBody');

    if(!rollInput || !examInput || !yearInput) { alert("অনুগ্রহ করে সকল তথ্য পূরণ করুন!"); return; }
    
    rollInput = banglaToEnglishNumber(rollInput);

    searchBtn.innerHTML = `<i class="fas fa-spinner animate-spin mr-2"></i> অনুসন্ধান করা হচ্ছে...`;
    searchBtn.disabled = true;

    try {
        const response = await fetch(sheetCsvUrl + "&t=" + new Date().getTime());
        const data = await response.text();
        const rows = data.split(/\r?\n/).map(row => {
            let result = []; let current = ''; let inQuotes = false;
            for (let char of row) {
                if (char === '"') inQuotes = !inQuotes;
                else if (char === ',' && !inQuotes) { result.push(current.trim()); current = ''; }
                else current += char;
            }
            result.push(current.trim()); return result;
        });

        const headers = rows[0];
        let studentData = null;
        
        for (let i = 1; i < rows.length; i++) {
            let sheetRoll = banglaToEnglishNumber(rows[i][0] || "");
            if (sheetRoll === rollInput && rows[i][1] === examInput && rows[i][2] === yearInput) { 
                studentData = rows[i]; 
                break; 
            }
        }

        if (studentData) {
            document.getElementById('resName').innerText = "নাম: " + (studentData[3] || 'N/A');
            document.getElementById('resRoll').innerText = "রোল: " + studentData[0];
            document.getElementById('resClass').innerText = "ক্লাস: " + (studentData[4] || 'N/A');
            
            // পূর্বের কোনো সামারি বক্স থাকলে তা রিমুভ করার জন্য
            const oldSummary = document.getElementById('resultSummaryBox');
            if(oldSummary) oldSummary.remove();

            marksTableBody.innerHTML = "";
            let hasMarks = false;
            
            let totalMarks = 0;
            let subjectCount = 0;
            let failedSubjectsCount = 0; // ৩৩ এর নিচে কয়টা বই আছে তা গোনার জন্য

            for(let j = 5; j < headers.length; j++) {
                if(headers[j] && studentData[j] !== undefined && studentData[j] !== "") {
                    hasMarks = true;
                    
                    let currentMarkStr = banglaToEnglishNumber(studentData[j]);
                    let currentMark = parseFloat(currentMarkStr) || 0;
                    
                    totalMarks += currentMark;
                    subjectCount++;

                    let markColorClass = "text-sky-400";
                    if(currentMark < 33) {
                        failedSubjectsCount++; // ৩৩ এর নিচে মার্ক পেলে কাউন্ট ১ বাড়বে
                        markColorClass = "text-red-500 font-extrabold bg-red-500/10 px-2 py-0.5 rounded"; 
                    }

                    const tr = document.createElement('tr');
                    tr.className = "border-b border-gray-800/50 hover:bg-gray-900/30 transition";
                    tr.innerHTML = `
                        <td class="px-4 py-3 font-medium text-gray-300">${headers[j]}</td>
                        <td class="px-4 py-3 text-right font-bold ${markColorClass}">${studentData[j]}</td>
                    `;
                    marksTableBody.appendChild(tr);
                }
            }
            
            if(hasMarks) {
                let averageMark = subjectCount > 0 ? (totalMarks / subjectCount).toFixed(2) : 0;
                
                // আপনার দেওয়া লজিক অনুযায়ী পাস/ফেল ও গ্রেড নির্ধারণ
                let statusText = "";
                let statusColorClass = "";

                if (failedSubjectsCount >= 3) {
                    statusText = "ফেল (Failed)";
                    statusColorClass = "text-red-500 font-extrabold";
                } else {
                    // ১ বা ২ টা বইয়ে ফেইল থাকলেও অথবা সব পাস হলেও গড় মার্কের উপর গ্রেড বসবে
                    if (averageMark >= 90 && averageMark <= 100) {
                        statusText = "পাশ (Golden A+)";
                        statusColorClass = "text-amber-400 font-extrabold drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]";
                    } else if (averageMark >= 80 && averageMark < 90) {
                        statusText = "পাশ (A+)";
                        statusColorClass = "text-green-400 font-bold";
                    } else if (averageMark >= 60 && averageMark < 80) {
                        statusText = "পাশ (A)";
                        statusColorClass = "text-sky-400 font-bold";
                    } else {
                        statusText = "পাশ (Passed)";
                        statusColorClass = "text-gray-300 font-bold";
                    }
                }

                // ডানদিকের সামারি বক্স ডিজাইন (Tailwind CSS গ্রিড ও ফ্লেক্স ব্যবহার করে ডানে অ্যালাইন করা)
                const summaryContainerHtml = `
                    <div id="resultSummaryBox" class="mt-6 pt-4 border-t border-gray-700 flex flex-col items-end">
                        <div class="w-full sm:w-72 bg-gray-950/60 p-4 rounded-xl border border-gray-800/80 space-y-2.5 text-sm">
                            <div class="flex justify-between items-center pb-2 border-b border-gray-900">
                                <span class="text-gray-400 font-medium">সর্বমোট মার্ক:</span>
                                <span class="text-yellow-400 font-bold text-base">${totalMarks}</span>
                            </div>
                            <div class="flex justify-between items-center pb-2 border-b border-gray-900">
                                <span class="text-gray-400 font-medium">গড় মার্ক:</span>
                                <span class="text-orange-400 font-bold text-base">${averageMark}</span>
                            </div>
                            <div class="flex justify-between items-center pt-0.5">
                                <span class="text-gray-400 font-medium">ফলাফল:</span>
                                <span class="${statusColorClass} text-base">${statusText}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // টেবিলের ঠিক নিচে ডান পাশে এই বক্সটি ইনসার্ট করা হচ্ছে
                resultCard.insertAdjacentHTML('beforeend', summaryContainerHtml);
            } else { 
                marksTableBody.innerHTML = `<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">কোনো মার্কস ডাটা পাওয়া যায়নি।</td></tr>`; 
            }
            
            resultCard.classList.remove('hidden');
        } else {
            alert("কোনো ফলাফল পাওয়া যায়নি! তথ্যগুলো আবার চেক করুন।");
            resultCard.classList.add('hidden');
        }
    } catch (e) {
        alert("সার্ভার ত্রুটি! আবার চেষ্টা করুন।");
        resultCard.classList.add('hidden');
    } finally {
        searchBtn.innerHTML = `<i class="fas fa-search mr-2"></i> ফলাফল দেখুন (Search Result)`;
        searchBtn.disabled = false;
    }
}

window.addEventListener('click', function(event) {
    const teacherModal = document.getElementById('teacherModal');
    if (event.target === teacherModal) closeTeacherModal();
});
// লাইটবক্সে ডাইনামিকালি ছবি ও টাইটেল দেখানোর ফাংশন
window.openLightbox = function(imgSrc, title) {
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    
    lightboxImg.src = imgSrc;
    lightboxTitle.innerText = title;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('gallery-lightbox');
    lightbox.classList.remove('flex');
    lightbox.classList.add('hidden');
};

// ==========================================
// স্বয়ংক্রিয় নামাজের সময়সূচী সেকশন (ফাইলের শেষে যোগ করুন)
// ==========================================

// ইংরেজি সময় এবং সংখ্যাকে ১২ ঘণ্টার ফরম্যাটে ও বাংলায় রূপান্তর করার নিখুঁত ফাংশন
function convertToBanglaTime(timeStr) {
    if (!timeStr) return '--:--';
    
    try {
        let parts = timeStr.split(':');
        let hours = parseInt(parts[0]);
        let minutes = parts[1];
        
        let ampm = 'AM';
        if (hours >= 12) {
            ampm = 'PM';
            if (hours > 12) hours -= 12;
        }
        if (hours === 0) hours = 12;
        
        let formattedHours = hours < 10 ? '০' + hours : hours.toString();
        
        const englishToBangla = {'0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯'};
        
        formattedHours = formattedHours.replace(/[0-9]/g, w => englishToBangla[w]);
        let formattedMinutes = minutes.replace(/[0-9]/g, w => englishToBangla[w]);
        
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    } catch (e) {
        console.error("Time conversion error:", e);
        return '--:--';
    }
}

// যেকোনো সময় থেকে ১ মিনিট বিয়োগ করার ফাংশন (শেষ সময় বের করার জন্য)
function getEndTimeOfWaqt(nextWaqtTimeStr) {
    if (!nextWaqtTimeStr) return '--:--';
    try {
        let parts = nextWaqtTimeStr.split(':');
        let hours = parseInt(parts[0]);
        let minutes = parseInt(parts[1]);
        
        minutes -= 1; // ১ মিনিট বিয়োগ
        if (minutes < 0) {
            minutes = 59;
            hours -= 1;
            if (hours < 0) hours = 23;
        }
        
        let formattedHours = hours < 10 ? '0' + hours : hours.toString();
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
        
        return convertToBanglaTime(`${formattedHours}:${formattedMinutes}`);
    } catch (e) {
        return '--:--';
    }
}

// API থেকে সিলেটের নামাজের সময় নিয়ে আসার মূল ফাংশন
async function fetchPrayerTimes() {
    const apiUrl = "https://api.aladhan.com/v1/timingsByCity?city=Sylhet&country=Bangladesh&method=1&school=1";
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        
        if (json && json.data && json.data.timings) {
            const times = json.data.timings;
            
            // HTML elements চেক করে নিরাপদভাবে ডেটা পুশ করা
            if(document.getElementById('fajr-time')) document.getElementById('fajr-time').innerText = convertToBanglaTime(times.Fajr);
            if(document.getElementById('dhuhr-time')) document.getElementById('dhuhr-time').innerText = convertToBanglaTime(times.Dhuhr);
            if(document.getElementById('asr-time')) document.getElementById('asr-time').innerText = convertToBanglaTime(times.Asr);
            if(document.getElementById('maghrib-time')) document.getElementById('maghrib-time').innerText = convertToBanglaTime(times.Maghrib);
            if(document.getElementById('isha-time')) document.getElementById('isha-time').innerText = convertToBanglaTime(times.Isha);
            
            // শেষ সময় সেট করার লজিক
            if(document.getElementById('fajr-end')) document.getElementById('fajr-end').innerText = convertToBanglaTime(times.Sunrise);
            if(document.getElementById('dhuhr-end')) document.getElementById('dhuhr-end').innerText = getEndTimeOfWaqt(times.Asr);
            if(document.getElementById('asr-end')) document.getElementById('asr-end').innerText = getEndTimeOfWaqt(times.Maghrib);
            if(document.getElementById('maghrib-end')) document.getElementById('maghrib-end').innerText = getEndTimeOfWaqt(times.Isha);
            if(document.getElementById('isha-end')) document.getElementById('isha-end').innerText = getEndTimeOfWaqt(times.Fajr);
        }
    } catch (error) {
        console.error("নামাজের সময়সূচী লোড করতে ব্যর্থ:", error);
    }
}

// উইন্ডো বা পেজ পুরোপুরি লোড হওয়ার পর রান হবে
window.addEventListener('load', function() {
    fetchPrayerTimes();
});