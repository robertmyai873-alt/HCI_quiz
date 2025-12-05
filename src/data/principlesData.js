import { Layout, Palette, MousePointer, Type, Eye, MessageSquare, Bell, List, AlertCircle, CheckCircle, Search, Trash2, RotateCcw, Save, Menu, MoreHorizontal, Link, Image, ShoppingCart, Calendar, Folder } from 'lucide-react';

export const principlesData = [
    {
        category: "Gestalt Principles",
        description: "How humans group similar elements, recognize patterns, and simplify complex images.",
        items: [
            {
                id: "gestalt-1",
                title: "Proximity: Form Grouping",
                description: "Group form fields by category (personal info, contact details) to show relationship.",
                type: "layout-grouping",
                visualData: {
                    groups: [
                        { title: "Personal Info", items: ["Name", "DOB"] },
                        { title: "Contact", items: ["Email", "Phone"] }
                    ]
                }
            },
            {
                id: "gestalt-2",
                title: "Proximity: Navigation Clusters",
                description: "Cluster related navigation items (Account → Profile, Settings, Logout).",
                type: "layout-nav",
                visualData: {
                    items: ["Dashboard", "Messages", "|", "Profile", "Settings", "Logout"]
                }
            },
            {
                id: "gestalt-3",
                title: "Proximity: Product Bundle",
                description: "Bundle product information (price, rating, availability) together.",
                type: "product-card",
                visualData: { name: "Headphones", price: "$99", rating: 4.5, stock: "In Stock" }
            },
            {
                id: "gestalt-4",
                title: "Proximity: Social Icons",
                description: "Group social media icons close together.",
                type: "icon-group",
                visualData: { icons: ["twitter", "facebook", "instagram"] }
            },
            {
                id: "gestalt-5",
                title: "Proximity: Footer Sections",
                description: "Organize footer links in logical sections.",
                type: "footer-layout",
                visualData: {
                    sections: [
                        { title: "Company", links: ["About", "Careers"] },
                        { title: "Support", links: ["Help", "Contact"] }
                    ]
                }
            },
            {
                id: "gestalt-6",
                title: "Similarity: Icon Style",
                description: "Use same icon style for all social media links.",
                type: "icon-style",
                visualData: { style: "outline", icons: ["twitter", "facebook", "instagram"] }
            },
            {
                id: "gestalt-7",
                title: "Similarity: Button Styling",
                description: "Consistent button styling across all forms.",
                type: "button-style",
                visualData: { buttons: ["Submit", "Save", "Update"] }
            },
            {
                id: "gestalt-8",
                title: "Similarity: Card Layouts",
                description: "Uniform card layouts for product listings.",
                type: "card-grid",
                visualData: { count: 3 }
            },
            {
                id: "gestalt-9",
                title: "Similarity: Status Colors",
                description: "Same color coding for status indicators (green=success, red=error).",
                type: "status-indicators",
                visualData: { statuses: ["success", "error", "success"] }
            },
            {
                id: "gestalt-10",
                title: "Similarity: Spacing",
                description: "Identical spacing between all blog post previews.",
                type: "spacing-list",
                visualData: { count: 3 }
            },
            {
                id: "gestalt-11",
                title: "Closure: Progress",
                description: "Progress indicators with incomplete circles that fill up.",
                type: "progress-circular",
                visualData: { value: 75 }
            },
            {
                id: "gestalt-12",
                title: "Closure: Loader",
                description: "Loading animations with partial shapes.",
                type: "loader-partial"
            },
            {
                id: "gestalt-13",
                title: "Closure: Hamburger Menu",
                description: "Hamburger menu icon (three lines suggesting a menu).",
                type: "icon-meaning",
                visualData: { icon: "menu" }
            },
            {
                id: "gestalt-14",
                title: "Closure: Timeline",
                description: "Dotted lines connecting timeline events.",
                type: "timeline-dotted"
            },
            {
                id: "gestalt-15",
                title: "Closure: Carousel",
                description: "Half-visible carousel items suggesting more content.",
                type: "carousel-hint"
            }
        ]
    },
    {
        category: "Visual Hierarchy",
        description: "Arranging elements to show their order of importance.",
        items: [
            {
                id: "hierarchy-1",
                title: "Size: Typography",
                description: "Large hero headlines, medium subheadings, small body text.",
                type: "typography-scale"
            },
            {
                id: "hierarchy-2",
                title: "Size: Pricing",
                description: "Oversized pricing numbers on subscription plans.",
                type: "pricing-card",
                visualData: { price: "$29", period: "/mo" }
            },
            {
                id: "hierarchy-3",
                title: "Size: Buttons",
                description: "Big call-to-action buttons, smaller secondary buttons.",
                type: "button-hierarchy"
            },
            {
                id: "hierarchy-4",
                title: "Size: Images",
                description: "Large product images, smaller thumbnail variants.",
                type: "image-hierarchy"
            },
            {
                id: "hierarchy-5",
                title: "Color: Action Buttons",
                description: "Bright orange 'Buy Now' buttons, gray 'Learn More' buttons.",
                type: "button-color",
                visualData: { primary: "orange", secondary: "gray" }
            },
            {
                id: "hierarchy-6",
                title: "Color: Messages",
                description: "Red error messages, green success messages.",
                type: "message-colors"
            },
            {
                id: "hierarchy-7",
                title: "Color: Links",
                description: "Blue links, black regular text.",
                type: "text-links"
            },
            {
                id: "hierarchy-8",
                title: "Color: Features",
                description: "Purple premium features, gray standard features.",
                type: "feature-list"
            },
            {
                id: "hierarchy-9",
                title: "Contrast: Header",
                description: "Dark header text on light background.",
                type: "contrast-header"
            },
            {
                id: "hierarchy-10",
                title: "Contrast: Hero",
                description: "White text on dark hero sections.",
                type: "contrast-hero"
            },
            {
                id: "hierarchy-11",
                title: "Contrast: Borders",
                description: "High contrast borders around important content boxes.",
                type: "border-contrast"
            },
            {
                id: "hierarchy-12",
                title: "Contrast: Bold Text",
                description: "Bold text for key terms in paragraphs.",
                type: "text-bolding"
            }
        ]
    },
    {
        category: "Nielsen's Heuristics",
        description: "General principles for interaction design.",
        items: [
            {
                id: "heuristic-1",
                title: "Visibility: Upload",
                description: "Upload progress bars with percentages.",
                type: "progress-bar",
                visualData: { value: 45 }
            },
            {
                id: "heuristic-2",
                title: "Visibility: Processing",
                description: "'Currently processing your order' messages.",
                type: "status-message",
                visualData: { text: "Processing order...", state: "loading" }
            },
            {
                id: "heuristic-3",
                title: "Visibility: Char Count",
                description: "Real-time character count in text areas.",
                type: "input-char-count"
            },
            {
                id: "heuristic-4",
                title: "Visibility: Connection",
                description: "Connection status indicators (online/offline).",
                type: "status-indicator",
                visualData: { status: "online" }
            },
            {
                id: "heuristic-5",
                title: "Visibility: Badge",
                description: "Shopping cart item count badge.",
                type: "icon-badge",
                visualData: { icon: "cart", count: 3 }
            },
            {
                id: "heuristic-6",
                title: "Match: Calendar",
                description: "Calendar widget for date selection.",
                type: "ui-metaphor",
                visualData: { component: "calendar" }
            },
            {
                id: "heuristic-7",
                title: "Match: Cart",
                description: "Shopping cart metaphor for purchases.",
                type: "ui-metaphor",
                visualData: { component: "cart" }
            },
            {
                id: "heuristic-8",
                title: "Match: Folders",
                description: "Folder icons for file organization.",
                type: "ui-metaphor",
                visualData: { component: "folder" }
            },
            {
                id: "heuristic-9",
                title: "Match: Trash",
                description: "Trash can icon for delete actions.",
                type: "ui-metaphor",
                visualData: { component: "trash" }
            },
            {
                id: "heuristic-10",
                title: "Match: Search",
                description: "Magnifying glass for search functionality.",
                type: "ui-metaphor",
                visualData: { component: "search" }
            },
            {
                id: "heuristic-11",
                title: "Control: Undo",
                description: "Undo button for deleted items.",
                type: "action-undo"
            },
            {
                id: "heuristic-12",
                title: "Control: Cancel",
                description: "'Cancel' option in all dialog boxes.",
                type: "dialog-cancel"
            },
            {
                id: "heuristic-13",
                title: "Control: Back",
                description: "Back button functionality.",
                type: "nav-back"
            },
            {
                id: "heuristic-14",
                title: "Control: Edit",
                description: "Edit profile without page refresh.",
                type: "inline-edit"
            },
            {
                id: "heuristic-15",
                title: "Control: Save Draft",
                description: "Save draft functionality for long forms.",
                type: "form-save"
            }
        ]
    },
    {
        category: "Feedback Principles",
        description: "Providing information to the user about the results of actions.",
        items: [
            {
                id: "feedback-1",
                title: "Immediate: Hover",
                description: "Button color change on hover.",
                type: "interaction-hover"
            },
            {
                id: "feedback-2",
                title: "Immediate: Focus",
                description: "Form field border highlight on focus.",
                type: "interaction-focus"
            },
            {
                id: "feedback-3",
                title: "Immediate: Password",
                description: "Real-time password strength indicator.",
                type: "password-strength"
            },
            {
                id: "feedback-4",
                title: "Immediate: Search",
                description: "Instant search suggestions as you type.",
                type: "search-autocomplete"
            },
            {
                id: "feedback-5",
                title: "Immediate: Preview",
                description: "Live preview of text formatting changes.",
                type: "text-preview"
            },
            {
                id: "feedback-6",
                title: "Multimodal: Message",
                description: "Sound notification + visual popup for messages.",
                type: "notification-toast"
            },
            {
                id: "feedback-7",
                title: "Multimodal: Mobile",
                description: "Vibration + color change for mobile interactions.",
                type: "mobile-feedback"
            },
            {
                id: "feedback-8",
                title: "Multimodal: Updates",
                description: "Email + in-app notification for important updates.",
                type: "notification-multi"
            },
            {
                id: "feedback-9",
                title: "Multimodal: Success",
                description: "Visual + text confirmation for successful actions.",
                type: "success-confirmation"
            },
            {
                id: "feedback-10",
                title: "Multimodal: Error",
                description: "Audio feedback + visual highlight for errors.",
                type: "error-feedback"
            }
        ]
    },
    {
        category: "Additional UX",
        description: "Other important user experience patterns.",
        items: [
            {
                id: "ux-1",
                title: "Recognition: Dropdowns",
                description: "Dropdown menus instead of memorizing commands.",
                type: "input-dropdown"
            },
            {
                id: "ux-2",
                title: "Recognition: Autocomplete",
                description: "Autocomplete for search queries.",
                type: "search-autocomplete"
            },
            {
                id: "ux-3",
                title: "Recognition: Recent",
                description: "Recently viewed items list.",
                type: "recent-items"
            },
            {
                id: "ux-4",
                title: "Recognition: Breadcrumbs",
                description: "Breadcrumb navigation showing current location.",
                type: "nav-breadcrumbs"
            },
            {
                id: "ux-5",
                title: "Prevention: Required",
                description: "Required field indicators before submission.",
                type: "form-required"
            },
            {
                id: "ux-6",
                title: "Prevention: Confirm",
                description: "Confirmation dialogs for irreversible actions.",
                type: "dialog-confirm"
            },
            {
                id: "ux-7",
                title: "Prevention: Format",
                description: "Input format examples (phone: +1-234-567-8900).",
                type: "input-mask"
            },
            {
                id: "ux-8",
                title: "Prevention: Disable",
                description: "Disable submit button until form is valid.",
                type: "form-validation"
            },
            {
                id: "ux-9",
                title: "Consistency: Header/Footer",
                description: "Same header/footer across all pages.",
                type: "layout-consistency"
            },
            {
                id: "ux-10",
                title: "Consistency: Spacing",
                description: "Uniform spacing between all elements.",
                type: "spacing-consistency"
            },
            {
                id: "ux-11",
                title: "Consistency: Terminology",
                description: "Consistent terminology throughout site.",
                type: "text-consistency"
            },
            {
                id: "ux-12",
                title: "Consistency: Icons",
                description: "Standard icon meanings across interface.",
                type: "icon-consistency"
            }
        ]
    }
];
