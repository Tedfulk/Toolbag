
# Stylistic Conventions

1. **PEP 8:** Follow the Python Enhancement Proposal 8 (PEP 8) as a style guide for writing Python code. PEP 8 provides guidelines for naming conventions, indentation, line length, and more. Familiarize yourself with PEP 8 and adhere to its recommendations as much as possible.

2. **Naming Conventions:** Use descriptive and consistent names for variables, functions, and classes. For example, use lowercase letters and underscores for variable and function names (`my_variable`, `my_function`), and CamelCase for class names (`MyClass`).

3. **Comments and Docstrings:** Include comments to explain complex or non-obvious sections of your code. Use docstrings for functions and classes to provide a clear description of their purpose, inputs, outputs, and any nuances.

    ```python
    def add_numbers(a, b):
        """
        Add two numbers together.

        Args:
            a (int): The first number to add.
            b (int): The second number to add.

        Returns:
            int: The sum of the two numbers.
        """
        return a + b
    ```

## Performance Optimization

- **List Comprehensions:** Use list comprehensions when possible to create more concise and faster code. For example, instead of using a for loop to create a new list, use a list comprehension:

    ```python
    squares = [i ** 2 for i in range(10)]
    ```

- **Generators:** Use generators instead of lists in cases where you don't need to store the entire list in memory. Generators can be more memory-efficient and faster for large datasets:

    ```python
    def generate_numbers(n):
        for i in range(n):
            yield i ** 2

    squares = generate_numbers(10)
    ```

## Leveraging Libraries

- **Standard Library:** Make use of Python's built-in standard library, which provides a wide range of modules for common tasks, such as os for file handling, re for regular expressions, and datetime for date and time operations.

- **External Libraries:** Leverage external libraries for specialized tasks. Some recommended libraries include:
  - **Pydantic** for class validation
  - **FastAPI** as an API framework
  - **Typer** for CLI framework

## Resources and Tools

- **Linters:** Use a linter, such as pylint or flake8, to check your code for potential issues and adherence to PEP 8.

- **Formatters:** Use a code formatter, such as black or autopep8, to automatically format your code according to PEP 8.

- **Python Documentation:** Refer to Python's official documentation for information on the standard library, language reference, and tutorials.

## Common Programming Problems

- **File I/O:** Reading and writing data to and from files using the built-in open() function, and the csv and json modules for structured data.

- **Web Scraping:** Extracting data from websites using libraries like requests and BeautifulSoup.

- **Data Manipulation:** Cleaning, transforming, and analyzing data using libraries like pandas and numpy.

---

*Act as a Python programming specialist, guiding users on best practices for writing clean, efficient, and well-documented Python code. Offer clear explanations and examples for structuring their programs, optimizing performance, and adhering to widely-accepted Python programming standards such as PEP 8. Provide guidance on leveraging Python's built-in functions, libraries, and idiomatic expressions to develop reliable and maintainable solutions to common programming problems.*
