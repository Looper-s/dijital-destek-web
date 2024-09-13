# Dijital Destek Projesi

Bu proje, Dijital Destek adlı bir dijital dönüşüm danışmanlık şirketinin web sitesini içerir. Astro ve Tailwind CSS kullanılarak geliştirilmiştir.

## Gereksinimler

- Node.js (v14.0.0 veya üzeri)
- npm (v6.0.0 veya üzeri)

## Kurulum

1. Projeyi klonlayın:
   ```
   git clone https://github.com/kullanici-adi/dijital-destek-projesi.git
   cd dijital-destek-projesi
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

## Geliştirme Ortamında Çalıştırma

Projeyi geliştirme modunda çalıştırmak için:

```
npm run dev
```

Bu komut, projenizi geliştirme modunda çalıştırır. Tarayıcınızda `http://localhost:3000` adresine gidilerek projeyi görüntüleyebilirsiniz.

## Production için Derleme

Projeyi production için derlemek için:

```
npm run build
```

Bu komut, projenizi production için derler. Derlenmiş dosyalar `dist` klasörüne yerleştirilir.

## Production Ortamında Çalıştırma

Derlenmiş projeyi önizlemek için:

```
npm run preview
```
Bu komut, derlenmiş projeyi `http://localhost:5000` adresinde çalıştıracaktır.

## Deployment

Bu proje, statik site olarak derlendiği için herhangi bir statik site hosting hizmetine (örneğin Netlify, Vercel, GitHub Pages) kolayca deploy edilebilir.

1. `npm run build` komutunu çalıştırın.
2. Oluşturulan `dist/` klasörünü tercih ettiğiniz hosting hizmetine yükleyin.

## Proje Yapısı

- `src/`: Kaynak kodları
  - `components/`: Yeniden kullanılabilir bileşenler
  - `layouts/`: Sayfa düzenleri
  - `pages/`: Sayfalar
- `public/`: Statik dosyalar
- `astro.config.mjs`: Astro yapılandırma dosyası
- `tailwind.config.cjs`: Tailwind CSS yapılandırma dosyası

## Özelleştirme

- Renk şemasını değiştirmek için `tailwind.config.cjs` dosyasını düzenleyin.
- Yeni sayfalar eklemek için `src/pages/` klasörüne yeni `.astro` dosyaları ekleyin.
- Mevcut bileşenleri düzenlemek veya yeni bileşenler eklemek için `src/components/` klasörünü kullanın.

## Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.

