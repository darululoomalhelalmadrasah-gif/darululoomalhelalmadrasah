// content.js
window.siteContent = {
    // হেডার ও লোগো
    logoUrl: "logo.png",
    siteTitleBn: "দারুল উলূম আল-হেলাল মাদ্রাসা",
    siteTitleEn: "Darul Uloom Al-Helal Madrasah",

    // মেনু আইটেম সমূহ
    navMenus: [
        { text: "আমাদের সম্পর্কে", link: "#about" },
        { text: "নামাজের সময়", link: "#prayer-times" },
        { text: "শিক্ষকবৃন্দ", link: "#teachers" },
        { text: "গ্যালারি", link: "#gallery" },
        { text: "ভর্তি ও ক্যালকুলেটর", link: "#admission-zone" },
        { text: "যাকাত ফান্ড", link: "#zakat-calc", isZakat: true },
        { text: "ফলাফল", link: "#result" },
        { text: "যোগাযোগ", link: "#contact" }
    ],

    // হিরো সেকশন
    classTimeBadge: "ক্লাস টাইম: সকাল ৯:৩০ থেকে বিকাল ৩:০০ টা",
    mainHeading: "ইসলামিক ও আধুনিক শিক্ষার এক অপূর্ব সমন্বয়",
    subHeading: "সিলেটের কদমতলী ফেরীঘাট এলাকায় ২০২৪ সালে প্রতিষ্ঠিত একটি অনন্য দ্বীনি শিক্ষাপ্রতিষ্ঠান।",
    admissionBtnText: "অনলাইনে ভর্তি হোন",
    admissionFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSdYeJiPUZ0LAKjz-tcXc-jx-M5g3ElYXpogv6neyhJBY0trAQ/viewform?usp=sharing",

    // নোটিশ বোর্ড
    noticeLabel: "নোটিশ_বোর্ড:",
    noticeText: " দারুল উলূম আল-হেলাল মাদ্রাসার ২০২৬ শিক্ষাবর্ষের নূরানী ও হিফজ বিভাগের ভর্তি কার্যক্রম চলছে। যোগাযোগ করুন। অথবা অনলাইনে রেজিস্টেশন করুন।",

    // মাদ্রাসা পরিচিতি
    aboutSectionTitle: "মাদ্রাসা পরিচিতি",
    aboutText: "দারুল উলূম আল-হেলাল মাদ্রাসা কোমলমতি শিক্ষার্থীদের ইসলামিক মূল্যবোধ, নৈতিকতা এবং আদর্শ নাগরিক হিসেবে গড়ে তোলাই আমাদের মূল লক্ষ্য।",
    aboutSubTitle: "আমাদের বিভাগসমূহ:",
    aboutDepts: [
        "নূরানী শিশু শ্রেণী, ১ম, ২য় ও ৩য় শ্রেণী",
        "আন্তর্জাতিক মানসম্পন্ন হিফজ বিভাগ"
    ],
    founderTitle: "প্রতিষ্ঠাতা বাণী",
    founderSpeech: "\"আমরা চাই প্রতিটি সন্তান যেন দ্বীনি শিক্ষার পাশাপাশি যুগের চাহিদা অনুযায়ী সুশিক্ষিত হয়ে গড়ে ওঠে।\"",
    founderName: "- মাওলানা আবু নছর খালেদ মিয়াজী",

    // শিক্ষক তালিকা ডাটা
    teachers: [
        { id: "t1", name: "মাওলানা আবু নছর খালেদ", desg: "মুহতামিম", img: "teacher1.jpg", phone: "01304463839", email: "darululoomalhelalmadrasha@gmail.com", edu: "জামেয়া দারুল কুরআন সিলেট থেকে সফলতার সাথে দাওরায়ে হাদীস (মাস্টার্স) সম্পূর্ণ করেন।", exp: "বর্তমান মাদরাসার সুযোগ্য মুহতামিম (পরিচালক) হিসেবে দায়িত্ব পালনের পাশাপাশি বিভিন্ন সামাজিক ও ইসলামী সংগঠন সফলভাবে পরিচালনা করছেন। একই সাথে সর্বস্তরের মানুষের কল্যাণে নানামুখী মানবিক ও সেবামূলক কার্যক্রমে যুক্ত রয়েছেন।" },
        { id: "t2", name: "মাওলানা এনামুল হক", desg: "নাজিমে তালিমাত", img: "teacher2.jpg", phone: "01758777092", email: "mdanamulhaquead2@gmail.com", edu: "ঐতিহ্যবাহী দ্বীনি শিক্ষা প্রতিষ্ঠান 'জামেয়া তাওয়াক্কুলিয়া রেঙ্গা, সিলেট' থেকে দাওরায়ে হাদীস (মাস্টার্স) সম্পূর্ণ করেন।", exp: "নূরানী শিক্ষা পদ্ধতিতে বাংলা, ইংরেজি ও গণিত বিষয়ে পাঠদানের ক্ষেত্রে অত্যন্ত অভিজ্ঞ এবং দক্ষ। এছাড়াও বর্তমান যুগের সাথে তাল মিলিয়ে আইটি (IT) বা তথ্যপ্রযুক্তি খাতে বিশেষ জ্ঞান ও পারদর্শিতা রয়েছে।" },
        { id: "t3", name: "মাওলানা মাসুদ আহমদ", desg: "সহকারী শিক্ষক", img: "teacher3.jpg", phone: "অফিসিয়াল নাম্বার", email: "অফিসিয়াল ইমেইল", edu: "ঐতিহ্যবাহী দ্বীনি শিক্ষা প্রতিষ্ঠান 'জামেয়া মুজাহিরুস সুন্নাহ খরারিয়া, সিলেট' থেকে দাওরায়ে হাদীস (মাস্টার্স) সম্পূর্ণ করন।", exp:"জামিয়া মাদানিয়া কওমিয়া (শেখ বাড়ি) থেকে নূরানী ও আরবি শিক্ষার ওপর বিশেষ প্রশিক্ষণপ্রাপ্ত। সহজ, সাবলীল ও কার্যকর পদ্ধতিতে শিশুদের শুদ্ধ তিলাওয়াত এবং নূরানী কায়দা শিক্ষাদানে বিশেষভাবে দক্ষ।" },
        { id: "t4", name: "হা. হাফিজুর রহমান", desg: "সহকারী শিক্ষক", img: "teacher4.jpg", phone: "অফিসিয়াল নাম্বার", email: "অফিসিয়াল ইমেইলে", edu: "হাফেজ-এ-কোরআন (আন্তর্জাতিক তাজবীদ প্রাপ্ত) জামিয়া ইসলামিয়া আনওয়ারুল উলুম উমরপুর বাজার টাইটেল মাদরাসা", exp: "মাকামাত অর্থাৎ আরবি সুরবিদ্যা যোগ্যতা সম্পন্ন হাফিজ: হুফফাজ মোয়াল্লিম প্রশিক্ষণে সর্বোচ্চ নাম্বার প্রাপ্ত শিক্ষক।" }
    ],
    teachersSectionTitle: "আমাদের শিক্ষকবৃন্দ",
    teachersSectionDesc: "বিস্তারিত তথ্য দেখতে শিক্ষকের প্রোফাইলে ক্লিক করুন",

    // গ্যালারি ডাটা
    galleryTitle: "মাদ্রাসার ফটো গ্যালারি",
    galleryDesc: "আমাদের মাদ্রাসার কিছু স্মরণীয় মুহূর্ত ও কার্যক্রম",
    galleryItems: [
        { img: "gallery1.jpg", title: "মাদ্রাসার প্রধান ফটক ও ভবন", desc: "আমাদের মাদ্রাসার সুন্দর ও মনোরম পরিবেশের সম্মুখভাগ, যেখানে শিক্ষার্থীরা প্রতিদিন সুশৃঙ্খলভাবে প্রবেশ করে।" },
        { img: "gallery2.jpg", title: "নূরানী বিভাগের পাঠদান কার্যক্রম", desc: "কোমলমতি শিশুদের অত্যন্ত যত্ন ও আধুনিক ডিজিটাল পদ্ধতিতে আরবী ও বুনিয়াদী শিক্ষা প্রদান করা হচ্ছে।" },
        { img: "gallery3.jpg", title: "আন্তর্জাতিক মানসম্পন্ন হিফজ ক্লাস", desc: "তাজবীদ সহকারে সহীহ-শুদ্ধভাবে পবিত্র কোরআন মুখস্থ করার জন্য নিবিড় তত্ত্বাবধানে ছাত্রদের ক্লাস চলছে।" },
        { img: "gallery4.jpg", title: "ইসলামিক সাংস্কৃতিক অনুষ্ঠান", desc: "শিক্ষার্থীদের মেধা ও মানসিক বিকাশের জন্য নিয়মিত হামদ-নাত ও ক্বিরাত প্রতিযোগিতার আয়োজন।" },
        { img: "gallery5.jpg", title: "পুরস্কার বিতরণী মুহূর্ত", desc: "কৃতী শিক্ষার্থীদের মাঝে মাদ্রাসার পক্ষ থেকে সম্মাননা ও বিশেষ পুরস্কার প্রদানের এক আনন্দঘন মুহূর্ত।" },
        { img: "gallery6.jpg", title: "মাসিক অভিভাবক সমাবেশ", desc: "শিক্ষার্থীদের পড়াশোনার মান আরও উন্নত করার লক্ষ্যে শিক্ষক ও অভিভাবকদের যৌথ মতবিনিময় সভা।" }
    ],

    // ভর্তি জোন ও ক্যালকুলেটর টেক্সট লেবেলসমূহ
    admissionZoneTitle: "ভর্তি ও ফি ব্যবস্থাপনা কেন্দ্র",
    admissionZoneDesc: "ফি হিসাব করুন এবং সরাসরি অনলাইনে ভর্তি আবেদন সম্পন্ন করুন",
    feesCalcTitle: "ভর্তি ফি ও বেতন ক্যালকুলেটর",
    feesCalcDesc: "আপনার কাঙ্ক্ষিত ক্লাসটি নির্বাচন করে আনুমানিক মোট খরচ দেখে নিন",
    lblSelectClass: "শ্রেণী বা বিভাগ নির্বাচন করুন",
    lblAdmFeeText: "ভর্তি ও সেশন ফি:",
    lblMonthlyFeeText: "মাসিক বেতন:",
    lblBoardingFeeText: "বোর্ডিং ফি:",
    regTitle: "অনলাইনে ভর্তি নিবন্ধন",
    regDesc: "নিচের বাটনে ক্লিক করে সঠিক তথ্য দিয়ে গুগল ফরমে ভর্তি আবেদনটি সরাসরি পূরণ করুন।",
    regFormBtnText: "ভর্তি ফরম পূরণ করুন (Admission Form)",

    // প্রতিটি ক্লাসের ফি-এর ডাইনামিক ডাটা (এখান থেকে আপনি ক্লাস এডিট ও অ্যাড করতে পারবেন)
    classFeesData: {
        nurani_baby: { className: "নূরানী শিশু শ্রেণী", admission: "০০০০ ৳", monthly: "০০০ ৳", boarding: "০০০ ৳" },
        nurani_1st: { className: "নূরানী প্রথম শ্রেণী", admission: "০০০০ ৳", monthly: "০০০ ৳", boarding: "০০০ ৳" },
        nurani_2nd: { className: "নূরানী দ্বিতীয় শ্রেণী", admission: "০০০০ ৳", monthly: "০০০ ৳", boarding: "০০০ ৳" },
        nurani_3rd: { className: "নূরানী তৃতীয় শ্রেণী", admission: "০০০০ ৳", monthly: "০০০ ৳", boarding: "০০০ ৳" },
        hifz: { className: "আন্তর্জাতিক হিফজ বিভাগ", admission: "০০০০ ৳", monthly: "০০০ ৳", boarding: "০০০ ৳" }
    },

    // যাকাত সেকশন
    zakatTitle: "যাকাত হিসাব ও মাদ্রাসা যাকাত ফান্ড",
    zakatDesc: "আপনার সম্পদের সঠিক যাকাত হিসাব করুন এবং মাদ্রাসার এতিম-অসহায় ছাত্রদের ফান্ডে দান করুন।",
    zakatBoxTitle: "আপনার যাকাত এতিমখানায় দিন",
    zakatBoxSpeech: "মাদ্রাসার লিল্লাহ ফান্ড ও এতিমখানায় আপনার যাকাত, ফিতরা ও সদকা প্রদান করে ইহকাল ও পরকালের সওয়াব হাসিল করুন। আপনার দেওয়া অর্থ সরাসরি গরিব, অসহায় ও এতিম ছাত্রদের পড়াশোনা এবং ভরনপোষণের কাজে ব্যয় করা হয়।",
    bkashNumber: "+8801304463839",
    nagadNumber: "+8801852986173",

    // রেজাল্ট সেকশন
    resultTitle: "ফলাফল অনুসন্ধান কেন্দ্র",
    resultDesc: "গুগল শিট ডাটাবেজ থেকে লাইভ ফলাফল চেক করুন",

    // ফুটার সেকশন
    fAddrTitle: "যোগাযোগের ঠিকানা",
    // ঠিকানার ভেতরে সরাসরি গুগল ম্যাপের লিংক ঢুকিয়ে দেওয়া হয়েছে
    fAddrText: '<a href="https://maps.app.goo.gl/AJVyRzA8LnowCbQHA" target="_blank" class="hover:text-red-500 hover:underline transition duration-300">দরিয়া শাহ মাজার রোড, ফেরীঘাট, কদমতলী, সিলেট।</a>',
    
    fPhoneTitle: "জরুরী নাম্বার",
    // কল নাম্বারে ক্লিক করলে সরাসরি মোবাইলের কলে নিয়ে যাবে (tel:)
    fPhone1: '<a href="tel:+8801304463839" class="hover:text-sky-400 transition duration-300">+8801304463839</a>',
    // হোয়াটসঅ্যাপ নাম্বারে ক্লিক করলে সরাসরি চ্যাটে নিয়ে যাবে (wa.me)
    fPhone2: '<a href="https://wa.me/8801852986173" target="_blank" class="hover:text-green-400 transition duration-300">+8801852986173</a>',
       // ইমেইলে ক্লিক করলে সরাসরি মেইলে নিয়ে যাবে (mailto:)
    fEmail: '<a href="mailto:darululoomalhelalmadrasha@gmail.com" class="hover:text-blue-400 transition duration-300">darululoomalhelalmadrasha@gmail.com</a>',
    
    fMapTitle: "লোকেশন ম্যাপ",
    fMapEmbed: '<iframe src="https://maps.google.com/maps?q=Darul%20Uloom%20Al%20Helal%20Madrasha%20Sylhet&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" class="rounded-lg opacity-80 hover:opacity-100 transition"></iframe>',
    fCopyright: "© 2026 Darul Uloom Al-Helal Madrasah. All Rights Reserved. Developed by Enamul Haque",

    // নতুন যুক্ত হওয়া ফেসবুক ও ইউটিউব সোশ্যাল লিংক সমূহ
    facebookLink: "https://www.facebook.com/DarulUlloomAlHelalMadrasha",
    youtubeLink: "https://www.youtube.com/@DarulUloomAlHelalMadrashasyl",
    instagramLink: "https://www.instagram.com/anamul_._haque"
};