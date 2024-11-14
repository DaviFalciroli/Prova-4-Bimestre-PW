const btnGenerate = document.getElementById("generate-pdf");

function savePdf() {
    const content = document.querySelector("#content");



    const style = document.createElement("style");
    style.innerHTML = `
        @media (max-width:768px) {
            .section,
            .section_ambiente,
            .section_partida {
                flex-direction: column;
                padding: 1.5rem;
            }

            .section_ambiente img,
            .section_partida img {
                max-width: 250px;
                height: auto;
            }

            .section p,
            .section_ambiente p,
            .section_partida p {
                font-size: 12px;
            }

            .header p {
                font-size: 10px;
                text-align: center;
            }

            .logo {
                max-width: 20px;
            }
        }
    `;
    document.head.appendChild(style);

    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };



    html2pdf().set(options).from(content).save();
}

btnGenerate.addEventListener("click", () => {
    alert('Baixando PDF');
    savePdf();
});
