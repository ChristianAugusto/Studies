rm -rf .venv
python -m venv .venv
source .venv/bin/activate # Windows: .venv\Scripts\activate
python -m pip install --upgrade pip
# pip install -r requirements.txt
deactivate