"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
/*router.get('/', (req, res) => {
    res.send('ahoy there');
})*/
router.get('/login', (req, res) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <button>Submit</button
        </form>
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'admin' && password === 'password') {
        //mark person as logged in
        req.session = { loggedIn: true };
        //redirect to root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/login">Login</a>
            </div>
        `);
    }
});
