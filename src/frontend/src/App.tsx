import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────

const NEWS = [
  {
    id: 1,
    title: "ग्राम पंचायत बैठक",
    body: "अगली ग्राम पंचायत बैठक 20 मार्च को सुबह 10 बजे पंचायत भवन में होगी। सभी ग्रामवासियों से उपस्थित रहने का अनुरोध है।",
    date: "15 मार्च 2026",
    tag: "पंचायत",
  },
  {
    id: 2,
    title: "नई सड़क निर्माण शुरू",
    body: "बिश्ट गाँव से मुख्य मार्ग तक नई पक्की सड़क का निर्माण कार्य प्रधानमंत्री ग्राम सड़क योजना के तहत शुरू हो गया है।",
    date: "12 मार्च 2026",
    tag: "विकास",
  },
  {
    id: 3,
    title: "किसान सम्मान निधि वितरण",
    body: "पीएम किसान सम्मान निधि की अगली किस्त इस माह के अंत तक सभी पात्र किसानों के खातों में जमा कर दी जाएगी।",
    date: "10 मार्च 2026",
    tag: "कृषि",
  },
  {
    id: 4,
    title: "स्वास्थ्य शिविर आयोजन",
    body: "आगामी 25 मार्च को प्राथमिक स्वास्थ्य केंद्र में निःशुल्क चिकित्सा शिविर का आयोजन किया जाएगा। सभी ग्रामवासी लाभ उठाएँ।",
    date: "8 मार्च 2026",
    tag: "स्वास्थ्य",
  },
  {
    id: 5,
    title: "होली मेला 2026",
    body: "इस वर्ष होली उत्सव पर गाँव के चौपाल में सांस्कृतिक कार्यक्रम एवं मेले का आयोजन किया जाएगा। तिथि: 14 मार्च 2026।",
    date: "5 मार्च 2026",
    tag: "उत्सव",
  },
];

const MARKET_PRICES = [
  { item: "आलू", price: "₹20/किग्रा", change: "↓", trend: "down" },
  { item: "टमाटर", price: "₹35/किग्रा", change: "↑", trend: "up" },
  { item: "प्याज", price: "₹28/किग्रा", change: "→", trend: "stable" },
  { item: "गेहूँ", price: "₹22/किग्रा", change: "↑", trend: "up" },
  { item: "चावल", price: "₹42/किग्रा", change: "→", trend: "stable" },
  { item: "मक्का", price: "₹18/किग्रा", change: "↓", trend: "down" },
  { item: "सरसों", price: "₹55/किग्रा", change: "↑", trend: "up" },
  { item: "दाल (मूँग)", price: "₹95/किग्रा", change: "→", trend: "stable" },
  { item: "गोभी", price: "₹15/किग्रा", change: "↓", trend: "down" },
  { item: "बैंगन", price: "₹25/किग्रा", change: "→", trend: "stable" },
];

const SERVICES = [
  {
    name: "प्राथमिक स्वास्थ्य केंद्र",
    phone: "01234-567890",
    timing: "सुबह 8 - दोपहर 2",
    icon: "🏥",
  },
  {
    name: "सरकारी प्राथमिक विद्यालय",
    phone: "01234-567891",
    timing: "सुबह 7 - दोपहर 1",
    icon: "🏫",
  },
  {
    name: "उचित मूल्य की दुकान",
    phone: "01234-567892",
    timing: "सुबह 9 - शाम 5",
    icon: "🏪",
  },
  {
    name: "ग्राम पंचायत कार्यालय",
    phone: "01234-567893",
    timing: "सुबह 10 - शाम 4",
    icon: "🏛️",
  },
  {
    name: "स्टेट बैंक ऑफ इंडिया",
    phone: "01234-567894",
    timing: "सुबह 10 - दोपहर 2",
    icon: "🏦",
  },
  {
    name: "डाकघर",
    phone: "01234-567895",
    timing: "सुबह 9 - शाम 5",
    icon: "📮",
  },
  {
    name: "कृषि सेवा केंद्र",
    phone: "01234-567896",
    timing: "सुबह 9 - शाम 6",
    icon: "🌾",
  },
  {
    name: "पशु चिकित्सालय",
    phone: "01234-567897",
    timing: "सुबह 8 - दोपहर 1",
    icon: "🐄",
  },
];

const PHOTOS = [
  { id: 1, title: "गाँव का मंदिर", emoji: "🛕", color: "#e8d5b7" },
  { id: 2, title: "हरे-भरे खेत", emoji: "🌾", color: "#c8e6c9" },
  { id: 3, title: "गाँव का तालाब", emoji: "💧", color: "#b3e5fc" },
  { id: 4, title: "पंचायत भवन", emoji: "🏛️", color: "#f8bbd0" },
  { id: 5, title: "होली उत्सव", emoji: "🎨", color: "#ffe0b2" },
  { id: 6, title: "फसल कटाई", emoji: "🌻", color: "#f9fbe7" },
  { id: 7, title: "बैल-गाड़ी परेड", emoji: "🐂", color: "#fce4ec" },
  { id: 8, title: "ग्राम सभा", emoji: "👨‍👩‍👧‍👦", color: "#e1bee7" },
  { id: 9, title: "सूर्योदय", emoji: "🌅", color: "#fff9c4" },
];

const EMERGENCY = [
  { name: "पुलिस", number: "100", icon: "👮", color: "#1565c0" },
  { name: "एम्बुलेंस", number: "108", icon: "🚑", color: "#c62828" },
  { name: "अग्निशमन", number: "101", icon: "🚒", color: "#e65100" },
  { name: "सरपंच", number: "98765-43210", icon: "👳", color: "#2D5016" },
  {
    name: "प्राथमिक स्वास्थ्य केंद्र",
    number: "01234-567890",
    icon: "🏥",
    color: "#00695c",
  },
  { name: "बिजली विभाग", number: "1912", icon: "⚡", color: "#f57f17" },
  { name: "ग्राम प्रधान", number: "98765-12345", icon: "🧑‍💼", color: "#4a148c" },
  { name: "जल निगम", number: "1800-180-5555", icon: "💧", color: "#01579b" },
];

const TAG_COLORS: Record<string, string> = {
  पंचायत: "#2D5016",
  विकास: "#1565c0",
  कृषि: "#f5a623",
  स्वास्थ्य: "#00695c",
  उत्सव: "#c62828",
};

// ─── Custom Village Logo SVG ────────────────────────────────────────────────

function VillageLogo() {
  return (
    <svg
      role="img"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bisht गाँव जैन क्रांश logo"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4a7c26" />
          <stop offset="100%" stopColor="#2D5016" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6aaa30" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2D5016" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Circle background */}
      <circle cx="60" cy="60" r="58" fill="url(#bgGrad)" />
      <circle cx="60" cy="60" r="58" fill="url(#glowGrad)" />
      <circle
        cx="60"
        cy="60"
        r="58"
        fill="none"
        stroke="#f5a623"
        strokeWidth="2.5"
        strokeDasharray="4 3"
      />

      {/* Inner ring */}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* Tree trunk */}
      <rect x="56" y="62" width="8" height="22" rx="2" fill="#8B5E3C" />

      {/* Tree foliage - bottom */}
      <ellipse cx="60" cy="62" rx="20" ry="12" fill="#5aad2e" />
      {/* Tree foliage - middle */}
      <ellipse cx="60" cy="52" rx="16" ry="12" fill="#4a9c22" />
      {/* Tree foliage - top */}
      <ellipse cx="60" cy="40" rx="11" ry="10" fill="#3d8a18" />
      {/* Tree top tip */}
      <ellipse cx="60" cy="30" rx="6" ry="7" fill="#2d7010" />

      {/* Wheat stalk LEFT */}
      <line
        x1="22"
        y1="90"
        x2="22"
        y2="55"
        stroke="#f5a623"
        strokeWidth="1.8"
      />
      <ellipse cx="22" cy="52" rx="4" ry="6" fill="#f5a623" />
      <line
        x1="22"
        y1="65"
        x2="16"
        y2="58"
        stroke="#f5a623"
        strokeWidth="1.2"
      />
      <ellipse cx="14" cy="56" rx="3" ry="5" fill="#e8951a" />
      <line
        x1="22"
        y1="70"
        x2="29"
        y2="63"
        stroke="#f5a623"
        strokeWidth="1.2"
      />
      <ellipse cx="30" cy="61" rx="3" ry="5" fill="#e8951a" />

      {/* Wheat stalk RIGHT */}
      <line
        x1="98"
        y1="90"
        x2="98"
        y2="55"
        stroke="#f5a623"
        strokeWidth="1.8"
      />
      <ellipse cx="98" cy="52" rx="4" ry="6" fill="#f5a623" />
      <line
        x1="98"
        y1="65"
        x2="91"
        y2="58"
        stroke="#f5a623"
        strokeWidth="1.2"
      />
      <ellipse cx="90" cy="56" rx="3" ry="5" fill="#e8951a" />
      <line
        x1="98"
        y1="70"
        x2="105"
        y2="63"
        stroke="#f5a623"
        strokeWidth="1.2"
      />
      <ellipse cx="106" cy="61" rx="3" ry="5" fill="#e8951a" />

      {/* Wheat stalk LEFT 2 */}
      <line
        x1="32"
        y1="90"
        x2="32"
        y2="62"
        stroke="#f5a623"
        strokeWidth="1.5"
      />
      <ellipse cx="32" cy="59" rx="3" ry="5" fill="#f5a623" />
      <line x1="32" y1="72" x2="26" y2="66" stroke="#f5a623" strokeWidth="1" />
      <ellipse cx="25" cy="64" rx="2.5" ry="4" fill="#e8951a" />

      {/* Wheat stalk RIGHT 2 */}
      <line
        x1="88"
        y1="90"
        x2="88"
        y2="62"
        stroke="#f5a623"
        strokeWidth="1.5"
      />
      <ellipse cx="88" cy="59" rx="3" ry="5" fill="#f5a623" />
      <line x1="88" y1="72" x2="94" y2="66" stroke="#f5a623" strokeWidth="1" />
      <ellipse cx="95" cy="64" rx="2.5" ry="4" fill="#e8951a" />

      {/* Ground line */}
      <path
        d="M 15 90 Q 60 86 105 90"
        stroke="rgba(255,220,100,0.5)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* House/hut silhouette at bottom */}
      {/* House body */}
      <rect
        x="47"
        y="80"
        width="26"
        height="14"
        rx="1"
        fill="rgba(255,255,255,0.85)"
      />
      {/* Roof */}
      <polygon points="44,80 60,68 76,80" fill="rgba(255,220,100,0.9)" />
      {/* Door */}
      <rect x="57" y="86" width="6" height="8" rx="1" fill="#8B5E3C" />
      {/* Window */}
      <rect
        x="49"
        y="83"
        width="5"
        height="5"
        rx="0.5"
        fill="rgba(100,200,255,0.8)"
      />
      <rect
        x="66"
        y="83"
        width="5"
        height="5"
        rx="0.5"
        fill="rgba(100,200,255,0.8)"
      />

      {/* Stars at top */}
      <circle cx="20" cy="22" r="1.5" fill="rgba(255,220,100,0.8)" />
      <circle cx="100" cy="22" r="1.5" fill="rgba(255,220,100,0.8)" />
      <circle cx="14" cy="35" r="1" fill="rgba(255,220,100,0.6)" />
      <circle cx="106" cy="35" r="1" fill="rgba(255,220,100,0.6)" />
    </svg>
  );
}

// ─── Tab Navigation ─────────────────────────────────────────────────────────

type Tab = "home" | "news" | "market" | "services" | "photos" | "emergency";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "home", label: "होम", icon: "🏡" },
  { id: "news", label: "खबरें", icon: "📰" },
  { id: "market", label: "बाजार", icon: "🛒" },
  { id: "services", label: "सेवाएँ", icon: "🏛️" },
  { id: "photos", label: "फोटो", icon: "📷" },
  { id: "emergency", label: "आपातकाल", icon: "🆘" },
];

// ─── Page Components ─────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 pb-4">
      {/* Hero */}
      <div
        className="w-full flex flex-col items-center py-8 px-4 text-white"
        style={{
          background:
            "linear-gradient(160deg, #2D5016 0%, #4a7c26 60%, #5d9a2e 100%)",
          borderRadius: "0 0 32px 32px",
        }}
      >
        <VillageLogo />
        <h1
          className="mt-4 text-2xl font-bold text-center"
          style={{
            fontFamily: "'Tiro Devanagari Hindi', serif",
            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          Bisht गाँव जैन क्रांश
        </h1>
        <p className="text-sm mt-1 opacity-80">बिश्ट गाँव जैन क्रांश</p>
        <p className="text-xs mt-2 opacity-70 text-center px-4">
          हमारा गाँव, हमारी पहचान — एकता, सेवा और समृद्धि
        </p>
      </div>

      {/* Village Stats */}
      <div className="w-full px-4">
        <h2
          className="text-base font-semibold mb-3"
          style={{ color: "#2D5016" }}
        >
          गाँव की जानकारी
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "जनसंख्या", value: "2,847", icon: "👥" },
            { label: "क्षेत्रफल", value: "12.4 वर्ग कि.मी.", icon: "🗺️" },
            { label: "घर", value: "542", icon: "🏠" },
            { label: "साक्षरता", value: "78%", icon: "📚" },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="card-hover"
              style={{ borderColor: "#c8ddb2" }}
            >
              <CardContent className="p-3 flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-xs" style={{ color: "#5a7a40" }}>
                    {stat.label}
                  </p>
                  <p className="font-bold text-sm" style={{ color: "#2D5016" }}>
                    {stat.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full px-4">
        <h2
          className="text-base font-semibold mb-3"
          style={{ color: "#2D5016" }}
        >
          त्वरित सेवाएँ
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "राशन कार्ड", icon: "📋" },
            { label: "जन्म प्रमाण", icon: "📜" },
            { label: "आय प्रमाण", icon: "💼" },
            { label: "नरेगा", icon: "⛏️" },
            { label: "पेंशन", icon: "👴" },
            { label: "वृक्षारोपण", icon: "🌳" },
          ].map((link) => (
            <div
              key={link.label}
              className="flex flex-col items-center gap-1 p-3 rounded-xl card-hover cursor-pointer"
              style={{
                background: "rgba(45,80,22,0.07)",
                border: "1px solid #c8ddb2",
              }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span
                className="text-xs text-center"
                style={{ color: "#2D5016" }}
              >
                {link.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News teaser */}
      <div className="w-full px-4">
        <h2
          className="text-base font-semibold mb-3"
          style={{ color: "#2D5016" }}
        >
          ताजा खबर
        </h2>
        <Card
          style={{ borderLeft: "4px solid #2D5016", borderColor: "#c8ddb2" }}
        >
          <CardContent className="p-3">
            <p className="text-xs font-semibold" style={{ color: "#f5a623" }}>
              पंचायत
            </p>
            <p
              className="text-sm font-bold mt-0.5"
              style={{ color: "#2D5016" }}
            >
              ग्राम पंचायत बैठक
            </p>
            <p className="text-xs mt-1" style={{ color: "#5a7a40" }}>
              अगली ग्राम पंचायत बैठक 20 मार्च को सुबह 10 बजे पंचायत भवन में होगी।
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function NewsPage() {
  return (
    <div className="px-4 py-4 flex flex-col gap-4">
      <h2
        className="text-lg font-bold"
        style={{
          color: "#2D5016",
          fontFamily: "'Tiro Devanagari Hindi', serif",
        }}
      >
        गाँव की खबरें
      </h2>
      {NEWS.map((item, idx) => (
        <Card
          key={item.id}
          data-ocid={`news.item.${idx + 1}`}
          className="card-hover"
          style={{ borderLeft: "4px solid #2D5016", borderColor: "#c8ddb2" }}
        >
          <CardHeader className="pb-2 pt-3 px-4">
            <div className="flex items-center justify-between">
              <Badge
                style={{
                  backgroundColor: TAG_COLORS[item.tag] ?? "#2D5016",
                  color: "white",
                  fontSize: "0.65rem",
                }}
              >
                {item.tag}
              </Badge>
              <span className="text-xs" style={{ color: "#8a9a70" }}>
                {item.date}
              </span>
            </div>
            <CardTitle className="text-sm mt-2" style={{ color: "#2D5016" }}>
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-3">
            <p className="text-xs leading-relaxed" style={{ color: "#4a5a30" }}>
              {item.body}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function MarketPage() {
  return (
    <div className="px-4 py-4">
      <h2
        className="text-lg font-bold mb-1"
        style={{
          color: "#2D5016",
          fontFamily: "'Tiro Devanagari Hindi', serif",
        }}
      >
        बाजार भाव
      </h2>
      <p className="text-xs mb-4" style={{ color: "#8a9a70" }}>
        आज के ताजा बाजार भाव — 14 मार्च 2026
      </p>

      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid #c8ddb2" }}
      >
        <div
          className="grid grid-cols-3 px-4 py-2 text-xs font-semibold text-white"
          style={{ background: "#2D5016" }}
        >
          <span>वस्तु</span>
          <span className="text-center">मूल्य</span>
          <span className="text-right">बदलाव</span>
        </div>
        {MARKET_PRICES.map((row, idx) => (
          <div
            key={row.item}
            data-ocid={`market.item.${idx + 1}`}
            className="grid grid-cols-3 px-4 py-3 text-sm items-center"
            style={{
              background: idx % 2 === 0 ? "#faf8f0" : "#f3f0e4",
              borderTop: "1px solid #e8e4d4",
            }}
          >
            <span style={{ color: "#2D5016" }}>{row.item}</span>
            <span
              className="text-center font-semibold"
              style={{ color: "#2D5016" }}
            >
              {row.price}
            </span>
            <span
              className="text-right font-bold text-base"
              style={{
                color:
                  row.trend === "up"
                    ? "#c62828"
                    : row.trend === "down"
                      ? "#1565c0"
                      : "#5a7a40",
              }}
            >
              {row.change}
            </span>
          </div>
        ))}
      </div>

      <p className="text-xs mt-3 text-center" style={{ color: "#8a9a70" }}>
        * भाव प्रतिदिन अपडेट किए जाते हैं
      </p>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="px-4 py-4 flex flex-col gap-3">
      <h2
        className="text-lg font-bold"
        style={{
          color: "#2D5016",
          fontFamily: "'Tiro Devanagari Hindi', serif",
        }}
      >
        सरकारी सेवाएँ
      </h2>
      {SERVICES.map((svc, idx) => (
        <Card
          key={svc.name}
          data-ocid={`services.item.${idx + 1}`}
          className="card-hover"
          style={{ borderColor: "#c8ddb2" }}
        >
          <CardContent className="p-3 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
              style={{ background: "rgba(45,80,22,0.1)" }}
            >
              {svc.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-sm truncate"
                style={{ color: "#2D5016" }}
              >
                {svc.name}
              </p>
              <p className="text-xs" style={{ color: "#5a7a40" }}>
                📞 {svc.phone}
              </p>
              <p className="text-xs" style={{ color: "#8a9a70" }}>
                ⏰ {svc.timing}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function PhotosPage() {
  return (
    <div className="px-4 py-4">
      <h2
        className="text-lg font-bold mb-4"
        style={{
          color: "#2D5016",
          fontFamily: "'Tiro Devanagari Hindi', serif",
        }}
      >
        फोटो गैलरी
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {PHOTOS.map((photo, idx) => (
          <div
            key={photo.id}
            data-ocid={`photos.item.${idx + 1}`}
            className="rounded-xl overflow-hidden flex flex-col items-center justify-center card-hover cursor-pointer"
            style={{
              background: photo.color,
              aspectRatio: "1",
              border: "1px solid #c8ddb2",
            }}
          >
            <span className="text-3xl">{photo.emoji}</span>
            <p
              className="text-xs text-center mt-1 px-1 leading-tight"
              style={{ color: "#2D5016", fontWeight: 600 }}
            >
              {photo.title}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-4" style={{ color: "#8a9a70" }}>
        गाँव की यादगार तस्वीरें
      </p>
    </div>
  );
}

function EmergencyPage() {
  return (
    <div className="px-4 py-4 flex flex-col gap-3">
      <div
        className="rounded-2xl p-3 flex items-center gap-3"
        style={{ background: "#fff3f3", border: "1px solid #f5c6c6" }}
      >
        <span className="text-2xl">⚠️</span>
        <p className="text-xs" style={{ color: "#c62828" }}>
          आपातकाल में नीचे दिए गए नंबर पर तुरंत संपर्क करें
        </p>
      </div>

      <h2
        className="text-lg font-bold"
        style={{
          color: "#2D5016",
          fontFamily: "'Tiro Devanagari Hindi', serif",
        }}
      >
        आपातकालीन संपर्क
      </h2>

      {EMERGENCY.map((contact, idx) => (
        <a
          key={contact.name}
          href={`tel:${contact.number}`}
          data-ocid={`emergency.item.${idx + 1}`}
          className="block"
        >
          <Card className="card-hover" style={{ borderColor: "#c8ddb2" }}>
            <CardContent className="p-3 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: `${contact.color}20` }}
              >
                {contact.icon}
              </div>
              <div className="flex-1">
                <p
                  className="font-semibold text-sm"
                  style={{ color: "#2D5016" }}
                >
                  {contact.name}
                </p>
                <p
                  className="text-base font-bold"
                  style={{ color: contact.color }}
                >
                  {contact.number}
                </p>
              </div>
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  background: `${contact.color}20`,
                  color: contact.color,
                }}
              >
                कॉल करें
              </span>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <div
      className="text-center py-3 text-xs"
      style={{ color: "#8a9a70", borderTop: "1px solid #e0dac8" }}
    >
      <p>
        Created by{" "}
        <span style={{ color: "#2D5016", fontWeight: 600 }}>Gaurav Bisht</span>
      </p>
      <p className="mt-0.5 opacity-70">
        © {new Date().getFullYear()}{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with caffeine.ai
        </a>
      </p>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#faf8f0",
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top Header */}
      <header
        className="flex items-center gap-2 px-4 py-3 sticky top-0 z-30"
        style={{
          background: "linear-gradient(90deg, #2D5016 0%, #4a7c26 100%)",
          boxShadow: "0 2px 8px rgba(45,80,22,0.25)",
        }}
      >
        <div className="w-7 h-7">
          <svg
            role="img"
            aria-label="Bisht गाँव जैन क्रांश logo small"
            width="28"
            height="28"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="60" cy="60" r="58" fill="#3d6b1c" />
            <rect x="56" y="62" width="8" height="22" rx="2" fill="#8B5E3C" />
            <ellipse cx="60" cy="62" rx="18" ry="10" fill="#5aad2e" />
            <ellipse cx="60" cy="52" rx="14" ry="10" fill="#4a9c22" />
            <ellipse cx="60" cy="40" rx="9" ry="9" fill="#3d8a18" />
            <polygon points="44,80 60,68 76,80" fill="rgba(255,220,100,0.9)" />
            <rect
              x="47"
              y="80"
              width="26"
              height="14"
              rx="1"
              fill="rgba(255,255,255,0.85)"
            />
            <rect x="57" y="86" width="6" height="8" rx="1" fill="#8B5E3C" />
          </svg>
        </div>
        <div>
          <h1 className="text-white font-bold text-sm leading-tight">
            Bisht गाँव जैन क्रांश
          </h1>
          <p className="text-green-200 text-xs opacity-80">बिश्ट गाँव जैन क्रांश</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {activeTab === "home" && <HomePage />}
        {activeTab === "news" && <NewsPage />}
        {activeTab === "market" && <MarketPage />}
        {activeTab === "services" && <ServicesPage />}
        {activeTab === "photos" && <PhotosPage />}
        {activeTab === "emergency" && <EmergencyPage />}
        <Footer />
      </main>

      {/* Bottom Tab Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40"
        style={{
          maxWidth: 480,
          margin: "0 auto",
          background: "white",
          borderTop: "1px solid #e0dac8",
          boxShadow: "0 -2px 12px rgba(45,80,22,0.1)",
        }}
      >
        <div className="grid grid-cols-6">
          {TABS.map((tab) => (
            <button
              type="button"
              key={tab.id}
              data-ocid={`nav.${tab.id}.tab`}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center justify-center py-2 gap-0.5 transition-all"
              style={{
                color: activeTab === tab.id ? "#2D5016" : "#8a9a70",
                borderTop:
                  activeTab === tab.id
                    ? "2.5px solid #2D5016"
                    : "2.5px solid transparent",
                background:
                  activeTab === tab.id ? "rgba(45,80,22,0.06)" : "transparent",
              }}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span
                className="text-center leading-tight"
                style={{
                  fontSize: "0.58rem",
                  fontWeight: activeTab === tab.id ? 700 : 400,
                }}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
