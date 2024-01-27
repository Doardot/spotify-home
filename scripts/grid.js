const container = document.querySelector(".offer__list-item");


const observer = new ResizeObserver(() => {
    const containerWidth = container.offsetWidth; //element width
    const numColumns = Math.floor(containerWidth / 200); //number of columns based on element width

    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(auto, 1fr))`; //set the number of columns
    //min width auto and max 1fr

    console.log({ container });
    console.log({ numColumns });
});

observer.observe(container);