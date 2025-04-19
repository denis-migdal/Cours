import buildConfigs from "./build/WebpackFramework/index.js";

export default buildConfigs("./src/", "./dist/${version}/",
                            {
                                "@LISS"     : "libs/LISS/V3/",
                                "@TPEngine" : "libs/TPEngine/src/",
                                "@WebSlides": "libs/WebSlides/src/",
                                "@Cours"    : "src/"
                            });