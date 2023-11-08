# Table of Contents

- [Date Range](#date-range)
- [Date from ISO format](#date-from-iso-format)
- [Date to ISO format](#date-to-iso-format)
- [Date difference in months](#date-difference-in-months)
- [Days ago](#days-ago)
- [Date difference in days](#date-difference-in-days)
- [Days from now](#days-from-now)
- [Date is weekday](#date-is-weekday)
- [Date is weekend](#date-is-weekend)
- [Add days to date](#add-days-to-date)

## Date range

Creates a list of dates between start (inclusive) and end (not inclusive).

```python
from datetime import timedelta, date

def date_range(start, end):
    """
    Creates a list of dates between start (inclusive) and end (not inclusive).
    
    :param start: The start date (inclusive).
    :param end: The end date (not inclusive).
    :return: List of dates between start and end.
    """
    delta = timedelta(days=1)
    current_date = start
    date_list = []

    while current_date < end:
        date_list.append(current_date)
        current_date += delta

    return date_list

# Example:
# start_date = date(2023, 1, 1)
# end_date = date(2023, 1, 5)
# result = date_range(start_date, end_date)
# Expected result: [date(2023, 1, 1), date(2023, 1, 2), date(2023, 1, 3), date(2023, 1, 4)]

```

## Date from ISO format

Converts a date from its ISO-8601 representation.

```python
from datetime import datetime

def date_from_iso(iso_date):
    """
    Converts a date from its ISO-8601 representation.
    
    :param iso_date: The ISO-8601 formatted date string.
    :return: The converted date object.
    """
    return datetime.fromisoformat(iso_date).date()

# Example:
# iso_date = "2023-01-15"
# result = date_from_iso(iso_date)
# Expected result: date(2023, 1, 15)

```

## Date to ISO format

Converts a date to its ISO-8601 representation.

```python
def date_to_iso(date):
    """
    Converts a date to its ISO-8601 representation.
    
    :param date: The date object to convert.
    :return: ISO-8601 formatted date string.
    """
    return date.isoformat()

# Example:
# input_date = date(2023, 1, 15)
# result = date_to_iso(input_date)
# Expected result: "2023-01-15"

```

## Date difference in months

Calculates the month difference between two dates.

```python
from dateutil.relativedelta import relativedelta

def date_difference_in_months(date1, date2):
    """
    Calculates the month difference between two dates.
    
    :param date1: The first date.
    :param date2: The second date.
    :return: The number of months between the two dates.
    """
    delta = relativedelta(date2, date1)
    return delta.years * 12 + delta.months

# Example:
# date1 = date(2023, 1, 15)
# date2 = date(2024, 5, 20)
# result = date_difference_in_months(date1, date2)
# Expected result: 16 (16 months between the two dates)

```

## Days ago

Calculates the date of n days ago from today.

```python
from datetime import datetime, timedelta

def days_ago(n):
    """
    Calculates the date of n days ago from today.
    
    :param n: The number of days ago.
    :return: The date n days ago from today.
    """
    today = datetime.now().date()
    delta = timedelta(days=n)
    return today - delta

# Example:
# n = 7
# result = days_ago(n)
# Expected result: The date 7 days ago from today.


```

## Date difference in days

Calculates the day difference between two dates.

```python
from datetime import timedelta

def date_difference_in_days(date1, date2):
    """
    Calculates the day difference between two dates.
    
    :param date1: The first date.
    :param date2: The second date.
    :return: The number of days between the two dates.
    """
    delta = date2 - date1
    return delta.days

# Example:
# date1 = date(2023, 1, 15)
# date2 = date(2023, 1, 20)
# result = date_difference_in_days(date1, date2)
# Expected result: 5 (5 days between the two dates)

```

## Days from now

Calculates the date of n days from today.

```python
from datetime import datetime, timedelta

def days_from_now(n):
    """
    Calculates the date of n days from today.
    
    :param n: The number of days from now.
    :return: The date n days from today.
    """
    today = datetime.now().date()
    delta = timedelta(days=n)
    return today + delta

# Example:
# n = 7
# result = days_from_now(n)
# Expected result: The date 7 days from today.

```

## Date is weekday

Checks if the given date is a weekday.

```python
def is_weekday(date):
    """
    Checks if the given date is a weekday.
    
    :param date: The date to check.
    :return: True if the date is a weekday, False otherwise.
    """
    return date.weekday() < 5

# Example:
# input_date = date(2023, 1, 15)  # A weekday
# result = is_weekday(input_date)
# Expected result: True

```

## Date is weekend

Checks if the given date is a weekend.

```python
def is_weekend(date):
    """
    Checks if the given date is a weekend.
    
    :param date: The date to check.
    :return: True if the date is a weekend, False otherwise.
    """
    return date.weekday() >= 5

# Example:
# input_date = date(2023, 1, 15)  # A weekend
# result = is_weekend(input_date)
# Expected result: True

```

## Add days to date

Calculates the date of n days from the given date.

```python
from datetime import timedelta

def add_days_to_date(date, n):
    """
    Calculates the date of n days from the given date.
    
    :param date: The starting date.
    :param n: The number of days to add.
    :return: The date n days from the given date.
    """
    delta = timedelta(days=n)
    return date + delta

# Example:
# input_date = date(2023, 1, 15)
# n = 7
# result = add_days_to_date(input_date, n)
# Expected result: The date 7 days from input_date.

```
