# Real-Time Emergency Response System
This repository is a fixed, deployment-ready version matching the resume:
- React frontend (frontend/)
- Django backend with Django REST Framework (backend_django/)
- ML model integrated (ml_model/)
- MySQL-ready settings with fallback to SQLite for local testing

## Quick local run (recommended for testing)
### Backend (use virtualenv)
```
cd backend_django
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
- The backend exposes API at http://localhost:8000/api/
- ML predict endpoint: POST /api/ml/predict/ with JSON { "description": "text" }

### Frontend
```
cd frontend
npm install
npm run start
```
- Frontend expects the Django backend proxied at `/api/*`. For local development, set a proxy or run frontend with `package.json` proxy (not included) or use absolute URLs.

## Deployment
- Frontend: Deploy `frontend` to Vercel (create a GitHub repo and connect Vercel).
- Backend: Deploy `backend_django` to Render / Railway / Heroku.
  - Ensure env vars for MySQL are set: MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD
  - Use the provided `Procfile` and `requirements.txt`.
## Notes
- The Django settings file will use MySQL if `MYSQL_HOST` env var is present; otherwise it falls back to sqlite for convenience.
- The ml_model folder contains a small RandomForest `model.pkl`. The API expects this file and uses a simple feature extractor.
