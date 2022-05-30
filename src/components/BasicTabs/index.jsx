import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TabStyle.css";
import Git from "../../images/Network Graph_Github.PNG";
import Figma from "../../images/SimpleGrid.PNG";

const BasicTabs = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Tabs
          justify
          variant="pills"
          defaultActiveKey="tab-1"
          className="mb-1 p-0"
        >
          <Tab eventKey="tab-1" title="GIT">
            Dari materi Version and Branch Management ini, saya mempelajari :
            <br />
            1. Mengenal Git
            <br />
            Git adalah salah satu VCS (sistem yang mengelola perubahan file)
            yang digunakan para developer untuk mengembangkan software secara
            bersama-sama.
            <br />
            2. Inisialisasi Git
            <br />
            Sebelum menghubungkan Git dengan GitHub, perlu menginisialisasi
            sebuah project menjadi repository terlebih dahulu dengan perintah
            git init
            <br />
            Setelah itu, untuk membuat remote pada GitHub, digunakan perintah
            git remote add origin [link_github]
            <br />
            3. Command Basic pada Git
            <br />
            git checkout -b "nama_branch" : membuat branch baru dan langsung
            masuk ke branch tersebut
            <br />
            git add . : memasukkan seluruh project pada staging area
            <br />
            git commit -m : memasukkan project pada git dengan menuliskan notes
            dari aksi
            <br />
            git push origin nama_branch : mengupload project ke GitHub
            <br />
            git merge --no-ff nama_branch : melakukan merge pada 2 buah branch
            dengan metode no fast forward (terlihat cabangnya menjadi satu)
            <br />
            <br />
            Hasil screenshot :
            <br />
            <img src={Git} alt="Screenshot Tab 1" />
          </Tab>
          <Tab eventKey="tab-2" title="Intro UI UX">
            Dari materi Introduction UI dan UX ini, saya mempelajari :
            <br />
            **1. UserExperience (UX)**
            <br />
            Apapun yang pengguna rasakan ketika menggunakan produk.
            <br />
            UX terdiri dari 6 bagian :
            <br />
            1. Business Logic <br />
            2. Technology
            <br />
            3. Interaction Logic <br />
            4. Design <br />
            5. Computer Communication <br />
            6. Business <br />
            Tahapan yang harus dilakukan ketika ingin mendesign sebuah UX :{" "}
            <br />
            1.Empathize - Berpura-pura melihat dunia user - Memahami perasaan
            user (menghargai user) - Komunikasi yang baik dengan user Mengenal
            **User Persona** User Persona merupakan user profile dari user untuk
            mengidentifikasi kebutuhan, tujuan, dan kebiasaan user Dari user
            persona, kita bisa membuat **Job Stories** Job Stories terdiri dari
            3 bagian utama, yaitu situasi, motivasi, dan outcome Contoh :
            Situasi : Ketika liburan akhir tahun, saya memiliki kebiasaan makan
            malam dengan porsi yang cukup banyak selama 2 minggu Motivasi :
            Saya ingin menetapkan resolusi tahun baru, yaitu olahraga rutin 3
            kali seminggu Outcome : sehingga saya bisa memiliki pola hidup yang
            baik, sehat, dan bangga kepada diri saya sendiri **Usability
            Testing** Cara untuk mengetahui apakah user mudah dalam menggunakan
            aplikasi kita, apakah aplikasi kita efisien/efektif digunakan oleh
            user untuk mencapai tujuannya 2. Define Menggunakan informasi dari
            tahap empathize dan disusun berdasarkan prioritas, outputnya akan
            menemukan masalah inti yang dapat difokuskan dalam pengembangan UX
            pada produk. Menentukan **User Goal** merupakan flow dari user, yang
            dibutuhkan user, perjalanan dari user ketika menggunakan produk
            kita, dan tujuan user Maka, dibuatlah **Task Flow** Contoh : User
            Flow fitur Challenge User menekan tombol Challenge pada bagian bawah
            navigasi : User memilih 1 challenge : User menekan tombol Start
            Now : Sukses! Selanjutnya, terdapat **Wireflow** Wireflow merupakan
            kombinasi antara wireframe dan flowchart Wireframe merupakan
            kerangka untuk menata item dalam website/aplikasi Flowchart
            merupakan diagram yang menampilkan langkah-langkah dan keputusan
            untuk melakukan sebuah proses dari 1 program 3. Ideate 4. Prototype
            5. Validate Note : Prototype dan validate sering kali dilakukan
            berulang-ulang karena biasanya pada tahap ini ditemukan
            kesalahan-kesalahan yang harus diperbaiki untuk mendapatkan UX yang
            maksimal --- **2. User Interface** Visual yang user gunakan ketika
            berinteraksi dengan produk. Terdapat 4 pilar yaitu : 1. Consistency
            → Menggunakan design dengan pola yang sama pada setiap halaman →
            Urutan aktivitas/aksi memiliki situasi yang mirip 2. Keep the
            interface simple → Menghilangkan elemen yang sekiranya tidak berguna
            pada halaman → Menggunakan bahasa yang jelas agar memudahkan user
            dalam menggunakan aplikasi 3. Good Typography → Kumpulan huruf yang
            digunakan memiliki pola yang sama → Perhatikan ukuran, font, dan
            susunan font agar mudah dibaca oleh user 4. Offer Informative
            Feedback → Feedback yang kita berikan harus berharga, relevan, dan
            jelas → Buat deskripsi dari balikan yang ada di aplikasi Jika telah
            menerapkan 4 pilar di atas, maka dipastikan aplikasi dapat
            memudahkan dan memenuhi kebutuhan user **3. Prototype** Sebuah
            simulasi yang menggambarkan produk final yang bertujuan untuk
            menguji produk kita sebelum kita menghabiskan banyak biaya untuk
            memproduksi produk, mendapat balikan dari user, stakeholder, dan
            team, serta enunjukkan interaksi dan alur kepada developer Terdapat
            3 pilar : 1. Representation → Menunjukkan platform yang akan
            digunakan (desktop / mobile) 2. Precision → Ketepatan yang bagus 3.
            Interactivity → Menunjukkan fungsionalitas oada setiap page Tools
            prototype : 1. Xd dari Adobe 2. Sketch 3. Balsamiq
          </Tab>
          <Tab eventKey="tab-3" title="Figma">
            Dari materi Introduction UI dan UX ini, saya mempelajari :
            <br />
            **1.Pengenalan Figma** <br />
            Alat prototyping dan editor untuk vector graphics yang berbasis
            website. <br />
            Keuntungan Figma : <br />
            1. Aplikasi gratis <br />
            2. Berjalan di Mac dan PC <br />
            3. Bisa berkolaborasi secara real time <br />
            4. Bisa import sketch files <br />
            5. Bisa mengintegrasi para developers baik pada Mac maupun PC <br />
            6. Memiliki library team <br />
            7. Integrasi prototype dengan kualitas bagus Kekurangan : Harus
            terhubung dengan internet <br />
            **2. Tools / IDE pada Figma** <br />
            1. Import file sketch yang lama <br />
            2. Mengatur frame baru <br />
            3. Kolom grid dan layout <br />
            4. Layer dan group <br />
            5. Gambar <br />
            6. Typography <br />
            **3. Membuat Frame dan Grid yang Simpel** <br />
            <br />
            Membuat pengaturan seperti berikut pada Tab Design di bagian kanan.
            <img src={Figma} alt="Screenshot Tab 1" />
          </Tab>
          <Tab eventKey="tab-4" title="HTML">
            Dari materi HTML ini, saya mempelajari : <br />
            Front End Developer <br />
            Bagian website yang dapat dilihat oleh user dan tampilannya menarik
            user
          </Tab>
          <Tab eventKey="tab-5" title="CSS">
            Dari materi CSS ini saya mempelajari : <br />
            Singkatan dari Cascading Style Sheet <br />
            Fungsi CSS : <br />
            <br />
            Membuat tampilan website lebih menarik dengan mengatur beberapa
            elemen, yaitu warna, ukuran, font, background, lebar, tinggi, posisi
            layout.
          </Tab>
          <Tab eventKey="tab-6" title="Bootstrap">
            Dari materi Bootstrap ini, saya mempelajari : <br />
            Pengertian bootstrap <br />
            Sebuah front-end, CSS, dan JavaScript yang berguna untuk memudahkan
            dalam pembuatan website yang _responsive_
          </Tab>
          <Tab eventKey="tab-7" title="JavaScript">
            Dari materi Javascript ini, saya mempelajari : <br />
            Javascript merupakan bahasa pemrograman _script_ tingkat tinggi yang
            bahasanya lebih dimengerti manusia. Kegunaannya untuk berinteraksi
            dengan halaman web.
          </Tab>
          <Tab eventKey="tab-8" title="Clean Code">
            Dari materi clean code ini, saya mempelajari : <br />
            Clean code merupakan tampilan kode yang mudah dibaca, dipahami, dan
            mudah diubah oleh programmer atau orang lain.
            <br />
            Mengapa harus ada clean code? <br />
            1. Kadang kala kita mengerjakan suatu website/projek tidak sendiri,
            melainkan bersama orang lain. Sehingga kode tidak 100% kita yang
            kerjakan, maka itu harus dapat dimengerti orang lain juga.
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default BasicTabs;
