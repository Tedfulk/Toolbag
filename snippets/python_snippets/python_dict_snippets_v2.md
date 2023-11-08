# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Invert dictionary](#invert-dictionary)
  - [Combine dictionary values](#combine-dictionary-values)
  - [Group list elements](#group-list-elements)
  - [Sort dictionary by value](#sort-dictionary-by-value)
  - [Get nested value](#get-nested-value)
  - [Map list to dictionary](#map-list-to-dictionary)
  - [Collection is empty](#collection-is-empty)
  - [Pluck values from list of dictionaries](#pluck-values-from-list-of-dictionaries)
  - [Invert dictionary (unique values)](#invert-dictionary-unique-values)
  - [Merge dictionaries](#merge-dictionaries)
  - [Sort Python dictionary list using a tuple key](#sort-python-dictionary-list-using-a-tuple-key)
  - [Sort dictionary by key](#sort-dictionary-by-key)
  - [Map dictionary values](#map-dictionary-values)
  - [Find keys with value](#find-keys-with-value)
  - [Lists to Dictionary](#lists-to-dictionary)
  - [Dictionary to Lists](#dictionary-to-lists)
  - [Dictionary Keys](#dictionary-keys)
  - [Dictionary Values](#dictionary-values)
  - [Key of Max Value](#key-of-max-value)
  - [Key of Min Value](#key-of-min-value)
  - [Find Key of Value](#find-key-of-value)
  - [Key in Dictionary](#key-in-dictionary)

## Invert dictionary

Inverts a dictionary with non-unique hashable values.

```python
from pydantic import BaseModel, validator, ValidationError
from typing import Dict, List, TypeVar

# Define a generic type for keys and values
K = TypeVar('K')
V = TypeVar('V')

# Pydantic model for validation of the dictionary to be inverted
class InvertibleDict(BaseModel):
    input_dict: Dict[K, List[V]]

    @validator('input_dict', each_item=True)
    def check_values_are_lists(cls, v):
        if not isinstance(v, list):
            raise ValueError('All values must be of type list')
        return v

# Function to invert the dictionary
def invert_dictionary(input_dict: Dict[K, V]) -> Dict[V, List[K]]:
    """
    Inverts a dictionary with non-unique hashable values.

    :param input_dict: The input dictionary to be inverted.
    :return: The inverted dictionary.
    """
    try:
        # Validate input dictionary using Pydantic
        valid_dict = InvertibleDict(input_dict=input_dict).dict()['input_dict']
        inverted_dict = {}
        for key, value in valid_dict.items():
            for item in value:
                if item not in inverted_dict:
                    inverted_dict[item] = [key]
                else:
                    inverted_dict[item].append(key)
        return inverted_dict
    except ValidationError as e:
        # Handle validation errors
        print(f"Validation error: {e}")

# Example usage
example_dict = {'a': [1], 'b': [2], 'c': [1, 3]}
inverted = invert_dictionary(example_dict)
print(inverted)
# Expected result: {1: ['a', 'c'], 2: ['b'], 3: ['c']}
```

## Combine dictionary values
