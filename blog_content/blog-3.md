# 🏗️ My Journey with Feature-Based C# API Structure

**Published on:** 2025-10-07  
**Tags:** C#, Architecture Exploration, Feature-Based Design, ASP.NET Core, Learning  

## 🚀 Introduction

I've been experimenting with different ways to organize my C# ASP.NET Core API projects, and I wanted to share an approach that's been working well for me lately. This isn't meant to be the definitive way to structure APIs - just one developer's experience with feature-based organization that might spark some ideas for your own projects.

## 🤔 What Led Me Here

I found myself struggling with traditional layered architecture in some of my projects:
- Logic felt scattered across multiple folders
- It took time to navigate when working on specific features
- Some components seemed more coupled than I'd like
- Testing felt more complex than it needed to be

So I started experimenting with organizing code around business features rather than technical layers, and it's been an interesting journey.

## 🏛️ The Structure I've Been Trying

Here's what I've settled on for now - though I'm sure it'll evolve as I learn more:

```
My Feature Based Architecture/
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
Instead of having all controllers in one big folder, I've been grouping them by what they handle. It helps me find things faster, though I'm still figuring out the best way to handle shared functionality.

 **Services with Separate Validation**
I've started putting validation in its own subfolder within each service area. It feels cleaner to me, though I know some developers prefer different approaches to validation.

 **Entity-Specific Repositories**
This has been working well for me so far - each entity gets its own repository. I'm curious to see how this scales as projects get larger.


## 🧪 My Testing Approach

I've been trying to mirror the main project structure in my tests:
- Feature-based organization seems to help me locate tests
- Testing each layer separately has been working for me

### Things that seem to work well:
- **Finding code faster** when working on specific features
- **Changes feel more contained** within feature boundaries
- **Testing** feels more straightforward with clear dependencies


## 🤔 Your Thoughts?

This is just one approach that's been working for me lately, and I'm always curious to hear how other developers structure their projects. Reach out via my [YouTube channel](https://www.youtube.com/@therealThesner/featured) 