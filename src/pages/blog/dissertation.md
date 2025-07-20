---
layout: "../../layouts/BlogLayout.astro"
date: "18 May 2025"
title: "Example-Driven Emulation of Lua Execution with Recurrent Neural Networks"
url: "dissertation"
draft: true
---

> This post is an overview of my undergraduate dissertation, the entire paper can be found [here](/Dissertation%20-%20Richard%20Coric%20(26414124).pdf).

## Abstract 
I recently completed my undergraduate dissertation, examining whether small language models like RNNs could tackle complex tasks of emulating a compiler. Traditionally, a strict deterministic compiler has compiled programs, which can be expensive to implement and run, making them unsuitable for in-editor REPL tools such as Qwokka. Previous work involving Codex and AlphaCode used transformer models with expensive inference times. This study evaluated Recurrent Neural Networks (RNNs), both standard and minimal, for Lua emulation by learning semantic embeddings, Mixture of Experts, and Attention. Standard models overfit the mark, struggle with meaningful patterns, and fail on complex examples. Minimal RNN architectures generalise better due to implicit regularisation. However, the study was still limited by dataset size and quality, leading to over-fitting.

## Introduction 
Most programs are written by a programmer in a text editor, and then they are compiled or interpreted depending on the language. Both methods involve a piece of software called Lexer, which takes the lexemes of the language and converts them into tokens. Tokens are then used for lexical analysis, where these tokens are converted into an internal representation (IR) or an Abstract Syntax tree (AST). Additionally, programs contain data such as variables that hold a range of different types and are stored in symbol tables and scope chains. Commonly, this IR is parsed by a virtual machine (VM), which emulates compiler operations like branching and arithmetic. 

Traditional code generation involves rule-based VMs that emit machine code from IR or syntax trees, leading to strict and deterministic compilers, which we may want in most cases. However, what if, rather than a rule-based compiler that emits machine code, we want to infer the compiler from program-output examples of code? This research explored this idea - via language modelling -  whether small models like RNNs can still be helpful for such an application. 

## Related Works

## Method

## Results 

## Discussion

## Closing Thoughts