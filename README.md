Hey, this is Adryan Corcione! This project is part of my final projects for Code the Dream's Intro to Programming program.

# Pet Image Fetcher

This project fetches random images of cats and dogs along with their breed information using TheCatAPI and TheDogAPI. The fetched data includes an image of the pet, its breed name, and its temperament.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need a modern web browser to run this project.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pet-image-fetcher.git
    ```
2. Open the project directory:
    ```bash
    cd pet-image-fetcher
    ```
3. Open the `index.html` file in your web browser:
    ```bash
    open index.html
    ```
    or simply double-click the `index.html` file.

### Usage

- When you open the `index.html` file, it will automatically fetch and display a random cat and dog image along with their breed information.
- The cat and dog images, along with their breed names and temperaments, will be displayed in separate containers.

## Code Overview

### HTML Structure

The HTML file includes containers for displaying cat and dog information:
```html
<div id="catContainer"></div>
<div id="dogContainer"></div>