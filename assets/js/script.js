const load = async () => {
    let page = 1;
    let limitPage = document.getElementsByClassName("page").length;

    const book = document.getElementById("book");

    book.onclick = async () => {
        alert("Hola linda ¿Como estas? bueno esto es una cartita asi que ira pasando cada 20s por favor leela con atencion y disfrutala");

        var response = confirm("¿Estas lista para iniciar o esperamos?");
        
        if(response) {
            document.getElementById("music").volume = 0.8;
            document.getElementById("music").play();
            await loadNextPage();
        }
    };

    const loadNextPage = async () => {
        const firstPage = document.getElementById(page);
        const nextPage = document.getElementById(page + 1);

        firstPage.classList.toggle('page-passed');

        document.getElementById('video1').play();
        document.getElementById('video2').play();

        setTimeout(() => {
            firstPage.classList.toggle("page-none");
            page += 1;
        }, 4000);

        setTimeout(() => {
            if(nextPage) {
                nextPage.classList.toggle("page-none");
                nextPage.classList.toggle("open-page");
            }
        }, 4000);

        setTimeout(async () => {
            if(page < limitPage) {
                await loadNextPage();
            } else {
                alert("Has llegado hasta el fin :3 espero te haya gustado y fuerza princesa.");
            }
        }, 27000);
    }
}

load();