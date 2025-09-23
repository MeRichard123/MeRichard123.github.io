---
layout: "../../layouts/BlogLayout.astro"
date: "23 Sep 2025"
title: "Can Small RNNs Replace Compilers? My Journey into Neural Lua Emulation"
url: "dissertation"
---

> This post is an overview of my undergraduate dissertation, the entire paper can be found [here](/Dissertation%20-%20Richard%20Coric%20(26414124).pdf).

## Abstract 
I recently completed my undergraduate dissertation, examining whether small language models like RNNs could tackle complex tasks of emulating a compiler. Traditionally, a strict deterministic compiler has compiled programs, which can be expensive to implement and run, making them unsuitable for in-editor REPL tools such as Quokka. Previous work involving Codex and AlphaCode used transformer models with expensive inference times. This study evaluated Recurrent Neural Networks (RNNs), both standard and minimal, for Lua emulation by learning semantic embeddings, Mixture of Experts, and Attention. Standard models overfit the mark, struggle with meaningful patterns, and fail on complex examples. Minimal RNN architectures generalise better due to implicit regularisation. However, the study was still limited by dataset size and quality, leading to over-fitting.

## Introduction 
Most programs are written by a programmer in a text editor, and then they are compiled or interpreted depending on the language. Both methods involve a piece of software called Lexer, which takes the lexemes of the language and converts them into tokens. Tokens are then used for lexical analysis, where these tokens are converted into an internal representation (IR) or an Abstract Syntax tree (AST). Additionally, programs contain data such as variables that hold a range of different types and are stored in symbol tables and scope chains. Commonly, this IR is parsed by a virtual machine (VM), which emulates compiler operations like branching and arithmetic. 

Traditional code generation involves rule-based VMs that emit machine code from IR or syntax trees, leading to strict and deterministic compilers, which we may want in most cases. However, what if, rather than a rule-based compiler that emits machine code, we want to infer the compiler from program-output examples of code? This research explored this idea - via language modelling - whether small models like RNNs can still be helpful for such an application.

## Method
The approach centered on training five different RNN architectures to learn Lua program execution from input-output examples. Rather than hand-coding compilation rules, I wanted to see if these models could learn to predict program outputs directly from semantic patterns.

### Architecture Selection
I tested five main architectures:
- **Standard RNN**: The baseline recurrent model
- **LSTM**: Long Short-Term Memory with gating mechanisms
- **GRU**: Gated Recurrent Unit, a simplified LSTM variant
- **MinLSTM & MinGRU**: Recently introduced minimal architectures that remove hidden state dependencies, allowing for parallel training

The minimal architectures were particularly interesting because they use parallel prefix scanning instead of sequential processing, potentially offering both training efficiency and better generalisation.

### Data and tokenisation
Creating a suitable dataset proved challenging. Most available Lua code consists of large embedded systems or configuration files - not ideal for input-output learning. I generated 677 Lua program examples using ChatGPT, covering simple operations like string manipulation to more complex programs with loops and functions.

The key innovation was semantic tokenisation using Tree-sitter to parse Abstract Syntax Trees. Instead of raw code tokens, I converted programs into semantic tokens like `STRING(hello)` and `FUNCTION_CALL(print)`. This approach strips away syntactic noise while preserving semantic meaning, helping models focus on what the code actually does rather than how it's written.

### Training Enhancements
To improve performance, I incorporated:
- **Mixture of Experts (MoE)**: Dense expert networks that specialise in different aspects of Lua execution
- **Attention mechanisms**: Allowing models to focus on relevant input tokens
- **Curriculum learning**: Training on increasingly complex programs
- **Extensive regularisation**: Label smoothing, dropout, L2 regularisation, and teacher forcing to combat overfitting

## Results 

The results revealed both the promise and limitations of small models for compiler emulation.

### Performance Hierarchy
Standard RNN architectures performed poorly across the board:
- **Standard RNN**: Achieved 0.00 on both Exact Match and Pass@1 metrics, with the highest perplexity (13.5), indicating the model was essentially guessing
- **GRU and LSTM**: Showed marginal improvements with lower perplexity (2.8-5.7), but still failed to produce correct outputs
- **Minimal architectures**: Demonstrated significant improvements, with MinGRU achieving a 10× better F1 score (0.0391 vs ~0.001-0.01 for standard models)

The MinGRU with 2 experts was the standout performer, achieving 0.0115 on Exact Match and 1.1494 on Pass@1, meaning it correctly predicted some complete program outputs.

### Inference Speed Advantage
One clear win for RNN models was inference speed. While transformer baselines (StarCoder2, Qwen 2.5 Coder) took 4-5 seconds per inference, RNN models completed the same task in 0.009-0.027 seconds - nearly 200× faster.

### Baseline Comparison
The performance gap with large language models was stark:
- **Qwen 2.5 Coder**: 91.8% Exact Match, 97.4% Sentence Similarity
- **Best RNN (MinGRU)**: 1.15% Exact Match, 70.3% Sentence Similarity

However, this comparison isn't entirely fair given the massive difference in model size and training data.

## Discussion

### Why Minimal Architectures Worked Better
The superior performance of MinGRU and MinLSTM likely stems from implicit regularisation effects. Simpler architectures are less prone to overfitting and may have better gradient flow properties. The removal of complex gating mechanisms seems to help rather than hurt performance on this task.

### The Overfitting Problem
All models showed clear signs of overfitting, with validation loss consistently higher than training loss despite extensive regularisation attempts. The 677-sample dataset was simply too small for these models to learn meaningful generalisation patterns.

### Dataset Quality Issues
Using ChatGPT for data generation created its own limitations. The generated programs, while syntactically correct, lacked the diversity and complexity of real-world code. The models learned shallow token-level patterns rather than deep semantic understanding.

### Mixture of Experts Insights
MoE showed promise in reducing training loss but had limited impact on generalisation. Interestingly, using more than 2 experts actually hurt performance, likely due to sparsity issues in small models.

### Real-World Implications
Despite the limitations, the dramatic inference speed advantage suggests potential applications in:
- Embedded systems with strict latency requirements
- Real-time code completion tools
- Educational environments where immediate feedback is crucial

## Closing Thoughts

This research highlighted both the potential and current limitations of using small models for compiler-like tasks. While RNNs couldn't match large language models in accuracy, they demonstrated compelling advantages in inference speed and training efficiency.

The key insight is that minimal RNN architectures offer a sweet spot - simpler than traditional RNNs but more effective for this task. The implicit regularisation from architectural simplicity proved more valuable than complex gating mechanisms.

However, the fundamental challenge remains data quality and quantity. Future work should focus on:
- Larger, more diverse datasets with instruct-style formatting
- Encoder-decoder architectures to separate understanding from generation
- Reinforcement learning to reward correct execution semantics
- Pre-training on general programming tasks before fine-tuning on execution

While we're not ready to replace traditional compilers with neural networks, this exploration revealed interesting trade-offs between model complexity, inference speed, and accuracy. In applications where sub-millisecond inference matters more than perfect accuracy, small RNNs might still have a role to play.

The journey from deterministic compilation to learned execution is far from over, but understanding these fundamental trade-offs brings us one step closer to more adaptive programming tools.