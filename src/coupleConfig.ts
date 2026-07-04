export const coupleConfig = {
  groomNameEnglish: "Rahul",
  brideNameEnglish: "Shilpa",

  groomNameMarathi: "राहुल",
  brideNameMarathi: "शिल्पा",

  coupleNameEnglish: "Rahul ♡ Shilpa",
  coupleNameMarathi: "राहुल ♡ शिल्पा",

  marriageDateISO: "2025-07-06T00:00:00+05:30",
  marriageDateEnglish: "6 July 2025",
  marriageDateMarathi: "६ जुलै २०२५",

  anniversaryDateEnglish: "6 July 2026",
  anniversaryDateMarathi: "६ जुलै २०२६",

  anniversaryNumber: 1,

  photo1: "/images/photo-1.jpg",
  photo2: "/images/photo-2.jpg",
  photo3: "/images/photo-3.jpg",
  photo4: "/images/photo-4.jpg",

  photo1Position: "center center",
  photo2Position: "center center",
  photo3Position: "center 25%",
  photo4Position: "center center",

  audioSource: "/audio/anniversary-music.mp3",

  mainTitleMarathi: "आपल्या सहजीवनाचं पहिलं सुंदर वर्ष",
  mainSubtitleMarathi: "आठवणींचं एक वर्ष… सोबतीची आयुष्यभराची वाट…",

  signatureFrom: "राहुल",
  signatureTo: "शिल्पा",

  creatorName: "Kshitij Kamble",
  creatorEmail: "atomicwork247@gmail.com",
} as const;

export type CoupleConfig = typeof coupleConfig;
