export const loadScript = function (src: string) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = src;
        script.addEventListener('load', () => {
            this.isLoaded = true;
            resolve(script)
        });
        // Catch any errors while loading the script
        script.addEventListener('error', () => {
            console.warn("error to load the file: " + src);
            resolve();
        });
        document.body.append(script);
    });
};
