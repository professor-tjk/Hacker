document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const u = document.getElementById('username').value.trim();
    const p = document.getElementById('password').value.trim();
    const msg = document.getElementById('message');
    
    // ──────────────────────────────
    // Ин қисмро дида ҳам фавран нафаҳманд
    const k1 = [104,97,99,107,101,114,45,50,48,49,48].map(c=>String.fromCharCode(c)).join('');
    const k2 = [112,114,111,102,101,115,115,111,114].map(c=>String.fromCharCode(c)).join('');
    
    const cleanU = u.toLowerCase().replace(/[\s_]/g,'');
    const cleanP = p.toLowerCase().replace(/[\s_!@#$%^&*]/g,'');
    
    const r = (s) => s.split('').reverse().join('');
    
    if (cleanU === r(k1.split('').reverse().join('')) && 
        cleanP === k2) {
    // ──────────────────────────────
    
        msg.style.color = '#0f0';
        msg.textContent = "ДАСТРАСӢ ҚАБУЛ ШУД... ХУШ ОМАДЕД!";
        
        setTimeout(() => {
            window.location = "index-1.html";
        }, 900);
    } 
    else {
        msg.style.color = '#f44';
        msg.textContent = "Маълумот нодуруст аст.";
    }
});