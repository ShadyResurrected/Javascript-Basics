// The structured representation of a web page is called DOM, short for Document Object Model. The DOM defines the structure of a page and a way to interact with it. This means it’s a programming interface, or API (Application Programming Interface). JavaScript is the language of choice for interacting with the DOM.

// A web page is a set of nested tags. You can represent a web page in a hierarchical form called a tree. The <html> element sets up your document as HTML and contains two sub-elements, <head> and <body>, which themselves contain several sub-elements.

// Each entity in the tree is called a node. There are two types of nodes:

// Those (in blue here) that correspond to HTML tags like <body> or <p>. These nodes are called element nodes and they can have subnodes, called child nodes or children. Those (in red) that match the textual content of the page. These nodes are called text nodes and do not have children.

// document is an object that has head and body properties which allow access to the <head> and <body> elements of the page

