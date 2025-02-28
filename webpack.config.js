import buildConfigs from "./build/WebpackFramework/index.js";

export default buildConfigs("./src/", "./dist/${version}/",
                            {
                                "@LISS" : "libs/LISS/V3/",
                                "@Cours": "src/"
                            });