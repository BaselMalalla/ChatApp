# Setup Instructions

## 1. Create a Virtual Environment

Run the following command to create a `.venv` folder:

```bash
python -m venv .venv
```

## 2. Activate the Virtual Environment

* **Windows:**

  ```bash
  .venv\Scripts\activate
  ```

* **Mac/Linux:**

  ```bash
  source .venv/bin/activate
  ```

After activation, your terminal prompt should display `(.venv)`.

### 3. Install Project Dependencies

To install dependencies from `pyproject.toml`:

```bash
pip install .
```

For development dependencies, use:

```bash
pip install .[dev]
```

---

## Best Practices

* Add `.venv` to `.gitignore`.
* Always activate the virtual environment before working.
* Use `deactivate` to exit when done.
