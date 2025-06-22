describe('Kelas Siswa Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/panel');
    cy.get('input[name=email]').type('mariakeyni2010@gmail.com');
    cy.get('input[name=password]').type('maria_ch1234');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/panel');
  });
});

  it('TC-DASH-SI-01: Login dan Akses Dashboard', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

it('TC-KLS-2: Membuka halaman submenu Kelas Aktif', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  
    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=&type=&search=');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');
  
    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=&type=1&search=');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
});
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
});
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=2&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=1&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=2&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
});
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=1&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=2&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');
    
    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
  });

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=1&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
   });
   });
});

  it('TC-KLS-SI-03 - Membuka halaman submenu Semua Kelas', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[name="email"]').type('mariakeyni2010@gmail.com');
    cy.get('input[name="password"]').type('maria_ch1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=&type=&search=');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=&type=2&search=');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=&type=1&search=');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=2&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=2&type=1&search=');
    cy.contains('Aktif').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=2&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Marcella').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=1&type=1&search=');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});

    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=2&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Khusus').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});
    
    cy.visit('https://lms.teknologidigital.co.id/panel/student-class?status=3&type=1&search=');
    cy.contains('Selesai').should('exist');
    cy.contains('Reguler').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');

    cy.get('button').each(($el, index) => {
    cy.wrap($el).invoke('html').then(html => {
    console.log(`Button ${index}: ${html}`);
  });
});
  });

it('TC-KLS-SI-04 - Membuka halaman submenu Tugas', () => {
  // Step 1: Kunjungi halaman login
  cy.visit('https://lms.teknologidigital.co.id/login'); // update sesuai URL login sebenarnya

  // Step 2: Login sebagai siswa
  cy.get('input[type="email"]').type('mariakeyni2010@gmail.com');
  cy.get('input[type="password"]').type('maria_ch1234');
  cy.get('button[type="submit"]').click();

  // Step 3: Tunggu hingga halaman dashboard muncul
  cy.contains('Dashboard', { timeout: 10000 }).should('be.visible');

  // Step 4: Klik menu Kelas → submenu Tugas
  cy.contains('Kelas').click();
  cy.contains('Tugas').click();

  // Step 5: Verifikasi tampilan data atau pesan kosong
  cy.get('table').should('exist');
  cy.get('table').then(($table) => {
    if ($table.text().includes('Data yang belum tersedia')) {
      cy.contains('Data yang belum tersedia').should('be.visible');
    } else {
      cy.contains('Nama Tugas').should('exist');
    }
  });
});