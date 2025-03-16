# Contact App Express TS

Ini adalah aplikasi Kontak yang dibangun dengan Express dan TypeScript. Aplikasi ini memungkinkan pengguna untuk mendaftar, login, dan mengelola kontak serta alamat mereka.

## Fitur

- Pendaftaran Pengguna
- Login Pengguna
- Buat, Baca, Perbarui, Hapus (CRUD) Kontak
- Buat, Baca, Perbarui, Hapus (CRUD) Alamat

## Prasyarat

- Node.js
- PostgreSQL
- Prisma

## Pengaturan

1. Clone repository:

```bash
git clone https://github.com/Rindo88/contact-app-express-ts.git
cd contact-app-express-ts
```

2. Install dependencies:

```bash
npm install
```

3. Atur database:

- Buat file `.env` di direktori root dan tambahkan URL database Anda:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/contactapp
```

- Jalankan migrasi Prisma:

```bash
npx prisma migrate dev
```

4. Compile aplikasi:

```bash
tsc
```

5. Mulai aplikasi  *Pastikan run pada file index yang ada pada folder dist*:

```bash
npm run dev
```

## Dokumentasi API

### User API

- [Spesifikasi User API](./docs/user.md)

### Contact API

- [Spesifikasi Contact API](./docs/contact.md)

### Address API

- [Spesifikasi Address API](./docs/address.md)

## Menjalankan Tes

Untuk menjalankan tes, gunakan perintah berikut:

```bash
npm test
```

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

Anda dapat memperbarui README.md dengan konten di atas.
