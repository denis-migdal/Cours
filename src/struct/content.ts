export default [
    {
        name : "R 1-01 Tableur et Reporting",
        sname: "R1-01 Tableur",
        path : "R1-01",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1",
                    "CM2"
                ]

            },
            {
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2"
                ]
            }
        ]
    },
    {
        name : "R 1-02 Bases de Données Relationnelles 1",
        sname: "R1-02 BDR1",
        path : "R1-02",
        children: [
            "CM",
            {
                name: "Slides",
                path: "Slides",
                children: [
                    "CM1",
                    "CM2",
                    "CM3",
                    "CM4"
                ]
            },
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
            }, {
                name: "Cheat Sheet",
                path: "/assets/sql/cheat sheet.svg"
            }
        ]
    },
    {
        name : "R 3-03 Technologies Web",
        sname: "R3-03 Web1",
        path : "R3-03",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1",
                    "CM2",
                    "CM3",
                    "CM4"
                ]
            }, {
                name: "TP",
                path: "TP",
                children: [
                    "TP1",
                    "TP2",
                    "TP3-4"
                ]
            }, {
                name: "Cheat Sheet HTML",
                path: "/assets/web/HTML5/cheat sheet.svg"
            }, {
                name: "Cheat Sheet CSS",
                path: "/assets/web/CSS3/cheat sheet.svg"
            }
        ]
    },
    {
        name : "R 5-06-VCOD Développement Logiciel",
        sname: "R5-06-VCOD Dev Log",
        path : "R5-06-VCOD",
        children: [
            {
                name: "CM",
                path: "CM",
                children: [
                    "CM1"
                ]
            }
        ]
    }
];

export const root_path = ["localhost", "127.0.0.1"].includes(location.hostname) ? "/dist/dev/pages/" : "/Cours/dist/dev/pages/";