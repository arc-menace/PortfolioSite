<template>
    <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" class="text-highlight">.NET</a>
</template>

<style>
.text-highlight {
    background: linear-gradient(45deg, #512bd4, #e73c7e, #512bd4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    text-decoration: none;
    padding: 0.2em 0.4em;
    border-radius: 0.3em;
    transition: all 0.3s ease;
    position: relative;
    animation: gradientFlow 5s ease infinite;
    margin-left: 0.2em;
    margin-right: 0.2em;
}

.text-highlight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #512bd4, #e73c7e, #512bd4);
    background-size: 200% 200%;
    border-radius: 0.3em;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    animation: gradientFlow 5s ease infinite;
}

.text-highlight:hover {
    color: white;
    -webkit-text-fill-color: white;
}

.text-highlight:hover::before {
    opacity: 1;
}

@keyframes gradientFlow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>