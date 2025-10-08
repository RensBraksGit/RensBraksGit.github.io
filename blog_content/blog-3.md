# 🏗️ My Journey with folder structure in C# API Structure

**Published on:** 2025-10-07  
**Tags:** C#, Architecture Exploration, Feature-Based Design, ASP.NET Core, Learning  

## 🚀 Introduction

I've been experimenting with different ways to organize my C# ASP.NET Core API projects, and I wanted to share an approach that's been working well for me lately. This isn't meant to be the definitive way to structure APIs - just one developer's experience with feature-based organization that might spark some ideas for your own projects.

## 🏛️ The Structure I've Been Trying

Here's what I've settled on for now - though I'm sure it'll evolve as I learn more:

```
My Architecture/
├── API Project/
│   ├── Controllers/
│   │   ├── Entity A (User)/
│   │   │   └── UserController.cs
│   │   └── Entity B (ShoppingCart)/
│   │       └── ShoppingCart.cs
│   ├── Services/
│   │   ├── UserServices/
│   │   │   ├── Validation/
│   │   │   │   └── UserCartValidation.cs
│   │   │   └── UserService.cs
│   │   └── ShoppingCartServices/
│   │       ├── Validation/
│   │       │   └── ShoppingCartValidation.cs
│   │       └── ShoppingCartService.cs
│   ├── Repositories/
│   │   ├── UserRepository/
│   │   │   └── UserRepository.cs
│   │   └── ShoppingCartRepository/
│   │       └── ShoppingCartRepository.cs
│   ├── Data/
│   │   └── DBContext.cs
│   ├── Models/
│   │   ├── DTOs/
│   │   │   ├── UserModelDTO.cs
│   │   │   └── ShoppingCartModelDTO.cs
│   │   ├── UserModel.cs
│   │   └── ShoppingCartModel.cs
│   ├── Migrations/
│   ├── Helpers/
│   │   └── AutoMappingProfiles.cs
│   ├── Jobs/
│   │   └── DailyJob.cs
│   └── Exceptions/
│       ├── ExceptionHandler.cs
│       └── ErrorClasses/
│           ├── UserErrors.cs
│           └── ShoppingCartErrors.cs
└── API Unit Tests/
    ├── UserTests/
    │   ├── UserControllerTests/
    │   ├── UserServicesTests/
    │   └── UserRepositoriesTests/
    └── ShoppingCartTests/
        └── ShoppingCartControllerTests/
```

## 🔍 What I Like About This Approach

**Grouping Controllers by Feature**
Instead of having all controllers in one big folder, I've been grouping them by what they handle.

 **Services with Separate Validation**
I've started putting validation in its own subfolder within each service area. It feels cleaner to me, though I know some developers prefer different approaches to validation.

 **Entity-Specific Repositories**
This has been working well for me so far - each entity gets its own repository. I'm curious to see how this scales as projects get larger.


## 🧪 My Testing Approach

I've been trying to mirror the main project structure in my tests:
- Testing each layer separately has been working for me


## 🤔 Your Thoughts?

This is just one approach that's been working for me lately, and I'm always curious to hear how other developers structure their projects. Reach out via my [YouTube channel](https://www.youtube.com/@therealThesner/featured) 