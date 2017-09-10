# Principles of  Software Architecture

## Defining Software Architecture
> software architecture is a description of the subsystems or components of a software system, and the relationships between them.

> OFFICIAL "Architecture is the fundamental organization of a system embodied in its components, their relationships to each other, and to the environment, and the principles guiding its design and evolution." 

## Software Architecture versus design 
> The rough distinction of architecture versus design can be summarized as follows:
    • Architecture is involved with the higher level of description structures and interactions in a system. It is concerned with those questions that entail decision making about the skeleton of the system, involving not only its functional but also its organizational, technical, business, and quality attributes. 
    • Design is all about the organization of parts or components of the system and the subsystems involved in making the system. The problems here are typically closer to the code or modules in question, such as these: 
    ° What modules to split code into? How to organize them? 
    ° Which classes (or modules) to assign the different functionalities to? 
    ° Which design pattern should I use for class "C"? 
    ° How do my objects interact at runtime? What are the messages passed, and how to organize the interaction?

> software architecture is about the design of the entire system, whereas, software design is mostly about the details

## Aspects of Software Architecture
    • System: A system is a collection of components organized in specific ways to achieve a specific functionality. A software system is a collection of such software components. A system can often be subgrouped into subsystems. 
    • Structure: A structure is a set of elements that are grouped or organized together according to a guiding rule or principle. The elements can be software or hardware systems. A software architecture can exhibit various levels of structures depending on the observer's context. 
    • Environment: The context or circumstances in which a software system is built, which has a direct influence on its architecture. Such contexts can be technical, business, professional, operational, and so on. 
    • Stakeholder: Anyone, a person or groups of persons, who has an interest or concern in the system and its success. Examples of stakeholders are the architect, development team, customer, project manager, marketing team, and others.

## Characteristics of Software Architecture
> All software architectures exhibit a common set of characteristics.

### An architecture defines a structure 
> An architecture of a system is best represented as structural details of the system

> It is a common practice for practitioners to draw the system architecture as a structural component or class diagram in order to represent the relationships between the subsystems

> Structures provide insight into architectures, and provide a unique perspective to analyze the architecture with respect to its quality attributes

> Some examples are as follows:
    • The runtime structures, in terms of the objects created at runtime, and how they interact often determine the deployment architecture. The deployment architecture is strongly connected to the quality attributes of scalability, performance, security, and interoperability.
    • The module structures, in terms of how the code is broken down and organized into modules and packages for task breakdown, often has a direct bearing on the maintainability and modifiability (extensibility) of a system. This is explained as follows:
        ° Code which is organized with a view to extensibility would often keep the parent classes in separate well-defined packages with proper documentation and configuration, which are then easily extensible by external modules, without the need to resolve too many dependencies.
        ° Code which is dependent on external or third-party developers (libraries, frameworks, and the like) would often provide setup or deployment steps, which manually or automatically pull in these dependencies from external sources. Such code would also provide documentation (README, INSTALL, and so on) which clearly document these steps. 

### An architecture picks a core set of elements
> A well-defined architecture clearly captures only the core set of structural elements required to build the core functionality of the system

> For example, an architect describing the architecture of a user interacting with a web server for browsing web pages—a typical client/server architecture—would focus mainly on two components: the user's browser (client) and the remote web server (server), which form the core elements of the system. 

> The system may have other components such as multiple caching proxies in the path from the server to the client, or a remote cache on the server which speeds up web page delivery. However, this is not the focus of the architecture description. 

### An architecture captures early design decisions 
> The decisions that help an architect to focus on some core elements of the system (and their interactions) are a result of the early design decisions about a system. Thus, these decisions play a major role in further development of the system due to their initial weight.

> For example, an architect may make the following early design decisions after careful analysis of the requirements for a system:
    • The system will be deployed only on Linux 64-bit servers, since this satisfies the client requirement and performance constraints 
    • The system will use HTTP as the protocol for implementing backend APIs 
    • The system will try to use HTTPS for APIs that transfer sensitive data from the backend to frontend using encryption certificates of 2,048 bits or higher 
    • The programming language for the system would be Python for the backend, and Python or Ruby for the frontend

> Early design decisions need to be arrived at after careful analysis of the requirements and matching them with the constraints – such as organizational, technical, people, and time constraints. 

### An architecture is influenced by its environment 
> An environment imposes outside constraints or limits within which an architecture must function

>  Some examples are as follows: 
    • Quality attribute requirements: In modern day web applications, it is very common to specify the scalability and availability requirements of the application as an early technical constraint, and capture it in the architecture. This is an example of a technical context from a business perspective. 
    • Standards conformance: In some organizations where there is often a large set of governing standards for software, especially those in the banking, insurance, and health-care domains, these get added to the early constraints of the architecture. This is an example of an external technical context.
    • Organizational constraints: It is common to see that organizations which either have an experience with a certain architectural style or a set of teams operating with certain programming environments which impose such a style (J2EE is a good example), prefer to adopt similar architectures for future projects as a way to reduce costs and ensure productivity due to current investments in such architectures and related skills. This is an example of an internal business context. 
    • Professional context: An architect's set of choices for a system's architecture, aside from these outside contexts, is mostly shaped from his set of unique experiences. It is common for an architect to continue using a set of architectural choices that he has had the most success with in his past for new projects. 

> Architecture choices also arise from one's own education and professional training, and also from the influence of one's professional peers.

### An architecture documents the system 
> Every system has an architecture, whether it is officially documented or not. However, properly documented architectures can function as an effective documentation for the system. Since an architecture captures the system's initial requirements, constraints, and stakeholder trade-offs, it is a good practice to document it properly. The documentation can be used as a basis for training later on. It also helps in continued stakeholder communication, and for subsequent iterations on the architecture based on changing requirements. 

> The simplest way to document an architecture is to create diagrams for the different aspects of the system and organizational architecture such as Component Architecture, Deployment Architecture, Communication Architecture, and the Team or Enterprise Architecture. 

> Other data that can be captured early include the system requirements, constraints, early design decisions, and rationale for those decisions. 

### An architecture often conforms to a pattern
> Most architectures conform to certain set of styles which have had a lot of success in practice. These are referred to as architectural patterns. Examples of such patterns are Client-Server, Pipes and Filters, Data-based architectures, and others. When an architect chooses an existing pattern, he gets to refer to and reuse a lot of existing use cases and examples related to such patterns. In modern day architectures, the job of the architect comes down to mixing and matching existing sets of such readily available patterns to solve the problem at hand

### System versus enterprise architecture
> The following job roles or titles are pretty common in the software industry for architects: 
    • The Technical architect 
    • The Security architect 
    • The Information architect 
    • The Infrastructure architect

    
