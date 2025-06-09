const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrl: 'https://lms.teknologidigital.co.id',
      email: 'mariakeyni2010@gmail.com',
      password: 'Maria_ch123',
      student_name: 'Maria Keyni'
    }
  }
});
