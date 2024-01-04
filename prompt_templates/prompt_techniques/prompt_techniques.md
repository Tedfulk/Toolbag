# Comprehensive Guide to Prompt Techniques in AI

This document provides a detailed overview of both basic and advanced prompt techniques used in AI model interactions, explaining their definitions, examples, use cases, and outlining their pros and cons.

| Technique                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zero-Shot Prompting                    | Zero-shot prompting involves presenting a task to a Large Language Model (LLM) without providing any specific examples or previous training on that task. It relies on the model's pre-trained knowledge to generate a response, making it ideal for straightforward tasks where the model's existing knowledge base is sufficient. This technique is efficient as it doesn't require the preparation of example data, but its performance can be unpredictable, particularly with complex or nuanced tasks.                                                              |
| Few-Shot Prompting                     | Few-shot prompting is a technique where the model is given a small number of examples related to the task at hand. These examples provide contextual information, helping the model understand the format and nature of the desired output. Few-shot prompting is particularly effective for nuanced or complex tasks, as it guides the model with specific examples. While it can lead to more accurate responses, it does require the preparation of relevant example data and the output is limited by the quality and variety of these examples.                      |
| Chain-of-Thought (CoT)                 | Chain-of-Thought (CoT) prompting is a technique that breaks down complex reasoning tasks into intermediate, logical steps. It guides the model through a process of sequential reasoning, making it especially suitable for tasks that involve multiple steps or require a series of logical deductions. CoT prompting clarifies the model's thought process, making it transparent and easier to follow. However, it requires carefully structured prompts and its effectiveness can vary based on the model's capacity for logical reasoning.                           |
| Self-consistency                       | The self-consistency prompting technique expands on CoT by prompting the model to explore various reasoning paths. The model then aggregates the final answer based on multiple data points from these different paths. This approach is particularly useful for complex reasoning tasks where considering multiple perspectives leads to a more accurate conclusion. It is more computationally intensive and requires the model to process and compare multiple answers, but it enhances accuracy by reducing reliance on linear reasoning paths.                       |
| Tree of Thoughts (ToT)                 | Tree of Thoughts (ToT) builds upon CoT prompting by adopting a tree-branching approach, allowing the model to consider multiple potential reasoning paths rather than following a single linear path. This technique is especially effective for tasks that involve significant initial decisions or require exploring multiple solutions. ToT enhances problem-solving capabilities by enabling the exploration of various solutions and is particularly useful for complex tasks. However, it requires more complex setup and evaluation of multiple decision branches. |
| Retrieval Augmented Generation (RAG)   | Retrieval Augmented Generation (RAG) is a technique that provides domain-relevant data as context for generating responses. It involves using external documents to inform the model's responses, making it highly effective for tasks where up-to-date, domain-specific information is essential. RAG is more cost-efficient than full model training and adapts well to changes in data, but it requires the maintenance of an up-to-date knowledge base and is dependent on the quality and relevance of external data.                                                |
| Automatic Reasoning and Tool-use (ART) | ART is a technique used for multi-step reasoning tasks, combining few-shot examples from a task library with predefined external tools. It deconstructs complex tasks by having the model select demonstrations from the task library while also utilizing external tools like search and code generation. ART is effective for unseen tasks and matches the performance of handcrafted CoT prompts on many tasks. It is efficient for updating information but requires a robust library of tasks and access to relevant external tools.                                 |
| ReAct Prompting                        | ReAct prompting combines reasoning and action in LLMs, using external tools such as databases to generate accurate and reliable output. It is particularly useful for tasks that require external data or tools for precise responses, especially in dynamic and data-rich environments. ReAct prompting enhances accuracy by integrating external data and is versatile in handling different types of queries. However, it involves complexity in setup and depends on the availability and reliability of external tools.                                              |

## Basic Prompt Techniques Overview

### 1. Zero-Shot Prompting

#### 1.1 Zero-Shot Definition

A technique where a task is presented to a Large Language Model (LLM) without any examples. The model is expected to perform the task with no prior understanding.

#### 1.2 Zero-Shot Example

"Tell me the sentiment of the following social media post and categorize it as positive, negative, or neutral."

#### 1.3 Zero-Shot Use Case

Suitable for tasks where the model is expected to utilize its pre-trained knowledge to make inferences or categorizations without specific training examples.

#### 1.4 Zero-Shot Pros

- Broad applicability.
- Efficient as it does not require the preparation of example data.

#### 1.5 Zero-Shot Cons

- Variable accuracy, especially with complex or nuanced tasks.
- Heavily reliant on the model’s pre-existing training data.

### 2. Few-Shot Prompting

#### 2.1 Few-Shot Definition

Involves providing the model with contextual information and examples of both the task and the desired output.

#### 2.2 Few-Shot Example

"Tell me the sentiment of the following headline and categorize it as either positive, negative, or neutral. Here are some examples: [examples]"

#### 2.3 Few-Shot Use Case

Effective when specific examples can guide the model in understanding and replicating the desired format or response.

#### 2.4 Few-Shot Pros

- Improved accuracy and contextually relevant responses.
- Flexible application to specific tasks.

#### 2.5 Few-Shot Cons

- Requires the preparation of relevant and high-quality example data.
- Output constrained by the variety of examples provided.

### 3. Chain-of-Thought Prompting (CoT)

#### 3.1 CoT Definition

Breaks down complex reasoning tasks into intermediary reasoning steps, guiding the model through a logical process.

#### 3.2 CoT Example

"Which vehicle requires a larger down payment based on the following information? (Think step by step)"

#### 3.3 CoT Use Case

Ideal for multi-step or complex reasoning tasks, where the model needs to demonstrate a logical progression to arrive at a conclusion.

#### 3.4 CoT Pros

- Facilitates handling of complex reasoning tasks.
- Makes the model's reasoning process transparent.

#### 3.5 CoT Cons

- Requires carefully structured prompts.
- Effectiveness varies based on the model's logical reasoning capacity.

## Advanced Prompt Techniques Overview

### 4. Self-consistency

#### 4.1 Definition

Similar to CoT, this technique samples various reasoning paths and aggregates the final answer from multiple data points.

#### 4.2 Example

Correctly calculating the sister's age as 35 when the person is now 40, using multiple reasoning paths.

#### 4.3 Use Case

Useful in complex reasoning tasks where multiple paths lead to a more accurate answer.

#### 4.4 Pros

- Increases accuracy by considering multiple reasoning paths.
- Reduces errors from linear reasoning.

#### 4.5 Cons

- More computationally intensive.
- Requires processing and comparing multiple answers.

### 5. Tree of Thoughts (ToT)

#### 5.1 Definition

Builds on CoT by following a tree-branching technique, allowing the LLM to consider multiple paths.

#### 5.2 Example

Game of 24: Solving the game using a tree of decision points with intermediate equations.

#### 5.3 Use Case

Effective for tasks requiring important initial decisions and exploration of multiple solutions.

#### 5.4 Pros

- Enhances problem-solving by exploring multiple solutions.
- Improves performance on complex tasks.

#### 5.5 Cons

- More complex to set up.
- Requires evaluating multiple decision branches.

### 6. Retrieval Augmented Generation (RAG)

#### 6.1 Definition

Supplies domain-relevant data as context for generating responses, using external documents for context.

#### 6.2 Use Case

Ideal for tasks where up-to-date, domain-specific information is crucial.

#### 6.3 Pros

- More cost-efficient than full model training.
- Adapts to changes in data.

#### 6.4 Cons

- Requires maintaining an up-to-date knowledge base.
- Dependent on the quality of external data.

### 7. Automatic Reasoning and Tool-use (ART)

#### 7.1 Definition

Combines few-shot examples from a task library with predefined external tools for multi-step reasoning tasks.

#### 7.2 Use Case

Suited for complex, multi-step reasoning tasks that benefit from external tools and data.

#### 7.3 Pros

- Better performance for complex tasks than simple few-shot or CoT prompting.
- Efficient updating of information.

#### 7.4 Cons

- Requires a robust library of tasks and external tools.

### 8. ReAct Prompting

#### 8.1 Definition

Combines reasoning and action in LLMs, using external tools like databases for accurate and reliable output.

#### 8.2 Example

- Calculator Tool: Correctly calculating a mathematical operation.
- SQL Database Tool: Querying stock prices.

#### 8.3 Use Case

Best for tasks requiring external data or tools for accurate responses in dynamic environments.

#### 8.4 Pros

- Enhances accuracy with external data integration.
- Versatile for various types of queries.

#### 8.5 Cons

- Complexity in setup.
- Dependent on external tool availability and reliability.

This comprehensive guide covers a wide spectrum of prompt techniques, offering insights into their applications, benefits, and limitations in AI interactions.

<!-- | Prompting Technique       | Example Prompt                                                           |
|---------------------------|--------------------------------------------------------------------------|
| Zero-Shot Learning        | "Translate the following sentence from English to French: 'The quick brown fox jumps over the lazy dog.'" |
| Few-Shot Learning         | "Write a short story in the style of Edgar Allan Poe. Here are a few lines from his work as an example." |
| Negative Prompting        | "Write a persuasive essay on the importance of renewable energy while avoiding the use of buzzwords." |
| Contextual Prompting      | "Provide legal advice on a trademark dispute involving Company X and Company Y." |
| Chain of Thought          | "Explain the steps to solve a quadratic equation, breaking down each calculation." |
| Analogical Reasoning      | "Explain the concept of photosynthesis in plants using the analogy of a factory production line." |
| Iterative Refinement      | "Describe the process of building a birdhouse, starting with basic materials and refining the instructions with each step." |
| Prompt Chaining           | "Write a story where each paragraph continues from the previous one, creating a narrative chain." |
| Hybrid Approaches         | "Begin with a few-shot prompt to introduce a character, and then use chain of thought to describe their journey in a story." |
| Meta-Prompting            | "Generate prompts that guide the model in explaining the process of AI learning, allowing it to create its own educational content." |
| Tree of Thought Prompting | "Explain the concept of climate change, starting with the root causes and branching into its environmental and societal impacts." | -->

## General Model Parameters

| Parameter     | Explanation                                                                                                                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temperature   | Temperature is like a control knob for randomness. If you turn it down, the answers you get are more likely to be straightforward and based on facts. If you turn it up, the answers can get more creative and surprising. It's like adjusting how creative the model's responses are. |
| Top_p         | Top_p is a way to control how certain or diverse the model's answers are. Lower values make the answers very certain and specific, like giving exact answers in a quiz. Higher values make the answers more varied and imaginative. It's like a slider for response variety.           |
| Top_k         | Top_k helps in keeping the vocabulary in check. It decides how many different words the model can use in its answers. Lower values make the answers more focused, while higher values allow for more words to be used. It's like setting a limit on the words the model can choose.    |
| MinTokens     | MinTokens is the minimum length of the answers. It ensures that the model gives you responses that aren't too short. Think of it as setting a rule that the answers must have a certain number of words.                                                                               |
| MaxTokenCount | MaxTokenCount sets the maximum length of the answers. It's like saying, "Don't give me responses that are longer than a certain number of words." It helps control how long the answers can get.                                                                                       |
| StopSequences | StopSequences are special words or phrases that tell the model to stop writing. When it sees these words, it knows it should finish the answer. It's like putting a "The End" sign in a story to signal it's done.                                                                     |
| numResults    | numResults is about how many answers you want from the model. You can ask for one answer, or you can ask for several different answers to the same question. It's like deciding if you want one opinion or a bunch of opinions.                                                        |
