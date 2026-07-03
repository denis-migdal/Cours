import "@TPEngine/TPCorrector";

//TODO:
/*
document.querySelector('#export_csv')!.addEventListener('click', async () => {

    //Odin : NUMERO|NOTE|INFOSJURY.
    if( ansBrowser.rendus === null )
        return;

    const rendus = ansBrowser.rendus;

    const lines = Object.values(rendus.data).map( ({student_id, student_name, rendu}) => {

        let data: string[] = [];
        let count = 0;
        for(let i = 0; i < rendu.nbQuestions; ++i) {
            const answer = rendu.getAnswer(i);
            count += answer.grade ?? 0;
            let comment = answer.comments ?? "";
            if( comment.length )
                comment = `"${comment.replaceAll('"', '""')}"`;
            data.push( (answer.grade ?? 0) + "\t" + (answer.suspicious??"") + "\t" + comment );
        }
        return [student_name, student_id, count, "", ...data].join('\t');
    }).join('\n');

    download( lines , rendus.filename + ".csv", ".csv");
});
*/