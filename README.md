# IKIGAI WORLD 3.0 – Multiplayer & Student Accounts

## What's included
- World map and the Phase 2 room interiors retained.
- Supabase Auth student accounts: email + password sign-up and sign-in.
- Teacher email/password sign-in with existing `app_metadata.role = teacher` check.
- Guest/anonymous entry remains available for testing.
- Real-time online presence, player avatars, movement broadcasts, room scene announcements and shared chat using Supabase Realtime.
- Keyboard WASD/arrow controls and on-screen directional buttons for touch devices.
- Character sprites include student avatars and リー先生. リー先生 appears in the classroom and welcomes learners.
- Existing IKIGAI N5 bank (1,500 questions) remains connected.
- XP and coins currently persist locally in the browser; authoritative server-side progress is a later security step.

## Deploy to existing GitHub Pages repo
1. Back up the current repository first (download ZIP).
2. Unzip this package. Open folder `ikigainohongo-main`.
3. Upload/overwrite `index.html`, `app.js`, `style.css`, `README.md`, and `supabase-schema.sql` in the repository root.
4. Upload the whole `assets` folder contents, including `ikigai-n5-bank.json`, `ikigai-world-map.png`, and `characters/`. Do not delete other assets you still use.
5. Commit to `main`. Wait for GitHub Actions Pages deployment to show a green check, then open the site and press Ctrl+F5.

## Supabase setup
- Uses the existing project URL and public publishable/anon key already used by IKIGAI WORLD 1.
- Student registration uses Supabase Auth email/password. If email confirmation is enabled, learners must confirm email before first sign-in.
- Anonymous guest mode requires Supabase Auth > Providers > Anonymous Sign-ins to be enabled.
- Teacher login expects the account's `app_metadata.role` to equal `teacher`, consistent with the existing IKIGAI WORLD 1 account setup.
- Supabase Realtime must be enabled and available for channels. This build uses broadcast + presence and does not require a new database table for live movement/chat.
- Never put a Supabase service-role key in frontend files.

## Important scope / next hardening
- Multiplayer realtime is implemented as one shared world channel; positions, chat, and room presence are synchronized among online players. This is a prototype-level room/world presence system, not a dedicated authoritative game server.
- Student XP/coins and progress are stored locally at this stage. For tamper-resistant leaderboards and cross-device continuity, next step is to add a secured profile/progress table with RLS policies and server-side RPC.
- 1v1 is currently a local question duel practice; true matchmaking and synchronized 1v1/2v2 rounds are a separate next milestone.
- N4 and JFT rooms are styled but locked until their dedicated question banks are supplied/connected.
- Some questions in the N5 bank were previously marked as teacher-review items; review before official exams.
