from setuptools import setup, find_packages

setup(
    name="mr_opentab",
    version="1.0.0",
    packages=find_packages(where="src"),
    package_dir={"":"src"},
    include_package_data=True,
    package_data={
        'mr_opentab': [
            'static/js/*.js',
            'inject/*.jinja2',
        ],
    },
    install_requires=[],
)
