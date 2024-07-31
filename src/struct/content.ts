export default [
    {
        name : "R 1-02 Bases de Données Relationnelles 1",
        sname: "R1-02 BDR1",
        path : "R1-02",
        children: [
            "CM",
            {
                name: "TP" ,
                path : "TP",
                children: [
                    "TP1",
                    "TP2",
                    "TP3",
                    "TP4",
                    "TP5"
                ]
            }
        ]
    }
];

export const root_path = ["localhost", "127.0.0.1"].includes(location.hostname) ? "/dist/dev/pages/" : "/Cours/dist/dev/pages/";