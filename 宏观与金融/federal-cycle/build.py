"""Compatibility entry point for the fixed weekly chart template."""
from pathlib import Path
import runpy

runpy.run_path(str(Path(__file__).resolve().parents[4]/'code/tools/build_federal_weekly.py'),run_name='__main__')
