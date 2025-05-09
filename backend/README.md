# 💬 ChatApp Backend

A FastAPI backend for **ChatApp**, powered by Python 3.12+ and managed with [`uv`](https://github.com/astral-sh/uv)

---

## 📦 Prerequisites

- Python 3.12+
- [`uv`](https://github.com/astral-sh/uv) installed

### 🧪 Install `uv` (Windows)

```powershell
iwr -useb https://astral.sh/uv/install.ps1 | iex
```

Verify installation:

```powershell
uv --version
```

---

## 🚀 Project Setup (From A to Z)

### 1. Clone the repository

### 2. Create and activate a virtual environment

```powershell
uv venv
.\.venv\Scripts\Activate
```

### 3. Install dependencies

```powershell
uv pip install -r requirements.txt
```

### 4. Install dev tools 

```powershell
uv pip install -e .[dev]
```

This installs tools like `ruff` for linting and formatting.

---

## 🛠️ Launch the Backend Server

Make sure the virtual environment is activated:

```powershell
.\.venv\Scripts\Activate
```

Then run:

```powershell
uvicorn src.main:app --reload
```

Adjust `src.main:app` if your entry point is in another module or file.

---

## 📦 Adding New Packages

### 1. Install the package using `uv`

```powershell
uv pip install <package-name>
```

> 🔧 This updates `pyproject.toml` and `uv.lock`.

### 2. (Optional) Add it as a dev dependency

If it’s a development-only tool (e.g., `pytest`):

```powershell
uv pip install -e .[dev] pytest
```

Then **manually add it** to the `[project.optional-dependencies].dev` section in `pyproject.toml` like so:

```toml
[project.optional-dependencies]
dev = ["ruff", "pytest"]
```

### 3. (Optional) Update requirements.txt

For reproducibility in production/CI environments:

```powershell
uv pip compile > requirements.txt
```

---

## 🐞 Debugging with VS Code

The repository includes a preconfigured `.vscode/launch.json` for easy debugging.

### ▶️ To launch the backend in debug mode:

1. Open the project in **VS Code**.
2. Ensure your virtual environment is activated:
   ```powershell
   .\.venv\Scripts\Activate
   ```
3. Press `F5` or open the **Run and Debug** tab (`Ctrl+Shift+D`), then select:
   ```
   FastAPI (Uvicorn)
   ```
4. This will:
   - Launch `uvicorn` with hot reload
   - Serve the app at `http://127.0.0.1:8000`
   - Enable breakpoint debugging via `debugpy`

### 🛠️ Requirements

- Python extension for VS Code
- Ruff extension for VS Code

---

## 💡 Code Formatting in VS Code

This project includes a `.vscode/settings.json` file to enforce consistent formatting using `ruff`.

- **Auto-format on save** is enabled
- **`ruff` is set as the default formatter**

No manual setup needed — just save your file to format.

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "charliermarsh.ruff"
}
```

---

## 🧪 Code Quality & Linting

Run `ruff` to lint the codebase:

```powershell
ruff check .
```

Auto-fix issues:

```powershell
ruff check . --fix
```

---

## 📁 Project Structure

```
chatapp-backend/
├── src/
│   └── main.py
├── .vscode/
│   ├── launch.json
│   └── settings.json
├── .venv/
├── pyproject.toml
├── requirements.txt
├── uv.lock
└── README.md
```

---

## 🙋‍♂️ Troubleshooting

- If `uv` commands fail, ensure the virtual environment is activated.
- If you add dependencies manually, re-run `uv pip install .[dev]` to sync the lockfile.
- Use `uv pip compile > requirements.txt` to keep `requirements.txt` consistent.

---

## 👤 Author

**Basel Malalla**  
📧 malalla.basel@gmail.com
