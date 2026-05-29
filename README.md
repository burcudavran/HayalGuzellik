# Hayal Güzellik — Profesyonel Güzellik & Bakım Web Sitesi

Bu proje, **İleri Web Tasarımı** dersi kapsamında gerçek bir müşteri (Hayal Güzellik) için geliştirilmiştir. Tek sayfalık (single-page) bir kurumsal web sitesidir. Projede tamamen saf (Vanilla) web teknolojileriyle modern kullanıcı deneyimi (UX) ve temiz kod (Clean Code) prensipleri merkeze alınarak optimize edilmiştir.

---

## 📋 Proje Genel Bakışı

| Kriter | Detay |
| :--- | :--- |
| **Müşteri** | Hayal Güzellik Salonu |
| **Sektör** | Güzellik, Kozmetik ve Kişisel Bakım Hizmetleri |
| **Amaç** | İşletmenin sunduğu profesyonel bakım hizmetlerini (lazer epilasyon, cilt bakımı, kuaför vb.) dijital dünyaya taşımak; marka bilinirliğini ve lüks imajını güçlendirmek; potansiyel danışanlara mobil uyumlu, hızlı ve erişilebilir bir deneyim sunarak entegre iletişim formu üzerinden aktif randevu ve bilgi talebi toplamaktır. |

## Teknik Gereksinimler

- Responsive tasarım (mobil ≤768px, tablet 769–1024px, masaüstü ≥1025px)
- Semantik HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Flexbox ve Grid (Float kullanılmamıştır)
- Lighthouse Performance ≥ 80 (mobil)
- Lighthouse Accessibility ≥ 90
- Temel SEO (title, meta description, heading hiyerarşisi, alt/a11y etiketleri)
- Çalışan iletişim formu (Web3Forms)
- En az bir JS etkileşimi (mobil menü, scroll reveal, tema değiştirme, form gönderimi)
- Görsel optimizasyonu (SVG ikonlar, sıkıştırılmış WebP)
- HTTPS yayın (SSL sertifikası ile)
- Favicon

## Kullanılan Teknolojiler

- HTML5
- CSS3 (değişkenler, Flexbox, Grid, animasyonlar)
- JavaScript (ES5 — orta seviye öğrenci seviyesinde)
- Web3Forms (iletişim formu)

## Özellikler

- Aydınlık/karanlık tema desteği (localStorage'a kaydedilir)
- Mobil hamburger menü
- Scroll ile sayfa açılım animasyonu (scroll reveal)
- Klavye erişilebilirliği (skip link, focus-visible, tabindex)
- WCAG AA kontrast oranları
- Web3Forms ile çalışan iletişim formu
- Çoklu dil (TR + EN)

## Dosya Yapısı

```
hayalguzellik/
├── index.html        # Ana sayfa (Türkçe)
├── en.html           # İngilizce sürüm
├── README.md         # Proje dökümantasyonu
└── assets/
    ├── css/
    │   └── style.css # Tüm stiller
    ├── js/
    │   └── main.js   # Tüm JavaScript
    ├── img/
    │   ├── optimized/ # WebP görseller
    │   └── (orijinal görseller)
    └── icons/
        ├── favicon.svg
        └── logo.svg
```
