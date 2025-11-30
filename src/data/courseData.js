export const courseData = {
  sections: [
    {
      id: "lectures-3-5",
      title: "Lectures 3-5: Design Principles & Usability",
      description: "GOMS, Nielsen's Heuristics, Schneiderman's Rules, and Design Methodologies.",
      concepts: [
        {
          id: "goms",
          term: "GOMS",
          definition: "A specialized human information processor model for human-computer interaction observation that describes a user's cognitive structure on four components: Goals, Operators, Methods, and Selection rules.",
          example: "Predicting how long it takes a skilled user to navigate a menu to save a file.",
          related: ["CTA", "Task Decomposition"]
        },
        {
          id: "cta",
          term: "CTA (Cognitive Task Analysis)",
          definition: "Methods used to determine the mental processes and skills required to perform a task.",
          example: "Interviewing experts to understand how they diagnose a system failure.",
          related: ["GOMS", "Task Decomposition"]
        },
        {
          id: "task-decomposition",
          term: "Task Decomposition",
          definition: "Breaking down a complex task into smaller, manageable sub-tasks to understand the steps involved.",
          example: "Breaking 'Send Email' into 'Open App', 'Click Compose', 'Type Address', etc.",
          related: ["GOMS", "CTA"]
        },
        {
          id: "interaction-modalities",
          term: "Interaction Modalities",
          definition: "The different ways a user can interact with a system, such as touch, voice, gesture, or keyboard.",
          example: "Using voice commands (Siri) vs. typing on a keyboard.",
          related: ["Multimodal Feedback"]
        },
        {
          id: "env-constraints",
          term: "Environment Constraints",
          definition: "Limitations imposed by the physical or social environment where the interaction takes place.",
          example: "Using a voice interface in a noisy library is constrained by social norms and noise.",
          related: ["System Constraints"]
        },
        {
          id: "sys-constraints",
          term: "System Constraints",
          definition: "Limitations imposed by the hardware or software capabilities of the system.",
          example: "A smartwatch screen size limits the amount of text that can be displayed.",
          related: ["Environment Constraints"]
        },
        {
          id: "dieter-rams",
          term: "Dieter Rams Design Principles",
          definition: "Ten principles for good design, emphasizing innovation, utility, aesthetics, understandability, unobtrusiveness, honesty, longevity, thoroughness, and environmental friendliness.",
          example: "Apple products often cite Rams' influence in their minimalist design.",
          related: ["Good design is as little design as possible"]
        },
        {
          id: "little-design",
          term: "Good design is as little design as possible",
          definition: "Design should concentrate on the essential aspects, and the products are not burdened with non-essentials.",
          example: "Google's homepage, which focuses almost entirely on the search bar.",
          related: ["Dieter Rams", "Minimalism"]
        },
        {
          id: "consistency-rams",
          term: "Consistency (Rams)",
          definition: "Maintaining uniformity in design elements to avoid confusion and improve learnability.",
          example: "Using the same color for all primary action buttons.",
          related: ["Schneiderman's Consistency"]
        },
        {
          id: "env-friendliness",
          term: "Environmental Friendliness",
          definition: "Design that makes an important contribution to the preservation of the environment.",
          example: "Using recyclable materials in product packaging.",
          related: ["Dieter Rams"]
        },
        {
          id: "feedback-principles",
          term: "Feedback Principles",
          definition: "Providing immediate and clear information to the user about the result of their actions.",
          example: "A button changing color when clicked.",
          related: ["Multimodal Feedback", "Gulf of Evaluation"]
        },
        {
          id: "multimodal-feedback",
          term: "Multimodal Feedback",
          definition: "Using multiple senses (sight, sound, touch) to convey information.",
          example: "A phone vibrating and playing a sound when a notification arrives.",
          related: ["Feedback Principles"]
        },
        {
          id: "feedforward",
          term: "Feedforward",
          definition: "Information provided before an action is executed, guiding the user on what will happen.",
          example: "Hovering over a link and seeing the URL in the status bar.",
          related: ["Affordances", "Signifiers"]
        },
        {
          id: "action-perception-loop",
          term: "Action-Perception Loop",
          definition: "The cyclical process where a user perceives the system state, decides on an action, executes it, and perceives the new state.",
          example: "Driving a car: seeing the road, turning the wheel, seeing the car turn.",
          related: ["Gulf of Execution", "Gulf of Evaluation"]
        },
        {
          id: "gulf-execution",
          term: "Gulf of Execution",
          definition: "The gap between a user's goal and the means to execute that goal.",
          example: "Wanting to record a show but not knowing which button to press.",
          related: ["Action-Perception Loop"]
        },
        {
          id: "gulf-evaluation",
          term: "Gulf of Evaluation",
          definition: "The difficulty of assessing the state of the system after an action.",
          example: "Pressing a button and getting no feedback.",
          related: ["Action-Perception Loop"]
        },
        {
          id: "designer-responsibility",
          term: "Designer Responsibility",
          definition: "The obligation of the designer to bridge the gulfs of execution and evaluation.",
          example: "Designing intuitive interfaces that don't require manuals.",
          related: ["Gulf of Execution"]
        },
        {
          id: "affordances",
          term: "Affordances",
          definition: "Properties of an object that show users the actions they can take.",
          example: "A handle affords pulling.",
          related: ["Signifiers"]
        },
        {
          id: "signifiers",
          term: "Signifiers",
          definition: "Signals that communicate where the action should take place.",
          example: "A 'Push' label on a door.",
          related: ["Affordances"]
        },
        {
          id: "skeuomorphism",
          term: "Skeuomorphism",
          definition: "Design concept of making items represented resemble their real-world counterparts.",
          example: "A digital note-taking app looking like a yellow legal pad.",
          related: ["Match between system and real world"]
        },
        {
          id: "direct-manipulation",
          term: "Direct Manipulation",
          definition: "Interaction style that involves continuous representation of objects of interest and rapid, reversible, incremental actions with immediate feedback.",
          example: "Dragging and dropping a file into a folder.",
          related: ["Feedback"]
        },
        {
          id: "recognition-recall",
          term: "Recognition vs Recall",
          definition: "Recognition refers to identifying something as familiar (easier), while recall involves retrieving details from memory (harder).",
          example: "Choosing a command from a menu (recognition) vs. typing a command line (recall).",
          related: ["Nielsen's Heuristics"]
        },
        {
          id: "mental-models",
          term: "Mental Models",
          definition: "A user's internal understanding of how a system works.",
          example: "Believing that pressing a thermostat button harder makes it heat up faster (incorrect model).",
          related: ["Conceptual Model"]
        },
        {
          id: "schneiderman-rules",
          term: "Schneiderman's Eight Golden Rules",
          definition: "A set of guidelines for interface design.",
          example: "Strive for consistency, Enable frequent users to use shortcuts, etc.",
          related: ["Consistency", "Feedback"]
        },
        {
          id: "consistency-schneiderman",
          term: "Strive for Consistency",
          definition: "Consistent sequences of actions should be required in similar situations.",
          example: "Standardizing button locations across screens.",
          related: ["Schneiderman's Rules"]
        },
        {
          id: "shortcuts",
          term: "Enable Frequent Users Shortcuts",
          definition: "Provide accelerators like keyboard shortcuts for expert users.",
          example: "Ctrl+C for copy.",
          related: ["Flexibility and Efficiency"]
        },
        {
          id: "informative-feedback",
          term: "Offer Informative Feedback",
          definition: "For every operator action, there should be some system feedback.",
          example: "A confirmation message after saving.",
          related: ["Feedback Principles"]
        },
        {
          id: "dialogue-closure",
          term: "Design Dialogues to Yield Closure",
          definition: "Sequences of actions should be organized into groups with a beginning, middle, and end.",
          example: "A checkout process with clear steps and a 'Thank You' page.",
          related: ["Schneiderman's Rules"]
        },
        {
          id: "error-handling",
          term: "Simple Error Handling",
          definition: "Design the system so the user cannot make a serious error. If an error is made, the system should detect the error and offer simple, comprehensible mechanisms for handling the error.",
          example: "Graying out invalid options.",
          related: ["Error Prevention"]
        },
        {
          id: "reversal-actions",
          term: "Permit Easy Reversal of Actions",
          definition: "This feature relieves anxiety, since the user knows that errors can be undone.",
          example: "Undo (Ctrl+Z) functionality.",
          related: ["User Control and Freedom"]
        },
        {
          id: "internal-locus",
          term: "Support Internal Locus of Control",
          definition: "Experienced operators strongly desire the sense that they are in charge of the system and that the system responds to their actions.",
          example: "Allowing users to customize their dashboard.",
          related: ["User Control"]
        },
        {
          id: "memory-load",
          term: "Reduce Short-term Memory Load",
          definition: "The limitation of human information processing in short-term memory requires that displays be kept simple.",
          example: "Not asking users to remember a code from one screen to type in the next.",
          related: ["Recognition rather than Recall"]
        },
        {
          id: "nielsen-heuristics",
          term: "Nielsen's Usability Heuristics",
          definition: "Ten general principles for interaction design.",
          example: "Visibility of system status, Match between system and real world, etc.",
          related: ["Heuristic Evaluation"]
        },
        {
          id: "visibility-status",
          term: "Visibility of System Status",
          definition: "The design should always keep users informed about what is going on.",
          example: "Battery life indicator.",
          related: ["Feedback"]
        },
        {
          id: "match-system-world",
          term: "Match between System and Real World",
          definition: "The design should speak the users' language. Use words, phrases, and concepts familiar to the user.",
          example: "Using a trash can icon for deleting files.",
          related: ["Skeuomorphism"]
        },
        {
          id: "user-control",
          term: "User Control and Freedom",
          definition: "Users often perform actions by mistake. They need a clearly marked 'emergency exit'.",
          example: "Cancel button in a wizard.",
          related: ["Reversal of Actions"]
        },
        {
          id: "consistency-standards",
          term: "Consistency and Standards",
          definition: "Users should not have to wonder whether different words, situations, or actions mean the same thing.",
          example: "Follow platform conventions (e.g., iOS vs Android patterns).",
          related: ["Consistency"]
        },
        {
          id: "error-prevention",
          term: "Error Prevention",
          definition: "Good error messages are important, but the best designs carefully prevent problems from occurring in the first place.",
          example: "Calendar picker preventing selection of past dates for a flight.",
          related: ["Constraints"]
        },
        {
          id: "recognition-recall-nielsen",
          term: "Recognition rather than Recall",
          definition: "Minimize the user's memory load by making elements, actions, and options visible.",
          example: "Menu items are visible, commands don't need to be memorized.",
          related: ["Memory Load"]
        },
        {
          id: "flexibility-efficiency",
          term: "Flexibility and Efficiency of Use",
          definition: "Shortcuts — hidden from novice users — may speed up the interaction for the expert user.",
          example: "Macros or keyboard shortcuts.",
          related: ["Shortcuts"]
        },
        {
          id: "aesthetic-minimalist",
          term: "Aesthetic and Minimalist Design",
          definition: "Interfaces should not contain information which is irrelevant or rarely needed.",
          example: "Clean whitespace, removing clutter.",
          related: ["Little Design"]
        },
        {
          id: "recover-errors",
          term: "Help Users Recognize, Diagnose, and Recover from Errors",
          definition: "Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.",
          example: "Instead of 'Error 404', say 'Page not found, try searching'.",
          related: ["Error Handling"]
        },
        {
          id: "help-documentation",
          term: "Help and Documentation",
          definition: "It’s best if the system doesn’t need any additional explanation. However, it may be necessary to provide documentation to help users understand how to complete their tasks.",
          example: "Searchable FAQ or tooltips.",
          related: ["Onboarding"]
        },
        {
          id: "need-finding",
          term: "Need Finding",
          definition: "The process of discovering user needs and opportunities for design.",
          example: "Observing users in their natural environment.",
          related: ["User Research"]
        },
        {
          id: "brainstorming",
          term: "Brainstorming Methodology",
          definition: "A group creativity technique by which efforts are made to find a conclusion for a specific problem by gathering a list of ideas.",
          example: "Using sticky notes to generate ideas without judgment.",
          related: ["Ideation"]
        },
        {
          id: "pov-statements",
          term: "POV (Point of View) Statements",
          definition: "Actionable problem statements that define the right challenge to address.",
          example: "'[User] needs to [User's Need] because [Surprising Insight]'.",
          related: ["Design Thinking"]
        },
        {
          id: "how-might-we",
          term: "How Might We Questions",
          definition: "Questions that launch brainstorming sessions by reframing the problem as an opportunity.",
          example: "'How might we make waiting in line more enjoyable?'",
          related: ["Brainstorming"]
        },
        {
          id: "design-alternatives",
          term: "Design Alternatives",
          definition: "Creating multiple different solutions to a problem to explore the solution space.",
          example: "Sketching 3 different layouts for a homepage.",
          related: ["Prototyping"]
        },
        {
          id: "data-driven-personas",
          term: "Data-Driven Personas",
          definition: "Personas created based on quantitative and qualitative data rather than assumptions.",
          example: "Creating a persona based on user analytics and survey results.",
          related: ["Personas"]
        },
        {
          id: "needs-vs-wants",
          term: "User Needs vs Wants",
          definition: "Needs are essential for the user to achieve their goal; wants are desires that may not be critical.",
          example: "Need: A way to make a call. Want: A gold-plated phone.",
          related: ["User Goals"]
        },
        {
          id: "user-goals",
          term: "User Goals",
          definition: "What the user is trying to achieve.",
          example: "Booking a flight.",
          related: ["Task Analysis"]
        },
        {
          id: "user-frustrations",
          term: "User Frustrations",
          definition: "Pain points or obstacles that prevent users from achieving their goals.",
          example: "Slow loading times, confusing navigation.",
          related: ["Pain Points"]
        },
        {
          id: "persona-validation",
          term: "Persona Validation",
          definition: "Verifying that personas accurately represent real users.",
          example: "Checking persona attributes against new user data.",
          related: ["Personas"]
        },
        {
          id: "clustering-analysis",
          term: "Clustering Analysis",
          definition: "A statistical method used to group similar data points, often used to identify user segments.",
          example: "Grouping users based on usage patterns.",
          related: ["K-means"]
        },
        {
          id: "k-means",
          term: "K-means",
          definition: "A specific clustering algorithm used to partition data into K clusters.",
          example: "Segmenting customers into 'High Spenders', 'Occasional Buyers', etc.",
          related: ["Clustering Analysis"]
        },
        {
          id: "setting",
          term: "Setting",
          definition: "The context or environment in which a scenario takes place.",
          example: "A busy train station.",
          related: ["Scenarios"]
        },
        {
          id: "sequence",
          term: "Sequence",
          definition: "The order of actions or events in a scenario.",
          example: "First the user logs in, then they search.",
          related: ["Scenarios"]
        },
        {
          id: "satisfaction",
          term: "Satisfaction",
          definition: "The gratification the user derives from the interaction.",
          example: "Feeling accomplished after completing a task easily.",
          related: ["User Experience"]
        },
        {
          id: "simplified-flow",
          term: "Simplified Interaction Flow",
          definition: "Streamlining the steps a user must take to complete a task.",
          example: "One-click checkout.",
          related: ["Efficiency"]
        },
        {
          id: "scenario-validation",
          term: "User Scenario Validation",
          definition: "Testing scenarios with users to ensure they are realistic and cover key use cases.",
          example: "Walking a user through a storyboard.",
          related: ["Scenarios"]
        },
        {
          id: "low-fidelity",
          term: "Low Fidelity",
          definition: "Prototypes that are rough and far from the final product, often paper-based.",
          example: "Sketches on a napkin.",
          related: ["Prototyping"]
        },
        {
          id: "medium-fidelity",
          term: "Medium Fidelity",
          definition: "Prototypes with some detail and interactivity but not full visual design.",
          example: "Wireframes created in Figma.",
          related: ["Prototyping"]
        },
        {
          id: "high-fidelity",
          term: "High Fidelity",
          definition: "Prototypes that look and behave very much like the final product.",
          example: "A fully interactive mockup with final colors and fonts.",
          related: ["Prototyping"]
        },
        {
          id: "visual-design",
          term: "Visual Design",
          definition: "The use of imagery, color, shapes, typography, and form to enhance usability and improve the user experience.",
          example: "Choosing a color palette that conveys trust.",
          related: ["Aesthetics"]
        },
        {
          id: "content",
          term: "Content",
          definition: "The information and media presented to the user.",
          example: "Text, images, videos.",
          related: ["Information Architecture"]
        },
        {
          id: "interaction",
          term: "Interaction",
          definition: "The communication between the user and the system.",
          example: "Clicking a button, swiping a screen.",
          related: ["HCI"]
        },
        {
          id: "cost-effectiveness",
          term: "Cost Effectiveness",
          definition: "Balancing the cost of development/design with the value it provides.",
          example: "Choosing a cheaper prototyping method for early testing.",
          related: ["ROI"]
        },
        {
          id: "user-feedback",
          term: "User Feedback",
          definition: "Information coming directly from users about their satisfaction or dissatisfaction with a product.",
          example: "Reviews, survey responses.",
          related: ["Evaluation"]
        },
        {
          id: "conceptual-testing",
          term: "Conceptual Model Testing",
          definition: "Evaluating whether users understand the underlying concept of the design.",
          example: "Asking users what they think a system does before they use it.",
          related: ["Mental Models"]
        },
        {
          id: "nav-validation",
          term: "Navigation Flow Validation",
          definition: "Testing if users can move through the application as intended.",
          example: "Tree testing.",
          related: ["Information Architecture"]
        },
        {
          id: "wizard-of-oz",
          term: "Wizard of Oz",
          definition: "A research experiment in which subjects interact with a computer system that subjects believe to be autonomous, but which is actually being operated or partially operated by an unseen human being.",
          example: "A human typing responses to simulate a chatbot.",
          related: ["Prototyping"]
        },
        {
          id: "paper-prototyping",
          term: "Paper Prototyping",
          definition: "A method of brainstorming, designing, testing and communicating user interfaces where rough drawings of an interface are used as prototypes.",
          example: "Using index cards to represent screens.",
          related: ["Low Fidelity"]
        },
        {
          id: "wireframing",
          term: "Wireframing",
          definition: "A visual guide that represents the skeletal framework of a website or app.",
          example: "A blueprint of a webpage layout.",
          related: ["Medium Fidelity"]
        },
        {
          id: "usability-testing",
          term: "Usability Testing",
          definition: "Evaluating a product or service by testing it with representative users.",
          example: "Watching a user try to book a flight.",
          related: ["Evaluation"]
        },
        {
          id: "task-time",
          term: "Task Completion Time",
          definition: "The amount of time it takes a user to complete a specific task.",
          example: "Time to checkout.",
          related: ["Metrics"]
        },
        {
          id: "error-rate",
          term: "Error Rate Analysis",
          definition: "Measuring how often users make mistakes.",
          example: "Percentage of users who click the wrong button.",
          related: ["Metrics"]
        },
        {
          id: "user-satisfaction",
          term: "User Satisfaction",
          definition: "A subjective measure of how the user feels about the system.",
          example: "SUS score.",
          related: ["Metrics"]
        }
      ],
      questions: [
        {
          id: "q3-1",
          type: "mcq",
          question: "Which GOMS component represents the specific steps or actions a user performs?",
          options: ["Goals", "Operators", "Methods", "Selection Rules"],
          correctAnswer: "Operators",
          explanation: "Operators are the elementary perceptual, motor, or cognitive acts, such as pressing a button or reading a phrase."
        },
        {
          id: "q3-2",
          type: "scenario",
          question: "A user is confused because a flat text label looks like a button but isn't clickable. Which concept is violated?",
          options: ["Affordance", "Feedback", "Constraint", "Mapping"],
          correctAnswer: "Affordance",
          explanation: "False affordances occur when an object looks like it performs an action (like clicking) but doesn't."
        },
        {
          id: "q3-3",
          type: "matching",
          question: "Match the heuristic to its description.",
          pairs: [
            { term: "Visibility of System Status", definition: "Keep users informed about what is going on." },
            { term: "Match between System and Real World", definition: "Speak the user's language." },
            { term: "Error Prevention", definition: "Eliminate error-prone conditions." },
            { term: "Recognition rather than Recall", definition: "Minimize the user's memory load." }
          ]
        },
        {
          id: "q3-4",
          type: "mcq",
          question: "According to Schneiderman, what should be offered for every user action?",
          options: ["A reward", "Informative feedback", "A new menu", "A sound effect"],
          correctAnswer: "Informative feedback",
          explanation: "For every operator action, there should be some system feedback. For frequent and minor actions, the response can be modest, while for infrequent and major actions, the response should be more substantial."
        },
        {
          id: "q3-5",
          type: "mcq",
          question: "Which fidelity of prototyping is best for testing detailed visual design?",
          options: ["Low Fidelity", "Medium Fidelity", "High Fidelity", "Paper Prototyping"],
          correctAnswer: "High Fidelity",
          explanation: "High fidelity prototypes look and behave like the final product, making them suitable for testing visual design."
        },
        {
          id: "q3-6",
          type: "mcq",
          question: "What is the main goal of 'Task Decomposition'?",
          options: ["To make tasks harder", "To break complex tasks into manageable sub-tasks", "To automate tasks", "To ignore user needs"],
          correctAnswer: "To break complex tasks into manageable sub-tasks",
          explanation: "Task decomposition helps in understanding the specific steps and cognitive load involved in a complex activity."
        },
        {
          id: "q3-7",
          type: "scenario",
          question: "A user tries to click a 'Save' button, but it is grayed out because a required field is empty. This is an example of:",
          options: ["Error Prevention", "Error Recovery", "Feedback", "Consistency"],
          correctAnswer: "Error Prevention",
          explanation: "By disabling the button, the system prevents the user from making the error of submitting an incomplete form."
        },
        {
          id: "q3-8",
          type: "mcq",
          question: "Which of Dieter Rams' principles suggests that design should not dominate people or their surroundings?",
          options: ["Good design is unobtrusive", "Good design is aesthetic", "Good design is honest", "Good design is long-lasting"],
          correctAnswer: "Good design is unobtrusive",
          explanation: "Products fulfilling a purpose are like tools. They are neither decorative objects nor works of art."
        },
        {
          id: "q3-9",
          type: "mcq",
          question: "What does 'Feedforward' provide to the user?",
          options: ["Information about what happened", "Information about what will happen", "A summary of the session", "Error messages"],
          correctAnswer: "Information about what will happen",
          explanation: "Feedforward guides the user before they take an action, helping them predict the outcome."
        },
        {
          id: "q3-10",
          type: "scenario",
          question: "You are designing a music player. You use a triangle icon for 'Play' because users are already familiar with this symbol. This follows:",
          options: ["Consistency and Standards", "Flexibility", "Aesthetic Design", "Error Prevention"],
          correctAnswer: "Consistency and Standards",
          explanation: "Following established conventions (standards) helps users understand the interface without learning new symbols."
        },
        {
          id: "q3-11",
          type: "mcq",
          question: "Which concept refers to the gap between a user's goal and the means to execute it?",
          options: ["Gulf of Evaluation", "Gulf of Execution", "Mental Model", "Affordance"],
          correctAnswer: "Gulf of Execution",
          explanation: "The Gulf of Execution is the difference between the intentions of the users and what the system allows them to do."
        },
        {
          id: "q3-12",
          type: "mcq",
          question: "What is 'Skeuomorphism'?",
          options: ["Minimalist design", "Digital elements resembling real-world objects", "Abstract design", "Voice interaction"],
          correctAnswer: "Digital elements resembling real-world objects",
          explanation: "Skeuomorphism uses real-world metaphors (like a leather texture on a calendar app) to make interfaces feel familiar."
        },
        {
          id: "q3-13",
          type: "mcq",
          question: "Which is a key benefit of 'Direct Manipulation'?",
          options: ["It requires programming skills", "It is slow but precise", "It provides immediate feedback and reversible actions", "It uses only text commands"],
          correctAnswer: "It provides immediate feedback and reversible actions",
          explanation: "Direct manipulation allows users to interact directly with objects (e.g., dragging a file), making the outcome immediately visible."
        },
        {
          id: "q3-14",
          type: "mcq",
          question: "Why is 'Recognition rather than Recall' important?",
          options: ["It forces users to memorize commands", "It reduces cognitive load", "It makes the screen more cluttered", "It is cheaper to implement"],
          correctAnswer: "It reduces cognitive load",
          explanation: "It is easier for humans to recognize something they have seen before (like a menu item) than to recall it from memory (like a command)."
        },
        {
          id: "q3-15",
          type: "scenario",
          question: "During a usability test, you observe a user struggling to find the 'Checkout' button. This is a:",
          options: ["Usability Problem", "User Error", "Feature Request", "Hardware Failure"],
          correctAnswer: "Usability Problem",
          explanation: "If a user cannot find a critical element, it indicates a design flaw (usability problem), not a user error."
        },
        {
          id: "q3-16",
          type: "mcq",
          question: "What is the primary focus of Cognitive Task Analysis (CTA)?",
          options: ["Physical movements", "Mental processes and skills", "Social interactions", "Visual design"],
          correctAnswer: "Mental processes and skills",
          explanation: "CTA focuses on understanding the cognitive processes required to perform a task."
        },
        {
          id: "q3-17",
          type: "mcq",
          question: "Which of the following is an example of a multimodal interaction?",
          options: ["Typing on a keyboard", "Voice command with visual feedback", "Reading a book", "Listening to a podcast"],
          correctAnswer: "Voice command with visual feedback",
          explanation: "Multimodal interaction involves using more than one sensory mode (e.g., speech and sight) to interact with a system."
        },
        {
          id: "q3-18",
          type: "scenario",
          question: "You are designing a voice interface for a noisy factory. Which constraint is most critical?",
          options: ["System Constraint", "Environmental Constraint", "Budget Constraint", "Aesthetic Constraint"],
          correctAnswer: "Environmental Constraint",
          explanation: "The noise level is a physical property of the environment that limits the effectiveness of voice interaction."
        },
        {
          id: "q3-19",
          type: "mcq",
          question: "Which design principle advocates for removing non-essential elements?",
          options: ["Good design is as little design as possible", "Good design is innovative", "Good design is long-lasting", "Good design is honest"],
          correctAnswer: "Good design is as little design as possible",
          explanation: "This principle, popularized by Dieter Rams, suggests that less is often more."
        },
        {
          id: "q3-20",
          type: "mcq",
          question: "Receiving both a vibration and a sound notification is an example of:",
          options: ["Multimodal Feedback", "Unimodal Feedback", "Feedforward", "Constraint"],
          correctAnswer: "Multimodal Feedback",
          explanation: "Using multiple senses (touch and hearing) provides redundancy and ensures the message is received."
        },
        {
          id: "q3-21",
          type: "mcq",
          question: "A user presses a button but sees no change. This widens the:",
          options: ["Gulf of Execution", "Gulf of Evaluation", "Gulf of Mexico", "Gulf of Interaction"],
          correctAnswer: "Gulf of Evaluation",
          explanation: "The Gulf of Evaluation is the difficulty of assessing the state of the system after an action."
        },
        {
          id: "q3-22",
          type: "mcq",
          question: "Whose responsibility is it to bridge the Gulf of Execution?",
          options: ["The User", "The Designer", "The System Administrator", "The Marketing Team"],
          correctAnswer: "The Designer",
          explanation: "Designers must create intuitive interfaces that make it clear how to execute actions."
        },
        {
          id: "q3-23",
          type: "mcq",
          question: "A flat button with a shadow suggests it can be pressed. The shadow is a:",
          options: ["Signifier", "Affordance", "Constraint", "Mapping"],
          correctAnswer: "Signifier",
          explanation: "Signifiers are perceptible signals (like shadows or labels) that communicate where and how an action should take place."
        },
        {
          id: "q3-24",
          type: "scenario",
          question: "A user expects a trash icon to delete a file because that's how it works in real life. This is an example of:",
          options: ["Mental Model", "Implementation Model", "System Image", "Design Model"],
          correctAnswer: "Mental Model",
          explanation: "Mental models are the user's internal understanding of how a system works, often based on real-world experience."
        },
        {
          id: "q3-25",
          type: "mcq",
          question: "Using the same terminology across all screens follows which of Schneiderman's rules?",
          options: ["Strive for Consistency", "Offer Informative Feedback", "Reduce Memory Load", "Permit Easy Reversal"],
          correctAnswer: "Strive for Consistency",
          explanation: "Consistency in terminology, layout, and action sequences reduces learning time and errors."
        },
        {
          id: "q3-26",
          type: "mcq",
          question: "Keyboard shortcuts (like Ctrl+S) are designed primarily for:",
          options: ["Novice Users", "Expert Users", "All Users", "Mobile Users"],
          correctAnswer: "Expert Users",
          explanation: "Shortcuts (accelerators) speed up interaction for frequent, expert users."
        },
        {
          id: "q3-27",
          type: "mcq",
          question: "A 'Thank You' screen after a purchase provides:",
          options: ["Dialogue Closure", "Error Prevention", "Shortcuts", "Internal Locus of Control"],
          correctAnswer: "Dialogue Closure",
          explanation: "Closure gives the user a sense of accomplishment and signals the end of a transaction."
        },
        {
          id: "q3-28",
          type: "mcq",
          question: "The 'Undo' function supports which design goal?",
          options: ["Permit Easy Reversal of Actions", "Reduce Memory Load", "Consistency", "Feedback"],
          correctAnswer: "Permit Easy Reversal of Actions",
          explanation: "Reversibility relieves anxiety and encourages exploration."
        },
        {
          id: "q3-29",
          type: "mcq",
          question: "Giving users control over their interface (e.g., customization) supports:",
          options: ["Internal Locus of Control", "External Locus of Control", "System Control", "Designer Control"],
          correctAnswer: "Internal Locus of Control",
          explanation: "Users feel more satisfied when they feel in charge of the system."
        },
        {
          id: "q3-30",
          type: "mcq",
          question: "Why should you avoid asking users to remember long codes between screens?",
          options: ["To reduce Short-term Memory Load", "To increase Long-term Memory Load", "To improve aesthetics", "To save screen space"],
          correctAnswer: "To reduce Short-term Memory Load",
          explanation: "Human short-term memory is limited; information should be visible or easily retrievable."
        },
        {
          id: "q3-31",
          type: "mcq",
          question: "A 'Cancel' button in a long process provides:",
          options: ["User Control and Freedom", "Consistency", "Error Prevention", "Recognition"],
          correctAnswer: "User Control and Freedom",
          explanation: "Users need a clearly marked 'emergency exit' to leave unwanted states."
        },
        {
          id: "q3-32",
          type: "mcq",
          question: "Removing decorative images that don't add value follows which heuristic?",
          options: ["Aesthetic and Minimalist Design", "Consistency and Standards", "Help and Documentation", "Match between System and World"],
          correctAnswer: "Aesthetic and Minimalist Design",
          explanation: "Interfaces should not contain information which is irrelevant or rarely needed."
        },
        {
          id: "q3-33",
          type: "mcq",
          question: "An error message that explains how to fix the problem helps users:",
          options: ["Recover from Errors", "Prevent Errors", "Memorize Errors", "Ignore Errors"],
          correctAnswer: "Recover from Errors",
          explanation: "Good error messages are constructive and suggest a solution."
        },
        {
          id: "q3-34",
          type: "mcq",
          question: "Observing users in their homes to understand their daily routine is an example of:",
          options: ["Need Finding", "Brainstorming", "Prototyping", "Evaluation"],
          correctAnswer: "Need Finding",
          explanation: "Need finding involves discovering user needs in their natural context."
        },
        {
          id: "q3-35",
          type: "mcq",
          question: "What is the main rule of Brainstorming?",
          options: ["No judgment", "Quality over quantity", "Criticize early", "One person speaks"],
          correctAnswer: "No judgment",
          explanation: "Deferring judgment encourages the generation of wild and creative ideas."
        },
        {
          id: "q3-36",
          type: "mcq",
          question: "A statement like 'User X needs Y because Z' is a:",
          options: ["POV Statement", "Mission Statement", "Vision Statement", "Problem Statement"],
          correctAnswer: "POV Statement",
          explanation: "Point of View (POV) statements frame the problem based on user needs and insights."
        },
        {
          id: "q3-37",
          type: "mcq",
          question: "Sketching 5 different layouts for the same page is generating:",
          options: ["Design Alternatives", "Final Designs", "User Personas", "Scenarios"],
          correctAnswer: "Design Alternatives",
          explanation: "Exploring multiple solutions helps find the best approach."
        },
        {
          id: "q3-38",
          type: "mcq",
          question: "Personas based on analytics and survey data are:",
          options: ["Data-Driven Personas", "Assumption Personas", "Proto-Personas", "Marketing Personas"],
          correctAnswer: "Data-Driven Personas",
          explanation: "Data-driven personas are grounded in real user data rather than guesses."
        },
        {
          id: "q3-39",
          type: "mcq",
          question: "A feature that is 'nice to have' but not essential is a:",
          options: ["Want", "Need", "Requirement", "Constraint"],
          correctAnswer: "Want",
          explanation: "Needs are essential for the goal; wants are desires."
        },
        {
          id: "q3-40",
          type: "mcq",
          question: "Grouping users with similar behaviors is called:",
          options: ["Clustering Analysis", "Factor Analysis", "Regression Analysis", "Trend Analysis"],
          correctAnswer: "Clustering Analysis",
          explanation: "Clustering groups similar data points (users) together."
        },
        {
          id: "q3-41",
          type: "mcq",
          question: "Walking a user through a storyboard to see if it makes sense is:",
          options: ["Scenario Validation", "Code Review", "Unit Testing", "Performance Testing"],
          correctAnswer: "Scenario Validation",
          explanation: "Validating scenarios ensures the design solves the right problem for the user."
        },
        {
          id: "q3-42",
          type: "mcq",
          question: "A sketch on a napkin is an example of:",
          options: ["Low Fidelity Prototype", "High Fidelity Prototype", "Wireframe", "Mockup"],
          correctAnswer: "Low Fidelity Prototype",
          explanation: "Low fidelity prototypes are quick, rough, and cheap to produce."
        },
        {
          id: "q3-43",
          type: "mcq",
          question: "Simulating a system with a human behind the curtain is called:",
          options: ["Wizard of Oz", "Man behind the Mirror", "Puppeteer", "Ghost in the Shell"],
          correctAnswer: "Wizard of Oz",
          explanation: "This technique allows testing of advanced concepts (like AI) before they are built."
        },
        {
          id: "q3-44",
          type: "mcq",
          question: "The SUS score measures:",
          options: ["User Satisfaction", "Task Time", "Error Rate", "Conversion Rate"],
          correctAnswer: "User Satisfaction",
          explanation: "The System Usability Scale (SUS) is a standardized metric for perceived usability."
        },
        {
          id: "q3-45",
          type: "mcq",
          question: "Which concept explains why a user might struggle to find a feature they rarely use?",
          options: ["Recall is harder than Recognition", "Recognition is harder than Recall", "Short-term memory is full", "Long-term memory is full"],
          correctAnswer: "Recall is harder than Recognition",
          explanation: "Recall requires retrieving information from memory without cues, which is cognitively more demanding."
        }
      ]
    },
    {
      id: "lectures-6-8",
      title: "Lectures 6-8: Cognition & Visual Design",
      description: "Memory, Perception, Gestalt Principles, Typography, and Color Theory.",
      concepts: [
        {
          id: "experiential-cognition",
          term: "Experiential Cognition",
          definition: "A state of mind where we perceive, act, and react to events around us effectively and effortlessly.",
          example: "Driving a car on a familiar route.",
          related: ["Reflective Cognition"]
        },
        {
          id: "reflective-cognition",
          term: "Reflective Cognition",
          definition: "Thinking, comparing, and decision-making. It is slow and requires attention.",
          example: "Designing a new software architecture.",
          related: ["Experiential Cognition"]
        },
        {
          id: "attention",
          term: "Attention",
          definition: "The process of selecting things to concentrate on at a point in time from the mass of stimuli around us.",
          example: "Focusing on a conversation in a noisy room.",
          related: ["Perception"]
        },
        {
          id: "perception",
          term: "Perception",
          definition: "How information is acquired from the environment via the sense organs and transformed into experiences.",
          example: "Seeing a red light and understanding it means stop.",
          related: ["Cognition"]
        },
        {
          id: "sensory-memory",
          term: "Sensory Memory",
          definition: "A buffer for stimuli received through the senses. It lasts for a very short time.",
          example: "The afterimage of a sparkler.",
          related: ["Short Term Memory"]
        },
        {
          id: "short-term-memory",
          term: "Short Term Memory",
          definition: "A memory system that holds a small amount of information in an active, readily available state for a short period of time.",
          example: "Remembering a phone number just long enough to dial it.",
          related: ["Working Memory"]
        },
        {
          id: "long-term-memory",
          term: "Long Term Memory",
          definition: "A system for permanently storing, managing, and retrieving information for later use.",
          example: "Remembering your childhood home address.",
          related: ["Short Term Memory"]
        },
        {
          id: "learning",
          term: "Learning",
          definition: "The accumulation of skills and knowledge that would be impossible to achieve through innate mechanisms.",
          example: "Learning to use a new software tool.",
          related: ["Incidental Learning"]
        },
        {
          id: "problem-solving",
          term: "Problem Solving",
          definition: "The process of finding solutions to difficult or complex issues.",
          example: "Debugging code.",
          related: ["Cognition"]
        },
        {
          id: "reading",
          term: "Reading",
          definition: "The process of looking at a series of written symbols and getting meaning from them.",
          example: "Reading a manual.",
          related: ["Legibility"]
        },
        {
          id: "speaking",
          term: "Speaking",
          definition: "The action of conveying information or expressing one's thoughts and feelings in spoken language.",
          example: "Voice commands.",
          related: ["Listening"]
        },
        {
          id: "listening",
          term: "Listening",
          definition: "Giving attention to sound.",
          example: "Listening to audio feedback.",
          related: ["Speaking"]
        },
        {
          id: "gestalt-principles",
          term: "Gestalt Principles",
          definition: "Principles that describe how humans group similar elements, recognize patterns and simplify complex images when perceiving objects.",
          example: "Proximity, Similarity, Closure.",
          related: ["Perception"]
        },
        {
          id: "figure-ground",
          term: "Figure-Ground",
          definition: "The tendency to separate whole figures from their backgrounds.",
          example: "Seeing a vase or two faces in the Rubin vase illusion.",
          related: ["Gestalt Principles"]
        },
        {
          id: "similarity",
          term: "Similarity",
          definition: "Elements that look similar are perceived to be part of the same group.",
          example: "Buttons with the same color are perceived as having similar functions.",
          related: ["Gestalt Principles"]
        },
        {
          id: "proximity",
          term: "Proximity",
          definition: "Objects that are near, or 'proximate' to each other, tend to be grouped together.",
          example: "Labels placed close to their input fields.",
          related: ["Gestalt Principles"]
        },
        {
          id: "continuity",
          term: "Continuity",
          definition: "Elements that are arranged on a line or curve are perceived to be more related than elements not on the line or curve.",
          example: "A dotted line perceived as a path.",
          related: ["Gestalt Principles"]
        },
        {
          id: "closure",
          term: "Closure",
          definition: "The mind's tendency to see complete figures or forms even if a picture is incomplete.",
          example: "A circle drawn with dashed lines is still seen as a circle.",
          related: ["Gestalt Principles"]
        },
        {
          id: "common-fate",
          term: "Common Fate",
          definition: "Elements that move in the same direction are perceived as a group.",
          example: "A flock of birds or a drop-down menu animation.",
          related: ["Gestalt Principles"]
        },
        {
          id: "incidental-learning",
          term: "Incidental Learning",
          definition: "Learning that occurs without any intent to learn.",
          example: "Learning where a menu item is after using it repeatedly.",
          related: ["Intentional Learning"]
        },
        {
          id: "intentional-learning",
          term: "Intentional Learning",
          definition: "Learning that is motivated by intentions and is goal-directed.",
          example: "Studying for an exam.",
          related: ["Incidental Learning"]
        },
        {
          id: "cognitive-system",
          term: "Cognitive System",
          definition: "The complex system of mental processes used in processing information.",
          example: "The human brain.",
          related: ["Cognition"]
        },
        {
          id: "anti-entropy",
          term: "Autonomous Anti-Entropy Engine",
          definition: "A metaphor for life or intelligent systems that maintain order (low entropy) against the natural tendency towards disorder.",
          example: "A self-repairing system.",
          related: ["Cognition"]
        },
        {
          id: "visual-elements",
          term: "Visual Design Elements",
          definition: "The basic building blocks of visual design: line, shape, color, texture, typography, form.",
          example: "Using lines to separate content.",
          related: ["Visual Design"]
        },
        {
          id: "hierarchy",
          term: "Hierarchy",
          definition: "The arrangement or presentation of elements in a way that implies importance.",
          example: "Using a large bold font for headings.",
          related: ["Visual Design"]
        },
        {
          id: "typography",
          term: "Typography",
          definition: "The art and technique of arranging type to make written language legible, readable, and appealing.",
          example: "Choosing the right font for a website.",
          related: ["Typeface"]
        },
        {
          id: "typeface",
          term: "Typeface",
          definition: "A family of fonts (e.g., Helvetica).",
          example: "Helvetica, Times New Roman.",
          related: ["Font"]
        },
        {
          id: "font",
          term: "Font",
          definition: "A specific weight and style of a typeface (e.g., Helvetica Bold 12pt).",
          example: "Arial Bold.",
          related: ["Typeface"]
        },
        {
          id: "serif",
          term: "Serif",
          definition: "A typeface with small decorative lines added to the ends of letters.",
          example: "Times New Roman.",
          related: ["Sans Serif"]
        },
        {
          id: "sans-serif",
          term: "Sans Serif",
          definition: "A typeface without decorative lines at the ends of letters.",
          example: "Arial, Helvetica.",
          related: ["Serif"]
        },
        {
          id: "monospace",
          term: "Monospace",
          definition: "A typeface where all characters have the same width.",
          example: "Courier New (often used for code).",
          related: ["Typography"]
        },
        {
          id: "weight-variations",
          term: "Weight Variations",
          definition: "Different thickness levels of a font (Light, Regular, Bold).",
          example: "Using bold for emphasis.",
          related: ["Typography"]
        },
        {
          id: "grids",
          term: "Grids",
          definition: "A structure made up of a series of intersecting straight (vertical, horizontal) lines used to structure content.",
          example: "A 12-column grid in web design.",
          related: ["Layout"]
        },
        {
          id: "margins",
          term: "Margins",
          definition: "The empty space around the edges of a page or element.",
          example: "The white space around a text block.",
          related: ["Padding"]
        },
        {
          id: "gutters",
          term: "Gutters",
          definition: "The space between columns in a grid.",
          example: "The gap between two text columns.",
          related: ["Grids"]
        },
        {
          id: "columns",
          term: "Columns",
          definition: "Vertical divisions of a page.",
          example: "A two-column layout.",
          related: ["Grids"]
        },
        {
          id: "rows",
          term: "Rows",
          definition: "Horizontal divisions of a page.",
          example: "A table row.",
          related: ["Grids"]
        },
        {
          id: "color-theory",
          term: "Color Theory",
          definition: "The collection of rules and guidelines which designers use to communicate with users through appealing color schemes.",
          example: "Using warm colors for energy.",
          related: ["Color Wheel"]
        },
        {
          id: "color-wheel",
          term: "Color Wheel",
          definition: "A circle with different colored sectors used to show the relationship between colors.",
          example: "Primary, secondary, and tertiary colors.",
          related: ["Color Theory"]
        },
        {
          id: "complementary-colors",
          term: "Complementary Colors",
          definition: "Colors that are opposite each other on the color wheel.",
          example: "Blue and Orange.",
          related: ["Color Theory"]
        },
        {
          id: "analogous-colors",
          term: "Analogous Colors",
          definition: "Colors that are next to each other on the color wheel.",
          example: "Blue, Blue-Green, Green.",
          related: ["Color Theory"]
        },
        {
          id: "monochromatic",
          term: "Monochromatic Colors",
          definition: "All the colors (tints, tones, and shades) of a single hue.",
          example: "Light blue, dark blue, navy.",
          related: ["Color Theory"]
        },
        {
          id: "triadic",
          term: "Triadic Colors",
          definition: "Three colors that are evenly spaced on the color wheel.",
          example: "Red, Yellow, Blue.",
          related: ["Color Theory"]
        },
        {
          id: "exteroceptive",
          term: "Exteroceptive Sensors",
          definition: "Sensors that detect stimuli from outside the body/system.",
          example: "Vision, hearing (or cameras, microphones).",
          related: ["Proprioceptive"]
        },
        {
          id: "proprioceptive",
          term: "Proprioceptive Sensors",
          definition: "Sensors that detect the position and movement of the body/system itself.",
          example: "Sense of balance (or gyroscope in a robot).",
          related: ["Interoceptive"]
        },
        {
          id: "interoceptive",
          term: "Interoceptive Sensors",
          definition: "Sensors that detect internal states.",
          example: "Hunger, thirst (or battery level in a robot).",
          related: ["Exteroceptive"]
        },
        {
          id: "guidance",
          term: "Guidance",
          definition: "Directing the user's attention or actions.",
          example: "Wizards or tutorials.",
          related: ["Help"]
        },
        {
          id: "pacing",
          term: "Pacing",
          definition: "The speed at which information is presented or interaction occurs.",
          example: "Breaking a long form into steps.",
          related: ["Flow"]
        },
        {
          id: "messaging",
          term: "Messaging",
          definition: "The communication of information to the user.",
          example: "Alerts, notifications.",
          related: ["Feedback"]
        },
        {
          id: "stakeholders",
          term: "Stakeholders",
          definition: "People who are affected by the success or failure of a project.",
          example: "Users, managers, developers.",
          related: ["Evaluation"]
        },
        {
          id: "users",
          term: "Users",
          definition: "The people who actually use the product.",
          example: "The end-customer.",
          related: ["Stakeholders"]
        },
        {
          id: "user-specs",
          term: "User Specifications",
          definition: "Detailed descriptions of the user population.",
          example: "Age range, technical skill level.",
          related: ["Personas"]
        },
        {
          id: "demographics",
          term: "Demographic Information",
          definition: "Statistical data about a population.",
          example: "Age, gender, income.",
          related: ["User Specs"]
        },
        {
          id: "evaluation-methods",
          term: "Evaluation Methods",
          definition: "Techniques used to assess a design.",
          example: "Heuristic evaluation, usability testing.",
          related: ["Evaluation"]
        },
        {
          id: "usability-problems",
          term: "Usability Problems",
          definition: "Issues that prevent users from completing tasks efficiently and effectively.",
          example: "Confusing navigation.",
          related: ["Evaluation"]
        },
        {
          id: "problem-matrix",
          term: "Usability Problems Matrix",
          definition: "A tool to categorize and prioritize usability problems based on severity and frequency.",
          example: "High severity/High frequency = Fix immediately.",
          related: ["Evaluation"]
        },
        {
          id: "within-subject",
          term: "Within-Subject Design",
          definition: "An experiment design where the same group of participants is exposed to all conditions.",
          example: "Each user tests both App A and App B.",
          related: ["Between-Subject"]
        },
        {
          id: "between-subject",
          term: "Between-Subject Design",
          definition: "An experiment design where different groups of participants are exposed to different conditions.",
          example: "Group A tests App A, Group B tests App B.",
          related: ["Within-Subject"]
        },
        {
          id: "learning-effect",
          term: "Learning Effect",
          definition: "Improvement in performance over time due to practice.",
          example: "Doing a task faster the second time.",
          related: ["Within-Subject Design"]
        },
        {
          id: "web-analytics",
          term: "Web Analytics",
          definition: "The measurement, collection, analysis, and reporting of web data.",
          example: "Google Analytics.",
          related: ["Evaluation"]
        },
        {
          id: "ab-testing",
          term: "A/B Testing",
          definition: "Comparing two versions of a webpage or app against each other to determine which one performs better.",
          example: "Testing a red button vs a green button.",
          related: ["Evaluation"]
        },
        {
          id: "predictive-models",
          term: "Predictive Models",
          definition: "Models that predict user performance without user testing.",
          example: "GOMS, Fitts's Law.",
          related: ["Evaluation"]
        },
        {
          id: "fitts-law",
          term: "Fitts's Law",
          definition: "Predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target.",
          example: "Larger buttons are faster to click.",
          related: ["Predictive Models"]
        },
        {
          id: "target-size",
          term: "Target Size",
          definition: "The physical size of the interactive element.",
          example: "Button width.",
          related: ["Fitts's Law"]
        },
        {
          id: "distance",
          term: "Distance",
          definition: "The length of the path the cursor/finger must travel.",
          example: "Distance from current mouse position to button.",
          related: ["Fitts's Law"]
        },
        {
          id: "reaction-time",
          term: "Reaction Time",
          definition: "The time elapsed between a stimulus and the response to it.",
          example: "Time to press brake after seeing red light.",
          related: ["Hick's Law"]
        },
        {
          id: "participants",
          term: "Participants",
          definition: "The people who take part in a study.",
          example: "Test subjects.",
          related: ["Evaluation"]
        },
        {
          id: "performance-metrics",
          term: "Performance Metrics",
          definition: "Quantitative measures of performance.",
          example: "Time on task, error rate.",
          related: ["Evaluation"]
        },
        {
          id: "experiment-design",
          term: "Experiment Design",
          definition: "The planning of a study to ensure valid results.",
          example: "Controlling variables.",
          related: ["Evaluation"]
        },
        {
          id: "stat-significance",
          term: "Statistical Significance",
          definition: "The likelihood that a relationship between two or more variables is caused by something other than chance.",
          example: "p < 0.05.",
          related: ["Evaluation"]
        }
      ],
      questions: [
        {
          id: "q6-1",
          type: "mcq",
          question: "Which Gestalt principle explains why we perceive a series of dots as a line?",
          options: ["Proximity", "Continuity", "Closure", "Similarity"],
          correctAnswer: "Continuity",
          explanation: "The principle of continuity states that elements that are arranged on a line or curve are perceived to be more related than elements not on the line or curve."
        },
        {
          id: "q6-2",
          type: "scenario",
          question: "You are designing a dashboard. To ensure users perceive related metrics as a group, you place them inside a common bordered box. Which principle are you using?",
          options: ["Common Region", "Proximity", "Similarity", "Closure"],
          correctAnswer: "Common Region",
          explanation: "Common Region states that elements are perceived as part of a group if they are located within the same closed region."
        },
        {
          id: "q6-3",
          type: "mcq",
          question: "According to Fitts's Law, how can you make a button easier to click?",
          options: ["Make it red", "Make it larger and closer", "Make it smaller and further", "Add a sound effect"],
          correctAnswer: "Make it larger and closer",
          explanation: "Fitts's Law states that time to target depends on distance and size. Larger targets closer to the cursor are faster to hit."
        },
        {
          id: "q6-4",
          type: "mcq",
          question: "What is the difference between serif and sans-serif fonts?",
          options: ["Serifs have decorative lines", "Sans-serifs are older", "Serifs are only for web", "There is no difference"],
          correctAnswer: "Serifs have decorative lines",
          explanation: "Serifs are the small lines attached to the end of a stroke in a letter or symbol."
        },
        {
          id: "q6-5",
          type: "mcq",
          question: "Which memory type has the shortest duration?",
          options: ["Long Term", "Short Term", "Sensory", "Working"],
          correctAnswer: "Sensory",
          explanation: "Sensory memory lasts only for a fraction of a second to a few seconds."
        },
        {
          id: "q6-6",
          type: "mcq",
          question: "Which Gestalt principle states that elements moving in the same direction are perceived as a group?",
          options: ["Common Fate", "Similarity", "Proximity", "Closure"],
          correctAnswer: "Common Fate",
          explanation: "Common Fate explains why we group things that move together, like a flock of birds."
        },
        {
          id: "q6-7",
          type: "scenario",
          question: "You use a consistent red color for all 'Delete' buttons. Which Gestalt principle are you leveraging?",
          options: ["Similarity", "Proximity", "Continuity", "Figure-Ground"],
          correctAnswer: "Similarity",
          explanation: "The principle of Similarity states that things which share visual characteristics such as shape, size, color, texture, value or orientation will be seen as belonging together."
        },
        {
          id: "q6-8",
          type: "mcq",
          question: "What is 'Experiential Cognition'?",
          options: ["Slow, deep thinking", "Fast, effortless processing", "Dreaming", "Calculating math problems"],
          correctAnswer: "Fast, effortless processing",
          explanation: "Experiential cognition is the state of mind where we perceive, act, and react to events around us effectively and effortlessly (e.g., driving)."
        },
        {
          id: "q6-9",
          type: "mcq",
          question: "Which type of learning occurs without any conscious intent?",
          options: ["Intentional Learning", "Incidental Learning", "Formal Learning", "Rote Learning"],
          correctAnswer: "Incidental Learning",
          explanation: "Incidental learning happens as a byproduct of another activity, like learning where a button is after using an app for a while."
        },
        {
          id: "q6-10",
          type: "mcq",
          question: "In typography, what is a 'Serif'?",
          options: ["The height of the letter", "A decorative line at the end of a stroke", "The space between lines", "A type of bolding"],
          correctAnswer: "A decorative line at the end of a stroke",
          explanation: "Serifs are the small feet or lines attached to the ends of letters in fonts like Times New Roman."
        },
        {
          id: "q6-11",
          type: "mcq",
          question: "Which color scheme uses colors that are opposite each other on the color wheel?",
          options: ["Analogous", "Monochromatic", "Complementary", "Triadic"],
          correctAnswer: "Complementary",
          explanation: "Complementary colors (like blue and orange) provide high contrast and high impact."
        },
        {
          id: "q6-12",
          type: "mcq",
          question: "What does 'Fitts's Law' predict?",
          options: ["User satisfaction", "Movement time to a target", "Memory retention", "Color preference"],
          correctAnswer: "Movement time to a target",
          explanation: "Fitts's Law models the time it takes to move to and select a target based on its size and distance."
        },
        {
          id: "q6-13",
          type: "scenario",
          question: "A user ignores a banner ad because it looks like an advertisement. This is an example of:",
          options: ["Banner Blindness", "Change Blindness", "Color Blindness", "Gestalt Failure"],
          correctAnswer: "Banner Blindness",
          explanation: "Users consciously or unconsciously ignore web page elements that they perceive to be advertisements."
        },
        {
          id: "q6-14",
          type: "mcq",
          question: "Which sensor type detects internal states like hunger or battery level?",
          options: ["Exteroceptive", "Proprioceptive", "Interoceptive", "Retroceptive"],
          correctAnswer: "Interoceptive",
          explanation: "Interoception is the sense of the internal state of the body (or system)."
        },
        {
          id: "q6-15",
          type: "mcq",
          question: "What is 'Hierarchy' in visual design?",
          options: ["Using only one font", "Arranging elements to imply importance", "Using a grid", "Making everything the same size"],
          correctAnswer: "Arranging elements to imply importance",
          explanation: "Visual hierarchy guides the user's eye to the most important information first."
        },
        {
          id: "q6-16",
          type: "mcq",
          question: "Designing a complex software architecture primarily involves which type of cognition?",
          options: ["Reflective Cognition", "Experiential Cognition", "Sensory Cognition", "Reactive Cognition"],
          correctAnswer: "Reflective Cognition",
          explanation: "Reflective cognition involves thinking, comparing, and decision-making, which is slow and requires attention."
        },
        {
          id: "q6-17",
          type: "mcq",
          question: "The 'Cocktail Party Effect' is an example of:",
          options: ["Selective Attention", "Divided Attention", "Sustained Attention", "Visual Perception"],
          correctAnswer: "Selective Attention",
          explanation: "It demonstrates the ability to focus on one specific stimulus while filtering out others."
        },
        {
          id: "q6-18",
          type: "mcq",
          question: "Interpreting a red octagon as 'Stop' is an example of:",
          options: ["Perception", "Sensation", "Reflex", "Adaptation"],
          correctAnswer: "Perception",
          explanation: "Perception is the process of organizing and interpreting sensory information to give it meaning."
        },
        {
          id: "q6-19",
          type: "mcq",
          question: "What is the typical capacity of Short-Term Memory?",
          options: ["7 +/- 2 items", "Unlimited", "1 item", "100 items"],
          correctAnswer: "7 +/- 2 items",
          explanation: "Miller's Law suggests the number of objects an average human can hold in working memory is about 7."
        },
        {
          id: "q6-20",
          type: "mcq",
          question: "Your childhood home address is stored in:",
          options: ["Long-Term Memory", "Short-Term Memory", "Sensory Memory", "Working Memory"],
          correctAnswer: "Long-Term Memory",
          explanation: "Long-term memory stores information for long periods, potentially a lifetime."
        },
        {
          id: "q6-21",
          type: "mcq",
          question: "Acquiring the skill to type without looking at the keyboard is an example of:",
          options: ["Learning", "Recall", "Recognition", "Attention"],
          correctAnswer: "Learning",
          explanation: "Learning involves the accumulation of skills and knowledge through practice."
        },
        {
          id: "q6-22",
          type: "mcq",
          question: "Troubleshooting a software bug is best described as:",
          options: ["Problem Solving", "Rote Memorization", "Perception", "Sensation"],
          correctAnswer: "Problem Solving",
          explanation: "Problem solving is the process of finding solutions to difficult or complex issues."
        },
        {
          id: "q6-23",
          type: "mcq",
          question: "Which is generally faster for users when processing web content?",
          options: ["Scanning", "Reading word-for-word", "Listening", "Speaking"],
          correctAnswer: "Scanning",
          explanation: "Users rarely read web pages word-by-word; they scan for keywords and headings."
        },
        {
          id: "q6-24",
          type: "mcq",
          question: "Distinguishing a button from the background relies on which Gestalt principle?",
          options: ["Figure-Ground", "Proximity", "Similarity", "Continuity"],
          correctAnswer: "Figure-Ground",
          explanation: "The eye differentiates an object form its surrounding area."
        },
        {
          id: "q6-25",
          type: "mcq",
          question: "Placing related form fields (like City, State, Zip) close together uses:",
          options: ["Proximity", "Closure", "Figure-Ground", "Symmetry"],
          correctAnswer: "Proximity",
          explanation: "Objects that are near each other tend to be grouped together."
        },
        {
          id: "q6-26",
          type: "mcq",
          question: "Seeing a circle even if a small piece of the line is missing is due to:",
          options: ["Closure", "Proximity", "Similarity", "Common Fate"],
          correctAnswer: "Closure",
          explanation: "The mind fills in missing information to create a complete image."
        },
        {
          id: "q6-27",
          type: "mcq",
          question: "Studying flashcards for an exam is:",
          options: ["Intentional Learning", "Incidental Learning", "Passive Learning", "Reflexive Learning"],
          correctAnswer: "Intentional Learning",
          explanation: "Intentional learning is motivated by a specific goal."
        },
        {
          id: "q6-28",
          type: "mcq",
          question: "Living systems fighting against disorder are described as:",
          options: ["Autonomous Anti-Entropy Engines", "Entropy Generators", "Chaos Systems", "Static Systems"],
          correctAnswer: "Autonomous Anti-Entropy Engines",
          explanation: "This metaphor describes how intelligent systems maintain order (low entropy) against natural disorder."
        },
        {
          id: "q6-29",
          type: "mcq",
          question: "Helvetica is an example of a:",
          options: ["Typeface", "Font", "Glyph", "Serif"],
          correctAnswer: "Typeface",
          explanation: "A typeface is a family of fonts (like Helvetica), while a font is a specific weight/style (like Helvetica Bold)."
        },
        {
          id: "q6-30",
          type: "mcq",
          question: "Code editors typically use which font type?",
          options: ["Monospace", "Serif", "Sans-Serif", "Script"],
          correctAnswer: "Monospace",
          explanation: "Monospace fonts have a fixed width for each character, making code alignment easier."
        },
        {
          id: "q6-31",
          type: "mcq",
          question: "The space between two columns in a grid is called the:",
          options: ["Gutter", "Margin", "Padding", "Border"],
          correctAnswer: "Gutter",
          explanation: "Gutters provide breathing room between grid columns."
        },
        {
          id: "q6-32",
          type: "mcq",
          question: "Colors that are next to each other on the color wheel are:",
          options: ["Analogous", "Complementary", "Triadic", "Monochromatic"],
          correctAnswer: "Analogous",
          explanation: "Analogous colors (e.g., Blue, Blue-Green, Green) create harmonious, low-contrast schemes."
        },
        {
          id: "q6-33",
          type: "mcq",
          question: "Using only shades, tints, and tones of Blue is a:",
          options: ["Monochromatic Scheme", "Analogous Scheme", "Complementary Scheme", "Triadic Scheme"],
          correctAnswer: "Monochromatic Scheme",
          explanation: "Monochromatic schemes use a single hue with variations in lightness and saturation."
        },
        {
          id: "q6-34",
          type: "mcq",
          question: "A camera on a robot is which type of sensor?",
          options: ["Exteroceptive", "Proprioceptive", "Interoceptive", "Thermal"],
          correctAnswer: "Exteroceptive",
          explanation: "Exteroceptive sensors detect stimuli from outside the system (like vision)."
        },
        {
          id: "q6-35",
          type: "mcq",
          question: "A robot knowing the position of its own arm uses:",
          options: ["Proprioceptive Sensors", "Exteroceptive Sensors", "Interoceptive Sensors", "Remote Sensors"],
          correctAnswer: "Proprioceptive Sensors",
          explanation: "Proprioception is the sense of self-movement and body position."
        },
        {
          id: "q6-36",
          type: "mcq",
          question: "Breaking a long tutorial into small, manageable chunks is an example of:",
          options: ["Pacing", "Guidance", "Messaging", "Feedback"],
          correctAnswer: "Pacing",
          explanation: "Pacing controls the speed and amount of information presented to the user."
        },
        {
          id: "q6-37",
          type: "mcq",
          question: "Anyone affected by the success or failure of a project is a:",
          options: ["Stakeholder", "User", "Developer", "Manager"],
          correctAnswer: "Stakeholder",
          explanation: "Stakeholders include users, but also managers, investors, and others impacted by the system."
        },
        {
          id: "q6-38",
          type: "mcq",
          question: "A document defining the target audience's age, skills, and environment is:",
          options: ["User Specification", "System Specification", "Technical Specification", "Design Specification"],
          correctAnswer: "User Specification",
          explanation: "User specs detail the characteristics of the user population."
        },
        {
          id: "q6-39",
          type: "mcq",
          question: "Heuristic Evaluation is a type of:",
          options: ["Evaluation Method", "User Testing", "Prototyping", "Brainstorming"],
          correctAnswer: "Evaluation Method",
          explanation: "It involves experts reviewing an interface against a set of usability principles."
        },
        {
          id: "q6-40",
          type: "mcq",
          question: "Testing both Version A and Version B with the same user is a:",
          options: ["Within-Subject Design", "Between-Subject Design", "Randomized Design", "Control Group Design"],
          correctAnswer: "Within-Subject Design",
          explanation: "In within-subject design, each participant experiences all conditions."
        },
        {
          id: "q6-41",
          type: "mcq",
          question: "Users getting faster at a task because they've done it before is called the:",
          options: ["Learning Effect", "Fatigue Effect", "Novelty Effect", "Placebo Effect"],
          correctAnswer: "Learning Effect",
          explanation: "Practice leads to improved performance, which can confound experiment results."
        },
        {
          id: "q6-42",
          type: "mcq",
          question: "Comparing two headlines to see which converts better is:",
          options: ["A/B Testing", "Usability Testing", "Heuristic Evaluation", "Card Sorting"],
          correctAnswer: "A/B Testing",
          explanation: "A/B testing compares two versions of a single variable to determine which performs better."
        },
        {
          id: "q6-43",
          type: "mcq",
          question: "According to Fitts's Law, a target that is larger and closer is:",
          options: ["Faster to acquire", "Slower to acquire", "Harder to see", "Less accurate"],
          correctAnswer: "Faster to acquire",
          explanation: "Movement time decreases as target size increases and distance decreases."
        },
        {
          id: "q6-44",
          type: "mcq",
          question: "The time elapsed between a stimulus and the start of a response is:",
          options: ["Reaction Time", "Movement Time", "Response Time", "Think Time"],
          correctAnswer: "Reaction Time",
          explanation: "Reaction time is the time needed to perceive and process a signal before acting."
        },
        {
          id: "q6-45",
          type: "mcq",
          question: "A p-value < 0.05 typically indicates:",
          options: ["Statistical Significance", "Random Chance", "High Error Rate", "Low Validity"],
          correctAnswer: "Statistical Significance",
          explanation: "It suggests that the observed results are unlikely to be due to chance alone."
        },
        {
          id: "q6-46",
          type: "mcq",
          question: "Which evaluation method involves tracking user behavior on a live website?",
          options: ["Web Analytics", "Lab Testing", "Heuristic Evaluation", "Cognitive Walkthrough"],
          correctAnswer: "Web Analytics",
          explanation: "Web analytics collects data on how real users interact with a live site."
        },
        {
          id: "q6-47",
          type: "mcq",
          question: "Which of these is a quantitative performance metric?",
          options: ["Time on Task", "User Comments", "Facial Expressions", "Think Aloud Protocol"],
          correctAnswer: "Time on Task",
          explanation: "Quantitative metrics are numerical measurements of performance."
        }
      ]
    },
    {
      id: "lectures-10-12",
      title: "Lectures 10-12: Robotics & Social Interaction",
      description: "HRI, Persuasive Technology, Social Robots, and Ethics.",
      concepts: [
        {
          id: "social-robot",
          term: "Social Robot",
          definition: "An autonomous robot that interacts and communicates with humans or other autonomous physical agents by following social behaviors and rules.",
          example: "Pepper.",
          related: ["HRI"]
        },
        {
          id: "human-society",
          term: "Human Society",
          definition: "A group of people involved in persistent social interaction.",
          example: "A community.",
          related: ["Social Environment"]
        },
        {
          id: "social-environment",
          term: "Social Environment",
          definition: "The immediate physical and social setting in which people live or in which something happens or develops.",
          example: "A workplace.",
          related: ["Context"]
        },
        {
          id: "proxemics",
          term: "Proxemics",
          definition: "The study of human use of space and the effects that population density has on behavior, communication, and social interaction.",
          example: "Personal space zones.",
          related: ["Spatial Interaction"]
        },
        {
          id: "sociality",
          term: "Sociality",
          definition: "The degree to which individuals in an animal population tend to associate in social groups and form cooperative societies.",
          example: "Humans are highly social.",
          related: ["Social Robot"]
        },
        {
          id: "spatial-interaction",
          term: "Spatial Interaction",
          definition: "Interaction that involves movement and position in space.",
          example: "A robot moving out of a human's way.",
          related: ["Proxemics"]
        },
        {
          id: "distance-robot-human",
          term: "Distance between Robot and Human",
          definition: "Appropriate physical distancing based on social norms.",
          example: "Intimate, Personal, Social, Public zones.",
          related: ["Proxemics"]
        },
        {
          id: "types-interaction",
          term: "Types of Interaction",
          definition: "Different modes of communication.",
          example: "Verbal, Non-verbal.",
          related: ["HRI"]
        },
        {
          id: "verbal-interaction",
          term: "Verbal Interaction",
          definition: "Communication using speech.",
          example: "Talking to a robot.",
          related: ["HRI"]
        },
        {
          id: "non-verbal-interaction",
          term: "Non-verbal Interaction",
          definition: "Communication without words.",
          example: "Gestures, facial expressions, body language.",
          related: ["HRI"]
        },
        {
          id: "form-follows-function",
          term: "Form Follows Function",
          definition: "The shape of a building or object should be primarily based upon its intended function or purpose.",
          example: "A hammer looks like a tool for hitting.",
          related: ["Design"]
        },
        {
          id: "under-promise",
          term: "Under-promise and Over-deliver",
          definition: "Managing expectations so that the user is pleasantly surprised.",
          example: "Promising 3 day shipping but arriving in 1.",
          related: ["User Satisfaction"]
        },
        {
          id: "mix-metaphors",
          term: "Don't Mix Metaphors",
          definition: "Avoid using conflicting design metaphors that confuse the user.",
          example: "Don't use a trash can for saving.",
          related: ["Consistency"]
        },
        {
          id: "design-heuristics-hri",
          term: "Design Heuristics (HRI)",
          definition: "Guidelines specifically for designing human-robot interactions.",
          example: "Make the robot's state visible.",
          related: ["Nielsen's Heuristics"]
        },
        {
          id: "robot-definition",
          term: "Robot Definition",
          definition: "A machine capable of carrying out a complex series of actions automatically.",
          example: "Industrial arm.",
          related: ["Automation"]
        },
        {
          id: "coffee-machine",
          term: "Coffee Machine",
          definition: "Often used as an example to debate the definition of a robot (is a smart coffee machine a robot?).",
          example: "Automated espresso maker.",
          related: ["Robot Definition"]
        },
        {
          id: "autonomy",
          term: "Autonomy",
          definition: "The ability to act independently.",
          example: "Self-driving car.",
          related: ["Robot"]
        },
        {
          id: "intelligence",
          term: "Intelligence",
          definition: "The ability to acquire and apply knowledge and skills.",
          example: "AI.",
          related: ["Robot"]
        },
        {
          id: "robot-classification",
          term: "Robot Classification",
          definition: "Categorizing robots based on function, environment, or autonomy.",
          example: "Industrial vs Service robots.",
          related: ["Robot"]
        },
        {
          id: "reasoning-requirements",
          term: "Reasoning Requirements",
          definition: "The cognitive capabilities a robot needs to perform its tasks.",
          example: "Path planning.",
          related: ["AI"]
        },
        {
          id: "exam-scope",
          term: "Exam Scope",
          definition: "The range of topics covered in the exam.",
          example: "Lectures 3-12.",
          related: ["Study"]
        },
        {
          id: "slides",
          term: "Slides",
          definition: "Presentation materials used in lectures.",
          example: "PowerPoint.",
          related: ["Study Material"]
        },
        {
          id: "compulsory-reading",
          term: "Compulsory Reading",
          definition: "Required texts for the course.",
          example: "Textbook chapters.",
          related: ["Study Material"]
        },
        {
          id: "practice-sessions",
          term: "Practice Sessions",
          definition: "Hands-on learning opportunities.",
          example: "Labs.",
          related: ["Study"]
        },
        {
          id: "body",
          term: "Body",
          definition: "The physical structure of the robot.",
          example: "Chassis.",
          related: ["Robot Components"]
        },
        {
          id: "sensors",
          term: "Sensors",
          definition: "Devices that detect events or changes in the environment.",
          example: "Camera, Lidar.",
          related: ["Perception"]
        },
        {
          id: "actuators",
          term: "Actuators",
          definition: "Components that are responsible for moving and controlling a mechanism or system.",
          example: "Motors.",
          related: ["Robot Components"]
        },
        {
          id: "controller",
          term: "Controller",
          definition: "The 'brain' of the robot that processes data and sends commands.",
          example: "Microcontroller.",
          related: ["Robot Components"]
        },
        {
          id: "environment",
          term: "Environment",
          definition: "The surroundings in which the robot operates.",
          example: "Factory floor.",
          related: ["Context"]
        },
        {
          id: "hri",
          term: "Human Robot Interaction (HRI)",
          definition: "A field of study dedicated to understanding, designing, and evaluating robotic systems for use by or with humans.",
          example: "Designing a robot that can work safely alongside humans.",
          related: ["HCI"]
        },
        {
          id: "persuasive-tech",
          term: "Persuasive Technology",
          definition: "Technology that is designed to change attitudes or behaviors of the users through persuasion and social influence.",
          example: "Fitbit.",
          related: ["Captology"]
        },
        {
          id: "tool",
          term: "Tool",
          definition: "Technology that increases capability.",
          example: "Calculator.",
          related: ["Persuasive Tech"]
        },
        {
          id: "medium",
          term: "Medium",
          definition: "Technology that provides experience.",
          example: "VR headset.",
          related: ["Persuasive Tech"]
        },
        {
          id: "social-actor",
          term: "Social Actor",
          definition: "Technology that creates a relationship.",
          example: "Digital assistant.",
          related: ["Persuasive Tech"]
        },
        {
          id: "fill-blank",
          term: "Fill in the Blank Format",
          definition: "A type of question or interaction.",
          example: "Completing a sentence.",
          related: ["Assessment"]
        },
        {
          id: "jibo",
          term: "Jibo Case Study",
          definition: "A social robot designed for the home that focused on emotional connection.",
          example: "Jibo.",
          related: ["Social Robot"]
        },
        {
          id: "dark-patterns",
          term: "Dark Patterns",
          definition: "User interface design choices that coerce, steer, or deceive users.",
          example: "Hidden costs.",
          related: ["Ethics"]
        },
        {
          id: "nagging",
          term: "Nagging",
          definition: "A dark pattern where the system repeatedly asks the user to do something.",
          example: "Turn on notifications prompts.",
          related: ["Dark Patterns"]
        },
        {
          id: "obstruction",
          term: "Obstruction",
          definition: "A dark pattern that makes it hard to do what you want.",
          example: "Hard to cancel subscription.",
          related: ["Dark Patterns"]
        },
        {
          id: "interference",
          term: "Interference",
          definition: "A dark pattern that visually confuses the user.",
          example: "Disguised ads.",
          related: ["Dark Patterns"]
        },
        {
          id: "iot",
          term: "Internet of Things (IoT)",
          definition: "The network of physical objects embedded with sensors, software, and other technologies.",
          example: "Smart bulb.",
          related: ["Connectivity"]
        },
        {
          id: "ambient-intelligence",
          term: "Ambient Intelligence",
          definition: "Electronic environments that are sensitive and responsive to the presence of people.",
          example: "Lights turning on when you enter.",
          related: ["IoT"]
        },
        {
          id: "symbiotic-societies",
          term: "Symbiotic Societies",
          definition: "Future societies where humans and intelligent machines live and work together in mutual dependence.",
          example: "AI assistants integrated into daily life.",
          related: ["Future"]
        },
        {
          id: "ethical-dilemmas",
          term: "Ethical Dilemmas",
          definition: "Situations where there is a difficult choice between two courses of action, often involving moral principles.",
          example: "Trolley problem.",
          related: ["Ethics"]
        },
        {
          id: "informed-consent",
          term: "Informed Consent",
          definition: "Permission granted in the knowledge of the possible consequences.",
          example: "Cookie banners.",
          related: ["Ethics"]
        }
      ],
      questions: [
        {
          id: "q10-1",
          type: "mcq",
          question: "What defines a 'Social Robot'?",
          options: ["It has a face", "It follows social behaviors and rules", "It can speak English", "It is made of soft materials"],
          correctAnswer: "It follows social behaviors and rules",
          explanation: "Social robots are defined by their ability to interact according to social norms."
        },
        {
          id: "q10-2",
          type: "scenario",
          question: "An app makes it extremely difficult to delete your account by hiding the option deep in settings. This is an example of:",
          options: ["Persuasive Technology", "Dark Pattern", "Poor Usability", "Security Feature"],
          correctAnswer: "Dark Pattern",
          explanation: "This is a 'Roach Motel' dark pattern, where it's easy to get in but hard to get out."
        },
        {
          id: "q10-3",
          type: "mcq",
          question: "Which of these is NOT a component of a robot?",
          options: ["Sensors", "Actuators", "Controller", "Emotion Engine"],
          correctAnswer: "Emotion Engine",
          explanation: "The core components are Sensors (perception), Actuators (action), and Controller (processing). Emotion engines are software features, not fundamental hardware components."
        },
        {
          id: "q10-4",
          type: "mcq",
          question: "What is 'Proxemics'?",
          options: ["Study of robot programming", "Study of human use of space", "Study of pixels", "Study of proximity sensors"],
          correctAnswer: "Study of human use of space",
          explanation: "Proxemics deals with the amount of space that people feel it necessary to set between themselves and others."
        },
        {
          id: "q10-5",
          type: "mcq",
          question: "Which dark pattern involves repeatedly asking the user to do something they have already declined?",
          options: ["Nagging", "Obstruction", "Sneaking", "Forced Action"],
          correctAnswer: "Nagging",
          explanation: "Nagging is a persistent interruption that requests the user to perform an action."
        },
        {
          id: "q10-6",
          type: "mcq",
          question: "What is the 'Uncanny Valley'?",
          options: ["A place in California", "A dip in emotional response when a robot looks almost human but not quite", "A type of robot sensor", "A design methodology"],
          correctAnswer: "A dip in emotional response when a robot looks almost human but not quite",
          explanation: "The Uncanny Valley hypothesis suggests that human replicas which appear almost, but not exactly, like real human beings elicit feelings of eeriness and revulsion."
        },
        {
          id: "q10-7",
          type: "scenario",
          question: "A robot assistant waits for you to finish speaking before it replies. Which HRI heuristic is it following?",
          options: ["Turn-taking", "Proxemics", "Form follows function", "Safety"],
          correctAnswer: "Turn-taking",
          explanation: "Effective verbal interaction requires natural turn-taking to avoid interrupting the user."
        },
        {
          id: "q10-8",
          type: "mcq",
          question: "Which of these is a 'Social Actor'?",
          options: ["A hammer", "A calculator", "A voice assistant like Alexa", "A spreadsheet"],
          correctAnswer: "A voice assistant like Alexa",
          explanation: "Social actors are technologies that create a social relationship with the user, often through voice or personality."
        },
        {
          id: "q10-9",
          type: "mcq",
          question: "What is 'Ambient Intelligence'?",
          options: ["Smart lights", "Environments that are sensitive and responsive to people", "Robots in space", "Virtual Reality"],
          correctAnswer: "Environments that are sensitive and responsive to people",
          explanation: "Ambient intelligence refers to electronic environments that are sensitive and responsive to the presence of people."
        },
        {
          id: "q10-10",
          type: "mcq",
          question: "What does 'Form Follows Function' mean?",
          options: ["Make it look cool first", "The shape should be based on its intended purpose", "Function is irrelevant", "All robots should look like humans"],
          correctAnswer: "The shape should be based on its intended purpose",
          explanation: "This design principle states that the shape of a building or object should be primarily based upon its intended function or purpose."
        },
        {
          id: "q10-11",
          type: "scenario",
          question: "You sign up for a free trial, but the 'Cancel' button is hidden behind 5 different screens. This is:",
          options: ["Obstruction", "Guidance", "Persuasion", "Security"],
          correctAnswer: "Obstruction",
          explanation: "Obstruction is a dark pattern that makes it easy to get into a situation (subscribe) but hard to get out (cancel)."
        },
        {
          id: "q10-12",
          type: "mcq",
          question: "Which zone of proxemics is reserved for close friends and family?",
          options: ["Public Zone", "Social Zone", "Personal Zone", "Intimate Zone"],
          correctAnswer: "Personal Zone",
          explanation: "The Personal Zone (1.5 - 4 feet) is typically for friends and family. Intimate is for embracing, touching, whispering."
        },
        {
          id: "q10-13",
          type: "mcq",
          question: "What is a 'Symbiotic Society'?",
          options: ["A society of only robots", "A society where humans and machines live in mutual dependence", "A society without technology", "A sci-fi movie"],
          correctAnswer: "A society where humans and machines live in mutual dependence",
          explanation: "Symbiotic societies envision a future where humans and intelligent systems work together closely."
        },
        {
          id: "q10-14",
          type: "mcq",
          question: "What is the primary goal of 'Persuasive Technology'?",
          options: ["To trick users", "To change attitudes or behaviors", "To steal data", "To entertain"],
          correctAnswer: "To change attitudes or behaviors",
          explanation: "Persuasive technology is designed to change attitudes or behaviors of the users through persuasion and social influence, not coercion."
        },
        {
          id: "q10-15",
          type: "mcq",
          question: "Which component acts as the 'brain' of the robot?",
          options: ["Actuator", "Sensor", "Controller", "Battery"],
          correctAnswer: "Controller",
          explanation: "The controller processes data from sensors and sends commands to actuators."
        },
        {
          id: "q10-16",
          type: "mcq",
          question: "A group of people involved in persistent social interaction is a:",
          options: ["Human Society", "Social Network", "Focus Group", "User Base"],
          correctAnswer: "Human Society",
          explanation: "Society is characterized by patterns of relationships between individuals."
        },
        {
          id: "q10-17",
          type: "mcq",
          question: "The immediate physical and social setting in which people live is the:",
          options: ["Social Environment", "Virtual Environment", "Development Environment", "Test Environment"],
          correctAnswer: "Social Environment",
          explanation: "The social environment includes the culture and people that an individual interacts with."
        },
        {
          id: "q10-18",
          type: "mcq",
          question: "A robot moving out of a human's path to avoid collision is an example of:",
          options: ["Spatial Interaction", "Verbal Interaction", "Emotional Interaction", "Tactile Interaction"],
          correctAnswer: "Spatial Interaction",
          explanation: "Spatial interaction involves movement and positioning in shared space."
        },
        {
          id: "q10-19",
          type: "mcq",
          question: "Speech recognition enables which type of interaction?",
          options: ["Verbal Interaction", "Non-verbal Interaction", "Haptic Interaction", "Spatial Interaction"],
          correctAnswer: "Verbal Interaction",
          explanation: "Verbal interaction relies on spoken language."
        },
        {
          id: "q10-20",
          type: "mcq",
          question: "A robot nodding its head to indicate agreement is using:",
          options: ["Non-verbal Interaction", "Verbal Interaction", "Text Interaction", "Code Interaction"],
          correctAnswer: "Non-verbal Interaction",
          explanation: "Gestures and body language are forms of non-verbal communication."
        },
        {
          id: "q10-21",
          type: "mcq",
          question: "Setting low expectations to exceed them later is known as:",
          options: ["Under-promise and Over-deliver", "Over-promise and Under-deliver", "Bait and Switch", "Feature Creep"],
          correctAnswer: "Under-promise and Over-deliver",
          explanation: "This strategy manages user expectations to increase satisfaction."
        },
        {
          id: "q10-22",
          type: "mcq",
          question: "Using a 'Save' icon that looks like a trash can violates which rule?",
          options: ["Don't Mix Metaphors", "Form Follows Function", "Less is More", "Consistency"],
          correctAnswer: "Don't Mix Metaphors",
          explanation: "Conflicting metaphors confuse the user about the object's function."
        },
        {
          id: "q10-23",
          type: "mcq",
          question: "Why is a smart coffee maker sometimes debated as being a robot?",
          options: ["It has sensors and actuators but limited autonomy", "It makes coffee", "It has no face", "It is too small"],
          correctAnswer: "It has sensors and actuators but limited autonomy",
          explanation: "The definition of a robot often hinges on the degree of autonomy and complexity."
        },
        {
          id: "q10-24",
          type: "mcq",
          question: "A robot that makes its own decisions without human intervention has high:",
          options: ["Autonomy", "Intelligence", "Strength", "Speed"],
          correctAnswer: "Autonomy",
          explanation: "Autonomy is the ability to act independently."
        },
        {
          id: "q10-25",
          type: "mcq",
          question: "The ability to acquire and apply knowledge and skills is:",
          options: ["Intelligence", "Autonomy", "Perception", "Sensation"],
          correctAnswer: "Intelligence",
          explanation: "Intelligence involves learning and reasoning."
        },
        {
          id: "q10-26",
          type: "mcq",
          question: "Categorizing robots into 'Industrial' and 'Service' is an example of:",
          options: ["Robot Classification", "Robot Architecture", "Robot Ethics", "Robot Programming"],
          correctAnswer: "Robot Classification",
          explanation: "Robots can be classified by their application, environment, or level of autonomy."
        },
        {
          id: "q10-27",
          type: "mcq",
          question: "Path planning requires the robot to have:",
          options: ["Reasoning Capabilities", "Emotional Intelligence", "Social Skills", "Voice Recognition"],
          correctAnswer: "Reasoning Capabilities",
          explanation: "The robot must calculate a route and avoid obstacles, which requires cognitive processing."
        },
        {
          id: "q10-28",
          type: "mcq",
          question: "The chassis or physical structure of a robot is its:",
          options: ["Body", "Brain", "Sensor", "Actuator"],
          correctAnswer: "Body",
          explanation: "The body provides the physical form and support for other components."
        },
        {
          id: "q10-29",
          type: "mcq",
          question: "The factory floor where a robot works is its:",
          options: ["Environment", "Context", "Setting", "Habitat"],
          correctAnswer: "Environment",
          explanation: "The environment dictates the conditions the robot must operate in."
        },
        {
          id: "q10-30",
          type: "mcq",
          question: "A calculator is best described as a:",
          options: ["Tool", "Medium", "Social Actor", "Robot"],
          correctAnswer: "Tool",
          explanation: "A tool increases human capability but doesn't typically have social agency."
        },
        {
          id: "q10-31",
          type: "mcq",
          question: "Virtual Reality (VR) is best described as a:",
          options: ["Medium", "Tool", "Social Actor", "Robot"],
          correctAnswer: "Medium",
          explanation: "A medium provides an experience or environment."
        },
        {
          id: "q10-32",
          type: "mcq",
          question: "Jibo was a robot designed primarily for:",
          options: ["Social Interaction in the Home", "Industrial Manufacturing", "Military Combat", "Deep Sea Exploration"],
          correctAnswer: "Social Interaction in the Home",
          explanation: "Jibo was a 'social robot for the home' that emphasized personality and connection."
        },
        {
          id: "q10-33",
          type: "mcq",
          question: "A pop-up ad that blocks content you are trying to read is an example of:",
          options: ["Interference", "Guidance", "Persuasion", "Assistance"],
          correctAnswer: "Interference",
          explanation: "Interference is a dark pattern that visually confuses or blocks the user."
        },
        {
          id: "q10-34",
          type: "mcq",
          question: "A smart lightbulb that can be controlled via an app is part of the:",
          options: ["Internet of Things (IoT)", "Industrial Revolution", "Social Web", "Dark Web"],
          correctAnswer: "Internet of Things (IoT)",
          explanation: "IoT refers to physical objects embedded with technology to connect and exchange data."
        },
        {
          id: "q10-35",
          type: "mcq",
          question: "The 'Trolley Problem' is a classic example of an:",
          options: ["Ethical Dilemma", "Usability Problem", "Technical Glitch", "Interaction Error"],
          correctAnswer: "Ethical Dilemma",
          explanation: "It presents a difficult choice between two morally challenging options."
        },
        {
          id: "q10-36",
          type: "mcq",
          question: "Clicking 'I Agree' to a privacy policy is intended to represent:",
          options: ["Informed Consent", "Blind Trust", "Forced Action", "Social Contract"],
          correctAnswer: "Informed Consent",
          explanation: "Informed consent means the user understands and agrees to the consequences of their action."
        },
        {
          id: "q10-37",
          type: "mcq",
          question: "Which of the following is NOT a typical component of a robot?",
          options: ["Soul", "Sensors", "Actuators", "Controller"],
          correctAnswer: "Soul",
          explanation: "Robots are machines composed of physical and electronic components."
        },
        {
          id: "q10-38",
          type: "mcq",
          question: "The study of people and robots interacting is called:",
          options: ["HRI (Human-Robot Interaction)", "HCI (Human-Computer Interaction)", "AI (Artificial Intelligence)", "UX (User Experience)"],
          correctAnswer: "HRI (Human-Robot Interaction)",
          explanation: "HRI is a subfield dedicated to understanding and designing interactions between humans and robots."
        }
      ]
    },
    {
      id: "additional-context",
      title: "Additional Context Concepts",
      description: "Supplementary concepts for broader understanding.",
      concepts: [
        {
          id: "gap-minimization",
          term: "Gap Minimization",
          definition: "Reducing the gulfs of execution and evaluation.",
          example: "Better feedback.",
          related: ["Gulfs"]
        },
        {
          id: "primary-stakeholders",
          term: "Primary Stakeholders",
          definition: "People who directly use the system.",
          example: "End users.",
          related: ["Stakeholders"]
        },
        {
          id: "secondary-stakeholders",
          term: "Secondary Stakeholders",
          definition: "People who do not use the system directly but provide input or receive output.",
          example: "Managers receiving reports.",
          related: ["Stakeholders"]
        },
        {
          id: "tertiary-stakeholders",
          term: "Tertiary Stakeholders",
          definition: "People who are affected by the success or failure of the system but not directly involved.",
          example: "Competitors, shareholders.",
          related: ["Stakeholders"]
        },
        {
          id: "sensors-vs-perception",
          term: "Sensors vs Perception",
          definition: "Sensors gather raw data; perception is the interpretation of that data.",
          example: "Camera (sensor) vs Object Recognition (perception).",
          related: ["Robotics"]
        }
      ],
      questions: [
        {
          id: "q-add-1",
          type: "mcq",
          question: "Who are primary stakeholders?",
          options: ["Direct users", "Managers", "Shareholders", "Developers"],
          correctAnswer: "Direct users",
          explanation: "Primary stakeholders are the people who actually use the system."
        },
        {
          id: "q-add-2",
          type: "mcq",
          question: "What is the difference between sensors and perception?",
          options: ["Sensors interpret, perception gathers", "Sensors gather, perception interprets", "They are the same", "Robots only have sensors"],
          correctAnswer: "Sensors gather, perception interprets",
          explanation: "Sensors are the hardware that collects data, while perception is the software process that makes sense of that data."
        },
        {
          id: "q-add-3",
          type: "mcq",
          question: "Good design aims to reduce the gulfs of:",
          options: ["Execution and Evaluation", "Time and Space", "Cost and Benefit", "Input and Output"],
          correctAnswer: "Execution and Evaluation",
          explanation: "Minimizing these gaps makes the system easier to use and understand."
        },
        {
          id: "q-add-4",
          type: "mcq",
          question: "A manager who reads a report generated by the system but doesn't use the system directly is a:",
          options: ["Secondary Stakeholder", "Primary Stakeholder", "Tertiary Stakeholder", "Developer"],
          correctAnswer: "Secondary Stakeholder",
          explanation: "Secondary stakeholders interact with the output of the system."
        },
        {
          id: "q-add-5",
          type: "mcq",
          question: "Competitors are examples of:",
          options: ["Tertiary Stakeholders", "Primary Stakeholders", "Secondary Stakeholders", "Users"],
          correctAnswer: "Tertiary Stakeholders",
          explanation: "They are affected by the system's success but don't interact with it directly."
        },
        {
          id: "q-mixed-1",
          type: "mcq",
          question: "Which Gestalt principle is most useful for creating clear Visual Hierarchy?",
          options: ["Proximity", "Closure", "Continuity", "Common Fate"],
          correctAnswer: "Proximity",
          explanation: "Grouping related items using proximity helps establish structure and hierarchy."
        },
        {
          id: "q-mixed-2",
          type: "mcq",
          question: "Using a 'Trash Can' icon (Skeuomorphism) helps primarily with:",
          options: ["Recognition rather than Recall", "Recall rather than Recognition", "Fitts's Law", "Hick's Law"],
          correctAnswer: "Recognition rather than Recall",
          explanation: "Familiar metaphors make it easier to recognize the function without memorizing commands."
        },
        {
          id: "q-mixed-3",
          type: "mcq",
          question: "A 'Wizard of Oz' experiment is best suited for testing which stage of fidelity?",
          options: ["Low to Medium Fidelity", "High Fidelity", "Final Production", "Beta Testing"],
          correctAnswer: "Low to Medium Fidelity",
          explanation: "It allows testing complex interactions early before building the actual system."
        },
        {
          id: "q-mixed-4",
          type: "mcq",
          question: "Dark Patterns often exploit which type of cognition?",
          options: ["Experiential (System 1)", "Reflective (System 2)", "Logical", "Analytical"],
          correctAnswer: "Experiential (System 1)",
          explanation: "They rely on fast, automatic processing to trick users into clicking things they didn't intend to."
        },
        {
          id: "q-mixed-5",
          type: "mcq",
          question: "How does Fitts's Law relate to the Gulf of Execution?",
          options: ["It helps bridge it by making actions easier to perform", "It widens it", "It is unrelated", "It relates to the Gulf of Evaluation"],
          correctAnswer: "It helps bridge it by making actions easier to perform",
          explanation: "Optimizing target size and distance makes the physical execution of the action faster and easier."
        }
      ]
    }
  ]
};
