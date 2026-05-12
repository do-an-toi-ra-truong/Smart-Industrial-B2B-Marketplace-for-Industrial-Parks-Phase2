
    // ── Particles ──
    (function() {
      const container = document.getElementById('particles');
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
          left: ${Math.random() * 100}%;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          animation-duration: ${Math.random() * 12 + 8}s;
          animation-delay: ${Math.random() * 10}s;
          opacity: ${Math.random() * 0.5 + 0.1};
        `;
        container.appendChild(p);
      }
    })();

    // ── Toggle password ──
    document.getElementById('toggle-pwd').addEventListener('click', function() {
      const input = document.getElementById('admin-password');
      const icon  = document.getElementById('toggle-pwd-icon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'bi bi-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'bi bi-eye';
      }
    });

    // ── Login form ──
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const user = document.getElementById('admin-username').value.trim();
      const pass = document.getElementById('admin-password').value.trim();
      const btn  = document.getElementById('btn-login');
      const alert = document.getElementById('login-alert');

      alert.classList.remove('show');

      if (!user || !pass) {
        document.getElementById('login-alert-text').textContent = 'Please enter your username and password.';
        alert.classList.add('show');
        return;
      }

      // Simulate loading
      btn.classList.add('loading');
      setTimeout(() => {
        btn.classList.remove('loading');
        // Demo: show 2FA step
        document.getElementById('step-credentials').style.display = 'none';
        document.getElementById('step-2fa').style.display = 'block';
        document.getElementById('otp1').focus();
      }, 1800);
    });

    // ── 2FA digit auto-jump ──
    document.querySelectorAll('.otp-input').forEach((input, idx, inputs) => {
      input.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g,'');
        if (this.value && idx < inputs.length - 1) inputs[idx + 1].focus();
      });
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && !this.value && idx > 0) inputs[idx - 1].focus();
      });
    });

    // ── Verify 2FA ──
    document.getElementById('btn-verify').addEventListener('click', function() {
      const otp = [...document.querySelectorAll('.otp-input')].map(i => i.value).join('');
      if (otp.length < 6) return;
      this.classList.add('loading');
      setTimeout(() => {
        // Redirect to dashboard
        window.location.href = 'super-admin-accounts.html';
      }, 1500);
    });

    // ── Back ──
    document.getElementById('btn-back').addEventListener('click', function() {
      document.getElementById('step-2fa').style.display = 'none';
      document.getElementById('step-credentials').style.display = 'block';
      document.querySelectorAll('.otp-input').forEach(i => i.value = '');
    });
